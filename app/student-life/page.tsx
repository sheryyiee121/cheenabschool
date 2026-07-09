import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Landmark,
  Megaphone,
  Puzzle,
  ShieldCheck,
  Users,
  Globe,
} from "lucide-react";

import { ADMISSION_FORM_URL } from "@/app/admission-form";
import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Student Life & Tarbiyah | CHANAB Centre of Excellence",
  description:
    "Student life at CHANAB Centre of Excellence — Islamic Tarbiyah, character building, leadership development, clubs, and a safe, caring environment.",
};

const tarbiyahValues = [
  "Love for Allah and His Messenger (SAW)",
  "Strong Islamic values",
  "Good manners (Akhlaq)",
  "Honesty and integrity",
  "Respect for parents and teachers",
  "Kindness and compassion",
  "Responsibility and self-discipline",
];

const characterValues = [
  "Respect",
  "Honesty",
  "Discipline",
  "Responsibility",
  "Akhlaq",
  "Humility",
  "Teamwork",
  "Perseverance",
  "Compassion",
  "Service to Others",
];

const leadership = [
  "Student Parliament",
  "House System",
  "Public Speaking",
  "Debates",
  "Leadership Workshops",
  "Community Service Projects",
  "School Events",
];

const clubs = [
  "Science Club",
  "IT & Technology Club",
  "English & Urdu Literary Society",
  "Debate Club",
  "Islamic Society",
  "Mathematics Activities",
  "Quiz Competitions",
  "Art & Creative Activities",
];

const safeEnvironment = [
  "Positive discipline",
  "Mutual respect",
  "Individual care",
  "Teacher mentorship",
  "Bullying-free environment",
  "Strong moral values",
  "Emotional well-being",
];

const citizenship = [
  "Respect their community",
  "Care for the environment",
  "Help those in need",
  "Serve society with compassion",
  "Demonstrate honesty and integrity",
  "Become responsible citizens of Pakistan",
];

const studentIdentity = [
  "A curious thinker",
  "A confident communicator",
  "A respectful individual",
  "A responsible citizen",
  "A compassionate Muslim",
  "A future leader",
];

export default function StudentLifePage() {
  return (
    <>
      {/* Banner */}
      <PageHero
        eyebrow="Beyond the Classroom"
        title="Student Life & Tarbiyah"
        description="Nurturing Hearts, Minds, and Character"
        imageSrc="/images/class.jpeg"
        imageAlt="Students and faculty during a CHANAB Centre of Excellence event"
      />

      {/* Intro */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 leading-relaxed text-lg">
            At CCoE, education extends far beyond the classroom. Alongside
            academic excellence, we place equal emphasis on Islamic Tarbiyah,
            character development, leadership, physical well-being, and social
            responsibility — helping students become successful learners,
            responsible Muslims, caring citizens, and future leaders.
          </p>
        </div>
      </section>

      {/* Tarbiyah + Character */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-water-pale/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-7 h-7 text-sky-primary" />
                <h2 className="text-2xl font-bold text-navy">
                  Islamic Tarbiyah
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Faith as the foundation of character. Islamic values are not
                limited to one subject — they are reflected in our school
                culture, daily interactions, and the way we nurture every
                student, through guidance based on the Qur&apos;an and Sunnah.
              </p>
              <ul className="space-y-2.5">
                {tarbiyahValues.map((value) => (
                  <li key={value} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-700 text-sm">{value}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-7 h-7 text-sky-primary" />
                <h2 className="text-2xl font-bold text-navy">
                  Character Building
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Learning values for life. Education is meaningful only when it
                shapes character. These values are reinforced every day through
                classroom learning, school activities, and positive role models.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {characterValues.map((value) => (
                  <span
                    key={value}
                    className="bg-white border border-slate-200 text-navy text-sm font-medium rounded-full px-4 py-1.5"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership + Clubs */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Megaphone className="w-7 h-7 text-sky-primary" />
                <h2 className="text-2xl font-bold text-navy">
                  Leadership Development
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Every child has leadership potential — our responsibility is to
                help students discover it. These experiences develop confidence,
                communication skills, teamwork, and decision-making abilities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {leadership.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Puzzle className="w-7 h-7 text-sky-primary" />
                <h2 className="text-2xl font-bold text-navy">
                  Clubs &amp; Co-Curricular Activities
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Learning becomes more meaningful when students explore their
                interests beyond textbooks — encouraging creativity, curiosity,
                collaboration, and self-expression.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {clubs.map((club) => (
                  <div key={club} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm">{club}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe environment + separate classes */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-7 h-7 text-sky-primary" />
                <h2 className="text-2xl font-bold text-navy">
                  Safe, Caring &amp; Respectful Environment
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Every child deserves to learn in an environment where they feel
                safe, respected, and valued. Our teachers know their students
                personally and work closely with parents to support every
                child&apos;s growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {safeEnvironment.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-7 h-7 text-sky-primary" />
                <h2 className="text-2xl font-bold text-navy">
                  Separate Classes for Boys &amp; Girls
                </h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                To provide a focused and comfortable learning environment, CCoE
                maintains separate classes for boys and girls. Both receive the
                same high standard of education, facilities, and opportunities.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Promotes concentration and academic focus",
                  "Encourages confidence and participation",
                  "Supports discipline and respect",
                  "Reflects our commitment to Islamic values",
                  "Provides equal learning opportunities for all students",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible citizens */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-10 h-10 text-sky-primary mx-auto mb-5" />
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Building Responsible Citizens
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Education should prepare students not only for careers but also for
            meaningful lives. Through community service and environmental
            awareness activities, students learn that true success is measured
            by the positive impact they have on others.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-left max-w-2xl mx-auto">
            {citizenship.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky-primary mt-0.5 shrink-0" />
                <p className="text-slate-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at CCoE */}
      <section className="gradient-navy text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Life at CCoE</h2>
          <p className="text-white/75 mb-8">
            A CCoE student is more than a learner. They are:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {studentIdentity.map((item) => (
              <span
                key={item}
                className="bg-white/10 border border-white/15 rounded-full px-5 py-2 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-water-light font-semibold text-lg mb-10">
            That is the CCoE difference.
          </p>
          <a
            href={ADMISSION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-accent transition-colors"
          >
            Join the CCoE Family
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
