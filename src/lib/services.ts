import type { GuideBlock } from '@/src/lib/guides';

// Service pages at /services/<slug> (CLAUDE.md T8). One page per service so each can
// rank for its own search. `published: false` keeps a page out of Google (noindex),
// the sitemap, llms.txt and site links until every [TODO] is filled in by the owner.

export interface ServicePage {
  slug: string;
  published: boolean;
  name: string; // Service name for structured data
  title: string; // On-page heading; names the service and Pune
  metaTitle: string;
  description: string;
  intro: string;
  forWho: string[];
  steps: { title: string; text: string }[];
  paperwork: GuideBlock[];
  accepted: string;
  pricing: string;
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'corporate-e-waste-disposal-pune',
    published: false,
    name: 'Corporate e-waste disposal',
    title: 'Corporate e-waste disposal in Pune',
    metaTitle: 'Corporate E-Waste Disposal in Pune',
    description:
      'Office e-waste pickup across Pune: laptops, servers, printers and more. Data wiped before processing, and paperwork for your compliance records.',
    intro:
      `Old laptops, servers, monitors and networking gear pile up in every office. We collect them from your premises anywhere in Pune, sanitise the data, refurbish what can be reused and send the rest for recycling, then give you the paperwork to show where it all went.`,
    forWho: [
      `IT, admin and facilities teams clearing out retired equipment`,
      `Companies replacing laptops or decommissioning server rooms`,
      `Organisations that count as a **bulk consumer** under the E-Waste (Management) Rules, 2022 and must hand e-waste only to a registered producer, refurbisher or recycler ([what that means](/guides/e-waste-rules-2022-business-checklist))`,
      `Offices that need proof of data destruction for clients or auditors`,
    ],
    steps: [
      { title: 'Book a pickup', text: `Tell us what you have, roughly how many items, and where. Use the form, call or WhatsApp us.` },
      { title: 'Collection from your office', text: `Our team collects the equipment from your premises.` },
      { title: 'Quality check', text: `Every item is inspected to see what can be refurbished and what must be recycled.` },
      { title: 'Data sanitisation', text: `Data on drives and devices is erased before anything is processed further. [TODO: owner to confirm — the method used (wiping standard, degaussing, shredding) and whether each drive is verified]` },
      { title: 'Segregation, refurbishment and recycling', text: `Working equipment is refurbished for reuse. The rest is dismantled and segregated so materials can be recovered and hazardous parts treated safely.` },
      { title: 'Paperwork', text: `You receive documents for your records, listed below.` },
    ],
    paperwork: [
      { type: 'p', text: `For each collection you receive a **certificate of recycling** for your records. [TODO: owner to confirm the full list — e.g. handover receipt listing serial numbers, per-device data sanitisation certificate, recycling certificate]` },
      { type: 'p', text: `[TODO: owner to supply a redacted sample certificate image to show here]` },
      { type: 'p', text: `Authorisation / registration: [TODO: owner to supply MPCB authorisation and CPCB registration numbers]` },
      { type: 'p', text: `Not sure what to keep on file? See [what records to keep when your company disposes of e-waste](/guides/e-waste-rules-2022-business-checklist).` },
    ],
    accepted: `Laptops, desktops, servers, storage, printers and scanners, phones, routers and switches, UPS units, monitors and other office electronics — everything in the seven Schedule I categories. See the [full list of items we accept](/e-waste-categories). We do not accept waste batteries or radioactive waste.`,
    pricing: `Pickup is free. [TODO: owner to confirm — any minimum quantity for a free office pickup, and whether any items carry a charge]`,
    faqs: [
      { question: `Do you collect e-waste from offices anywhere in Pune?`, answer: `Yes. We collect from offices across Pune. Schedule a pickup through the contact page, or call or WhatsApp +91 97631 23699.` },
      { question: `Is corporate e-waste pickup free?`, answer: `Pickup is free. [TODO: owner to confirm any minimum quantity]` },
      { question: `What happens to the data on our laptops and servers?`, answer: `Data is sanitised before any device is refurbished or recycled. [TODO: owner to confirm method and certificate details]` },
      { question: `What paperwork will we get?`, answer: `A certificate of recycling for each collection. [TODO: owner to confirm the full set of documents]` },
      { question: `Do the e-waste rules require us to use a registered recycler?`, answer: `If your company is a bulk consumer — it has used at least 1,000 units of Schedule I equipment in a financial year — Rule 8 of the E-Waste (Management) Rules, 2022 says you must hand e-waste only to a registered producer, refurbisher or recycler. Our [guide to the 2022 rules](/guides/e-waste-rules-2022-business-checklist) explains this.` },
    ],
    related: [
      { label: 'Data sanitisation', href: '/what-we-do#data-sanitization' },
      { label: 'Refurbishment', href: '/what-we-do#refurbishment' },
      { label: 'How Pune offices should dispose of old laptops and servers', href: '/guides/office-laptop-server-disposal-pune' },
    ],
  },
];

export const publishedServices = servicePages.filter((s) => s.published);

export function getServicePage(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}
