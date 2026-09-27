import type { MenuItem } from '../types';
import { BAR_IMAGES } from '../config/images';

export const MENU_ITEMS: MenuItem[] = [
  // Signature Drinky Putna Bar
  {
    id: 'putna-velvet',
    name: 'Putna Velvet',
    category: 'signatures',
    description: 'Naše vlajková loď. Ostružinový gin, likér z fialek, čerstvá limetka, kapka levandulového kouře a snítka tymiánu s čerstvou ostružinou.',
    ingredients: ['Blackberry Gin', 'Violette Liqueur', 'Lime', 'Lavender mist', 'Fresh Blackberry & Thyme'],
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
    description: 'Pocta Hradci Králové. Prémiový bourbon infuzovaný dubovým dřevem, javorový sirup s tymiánem, kapka Angostury, led a třešnička na jehle.',
    ingredients: ['Oaked Bourbon', 'Thyme Maple', 'Angostura Bitters', 'Lemon Twist', 'Cocktail Cherry'],
    price: '195 Kč',
    volume: '120 ml',
    badge: 'Specialita podniku',
    image: BAR_IMAGES.menu.salonKralove,
    flavorNotes: ['Dřevitý', 'Hřejivý', 'Karamel', 'Silný']
  },
  {
    id: 'putna-sunset',
    name: 'Putna Sunset Spritz',
    category: 'signatures',
    description: 'Zářivý aperitiv. Ramazzotti Aperitivo Arancia, prémiový Riviera tonik, led a šťavnatý plátek pomeranče.',
    ingredients: ['Ramazzotti Arancia', 'Riviera Tonic', 'Orange Slice', 'Craft Ice'],
    price: '165 Kč',
    volume: '220 ml',
    badge: 'Letní Bestseller',
    image: BAR_IMAGES.menu.putnaSunset,
    flavorNotes: ['Pomeranč', 'Hořkosladký', 'Osvěžující']
  },
  {
    id: 'italicus-spritz',
    name: 'Italicus Bergamotto Spritz',
    category: 'signatures',
    description: 'Královský italský bergamotový likér Italicus Rosolio di Bergamotto s proseccem, zelenými olivami a čerstvým rozmarýnem.',
    ingredients: ['Italicus Bergamotto', 'Prosecco DOC', 'Green Olives', 'Fresh Rosemary'],
    price: '185 Kč',
    volume: '200 ml',
    badge: 'Oblíbené',
    image: BAR_IMAGES.menu.italicusSpritz,
    flavorNotes: ['Bergamot', 'Bylinný', 'Středomořský', 'Suchý']
  },
  {
    id: 'lavender-gin',
    name: 'Violette & Lavender Gin',
    category: 'signatures',
    description: 'Podmanivý levandulově fialový gin spritz s jemným tónem citrusové kůry, aromatickým rozmarýnem a jemnými bublinkami.',
    ingredients: ['Empress/Violette Gin', 'Tonic', 'Orange Peel', 'Charred Rosemary'],
    price: '175 Kč',
    volume: '200 ml',
    image: BAR_IMAGES.menu.lavenderGin,
    flavorNotes: ['Květinový', 'Bylinkový', 'Jemný', 'Svěží']
  },

  // Klasické & Moderní Koktejly
  {
    id: 'lillet-rose-spritz',
    name: 'Lillet Rosé Spritz',
    category: 'cocktails',
    description: 'Jemný francouzský vinný aperitiv Lillet Rosé na ledu se sodou, růžovým tonikem a čerstvým pomerančem.',
    ingredients: ['Lillet Rosé', 'Tonic / Soda', 'Orange wedge', 'Ice'],
    price: '165 Kč',
    volume: '200 ml',
    badge: 'Aperitif',
    image: BAR_IMAGES.menu.lilletRose,
    flavorNotes: ['Ovocný', 'Vinné tóny', 'Lehký', 'Osvěžující']
  },
  {
    id: 'moscow-mule',
    name: 'Putna Moscow Mule',
    category: 'cocktails',
    description: 'Servírováno v poctivém nerezovém mugu. Absolut Vodka, zázvorové pivo, limetová šťáva, sušená limetka a čerstvý rozmarýn.',
    ingredients: ['Absolut Vodka', 'Ginger Beer', 'Lime juice', 'Dried Lime wheel', 'Rosemary'],
    price: '170 Kč',
    volume: '180 ml',
    badge: 'Klasika',
    image: BAR_IMAGES.menu.moscowMule,
    flavorNotes: ['Pikantní zázvor', 'Limetka', 'Ledově osvěžující']
  },
  {
    id: 'limoncello-spritz',
    name: 'Ramazzotti Limoncello Spritz',
    category: 'cocktails',
    description: 'Tradiční italské Limoncello Ramazzotti, prosecco, lístky čerstvé máty a šťavnatý citron.',
    ingredients: ['Ramazzotti Limoncello', 'Prosecco', 'Soda', 'Fresh Mint', 'Lemon'],
    price: '165 Kč',
    volume: '220 ml',
    image: BAR_IMAGES.menu.limoncelloSpritz,
    flavorNotes: ['Citron', 'Máta', 'Sladkokyselý', 'Letní']
  },
  {
    id: 'havana-cup',
    name: 'Golden Havana Special',
    category: 'cocktails',
    description: 'Výběrový rum Havana Club servírovaný ve zlatém mugu s drceným ledem, čerstvou mátou a kapkou limety.',
    ingredients: ['Havana Club Rum', 'Lime', 'Sugar cane', 'Mint bouquet', 'Crushed ice'],
    price: '175 Kč',
    volume: '180 ml',
    image: BAR_IMAGES.menu.havanaCup,
    flavorNotes: ['Kubánský rum', 'Máta', 'Karamelové tóny']
  },
  {
    id: 'malfy-rosa-tonic',
    name: 'Malfy Gin Rosa & Grapefruit',
    category: 'cocktails',
    description: 'Sicilský gin Malfy Rosa s infuzí růžových grapefruitů, prémiový tonik a velký plátek čerstvého grepu.',
    ingredients: ['Malfy Gin Rosa', 'Thomas Henry Tonic', 'Pink Grapefruit Slice'],
    price: '175 Kč',
    volume: '220 ml',
    image: BAR_IMAGES.menu.malfyRosa,
    flavorNotes: ['Růžový grep', 'Jalovec', 'Citrusový', 'Svěží']
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
