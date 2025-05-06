import { clerkMiddleware } from '@clerk/nextjs/server';

const clerk_middleware = clerkMiddleware();

export default clerk_middleware;

export const config = {
  matcher: [
    // Protect all routes except for static files, Next.js API, and the public folder
    '/((?!_next/static|_next/image|favicon.ico|api|public).*)',
  ],
}; 