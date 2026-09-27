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

  // Reset loading state when modal reopens
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
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#0f111d] rounded-2xl overflow-hidden shadow-2xl border border-pink-500/30 ring-1 ring-purple-500/30 z-10 my-auto"
            style={{
              boxShadow: '0 0 50px -10px rgba(244, 63, 94, 0.25), 0 0 30px -10px rgba(168, 85, 247, 0.25)'
            }}
          >
            {/* Top Glowing Gradient Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400" />

            {/* Modal Header */}
            <div className="p-4 sm:p-6 pb-3 border-b border-white/10 flex items-start justify-between bg-black/30">
              <div className="space-y-1 pr-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  <Sparkles className="w-3 h-3 text-pink-400" />
                  <span>Online Rezervace Stolu</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Putna Bar</span>
                  <span className="text-white/40 font-normal">|</span>
                  <span className="text-pink-400 font-light text-lg sm:text-xl">Rezervační systém</span>
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    Tomkova 139/22, Hradec Králové
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    St–Čt 14–22, Pá 14–00, So 16–00
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 transition-colors"
                aria-label="Zavřít okno"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Embed */}
            <div className="relative p-2 sm:p-5 bg-[#0a0c14]">
              {/* Loading State Spinner */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0c14] z-10">
                  <Loader2 className="w-10 h-10 text-pink-500 animate-spin mb-3" />
                  <p className="text-sm text-slate-400 font-medium">Načítám rezervační systém Resos...</p>
                </div>
              )}

              {/* Resos Booking System Iframe */}
              <div className="w-full bg-[#111320] rounded-xl overflow-hidden border border-white/5">
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

              {/* Fallback / Direct Link Footer */}
              <div className="mt-3 pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 border-t border-white/5 px-2">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-pink-400" />
                  <span>Rezervace je ihned potvrzena do systému Putna Baru</span>
                </div>
                <a
                  href="https://putna-bar.resos.com/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 font-medium hover:underline"
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
