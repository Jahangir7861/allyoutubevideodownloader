'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '@/components/Logo';
import { Sparkles, Heart, Shield, FileText, Info, Mail, Scale } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0e0e10] border-t border-white/5 py-14 text-white">
      <div className="w-[92%] md:w-[88%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Info & Author Signature */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3">
              <Logo size="sm" showSubtitle={true} href="/" />
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xs mb-4">
              All YouTube Video Downloader (Allyoutubevideodownloader.com) is the fastest in-memory cloud streaming tool for YouTube creators, editors, and students. Zero server disk storage.
            </p>

            {/* Creator / Developer Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] text-zinc-300 shadow-sm">
              <span>{t('designedBy') || 'Designed & Developed by'}</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 font-syne">
                Jahangir
              </span>
            </div>
          </div>

          {/* Downloaders */}
          <div>
            <div className="text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-3.5 font-syne">
              {t('downloaders') || 'Downloaders'}
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/youtube-video-downloader" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('videoDownloader') || 'Video Downloader'}
                </Link>
              </li>
              <li>
                <Link href="/youtube-shorts-downloader" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('shortsDownloader') || 'Shorts Downloader'}
                </Link>
              </li>
              <li>
                <Link href="/youtube-to-mp3" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('youtubeToMp3') || 'YouTube to MP3'}
                </Link>
              </li>
              <li>
                <Link href="/youtube-thumbnail-downloader" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('thumbnailDownloader') || 'Thumbnail Downloader'}
                </Link>
              </li>
              <li>
                <Link href="/youtube-shorts-thumbnail-downloader" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('shortsThumbnail') || 'Shorts Thumbnail'}
                </Link>
              </li>
              <li>
                <Link href="/how-to-download-youtube-thumbnails" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('thumbnailGuide') || 'Thumbnail Guide'}
                </Link>
              </li>
            </ul>
          </div>

          {/* SEO & Metadata */}
          <div>
            <div className="text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-3.5 font-syne">
              {t('seoMetadata') || 'SEO & Metadata'}
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/youtube-title-generator" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('titleGenerator') || 'Title Generator'}
                </Link>
              </li>
              <li>
                <Link href="/youtube-description-generator" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('descriptionGenerator') || 'Description Generator'}
                </Link>
              </li>
              <li>
                <Link href="/youtube-tag-generator" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('tagGenerator') || 'Tag Generator'}
                </Link>
              </li>
              <li>
                <Link href="/youtube-tag-extractor" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('tagExtractor') || 'Tag Extractor'}
                </Link>
              </li>
              <li>
                <Link href="/youtube-description-extractor" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('descriptionExtractor') || 'Description Extractor'}
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Content & Journal */}
          <div>
            <div className="text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-3.5 font-syne">
              {t('aiContent') || 'AI Content & Journal'}
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/youtube-script-generator" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('scriptGenerator') || 'Script Generator'}
                </Link>
              </li>
              <li>
                <Link href="/youtube-video-summary" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('videoAnalyzer') || 'Video Analyzer'}
                </Link>
              </li>
              <li>
                <Link href="/youtube-transcript-generator" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors">
                  {t('transcriptGenerator') || 'Transcript Generator'}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-red-400 hover:text-red-300 text-xs font-semibold transition-colors flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{t('creatorBlog') || 'Creator Blog (50+ Guides)'}</span>
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-zinc-600 hover:text-zinc-400 text-[11px] transition-colors">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* AdSense Legal & Compliance */}
          <div>
            <div className="text-zinc-400 text-xs font-semibold tracking-widest uppercase mb-3.5 font-syne">
              {t('legalTrust') || 'Legal & Trust'}
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors flex items-center gap-1.5">
                  <Info className="w-3 h-3 text-zinc-500" />
                  <span>{t('aboutUs') || 'About Us'}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-zinc-500" />
                  <span>{t('contactUs') || 'Contact Us'}</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-zinc-500" />
                  <span>{t('privacyPolicy') || 'Privacy Policy'}</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors flex items-center gap-1.5">
                  <FileText className="w-3 h-3 text-zinc-500" />
                  <span>{t('termsOfService') || 'Terms of Service'}</span>
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-zinc-500 hover:text-zinc-200 text-xs transition-colors flex items-center gap-1.5">
                  <Scale className="w-3 h-3 text-zinc-500" />
                  <span>{t('dmcaNotice') || 'DMCA Disclaimer'}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Prominent Signature */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© 2026 All YouTube Video Downloader (Allyoutubevideodownloader.com) — {t('allRightsReserved') || 'All rights reserved.'}</span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="inline-flex items-center gap-1 text-zinc-400">
              {t('designedBy') || 'Designed & Developed by'} <strong className="text-white font-semibold">Jahangir</strong>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              {t('about') || 'About'}
            </Link>
            <Link href="/blog" className="hover:text-red-400 transition-colors">
              {t('blog') || 'Blog'}
            </Link>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              {t('privacyPolicy') || 'Privacy'}
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              {t('termsOfService') || 'Terms'}
            </Link>
            <Link href="/dmca" className="hover:text-zinc-300 transition-colors">
              DMCA
            </Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              {t('contactUs') || 'Contact'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
