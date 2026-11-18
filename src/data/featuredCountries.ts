import { CountryGuide } from '../types/voyago';

export const VOYAGO_IMAGES = {
  hero: '/src/assets/images/voyago_hero_atlas_1795009327119.jpg',
  morocco: '/src/assets/images/morocco_koutoubia_marrakech_1795009326801.jpg',
  egypt: '/src/assets/images/egypt_giza_pyramids_1795009327243.jpg',
  algeria: '/src/assets/images/algeria_casbah_algiers_1795009327741.jpg',
  europe: '/src/assets/images/europe_historic_landmark_1795009328683.jpg',
  cuisine: '/src/assets/images/world_traditional_cuisine_1795009328787.jpg',
  eiffel: '/src/assets/images/monument_eiffel_tower_1795011004529.jpg',
  christRedeemer: '/src/assets/images/monument_christ_redeemer_1795011004709.jpg',
  statueLiberty: '/src/assets/images/monument_statue_liberty_1795011005909.jpg',
  buenosAires: '/src/assets/images/monument_buenos_aires_landmark_1795011006316.jpg',
  tajMahal: '/src/assets/images/monument_taj_mahal_1795011006583.jpg',
  sydneyOpera: '/src/assets/images/monument_sydney_opera_1795011006714.jpg',
  italy: '/src/assets/images/italy_colosseum_rome_1795011591538.jpg',
  spain: '/src/assets/images/spain_alhambra_granada_1795011591944.jpg',
  japan: '/src/assets/images/japan_kyoto_pagoda_1795011592729.jpg',
  china: '/src/assets/images/china_great_wall_1795011593692.jpg',
  tanzania: '/src/assets/images/tanzania_zanzibar_bay_1795011593872.jpg',
  ethiopia: '/src/assets/images/ethiopia_lalibela_church_1795011595053.jpg',
  greece: '/src/assets/images/greece_acropolis_parthenon_1795011594926.jpg',
  germany: '/src/assets/images/germany_brandenburg_gate_1795011594849.jpg',
  croatia: '/src/assets/images/croatia_dubrovnik_bay_1795011596285.jpg',
  czechia: '/src/assets/images/czechia_prague_castle_1795011595828.jpg',
  belgium: '/src/assets/images/belgium_grand_place_1795011597451.jpg',
  belgiumAtomium: '/src/assets/images/belgium_atomium_brussels_1795015876339.jpg',
  ireland: '/src/assets/images/ireland_cashel_fortress_1795011597287.jpg',
  nordic: '/src/assets/images/nordic_nyhavn_kronborg_1795011598523.jpg',
  germanyCastle: '/src/assets/images/germany_neuschwanstein_castle_1795015876075.jpg',
};

export const FEATURED_COUNTRIES: CountryGuide[] = [
  {
    id: 'morocco',
    code: 'MA',
    flag: '🇲🇦',
    continent: 'africa',
    featured: true,
    subregion: { en: 'North Africa', fr: 'Afrique du Nord', ar: 'شمال إفريقيا' },
    name: { en: 'Morocco', fr: 'Maroc', ar: 'المغرب' },
    capital: { en: 'Rabat', fr: 'Rabat', ar: 'الرباط' },
    bestSeason: {
      en: 'March–May & September–November',
      fr: 'Mars–Mai & Septembre–Novembre',
      ar: 'مارس–ماي وسبتمبر–نوفمبر',
    },
    summary: {
      en: 'Imperial medinas, snow-capped Atlas peaks, Saharan dunes, and Atlantic fortresses woven together by warm hospitality and spice-rich cuisine.',
      fr: 'Médinas impériales, sommets de l’Atlas, dunes du Sahara et citadelles atlantiques portés par une hospitalité légendaire et une gastronomie parfumée.',
      ar: 'مدن إمبراطورية عتيقة، جبال الأطلس الشامخة، كثبان الصحراء، وحصون أطلسية تجمع بين كرم الضيافة والمطبخ المغربي الأصيل.',
    },
    wifiTips: {
      en: 'Fast 4G/5G SIM cards (Maroc Telecom, Orange, Inwi) are sold at airport arrivals. Riads and cafés offer free Wi-Fi.',
      fr: 'Cartes SIM 4G/5G rapides (Maroc Telecom, Orange, Inwi) disponibles dès l’aéroport. Wi-Fi gratuit dans la plupart des riads et cafés.',
      ar: 'شرائح 4G/5G السريعة (اتصالات المغرب، أورنج، إنوي) متوفرة بالمطارات، وتوفر معظم الرياضات والمقاهي Wi-Fi مجاني.',
    },
    heroImage: VOYAGO_IMAGES.morocco,
    mapsQuery: 'Morocco tourist attractions',
    currency: {
      code: 'MAD',
      symbol: 'DH',
      name: { en: 'Moroccan Dirham', fr: 'Dirham marocain', ar: 'الدرهم المغربي' },
      tips: {
        en: 'Cash (MAD) is essential in medina souks and taxis. Cards work in hotels and modern restaurants; tip 10% in cafés and restaurants.',
        fr: 'L’espèce (MAD) reste indispensable dans les souks et taxis. Cartes acceptées dans les hôtels et grands restaurants ; pourboire d’environ 10 %.',
        ar: 'الدفع نقداً بالدرهم ضروري في الأسواق التقليدية وسيارات الأجرة، وتُقبل البطاقات في الفنادق والمطاعم الكبرى مع بقشيش نحو 10%.',
      },
    },
    cities: [
      {
        name: { en: 'Marrakech', fr: 'Marrakech', ar: 'مراكش' },
        highlight: {
          en: 'Red-walled medina, Jemaa el-Fnaa square, Majorelle Garden, and Atlas Mountain gateway.',
          fr: 'Médina ocre, place Jemaa el-Fna, jardin Majorelle et porte du Haut Atlas.',
          ar: 'المدينة الحمراء وساحة جامع الفنا وحدائق ماجوريل وبوابة جبال الأطلس.',
        },
        mapsQuery: 'Marrakech Morocco',
      },
      {
        name: { en: 'Fes', fr: 'Fès', ar: 'فاس' },
        highlight: {
          en: 'Spiritual capital home to the world’s oldest university, ornate madrasas, and ancient tanneries.',
          fr: 'Capitale spirituelle abritant la plus ancienne université du monde, médersas et tanneries.',
          ar: 'العاصمة العلمية التي تضم أقدم جامعة في العالم والمدارس العتيقة ودور الدباغة.',
        },
        mapsQuery: 'Fes Morocco',
      },
      {
        name: { en: 'Chefchaouen & Casablanca', fr: 'Chefchaouen & Casablanca', ar: 'شفشاون والدار البيضاء' },
        highlight: {
          en: 'Blue-washed mountain alleys in the Rif and the monumental oceanfront Hassan II Mosque.',
          fr: 'Ruelles bleues du Rif et monumentale mosquée Hassan II face à l’Atlantique.',
          ar: 'الأزقة الزرقاء في جبال الريف ومسجد الحسن الثاني المطل على المحيط الأطلسي.',
        },
        mapsQuery: 'Chefchaouen Morocco',
      },
    ],
    monuments: [
      {
        id: 'ma-koutoubia',
        name: { en: 'Koutoubia Mosque', fr: 'Mosquée Koutoubia', ar: 'جامع الكتبية' },
        city: 'Marrakech',
        era: '12th Century (1147–1199)',
        description: {
          en: 'Masterpiece of Almohad architecture whose 77-meter sandstone minaret inspired Seville’s Giralda and Rabat’s Hassan Tower.',
          fr: 'Chef-d’œuvre almohade dont le minaret de 77 mètres inspira la Giralda de Séville et la tour Hassan.',
          ar: 'تحفة معمارية موحدية يبلغ ارتفاع صومعتها 77 متراً وألهمت صومعة حسان بالرباط والخيرالدا بإشبيلية.',
        },
        image: VOYAGO_IMAGES.morocco,
        mapsQuery: 'Koutoubia Mosque Marrakech',
      },
      {
        id: 'ma-hassan-ii',
        name: { en: 'Hassan II Mosque', fr: 'Mosquée Hassan II', ar: 'مسجد الحسن الثاني' },
        city: 'Casablanca',
        era: '1993',
        description: {
          en: 'Built partially over the Atlantic Ocean with a 210-meter minaret, hand-carved cedarwood ceilings, and intricate zellige tilework.',
          fr: 'Érigée partiellement sur l’océan Atlantique avec un minaret de 210 mètres, cèdre sculpté et zelliges raffinés.',
          ar: 'صرح معماري مطل على المحيط الأطلسي بمئذنة ارتفاعها 210 أمتار وزخارف الزليج وخشب الأرز المنحوت.',
        },
        image: VOYAGO_IMAGES.morocco,
        mapsQuery: 'Hassan II Mosque Casablanca',
      },
      {
        id: 'ma-qarawiyyin',
        name: { en: 'Al-Qarawiyyin & Bou Inania', fr: 'Al Quaraouiyine & Bou Inania', ar: 'جامع القرويين والمدرسة البوعنانية' },
        city: 'Fes',
        era: '859 CE & 1350 CE',
        description: {
          en: 'UNESCO-recognized center of medieval scholarship with Marinid stucco carvings and peaceful marble courtyards.',
          fr: 'Haut lieu historique du savoir classé à l’UNESCO, célèbre pour ses stucs mérinides et cours de marbre.',
          ar: 'منارة علمية تاريخية مصنفة في اليونسكو تتميز بنقوش الجبس المريني والزخارف الخشبية.',
        },
        image: VOYAGO_IMAGES.morocco,
        mapsQuery: 'Al Qarawiyyin Mosque Fes',
      },
    ],
    dishes: [
      {
        name: { en: 'Lamb & Prune Tagine', fr: 'Tajine d’agneau aux pruneaux', ar: 'طاجين اللحم بالبرقوق' },
        category: { en: 'Slow-cooked Main', fr: 'Plat mijoté', ar: 'طبق رئيسي' },
        description: {
          en: 'Tender meat slow-simmered in a conical clay pot with saffron, caramelized prunes, toasted almonds, and sesame.',
          fr: 'Viande fondante mijotée dans un plat en terre cuite avec safran, pruneaux confits et amandes grillées.',
          ar: 'لحم مطهو ببطء في طاجين الفخار مع الزعفران والبرقوق المعسل واللوز المحمص.',
        },
      },
      {
        name: { en: 'Royal Friday Couscous', fr: 'Couscous aux sept légumes', ar: 'الكسكس المغربي بالسبع خضار' },
        category: { en: 'Heritage Dish', fr: 'Plat traditionnel', ar: 'طبق تقليدي' },
        description: {
          en: 'Hand-rolled semolina steamed over spiced broth with chickpeas, squash, carrots, and caramelized onions (tfaya).',
          fr: 'Semoule roulée à la main cuite à la vapeur sur un bouillon parfumé aux sept légumes et pois chiches.',
          ar: 'سميد مفتول يدوياً مطهو على البخار مع مرق متبل وسبع خضار وحمص وتفاية.',
        },
      },
      {
        name: { en: 'Pastilla & Mint Tea', fr: 'Pastilla & Thé à la menthe', ar: 'البسطيلة والشاي بالنعناع' },
        category: { en: 'Pastry & Hospitality', fr: 'Feuilleté & Boisson', ar: 'مملحات وضيافة' },
        description: {
          en: 'Crisp warqa pastry layered with spiced poultry or seafood and cinnamon, paired with freshly poured Moroccan mint tea.',
          fr: 'Feuilleté croustillant sucré-salé aux amandes et cannelle, accompagné du traditionnel thé vert à la menthe.',
          ar: 'ورقة مقرمشة محشوة بالدجاج أو فواكه البحر واللوز والقرفة تقدم مع الشاي المغربي بالنعناع.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello / Peace', fr: 'Bonjour', ar: 'مرحباً / السلام عليكم' }, local: 'Salam Alaikum', pronunciation: 'Sa-lam a-lay-kum' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Shukran', pronunciation: 'Shoo-kran' },
      { label: { en: 'How much?', fr: 'Combien ça coûte ?', ar: 'بكم هذا؟' }, local: 'Bshhal hada?', pronunciation: 'Bsh-hal ha-da' },
    ],
  },
  {
    id: 'egypt',
    code: 'EG',
    flag: '🇪🇬',
    continent: 'africa',
    featured: true,
    subregion: { en: 'North Africa', fr: 'Afrique du Nord', ar: 'شمال إفريقيا' },
    name: { en: 'Egypt', fr: 'Égypte', ar: 'مصر' },
    capital: { en: 'Cairo', fr: 'Le Caire', ar: 'القاهرة' },
    bestSeason: {
      en: 'October–April',
      fr: 'Octobre–Avril',
      ar: 'أكتوبر–أبريل',
    },
    summary: {
      en: 'Five millennia of pharaonic pyramids, Nile temple corridors at Luxor and Aswan, vibrant Cairo bazaars, and Red Sea coral reefs.',
      fr: 'Cinq millénaires de pyramides pharaoniques, temples du Nil à Louxor et Assouan, bazars animés du Caire et récifs de la mer Rouge.',
      ar: 'خمسة آلاف عام من الحضارة الفرعونية، أهرامات الجيزة، معابد الأقصر وأسوان على النيل، وأسواق القاهرة العريقة.',
    },
    wifiTips: {
      en: 'Vodafone Egypt, Orange, and Etisalat offer affordable tourist data SIMs at Cairo Airport. Hotels provide steady Wi-Fi.',
      fr: 'Vodafone Egypt, Orange et Etisalat vendent des cartes SIM touristiques à l’aéroport du Caire.',
      ar: 'توفر فودافون وأورنج واتصالات باقات سياحية بأسعار مناسبة في مطار القاهرة، كما يتوفر Wi-Fi في الفنادق.',
    },
    heroImage: VOYAGO_IMAGES.egypt,
    mapsQuery: 'Egypt landmarks pyramids',
    currency: {
      code: 'EGP',
      symbol: 'E£',
      name: { en: 'Egyptian Pound', fr: 'Livre égyptienne', ar: 'الجنيه المصري' },
      tips: {
        en: 'Monument ticket booths often require debit/credit cards, while local bazaars, street food, and felucca rides use EGP cash.',
        fr: 'Les billetteries des sites exigent souvent la carte bancaire ; l’espèce en EGP est utile pour les souks et transports.',
        ar: 'تذاكر المعالم الأثرية تُدفع غالباً بالبطاقة البنكية، بينما يُستخدم الجنيه المصري نقداً في الأسواق والمواصلات.',
      },
    },
    cities: [
      {
        name: { en: 'Cairo & Giza', fr: 'Le Caire & Gizeh', ar: 'القاهرة والجيزة' },
        highlight: {
          en: 'Pyramids plateau, Grand Egyptian Museum, Khan el-Khalili bazaar, and Nile feluccas.',
          fr: 'Plateau des Pyramides, Grand Musée égyptien, souk Khan el-Khalili et felouques sur le Nil.',
          ar: 'هضبة الأهرامات، المتحف المصري الكبير، خان الخليلي، ومراكب النيل.',
        },
        mapsQuery: 'Cairo and Giza Egypt',
      },
      {
        name: { en: 'Luxor', fr: 'Louxor', ar: 'الأقصر' },
        highlight: {
          en: 'World’s greatest open-air museum: Karnak Temple, Luxor Temple, and Valley of the Kings.',
          fr: 'Plus grand musée à ciel ouvert : temples de Karnak et Louxor, Vallée des Rois.',
          ar: 'أكبر متحف مفتوح في العالم: معبد الكرنك، معبد الأقصر، ووادي الملوك.',
        },
        mapsQuery: 'Luxor Egypt',
      },
      {
        name: { en: 'Aswan & Alexandria', fr: 'Assouan & Alexandrie', ar: 'أسوان والإسكندرية' },
        highlight: {
          en: 'Nubian Nile islands, Philae Temple, and the Mediterranean Library of Alexandria.',
          fr: 'Îles nubiennes du Nil, temple de Philae et grande Bibliothèque d’Alexandrie.',
          ar: 'الجزر النوبية ومعبد فيلة ومكتبة الإسكندرية على البحر المتوسط.',
        },
        mapsQuery: 'Aswan Egypt',
      },
    ],
    monuments: [
      {
        id: 'eg-giza',
        name: { en: 'Great Pyramids of Giza & Sphinx', fr: 'Pyramides de Gizeh & Sphinx', ar: 'أهرامات الجيزة وأبو الهول' },
        city: 'Giza',
        era: 'c. 2560 BCE',
        description: {
          en: 'The last surviving Wonder of the Ancient World, crowned by Khufu’s Great Pyramid and the limestone Sphinx.',
          fr: 'Dernière merveille du monde antique encore debout, dominée par la grande pyramide de Khéops et le Sphinx.',
          ar: 'العجيبة الوحيدة الباقية من عجائب الدنيا السبع القديمة، تضم هرم خوفو الأكبر وتمثال أبو الهول.',
        },
        image: VOYAGO_IMAGES.egypt,
        mapsQuery: 'Great Pyramid of Giza Egypt',
      },
      {
        id: 'eg-karnak',
        name: { en: 'Karnak Temple Complex', fr: 'Temple de Karnak', ar: 'معبد الكرنك' },
        city: 'Luxor',
        era: 'c. 2055 BCE – 100 CE',
        description: {
          en: 'Vast sacred sanctuary featuring 134 towering sandstone columns in the Hypostyle Hall and Avenue of Sphinxes.',
          fr: 'Vaste sanctuaire célèbre pour sa salle hypostyle aux 134 colonnes monumentales et l’allée des sphinx.',
          ar: 'مجمع معابد ضخم يضم بهو الأعمدة الشهير بـ 134 عموداً منحوتاً وطريق الكباش.',
        },
        image: VOYAGO_IMAGES.egypt,
        mapsQuery: 'Karnak Temple Luxor Egypt',
      },
      {
        id: 'eg-abu-simbel',
        name: { en: 'Abu Simbel Temples', fr: 'Temples d’Abou Simbel', ar: 'معبد أبو سمبل' },
        city: 'Aswan',
        era: 'c. 1264 BCE',
        description: {
          en: 'Colossal rock-cut statues of Pharaoh Ramesses II overlooking Lake Nasser.',
          fr: 'Statues colossales taillées dans la roche du pharaon Ramsès II surplombant le lac Nasser.',
          ar: 'تماثيل ضخمة منحوتة في الجبل للملك رمسيس الثاني مطلة على بحيرة ناصر.',
        },
        image: VOYAGO_IMAGES.egypt,
        mapsQuery: 'Abu Simbel Temples Egypt',
      },
    ],
    dishes: [
      {
        name: { en: 'Koshari', fr: 'Koshari', ar: 'الكشري المصري' },
        category: { en: 'National Comfort Dish', fr: 'Plat national', ar: 'الطبق الشعبي الأول' },
        description: {
          en: 'Hearty layers of rice, lentils, macaroni, crispy fried onions, chickpeas, and spiced tomato-garlic vinegar sauce.',
          fr: 'Mélange généreux de riz, lentilles, pâtes, oignons frits croustillants et sauce tomate épicée à l’ail.',
          ar: 'طبق غني من الأرز والعدس والمكرونة والحمص والبصل المقرمش مع صلصة الطماطم والدقة.',
        },
      },
      {
        name: { en: 'Ful Medames & Taameya', fr: 'Ful Medames & Taameya', ar: 'الفول المدمس والطعمية' },
        category: { en: 'Egyptian Breakfast', fr: 'Petit-déjeuner', ar: 'فطور مصري' },
        description: {
          en: 'Slow-simmered fava beans dressed in olive oil, cumin, and lemon served alongside herb-green fava falafel.',
          fr: 'Fèves mijotées à l’huile d’olive et citron accompagnées de falafels verts aux herbes fraîches.',
          ar: 'فول مدمس بالزيت والكمون والليمون يقدم مع الطعمية الخضراء المقرمشة والخبز البلدي.',
        },
      },
      {
        name: { en: 'Molokhia & Om Ali', fr: 'Molokhia & Om Ali', ar: 'الملوخية وأم علي' },
        category: { en: 'Classic & Dessert', fr: 'Classique & Dessert', ar: 'أطباق وحلويات' },
        description: {
          en: 'Fragrant garlic-coriander jute leaf stew followed by warm baked puff pastry soaked in milk, pistachio, and raisins.',
          fr: 'Velouté traditionnel de corète potagère à l’ail suivi d’un gratin chaud feuilleté au lait et pistaches.',
          ar: 'ملوخية مطهوة بالتقلية والثوم، تليها حلوى أم علي الساخنة بالمكسرات والقشطة.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'أهلاً وسهلاً' }, local: 'Ahlan wa sahlan', pronunciation: 'Ah-lan wa sah-lan' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً جزيلاً' }, local: 'Shukran', pronunciation: 'Shoo-kran' },
      { label: { en: 'How much?', fr: 'Combien ?', ar: 'بكام ده؟' }, local: 'Bikam da?', pronunciation: 'Bi-kam da' },
    ],
  },
  {
    id: 'algeria',
    code: 'DZ',
    flag: '🇩🇿',
    continent: 'africa',
    featured: true,
    subregion: { en: 'North Africa', fr: 'Afrique du Nord', ar: 'شمال إفريقيا' },
    name: { en: 'Algeria', fr: 'Algérie', ar: 'الجزائر' },
    capital: { en: 'Algiers', fr: 'Alger', ar: 'الجزائر العاصمة' },
    bestSeason: {
      en: 'March–May & September–November',
      fr: 'Mars–Mai & Septembre–Novembre',
      ar: 'مارس–ماي وسبتمبر–نوفمبر',
    },
    summary: {
      en: 'Whitewashed Mediterranean bays, Roman ruins of Timgad and Tipaza, cliff-bridged Constantine, and prehistoric Saharan rock art at Tassili.',
      fr: 'Baies méditerranéennes blanches, ruines romaines de Timgad et Tipaza, ponts vertigineux de Constantine et gravures rupestres du Tassili.',
      ar: 'خلجان متوسطية بيضاء، آثار تيمقاد وتيبازة الرومانية، جسور قسنطينة المعلقة، وكنوز الطاسيلي الصحراوية.',
    },
    wifiTips: {
      en: 'Mobilis, Djezzy, and Ooredoo 4G SIM cards are inexpensive and reliable across coastal cities; hotel Wi-Fi is widely available.',
      fr: 'Les cartes SIM 4G Mobilis, Djezzy et Ooredoo offrent une bonne couverture dans les grandes villes.',
      ar: 'شرائح موبيليس وجيزي وأوريدو توفر تغطية 4G جيدة في المدن الكبرى، ويتوفر Wi-Fi في الفنادق والمقاهي.',
    },
    heroImage: VOYAGO_IMAGES.algeria,
    mapsQuery: 'Algeria tourist landmarks',
    currency: {
      code: 'DZD',
      symbol: 'DA',
      name: { en: 'Algerian Dinar', fr: 'Dinar algérien', ar: 'الدينار الجزائري' },
      tips: {
        en: 'Cash (DZD) is the primary payment method across markets, restaurants, and local transport. Exchange only at authorized banks/counters.',
        fr: 'L’espèce (DZD) reste la norme dans les commerces et restaurants. Changez vos devises dans les guichets officiels.',
        ar: 'الدفع نقداً بالدينار الجزائري هو الأكثر استخداماً في الأسواق والمطاعم، ويُفضل صرف العملات في البنوك المعتمدة.',
      },
    },
    cities: [
      {
        name: { en: 'Algiers', fr: 'Alger', ar: 'الجزائر العاصمة' },
        highlight: {
          en: 'UNESCO Casbah labyrinth, Martyrs’ Memorial, Botanical Garden Hamma, and seafront promenades.',
          fr: 'Casbah classée à l’UNESCO, Mémorial du Martyr, Jardin d’Essai du Hamma et corniche.',
          ar: 'قصبة الجزائر العتيقة، مقام الشهيد، حديقة التجارب بالحامة، والواجهة البحرية.',
        },
        mapsQuery: 'Algiers Algeria',
      },
      {
        name: { en: 'Constantine', fr: 'Constantine', ar: 'قسنطينة' },
        highlight: {
          en: 'Dramatic City of Bridges suspended over the deep Rhumel Gorge and Bey’s Palace.',
          fr: 'Cité des Ponts Suspendus perchée au-dessus des gorges du Rhumel et Palais du Bey.',
          ar: 'مدينة الجسور المعلقة الشاهقة فوق أخدود الرمال وقصر أحمد باي.',
        },
        mapsQuery: 'Constantine Algeria',
      },
      {
        name: { en: 'Oran & Tamanrasset', fr: 'Oran & Tamanrasset', ar: 'وهران وتمنراست' },
        highlight: {
          en: 'Santa Cruz fortress above Oran bay and Hoggar / Tassili n’Ajjer desert wonders.',
          fr: 'Fort de Santa Cruz à Oran et paysages lunaires du Hoggar et du Tassili n’Ajjer.',
          ar: 'قلعة سانتا كروز في وهران وقمم الهقار والطاسيلي ناجر في الصحراء الكبرى.',
        },
        mapsQuery: 'Oran Algeria',
      },
    ],
    monuments: [
      {
        id: 'dz-casbah',
        name: { en: 'Casbah of Algiers', fr: 'Casbah d’Alger', ar: 'قصبة الجزائر' },
        city: 'Algiers',
        era: '16th–18th Century',
        description: {
          en: 'Steep stepped alleys, Ottoman palaces, and Moorish mosques cascading down to the Mediterranean harbor.',
          fr: 'Dédale escarpé de ruelles, palais ottomans et mosquées historiques surplombant le port d’Alger.',
          ar: 'حي تاريخي مصنف في اليونسكو يضم قصوراً عثمانية وأزقة متدرجة تطل على خليج الجزائر.',
        },
        image: VOYAGO_IMAGES.algeria,
        mapsQuery: 'Casbah of Algiers Algeria',
      },
      {
        id: 'dz-timgad',
        name: { en: 'Roman City of Timgad', fr: 'Cité romaine de Timgad', ar: 'مدينة تيمقاد الأثرية' },
        city: 'Batna',
        era: '100 CE (Emperor Trajan)',
        description: {
          en: 'Remarkably preserved Roman grid city with Trajan’s Arch, marble theater, and ancient library.',
          fr: 'Cité romaine admirablement préservée avec l’arc de Trajan, théâtre et thermes antiques.',
          ar: 'مدينة رومانية متكاملة التخطيط تضم قوس تراجان والمسرح الروماني والمكتبة القديمة.',
        },
        image: VOYAGO_IMAGES.algeria,
        mapsQuery: 'Timgad Roman Ruins Algeria',
      },
      {
        id: 'dz-constantine-bridge',
        name: { en: 'Sidi M’Cid Suspension Bridge', fr: 'Pont suspendu de Sidi M’Cid', ar: 'جسر سيدي مسيد المعلق' },
        city: 'Constantine',
        era: '1912',
        description: {
          en: 'Iconic 175-meter-high suspension bridge linking the ancient rock of Constantine across the Rhumel canyon.',
          fr: 'Pont suspendu emblématique culminant à 175 mètres au-dessus des gorges du Rhumel.',
          ar: 'جسر معلق شهير يرتفع 175 متراً فوق وادي الرمال ويربط ضفتي مدينة قسنطينة.',
        },
        image: VOYAGO_IMAGES.algeria,
        mapsQuery: 'Sidi M Cid Bridge Constantine Algeria',
      },
    ],
    dishes: [
      {
        name: { en: 'Algerian Couscous & Rechta', fr: 'Couscous algérien & Rechta', ar: 'الكسكس الجزائري والرشتة' },
        category: { en: 'Festive Staple', fr: 'Plat emblématique', ar: 'طبق أصيل' },
        description: {
          en: 'Delicate steamed noodles or semolina served with cinnamon-scented white broth, turnips, zucchini, and tender lamb or chicken.',
          fr: 'Fines pâtes artisanales ou semoule servies avec une sauce blanche parfumée à la cannelle, navets et pois chiches.',
          ar: 'رشتة أو كسكس مطهو على البخار بمرق أبيض معطر بالقرفة واللفت والحمص واللحم.',
        },
      },
      {
        name: { en: 'Chorba Frik & Bourek', fr: 'Chorba Frik & Bourek', ar: 'شربة فريك والبوراك' },
        category: { en: 'Soup & Starter', fr: 'Soupe & Entrée', ar: 'حساء ومقبلات' },
        description: {
          en: 'Smoky cracked green wheat soup with tomatoes and coriander paired with crisp stuffed filo rolls.',
          fr: 'Velouté parfumé au blé vert concassé, tomates et coriandre, servi avec des briks croustillantes.',
          ar: 'حساء الفريك الأخضر الغني بالطماطم والكزبرة مع أصابع البوراك المقرمشة.',
        },
      },
      {
        name: { en: 'Chakhchoukha & Makroudh', fr: 'Chakhchoukha & Makroudh', ar: 'الشخشوخة والمقروط' },
        category: { en: 'Heritage & Sweet', fr: 'Terroir & Pâtisserie', ar: 'تراث وحلويات' },
        description: {
          en: 'Torn flatbread soaked in rich spiced stew from eastern Algeria, followed by semolina pastries filled with dates and honey.',
          fr: 'Mets généreux de galette émiettée en sauce épicée, suivi de pâtisseries de semoule aux dattes et au miel.',
          ar: 'رقائق عجين تقليدية بمرق حار غني، تُختتم بحلوى المقروط المحشوة بالتمر والعسل.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'السلام عليكم' }, local: 'Salam Alaikum', pronunciation: 'Sa-lam a-lay-kum' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'يعطيك الصحة / شكراً' }, local: 'Yaatik essaha', pronunciation: 'Yaa-tik es-sa-ha' },
      { label: { en: 'How much?', fr: 'Combien ?', ar: 'بشحال؟' }, local: 'Bshhal?', pronunciation: 'Bsh-hal' },
    ],
  },
  {
    id: 'france',
    code: 'FR',
    flag: '🇫🇷',
    continent: 'europe',
    featured: true,
    subregion: { en: 'Western Europe', fr: 'Europe de l’Ouest', ar: 'أوروبا الغربية' },
    name: { en: 'France', fr: 'France', ar: 'فرنسا' },
    capital: { en: 'Paris', fr: 'Paris', ar: 'باريس' },
    bestSeason: {
      en: 'April–June & September–October',
      fr: 'Avril–Juin & Septembre–Octobre',
      ar: 'أبريل–يونيو وسبتمبر–أكتوبر',
    },
    summary: {
      en: 'Iconic boulevards, Loire Valley châteaux, Gothic cathedrals, Provençal lavender hills, and world-renowned boulangeries and bistros.',
      fr: 'Grands boulevards parisiens, châteaux de la Loire, cathédrales gothiques, Provence et gastronomie reconnue dans le monde entier.',
      ar: 'جادات باريس العريقة، قصور وادي اللوار، الكاتدرائيات القوطية، ومطبخ فرنسي عالمي الشهرة.',
    },
    wifiTips: {
      en: 'EU roaming works across France; Orange, Bouygues, and Free offer eSIMs. Train stations, museums, and cafés provide free Wi-Fi.',
      fr: 'Le roaming européen s’applique partout ; eSIM Orange ou Free disponibles. Wi-Fi gratuit dans les gares, musées et cafés.',
      ar: 'يتوفر تجوال أوروبا وشرائح Orange وFree بسهولة، مع خدمة Wi-Fi مجانية في المحطات والمتاحف والمقاهي.',
    },
    heroImage: VOYAGO_IMAGES.eiffel,
    mapsQuery: 'France landmarks Paris',
    currency: {
      code: 'EUR',
      symbol: '€',
      name: { en: 'Euro', fr: 'Euro', ar: 'اليورو' },
      tips: {
        en: 'Contactless Visa/Mastercard is accepted almost everywhere. Service charge is included in restaurant bills by law.',
        fr: 'Le paiement sans contact par carte est quasi universel. Le service est inclus dans les prix des restaurants.',
        ar: 'الدفع بالبطاقات واللمس مقبول في كل مكان تقريباً، ورسوم الخدمة مشمولة في فواتير المطاعم.',
      },
    },
    cities: [
      {
        name: { en: 'Paris', fr: 'Paris', ar: 'باريس' },
        highlight: {
          en: 'Eiffel Tower, Louvre Museum, Notre-Dame, Montmartre, and Seine river walks.',
          fr: 'Tour Eiffel, musée du Louvre, Notre-Dame, Montmartre et berges de la Seine.',
          ar: 'برج إيفل، متحف اللوفر، نوتردام، مونمارتر، وضفاف نهر السين.',
        },
        mapsQuery: 'Paris France',
      },
      {
        name: { en: 'Lyon & Nice', fr: 'Lyon & Nice', ar: 'ليون ونيس' },
        highlight: {
          en: 'France’s gastronomic capital and the sun-drenched French Riviera promenade.',
          fr: 'Capitale de la gastronomie et promenade ensoleillée de la Côte d’Azur.',
          ar: 'عاصمة فن الطبخ الفرنسي وساحل الريفييرا المشمس في نيس.',
        },
        mapsQuery: 'Nice France',
      },
    ],
    monuments: [
      {
        id: 'fr-eiffel',
        name: { en: 'Eiffel Tower & Louvre Palace', fr: 'Tour Eiffel & Palais du Louvre', ar: 'برج إيفل وقصر اللوفر' },
        city: 'Paris',
        era: '1889 & 1190–1793',
        description: {
          en: 'Built for the 1889 World’s Fair by Gustave Eiffel, this 330-meter wrought-iron lattice tower stands beside the historic Louvre Palace.',
          fr: 'Érigée par Gustave Eiffel pour l’Exposition universelle de 1889, la tour de 330 mètres domine Paris près du Palais du Louvre.',
          ar: 'بناه غوستاف إيفل لمعرض باريس العالمي سنة 1889 بارتفاع 330 متراً، ويُعد أبرز معلم تاريخي في فرنسا.',
        },
        image: VOYAGO_IMAGES.eiffel,
        mapsQuery: 'Eiffel Tower Paris France',
      },
      {
        id: 'fr-mont-saint-michel',
        name: { en: 'Mont-Saint-Michel', fr: 'Mont-Saint-Michel', ar: 'جبل القديس ميشيل' },
        city: 'Normandy',
        era: '8th–16th Century',
        description: {
          en: 'Medieval abbey perched atop a tidal island rising dramatically from Normandy’s sands.',
          fr: 'Abbaye médiévale spectaculaire dressée sur un îlot rocheux au cœur des grandes marées normandes.',
          ar: 'دير قوطي تاريخي مبني فوق جزيرة صخرية تحيط بها مياه المد والجزر في نورماندي.',
        },
        image: VOYAGO_IMAGES.europe,
        mapsQuery: 'Mont Saint Michel France',
      },
    ],
    dishes: [
      {
        name: { en: 'Croissant, Baguette & Crêpes', fr: 'Croissant, Baguette & Crêpes', ar: 'الكرواسون والباغيت والكريب' },
        category: { en: 'Artisan Bakery', fr: 'Boulangerie', ar: 'مخبوزات' },
        description: {
          en: 'Flaky cultured-butter pastries every morning and thin Brittany crêpes cooked to order.',
          fr: 'Viennoiseries pur beurre feuilletées chaque matin et crêpes bretonnes préparées minute.',
          ar: 'مخبوزات فرنسية بالزبدة الطبيعية وفطائر الكريب الطازجة.',
        },
      },
      {
        name: { en: 'Boeuf Bourguignon & Ratatouille', fr: 'Bœuf bourguignon & Ratatouille', ar: 'بيف بورغينيون وراتاتوي' },
        category: { en: 'Regional Bistro', fr: 'Bistrot traditionnel', ar: 'أطباق رئيسية' },
        description: {
          en: 'Burgundy braised stew and sun-ripened Provençal vegetables simmered with thyme and olive oil.',
          fr: 'Mijoté bourguignon fondant et légumes du soleil provençaux cuits à l’huile d’olive et au thym.',
          ar: 'أطباق فرنسية مطهوة ببطء مع الأعشاب العطرية والخضروات المتوسطية.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Bonjour', pronunciation: 'Bon-zhoor' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Merci beaucoup', pronunciation: 'Mehr-see bo-koo' },
      { label: { en: 'Excuse me', fr: 'Excusez-moi', ar: 'عفواً' }, local: 'Excusez-moi', pronunciation: 'Ex-kyoo-zay mwa' },
    ],
  },
  {
    id: 'italy',
    code: 'IT',
    flag: '🇮🇹',
    continent: 'europe',
    featured: true,
    subregion: { en: 'Southern Europe', fr: 'Europe du Sud', ar: 'جنوب أوروبا' },
    name: { en: 'Italy', fr: 'Italie', ar: 'إيطاليا' },
    capital: { en: 'Rome', fr: 'Rome', ar: 'روما' },
    bestSeason: {
      en: 'April–June & September–October',
      fr: 'Avril–Juin & Septembre–Octobre',
      ar: 'أبريل–يونيو وسبتمبر–أكتوبر',
    },
    summary: {
      en: 'Living open-air antiquity in Rome, Renaissance art in Florence, Venetian canals, Amalfi cliffs, and regional pasta, pizza, and espresso.',
      fr: 'Antiquité vivante à Rome, Renaissance à Florence, canaux de Venise, côte amalfitaine et cuisine régionale incomparable.',
      ar: 'آثار الإمبراطورية الرومانية في روما، فنون النهضة في فلورنسا، قنوات البندقية، والمطبخ الإيطالي العريق.',
    },
    wifiTips: {
      en: 'TIM, Vodafone, and Iliad tourist SIMs cover high-speed rail corridors. Public piazzas and hotels include Wi-Fi.',
      fr: 'TIM, Vodafone et Iliad assurent une excellente 4G/5G le long des lignes ferroviaires et centres historiques.',
      ar: 'شركات TIM وVodafone توفر تغطية ممتازة، والإنترنت اللاسلكي متاح في الفنادق والساحات الكبرى.',
    },
    heroImage: VOYAGO_IMAGES.italy,
    mapsQuery: 'Italy landmarks Rome',
    currency: {
      code: 'EUR',
      symbol: '€',
      name: { en: 'Euro', fr: 'Euro', ar: 'اليورو' },
      tips: {
        en: 'Cards are legally accepted everywhere; note the small "coperto" table bread charge (€1.50–€3) on sit-down restaurant menus.',
        fr: 'Les cartes sont acceptées partout ; notez le « coperto » (1,50 à 3 €) indiqué sur les cartes des restaurants.',
        ar: 'البطاقات مقبولة في كل مكان، ويُضاف غالباً رسم بسيط للطاولة (coperto) في المطاعم.',
      },
    },
    cities: [
      {
        name: { en: 'Rome', fr: 'Rome', ar: 'روما' },
        highlight: {
          en: 'Colosseum, Roman Forum, Pantheon, Trevi Fountain, and Vatican museums.',
          fr: 'Colisée, Forum romain, Panthéon, fontaine de Trevi et musées du Vatican.',
          ar: 'الكولوسيوم، المنتدى الروماني، البانثيون، نافورة تريفي، والفاتيكان.',
        },
        mapsQuery: 'Rome Italy',
      },
      {
        name: { en: 'Florence & Venice', fr: 'Florence & Venise', ar: 'فلورنسا والبندقية' },
        highlight: {
          en: 'Brunelleschi’s Duomo and Uffizi Gallery; St. Mark’s Square and lagoon gondolas.',
          fr: 'Dôme de Brunelleschi et galerie des Offices ; place Saint-Marc et lagune de Venise.',
          ar: 'كاتدرائية فلورنسا ومعرض أوفيزي، وساحة سان ماركو وقنوات البندقية.',
        },
        mapsQuery: 'Florence Italy',
      },
    ],
    monuments: [
      {
        id: 'it-colosseum',
        name: { en: 'The Colosseum & Roman Forum', fr: 'Le Colisée & Forum romain', ar: 'الكولوسيوم والمنتدى الروماني' },
        city: 'Rome',
        era: '72–80 CE (Flavian Dynasty)',
        description: {
          en: 'Commissioned under Emperor Vespasian in 72 CE, the 50,000-seat travertine amphitheater stands beside the ancient Roman Forum temples and triumphal arches.',
          fr: 'Inauguré en 80 apr. J.-C., cet amphithéâtre en travertin de 50 000 places domine le Forum romain et ses arcs de triomphe antiques.',
          ar: 'أعظم مدرج روماني شُيّد بين 72 و80 ميلادية من حجر الترافرتين بسعة 50 ألف متفرج بجوار المنتدى الروماني.',
        },
        image: VOYAGO_IMAGES.italy,
        mapsQuery: 'Colosseum Rome Italy',
      },
      {
        id: 'it-duomo-florence',
        name: { en: 'Florence Cathedral (Duomo)', fr: 'Cathédrale Santa Maria del Fiore', ar: 'كاتدرائية فلورنسا' },
        city: 'Florence',
        era: '1296–1436',
        description: {
          en: 'Polychrome marble basilica crowned by Brunelleschi’s revolutionary terracotta brick dome.',
          fr: 'Basilique en marbre polychrome coiffée de la coupole révolutionnaire de Brunelleschi.',
          ar: 'كاتدرائية من الرخام الملون تتوجها قبة برونليسكي الشهيرة في قلب عصر النهضة.',
        },
        image: VOYAGO_IMAGES.europe,
        mapsQuery: 'Cathedral of Santa Maria del Fiore Florence',
      },
    ],
    dishes: [
      {
        name: { en: 'Neapolitan Pizza Margherita', fr: 'Pizza napolitaine Margherita', ar: 'بيتزا نابولي الأصلية' },
        category: { en: 'UNESCO Culinary Craft', fr: 'Patrimoine culinaire', ar: 'مطبخ تقليدي' },
        description: {
          en: 'Wood-fired blistered dough topped with San Marzano tomatoes, fresh mozzarella, basil, and olive oil.',
          fr: 'Pâte levée cuite au feu de bois avec tomates San Marzano, mozzarella fraîche et basilic.',
          ar: 'عجينة مخبوزة في فرن الحطب مع طماطم سان مارزانو وجبن الموزاريلا الطازج والريحان.',
        },
      },
      {
        name: { en: 'Artisan Pasta & Gelato', fr: 'Pâtes fraîches & Gelato', ar: 'الباستا والجيلاتو الإيطالي' },
        category: { en: 'Regional Classic', fr: 'Classique régional', ar: 'أطباق وحلويات' },
        description: {
          en: 'Hand-shaped pasta from Roman cacio e pepe to Bolognese tagliatelle, finished with small-batch gelato.',
          fr: 'Pâtes fraîches régionales (cacio e pepe, tagliatelles) suivies d’un véritable gelato artisanal.',
          ar: 'معكرونة طازجة بوصفات كل منطقة مع آيس كريم الجيلاتو الإيطالي الطبيعي.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Buongiorno', pronunciation: 'Bwon-jor-no' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Grazie', pronunciation: 'Gra-tsee-eh' },
      { label: { en: 'The bill please', fr: 'L’addition SVP', ar: 'الحساب من فضلك' }, local: 'Il conto, per favore', pronunciation: 'Eel kon-to per fa-vo-reh' },
    ],
  },
  {
    id: 'spain',
    code: 'ES',
    flag: '🇪🇸',
    continent: 'europe',
    featured: true,
    subregion: { en: 'Southern Europe', fr: 'Europe du Sud', ar: 'جنوب أوروبا' },
    name: { en: 'Spain', fr: 'Espagne', ar: 'إسبانيا' },
    capital: { en: 'Madrid', fr: 'Madrid', ar: 'مدريد' },
    bestSeason: {
      en: 'April–June & September–October',
      fr: 'Avril–Juin & Septembre–Octobre',
      ar: 'أبريل–يونيو وسبتمبر–أكتوبر',
    },
    summary: {
      en: 'Moorish palaces of Andalusia, Gaudí’s surreal Barcelona skyline, Madrid’s grand art museums, and lively evening tapas culture.',
      fr: 'Palais mauresques d’Andalousie, architecture de Gaudí à Barcelone, musées royaux de Madrid et culture conviviale des tapas.',
      ar: 'قصور الأندلس التاريخية، روائع غاودي في برشلونة، متاحف مدريد الكبرى، وثقافة التاباس والباييلا.',
    },
    wifiTips: {
      en: 'Movistar, Vodafone, and Orange eSIMs offer fast nationwide 5G; trains and city plazas offer reliable Wi-Fi.',
      fr: 'Excellente couverture 5G avec Movistar, Orange ou Vodafone ; Wi-Fi disponible dans les gares et hôtels.',
      ar: 'تغطية 5G ممتازة مع شبكات Movistar وOrange، وتوفر معظم الفنادق والقطارات Wi-Fi مجاني.',
    },
    heroImage: VOYAGO_IMAGES.spain,
    mapsQuery: 'Spain Alhambra Madrid Barcelona',
    currency: {
      code: 'EUR',
      symbol: '€',
      name: { en: 'Euro', fr: 'Euro', ar: 'اليورو' },
      tips: {
        en: 'Contactless payments work nearly everywhere; carry small coins for market stalls and café tips.',
        fr: 'Paiement par carte accepté presque partout ; gardez un peu de monnaie pour les marchés.',
        ar: 'البطاقات مقبولة في كل مكان تقريباً، ويُفضل حمل فئات نقدية صغيرة للأسواق الشعبية.',
      },
    },
    cities: [
      {
        name: { en: 'Granada & Seville', fr: 'Grenade & Séville', ar: 'غرناطة وإشبيلية' },
        highlight: {
          en: 'Alhambra citadel, Albaicín terraces, Seville Alcázar, and Giralda tower.',
          fr: 'Citadelle de l’Alhambra, quartier de l’Albaicín, Alcazar de Séville et Giralda.',
          ar: 'قصر الحمراء في غرناطة، حي البيازين، وقصر المورق والخيرالدا في إشبيلية.',
        },
        mapsQuery: 'Granada Spain',
      },
      {
        name: { en: 'Barcelona & Madrid', fr: 'Barcelone & Madrid', ar: 'برشلونة ومدريد' },
        highlight: {
          en: 'Sagrada Família and Gothic Quarter; Prado Museum and Retiro Park.',
          fr: 'Sagrada Família et quartier gothique ; musée du Prado et parc du Retiro.',
          ar: 'كنيسة ساغرادا فاميليا والحي القوطي في برشلونة، ومتحف البرادو في مدريد.',
        },
        mapsQuery: 'Barcelona Spain',
      },
    ],
    monuments: [
      {
        id: 'es-alhambra',
        name: { en: 'The Alhambra', fr: 'L’Alhambra de Grenade', ar: 'قصر الحمراء' },
        city: 'Granada',
        era: '13th–14th Century (Nasrid Dynasty)',
        description: {
          en: 'Built by the Nasrid sultans atop Sabika hill beneath the Sierra Nevada, famous for muqarnas stalactite vaults, Lion Courtyard, and Generalife water gardens.',
          fr: 'Palais-forteresse des sultans nasrides face à la Sierra Nevada, célèbre pour la cour des Lions, ses muqarnas et les jardins du Generalife.',
          ar: 'قلعة وقصور سلاطين بني نصر في غرناطة أمام جبال سييرا نيفادا، تشتهر بباحة السباع والمقرنصات وحدائق جنة العريف.',
        },
        image: VOYAGO_IMAGES.spain,
        mapsQuery: 'Alhambra Granada Spain',
      },
      {
        id: 'es-sagrada',
        name: { en: 'Basílica de la Sagrada Família', fr: 'Sagrada Família', ar: 'ساغرادا فاميليا' },
        city: 'Barcelona',
        era: '1882–Present (Antoni Gaudí)',
        description: {
          en: 'Towering modernist basilica illuminated by forest-like columns and kaleidoscopic stained glass.',
          fr: 'Basilique moderniste monumentale aux colonnes arborescentes et vitraux spectaculaires.',
          ar: 'تحفة المعماري أنطوني غاودي بأبراجها الشاهقة وأعمدتها الشجرية ونوافذها الملونة.',
        },
        image: VOYAGO_IMAGES.europe,
        mapsQuery: 'Sagrada Familia Barcelona Spain',
      },
    ],
    dishes: [
      {
        name: { en: 'Valencian Paella', fr: 'Paella valencienne', ar: 'الباييلا الإسبانية' },
        category: { en: 'Coastal Classic', fr: 'Grand classique', ar: 'طبق تقليدي' },
        description: {
          en: 'Saffron-infused rice cooked in a wide shallow pan with crispy socarrat base, seafood, or chicken and beans.',
          fr: 'Riz safrané cuit dans une large poêle avec croûte dorée (socarrat), fruits de mer ou volaille.',
          ar: 'أرز بالزعفران مطهو في مقلاة واسعة مع المأكولات البحرية أو الدجاج والخضار.',
        },
      },
      {
        name: { en: 'Tortilla Española & Gazpacho', fr: 'Tortilla & Gaspacho', ar: 'تورتيلا البطاطس والغازباتشو' },
        category: { en: 'Tapas & Summer', fr: 'Tapas', ar: 'مقبلات' },
        description: {
          en: 'Golden potato-and-egg omelette and chilled Andalusian tomato soup served across neighborhood tapas bars.',
          fr: 'Omelette épaisse aux pommes de terre et soupe froide andalouse aux tomates mûres.',
          ar: 'عجة البطاطس الذهبية وحساء الطماطم الأندلسي البارد المنعش.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Hola', pronunciation: 'O-la' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Gracias', pronunciation: 'Gra-thyas' },
      { label: { en: 'Where is...?', fr: 'Où est... ?', ar: 'أين يقع...؟' }, local: '¿Dónde está...?', pronunciation: 'Don-day es-ta' },
    ],
  },
  {
    id: 'brazil',
    code: 'BR',
    flag: '🇧🇷',
    continent: 'americas',
    featured: true,
    subregion: { en: 'South America', fr: 'Amérique du Sud', ar: 'أمريكا الجنوبية' },
    name: { en: 'Brazil', fr: 'Brésil', ar: 'البرازيل' },
    capital: { en: 'Brasília', fr: 'Brasília', ar: 'برازيليا' },
    bestSeason: {
      en: 'May–September & December–March',
      fr: 'Mai–Septembre & Décembre–Mars',
      ar: 'ماي–سبتمبر وديسمبر–مارس',
    },
    summary: {
      en: 'Rio’s dramatic granite peaks and Christ the Redeemer, colonial Pelourinho in Salvador, Iguaçu Falls, and vibrant samba and churrasco culture.',
      fr: 'Sommets de Rio et Christ Rédempteur, quartier colonial de Salvador, chutes d’Iguaçu et gastronomie brésilienne chaleureuse.',
      ar: 'قمم ريو دي جانيرو وتمثال المسيح الفادي، حي بيلورينيو التاريخي، شلالات إيغواسو، والمطبخ البرازيلي الغني.',
    },
    wifiTips: {
      en: 'Vivo and Claro tourist eSIMs work across major cities; hotels, airports, and cafés in Rio and São Paulo offer fast Wi-Fi.',
      fr: 'Les eSIM Vivo et Claro fonctionnent très bien dans les grandes villes ; Wi-Fi rapide dans les hôtels et cafés.',
      ar: 'تتوفر شرائح Vivo وClaro في المطارات، وتقدم الفنادق والمقاهي في ريو وساو باولو Wi-Fi سريعاً.',
    },
    heroImage: VOYAGO_IMAGES.christRedeemer,
    mapsQuery: 'Brazil Rio de Janeiro Christ the Redeemer',
    currency: {
      code: 'BRL',
      symbol: 'R$',
      name: { en: 'Brazilian Real', fr: 'Réal brésilien', ar: 'الريال البرازيلي' },
      tips: {
        en: 'Credit/debit cards and contactless payments are accepted nearly everywhere, even by beach vendors; carry some BRL cash for small markets.',
        fr: 'Cartes bancaires sans contact acceptées presque partout ; gardez un peu d’espèces en BRL pour les marchés.',
        ar: 'البطاقات البنكية مقبولة في كل مكان تقريباً حتى في الأكشاك، ويُفضل حمل القليل من الريال النقدي.',
      },
    },
    cities: [
      {
        name: { en: 'Rio de Janeiro', fr: 'Rio de Janeiro', ar: 'ريو دي جانيرو' },
        highlight: {
          en: 'Mount Corcovado, Sugarloaf Cable Car, Copacabana Beach, and Santa Teresa trams.',
          fr: 'Mont Corcovado, Pain de Sucre, plage de Copacabana et quartier historique de Santa Teresa.',
          ar: 'جبل كوركوفادو، جبل السكر، شاطئ كوباكابانا، وحي سانتا تيريزا التاريخي.',
        },
        mapsQuery: 'Rio de Janeiro Brazil',
      },
      {
        name: { en: 'Salvador & São Paulo', fr: 'Salvador & São Paulo', ar: 'سلفادور وساو باولو' },
        highlight: {
          en: 'Pastel Afro-Brazilian colonial streets of Pelourinho and South America’s culinary capital.',
          fr: 'Rues coloniales colorées du Pelourinho à Salvador et capitale gastronomique à São Paulo.',
          ar: 'العمارة التاريخية الملونة في بيلورينيو بسلفادور، وعاصمة الثقافة والطعام في ساو باولو.',
        },
        mapsQuery: 'Salvador Bahia Brazil',
      },
    ],
    monuments: [
      {
        id: 'br-christ-redeemer',
        name: { en: 'Christ the Redeemer (Cristo Redentor)', fr: 'Christ Rédempteur', ar: 'تمثال المسيح الفادي' },
        city: 'Rio de Janeiro',
        era: '1922–1931 (Art Deco)',
        description: {
          en: 'Iconic 30-meter soapstone-clad Art Deco monument perched atop 700-meter Mount Corcovado overlooking Guanabara Bay.',
          fr: 'Monument Art déco de 30 mètres en pierre stéatite dressé au sommet du mont Corcovado à 700 m d’altitude.',
          ar: 'معلم تاريخي بارتفاع 30 متراً مبني على طراز آرت ديكو فوق قمة جبل كوركوفادو المطلة على خليج ريو.',
        },
        image: VOYAGO_IMAGES.christRedeemer,
        mapsQuery: 'Christ the Redeemer Rio de Janeiro Brazil',
      },
      {
        id: 'br-pelourinho',
        name: { en: 'Historic Centre of Salvador (Pelourinho)', fr: 'Centre historique de Salvador', ar: 'مركز سلفادور التاريخي' },
        city: 'Salvador',
        era: '16th–18th Century',
        description: {
          en: 'UNESCO Baroque colonial squares, pastel mansions, and cobbled hills reflecting Brazil’s early history.',
          fr: 'Places baroques classées à l’UNESCO et façades pastel retraçant les origines coloniales du Brésil.',
          ar: 'ساحات تاريخية ومبانٍ ملونة مصنفة في اليونسكو تعكس التراث البرازيلي العريق.',
        },
        image: VOYAGO_IMAGES.christRedeemer,
        mapsQuery: 'Pelourinho Salvador Brazil',
      },
    ],
    dishes: [
      {
        name: { en: 'Feijoada & Churrasco', fr: 'Feijoada & Churrasco', ar: 'الفيجوادا والشوراسكو البرازيلي' },
        category: { en: 'National Feast', fr: 'Plat national', ar: 'طبق وطني' },
        description: {
          en: 'Slow-simmered black bean stew served with rice, farofa, and orange slices alongside flame-roasted Brazilian steaks.',
          fr: 'Mijoté traditionnel de haricots noirs avec riz et farofa, accompagné de viandes grillées au feu de bois.',
          ar: 'حساء الفاصوليا السوداء مع الأرز والفاروفا وشرائح اللحم المشوية على الطريقة البرازيلية.',
        },
      },
      {
        name: { en: 'Pão de Queijo & Açaí', fr: 'Pão de Queijo & Açaí', ar: 'خبز الجبن البرازيلي والأساي' },
        category: { en: 'Bakery & Fruit', fr: 'Boulangerie & Fruit', ar: 'مخبوزات' },
        description: {
          en: 'Warm chewy cheese bread made with cassava flour and chilled Amazonian açaí berry bowls.',
          fr: 'Petits pains chauds au fromage et farine de manioc et bols glacés aux baies d’açaí d’Amazonie.',
          ar: 'خبز الجبن الدافئ بدقيق الكسافا وأطباق فاكهة الأساي الأمازونية المنعشة.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Olá / Bom dia', pronunciation: 'O-la / Bon jee-a' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Obrigado / Obrigada', pronunciation: 'O-bree-ga-do' },
      { label: { en: 'How much?', fr: 'Combien ?', ar: 'بكم هذا؟' }, local: 'Quanto custa?', pronunciation: 'Kwan-too koos-ta' },
    ],
  },
  {
    id: 'argentina',
    code: 'AR',
    flag: '🇦🇷',
    continent: 'americas',
    featured: true,
    subregion: { en: 'South America', fr: 'Amérique du Sud', ar: 'أمريكا الجنوبية' },
    name: { en: 'Argentina', fr: 'Argentine', ar: 'الأرجنتين' },
    capital: { en: 'Buenos Aires', fr: 'Buenos Aires', ar: 'بوينس آيرس' },
    bestSeason: {
      en: 'March–May & September–November',
      fr: 'Mars–Mai & Septembre–Novembre',
      ar: 'مارس–ماي وسبتمبر–نوفمبر',
    },
    summary: {
      en: 'Grand Parisian-style avenues in Buenos Aires, tango halls, Patagonian glaciers, Iguazú Falls, and famed parrilladas.',
      fr: 'Avenues monumentales de Buenos Aires, berceau du tango, glaciers de Patagonie, chutes d’Iguazú et célèbres grillades.',
      ar: 'شوارع بوينس آيرس الأنيقة، قصور بلازا دي مايو، أنهار باتاغونيا الجليدية، وشلالات إيغوازو.',
    },
    wifiTips: {
      en: 'Personal and Claro prepaid eSIMs offer solid 4G across Buenos Aires and Mendoza; cafés and hotels include reliable Wi-Fi.',
      fr: 'Cartes eSIM Personal ou Claro fiables dans les grandes villes ; Wi-Fi gratuit dans les cafés historiques.',
      ar: 'تتوفر باقات eSIM من Personal وClaro في بوينس آيرس ومندوزا، مع Wi-Fi في المقاهي والفنادق.',
    },
    heroImage: VOYAGO_IMAGES.buenosAires,
    mapsQuery: 'Buenos Aires Plaza de Mayo Argentina',
    currency: {
      code: 'ARS',
      symbol: '$',
      name: { en: 'Argentine Peso', fr: 'Peso argentin', ar: 'البيزو الأرجنتيني' },
      tips: {
        en: 'International Visa/Mastercard work widely in cities; carry crisp ARS cash for street kiosks, buses (SUBE card), and tips (10%).',
        fr: 'Cartes internationales acceptées en ville ; prévoyez des espèces en ARS et une carte SUBE pour les transports.',
        ar: 'تُقبل البطاقات الدولية في المدن، ويُفضل حمل البيزو النقدي وبطاقة SUBE للمواصلات.',
      },
    },
    cities: [
      {
        name: { en: 'Buenos Aires', fr: 'Buenos Aires', ar: 'بوينس آيرس' },
        highlight: {
          en: 'Plaza de Mayo, Casa Rosada, Teatro Colón, La Boca, and historic Recoleta.',
          fr: 'Plaza de Mayo, Casa Rosada, Teatro Colón, quartier coloré de La Boca et Recoleta.',
          ar: 'ساحة مايو، القصر الوردي كاسا روسادا، مسرح كولون، وحي لا بوكا الملون.',
        },
        mapsQuery: 'Buenos Aires Argentina',
      },
      {
        name: { en: 'Mendoza & El Calafate', fr: 'Mendoza & El Calafate', ar: 'مندوزا وإل كالافاتي' },
        highlight: {
          en: 'Andean foothills overlooking Aconcagua and the towering Perito Moreno Glacier.',
          fr: 'Contreforts des Andes face à l’Aconcagua et glacier géant Perito Moreno.',
          ar: 'سفوح جبال الأنديز ونهر بيريتو مورينو الجليدي الشهير في باتاغونيا.',
        },
        mapsQuery: 'El Calafate Argentina',
      },
    ],
    monuments: [
      {
        id: 'ar-casa-rosada',
        name: { en: 'Casa Rosada & Plaza de Mayo', fr: 'Casa Rosada & Plaza de Mayo', ar: 'القصر الوردي وساحة مايو' },
        city: 'Buenos Aires',
        era: '1873–1898',
        description: {
          en: 'Historic pink executive palace and grand civic square at the heart of Argentina’s independence story.',
          fr: 'Palais présidentiel rose emblématique et place historique au cœur de l’histoire argentine.',
          ar: 'القصر الرئاسي الوردي التاريخي وساحة مايو التي شهدت أبرز محطات تاريخ الأرجنتين.',
        },
        image: VOYAGO_IMAGES.buenosAires,
        mapsQuery: 'Casa Rosada Plaza de Mayo Buenos Aires',
      },
      {
        id: 'ar-teatro-colon',
        name: { en: 'Teatro Colón & Obelisco', fr: 'Teatro Colón & Obélisque', ar: 'مسرح كولون والمسلة التاريخية' },
        city: 'Buenos Aires',
        era: '1908 & 1936',
        description: {
          en: 'Acoustically acclaimed 1908 opera palace and Avenida 9 de Julio monument.',
          fr: 'L’un des plus beaux opéras du monde inauguré en 1908 et l’obélisque de l’avenue du 9-Juillet.',
          ar: 'أحد أعظم دور الأوبرا التاريخية في العالم مع مسلة بوينس آيرس الشهيرة.',
        },
        image: VOYAGO_IMAGES.buenosAires,
        mapsQuery: 'Teatro Colon Buenos Aires',
      },
    ],
    dishes: [
      {
        name: { en: 'Argentine Asado & Empanadas', fr: 'Asado argentin & Empanadas', ar: 'الأساذو الأرجنتيني والإمباناداس' },
        category: { en: 'Grill & Pastry', fr: 'Grillade & Spécialité', ar: 'مشويات ومعجنات' },
        description: {
          en: 'Wood-fired Pampas beef grilled over embers with chimichurri herb sauce and baked savory turnovers.',
          fr: 'Viande grillée lentement à la braise avec sauce chimichurri et chaussons dorés farcis.',
          ar: 'لحوم البامبا المشوية على الجمر مع صلصة التشيميتشوري وفطائر الإمباناداس المخبوزة.',
        },
      },
      {
        name: { en: 'Medialunas, Mate & Dulce de Leche', fr: 'Medialunas, Maté & Dulce de leche', ar: 'الميتي والميديالوناس' },
        category: { en: 'Café Culture', fr: 'Culture café', ar: 'مشروبات وحلويات' },
        description: {
          en: 'Glazed crescent pastries, caramelized milk spread, and traditional yerba mate tea.',
          fr: 'Croissants sucrés, confiture de lait et infusion traditionnelle de yerba maté.',
          ar: 'معجنات الميديالوناس وكراميل الحليب مع مشروب المتة التقليدي.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Hola / Buen día', pronunciation: 'O-la / Bwen dee-a' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Muchas gracias', pronunciation: 'Moo-chas gra-syas' },
      { label: { en: 'How much?', fr: 'Combien ?', ar: 'بكم هذا؟' }, local: '¿Cuánto sale?', pronunciation: 'Kwan-to sa-leh' },
    ],
  },
  {
    id: 'usa',
    code: 'US',
    flag: '🇺🇸',
    continent: 'americas',
    featured: true,
    subregion: { en: 'North America', fr: 'Amérique du Nord', ar: 'أمريكا الشمالية' },
    name: { en: 'United States', fr: 'États-Unis', ar: 'الولايات المتحدة الأمريكية' },
    capital: { en: 'Washington, D.C.', fr: 'Washington, D.C.', ar: 'واشنطن العاصمة' },
    bestSeason: {
      en: 'April–June & September–October',
      fr: 'Avril–Juin & Septembre–Octobre',
      ar: 'أبريل–يونيو وسبتمبر–أكتوبر',
    },
    summary: {
      en: 'From New York’s Statue of Liberty and Washington’s monuments to San Francisco’s Golden Gate, Grand Canyon, and diverse regional kitchens.',
      fr: 'De la Statue de la Liberté et Washington aux grands parcs nationaux de l’Ouest et à la diversité culturelle américaine.',
      ar: 'من تمثال الحرية في نيويورك ومعالم واشنطن إلى جسر البوابة الذهبية والجراند كانيون والمطابخ الأمريكية المتنوعة.',
    },
    wifiTips: {
      en: 'T-Mobile, AT&T, and Verizon eSIMs cover urban corridors; hotels, cafés, and airports provide free Wi-Fi.',
      fr: 'Les eSIM T-Mobile et AT&T offrent une couverture 5G rapide ; Wi-Fi gratuit partout dans les cafés et hôtels.',
      ar: 'شرائح eSIM من T-Mobile وAT&T توفر تغطية 5G واسعة، مع Wi-Fi مجاني في الفنادق والمقاهي.',
    },
    heroImage: VOYAGO_IMAGES.statueLiberty,
    mapsQuery: 'United States Statue of Liberty Washington DC',
    currency: {
      code: 'USD',
      symbol: '$',
      name: { en: 'US Dollar', fr: 'Dollar américain', ar: 'الدولار الأمريكي' },
      tips: {
        en: 'Credit/debit cards and Apple/Google Pay work everywhere. Note that sales tax and 15–20% restaurant tips are added at checkout.',
        fr: 'Paiement par carte universel ; les taxes locales et le pourboire (15–20 % au restaurant) s’ajoutent au total.',
        ar: 'البطاقات مقبولة في كل مكان، ويُضاف عادةً ضريبة المبيعات وبقشيش 15–20% في المطاعم.',
      },
    },
    cities: [
      {
        name: { en: 'New York City', fr: 'New York', ar: 'نيويورك' },
        highlight: {
          en: 'Statue of Liberty, Central Park, Brooklyn Bridge, Times Square, and Metropolitan Museum.',
          fr: 'Statue de la Liberté, Central Park, pont de Brooklyn et Metropolitan Museum.',
          ar: 'تمثال الحرية، سنترال بارك، جسر بروكلين، ومتحف المتروبوليتان.',
        },
        mapsQuery: 'New York City USA',
      },
      {
        name: { en: 'Washington, D.C. & San Francisco', fr: 'Washington, D.C. & San Francisco', ar: 'واشنطن وسان فرانسيسكو' },
        highlight: {
          en: 'National Mall Smithsonian museums, Lincoln Memorial, and Golden Gate Bridge.',
          fr: 'Monuments du National Mall, musées Smithsonian et pont du Golden Gate.',
          ar: 'نصب لنكولن ومتاحف سميثسونيان في واشنطن وجسر البوابة الذهبية في سان فرانسيسكو.',
        },
        mapsQuery: 'Washington DC USA',
      },
    ],
    monuments: [
      {
        id: 'us-statue-liberty',
        name: { en: 'Statue of Liberty', fr: 'Statue de la Liberté', ar: 'تمثال الحرية' },
        city: 'New York',
        era: '1886 (Frédéric Auguste Bartholdi & Gustave Eiffel)',
        description: {
          en: 'Neoclassical copper monument designed in France with an internal iron framework by Gustave Eiffel, welcoming visitors to New York Harbor.',
          fr: 'Monument en cuivre conçu par Bartholdi avec une structure interne signée Gustave Eiffel dans la baie de New York.',
          ar: 'تمثال نحاسي تاريخي أهدته فرنسا عام 1886 وصمم هيكله الداخلي غوستاف إيفل في ميناء نيويورك.',
        },
        image: VOYAGO_IMAGES.statueLiberty,
        mapsQuery: 'Statue of Liberty New York USA',
      },
      {
        id: 'us-lincoln-memorial',
        name: { en: 'Lincoln Memorial & Golden Gate', fr: 'Lincoln Memorial & Golden Gate', ar: 'نصب لنكولن وجسر البوابة الذهبية' },
        city: 'Washington, D.C. / San Francisco',
        era: '1922 & 1937',
        description: {
          en: 'Doric marble temple overlooking the Reflecting Pool and iconic Art Deco suspension span in California.',
          fr: 'Temple dorique en marbre sur le National Mall et célèbre pont suspendu Art déco de Californie.',
          ar: 'معبد رخامي تاريخي في العاصمة واشنطن وجسر كاليفورنيا المعلق الشهير.',
        },
        image: VOYAGO_IMAGES.statueLiberty,
        mapsQuery: 'Lincoln Memorial Washington DC',
      },
    ],
    dishes: [
      {
        name: { en: 'New Orleans Gumbo & Texan BBQ', fr: 'Gumbo de La Nouvelle-Orléans & BBQ', ar: 'غومبو نيو أورلينز والباربكيو' },
        category: { en: 'Regional Heritage', fr: 'Cuisine régionale', ar: 'مطبخ أمريكي' },
        description: {
          en: 'Creole okra-and-seafood stew and hickory-smoked regional barbecue alongside classic New York bagels and apple pie.',
          fr: 'Ragoût créole parfumé, grillades fumées au bois et véritables bagels new-yorkais.',
          ar: 'أطباق الكريول التقليدية واللحوم المدخنة وخبز البيغل وفطيرة التفاح الأمريكية.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Hello / Good morning', pronunciation: 'Hel-lo' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Thank you very much', pronunciation: 'Thank yoo' },
    ],
  },
  {
    id: 'india',
    code: 'IN',
    flag: '🇮🇳',
    continent: 'asia',
    featured: true,
    subregion: { en: 'South Asia', fr: 'Asie du Sud', ar: 'جنوب آسيا' },
    name: { en: 'India', fr: 'Inde', ar: 'الهند' },
    capital: { en: 'New Delhi', fr: 'New Delhi', ar: 'نيودلهي' },
    bestSeason: {
      en: 'October–March',
      fr: 'Octobre–Mars',
      ar: 'أكتوبر–مارس',
    },
    summary: {
      en: 'Mughal marble wonders of the Taj Mahal, pink sandstone palaces of Jaipur, Himalayan valleys, and vibrant spice-layered regional cuisines.',
      fr: 'Merveilles mogholes du Taj Mahal, palais roses de Jaipur, vallées de l’Himalaya et gastronomie épicée millénaire.',
      ar: 'تحفة تاج محل الرخامية، قصور جايبور الوردية، جبال الهيمالايا، والمطبخ الهندي الغني بالتوابل.',
    },
    wifiTips: {
      en: 'Airtel and Jio tourist SIMs offer nationwide 4G/5G; hotels and rail hubs provide Wi-Fi.',
      fr: 'Cartes SIM touristiques Airtel et Jio très performantes dans tout le pays.',
      ar: 'توفر شبكات Airtel وJio تغطية 4G/5G واسعة في المدن السياحية.',
    },
    heroImage: VOYAGO_IMAGES.tajMahal,
    mapsQuery: 'India Taj Mahal Agra Jaipur Delhi',
    currency: {
      code: 'INR',
      symbol: '₹',
      name: { en: 'Indian Rupee', fr: 'Roupie indienne', ar: 'الروبية الهندية' },
      tips: {
        en: 'Cards work in hotels and major shops; keep INR cash for rickshaws, street food, and local bazaars.',
        fr: 'Cartes acceptées dans les hôtels ; gardez des roupies en espèces pour les marchés et transports.',
        ar: 'تُقبل البطاقات في الفنادق والمراكز التجارية، ويُستخدم النقد بالروبية في الأسواق.',
      },
    },
    cities: [
      {
        name: { en: 'Agra & Jaipur', fr: 'Agra & Jaipur', ar: 'أغرا وجايبور' },
        highlight: {
          en: 'Taj Mahal, Agra Fort, Amber Fort, and the Hawa Mahal Palace of Winds.',
          fr: 'Taj Mahal, Fort d’Agra, Fort d’Amber et Palais des Vents à Jaipur.',
          ar: 'تاج محل وقلعة أغرا وقلعة العنبر وقصر الرياح في جايبور.',
        },
        mapsQuery: 'Agra India',
      },
      {
        name: { en: 'New Delhi & Mumbai', fr: 'New Delhi & Mumbai', ar: 'نيودلهي ومومباي' },
        highlight: {
          en: 'Qutub Minar, Humayun’s Tomb, and Mumbai’s Gateway of India.',
          fr: 'Qutub Minar, tombeau d’Humayun et Porte de l’Inde à Mumbai.',
          ar: 'قطب منار وضريح همايون وبوابة الهند في مومباي.',
        },
        mapsQuery: 'New Delhi India',
      },
    ],
    monuments: [
      {
        id: 'in-taj-mahal',
        name: { en: 'Taj Mahal', fr: 'Taj Mahal', ar: 'تاج محل' },
        city: 'Agra',
        era: '1632–1653 (Mughal Era)',
        description: {
          en: 'Ivory-white marble mausoleum inlaid with semi-precious stones along the Yamuna River, one of the New Seven Wonders.',
          fr: 'Mausolée impérial en marbre blanc incrusté de pierres semi-précieuses au bord de la rivière Yamuna.',
          ar: 'ضريح تاريخي من الرخام الأبيض النقي المرصع بالأحجار الكريمة على ضفاف نهر يامونا في أغرا.',
        },
        image: VOYAGO_IMAGES.tajMahal,
        mapsQuery: 'Taj Mahal Agra India',
      },
    ],
    dishes: [
      {
        name: { en: 'Biryani, Masala Dosa & Masala Chai', fr: 'Biryani, Dosa & Masala Chai', ar: 'البرياني والدوسا وشاي ماسالا' },
        category: { en: 'Heritage Cuisine', fr: 'Cuisine traditionnelle', ar: 'مطبخ هندي' },
        description: {
          en: 'Fragrant saffron-spiced basmati rice, crisp fermented lentil crêpes, and cardamom-ginger spiced milk tea.',
          fr: 'Riz basmati parfumé au safran, galettes croustillantes et thé noir aux épices.',
          ar: 'أرز بسمتي بالزعفران والتوابل وفطائر الدوسا وشاي الماسالا بالهيل والزنجبيل.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Namaste', pronunciation: 'Na-mas-teh' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Dhanyavaad', pronunciation: 'Dhan-ya-vaad' },
    ],
  },
  {
    id: 'australia',
    code: 'AU',
    flag: '🇦🇺',
    continent: 'oceania',
    featured: true,
    subregion: { en: 'Oceania', fr: 'Océanie', ar: 'أوقيانوسيا' },
    name: { en: 'Australia', fr: 'Australie', ar: 'أستراليا' },
    capital: { en: 'Canberra', fr: 'Canberra', ar: 'كانبيرا' },
    bestSeason: {
      en: 'September–November & March–May',
      fr: 'Septembre–Novembre & Mars–Mai',
      ar: 'سبتمبر–نوفمبر ومارس–ماي',
    },
    summary: {
      en: 'Sydney’s sculptural harbour, Melbourne’s laneway cafés, the Great Barrier Reef, and ancient red sandstone monolith Uluru.',
      fr: 'Baie de Sydney et son Opéra, ruelles de Melbourne, Grande Barrière de corail et monolithe sacré d’Uluru.',
      ar: 'ميناء ودار أوبرا سيدني، مقاهي ملبورن، الحاجز المرجاني العظيم، وصخرة أولورو التاريخية.',
    },
    wifiTips: {
      en: 'Telstra and Optus tourist eSIMs provide strong coverage; city centers and ferries offer free Wi-Fi.',
      fr: 'Cartes eSIM Telstra ou Optus performantes ; Wi-Fi gratuit dans les centres-villes.',
      ar: 'توفر شبكات Telstra وOptus تغطية ممتازة، مع Wi-Fi مجاني في مراكز المدن.',
    },
    heroImage: VOYAGO_IMAGES.sydneyOpera,
    mapsQuery: 'Sydney Opera House Australia',
    currency: {
      code: 'AUD',
      symbol: 'A$',
      name: { en: 'Australian Dollar', fr: 'Dollar australien', ar: 'الدولار الأسترالي' },
      tips: {
        en: 'Contactless cards and mobile wallets are accepted virtually everywhere; tipping is optional.',
        fr: 'Paiement sans contact généralisé partout dans le pays ; le pourboire reste facultatif.',
        ar: 'الدفع بالبطاقات واللمس مقبول في كل مكان تقريباً، والبقشيش اختياري.',
      },
    },
    cities: [
      {
        name: { en: 'Sydney', fr: 'Sydney', ar: 'سيدني' },
        highlight: {
          en: 'Sydney Opera House, Harbour Bridge, The Rocks historic district, and Bondi coastal walk.',
          fr: 'Opéra de Sydney, Harbour Bridge, quartier historique de The Rocks et plage de Bondi.',
          ar: 'دار أوبرا سيدني، جسر الميناء، حي ذا روكس التاريخي، وشاطئ بونداي.',
        },
        mapsQuery: 'Sydney Australia',
      },
      {
        name: { en: 'Melbourne & Uluru', fr: 'Melbourne & Uluru', ar: 'ملبورن وأولورو' },
        highlight: {
          en: 'Victorian arcades, specialty coffee culture, and sacred Red Centre desert rock art.',
          fr: 'Galeries victoriennes, culture café et art rupestre sacré d’Uluru.',
          ar: 'العمارة الفيكتورية وثقافة القهوة في ملبورن وتراث أولورو الصحراوي.',
        },
        mapsQuery: 'Melbourne Australia',
      },
    ],
    monuments: [
      {
        id: 'au-sydney-opera',
        name: { en: 'Sydney Opera House', fr: 'Opéra de Sydney', ar: 'دار أوبرا سيدني' },
        city: 'Sydney',
        era: '1959–1973 (Jørn Utzon)',
        description: {
          en: 'UNESCO 20th-century architectural masterpiece defined by interlocking precast concrete shells on Bennelong Point.',
          fr: 'Chef-d’œuvre architectural du XXe siècle classé à l’UNESCO aux célèbres voiles blanches sur le port.',
          ar: 'تحفة معمارية عالمية مصنفة في اليونسكو بتصميم أشرعتها البيضاء المطلة على ميناء سيدني.',
        },
        image: VOYAGO_IMAGES.sydneyOpera,
        mapsQuery: 'Sydney Opera House Australia',
      },
    ],
    dishes: [
      {
        name: { en: 'Lamingtons, Meat Pie & Flat White', fr: 'Lamingtons, Tourte & Flat White', ar: 'كعكة لامينغتون وفلات وايت' },
        category: { en: 'Café & Bakery', fr: 'Café & Pâtisserie', ar: 'مخبوزات وقهوة' },
        description: {
          en: 'Chocolate-coconut sponge squares, flaky savory meat pies, and Australia’s signature velvety espresso.',
          fr: 'Gâteaux éponge au chocolat et noix de coco, tourtes chaudes et café Flat White.',
          ar: 'كعكة جوز الهند والشوكولاتة والفطائر الساخنة مع قهوة الفلات وايت الأسترالية.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'G’day / Hello', pronunciation: 'Guh-day' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Thank you / Cheers', pronunciation: 'Cheers' },
    ],
  },
  {
    id: 'japan',
    code: 'JP',
    flag: '🇯🇵',
    continent: 'asia',
    featured: true,
    subregion: { en: 'East Asia', fr: 'Asie de l’Est', ar: 'شرق آسيا' },
    name: { en: 'Japan', fr: 'Japon', ar: 'اليابان' },
    capital: { en: 'Tokyo', fr: 'Tokyo', ar: 'طوكيو' },
    bestSeason: {
      en: 'March–May (Cherry Blossom) & October–November',
      fr: 'Mars–Mai (Cerisiers) & Octobre–Novembre',
      ar: 'مارس–ماي (أزهار الكرز) وأكتوبر–نوفمبر',
    },
    summary: {
      en: 'Centuries-old wooden pagodas, Kyoto imperial shrines beneath Mount Fuji, bullet trains, and refined sushi, ramen, and tea traditions.',
      fr: 'Pagodes millénaires, sanctuaires impériaux de Kyoto face au mont Fuji, Shinkansen et gastronomie japonaise d’exception.',
      ar: 'معابد كيوتو العتيقة وجبل فوجي، قطارات شينكانسن السريعة، وأرقى فنون المطبخ الياباني.',
    },
    wifiTips: {
      en: 'Ubigi, Airalo eSIMs, and pocket Wi-Fi routers at Narita/Haneda airports deliver reliable 5G nationwide.',
      fr: 'eSIM touristiques et boîtiers Pocket Wi-Fi disponibles dès les aéroports de Tokyo et d’Osaka.',
      ar: 'تتوفر شرائح eSIM وأجهزة Pocket Wi-Fi في مطارات طوكيو وأوساكا بتغطية 5G شاملة.',
    },
    heroImage: VOYAGO_IMAGES.japan,
    mapsQuery: 'Japan Kyoto Mount Fuji Tokyo',
    currency: {
      code: 'JPY',
      symbol: '¥',
      name: { en: 'Japanese Yen', fr: 'Yen japonais', ar: 'الين الياباني' },
      tips: {
        en: 'IC transit cards (Suica/Pasmo) and credit cards work in cities; keep JPY cash for rural shrines and ramen ticket machines.',
        fr: 'Cartes Suica/Pasmo et cartes bancaires répandues ; gardez des yens en espèces pour les temples et marchés.',
        ar: 'بطاقات Suica والبطاقات البنكية مقبولة في المدن، ويُفضل حمل الين النقدي للمعابد والأسواق.',
      },
    },
    cities: [
      {
        name: { en: 'Tokyo', fr: 'Tokyo', ar: 'طوكيو' },
        highlight: {
          en: 'Asakusa Sensō-ji Temple, Meiji Shrine, Shibuya, and Tsukiji Outer Market.',
          fr: 'Temple Sensō-ji d’Asakusa, sanctuaire Meiji, Shibuya et marché de Tsukiji.',
          ar: 'معبد سينسو جي في أساكوسا، ضريح ميجي، شيبويا، وسوق تسوكيجي.',
        },
        mapsQuery: 'Tokyo Japan',
      },
      {
        name: { en: 'Kyoto & Fujiyoshida', fr: 'Kyoto & Fujiyoshida', ar: 'كيوتو وفوجي يوشيدا' },
        highlight: {
          en: 'Kinkaku-ji Golden Pavilion, Fushimi Inari torii gates, and Chureito Pagoda facing Mount Fuji.',
          fr: 'Pavillon d’Or Kinkaku-ji, portiques de Fushimi Inari et pagode Chureito face au mont Fuji.',
          ar: 'الجناح الذهبي كينكاكو جي، معبد فوشيمي إيناري، ومعبد تشوريتو أمام جبل فوجي.',
        },
        mapsQuery: 'Kyoto Japan',
      },
    ],
    monuments: [
      {
        id: 'jp-chureito-kyoto',
        name: { en: 'Chureito Pagoda & Kyoto Temples', fr: 'Pagode Chureito & Temples de Kyoto', ar: 'معبد تشوريتو ومعابد كيوتو' },
        city: 'Fujiyoshida / Kyoto',
        era: '794–1609 CE',
        description: {
          en: 'Five-tiered vermilion pagoda overlooking snow-crowned Mount Fuji alongside Kyoto’s UNESCO Kiyomizu-dera and Kinkaku-ji wooden temples.',
          fr: 'Pagode vermillon à cinq étages face au mont Fuji et temples impériaux en bois de Kyoto classés à l’UNESCO.',
          ar: 'باغودا حمراء من خمسة طوابق مطلة على جبل فوجي مع معابد كيوتو الخشبية العريقة.',
        },
        image: VOYAGO_IMAGES.japan,
        mapsQuery: 'Chureito Pagoda Fujiyoshida Japan',
      },
      {
        id: 'jp-himeji',
        name: { en: 'Himeji Castle', fr: 'Château d’Himeji', ar: 'قلعة هيميجي' },
        city: 'Himeji',
        era: '1609 (Edo Period)',
        description: {
          en: 'Japan’s finest surviving feudal wooden fortress, nicknamed the White Heron Castle for its graceful plastered roofs.',
          fr: 'La plus belle forteresse féodale préservée du Japon, surnommée le château du Héron blanc.',
          ar: 'أجمل قلعة يابانية متبقية من العصر الإقطاعي، وتُلقب بقلعة مالك الحزين الأبيض.',
        },
        image: VOYAGO_IMAGES.japan,
        mapsQuery: 'Himeji Castle Japan',
      },
    ],
    dishes: [
      {
        name: { en: 'Sushi, Ramen & Matcha Kaiseki', fr: 'Sushi, Ramen & Matcha', ar: 'السوشي والرامن والماتشا' },
        category: { en: 'UNESCO Cuisine', fr: 'Gastronomie UNESCO', ar: 'مطبخ تقليدي' },
        description: {
          en: 'Seasonal nigiri sushi, rich slow-simmered tonkotsu or miso ramen, crisp tempura, and Uji matcha tea sweets.',
          fr: 'Sushis de saison, ramen mijotés, tempura dorée et douceurs au thé vert matcha d’Uji.',
          ar: 'سوشي موسمي طازج، حساء الرامن الغني، التيمبورا المقرمشة وحلويات شاي الماتشا.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Konnichiwa', pronunciation: 'Kon-nee-chee-wa' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Arigatō gozaimasu', pronunciation: 'A-ree-ga-to go-zai-mas' },
    ],
  },
  {
    id: 'china',
    code: 'CN',
    flag: '🇨🇳',
    continent: 'asia',
    featured: true,
    subregion: { en: 'East Asia', fr: 'Asie de l’Est', ar: 'شرق آسيا' },
    name: { en: 'China', fr: 'Chine', ar: 'الصين' },
    capital: { en: 'Beijing', fr: 'Pékin', ar: 'بكين' },
    bestSeason: {
      en: 'April–May & September–October',
      fr: 'Avril–Mai & Septembre–Octobre',
      ar: 'أبريل–ماي وسبتمبر–أكتوبر',
    },
    summary: {
      en: 'Five millennia of dynastic wonders from the Great Wall and Beijing’s Forbidden City to Xi’an’s Terracotta Army and Guilin karst peaks.',
      fr: 'Cinq millénaires d’histoire entre la Grande Muraille, la Cité Interdite de Pékin, l’armée de terre cuite de Xi’an et les pics de Guilin.',
      ar: 'خمسة آلاف عام من الحضارة بين سور الصين العظيم والمدينة المحرمة وجيش التيراكوتا وجبال قويلين.',
    },
    wifiTips: {
      en: 'Travel eSIMs with built-in international roaming bypass local app blocks; hotels and trains provide Wi-Fi.',
      fr: 'Privilégiez une eSIM internationale pour rester connecté facilement ; Wi-Fi disponible dans les hôtels.',
      ar: 'تتوفر باقات eSIM الدولية بسهولة في المطارات مع خدمة Wi-Fi في الفنادق ومحطات القطار.',
    },
    heroImage: VOYAGO_IMAGES.china,
    mapsQuery: 'Great Wall of China Beijing Forbidden City',
    currency: {
      code: 'CNY',
      symbol: '¥',
      name: { en: 'Chinese Yuan (Renminbi)', fr: 'Yuan chinois', ar: 'اليوان الصيني' },
      tips: {
        en: 'Link an international Visa/Mastercard inside Alipay or WeChat Pay for effortless scanning everywhere; carry small CNY bills as backup.',
        fr: 'Associez votre carte à Alipay ou WeChat Pay pour régler facilement partout ; gardez un peu de liquide en CNY.',
        ar: 'اربط بطاقتك البنكية بتطبيق Alipay أو WeChat Pay للدفع بسهولة مع حمل القليل من اليوان النقدي.',
      },
    },
    cities: [
      {
        name: { en: 'Beijing', fr: 'Pékin', ar: 'بكين' },
        highlight: {
          en: 'Great Wall sections (Mutianyu/Jinshanling), Forbidden City, and Temple of Heaven.',
          fr: 'Grande Muraille (Mutianyu), Cité Interdite et Temple du Ciel.',
          ar: 'سور الصين العظيم، المدينة المحرمة، ومعبد السماء التاريخي.',
        },
        mapsQuery: 'Beijing China',
      },
      {
        name: { en: 'Xi’an & Shanghai', fr: 'Xi’an & Shanghai', ar: 'شيآن وشنغهاي' },
        highlight: {
          en: 'Silk Road ancient capital with 8,000 Terracotta Warriors and Shanghai’s Bund waterfront.',
          fr: 'Ancienne capitale de la route de la Soie (armée de Xi’an) et le Bund à Shanghai.',
          ar: 'عاصمة طريق الحرير بجيش التيراكوتا وواجهة البوند في شنغهاي.',
        },
        mapsQuery: 'Xian China',
      },
    ],
    monuments: [
      {
        id: 'cn-great-wall',
        name: { en: 'The Great Wall of China', fr: 'Grande Muraille de Chine', ar: 'سور الصين العظيم' },
        city: 'Beijing / Northern China',
        era: '7th Century BCE – 1644 CE',
        description: {
          en: 'Spanning over 21,000 kilometers across mountain ridges, built across dynasties—most visibly the Ming stone ramparts and beacon watchtowers.',
          fr: 'Édifice monumental de plus de 21 000 km serpentant sur les crêtes montagneuses, célèbre pour ses tours de guet de la dynastie Ming.',
          ar: 'أطول بناء دفاعي في تاريخ البشرية بطول يتجاوز 21 ألف كيلومتر من الأسوار وأبراج المراقبة الحجرية فوق الجبال.',
        },
        image: VOYAGO_IMAGES.china,
        mapsQuery: 'Great Wall of China Mutianyu Beijing',
      },
      {
        id: 'cn-forbidden-city',
        name: { en: 'Forbidden City & Terracotta Army', fr: 'Cité Interdite & Armée de Terre Cuite', ar: 'المدينة المحرمة وجيش التيراكوتا' },
        city: 'Beijing / Xi’an',
        era: '210 BCE & 1420 CE',
        description: {
          en: 'Imperial Ming-Qing palace complex of 980 wooden halls in Beijing and Emperor Qin’s life-sized clay army guarding Xi’an.',
          fr: 'Palais impérial aux 980 pavillons à Pékin et armée millénaire de guerriers en terre cuite à Xi’an.',
          ar: 'المجمع الإمبراطوري التاريخي في بكين وجيش المحاربين الفخاريين الأثري في شيآن.',
        },
        image: VOYAGO_IMAGES.china,
        mapsQuery: 'Forbidden City Beijing China',
      },
    ],
    dishes: [
      {
        name: { en: 'Peking Duck, Dim Sum & Hand-Pulled Noodles', fr: 'Canard laqué, Dim Sum & Nouilles', ar: 'بط بكين والديم سوم والنودلز' },
        category: { en: 'Imperial & Regional', fr: 'Cuisine impériale', ar: 'مطبخ صيني' },
        description: {
          en: 'Crisp lacquered roast duck, bamboo-steamed dumplings, and hand-stretched Lanzhou or Xi’an noodles.',
          fr: 'Canard laqué croustillant de Pékin, raviolis vapeur dim sum et nouilles tirées à la main.',
          ar: 'بط بكين المحمر وفطائر الديم سوم المطهوة على البخار والنودلز الصينية التقليدية.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Nǐ hǎo (你好)', pronunciation: 'Nee-how' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Xièxie (谢谢)', pronunciation: 'Shyeh-shyeh' },
    ],
  },
  {
    id: 'tanzania',
    code: 'TZ',
    flag: '🇹🇿',
    continent: 'africa',
    featured: true,
    subregion: { en: 'East Africa & Indian Ocean Bay', fr: 'Afrique de l’Est & Baie de l’Océan Indien', ar: 'شرق إفريقيا وخليج المحيط الهندي' },
    name: { en: 'Tanzania', fr: 'Tanzanie', ar: 'تنزانيا' },
    capital: { en: 'Dodoma', fr: 'Dodoma', ar: 'دودوما' },
    bestSeason: {
      en: 'June–October & December–February',
      fr: 'Juin–Octobre & Décembre–Février',
      ar: 'يونيو–أكتوبر وديسمبر–فبراير',
    },
    summary: {
      en: 'Historic coastal bays of Zanzibar Stone Town and medieval Kilwa Kisiwani, Mount Kilimanjaro, Serengeti plains, and warm Swahili spice hospitality.',
      fr: 'Baies historiques de Stone Town à Zanzibar et ruines médiévales de Kilwa Kisiwani, Kilimandjaro, Serengeti et cuisine swahilie parfumée.',
      ar: 'الخلجان التاريخية في ستون تاون بزنجبار وآثار كيلوا كيسيواني، قمة كليمنجارو، سهول سيرينغيتي، ومطبخ التوابل السواحيلي.',
    },
    wifiTips: {
      en: 'Vodacom and Airtel Tanzania 4G SIMs work along the coast and Arusha; Zanzibar bay hotels offer reliable Wi-Fi.',
      fr: 'Cartes SIM Vodacom et Airtel fiables à Zanzibar, Dar es Salaam et Arusha ; Wi-Fi dans les hôtels de la baie.',
      ar: 'شرائح Vodacom وAirtel توفر تغطية ممتازة في زنجبار وأروشا ودار السلام مع Wi-Fi في الفنادق الساحلية.',
    },
    heroImage: VOYAGO_IMAGES.tanzania,
    mapsQuery: 'Stone Town Zanzibar Bay Tanzania',
    currency: {
      code: 'TZS',
      symbol: 'TSh',
      name: { en: 'Tanzanian Shilling', fr: 'Shilling tanzanien', ar: 'الشلن التنزاني' },
      tips: {
        en: 'Carry TZS cash for spice markets, dhow boat rides, and cafés; USD bills printed after 2013 and cards work at hotels and parks.',
        fr: 'Prévoyez des shillings (TZS) pour les marchés aux épices et boutres traditionnels ; cartes acceptées dans les grands hôtels.',
        ar: 'احمل الشلن التنزاني للأسواق الشعبية ومراكب الداو، وتُقبل البطاقات في الفنادق والمنتزهات الوطنية.',
      },
    },
    cities: [
      {
        name: { en: 'Zanzibar (Stone Town Bay)', fr: 'Zanzibar (Baie de Stone Town)', ar: 'زنجبار (خليج ستون تاون)' },
        highlight: {
          en: 'Old Fort (Ngome Kongwe), House of Wonders, spice bazaars, and traditional dhow sailboats on the Indian Ocean bay.',
          fr: 'Vieux Fort (Ngome Kongwe), marchés aux épices et boutres traditionnels dans la baie de l’océan Indien.',
          ar: 'الحصن القديم، بيت العجائب، أسواق التوابل، ومراكب الداو الشراعية في خليج زنجبار.',
        },
        mapsQuery: 'Stone Town Zanzibar Tanzania',
      },
      {
        name: { en: 'Kilwa Kisiwani & Bagamoyo', fr: 'Kilwa Kisiwani & Bagamoyo', ar: 'كيلوا كيسيواني وباغامويو' },
        highlight: {
          en: 'Ancient Swahili stone sultanate bay ruins (9th–16th century) and historic coastal caravans.',
          fr: 'Vestiges médiévaux du sultanat swahili de Kilwa et port historique de Bagamoyo.',
          ar: 'آثار سلطنة كيلوا كيسيواني السواحلية التاريخية من القرن التاسع وميناء باغامويو العتيق.',
        },
        mapsQuery: 'Kilwa Kisiwani Tanzania',
      },
    ],
    monuments: [
      {
        id: 'tz-stone-town-bay',
        name: { en: 'Stone Town Old Fort & Zanzibar Bay', fr: 'Vieux Fort & Baie de Stone Town', ar: 'الحصن القديم وخليج ستون تاون' },
        city: 'Zanzibar',
        era: '1698–19th Century (Omani-Swahili)',
        description: {
          en: 'Coral-rag stone fort and seafront palaces lining Zanzibar’s historic harbor bay, where centuries of Swahili, Omani, and Indian Ocean maritime spice trade converged.',
          fr: 'Forteresse en pierre de corail et palais maritimes bordant la baie historique de Zanzibar, carrefour millénaire du commerce des épices.',
          ar: 'حصن تاريخي من الحجر المرجاني وقصور ساحلية تطل على خليج زنجبار الذي كان ملتقى التجارة البحرية والتوابل عبر المحيط الهندي.',
        },
        image: VOYAGO_IMAGES.tanzania,
        mapsQuery: 'Old Fort Stone Town Zanzibar Tanzania',
      },
      {
        id: 'tz-kilwa-kisiwani',
        name: { en: 'Ruins of Kilwa Kisiwani Bay', fr: 'Ruines de la baie de Kilwa Kisiwani', ar: 'آثار خليج كيلوا كيسيواني' },
        city: 'Kilwa Bay',
        era: '9th–16th Century CE',
        description: {
          en: 'UNESCO island bay ruins featuring the Great Mosque of Kilwa (built from coral stone in the 11th century) and Husuni Kubwa cliffside palace praised by Ibn Battuta in 1331.',
          fr: 'Cité portuaire médiévale classée à l’UNESCO avec sa Grande Mosquée du XIe siècle et le palais d’Husuni Kubwa décrit par Ibn Battuta en 1331.',
          ar: 'آثار مدينة كيلوا التاريخية المطلة على الخليج، وتضم المسجد الكبير من القرن الحادي عشر وقصر حسني كبرى الذي وصفه الرحالة ابن بطوطة عام 1331.',
        },
        image: VOYAGO_IMAGES.tanzania,
        mapsQuery: 'Kilwa Kisiwani Ruins Tanzania',
      },
    ],
    dishes: [
      {
        name: { en: 'Zanzibar Pilau, Urojo & Grilled Seafood', fr: 'Pilau de Zanzibar & Urojo', ar: 'أرز بيلاو زنجبار والمأكولات البحرية' },
        category: { en: 'Spice Island Kitchen', fr: 'Cuisine des épices', ar: 'مطبخ سواحيلي' },
        description: {
          en: 'Fragrant rice infused with Zanzibar cloves, cardamom, and cinnamon alongside coconut seafood curries and Forodhani bay grills.',
          fr: 'Riz parfumé aux clous de girofle et cardamome, currys au lait de coco et grillades sur la baie de Forodhani.',
          ar: 'أرز معطر بالقرنفل والهيل والقرفة مع كاري جوز الهند والمأكولات البحرية المشوية على الخليج.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Jambo / Habari', pronunciation: 'Jam-bo / Ha-ba-ri' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Asante sana', pronunciation: 'A-san-teh sa-na' },
    ],
  },
  {
    id: 'ethiopia',
    code: 'ET',
    flag: '🇪🇹',
    continent: 'africa',
    featured: true,
    subregion: { en: 'Horn of Africa', fr: 'Corne de l’Afrique', ar: 'القرن الإفريقي' },
    name: { en: 'Ethiopia', fr: 'Éthiopie', ar: 'إثيوبيا' },
    capital: { en: 'Addis Ababa', fr: 'Addis-Abeba', ar: 'أديس أبابا' },
    bestSeason: {
      en: 'October–March (Dry Highland Season)',
      fr: 'Octobre–Mars (Saison sèche des hauts plateaux)',
      ar: 'أكتوبر–مارس (موسم الجفاف المعتدل)',
    },
    summary: {
      en: 'Home to humanity’s oldest heritage: Lalibela’s 12th-century monolithic rock-hewn churches, Aksum’s 2,000-year-old granite stelae, Gondar’s castles, and the birthplace of coffee.',
      fr: 'L’un des berceaux de l’histoire mondiale : églises monolithiques de Lalibela (XIIe s.), obélisques millénaires d’Axoum, châteaux de Gondar et berceau du café.',
      ar: 'موطن أقدم الآثار البشرية: كنائس لاليبيلا المنحوتة في الصخر، مسلات أكسوم العتيقة، قلاع غوندار، ومهد القهوة العالمية.',
    },
    wifiTips: {
      en: 'Ethio Telecom and Safaricom Ethiopia SIM cards at Bole Airport cover Addis Ababa, Lalibela, and Gondar; hotels provide Wi-Fi.',
      fr: 'Cartes SIM Ethio Telecom et Safaricom disponibles à l’aéroport d’Addis-Abeba ; Wi-Fi dans les hôtels.',
      ar: 'تتوفر شرائح Ethio Telecom وSafaricom في مطار أديس أبابا مع خدمة Wi-Fi في الفنادق.',
    },
    heroImage: VOYAGO_IMAGES.ethiopia,
    mapsQuery: 'Lalibela Rock-Hewn Churches Ethiopia',
    currency: {
      code: 'ETB',
      symbol: 'Br',
      name: { en: 'Ethiopian Birr', fr: 'Birr éthiopien', ar: 'البير الإثيوبي' },
      tips: {
        en: 'Cash (ETB) is essential for local markets, guides, and coffee houses; major hotels and airlines accept international cards.',
        fr: 'L’espèce en Birr (ETB) est indispensable pour les visites, marchés et cérémonies du café ; cartes dans les grands hôtels.',
        ar: 'الدفع نقداً بالبير الإثيوبي أساسي في الأسواق والمطاعم المحلية، وتُقبل البطاقات في الفنادق الكبرى.',
      },
    },
    cities: [
      {
        name: { en: 'Lalibela', fr: 'Lalibela', ar: 'لاليبيلا' },
        highlight: {
          en: 'Eleven ancient churches chiseled downward from solid red volcanic rock in the 12th century.',
          fr: 'Onze églises monolithiques sculptées directement dans la roche volcanique rouge au XIIe siècle.',
          ar: 'إحدى عشرة كنيسة أثرية منحوتة من الأعلى إلى الأسفل داخل صخور بركانية صلبة في القرن الثاني عشر.',
        },
        mapsQuery: 'Lalibela Ethiopia',
      },
      {
        name: { en: 'Axum & Gondar', fr: 'Axoum & Gondar', ar: 'أكسوم وغوندار' },
        highlight: {
          en: '2,000-year-old Aksumite granite obelisks and Fasil Ghebbi imperial stone castles.',
          fr: 'Stèles granitiques bimillénaires d’Axoum et enceinte royale fortifiée de Fasil Ghebbi à Gondar.',
          ar: 'مسلات أكسوم الجرانيتية العائدة للألفية الأولى وقلعة فاسيل غيبي الملكية في غوندار.',
        },
        mapsQuery: 'Axum Ethiopia',
      },
    ],
    monuments: [
      {
        id: 'et-lalibela',
        name: { en: 'Bete Giyorgis & Lalibela Rock Churches', fr: 'Bete Giyorgis & Églises de Lalibela', ar: 'كنيسة بيت غيورغيس في لاليبيلا' },
        city: 'Lalibela',
        era: 'Late 12th – Early 13th Century CE',
        description: {
          en: 'Carved from a single living block of red volcanic tuff into a 12-meter deep pit, Bete Giyorgis stands among the most extraordinary ancient architectural feats on Earth.',
          fr: 'Taillée d’un seul bloc dans le tuf volcanique rouge au fond d’une fosse de 12 mètres, Bete Giyorgis est l’un des chefs-d’œuvre les plus anciens et extraordinaires au monde.',
          ar: 'تحفة معمارية أثرية فريدة منحوتة من كتلة صخرية بركانية واحدة داخل حفرة بعمق 12 متراً منذ القرن الثاني عشر.',
        },
        image: VOYAGO_IMAGES.ethiopia,
        mapsQuery: 'Church of Saint George Lalibela Ethiopia',
      },
      {
        id: 'et-aksum-gondar',
        name: { en: 'Stelae of Aksum & Fasil Ghebbi', fr: 'Obélisques d’Axoum & Fasil Ghebbi', ar: 'مسلات أكسوم وقلعة غوندار' },
        city: 'Axum / Gondar',
        era: '1st–4th Century CE & 1636 CE',
        description: {
          en: 'Towering carved granite monoliths of the ancient Kingdom of Aksum (1st–4th century CE) paired with Emperor Fasilides’ 17th-century fortified stone castles.',
          fr: 'Monolithes antiques de l’Empire d’Axoum (Ier–IVe s.) et forteresse impériale de Gondar du XVIIe siècle.',
          ar: 'مسلات مملكة أكسوم التاريخية من القرن الأول إلى الرابع الميلادي وقلاع غوندار الحجرية من القرن السابع عشر.',
        },
        image: VOYAGO_IMAGES.ethiopia,
        mapsQuery: 'Northern Stelae Park Axum Ethiopia',
      },
    ],
    dishes: [
      {
        name: { en: 'Injera, Doro Wat & Coffee Ceremony', fr: 'Injera, Doro Wat & Cérémonie du Café', ar: 'الإنجيرا والدورو وات والقهوة الإثيوبية' },
        category: { en: 'Ancient Hospitality', fr: 'Tradition millénaire', ar: 'تراث وضيافة' },
        description: {
          en: 'Tangy fermented teff sourdough flatbread topped with berbere-spiced chicken stew and freshly pan-roasted Ethiopian Arabica coffee.',
          fr: 'Galette de teff fermentée garnie de ragoût épicé au berbéré et café Arabica torréfié sur place.',
          ar: 'خبز الإنجيرا التقليدي من حبوب التيف مع يخنة الدجاج المتبلة ومراسم تحميص القهوة الإثيوبية الأصلية.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Selam', pronunciation: 'Se-lam' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Ameseginalehu', pronunciation: 'A-me-se-gi-na-le-hu' },
    ],
  },
  {
    id: 'belgium',
    code: 'BE',
    flag: '🇧🇪',
    continent: 'europe',
    featured: true,
    subregion: { en: 'Western Europe', fr: 'Europe de l’Ouest', ar: 'أوروبا الغربية' },
    name: { en: 'Belgium', fr: 'Belgique', ar: 'بلجيكا' },
    capital: { en: 'Brussels', fr: 'Bruxelles', ar: 'بروكسل' },
    bestSeason: {
      en: 'April–June & September–October',
      fr: 'Avril–Juin & Septembre–Octobre',
      ar: 'أبريل–يونيو وسبتمبر–أكتوبر',
    },
    summary: {
      en: 'Gilded guildhalls on Brussels’ Grand-Place, the gleaming steel Atomium, fairytale medieval canals in Bruges, and world-famous waffles and chocolate.',
      fr: 'Maisons de corporations dorées de la Grand-Place à Bruxelles, l’Atomium emblématique, canaux médiévaux de Bruges, gaufres et chocolats d’exception.',
      ar: 'الساحة الكبرى المذهبة ومعلم الأتوميوم في بروكسل، قنوات بروج التاريخية من العصور الوسطى، والوافل والشوكولاتة البلجيكية الشهيرة.',
    },
    wifiTips: {
      en: 'Proximus, Orange BE, and EU roaming eSIMs provide strong 5G; Brussels Midi, hotels, and cafés offer free Wi-Fi.',
      fr: 'Proximus, Orange BE et les eSIM européennes offrent la 5G partout ; Wi-Fi gratuit dans les gares, hôtels et cafés.',
      ar: 'توفر شبكات Proximus وOrange تغطية 5G قوية مع شرائح التجوال الأوروبية، وWi-Fi مجاني في الفنادق والمحطات.',
    },
    heroImage: VOYAGO_IMAGES.belgium,
    mapsQuery: 'Grand-Place Brussels Belgium',
    currency: {
      code: 'EUR',
      symbol: '€',
      name: { en: 'Euro', fr: 'Euro', ar: 'اليورو' },
      tips: {
        en: 'Contactless Visa/Mastercard and Apple/Google Pay are accepted everywhere; keep €20–€40 cash for small market stalls and waffle stands.',
        fr: 'Cartes sans contact acceptées partout ; gardez 20 à 40 € en espèces pour les petits marchés et stands de gaufres.',
        ar: 'الدفع بالبطاقات واللمس مقبول في كل مكان تقريباً، يُنصح بحمل مبلغ نقدي بسيط للأسواق والأكشاك.',
      },
    },
    cities: [
      {
        name: { en: 'Brussels', fr: 'Bruxelles', ar: 'بروكسل' },
        highlight: {
          en: 'UNESCO Grand-Place, Atomium steel spheres, Royal Palace, and Sablon chocolatiers.',
          fr: 'Grand-Place UNESCO, Atomium, Palais Royal et chocolatiers du Sablon.',
          ar: 'الساحة الكبرى التراثية، معلم الأتوميوم، القصر الملكي، ومتاجر الشوكولاتة.',
        },
        mapsQuery: 'Brussels Belgium',
      },
      {
        name: { en: 'Bruges & Ghent', fr: 'Bruges & Gand', ar: 'بروج وغنت' },
        highlight: {
          en: '83-meter Medieval Belfry, cobbled canal bridges, Gravensteen Castle, and Flemish art.',
          fr: 'Beffroi médiéval de 83 mètres, canaux romantiques, château des Comtes et art flamand.',
          ar: 'برج بروج التاريخي، القنوات المائية العتيقة، وقلعة غرافينستين في غنت.',
        },
        mapsQuery: 'Bruges Belgium',
      },
    ],
    monuments: [
      {
        id: 'be-grand-place',
        name: { en: 'Grand-Place & Belfry of Bruges', fr: 'Grand-Place & Beffroi de Bruges', ar: 'الساحة الكبرى ببروكسل وبرج بروج' },
        city: 'Brussels / Bruges',
        era: '15th–17th Century (1695 UNESCO)',
        description: {
          en: 'Ornate Baroque and Gothic guildhalls alongside the 96-meter Town Hall spire in Brussels’ historic square, paired with Bruges’ 13th-century 83-meter medieval Belfry.',
          fr: 'Somptueuses maisons de corporations baroques et flèche gothique de 96 m sur la Grand-Place de Bruxelles, accompagnées du beffroi médiéval de Bruges.',
          ar: 'قصور النقابات المذهبة وبرج البلدية القوطي في قلب بروكسل المصنف في اليونسكو، مع برج بروج الحجري من القرن الثالث عشر.',
        },
        image: VOYAGO_IMAGES.belgium,
        mapsQuery: 'Grand Place Brussels Belgium',
      },
      {
        id: 'be-atomium',
        name: { en: 'The Atomium', fr: 'L’Atomium de Bruxelles', ar: 'معلم الأتوميوم في بروكسل' },
        city: 'Brussels',
        era: '1958 (Expo 58 Modern Landmark)',
        description: {
          en: 'Standing 102 meters tall in Heysel Park, its nine stainless-steel spheres form a 165-billion-times magnified iron crystal uniting exhibitions and panoramic city views.',
          fr: 'Haut de 102 mètres au parc du Heysel, ses neuf sphères d’acier représentent un cristal de fer agrandi 165 milliards de fois avec vue panoramique sur Bruxelles.',
          ar: 'أيقونة بلجيكا الحديثة بارتفاع 102 متر، يتكون من تسع كرات فولاذية مترابطة تمنح إطلالة بانورامية خلابة على بروكسل.',
        },
        image: VOYAGO_IMAGES.belgiumAtomium,
        mapsQuery: 'Atomium Brussels Belgium',
      },
    ],
    dishes: [
      {
        name: { en: 'Liège Waffles, Moules-Frites & Pralines', fr: 'Gaufres de Liège, Moules-frites & Pralines', ar: 'الوافل البلجيكي والشوكولاتة والبطاطس' },
        category: { en: 'Belgian Classics', fr: 'Spécialités belges', ar: 'مأكولات بلجيكية' },
        description: {
          en: 'Pearl-sugar caramelized waffles, twice-fried golden Belgian fries, steamed mussels, and handmade Brussels chocolate pralines.',
          fr: 'Gaufres chaudes au sucre perlé caramélisé, frites belges dorées en double cuisson et pralines artisanales.',
          ar: 'وافل ساخن بالسكر المكرمل والبطاطس البلجيكية المقرمشة والشوكولاتة الفاخرة.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Bonjour / Hallo', pronunciation: 'Bon-zhoor / Ha-lo' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Merci / Dank u wel', pronunciation: 'Mer-see / Dank oo vel' },
    ],
  },
  {
    id: 'germany',
    code: 'DE',
    flag: '🇩🇪',
    continent: 'europe',
    featured: true,
    subregion: { en: 'Central Europe', fr: 'Europe centrale', ar: 'أوروبا الوسطى' },
    name: { en: 'Germany', fr: 'Allemagne', ar: 'ألمانيا' },
    capital: { en: 'Berlin', fr: 'Berlin', ar: 'برلين' },
    bestSeason: {
      en: 'May–September & December (Christmas Markets)',
      fr: 'Mai–Septembre & Décembre (Marchés de Noël)',
      ar: 'ماي–سبتمبر وديسمبر (أسواق الشتاء)',
    },
    summary: {
      en: 'From Berlin’s neoclassical Brandenburg Gate and Museum Island to Bavaria’s Alpine Neuschwanstein Castle, Cologne Cathedral, and scenic Rhine fortresses.',
      fr: 'De la porte de Brandebourg et l’île aux Musées à Berlin jusqu’au château féerique de Neuschwanstein en Bavière, la cathédrale de Cologne et la vallée du Rhin.',
      ar: 'من بوابة براندنبورغ التاريخية وجزيرة المتاحف في برلين إلى قصر نويشفانشتاين الأسطوري في جبال الألب البافارية وكاتدرائية كولونيا.',
    },
    wifiTips: {
      en: 'Telekom, Vodafone DE, and O2 offer fast 5G; ICE high-speed trains and city squares provide free Wi-Fi.',
      fr: 'Réseaux 5G Telekom et Vodafone DE très performants ; Wi-Fi gratuit à bord des trains ICE et dans les gares.',
      ar: 'توفر شبكات Telekom وVodafone تغطية 5G ممتازة مع Wi-Fi مجاني في قطارات ICE السريعة والفنادق.',
    },
    heroImage: VOYAGO_IMAGES.germany,
    mapsQuery: 'Brandenburg Gate Berlin Germany',
    currency: {
      code: 'EUR',
      symbol: '€',
      name: { en: 'Euro', fr: 'Euro', ar: 'اليورو' },
      tips: {
        en: 'Cards work cleanly in cities, hotels, and transit; carry some EUR cash (€30–€50) as traditional bakeries and street stalls often prefer cash.',
        fr: 'Cartes acceptées dans les hôtels et grandes villes ; gardez un peu de liquide (30–50 €) pour les boulangeries et marchés traditionnels.',
        ar: 'تُقبل البطاقات في المدن والفنادق، لكن يُستحسن حمل بعض اليورو النقدي للمخابز والأسواق الشعبية.',
      },
    },
    cities: [
      {
        name: { en: 'Berlin', fr: 'Berlin', ar: 'برلين' },
        highlight: {
          en: 'Brandenburg Gate, Reichstag glass dome, Museum Island, and East Side Gallery.',
          fr: 'Porte de Brandebourg, coupole du Reichstag, île aux Musées et East Side Gallery.',
          ar: 'بوابة براندنبورغ، قبة الرايخستاغ، جزيرة المتاحف، وبقايا جدار برلين التاريخي.',
        },
        mapsQuery: 'Berlin Germany',
      },
      {
        name: { en: 'Munich & Bavaria', fr: 'Munich & Bavière', ar: 'ميونخ وبافاريا' },
        highlight: {
          en: 'Marienplatz Glockenspiel, Neuschwanstein Alpine Castle, and Romantic Road towns.',
          fr: 'Marienplatz, château alpin de Neuschwanstein et villages de la Route romantique.',
          ar: 'ساحة مارينبلاتز في ميونخ وقصر نويشفانشتاين الجبلي والطريق الرومانسي.',
        },
        mapsQuery: 'Munich Bavaria Germany',
      },
      {
        name: { en: 'Cologne & Heidelberg', fr: 'Cologne & Heidelberg', ar: 'كولونيا وهايدلبرغ' },
        highlight: {
          en: 'Twin-spired Gothic Cologne Cathedral on the Rhine and Heidelberg’s hilltop Renaissance castle.',
          fr: 'Cathédrale gothique de Cologne sur le Rhin et château Renaissance de Heidelberg.',
          ar: 'كاتدرائية كولونيا القوطية على نهر الراين وقلعة هايدلبرغ التاريخية.',
        },
        mapsQuery: 'Cologne Cathedral Germany',
      },
    ],
    monuments: [
      {
        id: 'de-brandenburg-gate',
        name: { en: 'Brandenburg Gate', fr: 'Porte de Brandebourg', ar: 'بوابة براندنبورغ' },
        city: 'Berlin',
        era: '1788–1791 (Neoclassical)',
        description: {
          en: 'Commissioned by King Frederick William II and crowned by the bronze Quadriga chariot, Berlin’s 18th-century sandstone monument stands today as Europe’s symbol of unity.',
          fr: 'Érigée entre 1788 et 1791 et surmontée du quadrige de bronze, la porte néoclassique de Berlin est devenue le symbole emblématique de l’unité européenne.',
          ar: 'شُيدت بين 1788 و1791 بالحجر الرملي وتعلوها عربة كوادريغا البرونزية، وتعد أبرز معالم برلين ورمزاً للوحدة الأوروبية.',
        },
        image: VOYAGO_IMAGES.germany,
        mapsQuery: 'Brandenburg Gate Berlin Germany',
      },
      {
        id: 'de-neuschwanstein',
        name: { en: 'Neuschwanstein Castle', fr: 'Château de Neuschwanstein', ar: 'قلعة نويشفانشتاين' },
        city: 'Schwangau / Bavaria',
        era: '1869–1886 (Romanesque Revival)',
        description: {
          en: 'Built by King Ludwig II atop a rugged Bavarian Alpine cliff above Alpsee Lake, this fairy-tale white limestone palace is among Germany’s most photographed historic landmarks.',
          fr: 'Bâti par le roi Louis II de Bavière sur un éperon rocheux des Alpes au-dessus du lac Alpsee, ce palais de calcaire blanc aux flèches élancées est le joyau de l’Allemagne.',
          ar: 'قصر ملكي مبني فوق جرف صخري في جبال الألب البافارية بتصميم رومانسي مذهل وأبراج بيضاء تطل على البحيرات.',
        },
        image: VOYAGO_IMAGES.germanyCastle,
        mapsQuery: 'Neuschwanstein Castle Germany',
      },
    ],
    dishes: [
      {
        name: { en: 'Bavarian Pretzel, Schnitzel & Apple Strudel', fr: 'Bretzel, Escalope & Strudel aux pommes', ar: 'بريتزل بافاري وشنيتزل وشترودل التفاح' },
        category: { en: 'Traditional & Bakery', fr: 'Cuisine & Boulangerie', ar: 'مطبخ تقليدي' },
        description: {
          en: 'Crisp salt-crusted pretzels, golden breaded schnitzel, Spätzle egg noodles, Berlin currywurst, and warm Apfelstrudel.',
          fr: 'Bretzels chauds au gros sel, schnitzel dorée, nouilles Spätzle, currywurst berlinoise et strudel aux pommes.',
          ar: 'خبز البريتزل المملح، الشنيتزل المقرمش، معجنات شترودل التفاح الدافئة، ومأكولات برلين وميونخ التقليدية.',
        },
      },
    ],
    phrases: [
      { label: { en: 'Hello', fr: 'Bonjour', ar: 'مرحباً' }, local: 'Guten Tag / Hallo', pronunciation: 'Goo-ten tahg / Ha-lo' },
      { label: { en: 'Thank you', fr: 'Merci', ar: 'شكراً' }, local: 'Danke schön', pronunciation: 'Dan-keh shurn' },
    ],
  },
];
