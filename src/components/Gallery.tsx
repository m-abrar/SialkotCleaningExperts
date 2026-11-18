'use client';

import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_DATA } from '../data/galleryData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Sofa & Upholstery', 'Carpet Cleaning', 'Mattress Cleaning', 'Deep Cleaning', 'Office & Workplace'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-brand-softBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightBlue text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-darkText tracking-tight mb-4">
            See the Difference a Deep Clean Can Make
          </h2>
          <p className="text-sm sm:text-base text-brand-mutedText leading-relaxed">
            Browse our <span className="font-semibold text-brand-darkText">Cleaning Inspiration Gallery</span> highlighting upholstery extraction, rug care, and professional space transformations.
          </p>

          {/* Filter Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-brand-blue hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-card cursor-pointer border border-slate-200/80 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay with detail */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deepNavy/90 via-brand-deepNavy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-semibold text-brand-lightBlue uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                  <Maximize2 className="w-3.5 h-3.5 text-brand-lightBlue" />
                  <span>Click to view larger</span>
                </div>
              </div>

              {/* Bottom visible bar when not hovered */}
              <div className="p-3.5 bg-white border-t border-slate-100 group-hover:opacity-0 transition-opacity">
                <p className="text-xs font-bold text-brand-darkText truncate">{item.title}</p>
                <p className="text-[11px] text-brand-mutedText">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
