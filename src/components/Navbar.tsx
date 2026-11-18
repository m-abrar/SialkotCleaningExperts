import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles, MessageSquare, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { createWhatsAppUrl, getHeroWhatsAppMessage } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Special Offer', href: '#special-offer', isSpecial: true },
    { label: 'Price List', href: '#pricing' },
    { label: 'Services', href: '#services' },
    { label: 'Our Story', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Special Offer Announcement Strip */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white text-[11px] sm:text-xs font-bold py-1.5 px-4 text-center flex items-center justify-center gap-2 shadow-sm">
        <Flame className="w-3.5 h-3.5 animate-pulse shrink-0" />
        <span>
          Special Sofa Cleaning Offer: 7 Seats for Rs. 3,500 Only! (Save Rs. 700)
        </span>
        <a
          href="#special-offer"
          onClick={(e) => handleNavClick(e, '#special-offer')}
          className="underline ml-1 hover:text-amber-100 hidden sm:inline"
        >
          View Details &rarr;
        </a>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-deepNavy/95 backdrop-blur-md shadow-lg py-2.5'
            : 'bg-brand-deepNavy py-3.5 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-brand-lightBlue" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-sm sm:text-base tracking-tight leading-tight group-hover:text-brand-lightBlue transition-colors">
                  Sialkot Sofa Carpet
                </span>
                <span className="text-brand-lightBlue font-medium text-xs tracking-wider uppercase">
                  Cleaning Experts
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                    link.isSpecial
                      ? 'text-amber-300 hover:text-white bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Call / WhatsApp CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={createWhatsAppUrl(getHeroWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs xl:text-sm font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs xl:text-sm font-bold text-white bg-brand-blue hover:bg-brand-blueHover rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="sm:hidden p-2 text-white bg-brand-blue hover:bg-brand-blueHover rounded-lg"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-darkNavy border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    link.isSpecial
                      ? 'text-amber-300 bg-amber-400/10 font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-base font-bold text-white bg-brand-blue hover:bg-brand-blueHover rounded-xl shadow-md transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={createWhatsAppUrl(getHeroWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-base font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-xl hover:bg-emerald-900/40 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
