'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-brand-deepNavy rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 hover:bg-black/75 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close image preview"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Image */}
        <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        {/* Modal Details */}
        <div className="p-6 bg-brand-darkNavy text-white">
          <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-blue/30 text-brand-lightBlue border border-brand-blue/40 mb-2">
            {item.category}
          </div>
          <h3 className="text-xl font-bold mb-1.5">{item.title}</h3>
          <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
