import type React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wine, GlassWater, Beer, ArrowUpRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import type { MenuCategory, MenuItem } from '../types';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const categories: { key: MenuCategory; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'Všechny drinky', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { key: 'signatures', label: 'Signature drinky', icon: <Wine className="w-3.5 h-3.5" /> },
    { key: 'cocktails', label: 'Klasické & moderní', icon: <GlassWater className="w-3.5 h-3.5" /> },
    { key: 'beer-cafe', label: 'Čepované pivo & Cafe', icon: <Beer className="w-3.5 h-3.5" /> },
  ];

  return (
    <section id="menu" className="relative py-28 sm:py-36 bg-zinc-950 overflow-hidden">
      {/* Subtle warm ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400/90 mb-4">
            <span className="w-6 h-px bg-amber-400/50" />
            <span>Nápojový Lístek</span>
            <span className="w-6 h-px bg-amber-400/50" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-zinc-100 tracking-tight leading-[1.15] mb-5">
            Výběrová mixologie &amp; <br />
            <span className="italic font-light text-gradient-amber">poctivé výčepní řemeslo</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Domácí sirupy a infuze, křišťálový ručně sekaný led, čerstvé bylinky a prémiové destiláty. Vychutnejte si naše autorské receptury i osvědčené stálice.
          </p>
        </div>

        {/* Minimalist Editorial Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-zinc-950 font-bold'
                    : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMenuCategory"
                    className="absolute inset-0 rounded-full bg-amber-400"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat.icon}
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Menu Grid (Sophisticated Magazine Aesthetic) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: MenuItem) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-warm-subtle"
              >
                <div>
                  {/* Clean Photography Frame */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-zinc-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-60" />

                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-zinc-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        {item.badge}
                      </div>
                    )}

                    {/* Volume */}
                    {item.volume && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-light bg-zinc-950/80 text-zinc-400 border border-zinc-800 backdrop-blur-md">
                        {item.volume}
                      </div>
                    )}
                  </div>

                  {/* Drink Details */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-baseline justify-between gap-3 border-b border-zinc-800/60 pb-3">
                      <h3 className="font-editorial text-2xl font-normal text-zinc-100 group-hover:text-amber-300 transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-editorial text-xl font-medium text-amber-400 shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {item.description}
                    </p>

                    {/* Ingredients */}
                    {item.ingredients && item.ingredients.length > 0 && (
                      <div className="pt-1">
                        <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium mb-1.5">
                          Ingredience:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.ingredients.map((ing, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-zinc-800/60 text-[11px] text-zinc-300 font-light"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Flavor Notes & Reservation Hook */}
                <div className="px-6 pb-5 pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-950/30 text-amber-300/80 border border-amber-500/20 font-medium"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={onOpenReservation}
                    className="p-1.5 text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
                    title="Rezervovat stůl"
                    aria-label={`Rezervovat stůl na ${item.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Editorial Footnote / Reservation Prompt */}
        <div className="mt-20 pt-10 border-t border-zinc-800/80 text-center max-w-xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-widest text-zinc-400">
            Máte chuť na drink podle vaší nálady?
          </p>
          <h3 className="font-editorial text-2xl sm:text-3xl text-zinc-200 font-normal">
            Naši barmani vám rádi namíchají koktejl přesně na míru.
          </h3>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all cursor-pointer shadow-md shadow-amber-500/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
              <span>Rezervovat stůl</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
