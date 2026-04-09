import Link from "next/link";
import {
  ClipboardList,
  FileText,
  CreditCard,
  BookOpen,
  HelpCircle,
  ArrowRight,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";
import AnimatedSection from "@/app/components/AnimatedSection";
import StaggerChildren from "@/app/components/StaggerChildren";
import MagneticButton from "@/app/components/MagneticButton";
import HeroTextAnimation from "@/app/components/HeroTextAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Chanab Centre of Excellence",
  description:
    "Apply to Chanab Centre of Excellence. Learn about admission process, fee structure, required documents, and entry test syllabus.",
};

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Submit Application",
    description:
      "Fill out the online application form or collect one from our campus. Include all required information about the student and guardian.",
  },
  {
    step: "02",
    icon: BookOpen,
    title: "Admission Test",
    description:
      "There is one general admission test for all classes. It covers English, General Knowledge, Mathematics, and Urdu. The level of questions matches the grade you are applying for.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Interview & Documents",
    description:
      "Shortlisted candidates are called for an interview. Submit all required documents for verification and enrollment processing.",
  },
  {
    step: "04",
    icon: CreditCard,
    title: "Fee Payment & Enrollment",
    description:
      "Upon acceptance, complete the fee payment and enrollment process. Welcome to the Chanab family!",
  },
];

const feeStructure = [
  { level: "Middle School (VI–VIII)" },
  { level: "Secondary (IX–X)" },
  { level: "Higher Secondary (XI–XII)" },
];

const requiredDocs = [
  "Completed admission form with recent photographs",
  "Birth certificate (original + photocopy)",
  "Previous school leaving certificate",
  "Last 2 years report cards / result cards",
  "Parent/Guardian CNIC (photocopy)",
  "Character certificate from previous school",
  "4 passport-size photographs",
];

const admissionTestSubjects = [
  "English",
  "General Knowledge",
  "Mathematics",
  "Urdu",
];

const faqs = [
  {
    q: "When do admissions open?",
    a: "Admissions typically open in January for the new academic session starting in April. However, mid-session admissions are also considered subject to seat availability.",
  },
  {
    q: "Is there an age requirement?",
    a: "Students must meet the FBISE minimum age requirements for each grade level. Generally, a student should be at least 10 years old for Grade VI entry.",
  },
  {
    q: "Can my child transfer mid-year?",
    a: "Yes, we accept mid-year transfers subject to seat availability and a successful entry evaluation. Transfer certificates from the previous school are mandatory.",
  },
  {
    q: "Do you offer scholarships?",
    a: "Yes! We offer merit-based scholarships for outstanding performers and need-based financial aid for deserving students. Contact our admissions office for details.",
  },
  {
    q: "What is the medium of instruction?",
    a: "Our primary medium of instruction is English, with Urdu taught as a compulsory subject as per FBISE requirements.",
  },
  {
    q: "Is transport available?",
    a: "Currently, families arrange their own transport. However, our central G-12 location is easily accessible from all sectors of Islamabad.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <HeroTextAnimation className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="hero-badge inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-water-light mb-6">
            Admissions Open 2026–27
          </span>
          <h1 className="hero-title text-4xl sm:text-5xl font-extrabold tracking-tight">
            Join the <span className="text-gradient">Chanab Family</span>
          </h1>
          <p className="hero-desc mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Begin your child&apos;s journey towards academic excellence. Our
            simple admission process ensures a smooth start.
          </p>
          <div className="hero-cta mt-8">
            <MagneticButton>
              <a
                href="https://wa.me/923335500780?text=Hello%2C%20I%20want%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-water-blue text-navy font-bold px-7 py-3.5 rounded-xl hover:bg-water-light transition-all shadow-lg"
              >
                Inquire on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>
        </HeroTextAnimation>
      </section>

      {/* Admission Process */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <SectionHeading
              badge="How to Apply"
              title="Admission Process"
              subtitle="Four simple steps to enroll your child at Chanab Centre of Excellence."
            />
          </AnimatedSection>
          <StaggerChildren className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.15}>
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="relative bg-white rounded-2xl p-7 card-hover border border-gray-100"
              >
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full gradient-water flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {s.step}
                </div>
                <s.icon className="w-8 h-8 text-blue-accent mt-4 mb-4" />
                <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {s.description}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-water-blue" />
                )}
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <SectionHeading
              badge="Fee Structure"
              title="Transparent & Affordable"
              subtitle="Quality education with clear policies. Contact admissions for current fee details."
            />
          </AnimatedSection>
          <AnimatedSection animation="scale" delay={0.2}>
            <div className="mt-12 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="bg-navy text-white text-sm font-semibold px-6 py-4">
                Program Level
              </div>
              {feeStructure.map((f, i) => (
                <div
                  key={f.level}
                  className={`px-6 py-4 text-sm font-medium text-navy ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  {f.level}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-400 text-center">
              Admission and monthly fees are available from the admissions
              office. Rates are subject to revision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <SectionHeading
              badge="Documents"
              title="Required Documents"
              subtitle="Please prepare the following documents before visiting our admissions office."
            />
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.15}>
            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <StaggerChildren className="space-y-4" stagger={0.08} y={20}>
                {requiredDocs.map((doc) => (
                  <div key={doc} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-water-blue mt-0.5 shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Admission test */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <SectionHeading
              badge="Admission Test"
              title="General Test — All Classes"
              subtitle="Every applicant sits the same four-subject paper. Difficulty is set fairly for the grade you are applying to—not a different exam per program."
            />
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.15}>
            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                The admission test includes the following areas for{" "}
                <strong className="text-navy">all classes</strong> (Middle,
                Secondary, and Higher Secondary):
              </p>
              <ul className="space-y-3">
                {admissionTestSubjects.map((sub) => (
                  <li key={sub} className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-blue-accent mt-0.5 shrink-0" />
                    <span className="text-navy font-medium">{sub}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-gray-400 border-t border-gray-100 pt-6">
                For sample topics or preparation guidance, contact the
                admissions office on WhatsApp or phone.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <SectionHeading
              badge="FAQs"
              title="Frequently Asked Questions"
              subtitle="Have questions? We have answers."
            />
          </AnimatedSection>
          <StaggerChildren className="mt-12 space-y-4" stagger={0.1} y={30}>
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-navy font-semibold hover:bg-gray-50 transition-colors list-none">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-accent shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-navy text-white">
        <AnimatedSection animation="fadeUp" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Enroll?</h2>
          <p className="mt-3 text-gray-300">
            Contact our admissions team today or visit our campus in G-12
            Islamabad.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <a
                href="tel:03335500780"
                className="inline-flex items-center gap-2 bg-water-blue text-navy font-bold px-7 py-3 rounded-xl hover:bg-water-light transition-all"
              >
                Call Now: 0333-5500780
              </a>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3 rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Visit Campus
              </Link>
            </MagneticButton>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
