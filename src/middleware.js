import { NextResponse } from "next/server"

export function middleware(request) {
    return NextResponse.redirect(new URL("/Login-form/Signup", request.url));
}

export const config = {
    matcher:'/Login-form:path*',
};