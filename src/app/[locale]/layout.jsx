import { Geist } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    metadataBase: new URL('https://xencoa.com'),
    alternates: {
      canonical: '/',
      languages: {
        'tr': '/tr',
        'en': '/en',
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/images/xencoa-logo.webp', sizes: '32x32', type: 'image/webp' },
        { url: '/images/xencoa-logo.webp', sizes: '16x16', type: 'image/webp' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/images/xencoa-logo.webp' },
        { url: '/images/xencoa-logo.webp', sizes: '180x180', type: 'image/webp' },
      ],
    },
    manifest: '/manifest.json',
    // other: {
    //   'google-site-verification': 'your-google-verification-code-here',
    // },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
