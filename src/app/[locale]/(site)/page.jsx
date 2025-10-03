import Home from "@/components/site/home";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage.meta' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Xencoa' }],
    creator: 'Xencoa',
    publisher: 'Xencoa',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://xencoa.com',
      siteName: 'Xencoa',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        {
          url: '/images/xencoa-logo.webp',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['/images/xencoa-logo.webp'],
      creator: '@xencoa',
    },
    alternates: {
      canonical: 'https://xencoa.com',
      languages: {
        'tr': 'https://xencoa.com/tr',
        'en': 'https://xencoa.com/en',
      },
    },
  };
}

export default function HomePage() {
  return (
    <Home />
  );
}
