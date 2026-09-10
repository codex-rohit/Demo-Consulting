/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedPackage, setPreselectedPackage] = useState<string>('Free 30-Minute Consultation');

  const handleOpenBooking = (pkg?: string) => {
    if (pkg) {
      setPreselectedPackage(pkg);
    } else {
      setPreselectedPackage('Free 30-Minute Consultation');
    }
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans antialiased flex flex-col selection:bg-[#00B4D8]/20 selection:text-[#1F4788] pb-16 sm:pb-0">
      
      {/* 1. STICKY NAVIGATION */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections strictly in order */}
      <main className="flex-1">
        
        {/* 2. HERO SECTION */}
        <Hero onOpenBooking={() => handleOpenBooking('Free 30-Minute Consultation')} />

        {/* 3. ABOUT / CREDIBILITY SECTION */}
        <About onOpenBooking={() => handleOpenBooking('Free 30-Minute Consultation')} />

        {/* 4. EXPERTISE AREAS / SERVICES */}
        <Services onOpenBooking={(serviceTitle) => handleOpenBooking(serviceTitle ? `${serviceTitle} Consultation` : undefined)} />

        {/* 5. PROCESS / APPROACH SECTION */}
        <Process onOpenBooking={() => handleOpenBooking('Step 1: Discovery Call')} />

        {/* 6. RESULTS / SUCCESS STORIES */}
        <Results onOpenBooking={() => handleOpenBooking('Strategy Consultation')} />

        {/* 7. TESTIMONIALS / SOCIAL PROOF */}
        <Testimonials />

        {/* 8. PRICING / INVESTMENT */}
        <Pricing onSelectPackage={(pkg) => handleOpenBooking(pkg)} />

        {/* 9. FAQ SECTION */}
        <FAQ onOpenBooking={() => handleOpenBooking('Free 30-Minute Consultation')} />

        {/* 10. CTA SECTION (Before Footer) */}
        <CTASection onOpenBooking={() => handleOpenBooking('Free 30-Minute Consultation')} />

      </main>

      {/* 11. FOOTER */}
      <Footer />

      {/* Interactive Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        preselectedPackage={preselectedPackage}
      />

      {/* Floating WhatsApp Quick Connect for India */}
      <FloatingWhatsApp />

      {/* Mobile-First Sticky Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking('Free 30-Minute Consultation')} />

    </div>
  );
}
