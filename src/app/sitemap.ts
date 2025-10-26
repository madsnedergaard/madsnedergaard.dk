import type { MetadataRoute } from 'next';
import { getPosts } from '@/utils/posts';

// Helper function to parse various date formats to Date
const parseCreatedAt = (dateStr: string): Date => {
  if (!dateStr) return new Date(0); // fallback for empty dates

  // Handle "DD/MM/YYYY" format
  const ddmmyyyyMatch = dateStr.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (ddmmyyyyMatch) {
    const [, day, month, year] = ddmmyyyyMatch;
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }

  // Handle "Month YYYY" format
  const parts = dateStr.trim().split(' ');
  if (parts.length === 2) {
    const month = parts[0];
    const year = parseInt(parts[1]);

    const monthMap: { [key: string]: number } = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    };

    const monthIndex = monthMap[month];
    if (monthIndex !== undefined && !isNaN(year)) {
      return new Date(year, monthIndex, 1);
    }
  }

  // Fallback to standard Date parsing
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? new Date(0) : parsed;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const baseUrl = 'https://madsnedergaard.dk';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/writing-without-ai`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  const postPages = posts.map((post) => ({
    url: `${baseUrl}/thoughts/${post.slug}`,
    lastModified: parseCreatedAt(post.updatedAt || post.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...postPages];
}
