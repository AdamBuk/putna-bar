import type React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, ChevronDown, Sparkles, Beer, Heart } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette and Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=2000&q=85"
          alt="Putna Bar atmosféra"
          className="w-full h-full object-cover object-center scale-105 filter brightness-45 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090e] via-[#08090e]/75 to-black/60" />
        <div className="absolute inset-0 bg-radial-glow opacity-80" />
        <div className="absolute inset-0 bg-radial-amber opacity-60" />
      </div>

      {/* Decorative Neon Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/15 text-pink-300 border border-pink-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Centrum Hradce Králové</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30 backdrop-blur-md">
            <Beer className="w-3.5 h-3.5 text-purple-400" />
            <span>Čepované pivo & Cafe</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 text-amber-400" />
            <span>Dog Friendly & Venkovní Zahrádka</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-2 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Putna Bar <br className="hidden sm:inline" />
            <span className="text-gradient-vibrant font-black drop-shadow-md">
              Cafe & Cocktails
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 text-balance"
        >
          Útulný bar v centru Hradce Králové. Klasické i moderní koktejly, čepované pivo a skvělá atmosféra.
        </motion.p>

        {/* Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14"
        >
          {/* Primary CTA - Rezervovat stůl */}
          <button
            type="button"
            onClick={onOpenReservation}
            className="w-full sm:w-auto relative group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 shadow-[0_0_30px_-5px_rgba(244,63,94,0.6)] hover:shadow-[0_0_40px_-2px_rgba(244,63,94,0.8)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <CalendarCheck className="w-5 h-5 text-white" />
            <span className="tracking-wide">Rezervovat stůl</span>
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Secondary Button - Nabídka drinků */}
          <a
            href="#menu"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-slate-200 bg-[#121422]/80 hover:bg-[#191d30] border border-white/15 hover:border-pink-500/40 backdrop-blur-md transition-all hover:text-white"
          >
            <span>Prohlédnout nabídku</span>
            <ChevronDown className="w-4 h-4 text-pink-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Atmospheric Quick Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10"
        >
          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/5 text-center">
            <span className="block text-2xl font-bold text-pink-400">30+</span>
            <span className="text-xs text-slate-400">Koktejlů & drinků</span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/5 text-center">
            <span className="block text-2xl font-bold text-purple-400">Zahrádka</span>
            <span className="text-xs text-slate-400">V klidné uličce</span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/5 text-center">
            <span className="block text-2xl font-bold text-amber-400">Čepované</span>
            <span className="text-xs text-slate-400">Ležák & Craft speciály</span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/5 text-center">
            <span className="block text-2xl font-bold text-emerald-400">Dog Friendly</span>
            <span className="text-xs text-slate-400">Mazlíčci vítáni</span>
          </div>
        </motion.div>
      </div>

      {/* Floating subtle scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 hover:text-pink-400 transition-colors animate-bounce p-2"
        aria-label="Posunout na sekci O nás"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
