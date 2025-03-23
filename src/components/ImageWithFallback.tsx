'use client';

import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { useState } from 'react';

type Props = Omit<ImageProps, 'src'> & {
  fallback: ImageProps['src'];
  src?: ImageProps['src'];
};

export default function ImageWithFallback({
  alt,
  fallback,
  src,
  ...props
}: Props) {
  const [img, setImg] = useState(src || fallback);

  return (
    <Image alt={alt} src={img} onError={() => setImg(fallback)} {...props} />
  );
}
