import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FlaskConical,
  BookOpen,
  Trophy,
  Users,
  Camera,
  PartyPopper,
} from "lucide-react";

import PageHero from "@/app/components/PageHero";
import GalleryGrid from "@/app/components/GalleryGrid";
import { galleryImages } from "@/app/gallery-data";

export const metadata: Metadata = {
  title: "Photo Gallery | CHANAB Centre of Excellence",
  description:
    "Explore life at CHANAB Centre of Excellence through our photo gallery — campus, classrooms, laboratories, library, sports, student activities, and events.",
};

const highlights = [
  {
    icon: Building2,
    title: "Campus",
    description: "Our purpose-built campus in G-12, Islamabad.",
  },
  {
    icon: Users,
    title: "Classrooms",
    description: "Engaging learning environments for every grade.",
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    description: "Hands-on science and practical learning.",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "A space that nurtures reading and research.",
  },
  {
    icon: Trophy,
    title: "Sports",
    description: "Fitness, teamwork, and healthy competition.",
  },
  {
    icon: Camera,
    title: "Activities",
    description: "Leadership, creativity, and student life.",
  },
  {
    icon: PartyPopper,
    title: "Events",
    description: "Celebrations, ceremonies, and achievements.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Life at CCoE"
        title="Photo Gallery"
        description="A visual journey through our campus, classrooms, activities, and memorable moments at CHANAB Centre of Excellence."
        imageSrc="/images/campus-features.jpeg"
        imageAlt="CHANAB Centre of Excellence campus"
      />

      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Explore CCoE in Pictures
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Browse photographs from across our school — from daily classroom
              learning to special events and celebrations that bring our
              community together.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-14">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 p-4 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-water-pale mb-3">
                  <item.icon className="w-5 h-5 text-sky-primary" />
                </div>
                <h3 className="font-bold text-navy text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mb-8">
            {galleryImages.length} photos · Click any image to view full size
          </p>

          <GalleryGrid />
        </div>
      </section>

      <section className="gradient-navy text-white py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Experience CCoE in Person
          </h2>
          <p className="text-white/75 leading-relaxed mb-8">
            Photographs capture moments — but nothing replaces visiting our
            campus, meeting our faculty, and seeing the CCoE difference for
            yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-accent transition-colors"
            >
              Book a Campus Visit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3 hover:bg-white hover:text-navy transition-colors"
            >
              News & Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
