"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923335500780?text=Hello%2C%20I%20want%20to%20inquire%20about%20admissions%20at%20Chanab%20Centre%20of%20Excellence."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/images/icons/social.png"
        alt=""
        width={68}
        height={68}
        unoptimized
        className="h-full w-full object-contain"
        aria-hidden
      />
    </a>
  );
}
