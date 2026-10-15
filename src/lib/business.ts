// Single source of truth for the business name, address and phone (NAP).
// Must match CLAUDE.md section 1 exactly — every page and the structured data read from here.

export const SITE_URL = 'https://dmdgreentechrevive.com';

export const BUSINESS = {
  name: 'DMD GreenTech Revive',
  parentLine: 'Unit of DMD Gold Prosperity',
  // Both shown on the About page (Team and Timeline sections)
  founder: { name: 'Dhanaji Machhindra Dabade', role: 'Founder & CEO' },
  incorporated: '2022',
  services: ['E-waste collection and doorstep pickup', 'Data sanitisation', 'IT asset refurbishment', 'Recycling'],
  phoneDisplay: '+91 97631 23699',
  phoneE164: '+919763123699',
  phoneHref: 'tel:+919763123699',
  whatsappHref: 'https://wa.me/919763123699?text=Hi%20DMD%20GreenTech%20Revive%2C%20I%20want%20to%20recycle%20my%20e-waste',
  email: 'info@dmdgreentechrevive.com',
  address: {
    streetAddress: 'Office No-01, Amaryllis, Domkhel Rd, Wagholi',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '412207',
    addressCountry: 'IN',
  },
  addressDisplay: 'Office No-01, Amaryllis, Domkhel Rd, Wagholi, Pune, Maharashtra 412207, India',
  areaServed: ['Pune', 'Pimpri-Chinchwad'],
  // As shown on the contact page. Used for the visible text and the structured data.
  hours: {
    display: 'Mon-Sat: 9:00 AM - 6:00 PM',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  social: {
    facebook: 'https://www.facebook.com/share/18AgGrVk1u/',
    linkedin: 'https://www.linkedin.com/company/dmd-green-tech-revive-private-limited/',
    instagram: 'https://www.instagram.com/dmd.greentechrevive',
  },
} as const;
