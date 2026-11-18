import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-brand-softBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightBlue text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            Customer Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-darkText tracking-tight mb-4">
            Trusted by Our Customers
          </h2>
          <p className="text-sm sm:text-base text-brand-mutedText leading-relaxed">
            We take pride in delivering dependable, quality cleaning solutions that satisfy residential and commercial clients across Sialkot.
          </p>
        </div>

        {/* Featured Rating Showcase Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-200/80 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Verified Google Profile Rating
          </div>

          <div className="text-5xl sm:text-6xl font-black text-brand-darkText mb-3 tracking-tight">
            5.0 <span className="text-2xl sm:text-3xl font-medium text-slate-400">/ 5.0</span>
          </div>

          {/* 5 Gold Stars */}
          <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-amber-400" />
            ))}
          </div>

          <p className="text-lg font-bold text-brand-darkText mb-2">
            Based on 20 Google Reviews
          </p>

          <p className="text-sm text-brand-mutedText max-w-xl mx-auto mb-8 leading-relaxed">
            Our 5.0-star Google rating reflects real customer satisfaction for sofa deep cleaning, carpet washing, and interior services in Sialkot, Pakistan.
          </p>

          {/* Primary Action to view reviews */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-deepNavy hover:bg-brand-darkNavy text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-brand-lightBlue" />
            </a>
          </div>

          {/* Verified hallmarks */}
          <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-500">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-blue" />
              <span>100% Genuine Profile</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-blue" />
              <span>Local Sialkot Service</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-blue" />
              <span>Transparent Estimates</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
