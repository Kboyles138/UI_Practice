import NextImage from "next/image";
import { type ImgHTMLAttributes } from "react";

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "alt"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  useNextImage?: boolean;
}

export function Image({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  useNextImage = true,
  className = "",
  ...props
}: ImageProps) {
  if (useNextImage && (fill || (width !== undefined && height !== undefined))) {
    return (
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className={className}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
