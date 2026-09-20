import React from 'react';
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | All YouTube Video Downloader - Allyoutubevideodownloader.com',
  description:
    'Get in touch with All YouTube Video Downloader support. Submit feedback, bug reports, feature requests, or DMCA compliance questions. 24-48 hour response guarantee.',
  alternates: {
    canonical: 'https://allyoutubevideodownloader.com/contact',
  },
  openGraph: {
    title: 'Contact Us | All YouTube Video Downloader',
    description: 'Reach our creator support team for assistance, inquiries, and developer feedback.',
    url: 'https://allyoutubevideodownloader.com/contact',
    siteName: 'All YouTube Video Downloader - Allyoutubevideodownloader.com',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
