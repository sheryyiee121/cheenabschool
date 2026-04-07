import Link from "next/link";
import {
  Monitor,
  FlaskConical,
  BookOpen,
  Shield,
  Wifi,
  Users,
  ArrowRight,
  CheckCircle,
  Cpu,
  GraduationCap,
} from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilities | Chanab Centre of Excellence",
  description:
    "Explore our modern facilities — computer lab with AI courses, science lab, smart classrooms, and more at Chanab Centre of Excellence, G-12 Islamabad.",
};

const facilities = [
  {
    icon: Monitor,
    title: "Computer Lab",
    badge: "AI & Technology",
    description:
      "State-of-the-art computer lab equipped with modern PCs and high-speed internet. Students learn programming, AI basics, web development, and digital literacy.",
    features: [
      "AI and Machine Learning introductory courses",
      "Programming fundamentals (Python, Scratch)",
      "Digital literacy and cyber safety",
      "Typing and Office suite training",
      "Project-based technology learning",
    ],
  },
  {
    icon: FlaskConical,
    title: "Science Laboratory",
    badge: "Hands-on Learning",
    description:
      "Fully equipped science lab for Physics, Chemistry, and Biology practicals. Students perform experiments that bring textbook concepts to life.",
    features: [
      "Physics experiments with modern apparatus",
      "Chemistry practicals with safety equipment",
      "Biology dissection and microscopy",
      "Board exam practical preparation",
      "Lab reports and scientific methodology training",
    ],
  },
  {
    icon: BookOpen,
    title: "Smart Classrooms",
    badge: "Modern Teaching",
    description:
      "Technology-enhanced classrooms designed for interactive learning. Clean, well-lit, and air-conditioned spaces that promote focused study.",
    features: [
      "Multimedia presentation systems",
      "Comfortable seating with proper ergonomics",
      "Climate-controlled environment",
      "Small class sizes (max 25 students)",
      "Pigeon-hole storage system in every classroom",
    ],
  },
];

const additionalFacilities = [
  {
    icon: Shield,
    title: "CCTV Security",
    description: "Complete campus coverage with 24/7 CCTV monitoring for student safety and security.",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Campus-wide Wi-Fi for digital learning, research, and technology-integrated education.",
  },
  {
    icon: Users,
    title: "Student Common Area",
    description: "Comfortable spaces for students to collaborate, discuss, and relax during breaks.",
  },
  {
    icon: GraduationCap,
    title: "Library & Reading Room",
    description: "Curated collection of textbooks, reference materials, and general knowledge resources.",
  },
  {
    icon: Cpu,
    title: "Pigeon-Hole Lockers",
    description: "Personal storage for every student — the backbone of our Low Bag Weight System.",
  },
  {
    icon: BookOpen,
    title: "Examination Hall",
    description: "Dedicated, distraction-free examination space for mock tests and board exam preparation.",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-water-light mb-6">
            Our Campus
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            World-Class <span className="text-gradient">Facilities</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Modern infrastructure designed to support 21st-century learning.
            Every facility is built with student comfort and academic excellence
            in mind.
          </p>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {facilities.map((f, i) => (
              <div
                key={f.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 bg-blue-50 text-blue-accent">
                    {f.badge}
                  </span>
                  <h2 className="text-3xl font-bold text-navy">{f.title}</h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {f.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-water-blue mt-0.5 shrink-0" />
                        <span className="text-gray-600">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`${
                    i % 2 === 1 ? "lg:order-1" : ""
                  } flex justify-center`}
                >
                  <div className="w-full max-w-md h-72 rounded-3xl gradient-navy flex items-center justify-center">
                    <div className="text-center text-white">
                      <f.icon className="w-16 h-16 mx-auto mb-4 text-water-blue" />
                      <p className="text-xl font-bold">{f.title}</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Chanab Centre of Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="More Facilities"
            title="Everything Your Child Needs"
            subtitle="A complete campus experience designed around student well-being and academic success."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFacilities.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-7 card-hover border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-blue-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">
            Come See Our Facilities in Person
          </h2>
          <p className="mt-3 text-gray-300">
            Schedule a campus tour and experience the Chanab difference
            firsthand.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-water-blue text-navy font-bold px-7 py-3 rounded-xl hover:bg-water-light transition-all"
            >
              Schedule a Tour <ArrowRight className="w-4 h-4" />
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
