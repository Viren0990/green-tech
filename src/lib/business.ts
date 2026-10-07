// Single source of truth for the business name, address and phone (NAP).
// Must match CLAUDE.md section 1 exactly — every page and the structured data read from here.

export const SITE_URL = 'https://dmdgreentechrevive.com';

export const BUSINESS = {
  name: 'DMD Green Tech Revive',
  parentLine: 'Unit of DMD Gold Prosperity',
  phoneDisplay: '+91 97631 23699',
  phoneE164: '+919763123699',
  phoneHref: 'tel:+919763123699',
  whatsappHref: 'https://wa.me/919763123699?text=Hi%20DMD%20Green%20Tech%20Revive%2C%20I%20want%20to%20recycle%20my%20e-waste',
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
  social: {
    facebook: 'https://www.facebook.com/share/18AgGrVk1u/',
    linkedin: 'https://www.linkedin.com/company/dmd-green-tech-revive-private-limited/',
    instagram: 'https://www.instagram.com/dmd.greentechrevive',
  },
} as const;
