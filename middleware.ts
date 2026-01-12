import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";

// Create the next-intl middleware for internationalization
export default createIntlMiddleware(routing);

export const config = {
  matcher: [
    // Match all routes except API, static files, and Next.js internals
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ],
};

