import type { Metadata } from 'next';
import { BUSINESS, SITE_URL } from '@/src/lib/business';

const DEFAULT_IMAGE = { url: '/og-image.png', width: 1200, height: 630, alt: 'DMD GreenTech Revive — e-waste recycling in Pune' };

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  // Set when the title should not get the "| DMD GreenTech Revive" suffix from the layout template.
  absoluteTitle?: boolean;
  image?: string;
  // Set for guides so social shares and search engines see an article with dates.
  article?: { publishedTime: string; modifiedTime: string; authors: string[] };
}

// Page-level metadata with full Open Graph / Twitter blocks. Next.js replaces (not merges)
// the layout's openGraph object, so every page must carry the complete set.
export function pageMetadata({ title, description, path, absoluteTitle, image, article }: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const shareTitle = absoluteTitle ? title : `${title} | ${BUSINESS.name}`;
  const images = image ? [{ url: image, alt: title }] : [DEFAULT_IMAGE];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...(article ? { type: 'article', ...article } : { type: 'website' }),
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

// Pass `parent` for pages one level deeper, e.g. a guide under /guides.
export function breadcrumbJsonLd(name: string, path: string, parent?: { name: string; path: string }) {
  const trail = [{ name: 'Home', item: SITE_URL }];
  if (parent) trail.push({ name: parent.name, item: `${SITE_URL}${parent.path}` });
  trail.push({ name, item: `${SITE_URL}${path}` });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })),
  };
}
