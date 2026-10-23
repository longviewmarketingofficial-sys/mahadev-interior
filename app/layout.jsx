import './globals.css';

export const metadata = {
  metadataBase: new URL('https://mahadev-interior.vercel.app'),
  title: 'Mahadev Interior Designer & Mahadev Decor | South Bopal, Ahmedabad',
  description: 'Mahadev Interior Designer (Designing Dreams, Creating Reality) & Mahadev Decor (Elevate Your Living). Bespoke residential & commercial interior design and luxury home decor showroom in South Bopal, Ahmedabad.',
  keywords: [
    'Interior Designer Ahmedabad',
    'Interior Designer South Bopal',
    'Mahadev Interior Designer',
    'Mahadev Decor',
    'Home Decor Showroom South Bopal',
    'Modular Kitchen Ahmedabad',
    'Luxury Sofas Ahmedabad',
    '3D Interior Design Ahmedabad',
    'Turnkey Interior Ahmedabad',
  ],
  authors: [{ name: 'Mahadev Interior Designer & Decor' }],
  openGraph: {
    title: 'Mahadev Interior Designer & Mahadev Decor | South Bopal, Ahmedabad',
    description: 'We don\'t just design spaces, We design your lifestyle. Visit our studio and luxury showroom in South Bopal, Ahmedabad.',
    url: 'https://mahadev-interior.vercel.app',
    siteName: 'Mahadev Interior & Decor',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'Mahadev Interior Designer & Decor - Luxury Living Room',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mahadev Interior Designer & Mahadev Decor',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85',
    telephone: ['+919664391486', '+919352282905'],
    url: 'https://mahadev-interior.vercel.app',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 22 Serenity Satyam, Near Marigold Circle',
      addressLocality: 'South Bopal',
      addressRegion: 'Gujarat',
      postalCode: '380058',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.0469',
      longitude: '72.4858',
    },
    priceRange: '₹₹₹',
    slogan: 'We don\'t just design spaces, We design your lifestyle.',
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-warmwhite antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
