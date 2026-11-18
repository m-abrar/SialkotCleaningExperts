import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Location: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Location details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightBlue text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Service Area & Location
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-darkText tracking-tight mb-4">
              Visit or Locate Us in Sialkot
            </h2>

            <p className="text-sm sm:text-base text-brand-mutedText leading-relaxed mb-6">
              Our operations base is located right in the heart of Hajipura on Haji Pura Road, providing fast access to homes, commercial centers, and suburbs throughout Sialkot.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-brand-softBg border border-slate-200/80 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Head Office & Landmark</span>
                  <span className="text-sm sm:text-base font-bold text-brand-darkText block mt-0.5">
                    {BUSINESS_INFO.landmark}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">Hajipura, Sialkot, Pakistan</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-softBg border border-slate-200/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Operational Hours</span>
                  <span className="text-sm sm:text-base font-bold text-brand-darkText block mt-0.5">
                    {BUSINESS_INFO.openingHours}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white font-bold text-sm shadow-md transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-brand-darkText font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Before Visiting</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200 bg-slate-100 h-[380px] sm:h-[450px] relative">
              <iframe
                title="Sialkot Sofa Carpet Cleaning Experts Location"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Overlay pill for direct map link */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-slate-200 text-xs flex items-center justify-between gap-3">
                <span className="font-semibold text-brand-darkText">Haji Pura Road, Hajipura</span>
                <a
                  href={BUSINESS_INFO.mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-blue hover:text-brand-blueHover inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
