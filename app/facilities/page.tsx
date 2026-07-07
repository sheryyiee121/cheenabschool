import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  FlaskConical,
  BookOpen,
  Users,
  Trophy,
  ShieldCheck,
  School,
  Sparkles,
} from "lucide-react";

import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Campus & Facilities | CHANAB Centre of Excellence",
  description:
    "A purpose-built campus designed for learning, growth, and well-being — modern classrooms, science and computer laboratories, library, and sports facilities in G-12 Islamabad.",
};

const facilities = [
  {
    icon: School,
    title: "Modern Classrooms",
    description:
      "Spacious, well-equipped classrooms provide an engaging learning environment where students can participate actively, collaborate with confidence, and learn comfortably.",
  },
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    description:
      "Our Physics, Chemistry, and Biology laboratories enable students to explore scientific concepts through observation, experimentation, and hands-on activities.",
  },
  {
    icon: Monitor,
    title: "Computer & Technology Labs",
    description:
      "Modern computer laboratories help students develop digital literacy, research skills, and confidence in using technology responsibly.",
  },
  {
    icon: BookOpen,
    title: "Library & Reading Resources",
    description:
      "Our library encourages students to develop strong reading habits, expand their knowledge, and cultivate a lifelong love of learning through a carefully selected collection of educational resources.",
  },
  {
    icon: Users,
    title: "Interactive Learning Spaces",
    description:
      "Learning environments that encourage discussion, teamwork, presentations, and collaborative problem-solving, making every lesson more engaging and meaningful.",
  },
  {
    icon: Trophy,
    title: "Sports & Physical Development",
    description:
      "Students are encouraged to participate in sports and recreational activities that promote fitness, teamwork, confidence, and a healthy lifestyle.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Environment",
    description:
      "Student safety is our highest priority. The campus provides a secure, well-supervised, and disciplined environment where students feel respected, protected, and confident throughout the day.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Student Facilities",
    description:
      "Clean, well-maintained facilities support students' daily needs and contribute to a healthy, organised, and welcoming educational environment.",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Banner */}
      <PageHero
        eyebrow="A Place Where Learning Comes to Life"
        title="Campus & Facilities"
        description="A Purpose-Built Campus Designed for Learning, Growth, and Well-Being"
        imageSrc="/images/class.jpeg"
        imageAlt="CHANAB Centre of Excellence students and faculty on campus"
      />

      {/* Intro */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 leading-relaxed text-lg">
            At CHANAB Centre of Excellence, every learning space has been
            thoughtfully designed to provide students with a safe, comfortable,
            and inspiring environment. Our campus supports academic excellence
            while encouraging creativity, collaboration, and personal growth.
          </p>
        </div>
      </section>

      {/* Facility cards */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="bg-white rounded-xl p-7 border border-slate-100 shadow-sm card-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-water-pale mb-4">
                  <facility.icon className="w-6 h-6 text-sky-primary" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {facility.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="gradient-navy text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            A Campus That Inspires Excellence
          </h2>
          <p className="text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            Every facility at CHANAB Centre of Excellence has been planned with
            one purpose — to provide students with the best possible environment
            to learn, grow, and succeed. We continue to invest in our campus to
            ensure every student benefits from an educational experience that is
            modern, engaging, and future-focused.
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
              href="/admissions"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3 hover:bg-white hover:text-navy transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
