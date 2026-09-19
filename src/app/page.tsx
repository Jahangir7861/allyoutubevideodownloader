'use client';

import React from 'react';
import Link from 'next/link';
import ToolInterface from '@/components/ToolInterface';
import FaqAccordion from '@/components/FaqAccordion';
import { TOOLS_DATA } from '@/lib/tools-data';
import { Sparkles, Video, Search, BarChart3, ArrowRight, Shield, Zap, Star, Flame, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedTool } from '@/lib/tool-translations';

export default function HomePage() {
  const { t, lang } = useLanguage();
  const rawVideoDownloader = TOOLS_DATA['youtube-video-downloader'];
  const videoDownloader = getLocalizedTool(rawVideoDownloader, lang);

  const homeFaqs = [
    {
      q: t('homeFaq1Q'),
      a: t('homeFaq1A'),
    },
    {
      q: t('homeFaq2Q'),
      a: t('homeFaq2A'),
    },
    {
      q: t('homeFaq3Q'),
      a: t('homeFaq3A'),
    },
    {
      q: t('homeFaq4Q'),
      a: t('homeFaq4A'),
    },
    {
      q: t('homeFaq5Q'),
      a: t('homeFaq5A'),
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Dark obsidian) */}
      <section className="bg-[#0e0e10] py-20 md:py-28 text-center relative overflow-hidden border-b border-white/5">
        {/* Subtle radial glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/10 blur-[140px] pointer-events-none -z-0" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[250px] bg-rose-500/5 blur-[100px] pointer-events-none -z-0" />

        <div className="w-[92%] md:w-[88%] max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-red-500/20 rounded-full px-4 py-1.5 text-xs text-red-400 mb-6 bg-red-500/[0.06] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>{t('heroBadge')}</span>
          </div>

          {/* Headlines */}
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-white mb-5 font-syne">
            {t('heroTitle1')} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-red-400 via-rose-300 to-red-500 bg-clip-text text-transparent">
              {t('heroTitle2')}
            </span>
          </h1>

          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {t('heroSubtitle')}
          </p>

          {/* Interactive Hero Downloader / Tool Interface */}
          <ToolInterface tool={videoDownloader} />

          {/* Quick stats row */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-extrabold text-white font-syne">150K+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mt-1">{t('creatorsCount')}</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-extrabold text-white font-syne">50+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mt-1">{t('languagesCount')}</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-extrabold text-white font-syne">&lt; 2s</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mt-1">{t('avgSpeed')}</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-extrabold text-white font-syne">20+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mt-1">{t('coreToolsCount')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS (Cream #faf9f7) */}
      <section className="bg-[#faf9f7] py-20 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-3">{t('howItWorks')}</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne">
              {t('fromUrlToResults')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative hover:border-red-500/30 hover:shadow-md transition-all">
              <div className="font-extrabold text-5xl mb-4 select-none text-stone-200 font-syne">01</div>
              <h3 className="font-bold text-stone-900 text-lg mb-2 font-syne">{t('step1Title')}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {t('step1Desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative hover:border-red-500/30 hover:shadow-md transition-all">
              <div className="font-extrabold text-5xl mb-4 select-none text-stone-200 font-syne">02</div>
              <h3 className="font-bold text-stone-900 text-lg mb-2 font-syne">{t('step2Title')}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {t('step2Desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative hover:border-red-500/30 hover:shadow-md transition-all">
              <div className="font-extrabold text-5xl mb-4 select-none text-stone-200 font-syne">03</div>
              <h3 className="font-bold text-stone-900 text-lg mb-2 font-syne">{t('step3Title')}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {t('step3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES GRID (White #ffffff) */}
      <section className="bg-white py-20 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-3">{t('features')}</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne">
              {t('whatYouGet')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-stone-100 rounded-2xl p-7 bg-stone-50 hover:bg-white hover:border-stone-200 hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-500 bg-red-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                {t('feat1Tag')}
              </span>
              <h3 className="font-bold text-stone-900 text-base mb-2 font-syne">{t('feat1Title')}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {t('feat1Desc')}
              </p>
            </div>

            <div className="border border-stone-100 rounded-2xl p-7 bg-stone-50 hover:bg-white hover:border-stone-200 hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                {t('feat2Tag')}
              </span>
              <h3 className="font-bold text-stone-900 text-base mb-2 font-syne">{t('feat2Title')}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {t('feat2Desc')}
              </p>
            </div>

            <div className="border border-stone-100 rounded-2xl p-7 bg-stone-50 hover:bg-white hover:border-stone-200 hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                {t('feat3Tag')}
              </span>
              <h3 className="font-bold text-stone-900 text-base mb-2 font-syne">{t('feat3Title')}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {t('feat3Desc')}
              </p>
            </div>

            <div className="border border-stone-100 rounded-2xl p-7 bg-stone-50 hover:bg-white hover:border-stone-200 hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                {t('feat4Tag')}
              </span>
              <h3 className="font-bold text-stone-900 text-base mb-2 font-syne">{t('feat4Title')}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {t('feat4Desc')}
              </p>
            </div>

            <div className="border border-stone-100 rounded-2xl p-7 bg-stone-50 hover:bg-white hover:border-stone-200 hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                {t('feat5Tag')}
              </span>
              <h3 className="font-bold text-stone-900 text-base mb-2 font-syne">{t('feat5Title')}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {t('feat5Desc')}
              </p>
            </div>

            <div className="border border-stone-100 rounded-2xl p-7 bg-stone-50 hover:bg-white hover:border-stone-200 hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                {t('feat6Tag')}
              </span>
              <h3 className="font-bold text-stone-900 text-base mb-2 font-syne">{t('feat6Title')}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {t('feat6Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ALL TOOLS DIRECTORY GRID (Cream #faf9f7) */}
      <section id="tools" className="bg-[#faf9f7] py-20 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-3">{t('allTools')}</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne">
              {t('allToolsSubtitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1: Downloaders */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                    <Video className="w-4 h-4 text-red-500" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base font-syne">{t('downloaders')}</h3>
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: t('videoDownloader') || 'Video Downloader', slug: 'youtube-video-downloader' },
                    { name: t('shortsDownloader') || 'Shorts Downloader', slug: 'youtube-shorts-downloader' },
                    { name: t('youtubeToMp3') || 'YouTube to MP3', slug: 'youtube-to-mp3' },
                    { name: t('thumbnailDownloader') || 'Thumbnail Downloader', slug: 'youtube-thumbnail-downloader' },
                    { name: t('shortsThumbnail') || 'Shorts Thumbnail', slug: 'youtube-shorts-thumbnail-downloader' },
                    { name: t('thumbnailGuide') || 'Thumbnail Guide', slug: 'how-to-download-youtube-thumbnails' },
                    { name: t('profileDownloader') || 'Profile Downloader', slug: 'youtube-profile-downloader' },
                    { name: t('bannerDownloader') || 'Banner Downloader', slug: 'youtube-banner-downloader' },
                  ].map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="block p-2 rounded-lg hover:bg-stone-50 text-xs text-stone-700 hover:text-red-500 font-medium transition-colors"
                    >
                      {item.name} →
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/youtube-video-downloader"
                className="mt-6 text-xs font-bold text-red-500 hover:text-red-600 flex items-center gap-1 pt-3 border-t border-stone-100"
              >
                <span>{t('browseDownloaders') || 'Browse Downloaders'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Column 2: SEO & Metadata */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Search className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base font-syne">{t('seoMetadata')}</h3>
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: t('titleGenerator') || 'Title Generator', slug: 'youtube-title-generator' },
                    { name: t('descriptionGenerator') || 'Description Generator', slug: 'youtube-description-generator' },
                    { name: t('tagGenerator') || 'Tag Generator', slug: 'youtube-tag-generator' },
                    { name: t('tagExtractor') || 'Tag Extractor', slug: 'youtube-tag-extractor' },
                    { name: t('descriptionExtractor') || 'Description Extractor', slug: 'youtube-description-extractor' },
                  ].map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="block p-2 rounded-lg hover:bg-stone-50 text-xs text-stone-700 hover:text-emerald-600 font-medium transition-colors"
                    >
                      {item.name} →
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/youtube-tag-extractor"
                className="mt-6 text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 pt-3 border-t border-stone-100"
              >
                <span>{t('exploreSeo') || 'Explore SEO Tools'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Column 3: AI Content Engine */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base font-syne">{t('aiContent')}</h3>
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: t('scriptGenerator') || 'Script Generator', slug: 'youtube-script-generator' },
                    { name: t('videoAnalyzer') || 'Video Analyzer', slug: 'youtube-video-summary' },
                    { name: t('transcriptGenerator') || 'Transcript Generator', slug: 'youtube-transcript-generator' },
                    { name: t('subtitleDownloader') || 'Subtitle Downloader', slug: 'youtube-subtitle-downloader' },
                    { name: t('creatorBlog') || 'Creator Blog', slug: 'blog' },
                  ].map((item) => (
                    <Link
                      key={item.slug}
                      href={item.slug === 'blog' ? '/blog' : `/${item.slug}`}
                      className="block p-2 rounded-lg hover:bg-stone-50 text-xs text-stone-700 hover:text-purple-600 font-medium transition-colors"
                    >
                      {item.name} →
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/youtube-script-generator"
                className="mt-6 text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 pt-3 border-t border-stone-100"
              >
                <span>{t('tryAiScripts') || 'Try AI Scripts'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Column 4: Analytics */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base font-syne">{t('analytics')}</h3>
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: t('monetizationChecker') || 'Monetization Checker', slug: 'youtube-monetization-checker' },
                    { name: t('channelIdFinder') || 'Channel ID Finder', slug: 'youtube-channel-id-finder' },
                    { name: t('playlistLength') || 'Playlist Length', slug: 'youtube-playlist-length-calculator' },
                    { name: t('engagementCalculator') || 'Engagement Calculator', slug: 'youtube-engagement-calculator' },
                    { name: t('timestampLinkGenerator') || 'Timestamp Link Generator', slug: 'youtube-timestamp-link-generator' },
                  ].map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="block p-2 rounded-lg hover:bg-stone-50 text-xs text-stone-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {item.name} →
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/youtube-monetization-checker"
                className="mt-6 text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 pt-3 border-t border-stone-100"
              >
                <span>{t('checkAnalytics') || 'Check Channel Analytics'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS (White #ffffff) */}
      <section className="bg-white py-20 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-3">{t('testimonials')}</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne">
              {t('creatorsLove')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                {t('test1Quote')}
              </p>
              <div>
                <div className="font-bold text-stone-900 text-sm font-syne">{t('test1Author')}</div>
                <div className="text-xs text-stone-500">{t('test1Role')}</div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                {t('test2Quote')}
              </p>
              <div>
                <div className="font-bold text-stone-900 text-sm font-syne">{t('test2Author')}</div>
                <div className="text-xs text-stone-500">{t('test2Role')}</div>
              </div>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                {t('test3Quote')}
              </p>
              <div>
                <div className="font-bold text-stone-900 text-sm font-syne">{t('test3Author')}</div>
                <div className="text-xs text-stone-500">{t('test3Role')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION (Cream #faf9f7) */}
      <section id="pricing" className="bg-[#faf9f7] py-20 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-3">{t('pricing')}</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne mb-2">
              {t('pricingTitle')}
            </h2>
            <p className="text-stone-500 text-sm">{t('pricingSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Tier */}
            <div className="bg-white border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-stone-900 text-lg font-syne">{t('freePlan')}</h3>
                  <span className="text-[11px] font-semibold bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full">
                    {t('noSignup')}
                  </span>
                </div>
                <div className="text-4xl font-extrabold text-stone-900 font-syne mb-6">$0</div>
                <ul className="space-y-3 text-xs text-stone-600 mb-8">
                  <li className="flex items-center gap-2">{t('freeTier1')}</li>
                  <li className="flex items-center gap-2">{t('freeTier2')}</li>
                  <li className="flex items-center gap-2">{t('freeTier3')}</li>
                  <li className="flex items-center gap-2">{t('freeTier4')}</li>
                </ul>
              </div>
              <Link
                href="/youtube-video-downloader"
                className="w-full text-center py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-800 text-xs font-semibold transition-colors"
              >
                {t('browseFreeTools')}
              </Link>
            </div>

            {/* Pro Tier (Featured) */}
            <div className="bg-[#0e0e10] border-2 border-red-500 rounded-2xl p-7 flex flex-col justify-between shadow-xl relative text-white">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-rose-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                {t('mostPopular')}
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-white text-lg font-syne">{t('proPlan')}</h3>
                </div>
                <div className="text-4xl font-extrabold text-white font-syne mb-6">
                  $9 <span className="text-sm font-normal text-zinc-400">/mo</span>
                </div>
                <ul className="space-y-3 text-xs text-zinc-300 mb-8">
                  <li className="flex items-center gap-2 text-red-400 font-semibold">{t('proTier1')}</li>
                  <li className="flex items-center gap-2">{t('proTier2')}</li>
                  <li className="flex items-center gap-2">{t('proTier3')}</li>
                  <li className="flex items-center gap-2">{t('proTier4')}</li>
                  <li className="flex items-center gap-2">{t('proTier5')}</li>
                  <li className="flex items-center gap-2">{t('proTier6')}</li>
                </ul>
              </div>
              <Link
                href="/youtube-script-generator"
                className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-semibold shadow-lg shadow-red-500/30 transition-all"
              >
                {t('getPro')}
              </Link>
            </div>

            {/* Agency Tier */}
            <div className="bg-white border border-stone-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-stone-900 text-lg font-syne">{t('agencyPlan')}</h3>
                  <span className="text-[11px] font-semibold bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full">
                    Advanced
                  </span>
                </div>
                <div className="text-4xl font-extrabold text-stone-900 font-syne mb-1">
                  $49 <span className="text-sm font-normal text-stone-500">/mo</span>
                </div>
                <p className="text-stone-400 text-[11px] mb-6">{t('agencySub')}</p>
                <ul className="space-y-3 text-xs text-stone-600 mb-8">
                  <li className="flex items-center gap-2 font-semibold">{t('agencyTier1')}</li>
                  <li className="flex items-center gap-2">{t('agencyTier2')}</li>
                  <li className="flex items-center gap-2">{t('agencyTier3')}</li>
                  <li className="flex items-center gap-2">{t('agencyTier4')}</li>
                  <li className="flex items-center gap-2">{t('agencyTier5')}</li>
                  <li className="flex items-center gap-2">{t('agencyTier6')}</li>
                </ul>
              </div>
              <Link
                href="/youtube-script-generator"
                className="w-full text-center py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-800 text-xs font-semibold transition-colors"
              >
                {t('getAgency')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (White #ffffff) */}
      <section className="bg-white py-20 border-b border-stone-200">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-3">{t('faq')}</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-stone-900 font-syne mb-2">
              {t('frequentlyAsked')}
            </h2>
            <p className="text-stone-500 text-sm">{t('faqSub')}</p>
          </div>

          <FaqAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* 8. SEO EDITORIAL CONTENT BLOCK (Cream #faf9f7) */}
      <section className="bg-[#faf9f7] py-20">
        <div className="w-[92%] md:w-[88%] mx-auto max-w-4xl">
          <h2 className="font-extrabold text-2xl md:text-3xl text-stone-900 mb-5 font-syne">
            {t('editorialTitle')}
          </h2>
          <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
            <p>{t('editorialP1')}</p>
            <p>{t('editorialP2')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
