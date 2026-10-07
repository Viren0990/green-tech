import type { Metadata } from 'next';
import { BUSINESS, SITE_URL } from '@/src/lib/business';

const DEFAULT_IMAGE = { url: '/og-image.png', width: 1200, height: 630, alt: 'DMD Green Tech Revive — e-waste recycling in Pune' };

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  // Set when the title should not get the "| DMD Green Tech Revive" suffix from the layout template.
  absoluteTitle?: boolean;
  image?: string;
}

// Page-level metadata with full Open Graph / Twitter blocks. Next.js replaces (not merges)
// the layout's openGraph object, so every page must carry the complete set.
export function pageMetadata({ title, description, path, absoluteTitle, image }: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const shareTitle = absoluteTitle ? title : `${title} | ${BUSINESS.name}`;
  const images = image ? [{ url: image, alt: title }] : [DEFAULT_IMAGE];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: BUSINESS.name,
      url,
      title: shareTitle,
      description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: images.map((i) => i.url),
    },
  };
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
