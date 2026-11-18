import { BUSINESS_INFO } from '../data/business';

export function createWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}`;
  if (!message) {
    return baseUrl;
  }
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export function getHeroWhatsAppMessage(): string {
  return "Assalamualaikum, I would like to inquire about your cleaning services in Sialkot.";
}

export function getSpecialOfferWhatsAppMessage(): string {
  return "Assalamualaikum, I would like to claim the Special Sofa Cleaning Discount Offer (7 Seats for Rs. 3,500). Please share available booking slots.";
}

export function getServiceWhatsAppMessage(serviceTitle: string): string {
  return `Assalamualaikum, I am interested in ${serviceTitle}. Please share details and pricing.`;
}

export function getBookingWhatsAppMessage(data: {
  fullName: string;
  phone: string;
  service: string;
  areaAddress: string;
  notes?: string;
}): string {
  const parts = [
    `*New Cleaning Service Inquiry*`,
    `--------------------------------`,
    `*Customer Name:* ${data.fullName.trim()}`,
    `*Contact Phone:* ${data.phone.trim()}`,
    `*Requested Service:* ${data.service}`,
    `*Location/Address:* ${data.areaAddress.trim()}`,
  ];

  if (data.notes && data.notes.trim()) {
    parts.push(`*Notes/Details:* ${data.notes.trim()}`);
  }

  parts.push(``, `Assalamualaikum, I submitted this request from your website and would like to arrange the service.`);

  return parts.join('\n');
}

export function openWhatsAppWithContext(message?: string): void {
  const url = createWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
