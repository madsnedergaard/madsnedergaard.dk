import { ImageResponse } from 'next/og';
import DynamicOGImage, { loadGoogleFont, imageSize } from '@/components/DynamicOGImage';

// Image metadata
const title = 'Mads Nedergaard';
const subtitle = 'A collection of thoughts on all things software';
export const alt = title;

export const size = imageSize;

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(<DynamicOGImage title={title} titleSize={100} subtitle={subtitle} />, {
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
