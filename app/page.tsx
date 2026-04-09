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
  Target,
  Eye,
} from "lucide-react";

import SectionHeading from "@/app/components/SectionHeading";
import AnimatedSection from "@/app/components/AnimatedSection";
import StaggerChildren from "@/app/components/StaggerChildren";
import MagneticButton from "@/app/components/MagneticButton";
import HeroTextAnimation from "@/app/components/HeroTextAnimation";
import HeroBgSlider from "@/app/components/HeroBgSlider";

const missionHighlights = [
  "Learning beyond memorization — conceptual clarity comes first.",
  "Health and well-being matter: our low bag weight system protects growing bodies.",
  "A nurturing space where ethics, confidence, and curiosity grow together.",
];

const visionHighlights = [
  "Graduates equipped for higher study, work, and civic life.",
  "Character, integrity, and innovation woven into everyday school culture.",
  "Aim to stand out as a centre of excellence for families in Islamabad.",
];

const campusEthos = [
  { label: "Building minds", detail: "Rigorous academics with room to think." },
  { label: "Shaping character", detail: "Discipline, respect, and responsibility." },
  { label: "Inspiring faith", detail: "Values-led environment for the whole child." },
];

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
    title: "FBISE-Aligned Pathway",
    description:
      "Teaching and assessment follow FBISE expectations so students are prepared for board exams as they progress—starting strong from our first session.",
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
    role: "Parent — enrolling Grade IX",
    quote:
      "The low bag weight idea was a big reason we chose Chanab. Our son won’t be carrying a heavy bag all day—we’re confident that will help his health and focus.",
    rating: 5,
  },
  {
    name: "Dr. Sadia Malik",
    role: "Parent — enrolling Higher Secondary",
    quote:
      "During our visit, teachers explained concepts instead of pushing rote work. That approach is exactly what we wanted before board classes begin.",
    rating: 5,
  },
  {
    name: "Fatima Rashid",
    role: "Prospective student family",
    quote:
      "We visited the campus and loved how clearly the staff explained the low-bag system and conceptual approach. We are excited to start this session at Chanab.",
    rating: 5,
  },
  {
    name: "Tariq Hussain",
    role: "Parent — enrolling Grade VII",
    quote:
      "G-12 location works well for us. The campus felt disciplined and welcoming on our tour—we’re looking forward to our child’s first session here.",
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
            <p className="hero-badge inline-block border border-gold-light/70 px-5 py-2 text-[13px] tracking-[0.15em] uppercase text-gold-light mb-8 shadow-sm shadow-gold/20">
              Welcome
            </p>

            <h1 className="hero-title font-heading text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold leading-[1.1] tracking-tight text-white uppercase">
              Chanab Centre of
              <br />
              <span className="text-gradient">Excellence</span>
            </h1>

            <p className="hero-desc mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-lg">
              <span className="font-semibold text-white/90 not-italic">
                Inspiring excellence in education.
              </span>{" "}
              <span className="italic">
                Discover a dynamic learning environment, fostering innovation,
                curiosity, and the pursuit of knowledge for a brighter future.
              </span>
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

      {/* ==================== MISSION & VISION ==================== */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-linear-to-b from-water-pale/40 via-white to-gray-50">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 10%, rgba(30, 58, 138, 0.08) 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <SectionHeading
              badge="Who we are"
              title="Mission & Vision"
              subtitle="Our purpose and the future we are building for every student at Chanab Centre of Excellence."
            />
          </AnimatedSection>

          <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
            <AnimatedSection animation="fadeUp" delay={0.08}>
              <article className="relative h-full flex flex-col rounded-3xl border border-blue-100/80 bg-white p-8 sm:p-10 shadow-[0_24px_70px_-20px_rgba(15,23,42,0.18)] card-hover overflow-hidden">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-linear-to-br from-water-blue/25 to-transparent blur-2xl" />
                <div className="pointer-events-none absolute left-0 top-0 h-1.5 w-full bg-linear-to-r from-blue-accent via-water-blue to-water-pale" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-accent to-water-blue text-white shadow-lg shadow-blue-accent/30">
                    <Target className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-accent">
                      What we do every day
                    </p>
                    <h2 className="mt-1 font-heading text-2xl font-bold text-navy sm:text-[1.65rem] leading-tight">
                      Our Mission
                    </h2>
                  </div>
                </div>
                <p className="relative mt-6 text-[15px] leading-relaxed text-gray-600">
                  To provide a nurturing and intellectually stimulating
                  environment where students develop conceptual understanding,
                  ethical values, and the confidence to succeed in an
                  ever-changing world. We are committed to making quality
                  education accessible while prioritizing the health and
                  happiness of every child.
                </p>
                <ul className="relative mt-8 space-y-3 border-t border-gray-100 pt-8">
                  {missionHighlights.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-sm leading-snug text-navy/90"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-water-blue" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.14}>
              <article className="relative h-full flex flex-col rounded-3xl border border-navy/10 bg-navy p-8 sm:p-10 text-white shadow-[0_24px_70px_-20px_rgba(10,22,40,0.45)] card-hover overflow-hidden">
                <div className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-linear-to-tr from-water-blue/20 to-transparent blur-2xl" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-linear-to-b from-gold-light/50 via-transparent to-transparent" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                    <Eye className="h-7 w-7 text-gold-light" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light/95">
                      Where we&apos;re headed
                    </p>
                    <h2 className="mt-1 font-heading text-2xl font-bold text-white sm:text-[1.65rem] leading-tight">
                      Our Vision
                    </h2>
                  </div>
                </div>
                <p className="relative mt-6 text-[15px] leading-relaxed text-white/80">
                  To be recognized as the leading centre of educational
                  excellence in Islamabad — a school where every graduate is
                  equipped with knowledge, character, and the skills to
                  contribute meaningfully to society. We envision a future
                  where our students lead with integrity and innovation.
                </p>
                <ul className="relative mt-8 space-y-3 border-t border-white/10 pt-8">
                  {visionHighlights.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-sm leading-snug text-white/90"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeUp" delay={0.12} className="mt-8">
            <div className="relative rounded-3xl border border-gray-200/90 bg-white p-8 sm:p-10 shadow-lg shadow-navy/5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-accent">
                    Purpose-built campus
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-navy sm:text-2xl">
                    Education, discipline &amp; character — G-12 Islamabad
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                    A learning environment designed specifically for education,
                    discipline, and character building — spacious classrooms,
                    separate sections where needed, mentorship, and a safe,
                    supportive atmosphere for every learner.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {campusEthos.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-gray-100 bg-linear-to-b from-blue-50/80 to-white px-5 py-4 text-center sm:text-left"
                  >
                    <p className="font-bold text-navy">{item.label}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.08} className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-blue-accent/20 bg-white px-5 py-2.5 text-sm font-semibold text-blue-accent shadow-sm transition-colors hover:border-blue-accent/40 hover:bg-blue-50"
            >
              Read more about us
              <ChevronRight className="h-4 w-4" />
            </Link>
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
