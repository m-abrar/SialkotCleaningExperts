import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-softBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightBlue text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            What We Do
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-darkText tracking-tight mb-4">
            Complete Cleaning Solutions for Your Space
          </h2>
          <p className="text-base sm:text-lg text-brand-mutedText leading-relaxed">
            From your home to your workplace, explore cleaning services designed to refresh your surroundings.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};
