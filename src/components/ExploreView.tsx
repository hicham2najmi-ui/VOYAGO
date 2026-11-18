import React, { useMemo, useState } from 'react';
import { ExternalLink, MapPin, MessageCircle, Search, Utensils, X } from 'lucide-react';
import { getGoogleMapsUrl } from '../data/countries';
import { TranslationBundle } from '../i18n/translations';
import { ContinentFilter, CountryGuide, Language } from '../types/voyago';
import { ResilientImage } from './ResilientImage';

interface ExploreViewProps {
  t: TranslationBundle;
  language: Language;
  countries: CountryGuide[];
  continentFilter: ContinentFilter;
  onChangeContinentFilter: (filter: ContinentFilter) => void;
  onSelectCountry: (country: CountryGuide) => void;
  onAskIabnAboutCountry: (country: CountryGuide) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  t,
  language,
  countries,
  continentFilter,
  onChangeContinentFilter,
  onSelectCountry,
  onAskIabnAboutCountry,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return countries.filter((country) => {
      const matchesContinent =
        continentFilter === 'all'
          ? true
          : continentFilter === 'featured'
          ? Boolean(country.featured)
          : country.continent === continentFilter;

      if (!matchesContinent) return false;
      if (!q) return true;

      const haystack = [
        country.name.en,
        country.name.fr,
        country.name.ar,
        country.capital.en,
        country.capital.fr,
        country.capital.ar,
        country.currency.code,
        country.currency.name.en,
        ...country.cities.map((c) => `${c.name.en} ${c.name.fr} ${c.name.ar}`),
        ...country.monuments.map((m) => `${m.name.en} ${m.name.fr} ${m.name.ar}`),
        ...country.dishes.map((d) => `${d.name.en} ${d.name.fr} ${d.name.ar}`),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [countries, continentFilter, searchQuery]);

  const filters: Array<{ key: ContinentFilter; label: string }> = [
    { key: 'featured', label: t.filterFeatured },
    { key: 'all', label: t.filterAll },
    { key: 'europe', label: t.filterEurope },
    { key: 'africa', label: t.filterAfrica },
    { key: 'americas', label: t.filterAmericas },
    { key: 'asia', label: t.filterAsia },
    { key: 'oceania', label: t.filterOceania },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Search & Filter Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-xl">
          <Search
            className={`w-4 h-4 text-stone-400 dark:text-slate-400 absolute top-1/2 -translate-y-1/2 ${
              language === 'ar' ? 'right-3.5' : 'left-3.5'
            }`}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className={`w-full min-h-[46px] rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 text-sm text-stone-900 dark:text-slate-100 placeholder:text-stone-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 ${
              language === 'ar' ? 'pr-10 pl-10' : 'pl-10 pr-10'
            }`}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className={`absolute top-1/2 -translate-y-1/2 min-h-[36px] min-w-[36px] flex items-center justify-center text-stone-400 hover:text-stone-700 dark:hover:text-slate-200 ${
                language === 'ar' ? 'left-1.5' : 'right-1.5'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Continent Segmented Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-stone-200/75 dark:bg-slate-900 border border-stone-200 dark:border-slate-800">
            {filters.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => onChangeContinentFilter(item.key)}
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
            {filteredCountries.length} {t.countriesCountLabel}
          </span>
        </div>
      </div>

      {/* Country Grid or Empty State */}
      {filteredCountries.length === 0 ? (
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
              setSearchQuery('');
              onChangeContinentFilter('all');
            }}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-sm font-semibold hover:bg-amber-400 transition-colors cursor-pointer"
          >
            {t.resetFilters}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCountries.map((country) => {
            const topMonument = country.monuments[0];
            const topDish = country.dishes[0];

            return (
              <article
                key={country.id}
                className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/90 border border-stone-200/90 dark:border-slate-800 flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
              >
                {/* Destination Image with Measured Scrim */}
                <button
                  type="button"
                  onClick={() => onSelectCountry(country)}
                  className="relative aspect-[4/3] w-full overflow-hidden text-start cursor-pointer block"
                >
                  <ResilientImage
                    src={country.heroImage}
                    alt={country.name[language]}
                    fallbackLabel={country.name[language]}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-xs text-amber-300 font-medium mb-0.5">
                        {country.subregion[language]} · {country.capital[language]}
                      </p>
                      <h2 className="font-display text-2xl font-semibold text-white flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.name[language]}</span>
                      </h2>
                    </div>
                    <span className="font-mono-tabular text-xs font-semibold text-slate-100">
                      {country.currency.code}
                    </span>
                  </div>
                </button>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {country.summary[language]}
                    </p>

                    <div className="pt-2 border-t border-stone-100 dark:border-slate-800 space-y-1.5 text-xs text-stone-600 dark:text-slate-300">
                      {topMonument && (
                        <div className="flex items-start gap-2">
                          <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1 font-medium text-stone-800 dark:text-slate-100">
                            {topMonument.name[language]}
                          </span>
                        </div>
                      )}
                      {topDish && (
                        <div className="flex items-start gap-2">
                          <Utensils className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{topDish.name[language]}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Interactive Footer Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => onSelectCountry(country)}
                      className="flex-1 min-h-[44px] px-4 py-2.5 rounded-xl bg-stone-900 dark:bg-amber-500 text-white dark:text-slate-950 hover:bg-stone-800 dark:hover:bg-amber-400 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {t.openGuide}
                    </button>

                    <a
                      href={getGoogleMapsUrl(country.mapsQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t.openGoogleMaps}
                      aria-label={`${t.openGoogleMaps} - ${country.name[language]}`}
                      className="min-h-[44px] min-w-[44px] px-3 flex items-center justify-center rounded-xl border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => onAskIabnAboutCountry(country)}
                      title={t.askAboutCountry}
                      aria-label={`${t.askAboutCountry} - ${country.name[language]}`}
                      className="min-h-[44px] min-w-[44px] px-3 flex items-center justify-center rounded-xl border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
