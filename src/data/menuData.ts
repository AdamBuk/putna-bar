import type { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Signature Drinky
  {
    id: 'putna-velvet',
    name: 'Putna Velvet',
    category: 'signatures',
    description: 'Naše vlajková loď. Infuzovaný ostružinový gin, likér z fialek, čerstvá limeta a hedvábná pěna z bílků s kapkou levandulového kouře.',
    ingredients: ['Blackberry Gin', 'Violette liqueur', 'Lime juice', 'Egg white', 'Lavender mist'],
    price: '185 Kč',
    volume: '160 ml',
    badge: 'Signature House Drink',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Sametový', 'Ostružiny', 'Květinový', 'Svěží']
  },
  {
    id: 'salon-kralove',
    name: 'Salon Králové',
    category: 'signatures',
    description: 'Pocta Hradci Králové. Bourbon stařený na dubových chipsech, javorový sirup s tymiánem, kapka Angostury a sušený pomeranč s jedlým zlatem.',
    ingredients: ['Oaked Bourbon', 'Thyme Maple', 'Angostura Bitters', 'Orange oils', 'Gold dust'],
    price: '195 Kč',
    volume: '120 ml',
    badge: 'Specialita šéfbarmana',
    image: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Dřevitý', 'Hřejivý', 'Karamel', 'Silný']
  },
  {
    id: 'neon-sunset',
    name: 'Neon Sunset',
    category: 'signatures',
    description: 'Zářivý gradient chutí. Bílý rum, marakujové pyré, Campari redukce, yuzu soda a čerstvý plamenem ožehnutý rozmarýn.',
    ingredients: ['White Rum', 'Passion Fruit Puree', 'Campari reduction', 'Yuzu soda', 'Charred rosemary'],
    price: '175 Kč',
    volume: '220 ml',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1574056067201-ac0117ac513a?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Tropický', 'Hořkosladký', 'Osvěžující']
  },
  {
    id: 'bohemian-botanist',
    name: 'Bohemian Botanist',
    category: 'signatures',
    description: 'Výběrový lokální gin, cordial z černého bezu, okurkový extrakt, limetová šťáva a dotek růžového pepře.',
    ingredients: ['Craft Bohemian Gin', 'Elderflower cordial', 'Cucumber extract', 'Pink peppercorn'],
    price: '175 Kč',
    volume: '180 ml',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Bylinný', 'Okurka', 'Crisp & Clean']
  },

  // Moderní Koktejly
  {
    id: 'smoked-old-fashioned',
    name: 'Smoked Old Fashioned',
    category: 'cocktails',
    description: 'Legendární klasika v moderním pojetí. Rye Whiskey infuzovaná třešňovým kouřem přímo u vašeho stolu s ručně sekaným křišťálovým ledem.',
    ingredients: ['Rye Whiskey', 'Demerara sirup', 'Aromatic Bitters', 'Cherrywood smoke'],
    price: '185 Kč',
    volume: '110 ml',
    badge: 'Zážitkový servis',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Kouřový', 'Kořeněný', 'Silný', 'Komplexní']
  },
  {
    id: 'pornstar-martini',
    name: 'Pornstar Martini Royale',
    category: 'cocktails',
    description: 'Vanilková vodka, marakujový likér Passoa, čerstvá limeta a vanilkový cukr. Podáváno se sklenkou Prosecca pro dokonalý rituál.',
    ingredients: ['Vanilla Vodka', 'Passoã', 'Passion fruit', 'Vanilla syrup', 'Side of Prosecco'],
    price: '180 Kč',
    volume: '150 ml + 50 ml',
    badge: 'Oblíbené',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Sladkokyselý', 'Exotický', 'Šumivý']
  },
  {
    id: 'spicy-mezcalita',
    name: 'Spicy Ruby Mezcalita',
    category: 'cocktails',
    description: 'Řemeslný kouřový mezcal, čerstvý grepový džus, agave, kapka jalapeño tinktury a vulkanická kouřová sůl na okraji sklenice.',
    ingredients: ['Artisanal Mezcal', 'Grapefruit', 'Jalapeño extract', 'Agave nectar', 'Black volcanic salt'],
    price: '185 Kč',
    volume: '160 ml',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Pikantní', 'Kouřový', 'Citrusový']
  },
  {
    id: 'basil-smash',
    name: 'Gin Basil Smash',
    category: 'cocktails',
    description: 'Hromada čerstvé bazalky drcená s prémiovým suchým ginem, čerstvou citronovou šťávou a jemným cukrovým sirupem. Smaragdově zelený osvěžující zážitek.',
    ingredients: ['Dry Gin', 'Fresh Basil bouquet', 'Lemon juice', 'Sugar syrup'],
    price: '165 Kč',
    volume: '150 ml',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Svěží', 'Bylinkový', 'Citrusový']
  },
  {
    id: 'espresso-martini',
    name: 'Velvet Espresso Martini',
    category: 'cocktails',
    description: 'Čerstvě extrahované espresso z výběrové arabiky z lokální pražírny, vodka, kávový likér Kahlúa a kapka čokoládového bitteru.',
    ingredients: ['Single Origin Espresso', 'Vodka', 'Kahlúa', 'Chocolate Bitters'],
    price: '170 Kč',
    volume: '130 ml',
    image: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Kávový', 'Čokoláda', 'Hladký', 'Povzbuzující']
  },
  {
    id: 'negroni-sbagliato',
    name: 'Negroni Sbagliato & Classico',
    category: 'cocktails',
    description: 'Campari, červený sladký vermut Carpano Antica Formula a podle vaší chuti buď London Dry Gin nebo italské Prosecco DOC.',
    ingredients: ['Campari', 'Carpano Antica Formula', 'Gin / Prosecco', 'Orange peel'],
    price: '175 Kč',
    volume: '120 ml',
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Hořký', 'Bylinný', 'Elegantní']
  },

  // Čepované Pivo & Cafe
  {
    id: 'pivo-lezak',
    name: 'Čepovaný Prémiový Ležák',
    category: 'beer-cafe',
    description: 'Perfektně ošetřené čepované pivo s hustou krémovou pěnou. Hladinka, šnyt nebo mlíko načepované s maximální baristickou a výčepní péčí.',
    ingredients: ['Moravský slad', 'Žatecký poloraný červeňák', 'Horská voda'],
    price: '62 Kč',
    volume: '0.5 l',
    badge: 'Na čepu',
    image: 'https://images.unsplash.com/photo-1608278049684-25a2e5d774f0?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Chmelový', 'Plné tělo', 'Jemný říz']
  },
  {
    id: 'craft-ipa',
    name: 'Rotující Řemeslný Speciál (IPA / ALE)',
    category: 'beer-cafe',
    description: 'Pravidelně obměňovaný čepovaný craft speciál z předních českých i zahraničních minipivovarů plný tropických chmelových tónů.',
    ingredients: ['Výběrové aromatické chmely', 'Craft kvasnice'],
    price: '79 Kč',
    volume: '0.4 l',
    badge: 'Craft Special',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Citrusové chmely', 'Pryskyřice', 'Střední hořkost']
  },
  {
    id: 'espresso-tonic',
    name: 'Espresso Tonic Signature',
    category: 'beer-cafe',
    description: 'Dvojité espresso ze 100% výběrové Arabiky na prémiovém toniku Thomas Henry s plátkem růžového grepu a snítkou tymiánu.',
    ingredients: ['Specialty Coffee Double Shot', 'Thomas Henry Tonic', 'Pink grapefruit', 'Thyme'],
    price: '115 Kč',
    volume: '250 ml',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    flavorNotes: ['Osvěžující', 'Ovocné tóny kávy', 'Jemná hořkost']
  }
];

export const BAR_VIBES = [
  {
    title: 'Útulná Atmosféra',
    tag: 'Cozy & Atmospheric',
    description: 'Tlumené ambientní osvětlení, pohodlná křesílka a hudba, která dotváří perfektní kulisu pro váš večer, schůzku i oslavu.',
    icon: 'Sparkles',
    accent: 'pink'
  },
  {
    title: 'Profesionální Servis',
    tag: 'Master Mixology',
    description: 'Náš tým barmanů žije koktejlovou kulturou. Rádi vám namícháme drink na míru podle vašich preferencí a momentální nálady.',
    icon: 'GlassWater',
    accent: 'purple'
  },
  {
    title: 'Letní Venkovní Zahrádka',
    tag: 'Outdoor Seating',
    description: 'Posaďte se v klidném zákoutí historické ulice Tomkova v srdci starého města. Oáza klidu uprostřed Hradce Králové.',
    icon: 'SunMedium',
    accent: 'amber'
  },
  {
    title: 'Dog Friendly Policy',
    tag: 'Mazlíčci Vítáni',
    description: 'Vaši čtyřnozí parťáci jsou u nás vřele vítáni. Miska s čerstvou vodou a přátelský přístup je pro nás samozřejmostí.',
    icon: 'HeartHandshake',
    accent: 'pink'
  }
];
