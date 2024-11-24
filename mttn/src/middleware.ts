import { NextResponse } from 'next/server';
import { auth } from "./auth";
import NextAuth from 'next-auth';

export default async function middleware(request: any) {
    const { nextURL } = request;
    const session = await auth();
    const isAuthenticated = !!session?.user
    console.log(isAuthenticated, nextURL.pathname);

    const reqUrl = new URL(request.url);
    if (!isAuthenticated && (reqUrl.pathname !== '/' && reqUrl.pathname !== '/login' && reqUrl.pathname !== '/signup')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

// middleware automatically applied
export const config = {
    matcher: [
        "/dashboard",
        "/flashcardSet",
        "/settings",
        "/changeSettings",
        "/changePassword",
        "/createNewSet",
    ]
}