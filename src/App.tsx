import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialOffer } from './components/SpecialOffer';
import { ServiceHighlightBar } from './components/ServiceHighlightBar';
import { Services } from './components/Services';
import { PriceList } from './components/PriceList';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { ContactBooking } from './components/ContactBooking';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-softBg text-brand-darkText">
      {/* Sticky Header Navigation with Announcement Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* Section 2: Hero */}
        <Hero />

        {/* Exclusive Promotional Offer */}
        <SpecialOffer />

        {/* Section 3: Service Highlight Bar */}
        <ServiceHighlightBar />

        {/* Section 4: Complete Services */}
        <Services />

        {/* Official Price List from Flyer */}
        <PriceList />

        {/* Section 5: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 6: Before & After / Cleaning Inspiration Gallery */}
        <Gallery />

        {/* Section 7: Our Story & International Experience */}
        <About />

        {/* Section 8: Google Reviews Showcase */}
        <Reviews />

        {/* Section 9: FAQ Section */}
        <FAQ />

        {/* Section 10: Contact & Interactive Booking Form */}
        <ContactBooking />

        {/* Section 11: Location & Google Maps */}
        <Location />
      </main>

      {/* Section 12: Footer */}
      <Footer />

      {/* Section 13: Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
