import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Chanab Centre of Excellence",
  description:
    "Learn about Chanab Centre of Excellence — our mission, vision, values, and commitment to quality education in Islamabad.",
};

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "We pursue the highest standards of education through conceptual learning and dedicated faculty.",
  },
  {
    icon: Heart,
    title: "Student Well-being",
    description:
      "Every decision we make prioritizes the physical and mental health of our students.",
  },
  {
    icon: Users,
    title: "Community & Respect",
    description:
      "We foster an inclusive environment where every student, parent, and teacher is valued.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "From our low bag weight system to AI courses, we embrace modern solutions in education.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Founded",
    description:
      "Chanab Centre of Excellence was established in G-12 Islamabad with a vision to redefine school education.",
  },
  {
    year: "2020",
    title: "Low Bag System Introduced",
    description:
      "Pioneered the pigeon-hole storage system to eliminate heavy school bags and protect student health.",
  },
  {
    year: "2022",
    title: "FBISE Affiliation",
    description:
      "Achieved full affiliation with the Federal Board of Intermediate & Secondary Education.",
  },
  {
    year: "2024",
    title: "Higher Secondary Launched",
    description:
      "Expanded programs to include Intermediate (XI–XII) with Pre-Medical, ICS, and Pre-Engineering streams.",
  },
  {
    year: "2026",
    title: "Growing Strong",
    description:
      "500+ students, 50+ faculty, and a reputation as one of the best schools in Islamabad.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-water-light mb-6">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Shaping <span className="text-gradient">Futures</span> Since
                2019
              </h1>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                Chanab Centre of Excellence was born from a simple belief: every
                child deserves education that is both rigorous and caring. We
                combine the discipline of traditional schooling with
                innovation-driven methods to produce confident, capable
                graduates.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/logo.jpeg"
                alt="Chanab Centre of Excellence"
                width={300}
                height={300}
                className="rounded-3xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 card-hover">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-accent" />
              </div>
              <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To provide a nurturing and intellectually stimulating environment
                where students develop conceptual understanding, ethical values,
                and the confidence to succeed in an ever-changing world. We are
                committed to making quality education accessible while
                prioritizing the health and happiness of every child.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 card-hover">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-accent" />
              </div>
              <h2 className="text-2xl font-bold text-navy">Our Vision</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To be recognized as the leading centre of educational excellence
                in Islamabad — a school where every graduate is equipped with
                knowledge, character, and the skills to contribute meaningfully
                to society. We envision a future where our students lead with
                integrity and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide everything we do at Chanab."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 text-center card-hover border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-blue-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Journey"
            title="Milestones"
            subtitle="A brief look at how Chanab has grown over the years."
          />
          <div className="mt-14 relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100" />
            <div className="space-y-10">
              {timeline.map((t) => (
                <div key={t.year} className="relative pl-20">
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-blue-accent text-white flex items-center justify-center text-xs font-bold shadow-lg">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-100 card-hover">
                    <span className="text-xs font-bold text-water-blue bg-blue-50 px-3 py-1 rounded-full">
                      {t.year}
                    </span>
                    <h3 className="text-lg font-bold text-navy mt-3">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">
            Come See Us in Person
          </h2>
          <p className="mt-3 text-gray-300">
            Visit our campus in G-12 Islamabad and experience the Chanab
            difference.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-water-blue text-navy font-bold px-7 py-3 rounded-xl hover:bg-water-light transition-all"
            >
              Schedule a Visit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3 rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
