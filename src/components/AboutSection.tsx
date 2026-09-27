import type React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, SunMedium, Heart, Coffee, ArrowRight, MapPin } from 'lucide-react';
import { BAR_IMAGES } from '../config/images';

interface AboutSectionProps {
  onOpenReservation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenReservation }) => {
  const pillars = [
    {
      num: '01',
      title: 'Útulná & Eklektická Atmosféra',
      desc: 'Pohodlná ratanová křesílka, barevné stěny a teplé žárovky. Místo, kde se budete okamžitě cítit jako doma v obýváku.',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />
    },
    {
      num: '02',
      title: 'Kavárna ve dne, Bar v noci',
      desc: 'Dopoledne a odpoledne výběrová káva, domácí limonády a klid na práci. Večer živý koktejlový bar plný energie.',
      icon: <Coffee className="w-4 h-4 text-amber-400" />
    },
    {
      num: '03',
      title: 'Letní Venkovní Zahrádka',
      desc: 'Klidné posezení na čerstvém vzduchu v historické uličce Tomkova, jen pár kroků od Velkého náměstí.',
      icon: <SunMedium className="w-4 h-4 text-amber-400" />
    },
    {
      num: '04',
      title: 'Dog Friendly Přístup',
      desc: 'Čtyřnozí parťáci jsou u nás vřele vítáni. Miska s čerstvou vodou a přátelský personál jsou samozřejmostí.',
      icon: <Heart className="w-4 h-4 text-amber-400" />
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-28 bg-zinc-900/60 border-y border-white/5 overflow-hidden">
      {/* Subtle Ambient Background Lighting: Warm Amber and Deep Muted Petroleum Blue */}
      <div className="absolute top-1/3 -left-20 w-[34rem] h-[34rem] bg-amber-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[36rem] h-[36rem] bg-blue-950/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400/90 mb-4">
            <span className="w-6 h-px bg-amber-400/50" />
            <span>O Baru &amp; Atmosféře</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-zinc-100 tracking-tight leading-[1.15] mb-6">
            Prostor stvořený pro <span className="italic font-light text-gradient-amber">pomalé chvíle</span> i večerní setkání
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Putna Bar v kouzelné historické uličce Tomkova spojuje to nejlepší z denní kavárenské pohody a večerní koktejlové kultury. Žádná strojenost — jen příjemná hudba, pohodlná křesla, baristická preciznost a barmani, kteří rozumí svému řemeslu.
          </p>
        </div>

        {/* Editorial Two-Column Visual Story with Real Bar Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Main Atmosphere Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={BAR_IMAGES.interior}
                alt="Mozaikový bar Putna Bar"
                className="w-full aspect-[4/3] object-cover object-center group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-zinc-300">
                <span className="font-medium tracking-wide flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Putna Bar &bull; Tomkova 139/22, Hradec Králové
                </span>
                <span className="hidden sm:inline text-amber-400 font-light italic">Mozaikový bar &amp; ratanové lampy</span>
              </div>
            </div>
          </motion.div>

          {/* Narrative Content with Real Outdoor Seating Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 space-y-6 text-zinc-300 font-light text-sm sm:text-base leading-relaxed"
          >
            <h3 className="font-editorial text-2xl sm:text-3xl text-zinc-100 font-normal">
              Denní klid i noční pulz města
            </h3>

            <p>
              Přes den fungujeme jako klidná útulná kavárna. Můžete se u nás usadit s knížkou, notebookem nebo se zastavit na výběrové espresso z lokální pražírny a domácí limonádu.
            </p>

            <p>
              S přicházejícím soumrakem se prostor zahalí do teplého žárovkového světla a žezlo přebírají naši barmani. Od kouřového Old Fashioned přes originální Putna Velvet až po poctivě načepované pivo.
            </p>

            {/* Inset photo of real outdoor garden */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 group aspect-[16/9]">
              <img
                src={BAR_IMAGES.garden}
                alt="Venkovní zahrádka v uličce Tomkova"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-[11px] text-zinc-300 font-medium">
                Letní venkovní zahrádka v uličce Tomkova
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-400 hover:text-amber-300 transition-colors group cursor-pointer"
              >
                <span>Rezervovat stůl</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Minimalist 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/5">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="font-editorial text-xl text-amber-400/80 font-normal">
                  {pillar.num}
                </span>
                <span className="w-6 h-px bg-zinc-700" />
                <div className="p-1.5 rounded-md bg-amber-500/10 border border-amber-500/20">
                  {pillar.icon}
                </div>
              </div>

              <h4 className="text-base font-semibold text-zinc-100 tracking-wide">
                {pillar.title}
              </h4>

              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
