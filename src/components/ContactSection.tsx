import type React from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, CalendarCheck, Navigation, CheckCircle2, AlertCircle } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
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

  // Calculate live open/closed status
  const currentStatus = useMemo(() => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const todaySchedule = schedule.find((s) => s.dayIndex === currentDay);

    if (!todaySchedule || todaySchedule.openMin === null || todaySchedule.closeMin === null) {
      return {
        isOpen: false,
        text: 'Dnes máme zavřeno',
        subtext: 'Těšíme se na vás od středy do soboty',
        currentDayIndex: currentDay
      };
    }

    if (currentMinutes >= todaySchedule.openMin && currentMinutes < todaySchedule.closeMin) {
      return {
        isOpen: true,
        text: 'Právě máme OTEVŘENO',
        subtext: `Dnes jsme tu pro vás do ${todaySchedule.hours.split('–')[1]?.trim() || 'zavírací doby'}`,
        currentDayIndex: currentDay
      };
    } else if (currentMinutes < todaySchedule.openMin) {
      return {
        isOpen: false,
        text: 'Dnes otevíráme ve ' + todaySchedule.hours.split('–')[0]?.trim(),
        subtext: 'Přijďte na odpolední kávu a večerní drinky',
        currentDayIndex: currentDay
      };
    } else {
      return {
        isOpen: false,
        text: 'Pro dnešek již máme zavřeno',
        subtext: 'Těšíme se na vás opět v další otevírací den',
        currentDayIndex: currentDay
      };
    }
  }, []);

  return (
    <section id="contact" className="relative py-24 bg-[#08090e] overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Kde Nás Najdete</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Kontakt & <span className="text-gradient-vibrant">Otevírací doba</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Jsme v samém srdci Hradce Králové. Zastavte se na koktejl, pivo nebo si předem rezervujte stůl na oslavu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Opening Hours & Live Status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Live Status Card */}
            <div className={`p-5 rounded-2xl border backdrop-blur-md transition-all ${
              currentStatus.isOpen
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-pink-500/10 border-pink-500/30 text-pink-300'
            }`}>
              <div className="flex items-start gap-3">
                {currentStatus.isOpen ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5 animate-pulse" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-pink-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {currentStatus.text}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    {currentStatus.subtext}
                  </p>
                </div>
              </div>
            </div>

            {/* Otevírací doba Table */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f111d] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Otevírací doba</h3>
                </div>
                <span className="text-xs font-semibold text-slate-400">Putna Bar</span>
              </div>

              <div className="divide-y divide-white/5 space-y-1">
                {schedule.map((item) => {
                  const isToday = currentStatus.currentDayIndex === item.dayIndex;
                  const isClosed = item.hours === 'Zavřeno';

                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm transition-colors ${
                        isToday
                          ? 'bg-pink-500/15 text-white font-bold border border-pink-500/30 shadow-sm'
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.day}</span>
                        {isToday && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500 text-white font-bold uppercase tracking-wider">
                            Dnes
                          </span>
                        )}
                      </div>
                      <span className={isClosed ? 'text-slate-500' : 'text-slate-100 font-semibold'}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-slate-400 pt-2 border-t border-white/5 italic">
                * Pro soukromé akce, teambuildingy a narozeninové oslavy lze po dohodě otevřít i mimo standardní hodiny.
              </p>
            </div>

            {/* Quick Action Button */}
            <button
              type="button"
              onClick={onOpenReservation}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-base bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 transition-all"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Rezervovat stůl na nejbližší termín</span>
            </button>
          </motion.div>

          {/* Right Column: Address, Map, and Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Address & Quick Info Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f111d] border border-white/10 shadow-xl space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-pink-400 font-semibold">Adresa</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-pink-400 shrink-0" />
                    <span>Tomkova 139/22</span>
                  </h3>
                  <p className="text-slate-300 text-sm">
                    500 03 Hradec Králové, Česká republika
                  </p>
                  <p className="text-xs text-slate-400 pt-1">
                    Historické centrum města, kousek od Velkého náměstí.
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Tomkova+139/22,+Hradec+Králové"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-pink-500/20 text-slate-300 hover:text-white border border-white/10 hover:border-pink-500/30 transition-all flex flex-col items-center gap-1 group shrink-0"
                  title="Otevřít v Google Mapách"
                >
                  <Navigation className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-semibold">Navigovat</span>
                </a>
              </div>

              {/* Direct Contacts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="https://www.instagram.com/putnabar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] text-slate-400 block">Instagram</span>
                    <span className="text-xs font-semibold">@putnabar</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] text-slate-400 block">Rezervace & Dotazy</span>
                    <span className="text-xs font-semibold">Online přes Resos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl relative aspect-[16/9] bg-[#111422]">
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
              <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] text-slate-300 border border-white/10">
                Tomkova 139/22, Hradec Králové
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
