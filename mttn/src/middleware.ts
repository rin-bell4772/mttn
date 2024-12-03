import { NextResponse } from 'next/server';
import { authConfig } from "./auth.config";
import NextAuth from 'next-auth';

const { auth } = NextAuth(authConfig); 

export default async function middleware(request: any) {
    const { nextURL } = request;
    const session = await auth();
    const isAuthenticated = !!session?.user
    //console.log(isAuthenticated, nextURL.pathname);

    const reqUrl = new URL(request.url);
    if (!isAuthenticated && (reqUrl.pathname !== '/' && reqUrl.pathname !== '/login' && reqUrl.pathname !== '/signup')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

// middleware automatically applied
export const config = {
    matcher: [
        "/login",
        "/dashboard",
        "/flashcardSet",
        "/settings",
        "/changeSettings",
        "/changePassword",
        "/createNewSet",
    ]
}