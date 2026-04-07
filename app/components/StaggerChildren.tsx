"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  y?: number;
  x?: number;
}

export default function StaggerChildren({
  children,
  className = "",
  stagger = 0.12,
  duration = 0.7,
  y = 40,
  x = 0,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.children;
    if (!items.length) return;

    gsap.fromTo(
      items,
      { opacity: 0, y, x },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [stagger, duration, y, x]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
