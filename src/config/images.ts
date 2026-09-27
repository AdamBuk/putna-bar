/**
 * PUTNA BAR — CENTRAL IMAGE CONFIGURATION
 * 
 * Jak nahradit tyto placeholder fotky vlastními reálnými fotkami z Instagramu / Google Maps:
 * 1. Jednoduše zkopírujte vaše fotografie do složky `public/images/` se stejnými názvy:
 *    - `hero.jpg` — Hlavní velká fotka pro úvodní sekci (útulný bar, teplé ambientní žárovky)
 *    - `interior.jpg` — Interiér baru (ratanová křesílka, barevné zdi, tlumené osvětlení)
 *    - `garden.jpg` — Letní venkovní zahrádka v uličce Tomkova
 *    - `dog-friendly.jpg` — Zákoutí baru přátelské k pejskům
 *    - `signature-velvet.jpg` — Signature drink v elegantní skleničce
 *    - `signature-salon.jpg` — Jantarový drink / whiskey
 *    - `signature-sunset.jpg` — Barevný teplý koktejl
 *    - `cocktail-old-fashioned.jpg` — Smoked Old Fashioned na křišťálovém ledu
 *    - `cocktail-martini.jpg` — Espresso Martini / kávový koktejl
 *    - `cocktail-basil.jpg` — Gin Basil Smash / svěží drink
 *    - `beer-draft.jpg` — Čepované pivo s krémovou pěnou
 *    - `cafe-espresso.jpg` — Výběrová káva / espresso tonic
 *    - `gallery-1.jpg` až `gallery-4.jpg` — Atmosférické fotky do mozaiky
 * 
 * 2. Případně můžete v tomto souboru změnit cesty nebo vložit přímé URL odkazy na vaše média.
 */

export const BAR_IMAGES = {
  // Hlavní sekce
  hero: '/images/hero.jpg',
  interior: '/images/interior.jpg',
  garden: '/images/garden.jpg',
  dogFriendly: '/images/dog-friendly.jpg',

  // Nabídka Drinků
  menu: {
    putnaVelvet: '/images/signature-velvet.jpg',
    salonKralove: '/images/signature-salon.jpg',
    neonSunset: '/images/signature-sunset.jpg',
    oldFashioned: '/images/cocktail-old-fashioned.jpg',
    espressoMartini: '/images/cocktail-martini.jpg',
    basilSmash: '/images/cocktail-basil.jpg',
    draftBeer: '/images/beer-draft.jpg',
    craftBeer: '/images/beer-draft.jpg',
    espressoTonic: '/images/cafe-espresso.jpg',
  },

  // Atmosféra & Vizuální Vibe
  gallery: [
    {
      src: '/images/gallery-1.jpg',
      title: 'Večerní ambientní nálada',
      subtitle: 'Teplé žárovkové osvětlení a přátelská atmosféra',
      aspect: 'tall' as const,
    },
    {
      src: '/images/interior.jpg',
      title: 'Eklektický interiér & pohodlí',
      subtitle: 'Ratanová křesílka, barevné akcenty a útulné koutky',
      aspect: 'wide' as const,
    },
    {
      src: '/images/gallery-2.jpg',
      title: 'Řemeslná mixologie',
      subtitle: 'Čerstvé bylinky, infuze a kvalitní suroviny',
      aspect: 'square' as const,
    },
    {
      src: '/images/garden.jpg',
      title: 'Letní zahrádka Tomkova',
      subtitle: 'Klidné posezení v historické uličce starého města',
      aspect: 'square' as const,
    },
    {
      src: '/images/gallery-4.jpg',
      title: 'Denní kavárenská pohoda',
      subtitle: 'Výběrová káva, domácí limonády a klid na práci i čtení',
      aspect: 'wide' as const,
    },
  ],
};
