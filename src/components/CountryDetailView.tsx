import React, { useState } from 'react';
import {
  ArrowLeft,
  Banknote,
  Calendar,
  ExternalLink,
  Landmark,
  Loader2,
  MapPin,
  MessageCircle,
  Sparkles,
  Utensils,
  Wifi,
} from 'lucide-react';
import { getGoogleMapsUrl, VOYAGO_IMAGES } from '../data/countries';
import { TranslationBundle } from '../i18n/translations';
import { CountryGuide, Language } from '../types/voyago';
import { ResilientImage } from './ResilientImage';

interface CountryDetailViewProps {
  t: TranslationBundle;
  language: Language;
  country: CountryGuide;
  isOnline: boolean;
  onBack: () => void;
  onAskIabn: (country: CountryGuide, prefillQuestion?: string) => void;
}

type DetailTab = 'overview' | 'monuments' | 'food' | 'money';

export const CountryDetailView: React.FC<CountryDetailViewProps> = ({
  t,
  language,
  country,
  isOnline,
  onBack,
  onAskIabn,
}) => {
  const [activeTab, setActiveTab] = useState<DetailTab>('overview');
  const [liveBrief, setLiveBrief] = useState<string>('');
  const [briefLoading, setBriefLoading] = useState(false);
  const [briefError, setBriefError] = useState<string | null>(null);

  const handleGenerateLiveBrief = async () => {
    if (!isOnline) {
      setBriefError(t.iabnOfflineWarning);
      return;
    }

    setBriefLoading(true);
    setBriefError(null);
    try {
      const response = await fetch('/api/iabn/country-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          countryName: country.name.en,
          capital: country.capital.en,
          language,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to load IA BN brief');
      }
      setLiveBrief(data.guide || '');
    } catch (err) {
      setBriefError(err instanceof Error ? err.message : 'Unable to reach IA BN.');
    } finally {
      setBriefLoading(false);
    }
  };

  const tabs: Array<{ id: DetailTab; label: string; icon: React.ReactNode }> = [
    { id: 'overview', label: t.tabOverview, icon: <MapPin className="w-4 h-4" /> },
    { id: 'monuments', label: t.tabMonuments, icon: <Landmark className="w-4 h-4" /> },
    { id: 'food', label: t.tabFood, icon: <Utensils className="w-4 h-4" /> },
    { id: 'money', label: t.tabMoney, icon: <Banknote className="w-4 h-4" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Action Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="min-h-[44px] px-4 py-2 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-stone-800 dark:text-slate-100 text-sm font-medium flex items-center gap-2 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
          <span>{t.backToAtlas}</span>
        </button>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={getGoogleMapsUrl(country.mapsQuery)}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-4 py-2 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white text-sm font-semibold flex items-center gap-2 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>{t.openGoogleMaps}</span>
          </a>

          <button
            type="button"
            onClick={() => onAskIabn(country)}
            className="min-h-[44px] px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.askAboutCountry}</span>
          </button>
        </div>
      </div>

      {/* Country Hero Banner */}
      <section className="relative rounded-3xl overflow-hidden border border-stone-200 dark:border-slate-800 min-h-[260px] sm:min-h-[320px] flex items-end">
        <ResilientImage
          src={country.heroImage}
          alt={country.name[language]}
          fallbackLabel={country.name[language]}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />

        <div className="relative z-10 p-6 sm:p-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-amber-300 mb-2">
              {country.subregion[language]} · {country.capital[language]} · {country.currency.code}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-white flex items-center gap-3 mb-3">
              <span>{country.flag}</span>
              <span>{country.name[language]}</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {country.summary[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Essential Facts Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800">
          <p className="text-xs text-stone-500 dark:text-slate-400 mb-1">{t.capitalLabel}</p>
          <p className="text-base font-semibold text-stone-900 dark:text-white">{country.capital[language]}</p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800">
          <p className="text-xs text-stone-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{t.bestSeasonLabel}</span>
          </p>
          <p className="text-base font-semibold text-stone-900 dark:text-white">{country.bestSeason[language]}</p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800">
          <p className="text-xs text-stone-500 dark:text-slate-400 mb-1">{t.currencyLabel}</p>
          <p className="text-base font-semibold text-stone-900 dark:text-white font-mono-tabular">
            {country.currency.code} ({country.currency.symbol}) · {country.currency.name[language]}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800">
          <p className="text-xs text-stone-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.wifiLabel}</span>
          </p>
          <p className="text-xs text-stone-700 dark:text-slate-300 leading-relaxed">{country.wifiTips[language]}</p>
        </div>
      </section>

      {/* Detail Section Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-stone-200/75 dark:bg-slate-900 border border-stone-200 dark:border-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[42px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-amber-500 text-stone-950 dark:text-slate-950 shadow-sm'
                  : 'text-stone-600 dark:text-slate-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-white">
              {t.majorCitiesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {country.cities.map((city) => (
                <div
                  key={city.name.en}
                  className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-950/60 border border-stone-200/80 dark:border-slate-800 flex flex-col justify-between gap-3"
                >
                  <div>
                    <h3 className="text-base font-semibold text-stone-900 dark:text-white mb-1">
                      {city.name[language]}
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
                      {city.highlight[language]}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href={getGoogleMapsUrl(city.mapsQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[40px] px-3 py-1.5 rounded-xl border border-stone-200 dark:border-slate-700 text-xs font-semibold text-stone-800 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800 inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>{t.openGoogleMaps}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live IA BN 3-Day Deep Brief */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-white">
                  {t.liveBriefTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-slate-400">
                  {t.wifiNotice}
                </p>
              </div>
              <button
                type="button"
                disabled={briefLoading}
                onClick={handleGenerateLiveBrief}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-stone-900 dark:bg-amber-500 text-white dark:text-slate-950 hover:bg-stone-800 dark:hover:bg-amber-400 text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-60 cursor-pointer shrink-0"
              >
                {briefLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                <span>{briefLoading ? t.liveBriefLoading : t.liveBriefButton}</span>
              </button>
            </div>

            {briefError && (
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-sm text-amber-900 dark:text-amber-200">
                {briefError}
              </div>
            )}

            {liveBrief && (
              <div className="p-5 rounded-2xl bg-stone-50 dark:bg-slate-950/70 border border-stone-200 dark:border-slate-800 text-sm text-stone-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                {liveBrief}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'monuments' && (
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-white">
            {t.monumentsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {country.monuments.map((monument) => (
              <article
                key={monument.id}
                className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <ResilientImage
                    src={monument.image}
                    alt={monument.name[language]}
                    fallbackLabel={monument.name[language]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-xs text-amber-300 font-medium">
                      {monument.city} · {monument.era}
                    </p>
                    <h3 className="font-display text-xl font-semibold">{monument.name[language]}</h3>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
                    {monument.description[language]}
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={getGoogleMapsUrl(monument.mapsQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-2 rounded-xl bg-stone-900 dark:bg-amber-500 text-white dark:text-slate-950 text-xs font-semibold inline-flex items-center gap-2 hover:bg-stone-800 dark:hover:bg-amber-400"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.openGoogleMaps}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        onAskIabn(
                          country,
                          language === 'ar'
                            ? `أخبرني عن تاريخ وأوقات زيارة ${monument.name.ar} في ${country.name.ar}`
                            : language === 'fr'
                            ? `Parle-moi de l'histoire et de la visite de ${monument.name.fr} (${country.name.fr})`
                            : `Tell me the history and visitor tips for ${monument.name.en} in ${country.name.en}`
                        )
                      }
                      className="min-h-[44px] px-4 py-2 rounded-xl border border-stone-200 dark:border-slate-700 text-stone-800 dark:text-slate-200 text-xs font-semibold inline-flex items-center gap-2 hover:bg-stone-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{t.askIabnShort}</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'food' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="aspect-[4/3]">
              <ResilientImage
                src={VOYAGO_IMAGES.cuisine}
                alt={t.foodTitle}
                fallbackLabel={t.foodTitle}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-white mb-1">
                {t.foodTitle}
              </h2>
              <p className="text-sm text-stone-600 dark:text-slate-300">{t.foodSubtitle}</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {country.dishes.map((dish) => (
              <div
                key={dish.name.en}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-2"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-white">
                    {dish.name[language]}
                  </h3>
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                    {dish.category[language]}
                  </span>
                </div>
                <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
                  {dish.description[language]}
                </p>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                onAskIabn(
                  country,
                  language === 'ar'
                    ? `ما هي أشهر الأكلات التقليدية وأسعار الطعام في ${country.name.ar}؟`
                    : language === 'fr'
                    ? `Quels plats traditionnels goûter absolument en ${country.name.fr} et à quel prix ?`
                    : `What are the must-try traditional foods, street food, and meal prices in ${country.name.en}?`
                )
              }
              className="w-full min-h-[48px] px-5 py-3 rounded-2xl bg-stone-900 dark:bg-amber-500 text-white dark:text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-stone-800 dark:hover:bg-amber-400 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.askAboutCountry}</span>
            </button>
          </div>
        </div>
      )}

      {activeTab === 'money' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-white">
              {t.moneyTitle}
            </h2>
            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-slate-950/70 border border-stone-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs text-stone-500 dark:text-slate-400">{t.currencyLabel}</p>
                <p className="text-lg font-semibold text-stone-900 dark:text-white">
                  {country.currency.name[language]}
                </p>
              </div>
              <div className="text-end font-mono-tabular">
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{country.currency.code}</p>
                <p className="text-xs text-stone-500 dark:text-slate-400">{country.currency.symbol}</p>
              </div>
            </div>
            <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
              {country.currency.tips[language]}
            </p>
          </div>

          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-white">
              {t.phrasesTitle}
            </h2>
            <div className="divide-y divide-stone-100 dark:divide-slate-800">
              {country.phrases.map((phrase) => (
                <div key={phrase.label.en} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-stone-500 dark:text-slate-400">{phrase.label[language]}</p>
                    <p className="text-base font-semibold text-stone-900 dark:text-white">{phrase.local}</p>
                  </div>
                  {phrase.pronunciation && (
                    <span className="font-mono-tabular text-xs text-stone-500 dark:text-slate-400">
                      {phrase.pronunciation}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
