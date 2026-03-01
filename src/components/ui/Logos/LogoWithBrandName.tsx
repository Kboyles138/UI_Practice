import Image from "next/image";
import { type HTMLAttributes } from "react";

export interface LogoWithBrandNameProps extends HTMLAttributes<HTMLAnchorElement> {
  src: string;
  alt: string;
  brandName: string;
  href?: string;
  width?: number;
  height?: number;
}

export function LogoWithBrandName({
  src,
  alt,
  brandName,
  href = "/",
  width = 32,
  height = 32,
  className = "",
  ...props
}: LogoWithBrandNameProps) {
  const content = (
    <>
      <Image src={src} alt={alt} width={width} height={height} className="object-contain" />
      <span className="ml-2 font-semibold text-neutral-900 dark:text-neutral-100">{brandName}</span>
    </>
  );

  return (
    <a href={href} className={`inline-flex items-center ${className}`} {...props}>
      {content}
    </a>
  );
}
