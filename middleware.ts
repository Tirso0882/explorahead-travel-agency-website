import { routing } from "@/lib/i18n/routing";
import createIntlMiddleware from "next-intl/middleware";
import { type NextRequest } from "next/server";

// Create the next-intl middleware for internationalization
const intlMiddleware = createIntlMiddleware(routing);

// Content Security Policy directives
const cspDirectives = {
  "default-src": ["'self'"],
  "script-src": [
    "'self'",
    "'unsafe-inline'", // Required for Next.js
    "'unsafe-eval'", // Required for development
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://*.sentry.io",
  ],
  "style-src": [
    "'self'",
    "'unsafe-inline'", // Required for Tailwind/CSS-in-JS
    "https://fonts.googleapis.com",
  ],
  "font-src": ["'self'", "https://fonts.gstatic.com", "data:"],
  "img-src": [
    "'self'",
    "data:",
    "blob:",
    "https://images.unsplash.com",
    "https://www.google-analytics.com",
    "https://*.googleusercontent.com",
  ],
  "media-src": ["'self'", "blob:"],
  "connect-src": [
    "'self'",
    "https://www.google-analytics.com",
    "https://analytics.google.com",
    "https://*.sentry.io",
    "https://formspree.io",
    "https://vitals.vercel-insights.com",
  ],
  "frame-src": ["'self'", "https://www.google.com"],
  "frame-ancestors": ["'none'"],
  "form-action": ["'self'", "https://formspree.io"],
  "base-uri": ["'self'"],
  "object-src": ["'none'"],
  "upgrade-insecure-requests": [],
};

// Build CSP string from directives
function buildCspHeader(): string {
  return Object.entries(cspDirectives)
    .map(([directive, values]) => {
      if (values.length === 0) return directive;
      return `${directive} ${values.join(" ")}`;
    })
    .join("; ");
}

// Security headers configuration
const securityHeaders = {
  // Prevent clickjacking attacks
  "X-Frame-Options": "DENY",
  // Prevent MIME type sniffing
  "X-Content-Type-Options": "nosniff",
  // Enable XSS filter in older browsers
  "X-XSS-Protection": "1; mode=block",
  // Control referrer information
  "Referrer-Policy": "strict-origin-when-cross-origin",
  // Enforce HTTPS (Vercel handles this, but good to be explicit)
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  // Disable various browser features for security
  "Permissions-Policy": [
    "camera=()",
    "microphone=()",
    "geolocation=()",
    "interest-cohort=()", // Opt out of FLoC
  ].join(", "),
  // Content Security Policy
  "Content-Security-Policy": buildCspHeader(),
};

export default async function middleware(request: NextRequest) {
  // Run the next-intl middleware first
  const response = await intlMiddleware(request);

  // Add security headers to the response
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Add Cross-Origin headers for better security
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Embedder-Policy", "credentialless");

  return response;
}

export const config = {
  matcher: [
    // Match all routes except API, static files, and Next.js internals
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
