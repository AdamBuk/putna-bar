import type React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wine, GlassWater, Beer, Flame, ArrowUpRight } from 'lucide-react';
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
    { key: 'all', label: 'Všechny drinky', icon: <Sparkles className="w-4 h-4" /> },
    { key: 'signatures', label: 'Signature drinky', icon: <Wine className="w-4 h-4" /> },
    { key: 'cocktails', label: 'Moderní koktejly', icon: <GlassWater className="w-4 h-4" /> },
    { key: 'beer-cafe', label: 'Čepované pivo & Cafe', icon: <Beer className="w-4 h-4" /> },
  ];

  return (
    <section id="menu" className="relative py-24 bg-[#08090e] overflow-hidden">
      {/* Background ambient neon glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Naše Nabídka</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4"
          >
            Mistrovské koktejly & <br />
            <span className="text-gradient-vibrant">pečlivě ošetřené pivo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Používáme infuzované prémiové destiláty, domácí cordiály a sirupy, čerstvé bylinky a křišťálový led. Objevte naše originální receptury i vyladěné světové stálice.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]'
                    : 'text-slate-400 hover:text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
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

        {/* Menu Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: MenuItem) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl bg-[#0f111d] border border-white/10 hover:border-pink-500/40 overflow-hidden shadow-xl hover:shadow-[0_15px_30px_-10px_rgba(244,63,94,0.25)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f111d] via-[#0f111d]/20 to-transparent" />

                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-pink-500/90 text-white backdrop-blur-md shadow-md flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-300" />
                        <span>{item.badge}</span>
                      </div>
                    )}

                    {/* Volume */}
                    {item.volume && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[11px] font-medium bg-black/60 text-slate-300 backdrop-blur-md border border-white/10">
                        {item.volume}
                      </div>
                    )}

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-[#0a0c14]/90 backdrop-blur-md border border-white/15 text-pink-400 font-extrabold text-base sm:text-lg shadow-lg">
                      {item.price}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Ingredients List */}
                    {item.ingredients && item.ingredients.length > 0 && (
                      <div className="pt-2">
                        <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                          Složení:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.ingredients.map((ing, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-slate-300"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Flavor Notes & Action */}
                <div className="p-5 sm:p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={onOpenReservation}
                    className="p-2 rounded-xl bg-white/5 group-hover:bg-pink-500/20 text-slate-400 group-hover:text-pink-300 border border-white/10 group-hover:border-pink-500/30 transition-colors"
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

        {/* Bottom Banner with Reservation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-amber-900/20 border border-pink-500/30 backdrop-blur-md text-center max-w-3xl mx-auto shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Máte chuť na drink vytvořený na míru?
          </h3>
          <p className="text-sm text-slate-300 mb-6">
            Řekněte našim barmanům, jaké chutě preferujete. Namícháme vám originální drink dle vaší chuti.
          </p>
          <button
            type="button"
            onClick={onOpenReservation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:scale-103 transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            <span>Rezervovat stůl a ochutnat</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
