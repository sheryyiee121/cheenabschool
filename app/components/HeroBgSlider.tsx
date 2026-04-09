"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const slides = [
  {
    src: "/images/cnob/WhatsApp%20Image%202026-04-07%20at%209.13.19%20PM.jpeg",
    alt: "Chanab Centre of Excellence — campus and learning",
  },
  {
    src: "/images/cnob/WhatsApp%20Image%202026-04-07%20at%209.13.20%20PM.jpeg",
    alt: "Chanab Centre of Excellence — students and school life",
  },
  {
    src: "/images/cnob/WhatsApp%20Image%202026-04-07%20at%209.13.20%20PM%20%281%29.jpeg",
    alt: "Chanab Centre of Excellence — educational environment",
  },
];

export default function HeroBgSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slideEls = Array.from(
      container.querySelectorAll<HTMLElement>(".hero-bg-slide")
    );
    if (slideEls.length === 0) return;

    let activeIndex = 0;

    const goTo = (nextIndex: number) => {
      if (nextIndex === activeIndex) return;

      const prevIndex = activeIndex;
      const prevEl = slideEls[prevIndex];
      const nextEl = slideEls[nextIndex];

      activeIndex = nextIndex;

      gsap.killTweensOf(slideEls);

      slideEls.forEach((el, i) => {
        if (i === nextIndex) el.style.zIndex = "2";
        else if (i === prevIndex) el.style.zIndex = "1";
        else el.style.zIndex = "0";
      });

      gsap.set(nextEl, { opacity: 0 });

      gsap
        .timeline()
        .to(
          prevEl,
          { opacity: 0, duration: 1.2, ease: "power2.inOut" },
          0
        )
        .fromTo(
          nextEl,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: "power2.inOut" },
          0
        );
    };

    gsap.set(slideEls, { opacity: 0 });
    gsap.set(slideEls[0], { opacity: 1 });
    slideEls[0].style.zIndex = "2";
    slideEls.forEach((el, i) => {
      if (i !== 0) el.style.zIndex = "0";
    });

    const intervalId = window.setInterval(() => {
      goTo((activeIndex + 1) % slides.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
      gsap.killTweensOf(slideEls);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {slides.map((slide) => (
        <div key={slide.src} className="hero-bg-slide absolute inset-0">
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      ))}
    </div>
  );
}
