import { NextResponse } from "next/server"

export function middleware() {
    // console.log("middleware working");
    return NextResponse.redirect(new URL("/Login-form/Signup", request.url));
}

export const config = {
    matcher:'/Login-form:path*',
};