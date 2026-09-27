import type React from 'react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, ExternalLink, Sparkles, Loader2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setIframeLoaded(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/25 ring-1 ring-white/10 z-10 my-auto"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 35px -5px rgba(245, 158, 11, 0.12)'
            }}
          >
            {/* Top Amber Accent Hairline */}
            <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

            {/* Modal Header */}
            <div className="p-4 sm:p-6 pb-3 border-b border-zinc-800 flex items-start justify-between bg-zinc-950/60">
              <div className="space-y-1 pr-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Online Rezervace</span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-zinc-100 tracking-tight flex items-center gap-2">
                  <span>Putna Bar</span>
                  <span className="text-zinc-600 font-light">&bull;</span>
                  <span className="text-amber-400 font-light italic">Rezervační systém</span>
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1 font-light">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    Tomkova 139/22, Hradec Králové
                  </span>
                  <span className="flex items-center gap-1 font-light">
                    <Clock className="w-3 h-3 text-amber-400" />
                    St–Čt 14–22, Pá 14–00, So 16–00
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/60 transition-colors cursor-pointer"
                aria-label="Zavřít okno"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Embed */}
            <div className="relative p-2 sm:p-5 bg-zinc-950">
              {/* Loading State Spinner */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 z-10">
                  <Loader2 className="w-8 h-8 text-amber-500 animate-spin mb-3" />
                  <p className="text-xs text-zinc-400 tracking-wider font-light">Načítám rezervační systém Resos...</p>
                </div>
              )}

              {/* Resos Booking System Iframe */}
              <div className="w-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                <iframe
                  src="https://putna-bar.resos.com/booking"
                  width="100%"
                  height="600px"
                  frameBorder="0"
                  style={{ borderRadius: '0.5rem', display: 'block' }}
                  title="Rezervace stolu v Putna Baru"
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>

              {/* Direct Link Fallback */}
              <div className="mt-3 pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2 border-t border-zinc-800/80 px-2">
                <div className="flex items-center gap-1.5 font-light">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Rezervace je ihned potvrzena do systému Putna Baru</span>
                </div>
                <a
                  href="https://putna-bar.resos.com/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium hover:underline"
                >
                  <span>Otevřít v novém okně</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
