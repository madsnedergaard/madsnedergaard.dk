import { getPostBySlug } from '@/utils/posts';
import { ImageResponse } from 'next/og';
import DynamicOGImage, { loadGoogleFont, imageSize } from '@/components/DynamicOGImage';

// Image metadata
const subtitle = 'A handwritten blog post by Mads Nedergaard';
export const alt = subtitle;

export const size = imageSize;

export const contentType = 'image/png';

// Image generation
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.title || '';

  return new ImageResponse(<DynamicOGImage title={title} subtitle={subtitle} />, {
    ...size,
    fonts: [
      {
        name: 'Inter',
        data: await loadGoogleFont('Inter', title, 700),
        style: 'normal',
        weight: 700,
      },
      {
        name: 'Inter',
        data: await loadGoogleFont('Inter', subtitle, 500),
        style: 'normal',
        weight: 500,
      },
    ],
  });
}
