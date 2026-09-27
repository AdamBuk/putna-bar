import type React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wine, Menu, X, CalendarCheck, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O nás', href: '#about' },
    { label: 'Nabídka', href: '#menu' },
    { label: 'Atmosféra', href: '#vibe' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Editorial Serif & Warm Glow */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Putna Bar Domů"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/25 group-hover:border-amber-400/50 transition-colors">
                <Wine className="w-5 h-5 text-amber-400 group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-editorial text-2xl tracking-wide text-zinc-100 group-hover:text-amber-200 transition-colors">
                  Putna <span className="text-amber-400 italic">Bar</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase font-medium -mt-1">
                  Cafe & Cocktails
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-normal text-zinc-300 hover:text-amber-300 transition-colors relative py-1 group tracking-wide"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Action Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenReservation}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/15 hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-zinc-950" />
                <span>Rezervovat stůl</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
                aria-label={mobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 p-4 md:hidden"
          >
            <div className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-base font-medium text-zinc-200 hover:text-amber-300 hover:bg-zinc-800/50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800 space-y-3">
                <div className="text-xs text-zinc-400 space-y-1.5 px-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Tomkova 139/22, Hradec Králové</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>St–Čt 14–22, Pá 14–00, So 16–00</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Rezervovat stůl</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
