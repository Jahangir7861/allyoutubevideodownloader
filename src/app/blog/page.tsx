import React from 'react';
import { Metadata } from 'next';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Creator Journal & YouTube Video Guides | All YouTube Video Downloader',
  description:
    'Explore 45+ actionable YouTube guides, algorithm strategies, 4K downloading tips, audio extraction workflows, and viral growth hacks for modern creators.',
  alternates: {
    canonical: 'https://allyoutubevideodownloader.com/blog',
  },
  openGraph: {
    title: 'Creator Journal & YouTube Video Guides | All YouTube Video Downloader',
    description:
      'Data-backed breakdowns on YouTube algorithms, high-retention script engineering, CTR thumbnail psychology, and video workflows.',
    url: 'https://allyoutubevideodownloader.com/blog',
    siteName: 'All YouTube Video Downloader - Allyoutubevideodownloader.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creator Journal & YouTube Video Guides | All YouTube Video Downloader',
    description:
      'Explore actionable YouTube guides, algorithm strategies, 4K downloading tips, audio extraction workflows, and viral growth hacks.',
  },
};

export default function BlogPage() {
  return <BlogIndexClient />;
}
