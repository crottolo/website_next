import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Add paths that require authentication
const protectedPaths = ["/dashboard"];

// Add paths that should not be accessible when authenticated
const authPaths = ["/signin", "/register"];

// Create the internationalization middleware
const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("session_id");
  const { pathname } = request.nextUrl;

  // Handle authentication redirects
  if (currentUser && authPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!currentUser && protectedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Apply internationalization middleware
  return intlMiddleware(request);
}

// Combine matchers for both authentication and internationalization
export const config = {
  matcher: [
    // Authentication paths
    "/dashboard/:path*",
    "/signin",
    "/register",
    // Internationalization paths
    '/',
    '/(it|en)/:path*'
  ]
} 