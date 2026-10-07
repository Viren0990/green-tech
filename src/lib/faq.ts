// FAQ shown on the homepage. The visible list (FAQ.tsx) and the FAQPage
// structured data (app/page.tsx) both read from here so they never drift.
export const faqData = [
  {
    question: 'Where can I dispose old electronics in Pune?',
    answer:
      'DMD Green Tech Revive offers free door-to-door e-waste pickup across Pune. Simply schedule a pickup through our contact page or call us at +91 97631 23699. We accept laptops, desktops, mobile phones, printers, servers, and all types of electronic waste.',
  },
  {
    question: 'What types of e-waste do you collect?',
    answer:
      'We collect all types of electronic waste including laptops, desktop computers, mobile phones, tablets, printers, servers, networking equipment, UPS systems, monitors, televisions, and other IT peripherals. We handle both individual and bulk corporate e-waste disposal.',
  },
  {
    question: 'Is e-waste disposal free?',
    answer:
      'Yes! DMD Green Tech Revive offers free e-waste collection and disposal for both individuals and corporate clients in Pune. For bulk quantities, we provide scheduled pickups at no cost. We are a certified e-waste recycler operating under MPCB authorization.',
  },
  {
    question: 'What happens to my data when I dispose my device?',
    answer:
      'Data security is our top priority. We use DoD-standard data wiping and degaussing methods to ensure all your sensitive information is permanently and irretrievably destroyed.',
  },
  {
    question: 'How does e-waste recycling help the environment?',
    answer:
      'E-waste contains hazardous materials like lead, mercury, and cadmium that contaminate soil and water when sent to landfills. Proper recycling recovers valuable metals like gold, silver, and copper while preventing toxic substances from harming the environment. DMD Green Tech follows a zero-landfill policy — every component is either refurbished, recycled, or safely treated.',
  },
  
];

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
