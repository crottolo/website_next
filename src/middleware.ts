import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Add paths that require authentication
const protectedPaths = ["/dashboard"];

// Add paths that should not be accessible when authenticated
const authPaths = ["/signin", "/register"];

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("session_id");
  const { pathname } = request.nextUrl;

  // Redirect authenticated users trying to access auth pages
  if (currentUser && authPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect unauthenticated users trying to access protected pages
  if (!currentUser && protectedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Correct format for Next.js middleware config
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/dashboard/:path*",
    "/signin",
    "/register"
  ]
} 