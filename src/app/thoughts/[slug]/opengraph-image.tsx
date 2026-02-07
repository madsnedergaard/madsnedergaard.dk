import { getPostBySlug } from '@/utils/posts';
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Image metadata
const subtitle = 'A handwritten blog post by Mads Nedergaard';
export const alt = subtitle;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

async function loadGoogleFont(font: string, text: string, weight: number = 400) {
  const fontName = font.replace(/\s+/g, '+');
  const url = `https://fonts.googleapis.com/css2?family=${fontName}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
}

// Image generation
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.title;
  // Font loading, process.cwd() is Next.js project directory
  //   const interSemiBold = await readFile(join(process.cwd(), 'assets/Inter-SemiBold.ttf'));

  return new ImageResponse(
    (
      // ImageResponse JSX element

      <div
        style={{
          background: '#27272A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          gap: 20,
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 70,
            fontWeight: 700,
            fontFamily: 'Inter',
            background: 'linear-gradient(to right,#fcff9e, #ec6ead)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {title}
        </div>
        <svg
          style={{
            margin: '0 auto',
            marginTop: 24,
            marginBottom: 24,
            height: 16,
            width: 320,
          }}
          viewBox="0 0 320 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8 Q20 0 40 8 T80 8 T120 8 T160 8 T200 8 T240 8 T280 8 T320 8"
            stroke="#999999"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div style={{ fontSize: 40, color: '#999999', fontFamily: 'Inter', fontWeight: 500 }}>
          {subtitle}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await loadGoogleFont('Inter', title || '', 700),
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
    }
  );
}
