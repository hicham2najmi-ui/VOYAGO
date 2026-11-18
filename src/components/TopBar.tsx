import React from 'react';
import { Compass, Landmark, MessageCircle, Settings, Globe } from 'lucide-react';
import { TranslationBundle } from '../i18n/translations';
import { AppSection } from '../types/voyago';

interface TopBarProps {
  t: TranslationBundle;
  activeSection: AppSection;
  onSelectSection: (section: AppSection) => void;
  onGoWelcome: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  t,
  activeSection,
  onSelectSection,
  onGoWelcome,
}) => {
  return (
    <>
      {/* Desktop & Tablet 3-Zone Top Bar */}
      <header className="sticky top-0 z-30 border-b border-stone-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={onGoWelcome}
            className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-stone-900 dark:text-white whitespace-nowrap shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Compass className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <span>{t.brand}</span>
          </button>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button
              type="button"
              onClick={() => onSelectSection('explore')}
              className={`py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer border-b-2 ${
                activeSection === 'explore'
                  ? 'border-amber-500 text-stone-950 dark:text-white'
                  : 'border-transparent text-stone-600 dark:text-slate-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              {t.navExplore}
            </button>
            <button
              type="button"
              onClick={() => onSelectSection('monuments')}
              className={`py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer border-b-2 ${
                activeSection === 'monuments'
                  ? 'border-amber-500 text-stone-950 dark:text-white'
                  : 'border-transparent text-stone-600 dark:text-slate-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              {t.navMonuments}
            </button>
            <button
              type="button"
              onClick={() => onSelectSection('settings')}
              className={`py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer border-b-2 ${
                activeSection === 'settings'
                  ? 'border-amber-500 text-stone-950 dark:text-white'
                  : 'border-transparent text-stone-600 dark:text-slate-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              {t.navSettings}
            </button>
            <button
              type="button"
              onClick={onGoWelcome}
              className="py-2 border-b-2 border-transparent text-stone-600 dark:text-slate-300 hover:text-stone-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.backToWelcome}
            </button>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => onSelectSection('iabn')}
              className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeSection === 'iabn'
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-stone-900 dark:bg-amber-500 text-white dark:text-slate-950 hover:bg-stone-800 dark:hover:bg-amber-400'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.askIabnShort}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Thumb-Zone Bar (compact height <= 15% mobile viewport) */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-stone-200 dark:border-slate-800"
      >
        <div className="grid grid-cols-4 h-16">
          <button
            type="button"
            onClick={() => onSelectSection('explore')}
            className={`min-h-[44px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
              activeSection === 'explore'
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-stone-500 dark:text-slate-400'
            }`}
          >
            <Globe className="w-5 h-5" />
            <span className="truncate max-w-[76px]">{t.navExplore}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectSection('monuments')}
            className={`min-h-[44px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
              activeSection === 'monuments'
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-stone-500 dark:text-slate-400'
            }`}
          >
            <Landmark className="w-5 h-5" />
            <span className="truncate max-w-[76px]">{t.navMonuments}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectSection('iabn')}
            className={`min-h-[44px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
              activeSection === 'iabn'
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-stone-500 dark:text-slate-400'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="truncate max-w-[76px]">{t.askIabnShort}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectSection('settings')}
            className={`min-h-[44px] flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
              activeSection === 'settings'
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-stone-500 dark:text-slate-400'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="truncate max-w-[76px]">{t.navSettings}</span>
          </button>
        </div>
      </nav>
    </>
  );
};
