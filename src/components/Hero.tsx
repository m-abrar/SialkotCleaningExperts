import React from 'react';
import { Phone, Star, MessageSquare, ShieldCheck, CheckCircle2, Clock, Flame, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { createWhatsAppUrl, getHeroWhatsAppMessage } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 bg-brand-deepNavy overflow-hidden text-white">
      {/* Decorative subtle background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-brand-lightBlue text-xs sm:text-sm font-semibold tracking-wider uppercase">
                <Globe className="w-3.5 h-3.5 text-brand-lightBlue" />
                <span>International Standards</span>
              </div>

              <a
                href="#special-offer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs sm:text-sm font-bold hover:bg-red-500/30 transition-colors"
              >
                <Flame className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                <span>7-Seat Sofa Package: Rs. 3,500</span>
              </a>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Bring Your Sofas & Carpets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-200">Back to Life.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              International operational standards brought home to Pakistan. Professional cleaning for sofas, carpets, mattresses, blankets, and spaces across homes, mosques, marriage halls, and offices in Sialkot.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={createWhatsAppUrl(getHeroWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-brand-blue hover:bg-brand-blueHover rounded-xl shadow-lg hover:shadow-brand-blue/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Indicator & Badges */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-6 sm:gap-8">
              {/* Google Rating Badge */}
              <a
                href={BUSINESS_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 transition-colors"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-left">
                  <span className="block font-bold text-sm text-white group-hover:text-brand-lightBlue transition-colors">
                    {BUSINESS_INFO.rating.toFixed(1)} Google Rating
                  </span>
                  <span className="block text-xs text-slate-400">
                    {BUSINESS_INFO.reviewsCount} Verified Reviews
                  </span>
                </div>
              </a>

              {/* Service Badges */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                <span>All Over Sialkot</span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Quick Response</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card with subtle border & shadow */}
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 shadow-elevated bg-brand-darkNavy">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85"
                  alt="Professional deep cleaning of upholstered sofa furniture in Sialkot"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepNavy/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Micro Badge on image */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-deepNavy/90 backdrop-blur-md p-4 rounded-xl border border-white/15 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-brand-lightBlue font-semibold uppercase tracking-wider">KSA Operational Background</p>
                    <p className="text-sm font-bold text-white">Sofas, Carpets, Mosques & Venues</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-blue/30 border border-brand-blue flex items-center justify-center text-brand-lightBlue">
                    <CheckCircle2 className="w-5 h-5 text-brand-lightBlue" />
                  </div>
                </div>
              </div>

              {/* Floating Discount Tag */}
              <a
                href="#special-offer"
                className="hidden sm:flex absolute -top-4 -right-4 bg-gradient-to-r from-red-600 to-amber-600 text-white px-4 py-2.5 rounded-xl shadow-xl border border-white/20 items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              >
                <Flame className="w-4 h-4 fill-white animate-bounce" />
                <div className="text-xs font-bold leading-tight">
                  <span className="block">7 Sofa Seats</span>
                  <span className="text-[11px] text-amber-200">Only Rs. 3,500</span>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
