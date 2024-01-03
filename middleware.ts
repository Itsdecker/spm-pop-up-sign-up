import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const allowedUrls = ['/', '/prices', '/onboarding'];

  if (allowedUrls.includes(req.nextUrl.pathname)) { // req.nextUrl.pathname = current URL asked
    return res // I stop and I enter the page
  }

  const supabase = createMiddlewareClient({ req, res });
  // create an instance of supabase everytime middleware is called
  // createMiddlewareClient takes care of the token / cookies 

  const {
    data: {
      session
    }
  } = await supabase.auth.getSession();
  // here we call our supabase instance and we ask if there is a session
  // what's a session? It's like a place where we store the token

  if (!session) {
    // if there is no session, we enter this condition
    // return is blocking you in this condition
    // of course, you need to have a login page in your project!
    return NextResponse.rewrite(new URL('/login', req.url))
  }

  // there's a token, you can go to the page requested
  return res
};

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}