'use server';

import { cookies } from 'next/headers';

const API_URL = process.env.ODOO_API_URL;


export interface User {
  id: number;
  name: string;
  username: string;
  image_url: string;
  image_width: number;
  image_height: number;
  partner_id: number;
  database: string;
  is_system: boolean;
  is_admin: boolean;
  user_context: {
    lang: string;
    tz: string;
    uid: number;
  };
  db: string;
  server_version: string;
  server_version_info: [number, number, number, string, number, string];
  partner_display_name: string;
  company_id: number;
  "web.base.url": string;
  active_ids_limit: number;
  max_file_upload_size: number;
  currencies: {
    [key: string]: {
      symbol: string;
      position: string;
      digits: number[];
    };
  };
  user_companies: {
    current_company: number;
    allowed_companies: {
      [key: string]: {
        id: number;
        name: string;
        sequence: number;
      };
    };
  };
  display_switch_company_menu: boolean;
  user_id: number[];
  max_time_between_keys_in_ms: number;
  notification_type: string;
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
      // console.log('data.result', data.result);
      return {
        id: data.result.uid,
        name: data.result.name,
        username: data.result.username,
        partner_id: data.result.partner_id,
        image_url: await getUserImage(data.result.uid),
        image_width: 128,
        image_height: 128,
        database: data.result.db,
        is_system: data.result.is_system,
        is_admin: data.result.is_admin,
        user_context: data.result.user_context,
        db: data.result.db,
        server_version: data.result.server_version,
        server_version_info: data.result.server_version_info,
        partner_display_name: data.result.partner_display_name,
        company_id: data.result.company_id,
        "web.base.url": data.result["web.base.url"],
        active_ids_limit: data.result.active_ids_limit,
        max_file_upload_size: data.result.max_file_upload_size,
        currencies: data.result.currencies,
        user_companies: data.result.user_companies,
        display_switch_company_menu: data.result.display_switch_company_menu,
        user_id: data.result.user_id,
        max_time_between_keys_in_ms: data.result.max_time_between_keys_in_ms,
        notification_type: data.result.notification_type,
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
    console.log('responseData', responseData);
    if (responseData.error) {
      throw new Error(responseData.error.data.message || 'Login failed');
    }

    if (responseData.result && responseData.result.uid) {
      const user: User = {
        id: responseData.result.uid,
        name: responseData.result.name,
        username: responseData.result.username,
        partner_id: responseData.result.partner_id,
        image_url: await getUserImage(responseData.result.uid),
        image_width: 128,
        image_height: 128,
        database: database,
        is_system: responseData.result.is_system,
        is_admin: responseData.result.is_admin,
        user_context: responseData.result.user_context,
        db: responseData.result.db,
        server_version: responseData.result.server_version,
        server_version_info: responseData.result.server_version_info,
        partner_display_name: responseData.result.partner_display_name,
        company_id: responseData.result.company_id,
        "web.base.url": responseData.result["web.base.url"],
        active_ids_limit: responseData.result.active_ids_limit,
        max_file_upload_size: responseData.result.max_file_upload_size,
        currencies: responseData.result.currencies,
        user_companies: responseData.result.user_companies,
        display_switch_company_menu: responseData.result.display_switch_company_menu,
        user_id: responseData.result.user_id,
        max_time_between_keys_in_ms: responseData.result.max_time_between_keys_in_ms,
        notification_type: responseData.result.notification_type,
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

/**
 * Clear the session and remove cookies
 */
export async function clearSession(): Promise<void> {
  try {
    const cookieStore = await cookies();
    await cookieStore.delete('session_id');
  } catch (error) {
    console.error("Error clearing session:", error);
  }
}

/**
 * Get URL for user image
 * @param userId User ID
 * @returns URL for the user image
 */
export async function getUserImageUrl(userId: number): Promise<string> {
  return `${API_URL}/web/image?model=res.users&id=${userId}&field=image_128`;
}

/**
 * Get user image with proper authentication
 * @param userId User ID
 * @returns Base64 encoded image data
 */
export async function getUserImage(userId: number): Promise<string> {
  try {
    const cookieStore = await cookies();
    const sessionId = await cookieStore.get('session_id');

    if (!sessionId) {
      throw new Error('No session found');
    }

    const response = await fetch(`${API_URL}/web/image?model=res.users&id=${userId}&field=image_128`, {
      method: 'GET',
      headers: {
        'Cookie': `session_id=${sessionId.value}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');
    const mimeType = blob.type || 'image/png';
    
    return `data:${mimeType};base64,${base64}`;
  } catch (error) {
    console.error('Error fetching user image:', error);
    return '';
  }
} 