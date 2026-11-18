import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured. Please add your API key in Settings > Secrets.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

interface ChatHistoryItem {
  role: 'user' | 'model';
  text: string;
}

const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  fr: 'French',
  ar: 'Arabic',
};

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'VOYAGO IA BN API' });
  });

  app.post('/api/iabn/chat', async (req, res) => {
    try {
      const { message, history = [], language = 'en', countryContext } = req.body as {
        message?: string;
        history?: ChatHistoryItem[];
        language?: string;
        countryContext?: {
          name?: string;
          capital?: string;
          currency?: string;
          region?: string;
        } | null;
      };

      if (!message || typeof message !== 'string' || !message.trim()) {
        res.status(400).json({ error: 'A question or message is required.' });
        return;
      }

      const ai = getGeminiClient();
      const targetLang = LANGUAGE_NAMES[language] || 'English';

      const contextLine = countryContext?.name
        ? `The traveler is currently viewing ${countryContext.name} (Capital: ${countryContext.capital || 'N/A'}, Region: ${countryContext.region || 'N/A'}, Currency: ${countryContext.currency || 'N/A'}).`
        : 'The traveler is browsing the global VOYAGO atlas (Europe, Africa including Morocco, Egypt, Algeria, and the Americas).';

      const systemInstruction = [
        'You are IA BN, the friendly, knowledgeable mini AI travel companion built into VOYAGO.',
        `Always reply in ${targetLang} unless the user explicitly asks you to translate into another language.`,
        'You can answer ANY question the traveler asks — whether about historical monuments, traditional local food and dishes, money/currency and exchange tips, city transport, Wi-Fi/SIM cards, safety, packing, cultural etiquette, or general knowledge.',
        'Keep responses clear, well-structured, practical, and concise (around 100-220 words unless a detailed itinerary is requested), without markdown clutter like excessive asterisks.',
        contextLine,
      ].join(' ');

      const chatHistory = Array.isArray(history)
        ? history.slice(-10).map((item) => ({
            role: item.role === 'model' ? ('model' as const) : ('user' as const),
            parts: [{ text: String(item.text || '') }],
          }))
        : [];

      const chat = ai.chats.create({
        model: 'gemini-4-hydrogen',
        history: chatHistory,
        config: {
          systemInstruction,
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        },
      });

      const response = await chat.sendMessage({ message: message.trim() });
      const reply = response.text?.trim();

      if (!reply) {
        res.status(502).json({ error: 'IA BN did not return a response. Please try again.' });
        return;
      }

      res.json({ reply });
    } catch (error: unknown) {
      console.error('IA BN chat error:', error);
      const errMessage = error instanceof Error ? error.message : 'Unable to reach IA BN right now.';
      const status = errMessage.includes('GEMINI_API_KEY') ? 503 : 500;
      res.status(status).json({ error: errMessage });
    }
  });

  app.post('/api/iabn/country-guide', async (req, res) => {
    try {
      const { countryName, capital, language = 'en' } = req.body as {
        countryName?: string;
        capital?: string;
        language?: string;
      };

      if (!countryName) {
        res.status(400).json({ error: 'Country name is required.' });
        return;
      }

      const ai = getGeminiClient();
      const targetLang = LANGUAGE_NAMES[language] || 'English';

      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents: `Provide a practical 3-day cultural & culinary travel briefing for ${countryName} (starting around ${capital || countryName}). Include: 1) Must-see historical monument route, 2) Authentic street food & restaurant dishes to order, 3) Local currency, cash/card tips, and tipping etiquette, 4) Wi-Fi, eSIM/SIM card, and neighborhood safety tips. Write cleanly in ${targetLang}.`,
        config: {
          systemInstruction: `You are IA BN, the VOYAGO travel expert. Respond clearly in ${targetLang} with practical, accurate facts for tourists.`,
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        },
      });

      res.json({ guide: response.text?.trim() || '' });
    } catch (error: unknown) {
      console.error('IA BN country guide error:', error);
      const errMessage = error instanceof Error ? error.message : 'Failed to generate live country brief.';
      res.status(500).json({ error: errMessage });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: { server: httpServer },
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (_req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`VOYAGO server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start VOYAGO server:', err);
  process.exit(1);
});
