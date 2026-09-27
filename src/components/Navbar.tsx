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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O nás', href: '#about' },
    { label: 'Nabídka', href: '#menu' },
    { label: 'Atmosféra', href: '#vibe' },
    { label: 'Kontakt & Otevírací doba', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090e]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Putna Bar Domů"
            >
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/40 group-hover:border-pink-400 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all">
                <Wine className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 group-hover:scale-110 transition-transform" />
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-20 blur-sm group-hover:opacity-60 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-amber-300 transition-all">
                  PUTNA <span className="text-pink-500 font-medium">BAR</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold -mt-1">
                  Cafe & Cocktails
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </nav>

            {/* Action Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenReservation}
                className="relative group overflow-hidden rounded-full p-px font-semibold text-sm shadow-lg transition-transform active:scale-95"
              >
                {/* Glow border gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 rounded-full animate-pulse group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0d0f18] text-white transition-all group-hover:bg-transparent">
                  <CalendarCheck className="w-4 h-4 text-pink-400 group-hover:text-white transition-colors" />
                  <span className="font-semibold tracking-wide">Rezervovat stůl</span>
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={mobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-18 z-30 p-4 md:hidden"
          >
            <div className="bg-[#0f111d]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl space-y-4">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs text-slate-400 space-y-1.5 px-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    <span>Tomkova 139/22, Hradec Králové</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>St–Čt 14–22, Pá 14–00, So 16–00</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Rezervovat stůl online</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
