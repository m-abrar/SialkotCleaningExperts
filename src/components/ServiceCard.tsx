import React from 'react';
import { Armchair, Layers, Bed, Sparkles, Building2, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { createWhatsAppUrl, getServiceWhatsAppMessage } from '../utils/whatsapp';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ElementType> = {
  Armchair,
  Layers,
  Bed,
  Sparkles,
  Building2,
  CheckCircle2,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Sparkles;
  const whatsappUrl = createWhatsAppUrl(getServiceWhatsAppMessage(service.title));

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Card Image */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
          <img
            src={service.image}
            alt={`${service.title} in Sialkot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-brand-deepNavy/90 backdrop-blur-sm p-2 rounded-xl text-brand-lightBlue border border-white/10 shadow-sm">
            <IconComponent className="w-5 h-5 text-brand-lightBlue" />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-brand-darkText mb-2.5 group-hover:text-brand-blue transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-brand-mutedText leading-relaxed mb-4">
            {service.shortDesc}
          </p>

          {/* Quick bullet points */}
          <ul className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action */}
      <div className="px-6 pb-6 pt-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-brand-softBg hover:bg-brand-lightBlue text-brand-blue font-bold text-sm border border-brand-blue/20 hover:border-brand-blue/40 transition-all group-hover:bg-brand-blue group-hover:text-white"
        >
          <span className="inline-flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Inquire on WhatsApp
          </span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
