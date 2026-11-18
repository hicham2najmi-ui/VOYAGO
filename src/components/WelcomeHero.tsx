import React from 'react';
import { ArrowRight, Compass, Globe, MessageCircle, Moon, Sun, Wifi, WifiOff } from 'lucide-react';
import { TranslationBundle } from '../i18n/translations';
import { Language, ThemeMode } from '../types/voyago';
import { VOYAGO_IMAGES } from '../data/countries';

interface WelcomeHeroProps {
  t: TranslationBundle;
  language: Language;
  onChangeLanguage: (lang: Language) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  isOnline: boolean;
  onStart: () => void;
  onOpenIabn: () => void;
  onQuickCountry: (countryId: string) => void;
}

export const WelcomeHero: React.FC<WelcomeHeroProps> = ({
  t,
  language,
  onChangeLanguage,
  theme,
  onToggleTheme,
  isOnline,
  onStart,
  onOpenIabn,
  onQuickCountry,
}) => {
  const quickHighlights = [
    { id: 'morocco', flag: '🇲🇦', label: language === 'ar' ? 'المغرب' : language === 'fr' ? 'Maroc' : 'Morocco', sub: 'Marrakech · Fes · MAD' },
    { id: 'egypt', flag: '🇪🇬', label: language === 'ar' ? 'مصر' : language === 'fr' ? 'Égypte' : 'Egypt', sub: 'Giza · Luxor · EGP' },
    { id: 'algeria', flag: '🇩🇿', label: language === 'ar' ? 'الجزائر' : language === 'fr' ? 'Algérie' : 'Algeria', sub: 'Casbah · Constantine · DZD' },
    { id: 'europe', flag: '🇪🇺', label: language === 'ar' ? 'كل دول أوروبا' : language === 'fr' ? 'Toute l’Europe' : 'All Europe', sub: '45 Countries · EUR' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-white">
      {/* Full-bleed atmospheric background image */}
      <div className="absolute inset-0">
        <img
          src={VOYAGO_IMAGES.hero}
          alt="VOYAGO Coastal Horizon"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/45" />
      </div>

      {/* Top controls */}
      <header className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 pt-5 pb-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 shrink-0">
          <Compass className="w-6 h-6 text-amber-400" />
          <span className="font-display text-xl font-bold tracking-tight whitespace-nowrap">
            {t.brand}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center bg-slate-900/75 backdrop-blur-md border border-white/15 rounded-xl p-1">
            {(['en', 'fr', 'ar'] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onChangeLanguage(lang)}
                className={`min-h-[36px] px-2.5 sm:px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  language === lang
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'fr' ? 'FR' : 'AR'}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? t.lightMode : t.darkMode}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-slate-900/75 backdrop-blur-md border border-white/15 text-slate-100 hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Hero Centerpiece */}
      <main className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 py-10 sm:py-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-amber-300/95 mb-4">
            {t.heroKicker}
          </p>

          <h1
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-white mb-5"
            style={{ textWrap: 'balance' }}
          >
            {t.heroTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl mb-8">
            {t.heroSubtitle}
          </p>

          {/* Primary Background CTA: START WITH VOYAGO */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <button
              type="button"
              onClick={onStart}
              className="min-h-[52px] px-7 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-bold text-sm sm:text-base tracking-wide flex items-center gap-3 shadow-lg shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>{t.startButton}</span>
              <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>

            <button
              type="button"
              onClick={onOpenIabn}
              className="min-h-[52px] px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base flex items-center gap-2.5 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 text-amber-300" />
              <span>{t.navIabn}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
            {isOnline ? (
              <Wifi className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <WifiOff className="w-4 h-4 text-amber-400 shrink-0" />
            )}
            <span>{t.wifiNotice}</span>
          </div>
        </div>
      </main>

      {/* Bottom quick-entry destination strip */}
      <section className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {quickHighlights.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onQuickCountry(item.id)}
              className="text-start min-h-[68px] p-3.5 rounded-2xl bg-slate-900/75 hover:bg-slate-800/85 backdrop-blur-md border border-white/12 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-sm sm:text-base font-semibold text-white flex items-center gap-2 truncate">
                  <span>{item.flag}</span>
                  <span className="truncate">{item.label}</span>
                </span>
                <Globe className="w-4 h-4 text-amber-400/80 group-hover:text-amber-300 shrink-0" />
              </div>
              <p className="text-xs text-slate-300 truncate">{item.sub}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
