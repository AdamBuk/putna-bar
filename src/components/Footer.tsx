import type React from 'react';
import { Wine, MapPin, Clock, ArrowUp, CalendarCheck, Heart } from 'lucide-react';

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

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06070a] border-t border-white/10 text-slate-400 pt-16 pb-12 overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-pink-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/40">
                <Wine className="w-5 h-5 text-pink-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-white uppercase">
                  PUTNA <span className="text-pink-500 font-medium">BAR</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold -mt-1">
                  Cafe & Cocktails
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Útulný bar v centru Hradce Králové. Špičkové koktejly, prémiová káva, čepované pivo a nezapomenutelná atmosféra s venkovní zahrádkou.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/putnabar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-pink-500/20 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
              </a>
              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-pink-400" />
                <span>Rezervace stolu</span>
              </button>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigace
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-pink-400 transition-colors">
                  O baru & Atmosféra
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-pink-400 transition-colors">
                  Nabídka koktejlů & piva
                </a>
              </li>
              <li>
                <a href="#vibe" className="hover:text-pink-400 transition-colors">
                  Fotogalerie & Život v baru
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-400 transition-colors">
                  Kontakt & Kudy k nám
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Short */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>Otevírací doba</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Středa – Čtvrtek</span>
                <span className="font-semibold text-slate-200">14:00 – 22:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Pátek</span>
                <span className="font-semibold text-pink-400">14:00 – 00:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Sobota</span>
                <span className="font-semibold text-pink-400">16:00 – 00:00</span>
              </li>
              <li className="flex justify-between text-slate-500 pt-1">
                <span>Neděle – Úterý</span>
                <span>Zavřeno</span>
              </li>
            </ul>
          </div>

          {/* Location & Booking */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span>Lokalita</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Tomkova 139/22<br />
              500 03 Hradec Králové<br />
              Historické centrum
            </p>
            <button
              type="button"
              onClick={onOpenReservation}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/40 transition-colors flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Online rezervace přes Resos</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Putna Bar | Cafe & Cocktails. Všechna práva vyhrazena.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              Vytvořeno pro <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" /> milovníky skvělých drinků
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Zpět nahoru"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
