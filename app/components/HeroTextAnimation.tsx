"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroTextAnimation({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      el.querySelectorAll(".hero-badge"),
      { opacity: 0, y: -20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 }
    )
      .fromTo(
        el.querySelectorAll(".hero-title"),
        { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          stagger: 0.15,
        },
        "-=0.3"
      )
      .fromTo(
        el.querySelectorAll(".hero-subtitle"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        el.querySelectorAll(".hero-desc"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        el.querySelectorAll(".hero-solution"),
        { opacity: 0, x: -30, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.5, stagger: 0.15 },
        "-=0.2"
      )
      .fromTo(
        el.querySelectorAll(".hero-cta"),
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      )
      .fromTo(
        el.querySelectorAll(".hero-stat"),
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08 },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
