"use client";

import { useRef, useEffect, type JSX } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  once?: boolean;
  splitBy?: "words" | "chars";
}

export default function TextReveal({
  children,
  className = "",
  tag: Tag = "h2",
  delay = 0,
  stagger = 0.04,
  once = true,
  splitBy = "words",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent || "";
    el.innerHTML = "";

    const pieces =
      splitBy === "words" ? text.split(" ") : text.split("");

    pieces.forEach((piece, i) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.overflow = "hidden";

      const inner = document.createElement("span");
      inner.textContent = piece + (splitBy === "words" ? "\u00A0" : "");
      inner.style.display = "inline-block";
      inner.className = "text-reveal-inner";

      span.appendChild(inner);
      el.appendChild(span);
    });

    const inners = el.querySelectorAll(".text-reveal-inner");

    gsap.set(inners, { yPercent: 110, opacity: 0 });

    gsap.to(inners, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: once
          ? "play none none none"
          : "play reverse play reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [children, delay, stagger, once, splitBy]);

  const Component = Tag as keyof JSX.IntrinsicElements;

  return (
    // @ts-expect-error dynamic tag
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
