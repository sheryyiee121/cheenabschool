import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  GraduationCap,
  Award,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Admissions 2026–2027 | CHANAB Centre of Excellence",
  description:
    "Admissions open for Session 2026–2027 at CHANAB Centre of Excellence — Grades VI–VIII, Matriculation, and Intermediate (FBISE). Apply today.",
};

const programmes = [
  {
    title: "Middle School",
    range: "Grades VI – VIII",
    detail:
      "Building strong academic foundations through concept-based learning.",
    groups: [],
  },
  {
    title: "Matriculation",
    range: "Grades IX – X",
    detail: "Comprehensive FBISE preparation across two study groups.",
    groups: ["Science", "Arts"],
  },
  {
    title: "Higher Secondary (Intermediate)",
    range: "Grades XI – XII",
    detail: "Preparing students for universities and professional careers.",
    groups: [
      "F.Sc. Pre-Medical",
      "F.Sc. Pre-Engineering",
      "ICS",
      "I.Com",
      "Humanities",
    ],
  },
];

const steps = [
  "Complete the Admission Application Form.",
  "Submit the required documents.",
  "Appear in the Admission Assessment.",
  "Parent/Student interaction (where required).",
  "Receive the admission decision.",
  "Complete fee formalities and secure your seat.",
  "Welcome to the CCoE Family!",
];

const testSubjects = [
  "English",
  "Mathematics",
  "Urdu",
  "General Science / General Knowledge",
  "Analytical & Reasoning Skills",
];

const documents = [
  "Completed Admission Form",
  "Passport-size photographs",
  "Student's Form-B / Smart Card",
  "Parent or Guardian's CNIC",
  "Previous School Result Card",
  "School Leaving Certificate (where applicable)",
  "Character Certificate (where applicable)",
];

const scholarships = [
  "Merit Scholarships",
  "Performance-Based Scholarships",
  "Need-Based Assistance",
  "Sibling Fee Concession",
  "Special Cases (subject to approval)",
];

const whyChoose = [
  "Academic Excellence",
  "Concept-Based Learning",
  "Strong Islamic Tarbiyah",
  "Separate Classes for Boys & Girls",
  "Highly Qualified Teachers",
  "Individual Student Mentoring",
  "Safe & Disciplined Campus",
  "STEM & Future Skills",
  "Leadership Development",
  "Sports & Co-Curricular Activities",
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Banner */}
      <PageHero
        eyebrow="Session 2026–2027"
        title="Admissions Open"
        description="Begin Your Child's Journey Towards Excellence"
        imageSrc="/images/class.jpeg"
        imageAlt="Students and faculty at CHANAB Centre of Excellence"
      />

      {/* Intro */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 leading-relaxed text-lg">
            Thank you for considering CHANAB Centre of Excellence for your
            child&apos;s education. We are committed to providing a nurturing
            environment where students achieve academic excellence, develop
            strong character, and grow with confidence and faith. We warmly
            welcome families who share our vision of quality education and
            holistic development.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Programmes Offered
            </h2>
            <p className="text-slate-500">
              All programmes follow the Federal Board (FBISE) curriculum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.map((prog) => (
              <div
                key={prog.title}
                className="bg-white rounded-xl border border-slate-200 p-8 card-hover flex flex-col"
              >
                <GraduationCap className="w-8 h-8 text-sky-primary mb-4" />
                <p className="text-sky-primary font-semibold text-sm tracking-wide uppercase mb-1">
                  {prog.range}
                </p>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {prog.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {prog.detail}
                </p>
                {prog.groups.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2">
                    {prog.groups.map((group) => (
                      <span
                        key={group}
                        className="bg-water-pale text-blue-accent text-xs font-semibold rounded-full px-3 py-1"
                      >
                        {group}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission process */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Admission Process
            </h2>
            <p className="text-slate-500">
              Admission at CCoE is simple and transparent.
            </p>
          </div>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-5"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-sky-primary text-white font-bold text-sm shrink-0">
                  {index + 1}
                </span>
                <p className="text-slate-700 pt-1.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Test + documents */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-xl border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-navy mb-3">
                Admission Assessment
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                The admission assessment helps us understand each
                student&apos;s academic readiness and place them in the
                appropriate class. The assessment may include:
              </p>
              <ul className="space-y-2.5">
                {testSubjects.map((subject) => (
                  <li key={subject} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-700 text-sm">{subject}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-sky-primary" />
                <h3 className="text-2xl font-bold text-navy">
                  Required Documents
                </h3>
              </div>
              <ul className="space-y-2.5 mb-4">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-700 text-sm">{doc}</p>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs">
                Original documents may be required for verification at the time
                of admission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 sm:py-20 bg-water-pale/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-10 h-10 text-sky-primary mx-auto mb-5" />
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Scholarships &amp; Fee Concessions
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            We believe that talented and deserving students should have access
            to quality education. Subject to institutional policy, the College
            offers:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {scholarships.map((item) => (
              <span
                key={item}
                className="bg-white border border-slate-200 text-navy font-medium rounded-full px-5 py-2 text-sm shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            Scholarships are awarded on merit and according to institutional
            regulations.
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Why Choose CCoE?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {whyChoose.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky-primary mt-0.5 shrink-0" />
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important information */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-navy mb-4">
              Important Information
            </h3>
            <ul className="space-y-2.5">
              {[
                "Admissions are offered subject to seat availability.",
                "Limited class sizes ensure personalised attention.",
                "Early applications are encouraged.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                  <p className="text-slate-700 text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="gradient-navy text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Begin Your Child&apos;s Future Today
          </h2>
          <p className="text-white/75 leading-relaxed mb-2 max-w-2xl mx-auto">
            Applications are accepted subject to seat availability. As seats are
            limited, parents are encouraged to complete the admission process at
            the earliest opportunity.
          </p>
          <p className="text-water-blue font-medium mb-10">
            Admissions Open: Session 2026–2027
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://wa.me/923335500780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-accent transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Apply via WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3 hover:bg-white hover:text-navy transition-colors"
            >
              Visit Our Campus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-water-blue" />
              Main Service Road, G-12, Islamabad
            </span>
            <a
              href="tel:0512154510"
              className="inline-flex items-center gap-2 hover:text-water-blue transition-colors"
            >
              <Phone className="w-4 h-4 text-water-blue" />
              051-2154510
            </a>
            <a
              href="mailto:ccoe.education@gmail.com"
              className="inline-flex items-center gap-2 hover:text-water-blue transition-colors"
            >
              <Mail className="w-4 h-4 text-water-blue" />
              ccoe.education@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
