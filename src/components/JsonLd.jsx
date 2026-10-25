import business from '../data/business.js';

export default function JsonLd() {
  const areas = [business.city, ...business.serviceAreas.nearby].map((name) => ({
    '@type': 'City',
    name: `${name}, ${business.state}`,
  }));

  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${business.siteUrl}/#business`,
    name: business.name,
    description: `Junk removal, furniture and appliance hauling, garage cleanouts and yard debris removal in ${business.serviceAreaLabel}.`,
    url: business.siteUrl,
    telephone: business.phone.raw,
    image: `${business.siteUrl}${business.logo}`,
    logo: `${business.siteUrl}${business.logo}`,
    priceRange: business.priceRange,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: 'US',
    },
    areaServed: areas,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: business.openingHoursSpec.days,
        opens: business.openingHoursSpec.opens,
        closes: business.openingHoursSpec.closes,
      },
    ],
    makesOffer: business.services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
