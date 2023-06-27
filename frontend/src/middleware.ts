import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  // await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("middleware is running");
  console.log("user from middleware", user);

  // if user is signed in and the current path is / redirect the user to /account
  if ((user && req.nextUrl.pathname === "/login") || (user && req.nextUrl.pathname === "/signup")) {
    return NextResponse.redirect(new URL("/student-dashboard", req.url));
  }

  // if user is not signed in and the current path is not / redirect the user to /
  // if (
  //   (!user && req.nextUrl.pathname !== "/") ||
  //   (!user && req.nextUrl.pathname === "/login") ||
  //   (!user && req.nextUrl.pathname === "/signup")
  // ) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  // if (
  //   (!user && req.nextUrl.pathname !== "/") ||
  //   (!user && req.nextUrl.pathname !== "/login") ||
  //   (!user && req.nextUrl.pathname !== "/signup") ||
  //   (!user && req.nextUrl.pathname !== "/about")
  // ) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  if (!user && req.nextUrl.pathname === "/student-dashboard") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/student-dashboard", "/login", "/signup"],
};
