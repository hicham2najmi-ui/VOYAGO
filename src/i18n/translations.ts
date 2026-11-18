import { Language } from '../types/voyago';

export interface TranslationBundle {
  brand: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  startButton: string;
  wifiNotice: string;
  wifiOnline: string;
  wifiOffline: string;
  navExplore: string;
  navMonuments: string;
  navIabn: string;
  navSettings: string;
  askIabnShort: string;
  searchPlaceholder: string;
  filterFeatured: string;
  filterAll: string;
  filterEurope: string;
  filterAfrica: string;
  filterAmericas: string;
  filterAsia: string;
  filterOceania: string;
  countriesCountLabel: string;
  openGuide: string;
  openGoogleMaps: string;
  backToAtlas: string;
  backToWelcome: string;
  tabOverview: string;
  tabMonuments: string;
  tabFood: string;
  tabMoney: string;
  capitalLabel: string;
  bestSeasonLabel: string;
  currencyLabel: string;
  wifiLabel: string;
  majorCitiesTitle: string;
  monumentsTitle: string;
  foodTitle: string;
  foodSubtitle: string;
  moneyTitle: string;
  phrasesTitle: string;
  liveBriefButton: string;
  liveBriefLoading: string;
  liveBriefTitle: string;
  askAboutCountry: string;
  iabnTitle: string;
  iabnSubtitle: string;
  iabnPlaceholder: string;
  iabnSend: string;
  iabnThinking: string;
  iabnVoiceOn: string;
  iabnVoiceOff: string;
  iabnSpeakReply: string;
  iabnStopSpeaking: string;
  iabnClearChat: string;
  iabnContextAll: string;
  iabnContextLabel: string;
  iabnOfflineWarning: string;
  iabnWelcomeMessage: string;
  quickPromptsTitle: string;
  quickPrompts: string[];
  settingsTitle: string;
  settingsSubtitle: string;
  settingLanguageTitle: string;
  settingLanguageDesc: string;
  settingThemeTitle: string;
  settingThemeDesc: string;
  lightMode: string;
  darkMode: string;
  settingBgTitle: string;
  settingBgDesc: string;
  bgPresets: {
    atlas: string;
    obsidian: string;
    mediterranean: string;
    sahara: string;
    nordic: string;
  };
  settingVoiceTitle: string;
  settingVoiceDesc: string;
  settingWifiTitle: string;
  settingWifiDesc: string;
  settingAndroidTitle: string;
  settingAndroidDesc: string;
  installPwa: string;
  iosInstallTitle: string;
  iosInstallSteps: string;
  closeLabel: string;
  monumentsGalleryTitle: string;
  monumentsGallerySubtitle: string;
  noResultsTitle: string;
  noResultsDesc: string;
  resetFilters: string;
}

export const TRANSLATIONS: Record<Language, TranslationBundle> = {
  en: {
    brand: 'VOYAGO',
    heroKicker: 'All 195+ World Countries · Europe · Africa · Americas · Asia · Oceania',
    heroTitle: 'Every historic monument, local kitchen, and city map in one compass.',
    heroSubtitle:
      'Explore all countries of the world including Morocco, Egypt, Algeria, France, Belgium, Germany, Italy, Spain, Japan, China, Tanzania, Ethiopia, Brazil, Argentina, Australia, and the USA in English, French, and Arabic with Google Maps and IA BN.',
    startButton: 'START WITH VOYAGO',
    wifiNotice: 'Wi-Fi or mobile data required for IA BN live answers & Google Maps',
    wifiOnline: 'Wi-Fi Connected · Live IA BN & Maps Ready',
    wifiOffline: 'Offline Mode · Atlas readable, connect Wi-Fi for IA BN',
    navExplore: 'Explore',
    navMonuments: 'Monuments',
    navIabn: 'Ask IA BN',
    navSettings: 'Settings',
    askIabnShort: 'Ask IA BN',
    searchPlaceholder: 'Search any country, city, monument, food, or currency...',
    filterFeatured: 'Featured',
    filterAll: 'All World',
    filterEurope: 'Europe',
    filterAfrica: 'Africa',
    filterAmericas: 'Americas',
    filterAsia: 'Asia',
    filterOceania: 'Oceania',
    countriesCountLabel: 'countries',
    openGuide: 'Open Guide',
    openGoogleMaps: 'Open in Google Maps',
    backToAtlas: 'Back to Atlas',
    backToWelcome: 'Home Screen',
    tabOverview: 'Cities & Info',
    tabMonuments: 'Monuments',
    tabFood: 'Food & Drink',
    tabMoney: 'Money & Phrases',
    capitalLabel: 'Capital',
    bestSeasonLabel: 'Best Season',
    currencyLabel: 'Currency',
    wifiLabel: 'Wi-Fi & SIM Tips',
    majorCitiesTitle: 'Key Cities to Visit',
    monumentsTitle: 'Historical Monuments & Sites',
    foodTitle: 'Traditional Food & Cuisine',
    foodSubtitle: 'Authentic national dishes, street food, and hospitality traditions',
    moneyTitle: 'Money, Cards & Exchange Tips',
    phrasesTitle: 'Essential Local Phrases',
    liveBriefButton: 'Generate Live 3-Day IA BN Brief',
    liveBriefLoading: 'IA BN is preparing your live travel brief...',
    liveBriefTitle: 'Live IA BN Travel Briefing',
    askAboutCountry: 'Ask IA BN about this country',
    iabnTitle: 'IA BN — Travel Companion',
    iabnSubtitle: 'Ask any question about monuments, food, money, visas, routes, or local culture. IA BN speaks and answers in your language.',
    iabnPlaceholder: 'Ask IA BN anything (e.g. Best food in Fes, Giza ticket tips, Euro cash rules)...',
    iabnSend: 'Ask IA BN',
    iabnThinking: 'IA BN is thinking...',
    iabnVoiceOn: 'Auto-Voice On',
    iabnVoiceOff: 'Auto-Voice Off',
    iabnSpeakReply: 'Listen',
    iabnStopSpeaking: 'Stop',
    iabnClearChat: 'New Chat',
    iabnContextAll: 'Global Atlas',
    iabnContextLabel: 'Focus Country',
    iabnOfflineWarning: 'Wi-Fi connection needed: Please connect to Wi-Fi or mobile data so IA BN can answer your question.',
    iabnWelcomeMessage:
      'Hello! I am IA BN, your VOYAGO guide. Ask me anything about Morocco, Egypt, Algeria, any European or African country, historical monuments, traditional food, currency exchange, or city routes.',
    quickPromptsTitle: 'Quick Questions for IA BN',
    quickPrompts: [
      'Plan 3 days in Marrakech and the Atlas Mountains with local food stops',
      'What should I know about money, tipping, and visiting the Pyramids of Giza?',
      'Best historical places in Algiers and Constantine, Algeria',
      'Compare Euro cash vs card tips and eSIM Wi-Fi across Europe',
    ],
    settingsTitle: 'Parameters & Settings',
    settingsSubtitle: 'Customize VOYAGO language, dark mode, background atmosphere, voice output, and app installation.',
    settingLanguageTitle: 'App Language & Translation',
    settingLanguageDesc: 'Switches the entire atlas, menus, and IA BN voice/text responses.',
    settingThemeTitle: 'Interface Appearance',
    settingThemeDesc: 'Dark mode reduces glare during evening planning and outdoor glare.',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    settingBgTitle: 'Background Atmosphere',
    settingBgDesc: 'Choose the visual backdrop tone used across VOYAGO screens.',
    bgPresets: {
      atlas: 'Atlas Sunset',
      obsidian: 'Midnight Obsidian',
      mediterranean: 'Mediterranean Azure',
      sahara: 'Sahara Sandstone',
      nordic: 'Nordic Slate',
    },
    settingVoiceTitle: 'IA BN Voice Narration',
    settingVoiceDesc: 'Automatically read IA BN answers aloud using device speech synthesis.',
    settingWifiTitle: 'Wi-Fi & Connectivity Status',
    settingWifiDesc: 'Core country guides work anytime; IA BN live AI and Google Maps require Wi-Fi.',
    settingAndroidTitle: 'Android APK & Installable App',
    settingAndroidDesc: 'Configured with Capacitor Android Gradle project & PWA install support.',
    installPwa: 'Install VOYAGO App',
    iosInstallTitle: 'Install on iPhone / iPad',
    iosInstallSteps: 'Tap Share in Safari, then choose Add to Home Screen.',
    closeLabel: 'Close',
    monumentsGalleryTitle: 'World Historical Monuments',
    monumentsGallerySubtitle: 'Iconic historic monuments across Belgium, Germany, Italy, Spain, France, Japan, China, Tanzania, Ethiopia, Morocco, Egypt, Algeria, Brazil, Argentina, Australia, Europe, Africa, Asia, and Oceania with Google Maps links.',
    noResultsTitle: 'No matching destinations',
    noResultsDesc: 'Try another country name, city, monument, or switch the continent filter.',
    resetFilters: 'Show All Destinations',
  },
  fr: {
    brand: 'VOYAGO',
    heroKicker: 'Tous les pays du monde · Europe · Afrique · Amériques · Asie · Océanie',
    heroTitle: 'Chaque monument historique, cuisine locale et carte réunis dans une boussole.',
    heroSubtitle:
      'Explorez tous les pays du monde dont le Maroc, l’Égypte, l’Algérie, la France, la Belgique, l’Allemagne, l’Italie, l’Espagne, le Japon, la Chine, la Tanzanie, l’Éthiopie, le Brésil, l’Argentine, l’Australie et les États-Unis en français, anglais et arabe avec Google Maps et IA BN.',
    startButton: 'START WITH VOYAGO',
    wifiNotice: 'Wi-Fi ou données mobiles requis pour IA BN en direct et Google Maps',
    wifiOnline: 'Wi-Fi connecté · IA BN & Google Maps prêts',
    wifiOffline: 'Hors ligne · Atlas consultable, connectez le Wi-Fi pour IA BN',
    navExplore: 'Explorer',
    navMonuments: 'Monuments',
    navIabn: 'Demander IA BN',
    navSettings: 'Paramètres',
    askIabnShort: 'IA BN',
    searchPlaceholder: 'Rechercher un pays, ville, monument, plat ou monnaie...',
    filterFeatured: 'À la une',
    filterAll: 'Monde entier',
    filterEurope: 'Europe',
    filterAfrica: 'Afrique',
    filterAmericas: 'Amériques',
    filterAsia: 'Asie',
    filterOceania: 'Océanie',
    countriesCountLabel: 'pays',
    openGuide: 'Ouvrir le guide',
    openGoogleMaps: 'Ouvrir dans Google Maps',
    backToAtlas: "Retour à l'atlas",
    backToWelcome: 'Accueil',
    tabOverview: 'Villes & Infos',
    tabMonuments: 'Monuments',
    tabFood: 'Gastronomie',
    tabMoney: 'Monnaie & Phrases',
    capitalLabel: 'Capitale',
    bestSeasonLabel: 'Meilleure saison',
    currencyLabel: 'Monnaie',
    wifiLabel: 'Wi-Fi & Carte SIM',
    majorCitiesTitle: 'Villes principales à visiter',
    monumentsTitle: 'Monuments historiques et sites',
    foodTitle: 'Cuisine traditionnelle et plats locaux',
    foodSubtitle: 'Spécialités nationales, cuisine de rue et traditions culinaires',
    moneyTitle: 'Argent, cartes et conseils de change',
    phrasesTitle: 'Phrases locales essentielles',
    liveBriefButton: 'Générer un brief IA BN de 3 jours',
    liveBriefLoading: 'IA BN prépare votre guide en direct...',
    liveBriefTitle: 'Briefing voyage IA BN en direct',
    askAboutCountry: 'Poser une question à IA BN sur ce pays',
    iabnTitle: 'IA BN — Compagnon de voyage',
    iabnSubtitle: 'Posez toutes vos questions sur les monuments, la nourriture, la monnaie ou les itinéraires. IA BN répond et parle dans votre langue.',
    iabnPlaceholder: 'Posez une question à IA BN (ex: Meilleurs plats à Fès, visite de Gizeh, budget Rome)...',
    iabnSend: 'Envoyer',
    iabnThinking: 'IA BN réfléchit...',
    iabnVoiceOn: 'Voix auto activée',
    iabnVoiceOff: 'Voix auto désactivée',
    iabnSpeakReply: 'Écouter',
    iabnStopSpeaking: 'Arrêter',
    iabnClearChat: 'Nouveau chat',
    iabnContextAll: 'Atlas mondial',
    iabnContextLabel: 'Pays ciblé',
    iabnOfflineWarning: 'Connexion Wi-Fi requise : activez le Wi-Fi ou les données mobiles pour que IA BN puisse répondre.',
    iabnWelcomeMessage:
      'Bonjour ! Je suis IA BN, votre guide VOYAGO. Posez-moi n’importe quelle question sur le Maroc, l’Égypte, l’Algérie, toute l’Europe ou l’Afrique, les monuments, les plats locaux ou la monnaie.',
    quickPromptsTitle: 'Idées de questions pour IA BN',
    quickPrompts: [
      'Itinéraire de 3 jours à Marrakech avec bonnes adresses culinaires',
      'Conseils pratiques et monnaie pour visiter les Pyramides de Gizeh',
      'Les plus beaux monuments historiques à Alger et Constantine',
      'Conseils paiements, pourboires et Wi-Fi eSIM en Europe',
    ],
    settingsTitle: 'Paramètres & Préférences',
    settingsSubtitle: 'Personnalisez la langue, le mode sombre, l’arrière-plan, la voix de IA BN et l’installation.',
    settingLanguageTitle: 'Langue et traduction',
    settingLanguageDesc: 'Traduit toute l’interface, les fiches pays et les réponses de IA BN.',
    settingThemeTitle: 'Apparence de l’interface',
    settingThemeDesc: 'Le mode sombre améliore le confort de lecture de jour comme de nuit.',
    lightMode: 'Mode clair',
    darkMode: 'Mode sombre',
    settingBgTitle: 'Thème d’arrière-plan',
    settingBgDesc: 'Modifiez l’ambiance visuelle de fond de VOYAGO.',
    bgPresets: {
      atlas: 'Coucher sur l’Atlas',
      obsidian: 'Obsidienne nocturne',
      mediterranean: 'Azur méditerranéen',
      sahara: 'Sable du Sahara',
      nordic: 'Ardoise nordique',
    },
    settingVoiceTitle: 'Narration vocale IA BN',
    settingVoiceDesc: 'Lire automatiquement à haute voix les réponses de IA BN.',
    settingWifiTitle: 'État Wi-Fi & Connexion',
    settingWifiDesc: 'Les fiches de base restent accessibles ; IA BN et Google Maps nécessitent le Wi-Fi.',
    settingAndroidTitle: 'APK Android & Application installable',
    settingAndroidDesc: 'Configuré avec Capacitor Android Gradle et prise en charge PWA.',
    installPwa: 'Installer VOYAGO',
    iosInstallTitle: 'Installer sur iPhone / iPad',
    iosInstallSteps: 'Touchez Partager dans Safari puis Sur l’écran d’accueil.',
    closeLabel: 'Fermer',
    monumentsGalleryTitle: 'Monuments historiques du monde',
    monumentsGallerySubtitle: 'Monuments historiques emblématiques en Belgique, Allemagne, Italie, Espagne, France, Japon, Chine, Tanzanie, Éthiopie, Maroc, Égypte, Algérie, Brésil, Argentine, Australie, Europe, Afrique, Asie et Océanie avec Google Maps.',
    noResultsTitle: 'Aucune destination trouvée',
    noResultsDesc: 'Essayez un autre nom de pays, ville ou monument, ou changez le filtre de continent.',
    resetFilters: 'Tout afficher',
  },
  ar: {
    brand: 'VOYAGO',
    heroKicker: 'جميع دول العالم · أوروبا · إفريقيا · الأمريكتان · آسيا · أوقيانوسيا',
    heroTitle: 'كل المعالم التاريخية والأطباق التقليدية وخرائط المدن في بوصلة واحدة.',
    heroSubtitle:
      'استكشف جميع دول العالم بما فيها المغرب ومصر والجزائر وفرنسا وبلجيكا وألمانيا وإيطاليا وإسبانيا واليابان والصين وتنزانيا وإثيوبيا والبرازيل والأرجنتين وأستراليا وأمريكا بالعربية والفرنسية والإنجليزية مع خرائط جوجل والمساعد IA BN.',
    startButton: 'START WITH VOYAGO',
    wifiNotice: 'يلزم توفر اتصال Wi-Fi أو إنترنت لتشغيل IA BN وخرائط جوجل',
    wifiOnline: 'متصل بالإنترنت · IA BN والخرائط جاهزان',
    wifiOffline: 'غير متصل · الدليل متاح، وصّل Wi-Fi لاستخدام IA BN',
    navExplore: 'استكشاف',
    navMonuments: 'المعالم',
    navIabn: 'اسأل IA BN',
    navSettings: 'الإعدادات',
    askIabnShort: 'اسأل IA BN',
    searchPlaceholder: 'ابحث عن أي دولة أو مدينة أو معلم تاريخي أو طعام أو عملة...',
    filterFeatured: 'وجهات مميزة',
    filterAll: 'كل العالم',
    filterEurope: 'أوروبا',
    filterAfrica: 'إفريقيا',
    filterAmericas: 'الأمريكتان',
    filterAsia: 'آسيا',
    filterOceania: 'أوقيانوسيا',
    countriesCountLabel: 'دولة',
    openGuide: 'فتح الدليل',
    openGoogleMaps: 'فتح في خرائط جوجل',
    backToAtlas: 'العودة إلى الأطلس',
    backToWelcome: 'الشاشة الرئيسية',
    tabOverview: 'المدن والمعلومات',
    tabMonuments: 'المعالم التاريخية',
    tabFood: 'الأكل والمطبخ',
    tabMoney: 'العملة والعبارات',
    capitalLabel: 'العاصمة',
    bestSeasonLabel: 'أفضل موسم',
    currencyLabel: 'العملة',
    wifiLabel: 'الإنترنت وشرائح SIM',
    majorCitiesTitle: 'أهم المدن السياحية',
    monumentsTitle: 'المعالم والآثار التاريخية',
    foodTitle: 'الأطباق التقليدية والمطبخ المحلي',
    foodSubtitle: 'أشهر الأكلات الوطنية وأطعمة الشارع والضيافة',
    moneyTitle: 'النقود والعملة ونصائح الصرف',
    phrasesTitle: 'عبارات محلية أساسية للمسافر',
    liveBriefButton: 'إنشاء دليل IA BN مباشر لـ 3 أيام',
    liveBriefLoading: 'يقوم IA BN بإعداد الدليل السياحي المباشر...',
    liveBriefTitle: 'تقرير السفر المباشر من IA BN',
    askAboutCountry: 'اسأل IA BN عن هذه الدولة',
    iabnTitle: 'IA BN — رفيق السفر الذكي',
    iabnSubtitle: 'اسأل أي سؤال عن المعالم التاريخية أو الأكل أو العملة أو المواصلات. يجيبك IA BN ويتحدث معك بلغتك.',
    iabnPlaceholder: 'اسأل IA BN أي سؤال (مثال: أفضل أطباق مراكش، نصائح زيارة الأهرامات، عملة فرنسا)...',
    iabnSend: 'إرسال',
    iabnThinking: 'IA BN يفكر...',
    iabnVoiceOn: 'النطق التلقائي مفعّل',
    iabnVoiceOff: 'النطق التلقائي متوقف',
    iabnSpeakReply: 'استماع',
    iabnStopSpeaking: 'إيقاف',
    iabnClearChat: 'محادثة جديدة',
    iabnContextAll: 'الأطلس العالمي',
    iabnContextLabel: 'الدولة المحددة',
    iabnOfflineWarning: 'مطلوب اتصال Wi-Fi: يرجى الاتصال بالإنترنت ليتمكن IA BN من الإجابة على أسئلتك.',
    iabnWelcomeMessage:
      'مرحباً بك! أنا IA BN رفيقك في VOYAGO. اسألني أي سؤال حول المغرب ومصر والجزائر وأوروبا وإفريقيا والمعالم التاريخية والأكلات التقليدية والعملات.',
    quickPromptsTitle: 'أسئلة سريعة لـ IA BN',
    quickPrompts: [
      'خطط لي رحلة 3 أيام في مراكش وجبال الأطلس مع أشهر الأكلات',
      'نصائح العملة والبقشيش وزيارة أهرامات الجيزة في مصر',
      'أجمل المعالم التاريخية في الجزائر العاصمة وقسنطينة',
      'أفضل نصائح الدفع بالبطاقة وشرائح الإنترنت في أوروبا',
    ],
    settingsTitle: 'القائمة والإعدادات',
    settingsSubtitle: 'تخصيص اللغة والوضع الليلي وخلفية التطبيق وصوت IA BN وتثبيت التطبيق.',
    settingLanguageTitle: 'لغة التطبيق والترجمة',
    settingLanguageDesc: 'تغيير لغة الواجهة ومعلومات الدول وإجابات IA BN بالكامل.',
    settingThemeTitle: 'مظهر الواجهة',
    settingThemeDesc: 'الوضع الليلي يريح العين أثناء التصفح ليلاً أو في السفر.',
    lightMode: 'الوضع النهاري',
    darkMode: 'الوضع الليلي',
    settingBgTitle: 'نمط الخلفية',
    settingBgDesc: 'اختر لون وأجواء الخلفية المناسبة لك في التطبيق.',
    bgPresets: {
      atlas: 'غروب الأطلس',
      obsidian: 'ليل داكن',
      mediterranean: 'أزرق متوسطي',
      sahara: 'رمال الصحراء',
      nordic: 'رمادي شمالي',
    },
    settingVoiceTitle: 'النطق الصوتي لـ IA BN',
    settingVoiceDesc: 'قراءة إجابات IA BN صوتياً بشكل تلقائي عند الرد.',
    settingWifiTitle: 'حالة Wi-Fi والاتصال',
    settingWifiDesc: 'بيانات الدول الأساسية متاحة دائماً، بينما يحتاج IA BN وخرائط جوجل إلى Wi-Fi.',
    settingAndroidTitle: 'تطبيق أندرويد APK والتثبيت',
    settingAndroidDesc: 'مجهّز بإعدادات Capacitor Android Gradle ودعم تطبيق الويب التقدمي.',
    installPwa: 'تثبيت تطبيق VOYAGO',
    iosInstallTitle: 'التثبيت على iPhone / iPad',
    iosInstallSteps: 'اضغط على مشاركة في متصفح Safari ثم اختر الإضافة إلى الشاشة الرئيسية.',
    closeLabel: 'إغلاق',
    monumentsGalleryTitle: 'معالم العالم التاريخية',
    monumentsGallerySubtitle: 'أشهر المعالم والآثار التاريخية في بلجيكا وألمانيا وإيطاليا وإسبانيا وفرنسا واليابان والصين وتنزانيا وإثيوبيا والمغرب ومصر والجزائر والبرازيل والأرجنتين وأستراليا وأوروبا وإفريقيا وآسيا وأوقيانوسيا مع روابط خرائط جوجل.',
    noResultsTitle: 'لا توجد نتائج مطابقة',
    noResultsDesc: 'جرّب البحث باسم دولة أو مدينة أو معلم آخر، أو غيّر تصنيف القارة.',
    resetFilters: 'عرض جميع الدول',
  },
};
