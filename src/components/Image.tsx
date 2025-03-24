'use client';

import type { ImageProps } from 'next/image';
import NextImage from 'next/image';
import { useState } from 'react';

type Props = Omit<ImageProps, 'src'> & {
  fallback: ImageProps['src'];
  src?: ImageProps['src'];
};

export default function Image({ alt, fallback, src, ...props }: Props) {
  const [img, setImg] = useState(src || fallback);

  return (
    <div className="relative">
      <div className="w-full pt-[100%]">
        <NextImage
          alt={alt}
          src={img}
          onError={() => setImg(fallback)}
          {...props}
        />
      </div>
    </div>
  );
}
