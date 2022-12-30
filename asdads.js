import { NextResponse } from "next/server";
import { root } from "./utils/consts";
const publicPages = ["/login", "/"];
export async function middleware(req, ev) {
  if (publicPages.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }
  const token = req.headers.get("credentials");
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
    // return NextResponse.next();
  }
}
