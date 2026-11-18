export const BUSINESS_INFO = {
  name: "Sialkot Sofa Carpet Cleaning Experts",
  shortName: "Sialkot Cleaning Experts",
  badgeSlogan: "ALL-IN-ONE REFRESH",
  tagline: "International Experience, Professional Cleaning, and a Commitment to Pakistan.",
  secondaryTagline: "Your Comfort, Our Priority!",
  qualityPromise: "We utilize premium-grade germicidal solutions and advanced industrial-strength cleaning machinery.",
  phone: "0300 1232630",
  internationalPhone: "+92 300 1232630",
  phoneRaw: "+923001232630",
  whatsappNumber: "923001232630",
  whatsappUrl: "https://wa.me/923001232630",
  email: "sialkotsofacarpet@gmail.com",
  address: "Besides Government Girls High School, Haji Pura Road, Sialkot, 51310, Pakistan",
  landmark: "Besides Government Girls High School, Haji Pura Road",
  area: "Hajipura, Sialkot",
  coverageArea: "All Over Sialkot (Homes, Offices, Mosques, Marriage Halls & Commercial Spaces)",
  rating: 5.0,
  reviewsCount: 20,
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Government+Girls+High+School+Haji+Pura+Road+Sialkot",
  mapSearchUrl: "https://www.google.com/maps/search/?api=1&query=Government+Girls+High+School+Haji+Pura+Road+Sialkot",
  mapEmbedUrl: "https://www.google.com/maps?q=Haji+Pura+Road+Hajipura+Sialkot+Pakistan&output=embed",
  openingHours: "Mon - Sun: 8:00 AM - 8:00 PM",
  category: "Cleaners",
  founderBackground: "Former Operations Manager for a leading cleaning company in the Kingdom of Saudi Arabia (KSA)",
  specialOffer: {
    title: "Special Discount Offer – Sofa Cleaning",
    badge: "Limited-Time Discount Offer",
    seats: "7 Sofa Seats Special Package",
    regularPrice: "Rs. 4,200",
    discountedPrice: "Rs. 3,500",
    extraSeatPrice: "Rs. 450",
    highlights: [
      "Professional Sofa Cleaning",
      "Deep Cleaning & Stain Removal",
      "Fresh, Clean & Hygienic Sofas",
      "Service Available All Over Sialkot",
    ]
  }
} as const;

export interface PriceListItem {
  service: string;
  price: string;
  unit?: string;
  category: 'Upholstery & Living' | 'Carpets & Mosques' | 'Bedding & Curtains' | 'Maintenance & Specialty';
  note?: string;
}

export const OFFICIAL_PRICE_LIST: PriceListItem[] = [
  // Upholstery & Living
  { service: "Sofa Wash", price: "Rs 500 - Rs 700", unit: "per seat", category: "Upholstery & Living", note: "Special Package: 7 Seats for Rs 3,500" },
  { service: "Cushion Wash", price: "Rs 100", unit: "per piece", category: "Upholstery & Living" },
  { service: "Dining Chair Wash", price: "Rs 250", unit: "per chair", category: "Upholstery & Living" },
  { service: "Bed Wash", price: "Rs 2000 - Rs 2500", unit: "per bed", category: "Upholstery & Living" },

  // Carpets & Mosques
  { service: "Carpet Cleaning", price: "Rs 25", unit: "per Sq. Ft", category: "Carpets & Mosques", note: "Deep fiber extraction" },
  { service: "Mosque Cleaning & Wash", price: "Rs 15", unit: "per Sq. Ft", category: "Carpets & Mosques", note: "Special rates for holy spaces" },
  { service: "Prayer Mat Wash", price: "Rs 100 - Rs 120", unit: "per mat", category: "Carpets & Mosques" },

  // Bedding & Curtains
  { service: "Mattress Wash (Double)", price: "Rs 3500 - Rs 4000", unit: "per double mattress", category: "Bedding & Curtains" },
  { service: "Mattress Wash (Single)", price: "Rs 2000", unit: "per single mattress", category: "Bedding & Curtains" },
  { service: "Blanket Wash", price: "Rs 1500 - Rs 2000", unit: "per blanket", category: "Bedding & Curtains" },
  { service: "Curtains Wash", price: "Rs 1500", unit: "per piece", category: "Bedding & Curtains" },

  // Maintenance & Specialty
  { service: "AC Service", price: "Rs 3000", unit: "per unit", category: "Maintenance & Specialty", note: "Thorough chemical wash" },
  { service: "AC Installation", price: "Rs 4500", unit: "per unit", category: "Maintenance & Specialty" },
  { service: "Water Tank Cleaning", price: "Rs 4500", unit: "complete tank", category: "Maintenance & Specialty", note: "Disinfection & sludge removal" },
  { service: "Solar Panel Service", price: "Rs 700", unit: "per plate", category: "Maintenance & Specialty", note: "Efficiency restoration" },
];
