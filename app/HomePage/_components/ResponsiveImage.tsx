import Image from "next/legacy/image";
import { FC } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({ src, alt, width, height, className }) => {
  return (
    <div className={`relative ${className}`} style={{ width: '100%', height: 'auto' }}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        priority 
      />
    </div>
  );
};

export default ResponsiveImage;
