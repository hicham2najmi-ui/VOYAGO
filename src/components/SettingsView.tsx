import React, { useState } from 'react';
import {
  Download,
  Globe,
  Moon,
  Palette,
  Smartphone,
  Sun,
  Volume2,
  Wifi,
  WifiOff,
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { TranslationBundle } from '../i18n/translations';
import { BackgroundPreset, Language, ThemeMode } from '../types/voyago';

interface SettingsViewProps {
  t: TranslationBundle;
  language: Language;
  onChangeLanguage: (lang: Language) => void;
  theme: ThemeMode;
  onChangeTheme: (theme: ThemeMode) => void;
  backgroundPreset: BackgroundPreset;
  onChangeBackground: (preset: BackgroundPreset) => void;
  autoVoice: boolean;
  onToggleAutoVoice: () => void;
  isOnline: boolean;
}

const BG_SWATCHES: Record<BackgroundPreset, string> = {
  atlas: 'from-amber-700 via-stone-900 to-slate-950',
  obsidian: 'from-slate-900 via-slate-950 to-black',
  mediterranean: 'from-sky-800 via-slate-900 to-indigo-950',
  sahara: 'from-amber-500 via-orange-900 to-stone-950',
  nordic: 'from-slate-600 via-slate-800 to-slate-950',
};

export const SettingsView: React.FC<SettingsViewProps> = ({
  t,
  language,
  onChangeLanguage,
  theme,
  onChangeTheme,
  backgroundPreset,
  onChangeBackground,
  autoVoice,
  onToggleAutoVoice,
  isOnline,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  const languages: Array<{ code: Language; label: string }> = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' },
  ];

  const presets: BackgroundPreset[] = ['atlas', 'obsidian', 'mediterranean', 'sahara', 'nordic'];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      <div>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-white mb-2">
          {t.settingsTitle}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300">
          {t.settingsSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Language Selection */}
        <section className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 space-y-4">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div>
              <h2 className="text-base font-semibold text-stone-900 dark:text-white">
                {t.settingLanguageTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-400 mt-1">
                {t.settingLanguageDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => onChangeLanguage(item.code)}
                className={`min-h-[46px] px-3 py-2 rounded-xl text-sm font-semibold border transition-colors cursor-pointer ${
                  language === item.code
                    ? 'bg-amber-500 border-amber-500 text-slate-950'
                    : 'bg-stone-50 dark:bg-slate-950 border-stone-200 dark:border-slate-700 text-stone-800 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>

        {/* Dark / Light Mode Toggle */}
        <section className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 space-y-4">
          <div className="flex items-start gap-3">
            {theme === 'dark' ? (
              <Moon className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
            ) : (
              <Sun className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            )}
            <div>
              <h2 className="text-base font-semibold text-stone-900 dark:text-white">
                {t.settingThemeTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-400 mt-1">
                {t.settingThemeDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onChangeTheme('light')}
              className={`min-h-[46px] px-4 py-2 rounded-xl text-sm font-semibold border flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                theme === 'light'
                  ? 'bg-amber-500 border-amber-500 text-slate-950'
                  : 'bg-stone-50 dark:bg-slate-950 border-stone-200 dark:border-slate-700 text-stone-800 dark:text-slate-200'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>{t.lightMode}</span>
            </button>

            <button
              type="button"
              onClick={() => onChangeTheme('dark')}
              className={`min-h-[46px] px-4 py-2 rounded-xl text-sm font-semibold border flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'bg-amber-500 border-amber-500 text-slate-950'
                  : 'bg-stone-50 dark:bg-slate-950 border-stone-200 dark:border-slate-700 text-stone-800 dark:text-slate-200'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>{t.darkMode}</span>
            </button>
          </div>
        </section>

        {/* Background Atmosphere Parameter */}
        <section className="md:col-span-2 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 space-y-4">
          <div className="flex items-start gap-3">
            <Palette className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div>
              <h2 className="text-base font-semibold text-stone-900 dark:text-white">
                {t.settingBgTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-400 mt-1">
                {t.settingBgDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => onChangeBackground(preset)}
                className={`p-3 rounded-2xl border text-start transition-all cursor-pointer ${
                  backgroundPreset === preset
                    ? 'border-amber-500 ring-2 ring-amber-500/40 bg-stone-50 dark:bg-slate-800'
                    : 'border-stone-200 dark:border-slate-800 bg-stone-50/70 dark:bg-slate-950/60 hover:border-stone-400 dark:hover:border-slate-600'
                }`}
              >
                <div className={`h-10 w-full rounded-xl bg-gradient-to-br ${BG_SWATCHES[preset]} mb-2`} />
                <span className="text-xs font-semibold text-stone-900 dark:text-white block truncate">
                  {t.bgPresets[preset]}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Voice Narration & Wi-Fi Status */}
        <section className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <Volume2 className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div>
                <h2 className="text-base font-semibold text-stone-900 dark:text-white">
                  {t.settingVoiceTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-400 mt-1">
                  {t.settingVoiceDesc}
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onToggleAutoVoice}
            className={`w-full min-h-[46px] px-4 py-2 rounded-xl text-sm font-semibold border transition-colors cursor-pointer ${
              autoVoice
                ? 'bg-amber-500 border-amber-500 text-slate-950'
                : 'bg-stone-50 dark:bg-slate-950 border-stone-200 dark:border-slate-700 text-stone-800 dark:text-slate-200'
            }`}
          >
            {autoVoice ? t.iabnVoiceOn : t.iabnVoiceOff}
          </button>

          <div className="pt-3 border-t border-stone-100 dark:border-slate-800 flex items-start gap-3">
            {isOnline ? (
              <Wifi className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            ) : (
              <WifiOff className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="text-sm font-semibold text-stone-900 dark:text-white">
                {t.settingWifiTitle}
              </p>
              <p className="text-xs text-stone-600 dark:text-slate-400 mt-0.5">
                {isOnline ? t.wifiOnline : t.wifiOffline}
              </p>
            </div>
          </div>
        </section>

        {/* Android APK & PWA Installation Card */}
        <section className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 space-y-4">
          <div className="flex items-start gap-3">
            <Smartphone className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div>
              <h2 className="text-base font-semibold text-stone-900 dark:text-white">
                {t.settingAndroidTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-400 mt-1">
                {t.settingAndroidDesc}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 font-mono-tabular text-xs text-stone-700 dark:text-slate-300 space-y-1">
            <p>appId: com.voyago.travel</p>
            <p>Gradle: ./gradlew assembleDebug</p>
          </div>

          {!isInstalled && isInstallable && (
            <button
              type="button"
              onClick={install}
              className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.installPwa}</span>
            </button>
          )}

          {!isInstalled && isIOS && !isInstallable && (
            <button
              type="button"
              onClick={() => setShowIOSGuide(true)}
              className="w-full min-h-[46px] px-4 py-2.5 rounded-xl border border-stone-300 dark:border-slate-700 text-stone-800 dark:text-slate-100 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.iosInstallTitle}</span>
            </button>
          )}
        </section>
      </div>

      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-6 space-y-4">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
              {t.iosInstallTitle}
            </h3>
            <p className="text-sm text-stone-600 dark:text-slate-300">{t.iosInstallSteps}</p>
            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="w-full min-h-[44px] rounded-xl bg-amber-500 text-slate-950 text-sm font-semibold cursor-pointer"
            >
              {t.closeLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
