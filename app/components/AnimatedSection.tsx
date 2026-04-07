"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationType =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "scale"
  | "fadeIn";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

const getFromVars = (animation: AnimationType): gsap.TweenVars => {
  switch (animation) {
    case "fadeUp":
      return { opacity: 0, y: 50 };
    case "fadeDown":
      return { opacity: 0, y: -50 };
    case "fadeLeft":
      return { opacity: 0, x: -60 };
    case "fadeRight":
      return { opacity: 0, x: 60 };
    case "scale":
      return { opacity: 0, scale: 0.9 };
    case "fadeIn":
      return { opacity: 0 };
  }
};

export default function AnimatedSection({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  className = "",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from = getFromVars(animation);

    gsap.fromTo(el, from, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [animation, delay, duration]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
