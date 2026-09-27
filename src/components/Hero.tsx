import type React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, ChevronDown, Sparkles } from 'lucide-react';
import { BAR_IMAGES } from '../config/images';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-zinc-950">
      {/* Background Photography with Warm Atmospheric Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={BAR_IMAGES.hero}
          alt="Putna Bar atmosféra"
          className="w-full h-full object-cover object-center scale-102 filter brightness-[0.38] contrast-[1.05]"
        />
        {/* Subtle Warm Amber Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/50" />
        <div className="absolute inset-0 bg-ambient-warm" />
        <div className="absolute inset-0 bg-ambient-corner" />
      </div>

      {/* Warm Ambient Filament Lamp Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Editorial Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-amber-300/90 bg-amber-950/40 border border-amber-500/25 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Kavárna ve dne &bull; Koktejlový bar v noci</span>
        </motion.div>

        {/* Elegant Serif Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-3 mb-8"
        >
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-zinc-100 leading-[1.08]">
            Putna <span className="italic font-light text-gradient-amber">Bar</span>
          </h1>
          <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-zinc-400">
            Cafe &amp; Cocktails &bull; Hradec Králové
          </p>
        </motion.div>

        {/* Subtitle with Generous Line Height */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-12 text-balance"
        >
          Útulný bar v centru Hradce Králové. Klasické i moderní koktejly, čepované pivo a skvělá atmosféra.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          {/* Primary CTA - Rezervovat stůl */}
          <button
            type="button"
            onClick={onOpenReservation}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-950 bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-zinc-950" />
            <span>Rezervovat stůl</span>
          </button>

          {/* Secondary CTA - Menu */}
          <a
            href="#menu"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-700/50 hover:border-amber-500/40 backdrop-blur-sm transition-all"
          >
            <span>Prohlédnout lístek</span>
            <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </motion.div>

        {/* Minimalist Editorial Highlights (No heavy cards) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-zinc-400 text-xs"
        >
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-editorial text-2xl text-amber-300 font-normal">Historické centrum</span>
            <span className="text-[11px] text-zinc-400 font-light">Tomkova ulice</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="font-editorial text-2xl text-amber-300 font-normal">Denní espresso</span>
            <span className="text-[11px] text-zinc-400 font-light">&amp; Domácí limonády</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="font-editorial text-2xl text-amber-300 font-normal">Letní zahrádka</span>
            <span className="text-[11px] text-zinc-400 font-light">Klidné venkovní sezení</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="font-editorial text-2xl text-amber-300 font-normal">Dog Friendly</span>
            <span className="text-[11px] text-zinc-400 font-light">Čtyřnozí hosté vítáni</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-amber-400 transition-colors p-2"
        aria-label="Posunout dolů"
      >
        <ChevronDown className="w-5 h-5 animate-pulse" />
      </a>
    </section>
  );
};
