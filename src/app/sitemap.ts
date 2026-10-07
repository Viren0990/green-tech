import { MetadataRoute } from 'next';
import { prisma } from '@/src/lib/prisma';
import { SITE_URL } from '@/src/lib/business';

type Entry = MetadataRoute.Sitemap[number];

const staticPages: { path: string; changeFrequency: Entry['changeFrequency']; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/what-we-do', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/e-waste-categories', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/posts', changeFrequency: 'daily', priority: 0.8 },
  { path: '/our-partners', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/community-partners', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/educational-partners', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all posts for dynamic URLs
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      updatedAt: true,
    },
  });

  const postUrls = posts.map((post) => ({
    url: `${SITE_URL}/posts/${post.id}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...postUrls,
  ];
}
