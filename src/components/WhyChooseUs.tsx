import React from 'react';
import { Sparkles, Home, MapPin, CalendarCheck, Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Germicidal Solutions & Industrial Machinery",
      description: "We utilize premium-grade germicidal solutions and advanced industrial-strength cleaning machinery.",
      icon: ShieldCheck,
    },
    {
      title: "Professional Cleaning Services",
      description: "Dedicated solutions for sofas, carpets, mattresses, and everyday living or working spaces.",
      icon: Sparkles,
    },
    {
      title: "Home & Workplace Cleaning",
      description: "Versatile services tailored for residential homes, flats, executive offices, and commercial spaces.",
      icon: Home,
    },
    {
      title: "Local Sialkot Service",
      description: "A local cleaning team based right besides Govt Girls High School on Haji Pura Road in Sialkot.",
      icon: MapPin,
    },
    {
      title: "Easy & Direct Booking",
      description: "Contact the business directly via WhatsApp or phone call to discuss your exact needs and schedule.",
      icon: CalendarCheck,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Rating Feature Box */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightBlue text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
              Why Choose Us
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-darkText tracking-tight mb-5 leading-tight">
              A Cleaner Space. <br className="hidden sm:inline" />
              <span className="text-brand-blue">A Better Feeling.</span>
            </h2>

            <p className="text-base text-brand-mutedText leading-relaxed mb-8">
              Cleaning should feel simple. We help customers in Sialkot explore cleaning solutions for their homes and workplaces with dependable care and clear communication.
            </p>

            {/* Google Rating Showcase Card */}
            <div className="bg-brand-softBg rounded-2xl p-6 border border-slate-200/80 shadow-soft">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500" />
                  ))}
                </div>
                <span className="font-extrabold text-brand-darkText text-lg">{BUSINESS_INFO.rating.toFixed(1)} / 5.0</span>
              </div>
              <p className="text-sm font-bold text-brand-darkText mb-1">
                Verified Google Profile
              </p>
              <p className="text-xs text-brand-mutedText mb-4">
                Reflecting {BUSINESS_INFO.reviewsCount} customer reviews in Sialkot.
              </p>
              <a
                href={BUSINESS_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-brand-blueHover transition-colors"
              >
                <span>View Google profile rating</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Feature Grid Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-brand-softBg border border-slate-200/80 hover:border-brand-blue/30 hover:bg-brand-lightBlue/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-blue mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-darkText mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-mutedText leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
