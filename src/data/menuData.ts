import type { MenuItem } from '../types';
import { BAR_IMAGES } from '../config/images';

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
    image: BAR_IMAGES.menu.putnaVelvet,
    flavorNotes: ['Sametový', 'Ostružiny', 'Květinový', 'Svěží']
  },
  {
    id: 'salon-kralove',
    name: 'Salon Králové',
    category: 'signatures',
    description: 'Pocta Hradci Králové. Bourbon stařený na dubových chipsech, javorový sirup s tymiánem, kapka Angostury a sušený pomeranč.',
    ingredients: ['Oaked Bourbon', 'Thyme Maple', 'Angostura Bitters', 'Orange oils'],
    price: '195 Kč',
    volume: '120 ml',
    badge: 'Specialita podniku',
    image: BAR_IMAGES.menu.salonKralove,
    flavorNotes: ['Dřevitý', 'Hřejivý', 'Karamel', 'Silný']
  },
  {
    id: 'sunset-cocktail',
    name: 'Putna Sunset',
    category: 'signatures',
    description: 'Zářivý teplý koktejl. Bílý rum, marakujové pyré, Campari redukce, yuzu soda a čerstvý plamenem ožehnutý rozmarýn.',
    ingredients: ['White Rum', 'Passion Fruit Puree', 'Campari reduction', 'Yuzu soda', 'Charred rosemary'],
    price: '175 Kč',
    volume: '220 ml',
    badge: 'Oblíbené',
    image: BAR_IMAGES.menu.neonSunset,
    flavorNotes: ['Tropický', 'Hořkosladký', 'Osvěžující']
  },

  // Moderní Koktejly
  {
    id: 'smoked-old-fashioned',
    name: 'Smoked Old Fashioned',
    category: 'cocktails',
    description: 'Legendární klasika v elegantním pojetí. Rye Whiskey infuzovaná třešňovým dřevem přímo u stolu s ručně sekaným křišťálovým ledem.',
    ingredients: ['Rye Whiskey', 'Demerara sirup', 'Aromatic Bitters', 'Cherrywood smoke'],
    price: '185 Kč',
    volume: '110 ml',
    badge: 'Zážitkový servis',
    image: BAR_IMAGES.menu.oldFashioned,
    flavorNotes: ['Kouřový', 'Kořeněný', 'Silný', 'Komplexní']
  },
  {
    id: 'espresso-martini',
    name: 'Velvet Espresso Martini',
    category: 'cocktails',
    description: 'Čerstvě extrahované espresso z výběrové arabiky z lokální pražírny, vodka, kávový likér Kahlúa a kapka čokoládového bitteru.',
    ingredients: ['Single Origin Espresso', 'Vodka', 'Kahlúa', 'Chocolate Bitters'],
    price: '170 Kč',
    volume: '130 ml',
    badge: 'Kávový rituál',
    image: BAR_IMAGES.menu.espressoMartini,
    flavorNotes: ['Kávový', 'Čokoláda', 'Hladký', 'Povzbuzující']
  },
  {
    id: 'basil-smash',
    name: 'Gin Basil Smash',
    category: 'cocktails',
    description: 'Hromada čerstvé bazalky drcená s prémiovým suchým ginem, čerstvou citronovou šťávou a jemným cukrovým sirupem.',
    ingredients: ['Dry Gin', 'Fresh Basil bouquet', 'Lemon juice', 'Sugar syrup'],
    price: '165 Kč',
    volume: '150 ml',
    image: BAR_IMAGES.menu.basilSmash,
    flavorNotes: ['Svěží', 'Bylinkový', 'Citrusový']
  },

  // Čepované Pivo & Cafe
  {
    id: 'pivo-lezak',
    name: 'Čepovaný Prémiový Ležák',
    category: 'beer-cafe',
    description: 'Perfektně ošetřené čepované pivo s hustou krémovou pěnou. Hladinka, šnyt nebo mlíko načepované s maximální výčepní péčí.',
    ingredients: ['Moravský slad', 'Žatecký poloraný červeňák', 'Horská voda'],
    price: '62 Kč',
    volume: '0.5 l',
    badge: 'Na čepu',
    image: BAR_IMAGES.menu.draftBeer,
    flavorNotes: ['Chmelový', 'Plné tělo', 'Jemný říz']
  },
  {
    id: 'espresso-tonic',
    name: 'Espresso Tonic Signature',
    category: 'beer-cafe',
    description: 'Dvojité espresso ze 100% výběrové Arabiky na prémiovém toniku Thomas Henry s plátkem růžového grepu a snítkou tymiánu.',
    ingredients: ['Specialty Coffee Double Shot', 'Thomas Henry Tonic', 'Pink grapefruit', 'Thyme'],
    price: '115 Kč',
    volume: '250 ml',
    badge: 'Výběrová káva',
    image: BAR_IMAGES.menu.espressoTonic,
    flavorNotes: ['Osvěžující', 'Ovocné tóny kávy', 'Jemná hořkost']
  }
];

export const BAR_VIBES = [
  {
    title: 'Útulná & Eklektická Atmosféra',
    tag: 'Cozy Living Room Vibe',
    description: 'Pohodlná ratanová křesílka, barevné stěny a teplé ambientní osvětlení žárovek vytvářejí pocit jako v útulném obýváku.',
    icon: 'Sparkles',
  },
  {
    title: 'Kavárna ve dne, Koktejlový bar v noci',
    tag: 'Cafe & Night Bar',
    description: 'Přes den klidné útočiště na výběrovou kávu, limonádu nebo práci, večer pulzující prostor pro skvělé drinky a setkání.',
    icon: 'Coffee',
  },
  {
    title: 'Letní Venkovní Zahrádka',
    tag: 'Tomkova Ulice',
    description: 'Klidné posezení na zahrádce v historickém zákoutí starého Hradce Králové, kousek od Velkého náměstí.',
    icon: 'SunMedium',
  },
  {
    title: 'Dog Friendly Přístup',
    tag: 'Pejsci Vítáni',
    description: 'Vaši čtyřnozí parťáci jsou u nás vřele vítáni. Miska s čerstvou vodou a úsměv personálu jsou samozřejmostí.',
    icon: 'Heart',
  }
];
