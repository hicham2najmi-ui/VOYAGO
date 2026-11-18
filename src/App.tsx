import { useEffect, useState } from 'react';
import { CountryDetailView } from './components/CountryDetailView';
import { ExploreView } from './components/ExploreView';
import { IabnAssistantView } from './components/IabnAssistantView';
import { MonumentsGalleryView } from './components/MonumentsGalleryView';
import { SettingsView } from './components/SettingsView';
import { TopBar } from './components/TopBar';
import { WelcomeHero } from './components/WelcomeHero';
import { ALL_COUNTRIES } from './data/countries';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { TRANSLATIONS } from './i18n/translations';
import {
  AppSection,
  BackgroundPreset,
  ChatMessage,
  ContinentFilter,
  CountryGuide,
  Language,
  ThemeMode,
} from './types/voyago';

const BACKGROUND_STYLES: Record<ThemeMode, Record<BackgroundPreset, string>> = {
  dark: {
    atlas: 'bg-gradient-to-br from-slate-950 via-stone-950 to-amber-950/30',
    obsidian: 'bg-slate-950',
    mediterranean: 'bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/50',
    sahara: 'bg-gradient-to-br from-stone-950 via-neutral-950 to-amber-900/30',
    nordic: 'bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900',
  },
  light: {
    atlas: 'bg-gradient-to-br from-stone-50 via-amber-50/40 to-stone-100',
    obsidian: 'bg-stone-100',
    mediterranean: 'bg-gradient-to-br from-slate-50 via-sky-50/50 to-stone-100',
    sahara: 'bg-gradient-to-br from-amber-50/60 via-stone-50 to-orange-50/40',
    nordic: 'bg-gradient-to-br from-slate-50 via-zinc-50 to-slate-100',
  },
};

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('voyago_lang') : null;
    return saved === 'fr' || saved === 'ar' || saved === 'en' ? saved : 'en';
  });

  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('voyago_theme') : null;
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  const [backgroundPreset, setBackgroundPreset] = useState<BackgroundPreset>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('voyago_bg') : null;
    if (saved === 'atlas' || saved === 'obsidian' || saved === 'mediterranean' || saved === 'sahara' || saved === 'nordic') {
      return saved;
    }
    return 'atlas';
  });

  const [autoVoice, setAutoVoice] = useState<boolean>(false);
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<AppSection>('explore');
  const [continentFilter, setContinentFilter] = useState<ContinentFilter>('featured');
  const [selectedCountry, setSelectedCountry] = useState<CountryGuide | null>(null);
  const [iabnFocusCountry, setIabnFocusCountry] = useState<CountryGuide | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [pendingIabnPrompt, setPendingIabnPrompt] = useState<string | null>(null);

  const isOnline = useOnlineStatus();
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('voyago_lang', language);
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('voyago_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('voyago_bg', backgroundPreset);
  }, [backgroundPreset]);

  const handleQuickCountry = (targetId: string) => {
    setShowWelcome(false);
    setActiveSection('explore');
    if (targetId === 'europe') {
      setSelectedCountry(null);
      setContinentFilter('europe');
      return;
    }
    const found = ALL_COUNTRIES.find((c) => c.id === targetId) || null;
    setSelectedCountry(found);
  };

  const handleAskIabnAboutCountry = (country: CountryGuide, prefillQuestion?: string) => {
    setShowWelcome(false);
    setIabnFocusCountry(country);
    setActiveSection('iabn');
    if (prefillQuestion) {
      setPendingIabnPrompt(prefillQuestion);
    }
  };

  const handleSelectSection = (section: AppSection) => {
    setActiveSection(section);
    if (section !== 'explore') {
      setSelectedCountry(null);
    }
  };

  if (showWelcome) {
    return (
      <WelcomeHero
        t={t}
        language={language}
        onChangeLanguage={setLanguage}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        isOnline={isOnline}
        onStart={() => {
          setShowWelcome(false);
          setActiveSection('explore');
          setSelectedCountry(null);
        }}
        onOpenIabn={() => {
          setShowWelcome(false);
          setActiveSection('iabn');
        }}
        onQuickCountry={handleQuickCountry}
      />
    );
  }

  return (
    <div
      className={`min-h-screen pb-20 md:pb-8 text-stone-900 dark:text-slate-100 transition-colors ${BACKGROUND_STYLES[theme][backgroundPreset]}`}
    >
      <TopBar
        t={t}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onGoWelcome={() => setShowWelcome(true)}
      />

      <main>
        {activeSection === 'explore' && selectedCountry && (
          <CountryDetailView
            t={t}
            language={language}
            country={selectedCountry}
            isOnline={isOnline}
            onBack={() => setSelectedCountry(null)}
            onAskIabn={handleAskIabnAboutCountry}
          />
        )}

        {activeSection === 'explore' && !selectedCountry && (
          <ExploreView
            t={t}
            language={language}
            countries={ALL_COUNTRIES}
            continentFilter={continentFilter}
            onChangeContinentFilter={setContinentFilter}
            onSelectCountry={(country) => setSelectedCountry(country)}
            onAskIabnAboutCountry={(country) => handleAskIabnAboutCountry(country)}
          />
        )}

        {activeSection === 'monuments' && (
          <MonumentsGalleryView
            t={t}
            language={language}
            countries={ALL_COUNTRIES}
            onOpenCountry={(country) => {
              setSelectedCountry(country);
              setActiveSection('explore');
            }}
            onAskIabnAboutMonument={(country, monumentName) =>
              handleAskIabnAboutCountry(
                country,
                language === 'ar'
                  ? `أخبرني عن تاريخ وأسعار التذاكر وأفضل وقت لزيارة ${monumentName} في ${country.name.ar}`
                  : language === 'fr'
                  ? `Parle-moi de l'histoire et de la visite de ${monumentName} (${country.name.fr})`
                  : `Tell me about the history, visiting hours, and tips for ${monumentName} in ${country.name.en}`
              )
            }
          />
        )}

        {activeSection === 'iabn' && (
          <IabnAssistantView
            t={t}
            language={language}
            isOnline={isOnline}
            autoVoice={autoVoice}
            onToggleAutoVoice={() => setAutoVoice((v) => !v)}
            countries={ALL_COUNTRIES}
            focusCountry={iabnFocusCountry}
            onChangeFocusCountry={setIabnFocusCountry}
            messages={chatMessages}
            onAppendMessage={(msg) => setChatMessages((prev) => [...prev, msg])}
            onClearChat={() => setChatMessages([])}
            pendingPrompt={pendingIabnPrompt}
            onConsumePendingPrompt={() => setPendingIabnPrompt(null)}
          />
        )}

        {activeSection === 'settings' && (
          <SettingsView
            t={t}
            language={language}
            onChangeLanguage={setLanguage}
            theme={theme}
            onChangeTheme={setTheme}
            backgroundPreset={backgroundPreset}
            onChangeBackground={setBackgroundPreset}
            autoVoice={autoVoice}
            onToggleAutoVoice={() => setAutoVoice((v) => !v)}
            isOnline={isOnline}
          />
        )}
      </main>
    </div>
  );
}
