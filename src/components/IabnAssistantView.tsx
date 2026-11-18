import React, { useEffect, useRef, useState } from 'react';
import {
  Bot,
  Loader2,
  RotateCcw,
  Send,
  Square,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
} from 'lucide-react';
import { TranslationBundle } from '../i18n/translations';
import { ChatMessage, CountryGuide, Language } from '../types/voyago';

interface IabnAssistantViewProps {
  t: TranslationBundle;
  language: Language;
  isOnline: boolean;
  autoVoice: boolean;
  onToggleAutoVoice: () => void;
  countries: CountryGuide[];
  focusCountry: CountryGuide | null;
  onChangeFocusCountry: (country: CountryGuide | null) => void;
  messages: ChatMessage[];
  onAppendMessage: (message: ChatMessage) => void;
  onClearChat: () => void;
  pendingPrompt?: string | null;
  onConsumePendingPrompt?: () => void;
}

const SPEECH_LANG: Record<Language, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  ar: 'ar-SA',
};

export const IabnAssistantView: React.FC<IabnAssistantViewProps> = ({
  t,
  language,
  isOnline,
  autoVoice,
  onToggleAutoVoice,
  countries,
  focusCountry,
  onChangeFocusCountry,
  messages,
  onAppendMessage,
  onClearChat,
  pendingPrompt,
  onConsumePendingPrompt,
}) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const stopSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingId(null);
  };

  const speakText = (text: string, messageId: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = SPEECH_LANG[language] || 'en-US';
    utterance.rate = 1.0;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    setSpeakingId(messageId);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    return () => stopSpeech();
  }, []);

  const sendQuestion = async (questionText: string) => {
    const trimmed = questionText.trim();
    if (!trimmed || loading) return;

    if (!isOnline) {
      setErrorMsg(t.iabnOfflineWarning);
      return;
    }

    setErrorMsg(null);
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
      timestamp: Date.now(),
      countryName: focusCountry?.name[language],
    };

    onAppendMessage(userMessage);
    setInput('');
    setLoading(true);

    try {
      const historyPayload = messages.slice(-10).map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const response = await fetch('/api/iabn/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
          language,
          countryContext: focusCountry
            ? {
                name: focusCountry.name.en,
                capital: focusCountry.capital.en,
                currency: `${focusCountry.currency.code} (${focusCountry.currency.name.en})`,
                region: focusCountry.subregion.en,
              }
            : null,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'IA BN could not answer right now.');
      }

      const replyId = `model-${Date.now()}`;
      const replyMessage: ChatMessage = {
        id: replyId,
        role: 'model',
        text: data.reply,
        timestamp: Date.now(),
        countryName: focusCountry?.name[language],
      };

      onAppendMessage(replyMessage);
      if (autoVoice && data.reply) {
        speakText(data.reply, replyId);
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Unable to connect to IA BN.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (pendingPrompt && pendingPrompt.trim()) {
      const promptToRun = pendingPrompt;
      onConsumePendingPrompt?.();
      void sendQuestion(promptToRun);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingPrompt]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void sendQuestion(input);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-5 min-h-[calc(100vh-140px)]">
      {/* Header & Controls */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-white">
              {t.iabnTitle}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 mt-1 max-w-2xl">
              {t.iabnSubtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <select
            aria-label={t.iabnContextLabel}
            value={focusCountry?.id || ''}
            onChange={(e) => {
              const found = countries.find((c) => c.id === e.target.value) || null;
              onChangeFocusCountry(found);
            }}
            className="min-h-[42px] px-3 py-2 rounded-xl bg-stone-100 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-xs sm:text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/60"
          >
            <option value="">{t.iabnContextAll}</option>
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.flag} {c.name[language]}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => {
              if (autoVoice) stopSpeech();
              onToggleAutoVoice();
            }}
            className={`min-h-[42px] px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${
              autoVoice
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-700 dark:text-amber-300'
                : 'border-stone-200 dark:border-slate-700 text-stone-600 dark:text-slate-300'
            }`}
          >
            {autoVoice ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span>{autoVoice ? t.iabnVoiceOn : t.iabnVoiceOff}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              stopSpeech();
              onClearChat();
            }}
            className="min-h-[42px] px-3.5 py-2 rounded-xl border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.iabnClearChat}</span>
          </button>
        </div>
      </div>

      {/* Wi-Fi Status Banner */}
      {!isOnline ? (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 flex items-center gap-3 text-sm text-amber-900 dark:text-amber-200">
          <WifiOff className="w-5 h-5 shrink-0" />
          <span>{t.iabnOfflineWarning}</span>
        </div>
      ) : (
        <div className="px-4 py-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-300">
          <Wifi className="w-4 h-4 shrink-0" />
          <span>{t.wifiOnline}</span>
        </div>
      )}

      {/* Conversation Container */}
      <div className="flex-1 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 p-4 sm:p-6 flex flex-col justify-between gap-4">
        <div className="space-y-4 max-h-[52vh] overflow-y-auto pr-1">
          {/* Welcome Intro from IA BN */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
              <Bot className="w-4 h-4" />
            </div>
            <div className="rounded-2xl bg-stone-100 dark:bg-slate-800/80 px-4 py-3 text-sm text-stone-800 dark:text-slate-100 leading-relaxed max-w-3xl">
              <p>{t.iabnWelcomeMessage}</p>
            </div>
          </div>

          {/* Starter prompts when empty */}
          {messages.length === 0 && (
            <div className="pt-2 space-y-2.5">
              <p className="text-xs font-semibold text-stone-500 dark:text-slate-400">
                {t.quickPromptsTitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.quickPrompts.map((promptText) => (
                  <button
                    key={promptText}
                    type="button"
                    onClick={() => void sendQuestion(promptText)}
                    className="text-start min-h-[46px] p-3.5 rounded-2xl border border-stone-200 dark:border-slate-800 bg-stone-50 dark:bg-slate-950/50 hover:border-amber-500/60 text-xs sm:text-sm text-stone-800 dark:text-slate-200 transition-colors cursor-pointer"
                  >
                    {promptText}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Messages */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`rounded-2xl px-4 py-3 text-sm leading-relaxed max-w-3xl whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-stone-900 dark:bg-amber-500 text-white dark:text-slate-950 font-medium'
                    : 'bg-stone-100 dark:bg-slate-800 text-stone-800 dark:text-slate-100'
                }`}
              >
                <p>{msg.text}</p>

                {msg.role === 'model' && (
                  <div className="mt-2 pt-2 border-t border-stone-200/70 dark:border-slate-700/70 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-stone-500 dark:text-slate-400">
                      IA BN {msg.countryName ? `· ${msg.countryName}` : ''}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        speakingId === msg.id ? stopSpeech() : speakText(msg.text, msg.id)
                      }
                      className="min-h-[32px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-xs font-medium text-stone-700 dark:text-slate-200 inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      {speakingId === msg.id ? (
                        <>
                          <Square className="w-3 h-3 text-amber-500" />
                          <span>{t.iabnStopSpeaking}</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          <span>{t.iabnSpeakReply}</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3 text-sm text-stone-600 dark:text-slate-300">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <span>{t.iabnThinking}</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs sm:text-sm text-red-800 dark:text-red-200">
              {errorMsg}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="pt-3 border-t border-stone-200 dark:border-slate-800 flex items-end gap-2.5">
          <textarea
            rows={2}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                void sendQuestion(input);
              }
            }}
            placeholder={t.iabnPlaceholder}
            className="flex-1 rounded-2xl bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-700 px-4 py-3 text-sm text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 resize-none"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="min-h-[48px] px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-sm flex items-center gap-2 transition-colors cursor-pointer shrink-0"
          >
            <Send className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            <span className="hidden sm:inline">{t.iabnSend}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
