import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Backpack,
  NotebookPen,
  BookMarked,
  UtensilsCrossed,
  GlassWater,
  Heart,
} from "lucide-react";

import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Education Without Burden | CHANAB Centre of Excellence",
  description:
    "Education Without Burden at CHANAB Centre of Excellence — our Classroom Learning Library keeps textbooks in every classroom so students carry lighter bags. Less Weight. More Learning. Greater Growth.",
};

const bringItems = [
  {
    icon: NotebookPen,
    title: "Required Notebooks",
    detail: "As per the homework schedule",
  },
  { icon: BookMarked, title: "Student Diary", detail: "For daily planning" },
  { icon: UtensilsCrossed, title: "Lunch Box", detail: "A healthy lunch" },
  { icon: GlassWater, title: "Water Bottle", detail: "Stay hydrated" },
];

const howItWorks = [
  "Students arrive with only their essential learning materials.",
  "During lessons, they use the prescribed textbooks available in the Classroom Learning Library.",
  "At the end of each lesson, textbooks are returned to the classroom library for the next class.",
];

const studentBenefits = [
  "Carry lighter school bags",
  "Improve comfort and well-being",
  "Stay organised",
  "Focus more on learning",
  "Develop responsibility by caring for shared resources",
  "Enjoy a more positive educational experience",
];

const parentBenefits = [
  "Carry only essential learning materials",
  "Spend less time organising heavy textbooks",
  "Learn in a structured and organised environment",
  "Benefit from a system designed with student well-being in mind",
];

export default function EducationWithoutBurdenPage() {
  return (
    <>
      {/* Banner */}
      <PageHero
        eyebrow="Less Weight. More Learning. Greater Growth."
        title="Education Without Burden"
        description="At CCoE, we believe children should carry dreams, curiosity, and confidence — not heavy school bags."
        imageSrc="/images/class.jpeg"
        imageAlt="Students and faculty at CHANAB Centre of Excellence"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-primary/20 mb-6">
          <Backpack className="w-8 h-8 text-water-blue" />
        </div>
      </PageHero>

      {/* Intro */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 leading-relaxed text-lg">
            Our Education Without Burden initiative reflects our commitment to
            creating a healthier, happier, and more effective learning
            experience by reducing unnecessary physical burden and allowing
            students to focus on what truly matters — learning.
          </p>
        </div>
      </section>

      {/* What students bring */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              A Smarter Way to Learn
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              CCoE has introduced a Classroom Learning Library in every
              classroom, where all prescribed textbooks remain available
              throughout the academic year. Instead of carrying heavy textbooks
              every day, students bring only:
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {bringItems.map((item) => (
              <div
                key={item.title}
                className="bg-water-pale/60 rounded-xl p-7 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm mb-4">
                  <item.icon className="w-7 h-7 text-sky-primary" />
                </div>
                <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-navy font-semibold mt-8">
            Everything else is available in the classroom when needed.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              How It Works
            </h2>
            <p className="text-slate-500">
              This simple system keeps learning organised while significantly
              reducing the weight students carry every day.
            </p>
          </div>
          <ol className="space-y-4">
            {howItWorks.map((step, index) => (
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

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-navy mb-4">
                Benefits for Students
              </h3>
              <ul className="space-y-2.5">
                {studentBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-navy mb-4">
                Benefits for Parents
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Parents can feel confident knowing that their children:
              </p>
              <ul className="space-y-2.5">
                {parentBenefits.map((item) => (
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

      {/* Beyond heavy bags */}
      <section className="py-16 sm:py-20 bg-water-pale/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-10 h-10 text-sky-primary mx-auto mb-5" />
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Learning Beyond Heavy Bags
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            At CCoE, removing unnecessary weight is only one part of our
            philosophy. We also believe students should be free from the burden
            of rote memorisation. Our learning environment encourages
            understanding, curiosity, critical thinking, and meaningful
            participation so that knowledge is retained through understanding
            rather than repetition.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Every initiative at CHANAB Centre of Excellence begins with one
            guiding principle:{" "}
            <strong className="text-navy">
              &ldquo;What is in the best interest of our students?&rdquo;
            </strong>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            A Better Learning Experience Begins Here
          </h2>
          <p className="text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            By combining our Classroom Learning Library with a student-first
            approach, CHANAB Centre of Excellence creates an environment where
            students learn with greater comfort, confidence, and enthusiasm
            every day.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
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
              Book a Campus Visit
            </Link>
          </div>
          <p className="text-water-light font-medium italic">
            Light Bags. Happy Learners. Brighter Futures.
          </p>
        </div>
      </section>
    </>
  );
}
