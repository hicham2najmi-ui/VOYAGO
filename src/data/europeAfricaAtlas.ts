import { CountryGuide, LocalizedText } from '../types/voyago';
import { VOYAGO_IMAGES } from './featuredCountries';

interface CompactCountrySeed {
  id: string;
  code: string;
  flag: string;
  continent: 'europe' | 'africa' | 'americas';
  subregion: LocalizedText;
  name: LocalizedText;
  capital: LocalizedText;
  cities: string[];
  monument: {
    en: string;
    fr: string;
    ar: string;
    city: string;
    era: string;
    descEn: string;
    descFr: string;
    descAr: string;
  };
  dish: {
    en: string;
    fr: string;
    ar: string;
    descEn: string;
    descFr: string;
    descAr: string;
  };
  currency: {
    code: string;
    symbol: string;
    nameEn: string;
    nameFr: string;
    nameAr: string;
  };
  bestSeason?: 'summer' | 'spring' | 'winter' | 'yearround';
  image?: string;
}

function buildSeason(type: CompactCountrySeed['bestSeason']): LocalizedText {
  switch (type) {
    case 'winter':
      return { en: 'November–March', fr: 'Novembre–Mars', ar: 'نوفمبر–مارس' };
    case 'yearround':
      return { en: 'Year-round (Dry season preferred)', fr: 'Toute l’année (saison sèche idéale)', ar: 'طوال العام (يفضل الموسم الجاف)' };
    case 'summer':
      return { en: 'June–September', fr: 'Juin–Septembre', ar: 'يونيو–سبتمبر' };
    default:
      return { en: 'April–June & September–October', fr: 'Avril–Juin & Septembre–Octobre', ar: 'أبريل–يونيو وسبتمبر–أكتوبر' };
  }
}

function buildCountry(seed: CompactCountrySeed): CountryGuide {
  const image =
    seed.image ||
    (seed.continent === 'europe'
      ? VOYAGO_IMAGES.europe
      : seed.id === 'tunisia' || seed.id === 'libya'
      ? VOYAGO_IMAGES.algeria
      : seed.continent === 'africa'
      ? VOYAGO_IMAGES.morocco
      : VOYAGO_IMAGES.hero);

  const isEuro = seed.currency.code === 'EUR';

  return {
    id: seed.id,
    code: seed.code,
    flag: seed.flag,
    continent: seed.continent,
    subregion: seed.subregion,
    name: seed.name,
    capital: seed.capital,
    bestSeason: buildSeason(seed.bestSeason),
    summary: {
      en: `Discover ${seed.name.en} from ${seed.capital.en} to ${seed.cities.slice(0, 2).join(' and ')}, featuring ${seed.monument.en}, traditional ${seed.dish.en}, and travel tips in ${seed.currency.code}.`,
      fr: `Découvrez ${seed.name.fr} de ${seed.capital.fr} à ${seed.cities.slice(0, 2).join(' et ')}, avec ${seed.monument.fr}, la spécialité ${seed.dish.fr} et conseils pratiques en ${seed.currency.code}.`,
      ar: `اكتشف ${seed.name.ar} بدءاً من ${seed.capital.ar} وزيارة ${seed.monument.ar} وتذوق ${seed.dish.ar} مع معلومات العملة (${seed.currency.code}) وخرائط جوجل.`,
    },
    wifiTips: {
      en: `Tourist eSIMs and airport SIM cards work reliably in ${seed.capital.en} and major cities; hotels and cafés provide Wi-Fi.`,
      fr: `Les eSIM touristiques et cartes SIM d’aéroport offrent une bonne connexion à ${seed.capital.fr} ; Wi-Fi disponible dans les hôtels.`,
      ar: `تتوفر شرائح eSIM وبطاقات الاتصال في مطار ${seed.capital.ar}، كما يتوفر Wi-Fi في الفنادق والمقاهي الرئيسية.`,
    },
    heroImage: image,
    mapsQuery: `${seed.name.en} tourist attractions ${seed.capital.en}`,
    currency: {
      code: seed.currency.code,
      symbol: seed.currency.symbol,
      name: { en: seed.currency.nameEn, fr: seed.currency.nameFr, ar: seed.currency.nameAr },
      tips: isEuro
        ? {
            en: 'Contactless cards and Apple/Google Pay are widely accepted; keep small Euro bills for cafés and markets.',
            fr: 'Paiement par carte sans contact largement accepté ; gardez de petites coupures en euros pour les marchés.',
            ar: 'البطاقات البنكية مقبولة على نطاق واسع، مع حمل بعض اليورو النقدي للأسواق والمقاهي.',
          }
        : {
            en: `Use official ATMs or banks for ${seed.currency.code} cash; major hotels accept cards while markets and local transport prefer cash.`,
            fr: `Retirez du ${seed.currency.code} aux distributeurs officiels ; les hôtels acceptent les cartes, les marchés préfèrent l’espèce.`,
            ar: `اسحب عملة ${seed.currency.code} من أجهزة الصراف الرسمية؛ الفنادق تقبل البطاقات والأسواق تفضل الدفع النقدي.`,
          },
    },
    cities: seed.cities.map((c) => ({
      name: { en: c, fr: c, ar: c },
      highlight: {
        en: `Historic quarters, local markets, and cultural landmarks in ${c}.`,
        fr: `Quartiers historiques, marchés locaux et sites culturels à ${c}.`,
        ar: `الأحياء التاريخية والأسواق التقليدية والمعالم السياحية في ${c}.`,
      },
      mapsQuery: `${c}, ${seed.name.en}`,
    })),
    monuments: [
      {
        id: `${seed.id}-monument-1`,
        name: { en: seed.monument.en, fr: seed.monument.fr, ar: seed.monument.ar },
        city: seed.monument.city,
        era: seed.monument.era,
        description: {
          en: seed.monument.descEn,
          fr: seed.monument.descFr,
          ar: seed.monument.descAr,
        },
        image,
        mapsQuery: `${seed.monument.en} ${seed.monument.city} ${seed.name.en}`,
      },
    ],
    dishes: [
      {
        name: { en: seed.dish.en, fr: seed.dish.fr, ar: seed.dish.ar },
        category: { en: 'Signature Dish', fr: 'Spécialité nationale', ar: 'طبق تقليدي' },
        description: {
          en: seed.dish.descEn,
          fr: seed.dish.descFr,
          ar: seed.dish.descAr,
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: seed.continent === 'europe' ? 'Hello / Bonjour' : 'Hello / Salam', pronunciation: 'Local greeting' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Thank you', pronunciation: 'Polite thanks' },
    ],
  };
}

const EUROPE_SEEDS: CompactCountrySeed[] = [
  {
    id: 'albania', code: 'AL', flag: '🇦🇱', continent: 'europe',
    subregion: { en: 'Balkans', fr: 'Balkans', ar: 'البلقان' },
    name: { en: 'Albania', fr: 'Albanie', ar: 'ألبانيا' },
    capital: { en: 'Tirana', fr: 'Tirana', ar: 'تيرانا' },
    cities: ['Tirana', 'Berat', 'Gjirokastër', 'Sarandë'],
    monument: { en: 'Berat Historic Castle', fr: 'Château de Berat', ar: 'قلعة بيرات التاريخية', city: 'Berat', era: '4th Century BCE – Ottoman', descEn: 'Hilltop citadel overlooking white Ottoman houses known as the Town of a Thousand Windows.', descFr: 'Citadelle dominant les maisons blanches ottomanes de la ville aux mille fenêtres.', descAr: 'قلعة تاريخية تطل على بيوت بيرات العثمانية البيضاء ذات النوافذ الكثيرة.' },
    dish: { en: 'Tavë Kosi & Byrek', fr: 'Tavë Kosi & Byrek', ar: 'تافي كوسي والبوريك', descEn: 'Baked lamb in tangy yogurt-rice sauce paired with flaky filled pastries.', descFr: 'Agneau rôti au yaourt et riz accompagné de feuilletés croustillants.', descAr: 'لحم مخبوز بصلصة الزبادي والأرز مع فطائر البوريك المقرمشة.' },
    currency: { code: 'ALL', symbol: 'L', nameEn: 'Albanian Lek', nameFr: 'Lek albanais', nameAr: 'الليك الألباني' },
  },
  {
    id: 'andorra', code: 'AD', flag: '🇦🇩', continent: 'europe',
    subregion: { en: 'Pyrenees', fr: 'Pyrénées', ar: 'جبال البرانس' },
    name: { en: 'Andorra', fr: 'Andorre', ar: 'أندورا' },
    capital: { en: 'Andorra la Vella', fr: 'Andorre-la-Vieille', ar: 'أندورا لا فيلا' },
    cities: ['Andorra la Vella', 'Ordino', 'Canillo'],
    monument: { en: 'Casa de la Vall & Santa Coloma Romanesque Church', fr: 'Casa de la Vall & Église Santa Coloma', ar: 'كاسا دي لا فال وكنيسة سانتا كولوما', city: 'Andorra la Vella', era: '9th–16th Century (1580)', descEn: 'Stone Pyrenean manor housing Andorra’s General Council since 1702 beside Santa Coloma’s rare 9th-century pre-Romanesque cylindrical bell tower.', descFr: 'Manoir de pierre abritant le Conseil général d’Andorre depuis 1702 près du clocher cylindrique préroman du IXe siècle de Santa Coloma.', descAr: 'مقر البرلمان التاريخي منذ 1702 في جبال البرانس بجوار كنيسة سانتا كولوما العائدة للقرن التاسع الميلادي.' },
    dish: { en: 'Escudella & Trinxat', fr: 'Escudella & Trinxat', ar: 'إسكوديلا وترينكسات', descEn: 'Hearty Pyrenean mountain stew of vegetables, meats, and pasta served hot in winter.', descFr: 'Pot-au-feu montagnard pyrénéen aux légumes et viandes.', descAr: 'يخنة جبلية دافئة باللحم والخضار والمكرونة.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    bestSeason: 'summer',
    image: VOYAGO_IMAGES.europe,
  },
  {
    id: 'austria', code: 'AT', flag: '🇦🇹', continent: 'europe',
    subregion: { en: 'Central Europe', fr: 'Europe centrale', ar: 'أوروبا الوسطى' },
    name: { en: 'Austria', fr: 'Autriche', ar: 'النمسا' },
    capital: { en: 'Vienna', fr: 'Vienne', ar: 'فيينا' },
    cities: ['Vienna', 'Salzburg', 'Innsbruck', 'Hallstatt'],
    monument: { en: 'Schönbrunn Palace', fr: 'Château de Schönbrunn', ar: 'قصر شونبرون', city: 'Vienna', era: '1696–1749', descEn: 'Imperial baroque summer palace of the Habsburgs surrounded by formal gardens and the Gloriette.', descFr: 'Palais impérial baroque des Habsbourg entouré de jardins royaux.', descAr: 'القصر الإمبراطوري الباروكي لعائلة هابسبورغ بحدائقه الملكية في فيينا.' },
    dish: { en: 'Wiener Schnitzel & Sachertorte', fr: 'Wiener Schnitzel & Sachertorte', ar: 'شنيتسل فيينا وكعكة زاخر', descEn: 'Golden crisp breaded cutlet and rich apricot-glazed chocolate cake.', descFr: 'Escalope panée dorée et célèbre gâteau au chocolat et abricot.', descAr: 'شريحة لحم مقرمشة مع أشهر كعكة شوكولاتة ومربى المشمش في فيينا.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    image: VOYAGO_IMAGES.czechia,
  },
  {
    id: 'belarus', code: 'BY', flag: '🇧🇾', continent: 'europe',
    subregion: { en: 'Eastern Europe', fr: 'Europe de l’Est', ar: 'أوروبا الشرقية' },
    name: { en: 'Belarus', fr: 'Biélorussie', ar: 'بيلاروسيا' },
    capital: { en: 'Minsk', fr: 'Minsk', ar: 'مينسك' },
    cities: ['Minsk', 'Mir', 'Nesvizh', 'Brest'],
    monument: { en: 'Mir Castle Complex & Nesvizh Palace', fr: 'Château de Mir & Palais de Nesvij', ar: 'قلعة مير وقصر نيسفيج', city: 'Mir / Nesvizh', era: '1520s–16th Century UNESCO', descEn: 'Five-towered Gothic-Renaissance brick fortress built in the early 1500s beside mirror lakes, paired with the Radziwiłł Baroque palace at Nesvizh.', descFr: 'Forteresse gothique et Renaissance à cinq tours bâtie au XVIe siècle au bord d’un lac, avec le palais baroque de Nesvij.', descAr: 'قلعة تاريخية من خمسة أبراج من القرن السادس عشر مصنفة في اليونسكو على ضفاف البحيرة بجوار قصر نيسفيج.' },
    dish: { en: 'Draniki & Machanka', fr: 'Draniki & Machanka', ar: 'درانيكي وماتشانكا', descEn: 'Crispy grated potato pancakes served warm with sour cream and traditional mushroom stew.', descFr: 'Galettes croustillantes de pommes de terre râpées servies avec de la crème.', descAr: 'فطائر البطاطس المبشورة المقرمشة تقدم ساخنة مع الكريمة.' },
    currency: { code: 'BYN', symbol: 'Br', nameEn: 'Belarusian Ruble', nameFr: 'Rouble biélorusse', nameAr: 'الروبل البيلاروسي' },
    bestSeason: 'summer',
    image: VOYAGO_IMAGES.czechia,
  },
  {
    id: 'belgium', code: 'BE', flag: '🇧🇪', continent: 'europe',
    subregion: { en: 'Western Europe', fr: 'Europe de l’Ouest', ar: 'أوروبا الغربية' },
    name: { en: 'Belgium', fr: 'Belgique', ar: 'بلجيكا' },
    capital: { en: 'Brussels', fr: 'Bruxelles', ar: 'بروكسل' },
    cities: ['Brussels', 'Bruges', 'Ghent', 'Antwerp'],
    monument: { en: 'Grand-Place & Belfry of Bruges', fr: 'Grand-Place & Beffroi de Bruges', ar: 'الساحة الكبرى وبرج بروج', city: 'Brussels / Bruges', era: '15th–17th Century (1695)', descEn: 'Gilded guildhalls and the 96-meter Gothic Town Hall spire framing Brussels’ UNESCO square, complemented by Bruges’ 13th-century medieval belfry.', descFr: 'Maisons de corporations dorées et flèche gothique de 96 m sur la Grand-Place classée à l’UNESCO, avec le beffroi médiéval de Bruges.', descAr: 'مباني النقابات المذهبة وبرج البلدية القوطي بارتفاع 96 متراً في الساحة الكبرى ببروكسل وبرج بروج التاريخي.' },
    dish: { en: 'Belgian Waffles & Moules-Frites', fr: 'Gaufres & Moules-frites', ar: 'الوافل البلجيكي والبطاطس', descEn: 'Caramelized Liège waffles, artisan pralines, and steamed mussels with crisp twice-fried frites.', descFr: 'Gaufres de Liège caramélisées, pralines artisanales et moules-frites.', descAr: 'وافل لييج بالكراميل والشوكولاتة البلجيكية الفاخرة مع البطاطس المقلية.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    image: VOYAGO_IMAGES.belgium,
  },
  {
    id: 'bosnia', code: 'BA', flag: '🇧🇦', continent: 'europe',
    subregion: { en: 'Balkans', fr: 'Balkans', ar: 'البلقان' },
    name: { en: 'Bosnia & Herzegovina', fr: 'Bosnie-Herzégovine', ar: 'البوسنة والهرسك' },
    capital: { en: 'Sarajevo', fr: 'Sarajevo', ar: 'سراييفو' },
    cities: ['Sarajevo', 'Mostar', 'Jajce', 'Travnik'],
    monument: { en: 'Stari Most (Old Bridge)', fr: 'Stari Most de Mostar', ar: 'جسر موستار القديم', city: 'Mostar', era: '1566 (Ottoman)', descEn: 'Graceful 16th-century single-arch limestone bridge spanning the emerald Neretva River.', descFr: 'Arche ottomane emblématique du XVIe siècle enjambant la rivière Neretva.', descAr: 'جسر حجري عثماني مقوس من القرن السادس عشر يعبر نهر نيريتفا.' },
    dish: { en: 'Ćevapi & Bosnian Coffee', fr: 'Ćevapi & Café bosnien', ar: 'تشيفابي والقهوة البوسنية', descEn: 'Grilled spiced minced meat served in warm somun flatbread with onions and roasted coffee.', descFr: 'Grillades épicées servies dans un pain somun chaud avec café bosnien.', descAr: 'أصابع اللحم المشوي في خبز الصمون الساخن مع القهوة البوسنية التقليدية.' },
    currency: { code: 'BAM', symbol: 'KM', nameEn: 'Convertible Mark', nameFr: 'Mark convertible', nameAr: 'المارك البوسني' },
    image: VOYAGO_IMAGES.croatia,
  },
  {
    id: 'bulgaria', code: 'BG', flag: '🇧🇬', continent: 'europe',
    subregion: { en: 'Balkans', fr: 'Balkans', ar: 'البلقان' },
    name: { en: 'Bulgaria', fr: 'Bulgarie', ar: 'بلغاريا' },
    capital: { en: 'Sofia', fr: 'Sofia', ar: 'صوفيا' },
    cities: ['Sofia', 'Plovdiv', 'Veliko Tarnovo', 'Varna'],
    monument: { en: 'Rila Monastery & Plovdiv Roman Theatre', fr: 'Monastère de Rila & Théâtre romain de Plovdiv', ar: 'دير ريلا والمسرح الروماني في بلوفديف', city: 'Rila Mountains / Plovdiv', era: '2nd–19th Century', descEn: 'Founded in the 10th century by St. John of Rila, this striped-arcade mountain sanctuary pairs with Plovdiv’s 2nd-century Roman marble amphitheater.', descFr: 'Fondé au Xe siècle dans les montagnes du Rila, célèbre pour ses fresques colorées, et théâtre romain antique de Plovdiv.', descAr: 'تأسس دير ريلا في القرن العاشر وسط الجبال بأقواسه وجدارياته الفريدة إلى جانب مسرح بلوفديف الروماني القديم.' },
    dish: { en: 'Banitsa & Shopska Salad', fr: 'Banitsa & Salade Shopska', ar: 'بانيتسا وسلطة شوبسكا', descEn: 'Layered cheese filo pastry alongside crisp tomato-cucumber salad topped with sirene cheese.', descFr: 'Feuilleté au fromage blanc servi avec la salade fraîche aux poivrons et feta.', descAr: 'فطيرة رقائق بالجبن مع سلطة الخضار والجبن الأبيض البلغاري.' },
    currency: { code: 'BGN', symbol: 'лв', nameEn: 'Bulgarian Lev', nameFr: 'Lev bulgare', nameAr: 'الليف البلغاري' },
    image: VOYAGO_IMAGES.greece,
  },
  {
    id: 'croatia', code: 'HR', flag: '🇭🇷', continent: 'europe',
    subregion: { en: 'Adriatic Bay & Dalmatia', fr: 'Baie adriatique & Dalmatie', ar: 'خليج الأدرياتيك ودالماسيا' },
    name: { en: 'Croatia', fr: 'Croatie', ar: 'كرواتيا' },
    capital: { en: 'Zagreb', fr: 'Zagreb', ar: 'زغرب' },
    cities: ['Dubrovnik', 'Split', 'Zagreb', 'Zadar'],
    monument: { en: 'Walls of Dubrovnik Bay & Diocletian’s Palace', fr: 'Remparts de la baie de Dubrovnik & Palais de Dioclétien', ar: 'أسوار خليج دوبروفنيك وقصر دقلديانوس', city: 'Dubrovnik / Split', era: '305 CE & 12th–16th Century', descEn: 'Two-kilometer maritime limestone ramparts encircling Dubrovnik’s Old Town above a turquoise Adriatic bay, paired with Emperor Diocletian’s 4th-century Split palace.', descFr: 'Remparts maritimes monumentaux encadrant Dubrovnik face à une baie turquoise adriatique, et palais romain de Dioclétien du IVe siècle à Split.', descAr: 'أسوار حجرية بحرية بطول كيلومترين تحيط بدوبروفنيك فوق خليج البحر الأدرياتيكي الفيروزي وقصر دقلديانوس الروماني من القرن الرابع.' },
    dish: { en: 'Peka & Adriatic Black Risotto', fr: 'Peka & Risotto noir adriatique', ar: 'بيكا والريزوتو البحري', descEn: 'Slow-roasted meat or octopus under an iron bell and Adriatic squid-ink risotto.', descFr: 'Viande ou poulpe mijotés sous cloche et risotto adriatique à l’encre de seiche.', descAr: 'لحم أو مأكولات بحرية مطهوة ببطء مع أرز البحر الأدرياتيكي.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    image: VOYAGO_IMAGES.croatia,
  },
  {
    id: 'czechia', code: 'CZ', flag: '🇨🇿', continent: 'europe',
    subregion: { en: 'Central Europe', fr: 'Europe centrale', ar: 'أوروبا الوسطى' },
    name: { en: 'Czechia', fr: 'Tchéquie', ar: 'التشيك' },
    capital: { en: 'Prague', fr: 'Prague', ar: 'براغ' },
    cities: ['Prague', 'Český Krumlov', 'Brno', 'Karlovy Vary'],
    monument: { en: 'Prague Castle & Charles Bridge', fr: 'Château de Prague & Pont Charles', ar: 'قلعة براغ وجسر تشارلز', city: 'Prague', era: '880 CE – 1357 CE', descEn: 'The world’s largest ancient castle complex (founded c. 880 CE) crowned by St. Vitus Cathedral and linked across the Vltava by Emperor Charles IV’s 1357 stone bridge.', descFr: 'Plus grand château ancien du monde (fondé vers 880) dominé par la cathédrale Saint-Guy et relié par le pont Charles de 1357 sur la Vltava.', descAr: 'أكبر مجمع قلاع تاريخي في العالم تأسس نحو 880 م، يتوجه كاتدرائية القديس فيتوس وجسر تشارلز الحجري منذ 1357.' },
    dish: { en: 'Svíčková & Trdelník', fr: 'Svíčková & Trdelník', ar: 'سفيشكوفا وترديلنيك', descEn: 'Creamy root-vegetable sauce with bread dumplings and warm cinnamon pastry rolls.', descFr: 'Sauce onctueuse aux légumes racines avec quenelles de pain et pâtisserie à la cannelle.', descAr: 'طبق تقليدي بالصلصة الكريمية والخبز مع حلوى الترديلنيك بالقرفة.' },
    currency: { code: 'CZK', symbol: 'Kč', nameEn: 'Czech Koruna', nameFr: 'Couronne tchèque', nameAr: 'الكورونا التشيكية' },
    image: VOYAGO_IMAGES.czechia,
  },
  {
    id: 'denmark', code: 'DK', flag: '🇩🇰', continent: 'europe',
    subregion: { en: 'Northern Europe', fr: 'Europe du Nord', ar: 'شمال أوروبا' },
    name: { en: 'Denmark', fr: 'Danemark', ar: 'الدنمارك' },
    capital: { en: 'Copenhagen', fr: 'Copenhague', ar: 'كوبنهاغن' },
    cities: ['Copenhagen', 'Aarhus', 'Odense', 'Roskilde'],
    monument: { en: 'Kronborg Castle & Nyhavn Harbor', fr: 'Château de Kronborg & Port de Nyhavn', ar: 'قلعة كرونبورغ وميناء نيهافن', city: 'Helsingør / Copenhagen', era: '1585 & 1673', descEn: 'UNESCO 16th-century Renaissance sound fortress immortalized by Shakespeare as Elsinore alongside 17th-century timber-and-gable merchant houses along Nyhavn canal.', descFr: 'Forteresse Renaissance de 1585 immortalisée par Shakespeare (Elseneur) et façades colorées du XVIIe siècle du canal de Nyhavn.', descAr: 'قلعة عصر النهضة التاريخية من عام 1585 وواجهة قناة نيهافن الملونة في كوبنهاغن.' },
    dish: { en: 'Smørrebrød & Wienerbrød', fr: 'Smørrebrød & Pâtisseries danoises', ar: 'سموربرود والمعجنات الدنماركية', descEn: 'Open-faced rye sandwiches topped with cured fish or roast meats and flaky cardamom pastries.', descFr: 'Tartines de seigle garnies et viennoiseries feuilletées à la cardamome.', descAr: 'شطائر خبز الجاودار المفتوحة مع معجنات الهيل الدنماركية.' },
    currency: { code: 'DKK', symbol: 'kr', nameEn: 'Danish Krone', nameFr: 'Couronne danoise', nameAr: 'الكرونة الدنماركية' },
    bestSeason: 'summer',
    image: VOYAGO_IMAGES.nordic,
  },
  {
    id: 'estonia', code: 'EE', flag: '🇪🇪', continent: 'europe',
    subregion: { en: 'Baltics', fr: 'Pays baltes', ar: 'دول البلطيق' },
    name: { en: 'Estonia', fr: 'Estonie', ar: 'إستونيا' },
    capital: { en: 'Tallinn', fr: 'Tallinn', ar: 'تالين' },
    cities: ['Tallinn', 'Tartu', 'Pärnu'],
    monument: { en: 'Tallinn Medieval Old Town & Toompea Castle', fr: 'Vieille ville de Tallinn & Château de Toompea', ar: 'البلدة القديمة في تالين وقلعة تومبيا', city: 'Tallinn', era: '13th–15th Century UNESCO', descEn: 'One of Northern Europe’s best-preserved Hanseatic walled cities, crowned by red-coned stone watchtowers, Gothic Town Hall (1404), and limestone Toompea Hill.', descFr: 'Cité hanséatique médiévale remarquablement préservée avec ses tours à toits coniques rouges, l’Hôtel de Ville de 1404 et la colline de Toompea.', descAr: 'إحدى أفضل المدن الهانزية المحفوظة في شمال أوروبا بأسوارها وأبراجها القوطية وقاعة البلدية منذ 1404.' },
    dish: { en: 'Black Rye Bread & Kama', fr: 'Pain de seigle noir & Kama', ar: 'خبز الجاودار الأسود وكاما', descEn: 'Aromatic dark sourdough bread and roasted grain dessert with berries.', descFr: 'Pain noir parfumé au seigle et dessert traditionnel aux céréales grillées.', descAr: 'خبز الجاودار الأسود التقليدي وحلوى الحبوب المحمصة بالتوت.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    bestSeason: 'summer',
    image: VOYAGO_IMAGES.nordic,
  },
  {
    id: 'finland', code: 'FI', flag: '🇫🇮', continent: 'europe',
    subregion: { en: 'Northern Europe', fr: 'Europe du Nord', ar: 'شمال أوروبا' },
    name: { en: 'Finland', fr: 'Finlande', ar: 'فنلندا' },
    capital: { en: 'Helsinki', fr: 'Helsinki', ar: 'هلسنكي' },
    cities: ['Helsinki', 'Rovaniemi', 'Turku', 'Tampere'],
    monument: { en: 'Suomenlinna Sea Fortress & Turku Castle', fr: 'Forteresse de Suomenlinna & Château de Turku', ar: 'قلعة سومينلينا البحرية وقلعة توركو', city: 'Helsinki / Turku', era: '1280 & 1748 CE', descEn: 'UNESCO 18th-century star-shaped sea bastion built across six granite islands in Helsinki harbor alongside 13th-century medieval Turku Castle.', descFr: 'Bastion maritime étoilé du XVIIIe siècle bâti sur six îles à Helsinki et château médiéval de Turku fondé en 1280.', descAr: 'حصن بحري تاريخي من القرن الثامن عشر مبني على ست جزر قبالة هلسنكي إلى جانب قلعة توركو منذ عام 1280.' },
    dish: { en: 'Karjalanpiirakka & Salmon Soup', fr: 'Tartelettes caréliennes & Soupe au saumon', ar: 'فطائر كاريليان وحساء السلمون', descEn: 'Crisp rye-crust rice pies and creamy dill-infused Nordic salmon soup.', descFr: 'Tartelettes de seigle au riz et velouté nordique au saumon et à l’aneth.', descAr: 'فطائر الجاودار بالأرز وحساء السلمون الكريمي بالشبت.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    bestSeason: 'summer',
    image: VOYAGO_IMAGES.nordic,
  },
  {
    id: 'germany', code: 'DE', flag: '🇩🇪', continent: 'europe',
    subregion: { en: 'Central Europe', fr: 'Europe centrale', ar: 'أوروبا الوسطى' },
    name: { en: 'Germany', fr: 'Allemagne', ar: 'ألمانيا' },
    capital: { en: 'Berlin', fr: 'Berlin', ar: 'برلين' },
    cities: ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Heidelberg'],
    monument: { en: 'Brandenburg Gate & Cologne Cathedral', fr: 'Porte de Brandebourg & Cathédrale de Cologne', ar: 'بوابة براندنبورغ وكاتدرائية كولونيا', city: 'Berlin / Cologne / Bavaria', era: '1248 & 1791', descEn: 'Berlin’s 1791 neoclassical sandstone triumphal gate crowned by the bronze Quadriga, paired with Cologne’s Gothic spires and Bavaria’s Neuschwanstein Castle.', descFr: 'Porte néoclassique de 1791 coiffée du quadrige à Berlin, cathédrale gothique de Cologne et château romantique de Neuschwanstein.', descAr: 'بوابة براندنبورغ الكلاسيكية منذ 1791 في برلين، وكاتدرائية كولونيا القوطية، وقصر نويشفانشتاين.' },
    dish: { en: 'Pretzel, Currywurst & Apple Strudel', fr: 'Bretzel, Currywurst & Strudel', ar: 'بريتزل وكوريوورست وشترودل التفاح', descEn: 'Warm lye-baked pretzels, spiced street favorites, and warm spiced apple pastry.', descFr: 'Bretzels dorés au gros sel, spécialités berlinoises et strudel aux pommes.', descAr: 'خبز البريتزل المملح وشترودل التفاح الدافئ بالقرفة.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    image: VOYAGO_IMAGES.germany,
  },
  {
    id: 'greece', code: 'GR', flag: '🇬🇷', continent: 'europe',
    subregion: { en: 'Southern Europe', fr: 'Europe du Sud', ar: 'جنوب أوروبا' },
    name: { en: 'Greece', fr: 'Grèce', ar: 'اليونان' },
    capital: { en: 'Athens', fr: 'Athènes', ar: 'أثينا' },
    cities: ['Athens', 'Santorini', 'Thessaloniki', 'Crete', 'Rhodes'],
    monument: { en: 'Acropolis & Parthenon', fr: 'Acropole & Parthénon', ar: 'الأكروبوليس والبارثينون', city: 'Athens', era: '447–432 BCE (Classical Greece)', descEn: 'Sculpted from Pentelic marble under Pericles in the 5th century BCE, the Doric Parthenon atop the Acropolis stands as the enduring monument of classical antiquity.', descFr: 'Édifié en marbre pentélique au Ve siècle av. J.-C., le Parthénon sur l’Acropole incarne l’apogée de l’architecture grecque classique.', descAr: 'شُيّد معبد البارثينون من الرخام في القرن الخامس قبل الميلاد فوق هضبة الأكروبوليس كأبرز صرح للحضارة الإغريقية.' },
    dish: { en: 'Moussaka, Souvlaki & Baklava', fr: 'Moussaka, Souvlaki & Baklava', ar: 'المسقعة اليونانية والسوفلاكي والبقلاوة', descEn: 'Layered eggplant and béchamel bake, charcoal-grilled skewers, and honey-pistachio filo.', descFr: 'Gratin d’aubergines à la béchamel, brochettes grillées et feuilletés au miel.', descAr: 'باذنجان مشوي بالبشاميل وأسياخ مشوية وحلوى البقلاوة بالعسل.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    image: VOYAGO_IMAGES.greece,
  },
  {
    id: 'hungary', code: 'HU', flag: '🇭🇺', continent: 'europe',
    subregion: { en: 'Central Europe', fr: 'Europe centrale', ar: 'أوروبا الوسطى' },
    name: { en: 'Hungary', fr: 'Hongrie', ar: 'المجر' },
    capital: { en: 'Budapest', fr: 'Budapest', ar: 'بودابست' },
    cities: ['Budapest', 'Eger', 'Pécs', 'Lake Balaton'],
    monument: { en: 'Buda Castle & Hungarian Parliament', fr: 'Château de Buda & Parlement hongrois', ar: 'قلعة بودا والبرلمان المجري', city: 'Budapest', era: '13th–19th Century (1885–1904)', descEn: 'Monumental Neo-Gothic Parliament along the Danube facing medieval Buda Castle, Matthias Church, and Fisherman’s Bastion on Castle Hill.', descFr: 'Parlement néogothique monumental sur le Danube face au château médiéval de Buda et au Bastion des Pêcheurs.', descAr: 'مبنى البرلمان القوطي المهيب على نهر الدانوب مقابل قلعة بودا التاريخية وحصن الصيادين.' },
    dish: { en: 'Goulash & Lángos', fr: 'Goulasch & Lángos', ar: 'الغولاش المجري واللانغوش', descEn: 'Paprika-spiced beef soup and crisp golden fried dough topped with garlic and sour cream.', descFr: 'Soupe généreuse au paprika doux et galette dorée à la crème et au fromage.', descAr: 'حساء الغولاش بالبابريكا الحلوة مع خبز اللانغوش المقلي بالجبن.' },
    currency: { code: 'HUF', symbol: 'Ft', nameEn: 'Hungarian Forint', nameFr: 'Forint hongrois', nameAr: 'الفورنت المجري' },
    image: VOYAGO_IMAGES.czechia,
  },
  {
    id: 'iceland', code: 'IS', flag: '🇮🇸', continent: 'europe',
    subregion: { en: 'Nordic Islands', fr: 'Îles nordiques', ar: 'الجزر الشمالية' },
    name: { en: 'Iceland', fr: 'Islande', ar: 'آيسلندا' },
    capital: { en: 'Reykjavík', fr: 'Reykjavik', ar: 'ريكيافيك' },
    cities: ['Reykjavík', 'Akureyri', 'Vík'],
    monument: { en: 'Þingvellir Alþingi & Hallgrímskirkja', fr: 'Þingvellir Alþingi & Hallgrímskirkja', ar: 'ثينغفيلير التاريخي وهالغريمسكيركيا', city: 'Golden Circle / Reykjavík', era: '930 CE – 1986 CE', descEn: 'Historic volcanic rift valley where Iceland’s Alþingi national parliament first assembled in 930 CE, paired with Reykjavík’s basalt-inspired Hallgrímskirkja.', descFr: 'Vallée volcanique où siégea l’Alþingi dès l’an 930, plus ancien parlement national au monde, et église emblématique de Reykjavik.', descAr: 'موقع البرلمان التاريخي الأول منذ عام 930 ميلادية وسط الصدع الجيولوجي وكنيسة ريكيافيك الشهيرة.' },
    dish: { en: 'Kjötsúpa & Skyr', fr: 'Kjötsúpa & Skyr', ar: 'حساء اللحم والسكير الآيسلندي', descEn: 'Warm lamb-and-root-vegetable broth paired with thick creamy Nordic cultured dairy.', descFr: 'Bouillon d’agneau aux légumes racines et skyr crémeux aux baies.', descAr: 'مرق لحم الضأن بالخضار مع لبن السكير الكريمي الغني.' },
    currency: { code: 'ISK', symbol: 'kr', nameEn: 'Icelandic Króna', nameFr: 'Couronne islandaise', nameAr: 'الكرونة الآيسلندية' },
    bestSeason: 'summer',
    image: VOYAGO_IMAGES.ireland,
  },
  {
    id: 'ireland', code: 'IE', flag: '🇮🇪', continent: 'europe',
    subregion: { en: 'Northern Europe', fr: 'Europe du Nord', ar: 'شمال أوروبا' },
    name: { en: 'Ireland', fr: 'Irlande', ar: 'أيرلندا' },
    capital: { en: 'Dublin', fr: 'Dublin', ar: 'دبلن' },
    cities: ['Dublin', 'Galway', 'Cork', 'Killarney'],
    monument: { en: 'Rock of Cashel & Trinity College Library', fr: 'Rocher de Cashel & Bibliothèque de Trinity', ar: 'صخرة كاشيل ومكتبة ترينيتي', city: 'Cashel / Dublin', era: '12th Century (1101) & 1592', descEn: 'Seat of Munster’s ancient High Kings crowned by a 12th-century Celtic round tower and Gothic cathedral, alongside Dublin’s 1592 Trinity College Long Room.', descFr: 'Siège médiéval des rois du Munster avec sa tour ronde celte du XIIe siècle et bibliothèque historique de Trinity College à Dublin.', descAr: 'قلعة وكاتدرائية صخرة كاشيل من القرن الثاني عشر مع البرج الأيرلندي الدائري ومكتبة ترينيتي العتيقة في دبلن.' },
    dish: { en: 'Irish Stew & Soda Bread', fr: 'Ragoût irlandais & Soda Bread', ar: 'اليخنة الأيرلندية وخبز الصودا', descEn: 'Tender lamb slow-simmered with potatoes and herbs beside crusty buttermilk soda bread.', descFr: 'Mijoté d’agneau aux pommes de terre servi avec du pain traditionnel au babeurre.', descAr: 'يخنة اللحم بالبطاطس والأعشاب تقدم مع خبز الصودا الطازج.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    bestSeason: 'summer',
    image: VOYAGO_IMAGES.ireland,
  },
  {
    id: 'kosovo', code: 'XK', flag: '🇽🇰', continent: 'europe',
    subregion: { en: 'Balkans', fr: 'Balkans', ar: 'البلقان' },
    name: { en: 'Kosovo', fr: 'Kosovo', ar: 'كوسوفو' },
    capital: { en: 'Pristina', fr: 'Pristina', ar: 'بريشتينا' },
    cities: ['Pristina', 'Prizren', 'Peja'],
    monument: { en: 'Prizren Fortress & Stone Bridge', fr: 'Forteresse de Prizren', ar: 'قلعة بريزرين والجسر الحجري', city: 'Prizren', era: '11th–16th Century', descEn: 'Hilltop citadel overlooking Ottoman mosques, stone bridges, and riverfront cafés.', descFr: 'Citadelle surplombant les mosquées ottomanes et le pont de pierre de Prizren.', descAr: 'قلعة تاريخية تطل على المساجد العثمانية والجسر الحجري في بريزرين.' },
    dish: { en: 'Flija', fr: 'Flija', ar: 'فليا', descEn: 'Multi-layered baked batter pastry brushed with cream and cooked under hot embers.', descFr: 'Gâteau feuilleté salé cuit lentement sous la braise avec de la crème.', descAr: 'طبقات عجين رقيقة مخبوزة مع الكريمة على نار هادئة.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
  },
  {
    id: 'latvia', code: 'LV', flag: '🇱🇻', continent: 'europe',
    subregion: { en: 'Baltics', fr: 'Pays baltes', ar: 'دول البلطيق' },
    name: { en: 'Latvia', fr: 'Lettonie', ar: 'لاتفيا' },
    capital: { en: 'Riga', fr: 'Riga', ar: 'ريغا' },
    cities: ['Riga', 'Sigulda', 'Jūrmala'],
    monument: { en: 'Riga Art Nouveau District & House of the Blackheads', fr: 'Vieille ville de Riga', ar: 'البلدة القديمة في ريغا', city: 'Riga', era: '14th–20th Century', descEn: 'Gabled Hanseatic guildhall and Europe’s richest collection of ornate Art Nouveau facades.', descFr: 'Maisons hanséatiques et façades Art nouveau parmi les plus riches d’Europe.', descAr: 'مباني تاريخية فريدة وعمارة الفن الحديث الشهيرة في قلب ريغا.' },
    dish: { en: 'Grey Peas & Rye Layered Dessert', fr: 'Pois gris & Dessert au pain de seigle', ar: 'حساء البازلاء وحلوى الجاودار', descEn: 'Hearty Baltic comfort fare paired with whipped cream and lingonberry jam.', descFr: 'Spécialité balte rustique accompagnée d’un dessert aux airelles et pain de seigle.', descAr: 'أطباق بلطيقية دافئة وحلوى الجاودار مع التوت البري.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    bestSeason: 'summer',
  },
  {
    id: 'liechtenstein', code: 'LI', flag: '🇱🇮', continent: 'europe',
    subregion: { en: 'Alpine Europe', fr: 'Europe alpine', ar: 'جبال الألب' },
    name: { en: 'Liechtenstein', fr: 'Liechtenstein', ar: 'ليختنشتاين' },
    capital: { en: 'Vaduz', fr: 'Vaduz', ar: 'فادوز' },
    cities: ['Vaduz', 'Malbun', 'Triesenberg'],
    monument: { en: 'Vaduz Castle', fr: 'Château de Vaduz', ar: 'قلعة فادوز', city: 'Vaduz', era: '12th Century', descEn: 'Alpine cliffside fortress perched 120 meters above the Rhine valley.', descFr: 'Château fort perché à 120 mètres au-dessus de la vallée du Rhin.', descAr: 'قلعة ألبية شامخة ترتفع 120 متراً فوق وادي الراين.' },
    dish: { en: 'Käsknöpfle', fr: 'Käsknöpfle', ar: 'كيسكنوبفلي', descEn: 'Alpine pasta dumplings baked with melted mountain cheese and crispy onions.', descFr: 'Pâtes alpines gratinées au fromage de montagne et oignons dorés.', descAr: 'مكرونة جبلية بالجبن الألبي الذائب والبصل المقرمش.' },
    currency: { code: 'CHF', symbol: 'CHF', nameEn: 'Swiss Franc', nameFr: 'Franc suisse', nameAr: 'الفرنك السويسري' },
  },
  {
    id: 'lithuania', code: 'LT', flag: '🇱🇹', continent: 'europe',
    subregion: { en: 'Baltics', fr: 'Pays baltes', ar: 'دول البلطيق' },
    name: { en: 'Lithuania', fr: 'Lituanie', ar: 'ليتوانيا' },
    capital: { en: 'Vilnius', fr: 'Vilnius', ar: 'فيلنيوس' },
    cities: ['Vilnius', 'Trakai', 'Kaunas', 'Klaipėda'],
    monument: { en: 'Trakai Island Castle', fr: 'Château de Trakai', ar: 'قلعة جزيرة تراكاي', city: 'Trakai', era: '14th Century', descEn: 'Red-brick Gothic castle set on its own tranquil island in Lake Galvė.', descFr: 'Château gothique en briques rouges bâti sur une île du lac Galvė.', descAr: 'قلعة قوطية من الطوب الأحمر مبنية فوق جزيرة وسط بحيرة غالفي.' },
    dish: { en: 'Cepelinai & Šaltibarščiai', fr: 'Cepelinai & Soupe rose froide', ar: 'سيبيليناي وحساء الشمندر البارد', descEn: 'Stuffed potato dumplings and vibrant pink cold beetroot-kefir soup.', descFr: 'Quenelles de pommes de terre farcies et soupe froide rose à la betterave.', descAr: 'زلابية البطاطس المحشوة وحساء الشمندر البارد المنعش.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    bestSeason: 'summer',
  },
  {
    id: 'luxembourg', code: 'LU', flag: '🇱🇺', continent: 'europe',
    subregion: { en: 'Western Europe', fr: 'Europe de l’Ouest', ar: 'أوروبا الغربية' },
    name: { en: 'Luxembourg', fr: 'Luxembourg', ar: 'لوكسمبورغ' },
    capital: { en: 'Luxembourg City', fr: 'Luxembourg-Ville', ar: 'مدينة لوكسمبورغ' },
    cities: ['Luxembourg City', 'Vianden', 'Echternach'],
    monument: { en: 'Bock Casemates & Vianden Castle', fr: 'Casemates du Bock & Château de Vianden', ar: 'قلعة فياندين وتحصينات البوك', city: 'Luxembourg / Vianden', era: '11th–17th Century', descEn: 'UNESCO cliff-carved fortress tunnels and fairytale Ardennes hilltop castle.', descFr: 'Galeries creusées dans la falaise et château médiéval de Vianden.', descAr: 'أنفاق القلعة الصخرية وقصر فياندين التاريخي.' },
    dish: { en: 'Judd mat Gaardebounen & Gromperekichelcher', fr: 'Spécialités luxembourgeoises', ar: 'أطباق لوكسمبورغ التقليدية', descEn: 'Savory herb-crusted potato fritters and traditional slow-braised meats.', descFr: 'Galettes de pommes de terre croustillantes aux herbes et plats mijotés.', descAr: 'فطائر البطاطس المقرمشة بالأعشاب وأطباق التراث المحلي.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
  },
  {
    id: 'malta', code: 'MT', flag: '🇲🇹', continent: 'europe',
    subregion: { en: 'Mediterranean', fr: 'Méditerranée', ar: 'البحر المتوسط' },
    name: { en: 'Malta', fr: 'Malte', ar: 'مالطا' },
    capital: { en: 'Valletta', fr: 'La Valette', ar: 'فاليتا' },
    cities: ['Valletta', 'Mdina', 'Gozo'],
    monument: { en: 'Valletta Citadel & Megalithic Temples', fr: 'La Valette & Temples mégalithiques', ar: 'فاليتا ومعابد مالطا الصخرية', city: 'Valletta', era: '3600 BCE – 1566 CE', descEn: 'Honey-limestone bastions of the Knights of St. John and prehistoric stone temples.', descFr: 'Bastions dorés des Chevaliers de Malte et temples préhistoriques uniques.', descAr: 'أسوار فاليتا الذهبية ومعابد ما قبل التاريخ الحجرية.' },
    dish: { en: 'Pastizzi & Lampuki Pie', fr: 'Pastizzi & Tourte méditerranéenne', ar: 'باستيتزي وفطيرة السمك', descEn: 'Flaky ricotta-filled street pastries and traditional Maltese fish pie.', descFr: 'Feuilletés croustillants à la ricotta et tourte maltaise au poisson.', descAr: 'معجنات مقرمشة محشوة بجبن الريكوتا وفطيرة السمك المتوسطية.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
  },
  {
    id: 'moldova', code: 'MD', flag: '🇲🇩', continent: 'europe',
    subregion: { en: 'Eastern Europe', fr: 'Europe de l’Est', ar: 'أوروبا الشرقية' },
    name: { en: 'Moldova', fr: 'Moldavie', ar: 'مولدوفا' },
    capital: { en: 'Chișinău', fr: 'Chișinău', ar: 'كيشيناو' },
    cities: ['Chișinău', 'Orheiul Vechi', 'Soroca'],
    monument: { en: 'Orheiul Vechi Cave Monastery', fr: 'Monastère rupestre d’Orheiul Vechi', ar: 'دير أورهيو فيكي الصخري', city: 'Trebujeni', era: '13th–17th Century', descEn: 'Limestone ridge monastery carved directly above a dramatic river bend.', descFr: 'Monastère troglodytique creusé dans les falaises calcaires.', descAr: 'دير محفور في المنحدرات الكلسية يطل على منعطف النهر.' },
    dish: { en: 'Mămăligă & Plăcintă', fr: 'Mămăligă & Plăcintă', ar: 'ماماليغا وبلاشينتا', descEn: 'Golden cornmeal porridge and baked flaky pastries filled with cheese or pumpkin.', descFr: 'Polenta dorée et feuilletés traditionnels au fromage ou potiron.', descAr: 'عصيدة الذرة الذهبية وفطائر الجبن واليقطين المخبوزة.' },
    currency: { code: 'MDL', symbol: 'L', nameEn: 'Moldovan Leu', nameFr: 'Leu moldave', nameAr: 'الليو المولدوفي' },
  },
  {
    id: 'monaco', code: 'MC', flag: '🇲🇨', continent: 'europe',
    subregion: { en: 'Mediterranean', fr: 'Méditerranée', ar: 'البحر المتوسط' },
    name: { en: 'Monaco', fr: 'Monaco', ar: 'موناكو' },
    capital: { en: 'Monaco', fr: 'Monaco', ar: 'موناكو' },
    cities: ['Monte Carlo', 'Monaco-Ville', 'La Condamine'],
    monument: { en: 'Prince’s Palace on Le Rocher', fr: 'Palais Princier sur le Rocher', ar: 'قصر الأمير في موناكو', city: 'Monaco-Ville', era: '1191', descEn: 'Historic cliffside fortress palace overlooking Port Hercule and the Riviera.', descFr: 'Palais fortifié historique perché sur le Rocher face à la Méditerranée.', descAr: 'قصر تاريخي فوق الصخرة يطل على ميناء موناكو والبحر المتوسط.' },
    dish: { en: 'Barbajuan & Socca', fr: 'Barbajuan & Socca', ar: 'بارباجوان والسوكا', descEn: 'Crisp Swiss-chard and ricotta fritters and wood-baked chickpea crêpes.', descFr: 'Raviolis frits aux blettes et ricotta et galette niçoise aux pois chiches.', descAr: 'معجنات مقرمشة بالخضار والريكوتا وفطيرة الحمص التقليدية.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
  },
  {
    id: 'montenegro', code: 'ME', flag: '🇲🇪', continent: 'europe',
    subregion: { en: 'Adriatic Balkans', fr: 'Balkans adriatiques', ar: 'البلقان الأدرياتيكي' },
    name: { en: 'Montenegro', fr: 'Monténégro', ar: 'الجبل الأسود' },
    capital: { en: 'Podgorica', fr: 'Podgorica', ar: 'بودغوريتسا' },
    cities: ['Kotor', 'Budva', 'Podgorica', 'Cetinje'],
    monument: { en: 'Kotor Bay Fortifications', fr: 'Fortifications de Kotor', ar: 'أسوار خليج كوتور', city: 'Kotor', era: '9th–16th Century', descEn: 'Zigzagging Venetian mountain walls climbing above a fjord-like Adriatic bay.', descFr: 'Remparts vénitiens escarpés dominant les bouches de Kotor.', descAr: 'أسوار تاريخية متعرجة فوق جبال خليج كوتور الخلاب.' },
    dish: { en: 'Njeguški Pršut & Seafood Buzara', fr: 'Cuisine monténégrine & Buzara', ar: 'مأكولات بوزارا البحرية', descEn: 'Adriatic shellfish simmered with garlic, olive oil, and parsley alongside mountain cheeses.', descFr: 'Coquillages adriatiques mijotés à l’ail et fromages de montagne.', descAr: 'مأكولات بحرية مطهوة بالثوم وزيت الزيتون مع أجبان الجبال.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
  },
  {
    id: 'netherlands', code: 'NL', flag: '🇳🇱', continent: 'europe',
    subregion: { en: 'Western Europe', fr: 'Europe de l’Ouest', ar: 'أوروبا الغربية' },
    name: { en: 'Netherlands', fr: 'Pays-Bas', ar: 'هولندا' },
    capital: { en: 'Amsterdam', fr: 'Amsterdam', ar: 'أمستردام' },
    cities: ['Amsterdam', 'Rotterdam', 'Utrecht', 'Delft'],
    monument: { en: 'Amsterdam Canal Ring & Kinderdijk Windmills', fr: 'Canaux d’Amsterdam & Moulins de Kinderdijk', ar: 'قنوات أمستردام وطواحين كيندردايك', city: 'Amsterdam', era: '17th–18th Century', descEn: '17th-century concentric brick canal belt and historic wooden windmills.', descFr: 'Ceinture de canaux du XVIIe siècle et moulins historiques classés à l’UNESCO.', descAr: 'قنوات القرن السابع عشر التاريخية وطواحين الهواء الهولندية الشهيرة.' },
    dish: { en: 'Stroopwafel & Gouda Cheese', fr: 'Stroopwafel & Fromage de Gouda', ar: 'ستروب وافل وجبن غودا', descEn: 'Warm caramel-filled wafer cookies, aged artisan Gouda, and crisp poffertjes.', descFr: 'Gaufres fines garnies de caramel chaud, gouda affiné et mini-crêpes.', descAr: 'بسكويت الويفر بالكراميل الدافئ وأجبان غودا التقليدية.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
  },
  {
    id: 'north-macedonia', code: 'MK', flag: '🇲🇰', continent: 'europe',
    subregion: { en: 'Balkans', fr: 'Balkans', ar: 'البلقان' },
    name: { en: 'North Macedonia', fr: 'Macédoine du Nord', ar: 'مقدونيا الشمالية' },
    capital: { en: 'Skopje', fr: 'Skopje', ar: 'إسكوبية' },
    cities: ['Skopje', 'Ohrid', 'Bitola'],
    monument: { en: 'Lake Ohrid & Samuel’s Fortress', fr: 'Lac d’Ohrid & Forteresse de Samuel', ar: 'بحيرة أوهريد وقلعة صموئيل', city: 'Ohrid', era: '10th Century', descEn: 'Ancient lakeside citadel and cliffside churches overlooking Europe’s oldest lake.', descFr: 'Citadelle médiévale et églises historiques face au lac d’Ohrid.', descAr: 'قلعة تاريخية وكنائس عتيقة مطلة على بحيرة أوهريد.' },
    dish: { en: 'Tavče Gravče', fr: 'Tavče Gravče', ar: 'تافشي غرافشي', descEn: 'Slow-baked beans in paprika-pepper clay pots served with warm flatbread.', descFr: 'Haricots mijotés en terre cuite au paprika doux et pain chaud.', descAr: 'فاصوليا مطهوة ببطء في الفخار بالبابريكا مع الخبز الساخن.' },
    currency: { code: 'MKD', symbol: 'ден', nameEn: 'Macedonian Denar', nameFr: 'Denar macédonien', nameAr: 'الدينار المقدوني' },
  },
  {
    id: 'norway', code: 'NO', flag: '🇳🇴', continent: 'europe',
    subregion: { en: 'Northern Europe', fr: 'Europe du Nord', ar: 'شمال أوروبا' },
    name: { en: 'Norway', fr: 'Norvège', ar: 'النرويج' },
    capital: { en: 'Oslo', fr: 'Oslo', ar: 'أوسلو' },
    cities: ['Oslo', 'Bergen', 'Tromsø', 'Stavanger'],
    monument: { en: 'Bryggen Wharf & Borgund Stave Church', fr: 'Quais de Bryggen & Église en bois debout', ar: 'رصيف بريغن وكنيسة بورغوند الخشبية', city: 'Bergen / Lærdal', era: '12th–14th Century', descEn: 'Colorful Hanseatic timber warehouses and intricately carved medieval wooden stave churches.', descFr: 'Entrepôts hanséatiques en bois coloré et églises médiévales sculptées.', descAr: 'مبانٍ خشبية ملونة في بيرغن وكنائس العصور الوسطى الخشبية.' },
    dish: { en: 'Nordic Salmon & Brunost', fr: 'Saumon nordique & Brunost', ar: 'السلمون النرويجي وجبن برونوست', descEn: 'Cured fjord salmon, caramelized brown whey cheese, and warm cardamom buns.', descFr: 'Saumon des fjords, fromage brun caramélisé et brioches à la cardamome.', descAr: 'سلمون المضايق البحرية والجبن البني بالكراميل وفطائر الهيل.' },
    currency: { code: 'NOK', symbol: 'kr', nameEn: 'Norwegian Krone', nameFr: 'Couronne norvégienne', nameAr: 'الكرونة النرويجية' },
    bestSeason: 'summer',
    image: VOYAGO_IMAGES.nordic,
  },
  {
    id: 'poland', code: 'PL', flag: '🇵🇱', continent: 'europe',
    subregion: { en: 'Central Europe', fr: 'Europe centrale', ar: 'أوروبا الوسطى' },
    name: { en: 'Poland', fr: 'Pologne', ar: 'بولندا' },
    capital: { en: 'Warsaw', fr: 'Varsovie', ar: 'وارسو' },
    cities: ['Kraków', 'Warsaw', 'Gdańsk', 'Wrocław'],
    monument: { en: 'Wawel Royal Castle & Wieliczka Salt Mine', fr: 'Château du Wawel & Mine de Wieliczka', ar: 'قلعة فافل ومنجم فيليتشكا', city: 'Kraków', era: '14th–16th Century', descEn: 'Renaissance royal hilltop residence overlooking the Vistula River and subterranean salt chapels.', descFr: 'Château royal Renaissance sur la Vistule et chapelles souterraines de sel.', descAr: 'القصر الملكي في كراكوف ومنجم الملح التاريخي المذهل.' },
    dish: { en: 'Pierogi & Żurek', fr: 'Pierogi & Żurek', ar: 'بيروغي وحساء زوريك', descEn: 'Pan-seared dumplings filled with potato, cheese, or mushrooms and tangy rye soup.', descFr: 'Raviolis dorés farcis aux pommes de terre et fromage servis avec une soupe traditionnelle.', descAr: 'فطائر البيروغي المحشوة بالبطاطس والجبن مع الحساء البولندي.' },
    currency: { code: 'PLN', symbol: 'zł', nameEn: 'Polish Złoty', nameFr: 'Złoty polonais', nameAr: 'الزلوتي البولندي' },
    image: VOYAGO_IMAGES.czechia,
  },
  {
    id: 'portugal', code: 'PT', flag: '🇵🇹', continent: 'europe',
    subregion: { en: 'Iberian Peninsula', fr: 'Péninsule Ibérique', ar: 'شبه الجزيرة الإيبيرية' },
    name: { en: 'Portugal', fr: 'Portugal', ar: 'البرتغال' },
    capital: { en: 'Lisbon', fr: 'Lisbonne', ar: 'لشبونة' },
    cities: ['Lisbon', 'Porto', 'Sintra', 'Faro'],
    monument: { en: 'Belém Tower & Pena Palace', fr: 'Tour de Belém & Palais de Pena', ar: 'برج بيليم وقصر بينا', city: 'Lisbon / Sintra', era: '1519 & 1854', descEn: 'Manueline limestone fortress guarding the Tagus river and romantic hilltop palace in Sintra.', descFr: 'Tour manuéline sur le Tage et palais coloré de Sintra.', descAr: 'برج بيليم الحجري في لشبونة وقصر بينا الملون في جبال سينترا.' },
    dish: { en: 'Pastel de Nata & Bacalhau', fr: 'Pastel de Nata & Bacalhau', ar: 'باستيل دي ناتا والسمك المملح', descEn: 'Blistered custard tarts dusted with cinnamon and golden codfish fritters.', descFr: 'Tartelettes chaudes à la crème et cannelle et spécialités de morue.', descAr: 'فطائر الكاسترد المقرمشة بالقرفة وأطباق السمك البرتغالية.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    image: VOYAGO_IMAGES.spain,
  },
  {
    id: 'romania', code: 'RO', flag: '🇷🇴', continent: 'europe',
    subregion: { en: 'Eastern Europe', fr: 'Europe de l’Est', ar: 'أوروبا الشرقية' },
    name: { en: 'Romania', fr: 'Roumanie', ar: 'رومانيا' },
    capital: { en: 'Bucharest', fr: 'Bucarest', ar: 'بوخارست' },
    cities: ['Bucharest', 'Brașov', 'Sibiu', 'Sighișoara'],
    monument: { en: 'Bran Castle & Sighișoara Citadel', fr: 'Château de Bran & Citadelle de Sighișoara', ar: 'قلعة بران ومدينة سيغيشوارا', city: 'Transylvania', era: '14th Century', descEn: 'Turreted Carpathian mountain fortress and colorful medieval Saxon walled town.', descFr: 'Forteresse des Carpates et cité médiévale colorée de Transylvanie.', descAr: 'قلعة جبال الكاربات والبلدة التاريخية المسورة في ترانسيلفانيا.' },
    dish: { en: 'Sarmale & Papanași', fr: 'Sarmale & Papanași', ar: 'سارمالي وباباناشي', descEn: 'Spiced cabbage rolls with polenta followed by warm cheese doughnuts with berry jam.', descFr: 'Feuilles de chou farcies servies avec polenta et beignets chauds aux baies.', descAr: 'ملفوف محشي تقليدي مع عصيدة الذرة وحلوى الدونات بالتوت.' },
    currency: { code: 'RON', symbol: 'lei', nameEn: 'Romanian Leu', nameFr: 'Leu roumain', nameAr: 'الليو الروماني' },
  },
  {
    id: 'russia', code: 'RU', flag: '🇷🇺', continent: 'europe',
    subregion: { en: 'Eastern Europe', fr: 'Europe de l’Est', ar: 'أوروبا الشرقية' },
    name: { en: 'Russia', fr: 'Russie', ar: 'روسيا' },
    capital: { en: 'Moscow', fr: 'Moscou', ar: 'موسكو' },
    cities: ['Moscow', 'Saint Petersburg', 'Kazan', 'Sochi'],
    monument: { en: 'Moscow Kremlin & Hermitage Palace', fr: 'Kremlin de Moscou & Palais de l’Ermitage', ar: 'الكرملين ومتحف الإرميتاج', city: 'Moscow / St. Petersburg', era: '15th–18th Century', descEn: 'Fortified red-brick citadel on Red Square and imperial baroque Winter Palace.', descFr: 'Citadelle du Kremlin sur la place Rouge et palais d’Hiver impérial.', descAr: 'قلعة الكرملين في الساحة الحمراء وقصر الشتاء التاريخي في سانت بطرسبرغ.' },
    dish: { en: 'Borscht & Blini', fr: 'Bortsch & Blinis', ar: 'حساء البورش والبليني', descEn: 'Ruby-red beetroot soup with sour cream and delicate warm crêpes.', descFr: 'Soupe traditionnelle à la betterave et crêpes fines servies chaudes.', descAr: 'حساء الشمندر الأحمر بالكريمة وفطائر البليني الدافئة.' },
    currency: { code: 'RUB', symbol: '₽', nameEn: 'Russian Ruble', nameFr: 'Rouble russe', nameAr: 'الروبل الروسي' },
    bestSeason: 'summer',
  },
  {
    id: 'san-marino', code: 'SM', flag: '🇸🇲', continent: 'europe',
    subregion: { en: 'Southern Europe', fr: 'Europe du Sud', ar: 'جنوب أوروبا' },
    name: { en: 'San Marino', fr: 'Saint-Marin', ar: 'سان مارينو' },
    capital: { en: 'San Marino', fr: 'Saint-Marin', ar: 'سان مارينو' },
    cities: ['San Marino', 'Borgo Maggiore'],
    monument: { en: 'Three Towers of Guaita', fr: 'Tours de Saint-Marin (Guaita)', ar: 'أبراج سان مارينو الثلاثة', city: 'Mount Titano', era: '11th Century', descEn: 'Medieval stone fortresses perched along the dramatic ridge of Mount Titano.', descFr: 'Trois tours médiévales perchées sur les crêtes du mont Titano.', descAr: 'ثلاثة أبراج حجرية من العصور الوسطى فوق قمة جبل تيتانو.' },
    dish: { en: 'Torta Tre Monti & Piadina', fr: 'Torta Tre Monti & Piadina', ar: 'تورتا تري مونتي وبيادينا', descEn: 'Layered hazelnut-chocolate wafer cake and warm folded flatbread.', descFr: 'Gâteau feuilleté noisette-chocolat et pain plat garni.', descAr: 'كعكة البندق والشوكولاتة وخبز البيادينا الدافئ.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    image: VOYAGO_IMAGES.italy,
  },
  {
    id: 'serbia', code: 'RS', flag: '🇷🇸', continent: 'europe',
    subregion: { en: 'Balkans', fr: 'Balkans', ar: 'البلقان' },
    name: { en: 'Serbia', fr: 'Serbie', ar: 'صربيا' },
    capital: { en: 'Belgrade', fr: 'Belgrade', ar: 'بلغراد' },
    cities: ['Belgrade', 'Novi Sad', 'Niš'],
    monument: { en: 'Kalemegdan Fortress', fr: 'Forteresse de Kalemegdan', ar: 'قلعة كاليمغدان', city: 'Belgrade', era: 'Roman – 18th Century', descEn: 'Historic bastion overlooking the confluence of the Sava and Danube rivers.', descFr: 'Forteresse historique dominant le confluent de la Save et du Danube.', descAr: 'قلعة تاريخية مطلة على التقاء نهري الدانوب وسافا.' },
    dish: { en: 'Pljeskavica & Ajvar', fr: 'Pljeskavica & Ajvar', ar: 'بليسكافيتسا والأيفار', descEn: 'Charcoal-grilled spiced patty served with roasted red pepper relish and kajmak.', descFr: 'Grillade épicée servie avec caviar de poivrons grillés.', descAr: 'لحم مشوي متبل يقدم مع صلصة الفلفل الأحمر المشوي.' },
    currency: { code: 'RSD', symbol: 'дин', nameEn: 'Serbian Dinar', nameFr: 'Dinar serbe', nameAr: 'الدينار الصربي' },
  },
  {
    id: 'slovakia', code: 'SK', flag: '🇸🇰', continent: 'europe',
    subregion: { en: 'Central Europe', fr: 'Europe centrale', ar: 'أوروبا الوسطى' },
    name: { en: 'Slovakia', fr: 'Slovaquie', ar: 'سلوفاكيا' },
    capital: { en: 'Bratislava', fr: 'Bratislava', ar: 'براتيسلافا' },
    cities: ['Bratislava', 'Košice', 'High Tatras'],
    monument: { en: 'Spiš Castle & Bratislava Castle', fr: 'Château de Spiš & Château de Bratislava', ar: 'قلعة سبيش وقلعة براتيسلافا', city: 'Spiš / Bratislava', era: '12th Century', descEn: 'One of Central Europe’s largest medieval stone castle complexes atop a limestone hill.', descFr: 'L’un des plus vastes ensembles fortifiés médiévaux d’Europe centrale.', descAr: 'واحدة من أكبر القلاع الحجرية التاريخية في وسط أوروبا.' },
    dish: { en: 'Bryndzové Halušky', fr: 'Bryndzové Halušky', ar: 'هالوشكي بالجبن', descEn: 'Soft potato dumplings tossed in creamy sheep-milk bryndza cheese.', descFr: 'Quenelles de pommes de terre nappées de fromage de brebis crémeux.', descAr: 'زلابية البطاطس السلوفاكية مع جبن الغنم الكريمي.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    image: VOYAGO_IMAGES.czechia,
  },
  {
    id: 'slovenia', code: 'SI', flag: '🇸🇮', continent: 'europe',
    subregion: { en: 'Alpine & Adriatic', fr: 'Alpes & Adriatique', ar: 'الألب والأدرياتيك' },
    name: { en: 'Slovenia', fr: 'Slovénie', ar: 'سلوفينيا' },
    capital: { en: 'Ljubljana', fr: 'Ljubljana', ar: 'ليوبليانا' },
    cities: ['Ljubljana', 'Bled', 'Piran'],
    monument: { en: 'Bled Castle & Island Church', fr: 'Château et île de Bled', ar: 'قلعة وبحيرة بليد', city: 'Bled', era: '1011 CE', descEn: 'Cliffside medieval castle gazing over Julian Alps reflections on emerald Lake Bled.', descFr: 'Château médiéval perché au-dessus des eaux émeraude du lac de Bled.', descAr: 'قلعة جبلية من القرون الوسطى تطل على بحيرة بليد الفيروزية.' },
    dish: { en: 'Bled Cream Cake & Potica', fr: 'Gâteau à la crème de Bled & Potica', ar: 'كعكة بليد الكريمية وبوتيكا', descEn: 'Crisp puff pastry filled with vanilla custard and walnut-rolled festive bread.', descFr: 'Millefeuille léger à la vanille et brioche roulée aux noix.', descAr: 'معجنات الفانيليا المقرمشة وخبز الجوز التقليدي.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    image: VOYAGO_IMAGES.croatia,
  },
  {
    id: 'sweden', code: 'SE', flag: '🇸🇪', continent: 'europe',
    subregion: { en: 'Northern Europe', fr: 'Europe du Nord', ar: 'شمال أوروبا' },
    name: { en: 'Sweden', fr: 'Suède', ar: 'السويد' },
    capital: { en: 'Stockholm', fr: 'Stockholm', ar: 'ستوكهولم' },
    cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala'],
    monument: { en: 'Gamla Stan & Vasa Museum', fr: 'Gamla Stan & Musée Vasa', ar: 'البلدة القديمة غاملا ستان ومتحف فاسا', city: 'Stockholm', era: '13th–17th Century', descEn: 'Ochre-colored medieval island quarter and preserved 1628 royal warship.', descFr: 'Île médiévale ocre de Stockholm et célèbre navire royal de 1628.', descAr: 'الحي التاريخي الملون في ستوكهولم وسفينة فاسا الملكية المحفوظة من عام 1628.' },
    dish: { en: 'Swedish Meatballs & Kanelbullar', fr: 'Boulettes suédoises & Kanelbullar', ar: 'كرات اللحم السويدية وفطائر القرفة', descEn: 'Savory meatballs with lingonberry jam and fragrant cinnamon buns for afternoon fika.', descFr: 'Boulettes aux airelles et brioches roulées à la cannelle pour le fika.', descAr: 'كرات اللحم مع مربى التوت وفطائر القرفة الدافئة.' },
    currency: { code: 'SEK', symbol: 'kr', nameEn: 'Swedish Krona', nameFr: 'Couronne suédoise', nameAr: 'الكرونة السويدية' },
    bestSeason: 'summer',
    image: VOYAGO_IMAGES.nordic,
  },
  {
    id: 'switzerland', code: 'CH', flag: '🇨🇭', continent: 'europe',
    subregion: { en: 'Alpine Europe', fr: 'Europe alpine', ar: 'جبال الألب' },
    name: { en: 'Switzerland', fr: 'Suisse', ar: 'سويسرا' },
    capital: { en: 'Bern', fr: 'Berne', ar: 'برن' },
    cities: ['Zurich', 'Lucerne', 'Geneva', 'Zermatt', 'Interlaken'],
    monument: { en: 'Chapel Bridge & Chillon Castle', fr: 'Pont de la Chapelle & Château de Chillon', ar: 'جسر الكنيسة في لوسيرن وقلعة شيون', city: 'Lucerne / Montreux', era: '12th–14th Century', descEn: 'Covered 14th-century wooden bridge in Lucerne and lakeside stone fortress on Lake Geneva.', descFr: 'Pont couvert médiéval de Lucerne et forteresse romantique du lac Léman.', descAr: 'الجسر الخشبي التاريخي في لوسيرن وقلعة شيون على ضفاف بحيرة جنيف.' },
    dish: { en: 'Cheese Fondue, Rösti & Swiss Chocolate', fr: 'Fondue, Rösti & Chocolat suisse', ar: 'الفوندو السويسري والروستي والشوكولاتة', descEn: 'Melted Gruyère and Emmental cheese with crusty bread, crisp potato rösti, and artisan chocolate.', descFr: 'Fondue au gruyère, galette de pommes de terre rösti et chocolat alpin.', descAr: 'جبن الفوندو الذائب وفطيرة البطاطس المحمصة مع الشوكولاتة السويسرية.' },
    currency: { code: 'CHF', symbol: 'CHF', nameEn: 'Swiss Franc', nameFr: 'Franc suisse', nameAr: 'الفرنك السويسري' },
  },
  {
    id: 'ukraine', code: 'UA', flag: '🇺🇦', continent: 'europe',
    subregion: { en: 'Eastern Europe', fr: 'Europe de l’Est', ar: 'أوروبا الشرقية' },
    name: { en: 'Ukraine', fr: 'Ukraine', ar: 'أوكرانيا' },
    capital: { en: 'Kyiv', fr: 'Kyiv', ar: 'كييف' },
    cities: ['Kyiv', 'Lviv', 'Odesa'],
    monument: { en: 'Saint Sophia Cathedral', fr: 'Cathédrale Sainte-Sophie', ar: 'كاتدرائية القديسة صوفيا', city: 'Kyiv', era: '1037 CE', descEn: '11th-century UNESCO cathedral celebrated for golden domes and Byzantine mosaics.', descFr: 'Cathédrale du XIe siècle classée à l’UNESCO aux coupoles dorées et mosaïques.', descAr: 'كاتدرائية من القرن الحادي عشر تشتهر بقبابها الذهبية وفسيفسائها العريقة.' },
    dish: { en: 'Ukrainian Borscht & Varenyky', fr: 'Bortsch & Varenyky', ar: 'البورش الأوكراني وفارينيكي', descEn: 'Rich beetroot-cabbage soup with garlic pampushky rolls and cherry or potato dumplings.', descFr: 'Soupe rubis aux betteraves avec pains à l’ail et raviolis farcis.', descAr: 'حساء الشمندر التقليدي مع خبز الثوم وفطائر فارينيكي المحشوة.' },
    currency: { code: 'UAH', symbol: '₴', nameEn: 'Ukrainian Hryvnia', nameFr: 'Hryvnia ukrainienne', nameAr: 'الهريفنيا الأوكرانية' },
  },
  {
    id: 'uk', code: 'GB', flag: '🇬🇧', continent: 'europe',
    subregion: { en: 'Northern Europe', fr: 'Europe du Nord', ar: 'شمال أوروبا' },
    name: { en: 'United Kingdom', fr: 'Royaume-Uni', ar: 'المملكة المتحدة' },
    capital: { en: 'London', fr: 'Londres', ar: 'لندن' },
    cities: ['London', 'Edinburgh', 'Bath', 'Oxford'],
    monument: { en: 'Tower of London & Stonehenge', fr: 'Tour de Londres & Stonehenge', ar: 'برج لندن وستونهنج', city: 'London / Wiltshire', era: '3000 BCE & 1078 CE', descEn: 'Norman royal riverside fortress and prehistoric standing stone circle on Salisbury Plain.', descFr: 'Forteresse royale normande sur la Tamise et cercle mégalithique préhistorique.', descAr: 'قلعة برج لندن التاريخية على نهر التايمز ودائرة أحجار ستونهنج الأثرية.' },
    dish: { en: 'Fish & Chips and Afternoon Tea', fr: 'Fish & Chips et Afternoon Tea', ar: 'السمك والبطاطس وشاي الظهيرة', descEn: 'Crisp battered Atlantic cod with thick chips alongside scones, clotted cream, and tea.', descFr: 'Cabillaud pané croustillant et thé anglais accompagné de scones à la crème.', descAr: 'سمك مقرمش مع البطاطس وتقاليد شاي الظهيرة مع السكونز والمربى.' },
    currency: { code: 'GBP', symbol: '£', nameEn: 'Pound Sterling', nameFr: 'Livre sterling', nameAr: 'الجنيه الإسترليني' },
    image: VOYAGO_IMAGES.ireland,
  },
  {
    id: 'vatican', code: 'VA', flag: '🇻🇦', continent: 'europe',
    subregion: { en: 'Southern Europe', fr: 'Europe du Sud', ar: 'جنوب أوروبا' },
    name: { en: 'Vatican City', fr: 'Vatican', ar: 'الفاتيكان' },
    capital: { en: 'Vatican City', fr: 'Cité du Vatican', ar: 'مدينة الفاتيكان' },
    cities: ['St. Peter’s Square', 'Vatican Museums'],
    monument: { en: 'St. Peter’s Basilica & Sistine Chapel', fr: 'Basilique Saint-Pierre & Chapelle Sixtine', ar: 'كاتدرائية القديس بطرس وكنيسة سيستين', city: 'Vatican City', era: '1506–1626', descEn: 'Michelangelo’s soaring dome, Bernini’s colonnade, and Renaissance fresco masterpieces.', descFr: 'Coupole de Michel-Ange, colonnade du Bernin et fresques de la Renaissance.', descAr: 'قبة مايكل أنجلو الشهيرة وساحة برنيني ولوحات عصر النهضة.' },
    dish: { en: 'Roman Espresso & Artisanal Pastries', fr: 'Espresso & Pâtisseries romaines', ar: 'الإسبريسو والمعجنات الإيطالية', descEn: 'Traditional Roman bakery cornetti and espresso steps outside St. Peter’s colonnade.', descFr: 'Cornetti feuilletés et espresso italien à deux pas de la place Saint-Pierre.', descAr: 'كرواسون إيطالي طازج وقهوة إسبريسو بالقرب من الساحة.' },
    currency: { code: 'EUR', symbol: '€', nameEn: 'Euro', nameFr: 'Euro', nameAr: 'اليورو' },
    image: VOYAGO_IMAGES.italy,
  },
];

const AFRICA_SEEDS: CompactCountrySeed[] = [
  {
    id: 'tunisia', code: 'TN', flag: '🇹🇳', continent: 'africa',
    subregion: { en: 'North Africa', fr: 'Afrique du Nord', ar: 'شمال إفريقيا' },
    name: { en: 'Tunisia', fr: 'Tunisie', ar: 'تونس' },
    capital: { en: 'Tunis', fr: 'Tunis', ar: 'تونس العاصمة' },
    cities: ['Tunis', 'Sidi Bou Said', 'Kairouan', 'El Jem', 'Djerba'],
    monument: { en: 'Amphitheatre of El Jem & Carthage', fr: 'Amphithéâtre d’El Jem & Carthage', ar: 'مسرح الجم الروماني وقرطاج', city: 'El Jem / Tunis', era: '238 CE', descEn: 'Colossal Roman stone amphitheater and ancient Phoenician-Roman coastal ruins of Carthage.', descFr: 'Colossal amphithéâtre romain d’El Jem et vestiges antiques de Carthage.', descAr: 'أكبر مدرج روماني في إفريقيا وآثار قرطاج الفينيقية والرومانية.' },
    dish: { en: 'Brik à l’Œuf & Couscous Tunisien', fr: 'Brik à l’œuf & Couscous tunisien', ar: 'البريك التونسي والكسكسي', descEn: 'Crisp fried pastry triangle with egg and tuna alongside harissa-spiced couscous.', descFr: 'Feuilleté croustillant farci à l’œuf et thon et couscous parfumé à l’harissa.', descAr: 'عجينة مقرمشة محشوة بالبيض والتونة مع الكسكسي التونسي بالهريسة.' },
    currency: { code: 'TND', symbol: 'DT', nameEn: 'Tunisian Dinar', nameFr: 'Dinar tunisien', nameAr: 'الدينار التونسي' },
  },
  {
    id: 'libya', code: 'LY', flag: '🇱🇾', continent: 'africa',
    subregion: { en: 'North Africa', fr: 'Afrique du Nord', ar: 'شمال إفريقيا' },
    name: { en: 'Libya', fr: 'Libye', ar: 'ليبيا' },
    capital: { en: 'Tripoli', fr: 'Tripoli', ar: 'طرابلس' },
    cities: ['Tripoli', 'Ghadames', 'Sabratha', 'Benghazi'],
    monument: { en: 'Leptis Magna & Old Town of Ghadames', fr: 'Leptis Magna & Oasis de Ghadamès', ar: 'لبدة الكبرى وغدامس القديمة', city: 'Khoms / Ghadames', era: '2nd Century CE', descEn: 'Monumental Roman coastal city arches and whitewashed Saharan oasis architecture.', descFr: 'Cité romaine monumentale face à la mer et oasis blanche du Sahara.', descAr: 'مدينة لبدة الكبرى الرومانية وعمارة واحة غدامس الصحراوية البيضاء.' },
    dish: { en: 'Bazin & Couscous', fr: 'Bazin & Couscous libyen', ar: 'البازين والكسكسي الليبي', descEn: 'Steamed barley dough dome served with rich spiced tomato-lamb stew and potatoes.', descFr: 'Pâte d’orge traditionnelle servie avec un ragoût épicé à la tomate et à l’agneau.', descAr: 'طبق البازين التقليدي من الشعير يقدم مع مرق اللحم والتوابل.' },
    currency: { code: 'LYD', symbol: 'LD', nameEn: 'Libyan Dinar', nameFr: 'Dinar libyen', nameAr: 'الدينار الليبي' },
  },
  {
    id: 'mauritania', code: 'MR', flag: '🇲🇷', continent: 'africa',
    subregion: { en: 'West / North Africa', fr: 'Afrique du Nord-Ouest', ar: 'المغرب العربي وغرب إفريقيا' },
    name: { en: 'Mauritania', fr: 'Mauritanie', ar: 'موريتانيا' },
    capital: { en: 'Nouakchott', fr: 'Nouakchott', ar: 'نواكشوط' },
    cities: ['Nouakchott', 'Chinguetti', 'Ouadane'],
    monument: { en: 'Ancient Ksour of Chinguetti', fr: 'Ksour anciens de Chinguetti', ar: 'قصور شنقيط التاريخية', city: 'Chinguetti', era: '11th–13th Century', descEn: 'Desert stone libraries preserving centuries-old Arabic manuscripts amidst Saharan dunes.', descFr: 'Bibliothèques du désert préservant de précieux manuscrits au cœur des dunes.', descAr: 'مكتبات صحراوية عتيقة تحفظ آلاف المخطوطات في مدينة شنقيط التاريخية.' },
    dish: { en: 'Thieboudienne & Mint Tea', fr: 'Thiéboudienne & Thé à la menthe', ar: 'الأرز بالسمك والشاي الموريتاني', descEn: 'Spiced Atlantic fish cooked over broken rice with vegetables and frothy desert tea.', descFr: 'Riz au poisson et légumes accompagné du rituel des trois thés à la menthe.', descAr: 'أرز متبل بالسمك الطازج والخضار مع طقوس الشاي الصحراوي الثلاثي.' },
    currency: { code: 'MRU', symbol: 'UM', nameEn: 'Mauritanian Ouguiya', nameFr: 'Ouguiya mauritanien', nameAr: 'الأوقية الموريتانية' },
    bestSeason: 'winter',
  },
  {
    id: 'senegal', code: 'SN', flag: '🇸🇳', continent: 'africa',
    subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' },
    name: { en: 'Senegal', fr: 'Sénégal', ar: 'السنغال' },
    capital: { en: 'Dakar', fr: 'Dakar', ar: 'داكار' },
    cities: ['Dakar', 'Saint-Louis', 'Gorée Island', 'Saly'],
    monument: { en: 'Gorée Island & African Renaissance Monument', fr: 'Île de Gorée & Monument de la Renaissance', ar: 'جزيرة غوري ونصب النهضة الإفريقية', city: 'Dakar', era: '1776 / 2010', descEn: 'Pastel colonial harbor houses on UNESCO Gorée Island facing Dakar’s Atlantic coast.', descFr: 'Maisons historiques pastel de l’île de Gorée face à la côte atlantique de Dakar.', descAr: 'جزيرة غوري التاريخية بأزقتها الهادئة ونصب النهضة المطل على الأطلسي.' },
    dish: { en: 'Thieboudienne & Yassa Poulet', fr: 'Thiéboudienne & Poulet Yassa', ar: 'ثيبودين ودجاج ياسا', descEn: 'Senegal’s iconic tomato-spiced fish rice and caramelized onion-lemon marinated chicken.', descFr: 'Riz au poisson emblématique et poulet mariné aux oignons caramélisés et citron.', descAr: 'الأرز بالسمك وصلصة الطماطم ودجاج الياسا بالبصل والليمون.' },
    currency: { code: 'XOF', symbol: 'CFA', nameEn: 'West African CFA Franc', nameFr: 'Franc CFA (BCEAO)', nameAr: 'فرنك غرب إفريقيا' },
    bestSeason: 'winter',
  },
  {
    id: 'nigeria', code: 'NG', flag: '🇳🇬', continent: 'africa',
    subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' },
    name: { en: 'Nigeria', fr: 'Nigeria', ar: 'نيجيريا' },
    capital: { en: 'Abuja', fr: 'Abuja', ar: 'أبوجا' },
    cities: ['Lagos', 'Abuja', 'Kano', 'Calabar'],
    monument: { en: 'Osun-Osogbo Sacred Grove & Zuma Rock', fr: 'Forêt sacrée d’Osun-Osogbo & Zuma Rock', ar: 'غابة أوسون المقدسة وصخرة زوما', city: 'Osogbo / Abuja', era: 'Pre-17th Century', descEn: 'UNESCO forest sanctuary sculpted with Yoruba artworks and towering monolith near Abuja.', descFr: 'Sanctuaire forestier classé à l’UNESCO et monolithe spectaculaire près d’Abuja.', descAr: 'غابة أوسون التراثية بمنحوتاتها التقليدية وصخرة زوما العملاقة.' },
    dish: { en: 'Jollof Rice & Suya', fr: 'Riz Jollof & Suya', ar: 'أرز جولوف وسويا', descEn: 'Smoky pepper-tomato party rice paired with peanut-spiced grilled skewers.', descFr: 'Riz parfumé aux épices et tomates accompagné de brochettes grillées aux arachides.', descAr: 'أرز جولوف المتبل بالطماطم والفلفل مع أسياخ السويا المشوية.' },
    currency: { code: 'NGN', symbol: '₦', nameEn: 'Nigerian Naira', nameFr: 'Naira nigérian', nameAr: 'النايرا النيجيرية' },
    bestSeason: 'winter',
  },
  {
    id: 'ghana', code: 'GH', flag: '🇬🇭', continent: 'africa',
    subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' },
    name: { en: 'Ghana', fr: 'Ghana', ar: 'غانا' },
    capital: { en: 'Accra', fr: 'Accra', ar: 'أكرا' },
    cities: ['Accra', 'Cape Coast', 'Kumasi', 'Elmina'],
    monument: { en: 'Cape Coast & Elmina Castles', fr: 'Châteaux d’Elmina & Cape Coast', ar: 'قلعة كيب كوست وإلمينا', city: 'Central Region', era: '1482–1653', descEn: 'Whitewashed Atlantic coastal fortresses preserving vital world heritage history.', descFr: 'Forteresses côtières blanches inscrites au patrimoine mondial de l’UNESCO.', descAr: 'قلاع ساحلية تاريخية مطلة على المحيط الأطلسي مصنفة في اليونسكو.' },
    dish: { en: 'Waakye, Red-Red & Banku', fr: 'Waakye & Banku', ar: 'واكي وبانكو الغاني', descEn: 'Savory rice-and-beans dish wrapped in leaves, fried plantains, and grilled tilapia.', descFr: 'Riz aux haricots rouges, bananes plantains frites et tilapia grillé.', descAr: 'أرز بالفاصوليا مع الموز المقلي والسمك المشوي.' },
    currency: { code: 'GHS', symbol: '₵', nameEn: 'Ghanaian Cedi', nameFr: 'Cedi ghanéen', nameAr: 'السيدي الغاني' },
    bestSeason: 'winter',
  },
  {
    id: 'kenya', code: 'KE', flag: '🇰🇪', continent: 'africa',
    subregion: { en: 'East Africa', fr: 'Afrique de l’Est', ar: 'شرق إفريقيا' },
    name: { en: 'Kenya', fr: 'Kenya', ar: 'كينيا' },
    capital: { en: 'Nairobi', fr: 'Nairobi', ar: 'نيروبي' },
    cities: ['Nairobi', 'Mombasa', 'Lamu', 'Nakuru'],
    monument: { en: 'Lamu Old Town & Fort Jesus', fr: 'Vieille ville de Lamu & Fort Jesus', ar: 'بلدة لامو القديمة وحصن يسوع', city: 'Lamu / Mombasa', era: '14th–16th Century', descEn: 'Carved Swahili coral-stone doorways in Lamu and 1593 coastal bastion in Mombasa.', descFr: 'Architecture swahilie en pierre de corail à Lamu et fort côtier de Mombasa.', descAr: 'العمارة السواحلية العريقة في جزيرة لامو وحصن مومباسا البحري.' },
    dish: { en: 'Nyama Choma & Ugali', fr: 'Nyama Choma & Ugali', ar: 'نياما تشوما وأوغالي', descEn: 'Slow-chargrilled meat served with kachumbari tomato-onion salsa and warm flatbread.', descFr: 'Viande grillée au feu de bois servie avec salade fraîche et pain chapati.', descAr: 'لحم مشوي على الفحم يقدم مع سلطة الطماطم الطازجة وخبز الشاباتي.' },
    currency: { code: 'KES', symbol: 'KSh', nameEn: 'Kenyan Shilling', nameFr: 'Shilling kényan', nameAr: 'الشلن الكيني' },
    bestSeason: 'yearround',
    image: VOYAGO_IMAGES.tanzania,
  },
  {
    id: 'tanzania', code: 'TZ', flag: '🇹🇿', continent: 'africa',
    subregion: { en: 'East Africa', fr: 'Afrique de l’Est', ar: 'شرق إفريقيا' },
    name: { en: 'Tanzania', fr: 'Tanzanie', ar: 'تنزانيا' },
    capital: { en: 'Dodoma', fr: 'Dodoma', ar: 'دودوما' },
    cities: ['Zanzibar (Stone Town)', 'Arusha', 'Dar es Salaam'],
    monument: { en: 'Stone Town of Zanzibar', fr: 'Stone Town de Zanzibar', ar: 'المدينة الحجرية في زنجبار', city: 'Zanzibar', era: '19th Century', descEn: 'Swahili, Omani, and maritime spice-trade coral-stone mansions and carved wooden doors.', descFr: 'Palais en pierre de corail et portes sculptées de l’ancien comptoir des épices.', descAr: 'قصور تاريخية وأبواب خشبية منحوتة تعكس تاريخ تجارة التوابل في زنجبار.' },
    dish: { en: 'Zanzibar Pilau & Urojo', fr: 'Pilau de Zanzibar & Urojo', ar: 'أرز بيلاو زنجبار', descEn: 'Cardamom-clove spiced rice and fragrant coconut coastal curries.', descFr: 'Riz parfumé à la cardamome et aux clous de girofle avec currys côtiers.', descAr: 'أرز متبل بالهيل والقرنفل مع أطباق جوز الهند الساحلية.' },
    currency: { code: 'TZS', symbol: 'TSh', nameEn: 'Tanzanian Shilling', nameFr: 'Shilling tanzanien', nameAr: 'الشلن التنزاني' },
    bestSeason: 'yearround',
  },
  {
    id: 'ethiopia', code: 'ET', flag: '🇪🇹', continent: 'africa',
    subregion: { en: 'East Africa', fr: 'Afrique de l’Est', ar: 'شرق إفريقيا' },
    name: { en: 'Ethiopia', fr: 'Éthiopie', ar: 'إثيوبيا' },
    capital: { en: 'Addis Ababa', fr: 'Addis-Abeba', ar: 'أديس أبابا' },
    cities: ['Addis Ababa', 'Lalibela', 'Gondar', 'Axum'],
    monument: { en: 'Rock-Hewn Churches of Lalibela', fr: 'Églises rupestres de Lalibela', ar: 'كنائس لاليبيلا المنحوتة في الصخر', city: 'Lalibela', era: '12th–13th Century', descEn: 'Eleven monolithic churches carved downward from solid red volcanic rock.', descFr: 'Onze églises monolithiques sculptées directement dans la roche volcanique rouge.', descAr: 'إحدى عشرة كنيسة أثرية منحوتة بالكامل داخل الصخور البركانية الحمراء.' },
    dish: { en: 'Injera, Doro Wat & Coffee Ceremony', fr: 'Injera, Doro Wat & Café éthiopien', ar: 'الإنجيرا والقهوة الإثيوبية', descEn: 'Spongy teff flatbread topped with berbere-spiced stews followed by roasted coffee.', descFr: 'Galette de teff garnie de ragoûts épicés et cérémonie traditionnelle du café.', descAr: 'خبز الإنجيرا التقليدي مع اليخنات المتبلة ومراسم القهوة الإثيوبية.' },
    currency: { code: 'ETB', symbol: 'Br', nameEn: 'Ethiopian Birr', nameFr: 'Birr éthiopien', nameAr: 'البير الإثيوبي' },
    bestSeason: 'winter',
  },
  {
    id: 'south-africa', code: 'ZA', flag: '🇿🇦', continent: 'africa',
    subregion: { en: 'Southern Africa', fr: 'Afrique australe', ar: 'جنوب إفريقيا' },
    name: { en: 'South Africa', fr: 'Afrique du Sud', ar: 'جنوب إفريقيا' },
    capital: { en: 'Pretoria / Cape Town', fr: 'Pretoria / Le Cap', ar: 'بريتوريا / كيب تاون' },
    cities: ['Cape Town', 'Johannesburg', 'Durban', 'Stellenbosch'],
    monument: { en: 'Table Mountain & Robben Island', fr: 'Montagne de la Table & Robben Island', ar: 'جبل الطاولة وجزيرة روبن', city: 'Cape Town', era: 'Natural & Historic UNESCO', descEn: 'Flat-topped sandstone massif rising above Cape Town’s bays and historic Robben Island.', descFr: 'Massif emblématique dominant la baie du Cap et site historique de Robben Island.', descAr: 'جبل الطاولة الشاهق المطل على مدينة كيب تاون وجزيرة روبن التاريخية.' },
    dish: { en: 'Bobotie & Cape Malay Curry', fr: 'Bobotie & Curry du Cap', ar: 'بوبوتي وكاري كيب مالاي', descEn: 'Fragrant spiced bake topped with savory custard alongside turmeric yellow rice.', descFr: 'Gratin parfumé aux épices douces servi avec du riz jaune au curcuma.', descAr: 'طبق بوبوتي المتبل بالتوابل العطرية مع الأرز الأصفر بالكركم.' },
    currency: { code: 'ZAR', symbol: 'R', nameEn: 'South African Rand', nameFr: 'Rand sud-africain', nameAr: 'الراند الجنوب إفريقي' },
    bestSeason: 'yearround',
  },
  {
    id: 'cote-divoire', code: 'CI', flag: '🇨🇮', continent: 'africa',
    subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' },
    name: { en: 'Côte d’Ivoire', fr: 'Côte d’Ivoire', ar: 'ساحل العاج' },
    capital: { en: 'Yamoussoukro', fr: 'Yamoussoukro', ar: 'ياموسوكرو' },
    cities: ['Abidjan', 'Grand-Bassam', 'Yamoussoukro'],
    monument: { en: 'Historic Town of Grand-Bassam & Basilica', fr: 'Grand-Bassam & Basilique Notre-Dame', ar: 'غران بسام التاريخية وبازيليك ياموسوكرو', city: 'Grand-Bassam / Yamoussoukro', era: '19th–20th Century', descEn: 'UNESCO coastal heritage architecture and the monumental domed basilica in Yamoussoukro.', descFr: 'Patrimoine côtier de Grand-Bassam et basilique monumentale de Yamoussoukro.', descAr: 'المدينة الساحلية التراثية غران بسام وكاتدرائية ياموسوكرو الكبرى.' },
    dish: { en: 'Attiéké & Alloco', fr: 'Attiéké poisson braisé & Alloco', ar: 'أتيكي والسمك المشوي', descEn: 'Steamed cassava couscous served with charcoal-grilled fish and sweet fried plantains.', descFr: 'Semoule de manioc accompagnée de poisson braisé et bananes plantains dorées.', descAr: 'كسكس الكسافا بالسمك المشوي على الفحم والموز المقلي.' },
    currency: { code: 'XOF', symbol: 'CFA', nameEn: 'West African CFA Franc', nameFr: 'Franc CFA', nameAr: 'الفرنك الإفريقي' },
    bestSeason: 'winter',
  },
  {
    id: 'cameroon', code: 'CM', flag: '🇨🇲', continent: 'africa',
    subregion: { en: 'Central Africa', fr: 'Afrique centrale', ar: 'وسط إفريقيا' },
    name: { en: 'Cameroon', fr: 'Cameroun', ar: 'الكاميرون' },
    capital: { en: 'Yaoundé', fr: 'Yaoundé', ar: 'ياوندي' },
    cities: ['Yaoundé', 'Douala', 'Foumban', 'Kribi'],
    monument: { en: 'Royal Palace of Foumban', fr: 'Palais royal de Foumban', ar: 'قصر فومبان الملكي', city: 'Foumban', era: '1917', descEn: 'Historic Bamoun Sultanate palace and museum celebrating royal bronze and bead artistry.', descFr: 'Palais du sultanat Bamoun célébrant l’art royal et les traditions historiques.', descAr: 'قصر سلطنة بامون التاريخي ومتحفه الفني العريق.' },
    dish: { en: 'Ndolé & Poulet DG', fr: 'Ndolé & Poulet DG', ar: 'ندولي ودجاج دي جي', descEn: 'Rich peanut-and-greens stew with shrimp or beef alongside plantain-studded chicken.', descFr: 'Mijoté crémeux aux feuilles amères et arachides et poulet aux bananes plantains.', descAr: 'طبق الندولي بالفول السوداني والأعشاب مع الدجاج والموز.' },
    currency: { code: 'XAF', symbol: 'FCFA', nameEn: 'Central African CFA Franc', nameFr: 'Franc CFA (BEAC)', nameAr: 'فرنك وسط إفريقيا' },
    bestSeason: 'winter',
  },
  {
    id: 'rwanda', code: 'RW', flag: '🇷🇼', continent: 'africa',
    subregion: { en: 'East Africa', fr: 'Afrique de l’Est', ar: 'شرق إفريقيا' },
    name: { en: 'Rwanda', fr: 'Rwanda', ar: 'رواندا' },
    capital: { en: 'Kigali', fr: 'Kigali', ar: 'كيغالي' },
    cities: ['Kigali', 'Musanze', 'Gisenyi'],
    monument: { en: 'King’s Palace Museum in Nyanza', fr: 'Palais royal de Nyanza', ar: 'متحف القصر الملكي في نيانزا', city: 'Nyanza', era: '19th–20th Century', descEn: 'Reconstructed traditional thatched royal residence showcasing Rwanda’s architectural heritage.', descFr: 'Résidence royale traditionnelle reconstruite retraçant l’histoire du royaume.', descAr: 'القصر الملكي التقليدي في نيانزا الذي يوثق التراث المعماري الرواندي.' },
    dish: { en: 'Brochettes & Isombe', fr: 'Brochettes & Isombe', ar: 'المشويات والإيسومبي', descEn: 'Chargrilled skewers served with roasted plantains and peanut-cassava leaf stew.', descFr: 'Brochettes grillées accompagnées de bananes rôties et feuilles de manioc.', descAr: 'أسياخ مشوية مع الموز المشوي وطبق الإيسومبي التقليدي.' },
    currency: { code: 'RWF', symbol: 'RF', nameEn: 'Rwandan Franc', nameFr: 'Franc rwandais', nameAr: 'الفرنك الرواندي' },
    bestSeason: 'yearround',
  },
  {
    id: 'madagascar', code: 'MG', flag: '🇲🇬', continent: 'africa',
    subregion: { en: 'Indian Ocean Africa', fr: 'Océan Indien', ar: 'المحيط الهندي' },
    name: { en: 'Madagascar', fr: 'Madagascar', ar: 'مدغشقر' },
    capital: { en: 'Antananarivo', fr: 'Antananarivo', ar: 'أنتاناناريفو' },
    cities: ['Antananarivo', 'Nosy Be', 'Morondava'],
    monument: { en: 'Royal Hill of Ambohimanga', fr: 'Colline royale d’Ambohimanga', ar: 'التل الملكي أمبوهيمانغا', city: 'Antananarivo', era: '18th Century', descEn: 'UNESCO walled royal city and sacred forest overlooking the central highlands.', descFr: 'Cité royale fortifiée classée à l’UNESCO dominant les hauts plateaux.', descAr: 'المدينة الملكية المسورة المصنفة في اليونسكو فوق المرتفعات الوسطى.' },
    dish: { en: 'Romazava & Ravitoto', fr: 'Romazava & Ravitoto', ar: 'رومازافا ورافيتوتو', descEn: 'Fragrant island broth with greens and zebu served over steamed Madagascar rice.', descFr: 'Bouillon parfumé aux brèdes mafanes servi avec du riz malgache.', descAr: 'مرق الأعشاب التقليدي واللحم مع الأرز المحلي.' },
    currency: { code: 'MGA', symbol: 'Ar', nameEn: 'Malagasy Ariary', nameFr: 'Ariary malgache', nameAr: 'الأرياري الملغاشي' },
    bestSeason: 'yearround',
  },
  {
    id: 'mauritius', code: 'MU', flag: '🇲🇺', continent: 'africa',
    subregion: { en: 'Indian Ocean Africa', fr: 'Océan Indien', ar: 'المحيط الهندي' },
    name: { en: 'Mauritius', fr: 'Maurice', ar: 'موريشيوس' },
    capital: { en: 'Port Louis', fr: 'Port-Louis', ar: 'بورت لويس' },
    cities: ['Port Louis', 'Grand Baie', 'Mahébourg'],
    monument: { en: 'Aapravasi Ghat & Le Morne Brabant', fr: 'Aapravasi Ghat & Morne Brabant', ar: 'أبرافاسي غات وجبل لو مورن', city: 'Port Louis / Le Morne', era: '19th Century', descEn: 'UNESCO cultural heritage wharf and dramatic basalt peninsula rising over turquoise lagoons.', descFr: 'Site historique d’Aapravasi Ghat et péninsule majestueuse du Morne.', descAr: 'موقع التراث العالمي ومرتفع لو مورن المطل على البحيرات الفيروزية.' },
    dish: { en: 'Dholl Puri & Gateau Piment', fr: 'Dholl Puri & Gâteau Piment', ar: 'دهول بوري وفطائر البهارات', descEn: 'Warm yellow split-pea flatbreads folded around mild curry and tomato chutney.', descFr: 'Galettes souples farcies au curry doux et chutney de tomates.', descAr: 'خبز العدس الأصفر الرقيق محشو بالكاري وصلصة الطماطم.' },
    currency: { code: 'MUR', symbol: 'Rs', nameEn: 'Mauritian Rupee', nameFr: 'Roupie mauricienne', nameAr: 'الروبية الموريشية' },
    bestSeason: 'yearround',
  },
  {
    id: 'namibia', code: 'NA', flag: '🇳🇦', continent: 'africa',
    subregion: { en: 'Southern Africa', fr: 'Afrique australe', ar: 'جنوب إفريقيا' },
    name: { en: 'Namibia', fr: 'Namibie', ar: 'ناميبيا' },
    capital: { en: 'Windhoek', fr: 'Windhoek', ar: 'ويندهوك' },
    cities: ['Windhoek', 'Swakopmund', 'Sossusvlei'],
    monument: { en: 'Twyfelfontein Rock Engravings', fr: 'Gravures rupestres de Twyfelfontein', ar: 'نقوش تويفلفونتين الصخرية', city: 'Kunene', era: 'Prehistoric (c. 4000 BCE)', descEn: 'Thousands of ancient ochre sandstone engravings across Namibia’s desert valley.', descFr: 'Des milliers de gravures rupestres millénaires dans la vallée désertique.', descAr: 'آلاف النقوش الصخرية الأثرية في وادي ناميبيا الصحراوي.' },
    dish: { en: 'Kapana & Potjiekos', fr: 'Kapana & Potjiekos', ar: 'كابانا وبوتجيكوس', descEn: 'Open-fire grilled spiced beef strips and slow-simmered cast-iron stews.', descFr: 'Lamelles de bœuf grillées aux épices et ragoût mijoté en marmite de fonte.', descAr: 'شرائح لحم مشوية على الحطب ويخنات مطهوة في قدر الحديد.' },
    currency: { code: 'NAD', symbol: 'N$', nameEn: 'Namibian Dollar', nameFr: 'Dollar namibien', nameAr: 'الدولار الناميبي' },
    bestSeason: 'yearround',
  },
  {
    id: 'botswana', code: 'BW', flag: '🇧🇼', continent: 'africa',
    subregion: { en: 'Southern Africa', fr: 'Afrique australe', ar: 'جنوب إفريقيا' },
    name: { en: 'Botswana', fr: 'Botswana', ar: 'بوتسوانا' },
    capital: { en: 'Gaborone', fr: 'Gaborone', ar: 'غابورون' },
    cities: ['Gaborone', 'Maun', 'Kasane'],
    monument: { en: 'Tsodilo Hills Rock Art', fr: 'Collines de Tsodilo', ar: 'تلال تسوديلو الأثرية', city: 'Ngamiland', era: 'Prehistoric', descEn: 'Sacred Kalahari quartzite hills featuring over 4,500 ancient paintings.', descFr: 'Collines sacrées du Kalahari abritant plus de 4 500 peintures rupestres.', descAr: 'تلال كالاهاري المقدسة التي تضم أكثر من 4500 رسم صخري قديم.' },
    dish: { en: 'Seswaa & Bogobe', fr: 'Seswaa & Bogobe', ar: 'سيسوا وبوغوبي', descEn: 'Slow-cooked shredded beef seasoned simply with salt and served over sorghum porridge.', descFr: 'Bœuf effiloché mijoté lentement servi avec une purée de sorgho.', descAr: 'لحم مطهو ببطء ومفتت يقدم مع عصيدة الذرة الرفيعة.' },
    currency: { code: 'BWP', symbol: 'P', nameEn: 'Botswana Pula', nameFr: 'Pula botswanais', nameAr: 'البولا البوتسواني' },
    bestSeason: 'yearround',
  },
  {
    id: 'seychelles', code: 'SC', flag: '🇸🇨', continent: 'africa',
    subregion: { en: 'Indian Ocean Africa', fr: 'Océan Indien', ar: 'المحيط الهندي' },
    name: { en: 'Seychelles', fr: 'Seychelles', ar: 'سيشل' },
    capital: { en: 'Victoria', fr: 'Victoria', ar: 'فيكتوريا' },
    cities: ['Victoria', 'Praslin', 'La Digue'],
    monument: { en: 'Victoria Clocktower & Vallée de Mai', fr: 'Tour de l’Horloge & Vallée de Mai', ar: 'برج ساعة فيكتوريا ووادي ماي', city: 'Mahé / Praslin', era: '1903 & Natural Heritage', descEn: 'Silver landmark in Victoria and ancient coco-de-mer palm forest.', descFr: 'Horloge historique de Victoria et forêt primaire de la Vallée de Mai.', descAr: 'برج الساعة التاريخي في فيكتوريا وغابة نخيل وادي ماي.' },
    dish: { en: 'Creole Fish Curry & Ladob', fr: 'Cari de poisson créole & Ladob', ar: 'كاري السمك الكريولي', descEn: 'Fresh reef fish simmered in coconut milk, ginger, and island spices.', descFr: 'Poisson frais mijoté au lait de coco, gingembre et épices créoles.', descAr: 'سمك طازج مطهو بحليب جوز الهند والزنجبيل وتوابل الجزيرة.' },
    currency: { code: 'SCR', symbol: 'SR', nameEn: 'Seychellois Rupee', nameFr: 'Roupie seychelloise', nameAr: 'الروبية السيشلية' },
    bestSeason: 'yearround',
  },
];

// Remaining sovereign countries in Europe & Africa + Americas highlights
const EXTRA_ATLAS_ENTRIES: Array<{
  id: string;
  code: string;
  flag: string;
  continent: 'europe' | 'africa' | 'americas';
  subregion: LocalizedText;
  name: LocalizedText;
  capital: LocalizedText;
  cities: string[];
  monument: LocalizedText;
  monumentEra: string;
  dish: LocalizedText;
  currencyCode: string;
  currencySymbol: string;
  currencyName: LocalizedText;
}> = [
  // Remaining African Nations (completing all 54 African countries)
  { id: 'angola', code: 'AO', flag: '🇦🇴', continent: 'africa', subregion: { en: 'Southern Africa', fr: 'Afrique australe', ar: 'جنوب إفريقيا' }, name: { en: 'Angola', fr: 'Angola', ar: 'أنغولا' }, capital: { en: 'Luanda', fr: 'Luanda', ar: 'لواندا' }, cities: ['Luanda', 'Benguela', 'Lubango'], monument: { en: 'Fortaleza de São Miguel', fr: 'Forteresse de São Miguel', ar: 'قلعة ساو ميغيل', }, monumentEra: '1576', dish: { en: 'Muamba de Galinha', fr: 'Muamba de poulet', ar: 'موامبا الدجاج' }, currencyCode: 'AOA', currencySymbol: 'Kz', currencyName: { en: 'Angolan Kwanza', fr: 'Kwanza angolais', ar: 'الكوانزا الأنغولي' } },
  { id: 'benin', code: 'BJ', flag: '🇧🇯', continent: 'africa', subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' }, name: { en: 'Benin', fr: 'Bénin', ar: 'بنين' }, capital: { en: 'Porto-Novo', fr: 'Porto-Novo', ar: 'بورتو نوفو' }, cities: ['Cotonou', 'Abomey', 'Ouidah'], monument: { en: 'Royal Palaces of Abomey', fr: 'Palais royaux d’Abomey', ar: 'قصور أبومي الملكية' }, monumentEra: '17th Century', dish: { en: 'Amiwo & Grilled Fish', fr: 'Amiwo & Poisson grillé', ar: 'أمييو مع السمك المشوي' }, currencyCode: 'XOF', currencySymbol: 'CFA', currencyName: { en: 'West African CFA Franc', fr: 'Franc CFA', ar: 'فرنك غرب إفريقيا' } },
  { id: 'burkina-faso', code: 'BF', flag: '🇧🇫', continent: 'africa', subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' }, name: { en: 'Burkina Faso', fr: 'Burkina Faso', ar: 'بوركينا فاسو' }, capital: { en: 'Ouagadougou', fr: 'Ouagadougou', ar: 'واغادوغو' }, cities: ['Ouagadougou', 'Bobo-Dioulasso', 'Tiébélé'], monument: { en: 'Royal Court of Tiébélé', fr: 'Cour royale de Tiébélé', ar: 'البلاط الملكي في تيبيلي' }, monumentEra: '16th Century', dish: { en: 'Riz Gras & Tô', fr: 'Riz gras & Tô', ar: 'الأرز الغني والتو' }, currencyCode: 'XOF', currencySymbol: 'CFA', currencyName: { en: 'West African CFA Franc', fr: 'Franc CFA', ar: 'فرنك غرب إفريقيا' } },
  { id: 'burundi', code: 'BI', flag: '🇧🇮', continent: 'africa', subregion: { en: 'East Africa', fr: 'Afrique de l’Est', ar: 'شرق إفريقيا' }, name: { en: 'Burundi', fr: 'Burundi', ar: 'بوروندي' }, capital: { en: 'Gitega', fr: 'Gitega', ar: 'غيتيغا' }, cities: ['Bujumbura', 'Gitega'], monument: { en: 'Gishora Drum Sanctuary', fr: 'Sanctuaire des tambours de Gishora', ar: 'معبد طبول غيشورا التراثي' }, monumentEra: '19th Century', dish: { en: 'Mukeke Lake Tanganyika Fish', fr: 'Poisson Mukeke du Tanganyika', ar: 'سمك موكيكي من بحيرة تنجانيقا' }, currencyCode: 'BIF', currencySymbol: 'FBu', currencyName: { en: 'Burundian Franc', fr: 'Franc burundais', ar: 'الفرنك البوروندي' } },
  { id: 'cabo-verde', code: 'CV', flag: '🇨🇻', continent: 'africa', subregion: { en: 'Atlantic Islands', fr: 'Îles atlantiques', ar: 'جزر الأطلسي' }, name: { en: 'Cabo Verde', fr: 'Cap-Vert', ar: 'الرأس الأخضر' }, capital: { en: 'Praia', fr: 'Praia', ar: 'برايا' }, cities: ['Praia', 'Mindelo', 'Cidade Velha'], monument: { en: 'Cidade Velha Fortress', fr: 'Forteresse de Cidade Velha', ar: 'قلعة سيدادي فيليا' }, monumentEra: '1462', dish: { en: 'Cachupa', fr: 'Cachupa', ar: 'كاتشوبا' }, currencyCode: 'CVE', currencySymbol: 'Esc', currencyName: { en: 'Cabo Verdean Escudo', fr: 'Escudo cap-verdien', ar: 'إسكودو الرأس الأخضر' } },
  { id: 'car', code: 'CF', flag: '🇨🇫', continent: 'africa', subregion: { en: 'Central Africa', fr: 'Afrique centrale', ar: 'وسط إفريقيا' }, name: { en: 'Central African Republic', fr: 'République centrafricaine', ar: 'إفريقيا الوسطى' }, capital: { en: 'Bangui', fr: 'Bangui', ar: 'بانغي' }, cities: ['Bangui', 'Boali'], monument: { en: 'Boali Waterfalls & Boganda Museum', fr: 'Chutes de Boali', ar: 'شلالات بوالي ومتحف بوغاندا' }, monumentEra: 'Historic & Natural', dish: { en: 'Gozo & Kanda', fr: 'Gozo & Kanda', ar: 'غوزو وكاندا' }, currencyCode: 'XAF', currencySymbol: 'FCFA', currencyName: { en: 'Central African CFA Franc', fr: 'Franc CFA', ar: 'فرنك وسط إفريقيا' } },
  { id: 'chad', code: 'TD', flag: '🇹🇩', continent: 'africa', subregion: { en: 'Central / Saharan Africa', fr: 'Afrique centrale', ar: 'وسط إفريقيا' }, name: { en: 'Chad', fr: 'Tchad', ar: 'تشاد' }, capital: { en: 'N’Djamena', fr: 'N’Djamena', ar: 'نجامينا' }, cities: ['N’Djamena', 'Zakouma', 'Ennedi'], monument: { en: 'Ennedi Massif Rock Arches', fr: 'Massif de l’Ennedi', ar: 'أقواس جبال إنيدي الأثرية' }, monumentEra: 'Prehistoric Rock Art', dish: { en: 'Daraba & Boule', fr: 'Daraba & Boule', ar: 'الدارابا والعصيدة' }, currencyCode: 'XAF', currencySymbol: 'FCFA', currencyName: { en: 'Central African CFA Franc', fr: 'Franc CFA', ar: 'فرنك وسط إفريقيا' } },
  { id: 'comoros', code: 'KM', flag: '🇰🇲', continent: 'africa', subregion: { en: 'Indian Ocean Africa', fr: 'Océan Indien', ar: 'المحيط الهندي' }, name: { en: 'Comoros', fr: 'Comores', ar: 'جزر القمر' }, capital: { en: 'Moroni', fr: 'Moroni', ar: 'موروني' }, cities: ['Moroni', 'Mutsamudu'], monument: { en: 'Old Friday Mosque & Medina of Moroni', fr: 'Ancienne mosquée du Vendredi de Moroni', ar: 'المسجد العتيق في موروني' }, monumentEra: '1427', dish: { en: 'Langouste à la Vanille', fr: 'Langouste à la vanille', ar: 'جراد البحر بالفانيليا' }, currencyCode: 'KMF', currencySymbol: 'CF', currencyName: { en: 'Comorian Franc', fr: 'Franc comorien', ar: 'الفرنك القمري' } },
  { id: 'congo', code: 'CG', flag: '🇨🇬', continent: 'africa', subregion: { en: 'Central Africa', fr: 'Afrique centrale', ar: 'وسط إفريقيا' }, name: { en: 'Republic of the Congo', fr: 'République du Congo', ar: 'جمهورية الكونغو' }, capital: { en: 'Brazzaville', fr: 'Brazzaville', ar: 'برازافيل' }, cities: ['Brazzaville', 'Pointe-Noire'], monument: { en: 'Basilique Sainte-Anne du Congo', fr: 'Basilique Sainte-Anne', ar: 'بازيليك سانت آن في برازافيل' }, monumentEra: '1943', dish: { en: 'Saka-Saka & Poulet Moambé', fr: 'Saka-Saka & Poulet Moambé', ar: 'ساكا ساكا ودجاج موامبي' }, currencyCode: 'XAF', currencySymbol: 'FCFA', currencyName: { en: 'Central African CFA Franc', fr: 'Franc CFA', ar: 'فرنك وسط إفريقيا' } },
  { id: 'drc', code: 'CD', flag: '🇨🇩', continent: 'africa', subregion: { en: 'Central Africa', fr: 'Afrique centrale', ar: 'وسط إفريقيا' }, name: { en: 'DR Congo', fr: 'RD Congo', ar: 'الكونغو الديمقراطية' }, capital: { en: 'Kinshasa', fr: 'Kinshasa', ar: 'كينشاسا' }, cities: ['Kinshasa', 'Goma', 'Lubumbashi'], monument: { en: 'Palais de la Nation & Virunga', fr: 'Palais de la Nation & Virunga', ar: 'قصر الأمة ومتنزه فيرونغا' }, monumentEra: 'Historic & UNESCO', dish: { en: 'Poulet à la Moambé & Pondu', fr: 'Poulet à la Moambé & Pondu', ar: 'دجاج موامبي وبوندو' }, currencyCode: 'CDF', currencySymbol: 'FC', currencyName: { en: 'Congolese Franc', fr: 'Franc congolais', ar: 'الفرنك الكونغولي' } },
  { id: 'djibouti', code: 'DJ', flag: '🇩🇯', continent: 'africa', subregion: { en: 'Horn of Africa', fr: 'Corne de l’Afrique', ar: 'القرن الإفريقي' }, name: { en: 'Djibouti', fr: 'Djibouti', ar: 'جيبوتي' }, capital: { en: 'Djibouti City', fr: 'Djibouti', ar: 'مدينة جيبوتي' }, cities: ['Djibouti City', 'Tadjoura', 'Lake Assal'], monument: { en: 'Historic White Town of Tadjoura', fr: 'Vieille ville blanche de Tadjoura', ar: 'مدينة تاجورة البيضاء التاريخية' }, monumentEra: '16th Century', dish: { en: 'Skoudehkaris (Spiced Rice)', fr: 'Skoudehkaris', ar: 'الأرز الجيبوتي المتبل' }, currencyCode: 'DJF', currencySymbol: 'Fdj', currencyName: { en: 'Djiboutian Franc', fr: 'Franc djiboutien', ar: 'الفرنك الجيبوتي' } },
  { id: 'equatorial-guinea', code: 'GQ', flag: '🇬🇶', continent: 'africa', subregion: { en: 'Central Africa', fr: 'Afrique centrale', ar: 'وسط إفريقيا' }, name: { en: 'Equatorial Guinea', fr: 'Guinée équatoriale', ar: 'غينيا الاستوائية' }, capital: { en: 'Malabo', fr: 'Malabo', ar: 'مالابو' }, cities: ['Malabo', 'Bata'], monument: { en: 'Santa Isabel Cathedral', fr: 'Cathédrale Santa Isabel', ar: 'كاتدرائية سانتا إيزابيل' }, monumentEra: '1916', dish: { en: 'Pepesup & Succotash', fr: 'Pepesup de poisson', ar: 'حساء السمك الاستوائي' }, currencyCode: 'XAF', currencySymbol: 'FCFA', currencyName: { en: 'Central African CFA Franc', fr: 'Franc CFA', ar: 'فرنك وسط إفريقيا' } },
  { id: 'eritrea', code: 'ER', flag: '🇪🇷', continent: 'africa', subregion: { en: 'Horn of Africa', fr: 'Corne de l’Afrique', ar: 'القرن الإفريقي' }, name: { en: 'Eritrea', fr: 'Érythrée', ar: 'إريتريا' }, capital: { en: 'Asmara', fr: 'Asmara', ar: 'أسمرة' }, cities: ['Asmara', 'Massawa', 'Keren'], monument: { en: 'Modernist City of Asmara', fr: 'Architecture moderniste d’Asmara', ar: 'عمارة أسمرة التاريخية' }, monumentEra: 'Early 20th Century', dish: { en: 'Zigni & Injera', fr: 'Zigni & Injera', ar: 'زغني مع الإنجيرا' }, currencyCode: 'ERN', currencySymbol: 'Nfk', currencyName: { en: 'Eritrean Nakfa', fr: 'Nakfa érythréen', ar: 'الناكفا الإريترية' } },
  { id: 'eswatini', code: 'SZ', flag: '🇸🇿', continent: 'africa', subregion: { en: 'Southern Africa', fr: 'Afrique australe', ar: 'جنوب إفريقيا' }, name: { en: 'Eswatini', fr: 'Eswatini', ar: 'إسواتيني' }, capital: { en: 'Mbabane', fr: 'Mbabane', ar: 'مباباني' }, cities: ['Mbabane', 'Lobamba', 'Manzini'], monument: { en: 'Mantenga Cultural Village & Sibebe Rock', fr: 'Village de Mantenga', ar: 'قرية مانتينغا وصخرة سيبيبي' }, monumentEra: 'Royal Heritage', dish: { en: 'Sishwala & Grilled Corn', fr: 'Sishwala traditionnel', ar: 'أطباق الذرة واللحم التقليدية' }, currencyCode: 'SZL', currencySymbol: 'L', currencyName: { en: 'Swazi Lilangeni', fr: 'Lilangeni', ar: 'ليلانغيني إسواتيني' } },
  { id: 'gabon', code: 'GA', flag: '🇬🇦', continent: 'africa', subregion: { en: 'Central Africa', fr: 'Afrique centrale', ar: 'وسط إفريقيا' }, name: { en: 'Gabon', fr: 'Gabon', ar: 'الغابون' }, capital: { en: 'Libreville', fr: 'Libreville', ar: 'ليبرفيل' }, cities: ['Libreville', 'Port-Gentil', 'Lambaréné'], monument: { en: 'St. Michael’s Carved Church & Lopé', fr: 'Église Saint-Michel de Nkembo', ar: 'كنيسة القديس ميشيل المنحوتة' }, monumentEra: '1961 & Ancient Lopé', dish: { en: 'Poulet Nyembwé', fr: 'Poulet Nyembwé', ar: 'دجاج نيمبوي' }, currencyCode: 'XAF', currencySymbol: 'FCFA', currencyName: { en: 'Central African CFA Franc', fr: 'Franc CFA', ar: 'فرنك وسط إفريقيا' } },
  { id: 'gambia', code: 'GM', flag: '🇬🇲', continent: 'africa', subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' }, name: { en: 'The Gambia', fr: 'Gambie', ar: 'غامبيا' }, capital: { en: 'Banjul', fr: 'Banjul', ar: 'بانجول' }, cities: ['Banjul', 'Serekunda', 'Juffureh'], monument: { en: 'Kunta Kinteh Island & Wassu Stone Circles', fr: 'Île Kunta Kinteh & Cercles de Wassu', ar: 'جزيرة كونتا كينتي ودوائر واسو الحجرية' }, monumentEra: '8th–18th Century', dish: { en: 'Domoda (Peanut Stew)', fr: 'Domoda aux arachides', ar: 'يخنة الدومودا بالفول السوداني' }, currencyCode: 'GMD', currencySymbol: 'D', currencyName: { en: 'Gambian Dalasi', fr: 'Dalasi gambien', ar: 'الدالاسي الغامبي' } },
  { id: 'guinea', code: 'GN', flag: '🇬🇳', continent: 'africa', subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' }, name: { en: 'Guinea', fr: 'Guinée', ar: 'غينيا' }, capital: { en: 'Conakry', fr: 'Conakry', ar: 'كوناكري' }, cities: ['Conakry', 'Labé', 'Kindia'], monument: { en: 'Grand Mosque of Conakry & Fouta Djallon', fr: 'Grande Mosquée de Conakry & Fouta-Djalon', ar: 'المسجد الكبير في كوناكري وفوتا جالون' }, monumentEra: '1982 & Historic Highlands', dish: { en: 'Poulet Yassa & Sauce Feuille', fr: 'Poulet Yassa & Sauce feuille', ar: 'دجاج ياسا وصلصة الأعشاب' }, currencyCode: 'GNF', currencySymbol: 'FG', currencyName: { en: 'Guinean Franc', fr: 'Franc guinéen', ar: 'الفرنك الغيني' } },
  { id: 'guinea-bissau', code: 'GW', flag: '🇬🇼', continent: 'africa', subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' }, name: { en: 'Guinea-Bissau', fr: 'Guinée-Bissau', ar: 'غينيا بيساو' }, capital: { en: 'Bissau', fr: 'Bissau', ar: 'بيساو' }, cities: ['Bissau', 'Cacheu', 'Bubaque'], monument: { en: 'Fortaleza de São José da Amura', fr: 'Forteresse d’Amura', ar: 'قلعة أمورا التاريخية' }, monumentEra: '1696', dish: { en: 'Caldo de Mancarra', fr: 'Caldo de Mancarra', ar: 'يخنة المانكارا' }, currencyCode: 'XOF', currencySymbol: 'CFA', currencyName: { en: 'West African CFA Franc', fr: 'Franc CFA', ar: 'فرنك غرب إفريقيا' } },
  { id: 'lesotho', code: 'LS', flag: '🇱🇸', continent: 'africa', subregion: { en: 'Southern Africa', fr: 'Afrique australe', ar: 'جنوب إفريقيا' }, name: { en: 'Lesotho', fr: 'Lesotho', ar: 'ليسوتو' }, capital: { en: 'Maseru', fr: 'Maseru', ar: 'ماسيرو' }, cities: ['Maseru', 'Thaba-Bosiu'], monument: { en: 'Thaba-Bosiu Mountain Fortress', fr: 'Forteresse de Thaba-Bosiu', ar: 'قلعة جبل ثابا بوسيو' }, monumentEra: '1824', dish: { en: 'Papa & Moroho', fr: 'Papa & Moroho', ar: 'بابا وموروهو' }, currencyCode: 'LSL', currencySymbol: 'L', currencyName: { en: 'Lesotho Loti', fr: 'Loti', ar: 'لوتي ليسوتو' } },
  { id: 'liberia', code: 'LR', flag: '🇱🇷', continent: 'africa', subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' }, name: { en: 'Liberia', fr: 'Liberia', ar: 'ليبيريا' }, capital: { en: 'Monrovia', fr: 'Monrovia', ar: 'مونروفيا' }, cities: ['Monrovia', 'Harper'], monument: { en: 'Providence Island Historic Site', fr: 'Île Providence de Monrovia', ar: 'جزيرة بروفيدنس التاريخية' }, monumentEra: '1822', dish: { en: 'Cassava Leaf & Jollof', fr: 'Feuilles de manioc & Riz Jollof', ar: 'أوراق الكسافا وأرز جولوف' }, currencyCode: 'LRD', currencySymbol: '$', currencyName: { en: 'Liberian Dollar', fr: 'Dollar libérien', ar: 'الدولار الليبيري' } },
  { id: 'malawi', code: 'MW', flag: '🇲🇼', continent: 'africa', subregion: { en: 'Southeast Africa', fr: 'Afrique du Sud-Est', ar: 'جنوب شرق إفريقيا' }, name: { en: 'Malawi', fr: 'Malawi', ar: 'مالاوي' }, capital: { en: 'Lilongwe', fr: 'Lilongwe', ar: 'ليلونغوي' }, cities: ['Lilongwe', 'Blantyre', 'Cape Maclear'], monument: { en: 'Chongoni Rock Art Area', fr: 'Art rupestre de Chongoni', ar: 'فن تشونغوني الصخري' }, monumentEra: 'Prehistoric UNESCO', dish: { en: 'Chambo Lake Fish & Nsima', fr: 'Poisson Chambo & Nsima', ar: 'سمك تشامبو مع النسيما' }, currencyCode: 'MWK', currencySymbol: 'MK', currencyName: { en: 'Malawian Kwacha', fr: 'Kwacha malawite', ar: 'الكواشا المالاوية' } },
  { id: 'mali', code: 'ML', flag: '🇲🇱', continent: 'africa', subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' }, name: { en: 'Mali', fr: 'Mali', ar: 'مالي' }, capital: { en: 'Bamako', fr: 'Bamako', ar: 'باماكو' }, cities: ['Bamako', 'Djenné', 'Timbuktu'], monument: { en: 'Great Mosque of Djenné & Timbuktu', fr: 'Grande Mosquée de Djenné & Tombouctou', ar: 'الجامع الكبير في جينيه وتمبكتو' }, monumentEra: '13th–1907', dish: { en: 'Tiguédéguéna (Peanut Sauce)', fr: 'Tiguédéguéna', ar: 'تيغيديغينا بالفول السوداني' }, currencyCode: 'XOF', currencySymbol: 'CFA', currencyName: { en: 'West African CFA Franc', fr: 'Franc CFA', ar: 'فرنك غرب إفريقيا' } },
  { id: 'mozambique', code: 'MZ', flag: '🇲🇿', continent: 'africa', subregion: { en: 'Southeast Africa', fr: 'Afrique du Sud-Est', ar: 'جنوب شرق إفريقيا' }, name: { en: 'Mozambique', fr: 'Mozambique', ar: 'موزمبيق' }, capital: { en: 'Maputo', fr: 'Maputo', ar: 'مابوتو' }, cities: ['Maputo', 'Ilha de Moçambique', 'Vilankulo'], monument: { en: 'Island of Mozambique Fort', fr: 'Île de Mozambique', ar: 'جزيرة وقلعة موزمبيق التاريخية' }, monumentEra: '1507', dish: { en: 'Peri-Peri Prawns & Matapa', fr: 'Crevettes Piri-Piri & Matapa', ar: 'روبيان بيري بيري وماتابا' }, currencyCode: 'MZN', currencySymbol: 'MT', currencyName: { en: 'Mozambican Metical', fr: 'Metical', ar: 'المتيكال الموزمبيقي' } },
  { id: 'niger', code: 'NE', flag: '🇳🇪', continent: 'africa', subregion: { en: 'Sahel / West Africa', fr: 'Sahel', ar: 'الساحل الإفريقي' }, name: { en: 'Niger', fr: 'Niger', ar: 'النيجر' }, capital: { en: 'Niamey', fr: 'Niamey', ar: 'نيامي' }, cities: ['Niamey', 'Agadez', 'Zinder'], monument: { en: 'Historic Centre of Agadez Mosque', fr: 'Grande Mosquée d’Agadez', ar: 'مسجد أغاديز التاريخي' }, monumentEra: '1515', dish: { en: 'Dambou & Kilishi', fr: 'Dambou & Kilishi', ar: 'دامبو وكليشي' }, currencyCode: 'XOF', currencySymbol: 'CFA', currencyName: { en: 'West African CFA Franc', fr: 'Franc CFA', ar: 'فرنك غرب إفريقيا' } },
  { id: 'sao-tome', code: 'ST', flag: '🇸🇹', continent: 'africa', subregion: { en: 'Gulf of Guinea', fr: 'Golfe de Guinée', ar: 'خليج غينيا' }, name: { en: 'São Tomé & Príncipe', fr: 'Sao Tomé-et-Principe', ar: 'ساو تومي وبرينسيب' }, capital: { en: 'São Tomé', fr: 'São Tomé', ar: 'ساو تومي' }, cities: ['São Tomé', 'Santo António'], monument: { en: 'Fort São Sebastião', fr: 'Fort São Sebastião', ar: 'حصن ساو سيباستياو' }, monumentEra: '1575', dish: { en: 'Calulu & Island Cocoa', fr: 'Calulu & Cacao de l’île', ar: 'كالولو والكاكاو المحلي' }, currencyCode: 'STN', currencySymbol: 'Db', currencyName: { en: 'Dobra', fr: 'Dobra', ar: 'الدوبرا' } },
  { id: 'sierra-leone', code: 'SL', flag: '🇸🇱', continent: 'africa', subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' }, name: { en: 'Sierra Leone', fr: 'Sierra Leone', ar: 'سيراليون' }, capital: { en: 'Freetown', fr: 'Freetown', ar: 'فريتاون' }, cities: ['Freetown', 'Bo', 'Bunce Island'], monument: { en: 'Old Fourah Bay & Bunce Island', fr: 'Île de Bunce & Freetown', ar: 'جزيرة بانس ومعالم فريتاون' }, monumentEra: '17th–19th Century', dish: { en: 'Plasas & Groundnut Soup', fr: 'Plasas & Soupe d’arachide', ar: 'بلاساس وحساء الفول السوداني' }, currencyCode: 'SLE', currencySymbol: 'Le', currencyName: { en: 'Sierra Leonean Leone', fr: 'Leone', ar: 'الليون' } },
  { id: 'somalia', code: 'SO', flag: '🇸🇴', continent: 'africa', subregion: { en: 'Horn of Africa', fr: 'Corne de l’Afrique', ar: 'القرن الإفريقي' }, name: { en: 'Somalia', fr: 'Somalie', ar: 'الصومال' }, capital: { en: 'Mogadishu', fr: 'Mogadiscio', ar: 'مقديشو' }, cities: ['Mogadishu', 'Hargeisa', 'Berbera'], monument: { en: 'Laas Geel Cave Paintings & Fakr ad-Din Mosque', fr: 'Grottes de Laas Geel & Mosquée Fakr ad-Din', ar: 'كهوف لاس غيل ومسجد فخر الدين' }, monumentEra: '3500 BCE & 1269 CE', dish: { en: 'Bariis Iskukaris & Sambusa', fr: 'Bariis Iskukaris & Sambusa', ar: 'الأرز الصومالي المتبل والسمبوسة' }, currencyCode: 'SOS', currencySymbol: 'Sh', currencyName: { en: 'Somali Shilling', fr: 'Shilling somalien', ar: 'الشلن الصومالي' } },
  { id: 'south-sudan', code: 'SS', flag: '🇸🇸', continent: 'africa', subregion: { en: 'East-Central Africa', fr: 'Afrique centre-est', ar: 'شرق ووسط إفريقيا' }, name: { en: 'South Sudan', fr: 'Soudan du Sud', ar: 'جنوب السودان' }, capital: { en: 'Juba', fr: 'Juba', ar: 'جوبا' }, cities: ['Juba', 'Wau', 'Malakal'], monument: { en: 'Sudd Wetlands & Juba Nile Bridge', fr: 'Marais du Sudd & Nil Blanc', ar: 'منطقة السد وضفاف النيل الأبيض' }, monumentEra: 'Natural & Cultural', dish: { en: 'Kisra & Tamia', fr: 'Kisra & Tamia', ar: 'الكسرة والطعمية' }, currencyCode: 'SSP', currencySymbol: '£', currencyName: { en: 'South Sudanese Pound', fr: 'Livre sud-soudanaise', ar: 'جنيه جنوب السودان' } },
  { id: 'sudan', code: 'SD', flag: '🇸🇩', continent: 'africa', subregion: { en: 'Northeast Africa', fr: 'Afrique du Nord-Est', ar: 'شمال شرق إفريقيا' }, name: { en: 'Sudan', fr: 'Soudan', ar: 'السودان' }, capital: { en: 'Khartoum', fr: 'Khartoum', ar: 'الخرطوم' }, cities: ['Khartoum', 'Meroë', 'Port Sudan'], monument: { en: 'Pyramids of Meroë', fr: 'Pyramides de Méroé', ar: 'أهرامات مروي البجراوية' }, monumentEra: 'c. 300 BCE – 350 CE', dish: { en: 'Kisra, Ful & Agashe', fr: 'Kisra & Agashe soudanais', ar: 'الكسرة والفول والأقاشي السوداني' }, currencyCode: 'SDG', currencySymbol: 'ج.س', currencyName: { en: 'Sudanese Pound', fr: 'Livre soudanaise', ar: 'الجنيه السوداني' } },
  { id: 'togo', code: 'TG', flag: '🇹🇬', continent: 'africa', subregion: { en: 'West Africa', fr: 'Afrique de l’Ouest', ar: 'غرب إفريقيا' }, name: { en: 'Togo', fr: 'Togo', ar: 'توغو' }, capital: { en: 'Lomé', fr: 'Lomé', ar: 'لومي' }, cities: ['Lomé', 'Kpalimé', 'Kara'], monument: { en: 'Koutammakou Tower Houses', fr: 'Takienta du Koutammakou', ar: 'منازل كوتاماكو التراثية' }, monumentEra: 'UNESCO Heritage', dish: { en: 'Fufu & Gboma Dessi', fr: 'Fufu & Gboma Dessi', ar: 'فوفو مع صلصة السبانخ' }, currencyCode: 'XOF', currencySymbol: 'CFA', currencyName: { en: 'West African CFA Franc', fr: 'Franc CFA', ar: 'فرنك غرب إفريقيا' } },
  { id: 'uganda', code: 'UG', flag: '🇺🇬', continent: 'africa', subregion: { en: 'East Africa', fr: 'Afrique de l’Est', ar: 'شرق إفريقيا' }, name: { en: 'Uganda', fr: 'Ouganda', ar: 'أوغندا' }, capital: { en: 'Kampala', fr: 'Kampala', ar: 'كمبالا' }, cities: ['Kampala', 'Jinja', 'Entebbe'], monument: { en: 'Kasubi Royal Tombs', fr: 'Tombeaux des rois du Buganda à Kasubi', ar: 'أضرحة كاسوبي الملكية' }, monumentEra: '1882', dish: { en: 'Rolex & Matoke', fr: 'Rolex & Matoke', ar: 'رولكس أوغندا والماتوكي' }, currencyCode: 'UGX', currencySymbol: 'USh', currencyName: { en: 'Ugandan Shilling', fr: 'Shilling ougandais', ar: 'الشلن الأوغندي' } },
  { id: 'zambia', code: 'ZM', flag: '🇿🇲', continent: 'africa', subregion: { en: 'Southern Africa', fr: 'Afrique australe', ar: 'جنوب إفريقيا' }, name: { en: 'Zambia', fr: 'Zambie', ar: 'زامبيا' }, capital: { en: 'Lusaka', fr: 'Lusaka', ar: 'لوساكا' }, cities: ['Livingstone', 'Lusaka'], monument: { en: 'Victoria Falls (Mosi-oa-Tunya)', fr: 'Chutes Victoria', ar: 'شلالات فيكتوريا' }, monumentEra: 'Natural Wonder', dish: { en: 'Nshima & Bream Fish', fr: 'Nshima & Poisson grillé', ar: 'نشيما مع السمك المشوي' }, currencyCode: 'ZMW', currencySymbol: 'ZK', currencyName: { en: 'Zambian Kwacha', fr: 'Kwacha zambien', ar: 'الكواشا الزامبي' } },
  { id: 'zimbabwe', code: 'ZW', flag: '🇿🇼', continent: 'africa', subregion: { en: 'Southern Africa', fr: 'Afrique australe', ar: 'جنوب إفريقيا' }, name: { en: 'Zimbabwe', fr: 'Zimbabwe', ar: 'زيمبابوي' }, capital: { en: 'Harare', fr: 'Harare', ar: 'هراري' }, cities: ['Harare', 'Masvingo', 'Victoria Falls'], monument: { en: 'Great Zimbabwe Stone Ruins', fr: 'Ruines du Grand Zimbabwe', ar: 'آثار زيمبابوي العظمى' }, monumentEra: '11th–15th Century', dish: { en: 'Sadza & Nyama', fr: 'Sadza & Viande mijotée', ar: 'سادزا مع اليخنة' }, currencyCode: 'ZiG', currencySymbol: 'ZiG', currencyName: { en: 'Zimbabwe Gold', fr: 'Zimbabwe Gold', ar: 'عملة زيمبابوي' } },

  // Americas Highlights
  { id: 'usa', code: 'US', flag: '🇺🇸', continent: 'americas', subregion: { en: 'North America', fr: 'Amérique du Nord', ar: 'أمريكا الشمالية' }, name: { en: 'United States', fr: 'États-Unis', ar: 'الولايات المتحدة' }, capital: { en: 'Washington, D.C.', fr: 'Washington, D.C.', ar: 'واشنطن العاصمة' }, cities: ['New York', 'San Francisco', 'Washington, D.C.', 'New Orleans'], monument: { en: 'Statue of Liberty & Lincoln Memorial', fr: 'Statue de la Liberté & Lincoln Memorial', ar: 'تمثال الحرية ونصب لنكولن' }, monumentEra: '1886 & 1922', dish: { en: 'New Orleans Gumbo, BBQ & Apple Pie', fr: 'Gumbo, BBQ & Tarte aux pommes', ar: 'غومبو والباربكيو وفطيرة التفاح' }, currencyCode: 'USD', currencySymbol: '$', currencyName: { en: 'US Dollar', fr: 'Dollar américain', ar: 'الدولار الأمريكي' } },
  { id: 'canada', code: 'CA', flag: '🇨🇦', continent: 'americas', subregion: { en: 'North America', fr: 'Amérique du Nord', ar: 'أمريكا الشمالية' }, name: { en: 'Canada', fr: 'Canada', ar: 'كندا' }, capital: { en: 'Ottawa', fr: 'Ottawa', ar: 'أوتاوا' }, cities: ['Montréal', 'Québec City', 'Toronto', 'Vancouver'], monument: { en: 'Château Frontenac & Old Québec', fr: 'Château Frontenac & Vieux-Québec', ar: 'قصر فرونتيناك ومدينة كيبيك القديمة' }, monumentEra: '1608 / 1893', dish: { en: 'Poutine & Maple Syrup Tarts', fr: 'Poutine & Tartes à l’érable', ar: 'البوتين وفطائر شراب القيقب' }, currencyCode: 'CAD', currencySymbol: 'CA$', currencyName: { en: 'Canadian Dollar', fr: 'Dollar canadien', ar: 'الدولار الكندي' } },
  { id: 'mexico', code: 'MX', flag: '🇲🇽', continent: 'americas', subregion: { en: 'North America', fr: 'Amérique du Nord', ar: 'أمريكا الشمالية' }, name: { en: 'Mexico', fr: 'Mexique', ar: 'المكسيك' }, capital: { en: 'Mexico City', fr: 'Mexico', ar: 'مكسيكو سيتي' }, cities: ['Mexico City', 'Oaxaca', 'Cancún', 'Mérida'], monument: { en: 'Chichén Itzá & Teotihuacán', fr: 'Chichén Itzá & Teotihuacán', ar: 'أهرامات تشيتشن إيتزا وتيوتيهواكان' }, monumentEra: '600–1200 CE', dish: { en: 'Tacos al Pastor & Mole Poblano', fr: 'Tacos al Pastor & Mole', ar: 'تاكو آل باستور وصلصة المولي' }, currencyCode: 'MXN', currencySymbol: 'MX$', currencyName: { en: 'Mexican Peso', fr: 'Peso mexicain', ar: 'البيزو المكسيكي' } },
  { id: 'brazil', code: 'BR', flag: '🇧🇷', continent: 'americas', subregion: { en: 'South America', fr: 'Amérique du Sud', ar: 'أمريكا الجنوبية' }, name: { en: 'Brazil', fr: 'Brésil', ar: 'البرازيل' }, capital: { en: 'Brasília', fr: 'Brasília', ar: 'برازيليا' }, cities: ['Rio de Janeiro', 'Salvador', 'São Paulo'], monument: { en: 'Christ the Redeemer & Pelourinho', fr: 'Christ Rédempteur & Pelourinho', ar: 'تمثال المسيح الفادي وحي بيلورينيو' }, monumentEra: '1931 & 17th Century', dish: { en: 'Feijoada & Pão de Queijo', fr: 'Feijoada & Pão de Queijo', ar: 'الفيجوادا وخبز الجبن البرازيلي' }, currencyCode: 'BRL', currencySymbol: 'R$', currencyName: { en: 'Brazilian Real', fr: 'Réal brésilien', ar: 'الريال البرازيلي' } },
  { id: 'peru', code: 'PE', flag: '🇵🇪', continent: 'americas', subregion: { en: 'South America', fr: 'Amérique du Sud', ar: 'أمريكا الجنوبية' }, name: { en: 'Peru', fr: 'Pérou', ar: 'بيرو' }, capital: { en: 'Lima', fr: 'Lima', ar: 'ليما' }, cities: ['Cusco', 'Lima', 'Arequipa'], monument: { en: 'Machu Picchu Citadel', fr: 'Citadelle du Machu Picchu', ar: 'مدينة ماتشو بيتشو الأثرية' }, monumentEra: 'c. 1450 CE (Inca)', dish: { en: 'Ceviche & Lomo Saltado', fr: 'Ceviche & Lomo Saltado', ar: 'سيفيتشي البيرو ولومو سالتادو' }, currencyCode: 'PEN', currencySymbol: 'S/', currencyName: { en: 'Peruvian Sol', fr: 'Sol péruvien', ar: 'السول البيروفي' } },
  { id: 'argentina', code: 'AR', flag: '🇦🇷', continent: 'americas', subregion: { en: 'South America', fr: 'Amérique du Sud', ar: 'أمريكا الجنوبية' }, name: { en: 'Argentina', fr: 'Argentine', ar: 'الأرجنتين' }, capital: { en: 'Buenos Aires', fr: 'Buenos Aires', ar: 'بوينس آيرس' }, cities: ['Buenos Aires', 'Mendoza', 'Bariloche'], monument: { en: 'Teatro Colón & Recoleta', fr: 'Teatro Colón & Plaza de Mayo', ar: 'مسرح كولون وساحة مايو' }, monumentEra: '1908', dish: { en: 'Asado, Empanadas & Dulce de Leche', fr: 'Asado, Empanadas & Dulce de leche', ar: 'الأساذو والإمباناداس' }, currencyCode: 'ARS', currencySymbol: '$', currencyName: { en: 'Argentine Peso', fr: 'Peso argentin', ar: 'البيزو الأرجنتيني' } },
];

function cleanSudanEntry() {
  return EXTRA_ATLAS_ENTRIES.map((item) => {
    const cityName = item.cities[0] || item.capital.en;
    return buildCountry({
      id: item.id,
      code: item.code,
      flag: item.flag,
      continent: item.continent,
      subregion: item.subregion,
      name: item.name,
      capital: item.capital,
      cities: item.cities,
      monument: {
        en: item.monument.en,
        fr: item.monument.fr,
        ar: item.monument.ar,
        city: cityName,
        era: item.monumentEra,
        descEn: `${item.monument.en} is one of the defining historical landmarks of ${item.name.en}, located around ${cityName}.`,
        descFr: `${item.monument.fr} figure parmi les monuments historiques majeurs de ${item.name.fr}, près de ${cityName}.`,
        descAr: `يُعد ${item.monument.ar} من أبرز المعالم التاريخية والسياحية في ${item.name.ar}.`,
      },
      dish: {
        en: item.dish.en,
        fr: item.dish.fr,
        ar: item.dish.ar,
        descEn: `A signature traditional dish in ${item.name.en} enjoyed across family kitchens and local markets.`,
        descFr: `Une spécialité culinaire incontournable de ${item.name.fr} servie dans les tables traditionnelles.`,
        descAr: `أحد أشهر الأطباق التقليدية الأصيلة في ${item.name.ar} بنكهاته المحلية المميزة.`,
      },
      currency: {
        code: item.currencyCode,
        symbol: item.currencySymbol,
        nameEn: item.currencyName.en,
        nameFr: item.currencyName.fr,
        nameAr: item.currencyName.ar,
      },
    });
  });
}

export const ATLAS_COUNTRIES: CountryGuide[] = [
  ...EUROPE_SEEDS.map(buildCountry),
  ...AFRICA_SEEDS.map(buildCountry),
  ...cleanSudanEntry(),
];
