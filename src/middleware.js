// Middleware - is primarily used for authentication and error handling 
//              while redirection is focused on transferring users from one
//              URL to another.

import { NextResponse } from "next/server"

export function middleware(request) {
    return NextResponse.redirect(new URL("/Login-form/Signup", request.url));
}

export const config = {
    matcher:'/Login-form:path*',
};