import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Landmark,
  Rocket,
  CheckCircle,
  Eye,
  Target,
} from "lucide-react";

import { ADMISSION_FORM_URL } from "@/app/admission-form";
import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "About CCoE | CHANAB Centre of Excellence",
  description:
    "About CHANAB Centre of Excellence — our vision, mission, values, and learning environment. Where Knowledge, Character & Faith Unite in G-12 Islamabad.",
};

const featureCards = [
  {
    icon: BookOpen,
    title: "Knowledge",
    subtitle: "Concept-Based Learning",
  },
  {
    icon: Heart,
    title: "Character",
    subtitle: "Discipline & Leadership",
  },
  {
    icon: Landmark,
    title: "Faith",
    subtitle: "Tarbiyah & Akhlaq",
  },
  {
    icon: Rocket,
    title: "Future",
    subtitle: "STEM, AI & Innovation",
  },
];

const environment = [
  "Highly qualified and dedicated teachers",
  "Separate classes for boys and girls",
  "Modern science and computer laboratories",
  "Interactive classrooms",
  "Continuous academic assessment",
  "Leadership and personality development programmes",
  "Sports and co-curricular activities",
  "Strong partnership with parents",
];

const coreValues = [
  "Excellence",
  "Integrity",
  "Respect",
  "Responsibility",
  "Discipline",
  "Compassion",
  "Innovation",
  "Leadership",
  "Service",
];

const commitments = [
  "A quality education",
  "A safe and supportive environment",
  "Teachers who genuinely care",
  "Opportunities to discover their talents",
  "Guidance to become responsible and successful individuals",
];

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <PageHero
        eyebrow="Where Knowledge, Character & Faith Unite"
        title="About CHANAB Centre of Excellence"
        description="Inspiring Excellence. Shaping Character. Building the Future."
        imageSrc="/images/president.jpeg"
        imageAlt="Prof. Muhammad Aftab Tariq in his office at CHANAB Centre of Excellence"
      />

      {/* Intro + feature cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-slate-600 leading-relaxed text-lg mb-5">
              CHANAB Centre of Excellence (CCoE) was established with a clear
              vision — to provide an educational experience that empowers
              students to excel academically while developing the character,
              confidence, and values needed to lead meaningful lives.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We believe education is a lifelong journey of discovery, growth,
              and service. Our purpose is to nurture young minds in an
              environment where learning is inspiring, relationships are built
              on respect, and every student is encouraged to realise their full
              potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="bg-water-pale/60 rounded-xl p-8 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm mb-5">
                  <card.icon className="w-7 h-7 text-sky-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-1">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 bg-water-pale/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Our Story
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            CCoE was founded by{" "}
            <strong className="text-navy">Prof. Muhammad Aftab Tariq</strong>,
            a distinguished educationist whose career spans more than 34 years
            in teaching, educational leadership, and institutional development.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Drawing upon decades of experience, he envisioned a school that
            combines strong educational standards with a nurturing culture —
            where students are encouraged not only to achieve academic success
            but also to grow into principled, responsible, and compassionate
            individuals.
          </p>
          <p className="text-navy font-semibold text-lg">
            That vision became CHANAB Centre of Excellence.
          </p>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-5">
                <Eye className="w-7 h-7 text-sky-primary" />
                <h2 className="text-2xl font-bold text-navy">Our Vision</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To be a leading educational institution recognised for
                developing confident learners, ethical leaders, and responsible
                citizens who contribute positively to society.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-5">
                <Target className="w-7 h-7 text-sky-primary" />
                <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To provide an enriching educational environment that inspires
                intellectual curiosity, promotes lifelong learning, and nurtures
                integrity, discipline, and compassion, enabling every student to
                achieve excellence in education and in life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Our Educational Philosophy
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            At CCoE, we believe every child has unique abilities and unlimited
            potential. Our role is to inspire curiosity, encourage independent
            thinking, strengthen self-confidence, and cultivate values that
            guide students throughout their lives.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We strive to create an atmosphere where students enjoy learning,
            embrace challenges, and develop into thoughtful individuals who make
            informed decisions and meaningful contributions to society.
          </p>
        </div>
      </section>

      {/* Learning environment */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Our Learning Environment
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Students learn in a safe, disciplined, and caring environment
              where every child is encouraged to achieve their best.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {environment.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky-primary mt-0.5 shrink-0" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Our Core Values
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            These values influence our teaching, our relationships, and the way
            we prepare students for the future.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {coreValues.map((value) => (
              <span
                key={value}
                className="bg-white border border-slate-200 text-navy font-medium rounded-full px-6 py-2.5 text-sm shadow-sm"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment + CTA */}
      <section className="gradient-navy text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Commitment
          </h2>
          <p className="text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            We believe that every child deserves:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-left max-w-2xl mx-auto mb-10">
            {commitments.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-water-blue mt-0.5 shrink-0" />
                <p className="text-white/85">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-white/70 leading-relaxed max-w-2xl mx-auto mb-6">
            Our success is measured not only by academic achievement but also
            by the confidence, character, and positive impact our students
            carry into their families, communities, and the wider world.
          </p>
          <p className="text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            As we continue to grow, our commitment remains unchanged — to
            provide an education that equips students with the knowledge,
            values, and confidence to embrace the opportunities of tomorrow
            while remaining grounded in integrity and purpose. At CHANAB Centre
            of Excellence, we are shaping more than successful students —{" "}
            <strong className="text-water-light">
              we are shaping the future.
            </strong>
          </p>
          <h3 className="text-2xl font-bold mb-4">Join the CCoE Family</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={ADMISSION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-accent transition-colors"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3 hover:bg-white hover:text-navy transition-colors"
            >
              Visit Our Campus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
