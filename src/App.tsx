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
    <div className="min-h-screen bg-[#08090e] text-slate-100 selection:bg-pink-500 selection:text-white flex flex-col">
      {/* Top Fixed Navigation */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Content Sections */}
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

      {/* Floating Bottom Quick Action on Mobile Screens */}
      <div className="fixed bottom-5 right-5 z-30 sm:hidden">
        <button
          type="button"
          onClick={() => setIsReservationOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(244,63,94,0.6)] active:scale-95 transition-transform"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Rezervovat</span>
        </button>
      </div>
    </div>
  );
}

export default App;
