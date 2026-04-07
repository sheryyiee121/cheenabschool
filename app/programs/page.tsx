import Link from "next/link";
import {
  BookOpen,
  FlaskConical,
  Monitor,
  Stethoscope,
  Calculator,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";
import AnimatedSection from "@/app/components/AnimatedSection";
import StaggerChildren from "@/app/components/StaggerChildren";
import MagneticButton from "@/app/components/MagneticButton";
import HeroTextAnimation from "@/app/components/HeroTextAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Academics | Chanab Centre of Excellence",
  description:
    "Explore academic programs at Chanab Centre of Excellence — Middle School, Secondary, and Higher Secondary with Pre-Medical, ICS, and more.",
};

const methodology = [
  "Concept-based teaching over rote memorization",
  "Real-world application of theories and formulas",
  "Interactive classroom discussions and activities",
  "Regular assessments and personalized feedback",
  "Board exam preparation with past paper practice",
  "Career counseling and university guidance",
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <HeroTextAnimation className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="hero-badge inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-water-light mb-6">
            Academic Programs
          </span>
          <h1 className="hero-title text-4xl sm:text-5xl font-extrabold tracking-tight">
            Academic <span className="text-gradient">Excellence</span> at Every
            Level
          </h1>
          <p className="hero-desc mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            From Grade VI to XII, our structured academic programs build strong
            foundations and prepare students for national board exams and beyond.
          </p>
        </HeroTextAnimation>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection animation="fadeLeft">
              <div>
                <SectionHeading
                  badge="Our Approach"
                  title="Conceptual Learning Methodology"
                  subtitle="We believe understanding 'why' is more powerful than memorizing 'what'. Our teachers are trained to make every concept crystal clear."
                  center={false}
                />
                <StaggerChildren className="mt-8 space-y-4" stagger={0.08} y={20}>
                  {methodology.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-water-blue mt-0.5 shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </StaggerChildren>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md h-80 rounded-3xl gradient-navy flex items-center justify-center">
                  <div className="text-center text-white">
                    <Lightbulb className="w-16 h-16 mx-auto mb-4 text-water-blue animate-float" />
                    <p className="text-2xl font-bold">Understand</p>
                    <p className="text-water-light mt-1">
                      Don&apos;t Just Memorize
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Middle School */}
      <section id="middle" className="py-20 sm:py-28 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection animation="fadeLeft">
              <div>
                <SectionHeading
                  badge="Grades VI – VIII"
                  title="Middle School"
                  subtitle="Building strong academic foundations through curiosity-driven learning and character development."
                  center={false}
                />
                <div className="mt-8 space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-bold text-navy flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-accent" />
                      Core Subjects
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      English, Urdu, Mathematics, General Science, Social
                      Studies, Islamiat, Computer Science
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-bold text-navy flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-accent" />
                      Key Focus Areas
                    </h3>
                    <ul className="mt-2 space-y-2 text-sm text-gray-600">
                      <li>• Critical thinking and problem-solving skills</li>
                      <li>• Strong English communication (spoken & written)</li>
                      <li>• Science lab practicals from Grade VI</li>
                      <li>• Computer literacy and basic programming</li>
                      <li>• Character building and Islamic values</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="bg-gradient-to-br from-blue-accent to-water-blue rounded-3xl p-10 text-white">
                <BookOpen className="w-12 h-12 mb-6 opacity-80" />
                <h3 className="text-3xl font-bold">Middle School</h3>
                <p className="text-white/70 mt-1">Grades VI – VIII</p>
                <div className="mt-8 space-y-4 text-white/90">
                  <p className="text-sm leading-relaxed">
                    Our middle school program focuses on building a robust
                    academic base. Students develop analytical skills, scientific
                    curiosity, and confident communication abilities that prepare
                    them for matriculation.
                  </p>
                  <div className="pt-4 border-t border-white/20 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold">25</p>
                      <p className="text-xs text-white/60">Students per class</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">8</p>
                      <p className="text-xs text-white/60">Core subjects</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Secondary */}
      <section id="secondary" className="py-20 sm:py-28 bg-gray-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection animation="fadeLeft" delay={0.2} className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-navy-medium to-blue-primary rounded-3xl p-10 text-white">
                <FlaskConical className="w-12 h-12 mb-6 opacity-80" />
                <h3 className="text-3xl font-bold">Secondary</h3>
                <p className="text-white/70 mt-1">Grades IX – X (Matric)</p>
                <div className="mt-8 space-y-4 text-white/90">
                  <p className="text-sm leading-relaxed">
                    FBISE Matriculation program with dedicated streams. Intensive
                    board preparation combined with conceptual understanding
                    ensures our students excel in national exams.
                  </p>
                  <div className="pt-4 border-t border-white/20 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold">98%</p>
                      <p className="text-xs text-white/60">Pass rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">FBISE</p>
                      <p className="text-xs text-white/60">Board Affiliated</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight" className="order-1 lg:order-2">
              <div>
                <SectionHeading
                  badge="Grades IX – X"
                  title="Secondary School"
                  subtitle="FBISE Matriculation — rigorous board preparation with conceptual clarity and exam confidence."
                  center={false}
                />
                <div className="mt-8 space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-bold text-navy flex items-center gap-2">
                      <FlaskConical className="w-5 h-5 text-blue-accent" />
                      Science Group
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Physics, Chemistry, Biology, Mathematics, English, Urdu,
                      Islamiat, Pakistan Studies
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-bold text-navy flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-blue-accent" />
                      Board Preparation
                    </h3>
                    <ul className="mt-2 space-y-2 text-sm text-gray-600">
                      <li>• Past paper solving and analysis</li>
                      <li>• Mock examinations every quarter</li>
                      <li>• One-on-one doubt clearing sessions</li>
                      <li>• Lab practicals aligned with board requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Higher Secondary */}
      <section id="higher" className="py-20 sm:py-28 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <SectionHeading
              badge="Grades XI – XII"
              title="Higher Secondary (Intermediate)"
              subtitle="Choose your path — Pre-Medical, ICS, or other streams. Expert faculty prepare you for top universities."
            />
          </AnimatedSection>
          <StaggerChildren className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.15}>
            {/* Pre-Medical */}
            <div className="bg-white rounded-2xl p-7 card-hover border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                <Stethoscope className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-navy">
                Pre-Medical (FSc)
              </h3>
              <p className="text-sm text-blue-accent font-medium mt-1">
                Biology, Chemistry, Physics
              </p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Prepare for MDCAT and medical college admissions. Strong focus on
                conceptual biology and chemistry with practical lab sessions.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "MDCAT preparation support",
                  "Medical college guidance",
                  "Laboratory practicals",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-water-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ICS */}
            <div className="bg-white rounded-2xl p-7 card-hover border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <Monitor className="w-6 h-6 text-blue-accent" />
              </div>
              <h3 className="text-lg font-bold text-navy">ICS</h3>
              <p className="text-sm text-blue-accent font-medium mt-1">
                Computer Science, Math, Physics
              </p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                For future software engineers and IT professionals. Learn
                programming, data structures, and advanced mathematics.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Programming fundamentals",
                  "AI & technology exposure",
                  "University entrance prep",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-water-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pre-Engineering */}
            <div className="bg-white rounded-2xl p-7 card-hover border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5">
                <Calculator className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-navy">Pre-Engineering</h3>
              <p className="text-sm text-blue-accent font-medium mt-1">
                Mathematics, Physics, Chemistry
              </p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                For aspiring engineers. Advanced mathematics and physics with
                problem-solving focus for ECAT and university entrance.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "ECAT preparation",
                  "Engineering aptitude building",
                  "Advanced problem solving",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-water-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-navy text-white">
        <AnimatedSection animation="fadeUp" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">
            Find the Right Program for Your Child
          </h2>
          <p className="mt-3 text-gray-300">
            Not sure which stream to choose? Our academic counselors are here to
            help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-water-blue text-navy font-bold px-7 py-3 rounded-xl hover:bg-water-light transition-all"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3 rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Get Guidance
              </Link>
            </MagneticButton>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
