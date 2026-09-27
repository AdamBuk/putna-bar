import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { CalendarCheck } from 'lucide-react';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200 flex flex-col font-sans">
      {/* Top Fixed Navigation */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Content Sections with alternating subtle tones */}
      <main className="flex-1">
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />
        <AboutSection onOpenReservation={() => setIsReservationOpen(true)} />
        <MenuSection onOpenReservation={() => setIsReservationOpen(true)} />
        <AtmosphereSection />
        <ContactSection onOpenReservation={() => setIsReservationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Sleek Integrated Reservation Modal with Resos booking system iframe */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Floating Bottom Quick Action on Mobile Screens (Refined Warm Amber) */}
      <div className="fixed bottom-5 right-5 z-30 sm:hidden">
        <button
          type="button"
          onClick={() => setIsReservationOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-transform cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4 text-zinc-950" />
          <span>Rezervovat stůl</span>
        </button>
      </div>
    </div>
  );
}

export default App;
