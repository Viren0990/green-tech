// Guides at /guides/<slug>. The guide pages, the /guides index, the sitemap and the
// Article / FAQPage structured data all read from this one list.
//
// Rules for writing a guide (CLAUDE.md T11): every legal or technical fact must be
// checked against the official source listed in `sources`; date every change in
// `updated`; never put a fact about DMD here that is not already shown elsewhere on the site.

import { guideList } from '@/src/lib/guide-content';

export type GuideBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'table'; head: string[]; rows: string[][] };

export interface Guide {
  slug: string;
  // On-page heading
  title: string;
  // <title> before the " | DMD GreenTech Revive" suffix; keep the whole thing near 60 characters
  metaTitle: string;
  // ≤ 155 characters
  description: string;
  audience: 'Offices' | 'Homes' | 'Offices & homes';
  published: string; // ISO date
  updated: string; // ISO date
  // Short answer shown first; written so it can be quoted on its own
  keyPoints: string[];
  body: GuideBlock[];
  faqs: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
  related: { label: string; href: string }[];
}

export const GUIDE_AUTHOR = 'DMD GreenTech Revive team';

export const guides: Guide[] = guideList;

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

// Rough reading time from the visible words.
export function readingMinutes(guide: Guide) {
  const text = [
    ...guide.keyPoints,
    ...guide.body.flatMap((b) => ('items' in b ? b.items : 'rows' in b ? b.rows.flat() : [b.text])),
    ...guide.faqs.flatMap((f) => [f.question, f.answer]),
  ].join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  });
}

// FAQ answers and key points may contain the same **bold** / [link](href) markup as the body.
export function plainText(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[(.+?)\]\((.+?)\)/g, '$1');
}
