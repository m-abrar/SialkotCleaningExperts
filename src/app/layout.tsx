import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { BUSINESS_INFO } from '../data/business';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Sofa, Carpet & Mattress Cleaning in Sialkot | Sialkot Sofa Carpet Cleaning Experts',
  description:
    'Looking for sofa, carpet, mattress, deep or office cleaning in Sialkot? Contact Sialkot Sofa Carpet Cleaning Experts to enquire about cleaning services.',
  keywords: [
    'Sofa cleaning in Sialkot',
    'Carpet cleaning in Sialkot',
    'Mattress cleaning in Sialkot',
    'Deep cleaning services Sialkot',
    'Office cleaning in Sialkot',
    'Cleaning services in Hajipura',
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    title: 'Sofa, Carpet & Mattress Cleaning in Sialkot | Sialkot Sofa Carpet Cleaning Experts',
    description:
      'Looking for sofa, carpet, mattress, deep or office cleaning in Sialkot? Contact Sialkot Sofa Carpet Cleaning Experts to enquire about cleaning services.',
    siteName: BUSINESS_INFO.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: BUSINESS_INFO.name,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    telephone: BUSINESS_INFO.internationalPhone,
    email: BUSINESS_INFO.email,
    hasMap: BUSINESS_INFO.mapSearchUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.landmark,
      addressLocality: 'Sialkot',
      postalCode: '51310',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.4945,
      longitude: 74.5229,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '20',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: 'Rs. 250 - Rs. 4,500',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '20:00',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans bg-brand-softBg text-brand-darkText antialiased selection:bg-brand-blue selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
