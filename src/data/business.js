// ─────────────────────────────────────────────────────────────
// NextWave Junk Removal Irvine — central business config.
// Edit everything about the business here; components read from this file.
// (Portfolio rule: no email addresses anywhere on the site.)
// ─────────────────────────────────────────────────────────────

const business = {
  name: 'NextWave Junk Removal Irvine',
  shortName: 'NextWave',
  tagline: 'Junk Removal',
  city: 'Irvine',
  state: 'CA',
  region: 'Orange County',
  serviceAreaLabel: 'Irvine and nearby areas',

  phone: {
    display: '(949) 749-3534',
    href: 'tel:+19497493534',
    raw: '+1-949-749-3534',
  },

  siteUrl: 'https://nextwavejunkremovalirvine.com',
  logo: '/images/nextwave-logo.png',
  logoAlt: 'NextWave Junk Removal Irvine surf emblem logo',

  hours: 'Mon – Sun: By appointment',
  openingHoursSpec: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '07:00', closes: '19:00' },
  priceRange: '$$',

  // Optional: paste a GoHighLevel (or other) inbound webhook URL here and the
  // estimate wizard will POST each submission to it as JSON.
  estimateWebhookUrl: '',

  // Optional: link to the Google Business Profile reviews page.
  googleReviewsUrl: '',

  // Theme tokens (mirrored as CSS variables in src/styles/global.css).
  colors: {
    ink: '#111416',
    paper: '#F4EFE4',
    sand: '#E7DDC9',
    pacific: '#1C4E6B',
    foam: '#DCEAEE',
    wax: '#F2B233',
  },

  serviceAreas: {
    neighborhoods: [
      'Woodbridge', 'Northwood', 'University Park', 'Turtle Rock', 'Quail Hill',
      'Portola Springs', 'Orchard Hills', 'Great Park', 'Westpark', 'Irvine Spectrum',
    ],
    nearby: ['Tustin', 'Costa Mesa', 'Newport Beach', 'Lake Forest', 'Laguna Hills', 'Santa Ana'],
  },

  services: [
    { icon: 'sofa', title: 'Furniture Removal', text: 'Couches, sectionals, mattresses, desks, dressers and patio sets — carried out from any room, any floor.' },
    { icon: 'fridge', title: 'Appliance Hauling', text: 'Fridges, washers, dryers, water heaters and old electronics, removed and routed for proper recycling.' },
    { icon: 'garage', title: 'Garage Cleanouts', text: 'Years of boxes, bins and forgotten gear cleared out so you can finally park inside again.' },
    { icon: 'yard', title: 'Yard & Debris Removal', text: 'Pots, planters, hoses, branches, old sheds and backyard piles hauled off and swept clean.' },
    { icon: 'home', title: 'Estate & Move-Out Cleanouts', text: 'Whole-home cleanouts for moves, rentals and estates, handled with care and on your timeline.' },
    { icon: 'hammer', title: 'Light Construction Debris', text: 'Drywall, flooring, cabinets and remodel leftovers loaded up and taken away after the project.' },
  ],

  steps: [
    { title: 'Tell us what’s going', text: 'Call or send a quick estimate request. Photos help us give you a tighter number.' },
    { title: 'Get your upfront price', text: 'We confirm the price before any lifting starts. No surprises, no pressure.' },
    { title: 'We haul it, you relax', text: 'Our crew loads everything, sweeps the area and leaves the space ready to use.' },
  ],

  pricingIncludes: [
    'Free, no-obligation estimates',
    'Price confirmed on-site before we start',
    'Pricing based on how much space your items take in the truck',
    'All loading, lifting and carrying included',
    'Disposal, donation and recycling fees included',
    'Sweep-up of the work area when we’re done',
    'No hidden fees or surprise add-ons',
  ],

  whyUs: [
    { title: 'Local to Irvine', text: 'We work the villages and neighborhoods we know, so scheduling stays quick and simple.' },
    { title: 'Upfront pricing', text: 'You hear the price before we lift a thing, and that’s the price you pay.' },
    { title: 'Respectful crews', text: 'Careful with floors, doorways and landscaping, and tidy when we leave.' },
    { title: 'Responsible disposal', text: 'Usable items go to donation and materials get recycled whenever possible.' },
  ],

  // Paste real customer reviews here (e.g. copied from Google). While this is
  // empty, the Reviews section shows the "why us" promise cards instead.
  // Shape: { name: 'First L.', area: 'Woodbridge', text: '...', rating: 5 }
  reviews: [],

  beforeAfter: [
    { label: 'Backyard Cleanup', before: '/images/backyard-before.jpg', after: '/images/backyard-after.jpg' },
    { label: 'Garage Cleanout', before: '/images/garage-cleanout-before.jpg', after: '/images/garage-cleanout-after.jpg' },
    { label: 'Full Garage Haul-Away', before: '/images/garage-haul-before.jpg', after: '/images/garage-haul-after.jpg' },
  ],

  faqs: [
    { q: 'How is junk removal priced?', a: 'Pricing is based on how much room your items take up in our truck, plus any special handling. We give you a free estimate and confirm the price on-site before we start.' },
    { q: 'Do you offer same-day or next-day pickup?', a: 'Often, yes. Availability depends on the day, so give us a call and we’ll find the soonest time that works for you.' },
    { q: 'Do I need to move items to the curb?', a: 'No. We pick up from wherever the items are — garage, backyard, bedroom, upstairs or the back of a storage unit.' },
    { q: 'What happens to my junk?', a: 'We sort loads so usable items can be donated and materials like metal, cardboard and electronics can be recycled. Only what’s left goes to the landfill.' },
    { q: 'Is there anything you can’t take?', a: 'We can’t haul hazardous materials such as paint, chemicals, fuel, asbestos or medical waste. If you’re not sure about an item, just ask.' },
    { q: 'Which areas do you serve?', a: 'We serve Irvine and nearby areas, including Tustin, Costa Mesa, Newport Beach, Lake Forest, Laguna Hills and Santa Ana.' },
  ],
};

export default business;
