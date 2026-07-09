import Link from "next/link";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

import { ADMISSION_FORM_URL } from "@/app/admission-form";

export const metadata: Metadata = {
  title:
    "FBISE vs Other Education Boards: A Complete Comparison | Chanab Centre of Excellence",
  description:
    "Compare FBISE, Punjab Board, Cambridge, and AKU-EB. Understand which board is best for your child and why Chanab Centre of Excellence chose FBISE.",
};

const boards = [
  {
    name: "FBISE (Federal Board)",
    pros: [
      "Recognized across all Pakistan and internationally",
      "Standardized curriculum — consistent quality",
      "Accepted by all Pakistani universities and medical colleges",
      "Affordable examination fees",
      "Results respected for government jobs and CSS exams",
    ],
    cons: [
      "Curriculum can be slower to update",
      "Some argue it relies on traditional assessment methods",
    ],
  },
  {
    name: "Punjab Board (BISE)",
    pros: [
      "Widely used in Punjab province",
      "Familiar to most families in Punjab",
      "Large network of affiliated schools",
    ],
    cons: [
      "Different boards in each city — inconsistent standards",
      "Results may not carry equal weight as FBISE in federal institutions",
      "Higher rates of paper leaks and malpractice reported",
    ],
  },
  {
    name: "Cambridge (O/A-Level)",
    pros: [
      "International recognition — ideal for studying abroad",
      "Critical thinking-based assessment",
      "Modern curriculum with regular updates",
    ],
    cons: [
      "Extremely expensive (exam fees in GBP)",
      "Not directly accepted for Pakistani medical college admissions",
      "Equivalence certificates required for local universities",
    ],
  },
  {
    name: "AKU-EB (Aga Khan)",
    pros: [
      "Modern assessment approach",
      "Focus on understanding over memorization",
      "Growing recognition",
    ],
    cons: [
      "Limited school network",
      "Less familiarity among employers and institutions",
      "Not available in all cities",
    ],
  },
];

export default function FBISEArticle() {
  return (
    <article className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-blue-accent hover:text-blue-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
          <span className="bg-blue-50 text-blue-accent px-2.5 py-1 rounded-full font-medium">
            Board Exams
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            February 10, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />8 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
          FBISE vs Other Education Boards: A Complete Comparison
        </h1>

        <div className="mt-10 prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed text-lg">
            One of the biggest decisions Pakistani parents face is choosing the
            right education board for their children. This choice affects
            university admissions, career prospects, and even the cost of
            education. Let&apos;s break down the major boards and help you make
            an informed decision.
          </p>

          {boards.map((board) => (
            <div key={board.name} className="mt-10">
              <h2 className="text-2xl font-bold text-navy mb-4">{board.name}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <h3 className="font-bold text-green-700 text-sm mb-3">
                    Advantages
                  </h3>
                  <ul className="space-y-2">
                    {board.pros.map((pro) => (
                      <li
                        key={pro}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                  <h3 className="font-bold text-red-700 text-sm mb-3">
                    Disadvantages
                  </h3>
                  <ul className="space-y-2">
                    {board.cons.map((con) => (
                      <li
                        key={con}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
            Why Chanab Chose FBISE
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <strong>Chanab Centre of Excellence</strong>, we are affiliated
            with FBISE because it offers the best balance of{" "}
            <strong>national recognition, affordability, and academic rigor</strong>
            . Our students get all the benefits of FBISE — accepted everywhere
            in Pakistan for medical, engineering, and general university
            admissions — while we supplement the curriculum with{" "}
            <strong>conceptual teaching methods</strong> that go far beyond
            traditional rote learning.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            In other words, our students get FBISE certification with
            Cambridge-level understanding. The best of both worlds.
          </p>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <p className="font-bold text-navy text-lg">
              The Right Board + The Right School = The Best Results
            </p>
            <p className="text-gray-600 mt-2">
              FBISE gives your child universal recognition. Chanab gives your
              child real understanding. Together, it&apos;s a winning formula.
            </p>
            <a
              href={ADMISSION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-blue-accent text-white font-bold px-5 py-2.5 rounded-lg hover:bg-blue-primary transition-colors text-sm"
            >
              Apply to Chanab →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
