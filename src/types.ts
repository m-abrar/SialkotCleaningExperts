export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  features: string[];
  recommendedFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ReviewData {
  rating: number;
  reviewCount: number;
  source: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  service: string;
  areaAddress: string;
  notes: string;
}
