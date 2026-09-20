import type { Metadata } from 'next';
import Script from 'next/script';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { LanguageProvider } from '@/context/LanguageContext';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://allyoutubevideodownloader.com'),
  title: {
    default: 'All YouTube Video Downloader (Allyoutubevideodownloader.com)',
    template: '%s | All YouTube Video Downloader (Allyoutubevideodownloader.com)',
  },
  description:
    'All YouTube Video Downloader (Allyoutubevideodownloader.com) is the premier free online tool to download YouTube videos in 4K, 1080p Full HD, Shorts, and 320kbps MP3 audio. High-speed in-memory cloud streaming with zero storage.',
  keywords: [
    'allyoutubevideodownloader',
    'allyoutubevideodownloader.com',
    'all youtube video downloader',
    'youtube video downloader',
    'download youtube video',
    'youtube to mp3',
    'youtube shorts downloader',
    'youtube 4k downloader',
    'youtube thumbnail downloader hd',
    'youtube tags extractor',
    'free youtube downloader online',
  ],
  authors: [{ name: 'Jahangir', url: 'https://allyoutubevideodownloader.com/about' }],
  creator: 'Jahangir',
  publisher: 'All YouTube Video Downloader (Allyoutubevideodownloader.com)',
  alternates: {
    canonical: 'https://allyoutubevideodownloader.com',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
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
    locale: 'en_US',
    url: 'https://allyoutubevideodownloader.com',
    siteName: 'All YouTube Video Downloader - Allyoutubevideodownloader.com',
    title: 'All YouTube Video Downloader in 4K & MP3',
    description:
      'Download 4K/1080p videos, extract audio to 320kbps MP3, grab HD thumbnails, and optimize YouTube SEO.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'All YouTube Video Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All YouTube Video Downloader',
    description: 'Download any YouTube video in 4K, 1080p, or MP3 — free, fast, and no software required.',
    images: ['/opengraph-image'],
  },
  other: {
    'google-adsense-account': 'ca-pub-0000000000000000',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'All YouTube Video Downloader',
      alternateName: 'Allyoutubevideodownloader.com',
      url: 'https://allyoutubevideodownloader.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://allyoutubevideodownloader.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'All YouTube Video Downloader',
      url: 'https://allyoutubevideodownloader.com',
      logo: 'https://allyoutubevideodownloader.com/icon.svg',
      founder: {
        '@type': 'Person',
        name: 'Jahangir',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@allyoutubevideodownloader.com',
        contactType: 'customer service',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'All YouTube Video Downloader - Allyoutubevideodownloader.com',
      url: 'https://allyoutubevideodownloader.com',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Fast, free online YouTube video downloader, audio extractor, and creator SEO toolkit.',
    },
  ];

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google AdSense script placeholder ready for publisher verification */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf9f7] text-stone-900 antialiased font-dm">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
