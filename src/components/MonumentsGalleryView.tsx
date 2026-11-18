import React, { useMemo, useState } from 'react';
import { ExternalLink, MessageCircle, Search, X } from 'lucide-react';
import { getGoogleMapsUrl } from '../data/countries';
import { TranslationBundle } from '../i18n/translations';
import { ContinentFilter, CountryGuide, Language } from '../types/voyago';
import { ResilientImage } from './ResilientImage';

interface MonumentsGalleryViewProps {
  t: TranslationBundle;
  language: Language;
  countries: CountryGuide[];
  onOpenCountry: (country: CountryGuide) => void;
  onAskIabnAboutMonument: (country: CountryGuide, monumentName: string) => void;
}

export const MonumentsGalleryView: React.FC<MonumentsGalleryViewProps> = ({
  t,
  language,
  countries,
  onOpenCountry,
  onAskIabnAboutMonument,
}) => {
  const [query, setQuery] = useState('');
  const [continentFilter, setContinentFilter] = useState<ContinentFilter>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredMonuments = useMemo(() => {
    const items = countries
      .filter((country) => {
        if (continentFilter === 'all') return true;
        if (continentFilter === 'featured') return Boolean(country.featured);
        return country.continent === continentFilter;
      })
      .flatMap((country) =>
        country.monuments.map((monument) => ({
          country,
          monument,
        }))
      );

    const q = query.trim().toLowerCase();
    if (!q) return items;

    return items.filter(({ country, monument }) => {
      const hay = `${monument.name.en} ${monument.name.fr} ${monument.name.ar} ${monument.era} ${monument.city} ${monument.description[language]} ${country.name.en} ${country.name.fr} ${country.name.ar}`.toLowerCase();
      return hay.includes(q);
    });
  }, [countries, continentFilter, query, language]);

  const filters: Array<{ key: ContinentFilter; label: string }> = [
    { key: 'all', label: t.filterAll },
    { key: 'featured', label: t.filterFeatured },
    { key: 'europe', label: t.filterEurope },
    { key: 'africa', label: t.filterAfrica },
    { key: 'americas', label: t.filterAmericas },
    { key: 'asia', label: t.filterAsia },
    { key: 'oceania', label: t.filterOceania },
  ];

  const isFiltered = query.trim().length > 0 || continentFilter !== 'all';
  const visibleMonuments =
    showAll || isFiltered ? filteredMonuments : filteredMonuments.slice(0, 72);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-white mb-2">
            {t.monumentsGalleryTitle}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 max-w-2xl">
            {t.monumentsGallerySubtitle}
          </p>
        </div>

        <div className="relative w-full lg:w-80">
          <Search
            className={`w-4 h-4 text-stone-400 absolute top-1/2 -translate-y-1/2 ${
              language === 'ar' ? 'right-3.5' : 'left-3.5'
            }`}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className={`w-full min-h-[44px] rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 text-sm text-stone-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/60 ${
              language === 'ar' ? 'pr-10 pl-10' : 'pl-10 pr-10'
            }`}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className={`absolute top-1/2 -translate-y-1/2 min-h-[36px] min-w-[36px] flex items-center justify-center text-stone-400 hover:text-stone-700 dark:hover:text-slate-200 ${
                language === 'ar' ? 'left-1.5' : 'right-1.5'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Continent Filter Tabs */}
      <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1">
        <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-stone-200/75 dark:bg-slate-900 border border-stone-200 dark:border-slate-800">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => {
                setContinentFilter(item.key);
                setShowAll(false);
              }}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                continentFilter === item.key
                  ? 'bg-white dark:bg-amber-500 text-stone-950 dark:text-slate-950 shadow-sm'
                  : 'text-stone-600 dark:text-slate-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <span className="font-mono-tabular text-xs text-stone-500 dark:text-slate-400 px-2 whitespace-nowrap shrink-0">
          {filteredMonuments.length}
        </span>
      </div>

      {filteredMonuments.length === 0 ? (
        <div className="rounded-3xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-10 text-center">
          <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-white mb-2">
            {t.noResultsTitle}
          </h3>
          <p className="text-sm text-stone-600 dark:text-slate-400 mb-5">
            {t.noResultsDesc}
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setContinentFilter('all');
            }}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-sm font-semibold hover:bg-amber-400 transition-colors cursor-pointer"
          >
            {t.resetFilters}
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleMonuments.map(({ country, monument }) => (
              <article
                key={monument.id}
                className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <ResilientImage
                    src={monument.image}
                    alt={monument.name[language]}
                    fallbackLabel={monument.name[language]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-xs text-amber-300 font-medium">
                      {country.flag} {country.name[language]} · {monument.city} · {monument.era}
                    </p>
                    <h2 className="font-display text-xl font-semibold line-clamp-1">
                      {monument.name[language]}
                    </h2>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
                    {monument.description[language]}
                  </p>

                  <div className="flex items-center gap-2">
                    <a
                      href={getGoogleMapsUrl(monument.mapsQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-h-[44px] px-3.5 py-2 rounded-xl bg-stone-900 dark:bg-amber-500 text-white dark:text-slate-950 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-stone-800 dark:hover:bg-amber-400 transition-colors whitespace-nowrap"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.openGoogleMaps}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onAskIabnAboutMonument(country, monument.name[language])}
                      className="min-h-[44px] px-3.5 py-2 rounded-xl border border-stone-200 dark:border-slate-700 text-stone-800 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 hover:bg-stone-100 dark:hover:bg-slate-800 cursor-pointer whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{t.askIabnShort}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenCountry(country)}
                      className="min-h-[44px] px-3 py-2 rounded-xl border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-300 text-xs font-medium hover:bg-stone-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      {country.code}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!isFiltered && !showAll && filteredMonuments.length > 72 && (
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="min-h-[46px] px-6 py-2.5 rounded-2xl bg-stone-900 dark:bg-amber-500 text-white dark:text-slate-950 text-sm font-semibold hover:bg-stone-800 dark:hover:bg-amber-400 transition-colors cursor-pointer"
              >
                {t.resetFilters} ({filteredMonuments.length})
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
