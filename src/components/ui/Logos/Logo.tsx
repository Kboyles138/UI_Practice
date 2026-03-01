import Image from "next/image";
import { type HTMLAttributes } from "react";

export interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
}

export function Logo({
  src,
  alt,
  href = "/",
  width = 32,
  height = 32,
  className = "",
  ...props
}: LogoProps) {
  const content = (
    <Image src={src} alt={alt} width={width} height={height} className="object-contain" />
  );

  return (
    <a href={href} className={`inline-flex items-center ${className}`} {...props}>
      {content}
    </a>
  );
}
