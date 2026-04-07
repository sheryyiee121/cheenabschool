"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const images = [
  {
    src: "/images/student-speaking.jpeg",
    alt: "Student championing excellence at Chanab",
  },
  {
    src: "/images/academic-excellence.jpeg",
    alt: "Academic excellence at Chanab Centre of Excellence",
  },
  {
    src: "/images/bright-future.jpeg",
    alt: "Build a bright future with Chanab",
  },
  {
    src: "/images/admissions-open.jpeg",
    alt: "Admissions open 2026-27",
  },
];

export default function HeroImageSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slides = container.querySelectorAll(".hero-slide");

    gsap.set(slides, { opacity: 0, scale: 1.1 });
    gsap.set(slides[0], { opacity: 1, scale: 1 });

    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % images.length;

        gsap.to(slides[prev], {
          opacity: 0,
          scale: 1.1,
          duration: 1,
          ease: "power2.inOut",
        });
        gsap.to(slides[next], {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
        });

        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className="hero-slide absolute inset-0"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "bg-water-blue w-6"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
