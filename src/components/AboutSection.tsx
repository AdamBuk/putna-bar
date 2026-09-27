import type React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, SunMedium, Heart, ShieldCheck, GlassWater } from 'lucide-react';
import { BAR_VIBES } from '../data/menuData';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-pink-400" />,
  GlassWater: <GlassWater className="w-6 h-6 text-purple-400" />,
  SunMedium: <SunMedium className="w-6 h-6 text-amber-400" />,
  HeartHandshake: <Heart className="w-6 h-6 text-pink-400" />,
};

interface AboutSectionProps {
  onOpenReservation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="about" className="relative py-24 bg-[#0a0c14] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Náš Příběh & Vibe</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5"
          >
            Místo, kde má každý večer svůj <br className="hidden sm:inline" />
            <span className="text-gradient-vibrant">jedinečný příběh</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Putna Bar je intimní prostor v kouzelné historické uličce Tomkova přímo v srdci Hradce Králové. Spojujeme vášeň pro špičkovou moderní mixologii, výběrovou kávu a neformální přátelské prostředí, kde se budete okamžitě cítit vítáni.
          </motion.p>
        </div>

        {/* 4 Pillars Grid (Cozy Atmosphere, Professional Service, Outdoor Seating, Dog-friendly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BAR_VIBES.map((vibe, index) => (
            <motion.div
              key={vibe.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative p-6 rounded-2xl bg-[#111422]/90 border border-white/10 hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_15px_30px_-10px_rgba(244,63,94,0.25)] flex flex-col justify-between"
            >
              {/* Subtle top card glow */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-pink-500/10 group-hover:border-pink-500/30 transition-all duration-300">
                  {iconMap[vibe.icon] || <Sparkles className="w-6 h-6 text-pink-400" />}
                </div>

                {/* Tag & Title */}
                <span className="text-[11px] font-bold tracking-wider uppercase text-pink-400/90 block mb-1">
                  {vibe.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                  {vibe.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {vibe.description}
                </p>
              </div>

              {/* Status indicator */}
              <div className="pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-400 mr-1.5" />
                <span>Garance zážitku Putna</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Visual Storytelling Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#121526] via-[#171b30] to-[#121526] p-8 sm:p-12 shadow-2xl"
        >
          {/* Neon corner accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Zahrádka v historické Tomkově ulici
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                Vychutnejte si drink na čerstvém vzduchu pod hvězdami
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                V teplých měsících ožívá naše letní venkovní zahrádka. Usaďte se do pohodlí, objednejte si osvěžující drink z letní nabídky a nechte město plynout kolem vás. Vhodné pro romantické rande, posezení s přáteli i odpočinek po práci.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-102 transition-all"
                >
                  Rezervovat stůl na zahrádce
                </button>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
                >
                  Kudy k nám
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                  alt="Zahrádka a atmosféra baru Putna"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                  <span className="font-semibold text-pink-300">Tip štamgastů:</span> Doporučujeme večerní rezervaci předem, kapacita zahrádky bývá brzy obsazená.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
