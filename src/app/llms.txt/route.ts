import { BUSINESS, SITE_URL } from '@/src/lib/business';
import { guides } from '@/src/lib/guides';
import { publishedServices } from '@/src/lib/services';

export const dynamic = 'force-static';

// /llms.txt: a plain summary for AI answer engines (https://llmstxt.org). Built from the
// same data as the site so it stays in step. Low effort; its benefit is not proven.
export function GET() {
  const pages = [
    ['Services overview', '/what-we-do', 'E-waste collection, data sanitisation, refurbishment and recycling'],
    ...publishedServices.map((s) => [s.title, `/services/${s.slug}`, s.description]),
    ['E-waste items we accept', '/e-waste-categories', 'Items grouped by Schedule I of the E-Waste (Management) Rules, 2022'],
    ['Schedule a pickup', '/contact', 'Contact form, phone and WhatsApp'],
    ['About us', '/about-us', 'Story, founder and key facts'],
    ['Collection drives gallery', '/posts', 'Past e-waste collection drives and awareness campaigns'],
  ];

  const body = `# ${BUSINESS.name}

> ${BUSINESS.name} (${BUSINESS.parentLine}) is an e-waste collection, data sanitisation, refurbishment and recycling service based in Wagholi, Pune, India. It offers doorstep e-waste pickup for offices and homes across Pune.

- Address: ${BUSINESS.addressDisplay}
- Phone / WhatsApp: ${BUSINESS.phoneDisplay}
- Email: ${BUSINESS.email}
- Hours: ${BUSINESS.hours.display}
- Founder: ${BUSINESS.founder.name}, ${BUSINESS.founder.role}
- Incorporated: ${BUSINESS.incorporated}
- Services: ${BUSINESS.services.join('; ')}

## Key pages

${pages.map(([title, path, note]) => `- [${title}](${SITE_URL}${path}): ${note}`).join('\n')}

## Guides

${guides.map((g) => `- [${g.title}](${SITE_URL}/guides/${g.slug}): ${g.description}`).join('\n')}

## Profiles

${Object.entries(BUSINESS.social).map(([name, url]) => `- ${name[0].toUpperCase()}${name.slice(1)}: ${url}`).join('\n')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
