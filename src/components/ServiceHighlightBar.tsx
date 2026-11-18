'use client';

import React from 'react';
import { Armchair, Layers, Bed, Sparkles, Building2, Tag } from 'lucide-react';

export const ServiceHighlightBar: React.FC = () => {
  const highlights = [
    { title: 'Sofa Cleaning', subtitle: 'From Rs. 3,500', icon: Armchair, href: '#special-offer', isPromo: true },
    { title: 'Carpet Cleaning', subtitle: 'Homes & Mosques', icon: Layers, href: '#services' },
    { title: 'Mattress Cleaning', subtitle: 'Deep Sanitization', icon: Bed, href: '#services' },
    { title: 'Curtain Cleaning', subtitle: 'Delicate Drapes', icon: Sparkles, href: '#services' },
    { title: 'Blanket & Quilts', subtitle: 'Winter Bedding', icon: Tag, href: '#services' },
    { title: 'Commercial & Venues', subtitle: 'Banquet & Halls', icon: Building2, href: '#services' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-3 sm:p-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl transition-all text-center border ${
                  item.isPromo
                    ? 'bg-amber-50/50 hover:bg-amber-100/60 border-amber-200/80 hover:border-amber-300'
                    : 'hover:bg-brand-lightBlue/60 border-transparent hover:border-brand-blue/20'
                }`}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center transition-all mb-2.5 shadow-sm ${
                  item.isPromo
                    ? 'bg-amber-500 text-white group-hover:bg-amber-600'
                    : 'bg-brand-lightBlue group-hover:bg-brand-blue text-brand-blue group-hover:text-white'
                }`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-brand-darkText group-hover:text-brand-blue leading-snug">
                  {item.title}
                </span>
                <span className={`text-[10px] mt-0.5 font-semibold ${item.isPromo ? 'text-amber-700' : 'text-slate-400'}`}>
                  {item.subtitle}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
