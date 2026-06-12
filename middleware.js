// middleware.js

import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("MIDDLEWARE:", request.nextUrl.pathname);

  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};
