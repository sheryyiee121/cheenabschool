import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Lightbulb,
  Users,
  BookOpen,
  GraduationCap,
  Heart,
  ShieldCheck,
  Cpu,
  Megaphone,
  Handshake,
  CheckCircle,
} from "lucide-react";

import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Why Choose CCoE | CHANAB Centre of Excellence",
  description:
    "Why parents choose CHANAB Centre of Excellence — 34+ years of educational leadership, concept-based learning, Islamic Tarbiyah, and a safe, disciplined campus in G-12 Islamabad.",
};

const reasons = [
  {
    icon: Award,
    title: "A Legacy of Educational Excellence",
    description:
      "Founded on more than 34 years of educational leadership. Our Founder, Prof. Muhammad Aftab Tariq, devoted his professional life to teaching and institutional development within the Federal Directorate of Education. Every academic programme, policy, and student support system reflects decades of practical experience.",
  },
  {
    icon: Lightbulb,
    title: "Concept-Based Learning",
    description:
      "Real education begins with understanding. Instead of rote memorisation, we help students develop curiosity, logical thinking, creativity, and problem-solving skills — because education is not about memorising answers, it is about learning how to think.",
  },
  {
    icon: Users,
    title: "Separate Classes for Boys & Girls",
    description:
      "Students perform best in an environment that promotes focus, confidence, discipline, and mutual respect. We provide separate classes for boys and girls, while ensuring equal academic opportunities, qualified teachers, and excellent facilities for all.",
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "An FBISE-aligned curriculum, qualified and experienced teachers, continuous assessment, regular feedback, individual academic support, and strong preparation for board examinations.",
  },
  {
    icon: GraduationCap,
    title: "Highly Qualified & Dedicated Faculty",
    description:
      "Our faculty members are selected for their academic qualifications, professional experience, and commitment to student success. They do more than deliver lessons — they mentor, motivate, and inspire students every day.",
  },
  {
    icon: Heart,
    title: "Islamic Tarbiyah & Character Building",
    description:
      "Islamic Tarbiyah is an essential part of daily school life. Students develop strong Islamic values, honesty and integrity, respect for parents and teachers, discipline, good manners (Akhlaq), compassion, and service to society.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Caring & Disciplined Environment",
    description:
      "A secure, well-supervised campus with positive discipline, respectful classroom culture, individual student care, clean facilities, and strong teacher-student relationships. Every child is treated with dignity, fairness, and compassion.",
  },
  {
    icon: Cpu,
    title: "Future-Ready Education",
    description:
      "Alongside strong academics: STEM education, Artificial Intelligence awareness, robotics, computer technology, digital literacy, research skills, innovation, critical thinking, and creative problem solving.",
  },
  {
    icon: Megaphone,
    title: "Leadership & Personality Development",
    description:
      "Public speaking, debating, student parliament, the house system, science and IT clubs, literary activities, sports, community service, and environmental awareness projects build confident communicators and responsible future leaders.",
  },
  {
    icon: Handshake,
    title: "Partnership with Parents",
    description:
      "Parents are respected partners in their child's educational journey. We maintain close communication through parent–teacher meetings, academic progress reports, continuous feedback, and student counselling.",
  },
];

const difference = [
  "34+ Years of Educational Leadership",
  "Concept-Based Learning",
  "FBISE-Aligned Curriculum",
  "Separate Classes for Boys & Girls",
  "Highly Qualified & Caring Faculty",
  "Strong Islamic Tarbiyah & Akhlaq",
  "Safe & Disciplined Campus",
  "Individual Attention for Every Student",
  "STEM, AI & Future Skills",
  "Leadership & Personality Development",
  "Sports & Co-Curricular Activities",
  "Strong Parent-School Partnership",
];

const promise = [
  "Academically Excellent",
  "Morally Upright",
  "Spiritually Grounded",
  "Confident Communicators",
  "Responsible Citizens",
  "Compassionate Human Beings",
  "Future Leaders",
];

export default function WhyCCoEPage() {
  return (
    <>
      {/* Banner */}
      <PageHero
        eyebrow="Knowledge • Character • Faith"
        title="Why Choose CHANAB Centre of Excellence?"
        description="Where Every Child is Inspired to Learn, Grow and Lead"
        imageSrc="/images/president.jpeg"
        imageAlt="Prof. Muhammad Aftab Tariq representing CHANAB Centre of Excellence leadership"
      />

      {/* Intro */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 leading-relaxed text-lg">
            Choosing the right school is one of the most important decisions a
            parent will ever make. Parents are looking for more than excellent
            examination results — they want a school that develops confident
            learners, responsible citizens, and compassionate human beings. We
            combine academic excellence, disciplined learning, Islamic values,
            and modern education to prepare students for success in school,
            higher education, and life.
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-7 border border-slate-100 shadow-sm card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-water-pale shrink-0">
                    <reason.icon className="w-6 h-6 text-sky-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The CCoE Difference */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              The CCoE Difference
            </h2>
            <p className="text-slate-500">
              When you choose CCoE, your child benefits from:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {difference.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky-primary mt-0.5 shrink-0" />
                <p className="text-slate-700 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="gradient-navy text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Promise</h2>
          <p className="text-white/75 leading-relaxed mb-8">
            Every child is valued, respected, and encouraged to achieve their
            full potential. We are committed to nurturing students who are:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {promise.map((item) => (
              <span
                key={item}
                className="bg-white/10 border border-white/15 rounded-full px-5 py-2 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-3">
            Experience the CCoE Difference
          </h3>
          <p className="text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
            We warmly invite you to visit our campus, meet our dedicated
            faculty, and experience an educational environment where excellence
            is inspired, character is nurtured, and faith is strengthened.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-accent transition-colors"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3 hover:bg-white hover:text-navy transition-colors"
            >
              Visit Our Campus
            </Link>
          </div>
          <p className="mt-10 text-water-light font-medium italic">
            We Don&apos;t Just Teach — We Inspire.
          </p>
        </div>
      </section>
    </>
  );
}
