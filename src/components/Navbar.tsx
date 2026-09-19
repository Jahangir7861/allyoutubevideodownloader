'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Globe, Menu, X, Sparkles, Video, BarChart3, Search, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES } from '@/lib/i18n';
import Logo from '@/components/Logo';

const MENU_GROUPS = [
  {
    key: 'aiContent',
    defaultLabel: 'AI Content Engine',
    badge: 'Pro',
    icon: Sparkles,
    tools: [
      { name: 'Script Generator', slug: 'youtube-script-generator', desc: 'Clone viral script structures' },
      { name: 'Script Extractor', slug: 'youtube-script-generator', desc: 'Extract script from any video' },
      { name: 'Video Analyzer', slug: 'youtube-video-summary', desc: 'Deep structural analysis' },
      { name: 'Transcript Generator', slug: 'youtube-transcript-generator', desc: 'Auto-generate full transcript' },
      { name: 'Subtitle Downloader', slug: 'youtube-subtitle-downloader', desc: 'Download subtitles in any language' },
      { name: 'Video Summary', slug: 'youtube-video-summary', desc: 'Full AI summary of any video' },
    ],
  },
  {
    key: 'seoMetadata',
    defaultLabel: 'SEO & Metadata',
    badge: 'Free',
    icon: Search,
    tools: [
      { name: 'Title Generator', slug: 'youtube-title-generator', desc: 'AI-optimized video titles' },
      { name: 'Description Generator', slug: 'youtube-description-generator', desc: 'SEO-rich descriptions' },
      { name: 'Tag Generator', slug: 'youtube-tag-generator', desc: 'Relevant tags in seconds' },
      { name: 'Tag Extractor', slug: 'youtube-tag-extractor', desc: "See any video's tags" },
      { name: 'Description Extractor', slug: 'youtube-description-extractor', desc: "Pull any video's description" },
    ],
  },
  {
    key: 'downloaders',
    defaultLabel: 'Downloaders',
    badge: 'Free',
    icon: Video,
    tools: [
      { name: 'Video Downloader', slug: 'youtube-video-downloader', desc: 'Download 4K, 1080p, MP4 or WebM' },
      { name: 'Shorts Downloader', slug: 'youtube-shorts-downloader', desc: 'Download any YouTube Short' },
      { name: 'YouTube to MP3', slug: 'youtube-to-mp3', desc: 'Convert YouTube videos to MP3' },
      { name: 'Thumbnail Downloader', slug: 'youtube-thumbnail-downloader', desc: 'Full-res 1080p thumbnails' },
      { name: 'Shorts Thumbnail', slug: 'youtube-shorts-thumbnail-downloader', desc: 'Extract Shorts cover art' },
      { name: 'Thumbnail Guide', slug: 'how-to-download-youtube-thumbnails', desc: 'How to save thumbnails' },
      { name: 'Profile Downloader', slug: 'youtube-profile-downloader', desc: 'Channel profile picture' },
      { name: 'Banner Downloader', slug: 'youtube-banner-downloader', desc: 'Channel banner image' },
    ],
  },
  {
    key: 'analytics',
    defaultLabel: 'Analytics',
    badge: 'Free',
    icon: BarChart3,
    tools: [
      { name: 'Monetization Checker', slug: 'youtube-monetization-checker', desc: 'Check channel eligibility & earnings' },
      { name: 'Channel ID Finder', slug: 'youtube-channel-id-finder', desc: 'Find any channel ID (UC...)' },
      { name: 'Playlist Length', slug: 'youtube-playlist-length-calculator', desc: 'Total duration & speed times' },
      { name: 'Engagement Calculator', slug: 'youtube-engagement-calculator', desc: 'ER rate from views & reactions' },
      { name: 'Timestamp Generator', slug: 'youtube-timestamp-link-generator', desc: 'Link to specific video moments' },
    ],
  },
];

export default function Navbar() {
  const { lang, setLang, currentLangObj, t } = useLanguage();
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubGroup, setMobileSubGroup] = useState<number | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on page route change
  useEffect(() => {
    setOpenGroup(null);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-[#0e0e10]/95 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="w-[92%] md:w-[88%] mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Logo size="sm" showSubtitle={true} href="/" />

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {MENU_GROUPS.map((group, idx) => (
            <div key={group.key} className="relative">
              <button
                onClick={() => {
                  setOpenGroup(openGroup === idx ? null : idx);
                  setLangDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  openGroup === idx ? 'text-white bg-white/10' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{t(group.key) || group.defaultLabel}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openGroup === idx ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {openGroup === idx && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#141418] border border-white/10 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-white/5 flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      {t(group.key) || group.defaultLabel}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${group.badge === 'Pro' ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                      {group.badge}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    {group.tools.map((item) => (
                      <Link
                        key={item.name}
                        href={`/${item.slug}`}
                        className="block px-3 py-2 rounded-lg hover:bg-white/5 transition-colors group/item"
                      >
                        <div className="text-sm font-medium text-zinc-200 group-hover/item:text-red-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-zinc-500 truncate">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link href="/#pricing" className="px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            {t('pricing')}
          </Link>
          <Link href="/blog" className="px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            {t('blog') || 'Blog'}
          </Link>
          <Link href="/about" className="px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
            {t('about') || 'About'}
          </Link>
        </div>

        {/* Right CTA / Language Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Multi-Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setOpenGroup(null);
              }}
              className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white border border-white/10 hover:border-white/25 bg-white/[0.04] px-3 py-1.5 rounded-lg transition-all"
            >
              <span className="text-sm">{currentLangObj.flag}</span>
              <span className="font-medium">{currentLangObj.nativeName}</span>
              <ChevronDown className={`w-3 h-3 text-zinc-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#141418] border border-white/10 rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1 text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                  Select Language
                </div>
                <div className="space-y-0.5 mt-1 max-h-64 overflow-y-auto">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                        lang === l.code ? 'bg-red-500 text-white font-semibold' : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{l.flag}</span>
                        <span>{l.nativeName}</span>
                        <span className="text-[10px] text-zinc-400">({l.name})</span>
                      </div>
                      {lang === l.code && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/youtube-video-downloader"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg shadow-md shadow-red-500/25 transition-all hover:shadow-red-500/40"
          >
            <span>{t('startFree')}</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141418] border-b border-white/10 px-4 py-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-4">
            {MENU_GROUPS.map((group, idx) => (
              <div key={group.key} className="border-b border-white/5 pb-3 last:border-0">
                <button
                  onClick={() => setMobileSubGroup(mobileSubGroup === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-2 text-left text-zinc-200 font-semibold text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span>{t(group.key) || group.defaultLabel}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${group.badge === 'Pro' ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                      {group.badge}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${mobileSubGroup === idx ? 'rotate-180' : ''}`} />
                </button>

                {mobileSubGroup === idx && (
                  <div className="grid grid-cols-1 gap-1 pl-3 pt-2">
                    {group.tools.map((item) => (
                      <Link
                        key={item.name}
                        href={`/${item.slug}`}
                        className="py-2 px-2 text-xs text-zinc-400 hover:text-white hover:bg-white/5 rounded-md flex flex-col"
                      >
                        <span className="text-zinc-200 font-medium">{item.name}</span>
                        <span className="text-zinc-500 text-[11px]">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/#pricing" className="block py-2 text-sm font-semibold text-zinc-200 hover:text-white">
              {t('pricing')}
            </Link>

            <Link href="/blog" className="block py-2 text-sm font-semibold text-zinc-200 hover:text-white">
              {t('blog') || 'Blog'}
            </Link>

            <Link href="/about" className="block py-2 text-sm font-semibold text-zinc-200 hover:text-white">
              {t('about') || 'About'}
            </Link>

            <div className="pt-2">
              <Link
                href="/youtube-video-downloader"
                className="w-full block text-center py-2.5 bg-red-500 hover:bg-red-400 text-white font-semibold rounded-lg text-sm transition-colors"
              >
                {t('startFree')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
