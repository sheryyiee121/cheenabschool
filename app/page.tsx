import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Lightbulb,
  Heart,
  Backpack,
  ChevronRight,
} from "lucide-react";

import SectionHeading from "@/app/components/SectionHeading";
import AnimatedSection from "@/app/components/AnimatedSection";
import StaggerChildren from "@/app/components/StaggerChildren";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import MagneticButton from "@/app/components/MagneticButton";
import HeroTextAnimation from "@/app/components/HeroTextAnimation";
import HeroBgSlider from "@/app/components/HeroBgSlider";

const whyChooseUs = [
  {
    icon: Lightbulb,
    title: "Conceptual Learning",
    description:
      "We teach concepts, not rote memorization. Students understand the 'why' behind every subject.",
  },
  {
    icon: Backpack,
    title: "Low Bag Weight System",
    description:
      "Pigeon-hole storage system eliminates heavy bags. Your child's health comes first.",
  },
  {
    icon: GraduationCap,
    title: "FBISE Affiliated",
    description:
      "Registered with the Federal Board — nationally recognized certifications and board exams.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description:
      "Personalized attention with low student-to-teacher ratio for maximum learning.",
  },
  {
    icon: Shield,
    title: "Safe & Caring Environment",
    description:
      "CCTV-monitored campus with trained staff dedicated to every student's well-being.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Consistently outstanding board results with distinction holders every year.",
  },
];

const programs = [
  {
    grade: "Middle School",
    range: "Grades VI – VIII",
    description:
      "Building strong foundations in science, mathematics, English, and critical thinking.",
    color: "from-blue-accent to-water-blue",
    image: "/images/programs.jpeg",
  },
  {
    grade: "Secondary",
    range: "Grades IX – X",
    description:
      "FBISE Matriculation with focused science and general streams. Board exam prep with conceptual clarity.",
    color: "from-navy-medium to-blue-primary",
    image: "/images/academic-excellence.jpeg",
  },
  {
    grade: "Higher Secondary",
    range: "Grades XI – XII",
    description:
      "Pre-Medical, ICS, and more. Preparing students for top universities with expert guidance.",
    color: "from-blue-primary to-blue-accent",
    image: "/images/bright-future.jpeg",
  },
];

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Parent — Grade IX Student",
    quote:
      "The low bag weight system changed everything for my son. He's healthier, happier, and his grades have improved dramatically. Chanab truly puts students first.",
    rating: 5,
  },
  {
    name: "Dr. Sadia Malik",
    role: "Parent — Grade XI Student",
    quote:
      "Conceptual teaching here is outstanding. My daughter actually understands physics and biology instead of memorizing. She's now aiming for NUST with confidence.",
    rating: 5,
  },
  {
    name: "Fatima Rashid",
    role: "Student — Grade XII Pre-Medical",
    quote:
      "The teachers at Chanab are more like mentors. They care about our futures and go above and beyond. I scored A+ in my boards thanks to their dedication.",
    rating: 5,
  },
  {
    name: "Tariq Hussain",
    role: "Parent — Grade VII Student",
    quote:
      "Best school in G-12 Islamabad. The discipline, the environment, and the quality of education — everything is top-notch. My child loves going to school every day.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative text-white overflow-hidden min-h-[85vh] flex items-center">
        <HeroBgSlider />
        <div className="absolute inset-0 bg-[#0a1628]/60 z-[1]" />

        <HeroTextAnimation className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
          <div className="max-w-2xl">
            <p className="hero-badge inline-block border border-white/40 px-5 py-2 text-[13px] tracking-[0.15em] uppercase text-white/90 mb-8">
              Welcome to Chanab Centre of Excellence
            </p>

            <h1 className="hero-title font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
              Inspiring Excellence
              <br />
              In Education
            </h1>

            <p className="hero-desc mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-lg italic">
              Discover a dynamic learning environment, fostering innovation,
              curiosity, and the pursuit of knowledge for a brighter future.
            </p>

            <MagneticButton className="mt-10">
              <Link
                href="/admissions"
                className="hero-cta inline-flex items-center gap-2 bg-water-blue text-navy font-bold px-8 py-4 rounded-lg hover:bg-water-light transition-all text-sm tracking-wide uppercase shadow-lg shadow-water-blue/25"
              >
                Apply Now For Admission
              </Link>
            </MagneticButton>
          </div>
        </HeroTextAnimation>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { target: 500, suffix: "+", label: "Students Enrolled" },
              { target: 50, suffix: "+", label: "Expert Faculty" },
              { target: 98, suffix: "%", label: "Board Results" },
              { target: 7, suffix: "+", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="text-3xl sm:text-4xl font-extrabold text-water-blue"
                />
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CAMPUS IMAGE BANNER ==================== */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/campus-features.jpeg"
                alt="Chanab Centre of Excellence — Purpose-Built Educational Campus"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <SectionHeading
              badge="Why Chanab?"
              title="Why Parents Choose Us"
              subtitle="We combine traditional values with modern teaching methodologies to deliver an unmatched educational experience."
            />
          </AnimatedSection>
          <StaggerChildren
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            stagger={0.1}
          >
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 card-hover border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-blue-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== PROGRAMS ==================== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <SectionHeading
              badge="Academics"
              title="Programs Overview"
              subtitle="Comprehensive academic programs from Grade VI to XII, designed to nurture excellence at every level."
            />
          </AnimatedSection>
          <StaggerChildren
            className="mt-14 grid md:grid-cols-3 gap-8"
            stagger={0.15}
            y={60}
          >
            {programs.map((prog) => (
              <div
                key={prog.grade}
                className="group relative overflow-hidden rounded-2xl card-hover h-96"
              >
                <Image
                  src={prog.image}
                  alt={prog.grade}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-sm font-medium text-water-light uppercase tracking-wide">
                    {prog.range}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{prog.grade}</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                    {prog.description}
                  </p>
                  <Link
                    href="/programs"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-water-blue hover:gap-2 transition-all"
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== LOW BAG SYSTEM HIGHLIGHT ==================== */}
      <section className="py-20 sm:py-28 gradient-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection animation="fadeLeft">
              <div>
                <SectionHeading
                  badge="Innovation"
                  title="Low Bag Weight System"
                  subtitle="Pakistan's pioneer in student health — our pigeon-hole system means your child carries almost nothing to school."
                  light
                  center={false}
                />
                <ul className="mt-8 space-y-4">
                  {[
                    "Personal pigeon-hole lockers for every student",
                    "Books & notebooks stored safely at school",
                    "Reduces spinal stress by up to 90%",
                    "Increased focus and energy in class",
                    "Happier, healthier students",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-water-blue mt-0.5 shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <MagneticButton className="mt-8">
                  <Link
                    href="/low-bag-system"
                    className="inline-flex items-center gap-2 bg-water-blue text-navy font-bold px-6 py-3 rounded-xl hover:bg-water-light transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeRight">
              <div className="flex justify-center">
                <div className="relative w-80 h-80 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-20 h-20 text-water-blue mx-auto mb-4 animate-float" />
                    <p className="text-2xl font-bold">Healthy Students</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Happy Learners
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <SectionHeading
              badge="Testimonials"
              title="What Parents & Students Say"
              subtitle="Don't just take our word for it — hear from our school community."
            />
          </AnimatedSection>
          <StaggerChildren
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.12}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 card-hover border border-gray-100 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gold"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="scale">
            <SectionHeading
              badge="Enroll Today"
              title="Give Your Child the Best Start"
              subtitle="Limited seats for the 2026–27 academic session. Apply now and become part of the Chanab family."
            />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-blue-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-primary transition-all shadow-lg shadow-blue-accent/25"
                >
                  Start Your Application
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-xl hover:bg-navy-light transition-all"
                >
                  Schedule a Visit
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
