import React from 'react';
import { Tag, Sparkles, CheckCircle2, MessageSquare, Phone, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { createWhatsAppUrl, getSpecialOfferWhatsAppMessage } from '../utils/whatsapp';

export const SpecialOffer: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(getSpecialOfferWhatsAppMessage());

  return (
    <section id="special-offer" className="relative py-12 lg:py-16 bg-gradient-to-b from-brand-deepNavy via-brand-darkNavy to-brand-deepNavy text-white overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900/80 to-blue-950/70 border-2 border-brand-blue/40 shadow-elevated p-6 sm:p-10 lg:p-12 overflow-hidden">
          
          {/* Top Floating Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-red-400 animate-pulse" />
              Limited-Time Discount Offer
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-brand-lightBlue font-semibold bg-white/10 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{BUSINESS_INFO.secondaryTagline}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details & Pricing */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
                Special Sofa Cleaning Package
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Sialkot Sofa Carpet Cleaning Experts brings you an exclusive discount! Give your living room sofa a fresh, hygienic new look with deep extraction and stain removal.
              </p>

              {/* Price Highlight Banner */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-brand-lightBlue uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    7 Sofa Seats Package
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      Rs. 3,500
                    </span>
                    <span className="text-base sm:text-lg text-slate-400 line-through font-semibold">
                      Rs. 4,200
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-400/40">
                      Save Rs. 700!
                    </span>
                  </div>
                </div>

                <div className="sm:border-l sm:border-white/20 sm:pl-5">
                  <span className="text-xs text-slate-300 block">Additional Seats:</span>
                  <span className="text-base font-bold text-brand-lightBlue">
                    Only Rs. 450 <span className="text-xs text-slate-300 font-normal">/ extra seat</span>
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {[
                  'Professional Sofa Cleaning',
                  'Deep Cleaning & Stain Removal',
                  'Fresh, Clean & Hygienic Sofas',
                  'Service Available All Over Sialkot',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Claim Offer on WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-lightBlue" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Feature Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-brand-deepNavy">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                  alt="Sofa deep cleaning offer in Sialkot"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepNavy via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-brand-darkNavy/90 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-brand-lightBlue font-bold uppercase">All Sialkot Neighborhoods</p>
                      <p className="text-sm font-bold text-white">Doorstep Service with Direct Booking</p>
                    </div>
                    <span className="text-xl">🛋️</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
