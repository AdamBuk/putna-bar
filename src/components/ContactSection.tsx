import type React from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, CalendarCheck, Navigation, CheckCircle2 } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface ContactSectionProps {
  onOpenReservation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenReservation }) => {
  // Opening hours data
  const schedule = [
    { day: 'Pondělí', hours: 'Zavřeno', dayIndex: 1, openMin: null, closeMin: null },
    { day: 'Úterý', hours: 'Zavřeno', dayIndex: 2, openMin: null, closeMin: null },
    { day: 'Středa', hours: '14:00 – 22:00', dayIndex: 3, openMin: 14 * 60, closeMin: 22 * 60 },
    { day: 'Čtvrtek', hours: '14:00 – 22:00', dayIndex: 4, openMin: 14 * 60, closeMin: 22 * 60 },
    { day: 'Pátek', hours: '14:00 – 00:00', dayIndex: 5, openMin: 14 * 60, closeMin: 24 * 60 },
    { day: 'Sobota', hours: '16:00 – 00:00', dayIndex: 6, openMin: 16 * 60, closeMin: 24 * 60 },
    { day: 'Neděle', hours: 'Zavřeno', dayIndex: 0, openMin: null, closeMin: null },
  ];

  // Live open status
  const currentStatus = useMemo(() => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const todaySchedule = schedule.find((s) => s.dayIndex === currentDay);

    if (!todaySchedule || todaySchedule.openMin === null || todaySchedule.closeMin === null) {
      return {
        isOpen: false,
        text: 'Dnes máme zavřeno',
        subtext: 'Otevíráme pro vás opět ve středu ve 14:00',
        currentDayIndex: currentDay
      };
    }

    if (currentMinutes >= todaySchedule.openMin && currentMinutes < todaySchedule.closeMin) {
      return {
        isOpen: true,
        text: 'Právě máme otevřeno',
        subtext: `Dnes jsme tu do ${todaySchedule.hours.split('–')[1]?.trim() || 'zavírací doby'}`,
        currentDayIndex: currentDay
      };
    } else if (currentMinutes < todaySchedule.openMin) {
      return {
        isOpen: false,
        text: `Dnes otevíráme ve ${todaySchedule.hours.split('–')[0]?.trim()}`,
        subtext: 'Těšíme se na vaši návštěvu',
        currentDayIndex: currentDay
      };
    } else {
      return {
        isOpen: false,
        text: 'Pro dnešek máme zavřeno',
        subtext: 'Těšíme se na vás v další otevírací den',
        currentDayIndex: currentDay
      };
    }
  }, []);

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-zinc-950 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400/90 mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Kde Nás Najdete</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-zinc-100 tracking-tight leading-[1.15] mb-5">
            Kontakt &amp; <span className="italic font-light text-gradient-amber">Otevírací doba</span>
          </h2>
          <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
            Najdete nás v malebné uličce Tomkova v historickém jádru města, kousek od Katedrály sv. Ducha a Velkého náměstí.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Schedule & Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Live Status Banner */}
            <div className={`p-4 rounded-xl border transition-all ${
              currentStatus.isOpen
                ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                : 'bg-zinc-900/60 border-zinc-800 text-zinc-300'
            }`}>
              <div className="flex items-center gap-3">
                <CheckCircle2 className={`w-5 h-5 shrink-0 ${currentStatus.isOpen ? 'text-emerald-400 animate-pulse' : 'text-zinc-400'}`} />
                <div>
                  <h4 className="text-sm font-semibold text-zinc-100">
                    {currentStatus.text}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    {currentStatus.subtext}
                  </p>
                </div>
              </div>
            </div>

            {/* Otevírací doba List */}
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl font-normal text-zinc-100 border-b border-zinc-800 pb-3">
                Otevírací doba
              </h3>

              <div className="divide-y divide-zinc-800/60 text-sm">
                {schedule.map((item) => {
                  const isToday = currentStatus.currentDayIndex === item.dayIndex;
                  const isClosed = item.hours === 'Zavřeno';

                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-3 px-2 rounded-lg transition-colors ${
                        isToday ? 'bg-amber-950/20 text-amber-200 font-medium' : 'text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.day}</span>
                        {isToday && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider font-semibold">
                            Dnes
                          </span>
                        )}
                      </div>
                      <span className={isClosed ? 'text-zinc-500 font-light' : 'text-zinc-200 font-medium'}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-zinc-400 pt-2 italic font-light">
                * Soukromé akce, oslavy a degustace po předchozí domluvě.
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenReservation}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-xs uppercase tracking-widest font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/15 transition-all cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-zinc-950" />
                <span>Rezervovat stůl online</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Address, Navigation & Map */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Address Details */}
            <div className="p-6 sm:p-8 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                    Adresa
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-zinc-100 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Tomkova 139/22</span>
                  </h3>
                  <p className="text-zinc-400 font-light text-sm mt-1">
                    500 03 Hradec Králové, Česká republika
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Tomkova+139/22,+Hradec+Králové"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 transition-all flex flex-col items-center gap-1 group"
                  title="Otevřít v Google Mapách"
                >
                  <Navigation className="w-4 h-4" />
                </a>
              </div>

              {/* Instagram link */}
              <div className="pt-2 border-t border-zinc-800/80">
                <a
                  href="https://www.instagram.com/putnabar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/60 hover:bg-zinc-800/60 border border-zinc-800 text-zinc-300 hover:text-amber-300 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-amber-500/10 text-amber-400 group-hover:scale-105 transition-transform">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">Sledujte nás na Instagramu</span>
                      <span className="text-xs font-semibold text-zinc-200 group-hover:text-amber-300">@putnabar</span>
                    </div>
                  </div>
                  <span className="text-xs text-amber-400 font-medium">Přejít &rarr;</span>
                </a>
              </div>
            </div>

            {/* Embedded Dark Map */}
            <div className="rounded-xl overflow-hidden border border-zinc-800 relative aspect-[16/10] bg-zinc-950">
              <iframe
                title="Mapa Putna Bar Hradec Králové"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.760237704535!2d15.8315183!3d50.2106093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e9b068cba50ef%3A0x6b9d62db415050f!2sTomkova%20139%2F22%2C%20500%2003%20Hradec%20Kr%C3%A1lov%C3%A9!5e0!3m2!1scs!2scz!4v1710000000000!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.85)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
