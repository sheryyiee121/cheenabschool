import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden text-white py-16 sm:py-24">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-navy/15" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {children}
        <p className="text-water-light font-semibold tracking-[0.18em] uppercase text-xs mb-3 drop-shadow">
          {eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">
          {description}
        </p>
      </div>
    </section>
  );
}
