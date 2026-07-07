import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Message from the Founder | CHANAB Centre of Excellence",
  description:
    "A message from Prof. Muhammad Aftab Tariq, Founder & Chairman of CHANAB Centre of Excellence, Islamabad — 34 years of educational leadership.",
};

const career = [
  "Mathematics Lecturer",
  "Associate Professor",
  "Principal",
  "Area Education Officer",
  "Director (Colleges)",
  "Project Director",
];

export default function FounderMessagePage() {
  return (
    <>
      {/* Page banner */}
      <PageHero
        eyebrow="Founder & Chairman"
        title="A Message from the Founder"
        description="Prof. Muhammad Aftab Tariq — CHANAB Centre of Excellence"
        imageSrc="/images/president.jpeg"
        imageAlt="Prof. Muhammad Aftab Tariq in his office at CHANAB Centre of Excellence"
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Portrait + career */}
            <div>
              <div className="relative w-60 sm:w-64 mx-auto lg:mx-0 aspect-[3/4] overflow-hidden shadow-xl mb-8">
                <Image
                  src="/images/president.jpeg"
                  alt="Prof. Muhammad Aftab Tariq"
                  fill
                  priority
                  className="object-cover object-[65%_center]"
                  sizes="256px"
                />
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-navy mb-4">
                  34 Years of Service (1990–2024)
                </h3>
                <ul className="space-y-2.5">
                  {career.map((role) => (
                    <li
                      key={role}
                      className="flex items-center gap-2.5 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-primary shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                  Played an important role in establishing six Model Colleges in
                  Islamabad.
                </p>
              </div>
            </div>

            {/* Letter */}
            <div className="lg:col-span-2">
              <blockquote className="border-l-4 border-sky-primary pl-5 italic text-slate-700 text-lg leading-relaxed mb-8">
                &ldquo;Education is not merely about preparing children for
                examinations; it is about preparing them for life.&rdquo;
              </blockquote>

              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p className="font-semibold text-navy">Assalam-o-Alaikum,</p>
                <p>Welcome to CHANAB Centre of Excellence (CCoE).</p>
                <p>
                  After dedicating more than 34 years to education, I came to
                  one firm conviction: every child deserves an institution that
                  nurtures not only academic excellence but also strong
                  character, Islamic values, confidence, and a lifelong love of
                  learning.
                </p>
                <p>
                  This conviction inspired the establishment of{" "}
                  <strong className="text-navy">
                    CHANAB Centre of Excellence
                  </strong>{" "}
                  — an institution founded on the belief that true education
                  develops the whole person. While academic success is
                  important, it is character, integrity, discipline, and
                  compassion that define an individual&apos;s lasting
                  contribution to society.
                </p>
                <p>
                  At CCoE, we are committed to creating an environment where
                  students are encouraged to think independently, learn with
                  curiosity, and grow with confidence. Alongside quality
                  education, we place great emphasis on Islamic Tarbiyah and
                  Akhlaq, helping students become respectful, responsible, and
                  morally grounded individuals who serve their families, their
                  nation, and humanity with sincerity.
                </p>
                <p>
                  Our purpose is simple:{" "}
                  <strong className="text-navy">
                    &ldquo;To educate minds, build character, and inspire
                    responsible future leaders.&rdquo;
                  </strong>
                </p>
                <p>
                  Every decision we make is guided by what is best for our
                  students, ensuring they receive an education that prepares
                  them not only for higher studies and successful careers but
                  also for a meaningful and purposeful life.
                </p>
                <p>
                  I firmly believe that parents and educational institutions are
                  partners in shaping the next generation. With mutual trust,
                  shared values, and a common commitment to excellence, we can
                  provide our children with opportunities to realise their full
                  potential.
                </p>
                <p>
                  I warmly invite you to visit CHANAB Centre of Excellence, meet
                  our dedicated educators, and experience an institution where
                  learning is meaningful, values are lived, and every child is
                  encouraged to excel.
                </p>
                <p>
                  Thank you for placing your trust in us. We look forward to
                  welcoming your family to the CCoE community.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-slate-500 text-sm mb-1">With warm regards,</p>
                <p className="font-bold text-navy text-lg">
                  Prof. Muhammad Aftab Tariq
                </p>
                <p className="text-sm text-slate-500">
                  Founder &amp; Chairman, CHANAB Centre of Excellence (CCoE)
                </p>
                <p className="text-sm text-slate-500">
                  Main Service Road, G-12, Islamabad
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-6 py-3 hover:bg-blue-accent transition-colors"
                >
                  Schedule a Campus Visit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-2.5 hover:bg-navy hover:text-white transition-colors"
                >
                  Apply for Admission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
