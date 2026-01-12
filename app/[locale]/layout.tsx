import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";

// Force static export
export const dynamic = 'force-static';

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    title: {
      default: t('title.default'),
      template: t('title.template')
    },
    description: t('description'),
    keywords: [
      "travel agency",
      "luxury travel",
      "personalized trips",
      "travel planning",
      "vacation packages",
      "honeymoon",
      "adventure travel",
    ],
    authors: [{ name: "ExplorAhead" }],
    openGraph: {
      type: "website",
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      siteName: "ExplorAhead",
      title: t('title.default'),
      description: t('description'),
    },
    twitter: {
      card: "summary_large_image",
      title: t('title.default'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'pl': '/pl',
        'x-default': '/en'
      }
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Load messages for this locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                fontFamily: "var(--font-body)",
                background: "var(--color-ocean)",
                color: "var(--color-white)",
                borderRadius: "var(--radius-md)",
              },
              success: {
                iconTheme: {
                  primary: "var(--color-gold)",
                  secondary: "var(--color-ocean)",
                },
              },
              error: {
                iconTheme: {
                  primary: "var(--color-terracotta)",
                  secondary: "var(--color-white)",
                },
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

