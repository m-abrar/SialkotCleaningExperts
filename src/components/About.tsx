import React from 'react';
import { MapPin, MessageSquare, Phone, Globe, Shield, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { createWhatsAppUrl, getHeroWhatsAppMessage } from '../utils/whatsapp';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Main Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightBlue text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            Our Story & Founder
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-darkText tracking-tight mb-4 leading-tight">
            International Experience. <br className="hidden sm:inline" />
            <span className="text-brand-blue">Professional Standards. Local Commitment.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {BUSINESS_INFO.tagline}
          </p>
        </div>

        {/* Narrative & Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Visuals & Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                alt="International standard cleaning operations in Sialkot"
                className="w-full h-[440px] sm:h-[500px] object-cover"
              />
            </div>

            {/* Saudi Arabia Experience Card */}
            <div className="absolute -bottom-6 -right-3 sm:bottom-6 sm:right-6 bg-brand-deepNavy text-white p-5 sm:p-6 rounded-2xl shadow-elevated border border-white/10 max-w-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-brand-blue flex items-center justify-center text-white shrink-0 shadow-md">
                  <Globe className="w-6 h-6 text-brand-lightBlue" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-lightBlue uppercase tracking-wider block">
                    KSA Operations Background
                  </span>
                  <span className="text-sm font-bold text-white block mt-0.5 leading-snug">
                    Former Operations Manager in Saudi Arabia
                  </span>
                  <span className="text-xs text-slate-300 block mt-1 leading-relaxed">
                    Bringing international quality control & service management back home to Sialkot.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-darkText tracking-tight mb-5">
              The Story Behind Sialkot Sofa Carpet Cleaning Experts
            </h3>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                The story of <strong className="text-brand-darkText">Sialkot Sofa Carpet Cleaning Experts</strong> began with a clear vision: to bring professional, high-quality cleaning services to the people of our beloved Pakistan.
              </p>

              <p>
                Before establishing this business in Pakistan, our founder worked in the <strong className="text-brand-darkText">Kingdom of Saudi Arabia (KSA) as an Operations Manager</strong> for a well-known cleaning company. During this professional journey, he gained deep hands-on expertise in cleaning operations, service management, rigorous quality control, customer satisfaction, and international cleaning standards.
              </p>

              <p>
                That experience inspired him to bring his knowledge, skills, and professional expertise back home and utilize his potential for the benefit of our own people. We strongly believe that Pakistani customers deserve the same level of professionalism, quality, reliability, and care that is expected in international markets.
              </p>

              <p>
                Today, we deliver dependable cleaning solutions to <strong>homes, businesses, mosques, marriage halls, and commercial establishments</strong> throughout Sialkot.
              </p>
            </div>

            {/* Specialization tags */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              {[
                '🛋️ Sofa Cleaning',
                '🧶 Carpet Cleaning',
                '🛏️ Mattress Cleaning',
                '🪟 Curtain Cleaning',
                '🧣 Blanket & Quilt Cleaning',
                '🪑 Chair & Banquet Seating',
                '🏢 Commercial & Mosques',
              ].map((item, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-brand-softBg text-xs font-bold text-brand-darkText border border-slate-200">
                  {item}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* Mission & Promise 2-Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-brand-softBg border border-slate-200/80 shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-brand-lightBlue flex items-center justify-center text-brand-blue mb-5">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-brand-darkText mb-3">Our Mission</h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To raise the standards of professional cleaning services in Pakistan by combining international operational experience with local commitment, modern cleaning techniques, and customer-focused service.
            </p>
          </div>

          {/* Promise Card */}
          <div className="p-8 rounded-3xl bg-brand-softBg border border-slate-200/80 shadow-soft">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-brand-darkText mb-3">Our Promise</h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We believe every customer deserves respect, honesty, quality workmanship, and dependable service. Your satisfaction is our motivation, and your trust is our greatest achievement.
            </p>
          </div>

        </div>

        {/* Action Callout Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-brand-deepNavy text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/30 border border-brand-blue flex items-center justify-center text-brand-lightBlue shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Proudly Serving All Over Sialkot, Pakistan</p>
              <p className="text-xs text-slate-300">Hajipura, Model Town, Cantt, Daska Road, Sambrial & all neighborhoods</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={createWhatsAppUrl(getHeroWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
