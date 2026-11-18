'use client';

import React, { useState } from 'react';
import { Tag, Sparkles, MessageSquare, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { OFFICIAL_PRICE_LIST, BUSINESS_INFO } from '../data/business';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const PriceList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Upholstery & Living',
    'Carpets & Mosques',
    'Bedding & Curtains',
    'Maintenance & Specialty',
  ];

  const filteredItems = activeCategory === 'All'
    ? OFFICIAL_PRICE_LIST
    : OFFICIAL_PRICE_LIST.filter(item => item.category === activeCategory);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightBlue text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            100% Transparent Rates
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-darkText tracking-tight mb-4">
            Official Price List
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Upfront, honest pricing with zero hidden charges. From single chair washes to large mosque halls and complete home maintenance.
          </p>
        </div>

        {/* Quality Banner from Owner */}
        <div className="max-w-4xl mx-auto mb-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-brand-deepNavy text-white shadow-card flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white shrink-0 shadow-md">
            <ShieldCheck className="w-6 h-6 text-brand-lightBlue" />
          </div>
          <div>
            <p className="text-xs font-bold text-brand-lightBlue uppercase tracking-wider mb-0.5">
              Our Professional Standard
            </p>
            <p className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
              "{BUSINESS_INFO.qualityPromise}"
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-brand-softBg text-slate-600 hover:text-brand-blue hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Price Table / Grid */}
        <div className="max-w-5xl mx-auto bg-brand-softBg rounded-3xl p-4 sm:p-8 border border-slate-200/80 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item, index) => {
              const whatsappMessage = `Assalamualaikum, I would like to book or inquire about your ${item.service} (${item.price} ${item.unit ? item.unit : ''}). Please confirm availability.`;
              const whatsappUrl = createWhatsAppUrl(whatsappMessage);

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 border border-slate-200/70 hover:border-brand-blue/40 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-[11px] font-semibold text-brand-blue uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-brand-darkText group-hover:text-brand-blue transition-colors">
                        {item.service}
                      </h3>
                      {item.note && (
                        <p className="text-xs text-emerald-700 font-medium mt-1 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item.note}</span>
                        </p>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-base sm:text-lg font-extrabold text-brand-darkText">
                        {item.price}
                      </div>
                      {item.unit && (
                        <span className="text-xs text-slate-500 font-medium block">
                          {item.unit}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      Doorstep Sialkot Service
                    </span>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Book on WhatsApp</span>
                      <ArrowRight className="w-3 h-3 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special package footer notice */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs text-slate-500">
                Need bulk cleaning for an entire house, marriage hall, or mosque?
              </p>
              <p className="text-sm font-bold text-brand-darkText">
                Contact us directly for custom volume packages and schedule visits.
              </p>
            </div>

            <a
              href="#special-offer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              <span>View 7-Seat Sofa Deal (Rs. 3,500)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
