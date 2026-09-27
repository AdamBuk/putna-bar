import type React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { BAR_IMAGES } from '../config/images';

export const AtmosphereSection: React.FC = () => {
  return (
    <section id="vibe" className="relative py-28 sm:py-36 bg-zinc-900/40 border-y border-white/5 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400/90 mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Vizuální Atmosféra</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-zinc-100 tracking-tight leading-[1.15]">
              Život v <span className="italic font-light text-gradient-amber">Putna Baru</span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            Teplé světlo, vůně čerstvě extrahované kávy, cinkání křišťálového ledu a neuspěchaná pohoda v srdci historického Hradce Králové.
          </p>
        </div>

        {/* Editorial Photo Showcase (Refined Magazine Collage) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {BAR_IMAGES.gallery.map((photo, i) => {
            // Editorial layout spans
            const colSpan =
              i === 0 ? 'md:col-span-7 aspect-[16/10]' :
              i === 1 ? 'md:col-span-5 aspect-[16/10]' :
              i === 2 ? 'md:col-span-4 aspect-square' :
              i === 3 ? 'md:col-span-4 aspect-square' :
              'md:col-span-4 aspect-square';

            return (
              <motion.div
                key={photo.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950 group ${colSpan}`}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h4 className="font-editorial text-xl sm:text-2xl font-normal text-zinc-100 group-hover:text-amber-300 transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light mt-1">
                    {photo.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Real Photos */}
        <div className="mt-8 text-center text-[11px] text-zinc-400 italic">
          Fotografie zachycují útulnou atmosféru kavárny a koktejlového baru v uličce Tomkova.
        </div>
      </div>
    </section>
  );
};
