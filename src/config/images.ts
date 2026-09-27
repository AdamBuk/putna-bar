/**
 * PUTNA BAR — CENTRAL IMAGE CONFIGURATION
 * 
 * Reálné fotografie z Putna Baru (Instagram & Google Maps)
 * Všechny obrázky jsou uloženy v `public/images/`.
 */

export const BAR_IMAGES = {
  // Hlavní sekce (Hero & O nás)
  hero: '/images/hero-putna-interior.webp',
  interior: '/images/about-mosaic-bar.webp',
  garden: '/images/about-zahradka-tomkova.webp',
  dogFriendly: '/images/dog-friendly.jpg',

  // Nabídka Drinků (Reálné drinky z Putna Baru)
  menu: {
    putnaVelvet: '/images/cocktail-putna-velvet.jpg',
    salonKralove: '/images/cocktail-salon-kralove.jpg',
    putnaSunset: '/images/cocktail-putna-sunset.jpg',
    italicusSpritz: '/images/cocktail-italicus-spritz.jpg',
    lilletRose: '/images/cocktail-lillet-rose.jpg',
    moscowMule: '/images/cocktail-moscow-mule.jpg',
    limoncelloSpritz: '/images/cocktail-limoncello-spritz.jpg',
    lavenderGin: '/images/cocktail-lavender-gin.jpg',
    havanaCup: '/images/cocktail-havana-cup.jpg',
    malfyRosa: '/images/cocktail-malfy-rosa.jpg',
    draftBeer: '/images/beer-draft.jpg',
    espressoTonic: '/images/cafe-espresso.jpg',
  },

  // Atmosféra & Vizuální Vibe (Reálná fotogalerie)
  gallery: [
    {
      src: '/images/gallery-cocktails-table.jpg',
      title: 'Podpisové koktejly & retro nálada',
      subtitle: 'Čerstvé citrusy, bylinky a ikonické rádio v Putna Baru',
      aspect: 'wide' as const,
    },
    {
      src: '/images/gallery-night-window.jpg',
      title: 'Večerní pohled do uličky Tomkova',
      subtitle: 'Tlumené žárovky, ratanová křesílka a pulz nočního města',
      aspect: 'tall' as const,
    },
    {
      src: '/images/about-mosaic-bar.webp',
      title: 'Mozaikový bar & ratanové lustry',
      subtitle: 'Srdce baru, kde pro vás mícháme ty nejlepší drinky',
      aspect: 'square' as const,
    },
    {
      src: '/images/about-zahradka-tomkova.webp',
      title: 'Venkovní zahrádka na kočičích hlavách',
      subtitle: 'Klidné letní posezení v historické uličce starého města',
      aspect: 'square' as const,
    },
    {
      src: '/images/gallery-night-table.webp',
      title: 'Noční setkání při svíčkách',
      subtitle: 'Koktejlové menu, panáky Absolut Chupito a skvělá společnost',
      aspect: 'wide' as const,
    },
    {
      src: '/images/hero-putna-interior.webp',
      title: 'Denní kavárenská pohoda',
      subtitle: 'Eklektický interiér plný světla, barevných stěn a pohodlí',
      aspect: 'wide' as const,
    },
  ],
};
