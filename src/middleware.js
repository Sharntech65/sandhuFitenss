import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");

  if (!token?.value) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"], // Protect the dashboard and its subroutes
};
