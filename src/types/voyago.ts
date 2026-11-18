export type Language = 'en' | 'fr' | 'ar';

export type ThemeMode = 'light' | 'dark';

export type BackgroundPreset = 'atlas' | 'obsidian' | 'mediterranean' | 'sahara' | 'nordic';

export type ContinentFilter = 'featured' | 'all' | 'europe' | 'africa' | 'americas' | 'asia' | 'oceania';

export type AppSection = 'explore' | 'monuments' | 'iabn' | 'settings';

export interface LocalizedText {
  en: string;
  fr: string;
  ar: string;
}

export interface MonumentInfo {
  id: string;
  name: LocalizedText;
  city: string;
  era: string;
  description: LocalizedText;
  image: string;
  mapsQuery: string;
}

export interface DishInfo {
  name: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
}

export interface CurrencyInfo {
  code: string;
  symbol: string;
  name: LocalizedText;
  tips: LocalizedText;
}

export interface CityInfo {
  name: LocalizedText;
  highlight: LocalizedText;
  mapsQuery: string;
}

export interface TravelPhrase {
  label: LocalizedText;
  local: string;
  pronunciation?: string;
}

export interface CountryGuide {
  id: string;
  code: string;
  flag: string;
  continent: 'europe' | 'africa' | 'americas' | 'asia' | 'oceania';
  subregion: LocalizedText;
  featured?: boolean;
  name: LocalizedText;
  capital: LocalizedText;
  bestSeason: LocalizedText;
  summary: LocalizedText;
  wifiTips: LocalizedText;
  heroImage: string;
  mapsQuery: string;
  currency: CurrencyInfo;
  cities: CityInfo[];
  monuments: MonumentInfo[];
  dishes: DishInfo[];
  phrases: TravelPhrase[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  countryName?: string;
}
