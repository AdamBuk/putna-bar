import type React from 'react';
import { Wine, MapPin, Clock, ArrowUp, CalendarCheck } from 'lucide-react';

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

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800 text-zinc-400 pt-20 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/25">
                <Wine className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-2xl tracking-wide text-zinc-100">
                  Putna <span className="text-amber-400 italic">Bar</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase font-medium -mt-1">
                  Cafe &amp; Cocktails
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Útulný bar v historickém centru Hradce Králové. Denní kavárna, výběrové koktejly, čepované pivo a venkovní zahrádka v uličce Tomkova.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/putnabar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 border border-zinc-800 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-850 text-xs text-zinc-300 hover:text-amber-300 border border-zinc-800 transition-colors cursor-pointer"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Rezervace stolu</span>
              </button>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-4">
              Navigace
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  O baru &amp; Vibe
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Nápojový lístek
                </a>
              </li>
              <li>
                <a href="#vibe" className="hover:text-amber-400 transition-colors">
                  Fotogalerie
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Kontakt &amp; Otevírací doba
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Short */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-4 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Otevírací doba</span>
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li className="flex justify-between border-b border-zinc-850 pb-1">
                <span>Středa – Čtvrtek</span>
                <span className="text-zinc-200">14:00 – 22:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-850 pb-1">
                <span>Pátek</span>
                <span className="text-amber-300">14:00 – 00:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-850 pb-1">
                <span>Sobota</span>
                <span className="text-amber-300">16:00 – 00:00</span>
              </li>
              <li className="flex justify-between text-zinc-500 pt-1">
                <span>Neděle – Úterý</span>
                <span>Zavřeno</span>
              </li>
            </ul>
          </div>

          {/* Location & Booking */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-300 mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Lokalita</span>
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
              Tomkova 139/22<br />
              500 03 Hradec Králové<br />
              Historické centrum města
            </p>
            <button
              type="button"
              onClick={onOpenReservation}
              className="w-full py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Online rezervace přes Resos</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 font-light">
          <p>&copy; {new Date().getFullYear()} Putna Bar | Cafe &amp; Cocktails. Všechna práva vyhrazena.</p>

          <div className="flex items-center gap-6">
            <span className="text-zinc-400">
              Tomkova 139/22, Hradec Králové
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Zpět nahoru"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
