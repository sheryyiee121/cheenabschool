import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle,
  Heart,
  ArrowRight,
  Backpack,
  ShieldCheck,
  Smile,
  Brain,
  Zap,
  Star,
} from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Low Bag Weight System | Chanab Centre of Excellence",
  description:
    "Chanab's revolutionary Low Bag Weight System uses pigeon-hole lockers to eliminate heavy school bags — protecting your child's spine, health, and academic performance.",
};

const problems = [
  {
    icon: AlertTriangle,
    title: "Spinal Damage",
    description:
      "Children carrying more than 10% of their body weight develop chronic back pain, disc compression, and postural deformities.",
  },
  {
    icon: AlertTriangle,
    title: "Shoulder & Neck Strain",
    description:
      "Heavy bags cause muscle fatigue, headaches, and nerve compression in the neck and shoulders — affecting daily comfort.",
  },
  {
    icon: AlertTriangle,
    title: "Reduced Energy",
    description:
      "Physical exhaustion from carrying heavy loads means students arrive at school tired, reducing concentration and motivation.",
  },
  {
    icon: AlertTriangle,
    title: "Poor Academic Focus",
    description:
      "Discomfort from heavy bags leads to fidgeting, distraction, and reduced classroom engagement — directly impacting grades.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Healthier Spine",
    description: "90% reduction in bag weight eliminates spinal stress and prevents long-term postural damage.",
  },
  {
    icon: Brain,
    title: "Better Focus",
    description: "Students arrive fresh and energetic, ready to concentrate fully on learning.",
  },
  {
    icon: Smile,
    title: "Happier Students",
    description: "No more dreading the morning bag struggle. Children actually look forward to school.",
  },
  {
    icon: Zap,
    title: "More Energy",
    description: "Physical comfort means more energy for sports, activities, and engaging in class.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Storage",
    description: "Personal pigeon-holes are secure, organized, and accessible throughout the school day.",
  },
  {
    icon: Star,
    title: "Better Learning",
    description:
      "Comfortable students focus better in class. When children are not weighed down, well-being and academics can grow together.",
  },
];

export default function LowBagSystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-water-light mb-6">
            <Backpack className="w-4 h-4" />
            Innovation in Education
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Low Bag Weight{" "}
            <span className="text-gradient">System</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Protecting your child&apos;s health while maximizing their learning
            potential. A revolutionary approach pioneered by Chanab Centre of
            Excellence.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Problem"
            title="Why Heavy Bags Are Dangerous"
            subtitle="Medical research shows alarming health consequences of heavy school bags on growing children."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((p) => (
              <div
                key={p.title}
                className="bg-red-50 rounded-2xl p-7 border border-red-100"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "85%", label: "of students carry bags >10% body weight" },
              { value: "60%", label: "report chronic back pain" },
              { value: "40%", label: "develop postural issues by age 14" },
              { value: "25%", label: "see reduced academic performance" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-5 text-center border border-gray-100"
              >
                <p className="text-3xl font-extrabold text-red-500">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 sm:py-28 gradient-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Solution"
            title="The Pigeon-Hole System"
            subtitle="Every student gets a personal storage compartment at school. Books stay at school — children travel light."
            light
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-bold text-water-blue">
                  How It Works
                </h3>
                <ol className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-water-blue/20 flex items-center justify-center text-water-blue font-bold text-sm shrink-0">
                      1
                    </span>
                    Each student is assigned a personal pigeon-hole locker
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-water-blue/20 flex items-center justify-center text-water-blue font-bold text-sm shrink-0">
                      2
                    </span>
                    All textbooks and notebooks are stored securely at school
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-water-blue/20 flex items-center justify-center text-water-blue font-bold text-sm shrink-0">
                      3
                    </span>
                    Students access their materials at the start of each class
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-water-blue/20 flex items-center justify-center text-water-blue font-bold text-sm shrink-0">
                      4
                    </span>
                    Children only carry a light bag with lunch and essentials
                  </li>
                </ol>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 glass rounded-xl p-5 text-center">
                  <p className="text-3xl font-extrabold text-red-400 line-through">
                    8+ kg
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Average bag before
                  </p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-6 h-6 text-water-blue" />
                </div>
                <div className="flex-1 glass rounded-xl p-5 text-center border-water-blue/30">
                  <p className="text-3xl font-extrabold text-water-blue">
                    &lt;1 kg
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Average bag after</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <Backpack className="w-20 h-20 text-water-blue mx-auto mb-4" />
                  <p className="text-3xl font-extrabold">90%</p>
                  <p className="text-water-light mt-1">Weight Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Benefits"
            title="Why It Works"
            subtitle="The Low Bag Weight System transforms the school experience in every way."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-7 card-hover border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6 text-blue-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Your Child Deserves a Healthier School Experience"
            subtitle="Visit Chanab Centre of Excellence and see the Low Bag Weight System in action."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-blue-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-primary transition-all shadow-lg shadow-blue-accent/25"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-xl hover:bg-navy-light transition-all"
            >
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
