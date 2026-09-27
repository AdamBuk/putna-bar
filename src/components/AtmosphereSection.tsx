import type React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export const AtmosphereSection: React.FC = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80',
      title: 'Noční atmosféra baru',
      subtitle: 'Tlumené ambientní světlo a stylové detaily',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      title: 'Mixologie v akci',
      subtitle: 'Čerstvé ovoce, bylinky a prémiové ingredience',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
      title: 'Historická Tomkova ulice',
      subtitle: 'Kouzelná lokace v historickém jádru města',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
      title: 'Polička prémiových rumů & ginů',
      subtitle: 'Ručně vybrané lahve z celého světa',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      title: 'Setkání s přáteli',
      subtitle: 'Místo pro nezapomenutelné oslavy a rozhovory',
      span: 'md:col-span-1 md:row-span-1'
    }
  ];

  return (
    <section id="vibe" className="relative py-24 bg-[#0a0c14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Vizuální Atmosféra</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Život v <span className="text-gradient-vibrant">Putna Baru</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm leading-relaxed">
            Nahlédněte do našeho světa. Ať už přijdete na odpolední výběrovou kávu, večerní degustaci rumů nebo noční koktejly, najdete u nás své oblíbené útočiště.
          </p>
        </div>

        {/* Mosaic Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden border border-white/10 group ${photo.span}`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 opacity-90">
                  {photo.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
