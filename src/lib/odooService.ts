'use server';

import { cookies } from 'next/headers';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface User {
  id: number;
  name: string;
  username: string;
  image_url: string;
  partner_id: number;
  database: string;
}

export interface SessionInfo {
  uid: number;
  name: string;
  username: string;
  partner_id: number;
  database: string;
}

/**
 * Check if the session is still valid
 * @returns Promise with session information
 */
export async function checkSession(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const sessionId = await cookieStore.get('session_id');

    if (!sessionId) {
      return null;
    }

    const response = await fetch(`${API_URL}/web/session/get_session_info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `session_id=${sessionId.value}`,
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "call",
        params: {},
      }),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    
    if (data.result && data.result.uid) {
      return {
        id: data.result.uid,
        name: data.result.name,
        username: data.result.username,
        partner_id: data.result.partner_id,
        image_url: `${API_URL}/web/image?model=res.users&id=${data.result.uid}&field=image_128`,
        database: data.result.db,
      };
    }

    return null;
  } catch (error) {
    console.error("Session check error:", error);
    return null;
  }
}

/**
 * Get the list of available databases from Odoo server
 */
async function getDatabaseList(): Promise<string[]> {
  try {
    const response = await fetch(`${API_URL}/web/database/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "call",
        params: {},
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get database list: ${response.status}`);
    }

    const data = await response.json();
    if (!data.result || !Array.isArray(data.result)) {
      throw new Error('Invalid database list response');
    }

    return data.result;
  } catch (error) {
    console.error("Error getting database list:", error);
    throw new Error('Unable to connect to Odoo server');
  }
}

/**
 * Get the first available database
 */
async function getFirstDatabase(): Promise<string> {
  const databases = await getDatabaseList();
  if (!databases || databases.length === 0) {
    throw new Error("No database available");
  }
  return databases[0];
}

/**
 * Login to Odoo
 */
export async function login(login: string, password: string): Promise<{ sessionId: string | null, user: User | null }> {
  try {
    const database = await getFirstDatabase();
    
    const payload = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        db: database,
        login,
        password,
      },
    };

    const response = await fetch(`${API_URL}/web/session/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Authentication failed: ${response.status}`);
    }

    const setCookie = response.headers.get("Set-Cookie");
    let sessionId = null;

    if (setCookie) {
      const sessionIdMatch = setCookie.match(/session_id=([^;]+)/);
      if (sessionIdMatch) {
        sessionId = sessionIdMatch[1];
        const cookieStore = await cookies();
        await cookieStore.set('session_id', sessionId, {
          path: '/',
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax'
        });
      }
    }

    const responseData = await response.json();

    if (responseData.error) {
      throw new Error(responseData.error.data.message || 'Login failed');
    }

    if (responseData.result && responseData.result.uid) {
      const user: User = {
        id: responseData.result.uid,
        name: responseData.result.name,
        username: responseData.result.username,
        partner_id: responseData.result.partner_id,
        image_url: `${API_URL}/web/image?model=res.users&id=${responseData.result.uid}&field=image_128`,
        database: database,
      };
      return { sessionId, user };
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    console.error('Login error:', error);
    if (error instanceof Error) {
      throw new Error(`Login failed: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred during login');
    }
  }
}

/**
 * Logout from Odoo
 */
export async function logout(sessionId: string): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const currentSessionId = (await cookieStore.get('session_id'))?.value || sessionId;

    const response = await fetch(`${API_URL}/web/session/destroy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `session_id=${currentSessionId}`,
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "call",
        params: {},
      }),
    });

    if (!response.ok) {
      return false;
    }

    await cookieStore.delete('session_id');
    const data = await response.json();
    return !data.error;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
} 