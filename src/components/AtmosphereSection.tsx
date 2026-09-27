import type React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { BAR_IMAGES } from '../config/images';

export const AtmosphereSection: React.FC = () => {
  return (
    <section id="vibe" className="relative pt-20 pb-24 sm:pt-24 sm:pb-28 bg-zinc-900/40 border-y border-white/5 overflow-hidden">
      {/* Subtle Ambient Background Lighting: Warm Amber & Deep Muted Petroleum Blue */}
      <div className="absolute top-1/4 -left-20 w-[34rem] h-[34rem] bg-amber-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[36rem] h-[36rem] bg-cyan-950/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-amber-500/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400/90 mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Vizuální Atmosféra</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-zinc-100 tracking-tight leading-[1.15]">
              Život v <span className="italic font-light text-gradient-amber">Putna Baru</span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            Teplé světlo filamentových žárovek, cinkání křišťálového ledu a neuspěchaná pohoda v srdci historického Hradce Králové.
          </p>
        </div>

        {/* Well-Balanced Editorial Photo Grid (3 Columns x 2 Rows = Zero Empty Gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {BAR_IMAGES.gallery.map((photo, i) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-amber-500/30 bg-zinc-950 aspect-[4/3] shadow-md hover:shadow-warm-subtle transition-all duration-300"
            >
              {/* Image with object-cover and object-center */}
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 transform translate-y-0.5 group-hover:translate-y-0 transition-transform">
                <h4 className="font-editorial text-xl sm:text-2xl font-normal text-zinc-100 group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light mt-1">
                  {photo.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-10 text-center text-xs text-zinc-400 font-light italic">
          Autentické momenty z kavárny a večerního koktejlového baru v uličce Tomkova.
        </div>
      </div>
    </section>
  );
};
