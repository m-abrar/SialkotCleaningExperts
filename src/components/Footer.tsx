'use client';

import React from 'react';
import { Sparkles, Phone, MapPin, MessageSquare, ArrowUp, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { SERVICES_DATA } from '../data/servicesData';
import { createWhatsAppUrl, getHeroWhatsAppMessage } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Cleaning Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-darkNavy text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-brand-lightBlue" />
              </div>
              <div>
                <span className="text-white font-extrabold text-base tracking-tight block">
                  Sialkot Sofa Carpet
                </span>
                <span className="text-brand-lightBlue font-medium text-xs tracking-wider uppercase block">
                  Cleaning Experts
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-semibold mb-2">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-xs text-brand-lightBlue mb-4">
              "{BUSINESS_INFO.secondaryTagline}" • Serving homes, businesses, mosques & marriage halls across Sialkot.
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">
                5.0 Rating on Google (20 Reviews)
              </span>
            </div>

            <div>
              <a
                href={createWhatsAppUrl(getHeroWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact & Location
            </h4>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-1" />
                <span className="text-xs text-slate-300 leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs font-bold text-white hover:text-brand-lightBlue transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline"
                >
                  WhatsApp: +92 300 1232630
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-xs text-brand-lightBlue">✉️</span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-xs text-slate-300 hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-[11px] text-slate-500 block">
                Serving Hajipura, Cantt, Model Town, and greater Sialkot.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-xs font-semibold py-1 px-3 rounded-lg bg-white/5 hover:bg-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
