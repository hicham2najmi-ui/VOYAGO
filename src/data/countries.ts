import { CountryGuide } from '../types/voyago';
import { FEATURED_COUNTRIES, VOYAGO_IMAGES } from './featuredCountries';
import { ATLAS_COUNTRIES } from './europeAfricaAtlas';
import { WORLD_EXTRA_COUNTRIES } from './worldAtlasExtras';

const seen = new Set<string>();
export const ALL_COUNTRIES: CountryGuide[] = [
  ...FEATURED_COUNTRIES,
  ...ATLAS_COUNTRIES,
  ...WORLD_EXTRA_COUNTRIES,
].filter((country) => {
  if (seen.has(country.id)) return false;
  seen.add(country.id);
  return true;
});

export function getGoogleMapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export { VOYAGO_IMAGES };
