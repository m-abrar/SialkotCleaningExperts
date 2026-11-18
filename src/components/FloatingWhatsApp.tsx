'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { createWhatsAppUrl, getHeroWhatsAppMessage } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);
  const whatsappUrl = createWhatsAppUrl(getHeroWhatsAppMessage());

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center gap-3">
      
      {/* Speech bubble tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-brand-darkText px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/90 text-xs font-semibold animate-in fade-in slide-in-from-right-3">
          <span>Need cleaning? Chat on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 focus:outline-none"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat directly with Sialkot Sofa Carpet Cleaning Experts on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform group-hover:rotate-6" />
        
        {/* Subtle breathing ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none -z-10" />
      </a>
    </div>
  );
};
