import { Suspense } from 'react';
import { list } from '@vercel/blob';
import { ClapperboardIcon } from 'lucide-react';

export function Video({
  fileName,
  title,
  ...props
}: { fileName: string; title: string } & React.VideoHTMLAttributes<HTMLVideoElement>) {
  return (
    <div className="">
      <h4 className="">
        <ClapperboardIcon className="text-primary mr-2 inline-block h-4 w-4" />
        {title}
      </h4>
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent fileName={fileName} {...props} />
      </Suspense>
    </div>
  );
}

export async function VideoComponent({
  fileName,
  ...props
}: { fileName: string } & React.VideoHTMLAttributes<HTMLVideoElement>) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video className="rounded-lg" controls preload="none" {...props}>
      <source src={url} type="video/mp4" />
      Your browser does not support videos
    </video>
  );
}
