import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Landmark,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Backpack,
} from "lucide-react";

import HeroBgSlider from "@/app/components/HeroBgSlider";

const pillars = [
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "Developing curiosity, understanding, and academic excellence.",
  },
  {
    icon: Heart,
    title: "Character",
    description: "Building honesty, responsibility, discipline, and respect.",
  },
  {
    icon: Landmark,
    title: "Faith",
    description: "Strengthening Islamic values and good moral character.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Helping students become confident, responsible, and future-ready leaders.",
  },
];

const programmes = [
  {
    title: "Middle School",
    range: "Grades VI – VIII (Pre-9th)",
    detail: "A strong academic foundation through concept-based learning.",
  },
  {
    title: "Matriculation",
    range: "Grades IX – X",
    detail: "Science and Arts groups with comprehensive FBISE preparation.",
  },
  {
    title: "Intermediate",
    range: "Grades XI – XII",
    detail: "Pre-Medical, Pre-Engineering, ICS, I.Com, and Humanities.",
  },
];

const atAGlance = [
  "34+ Years of Educational Leadership",
  "Grades VI–XII",
  "FBISE Curriculum",
  "Education Without Burden",
  "Separate Classes for Boys & Girls",
  "Purpose-Built Campus",
  "Concept-Based Learning",
  "STEM & AI Integration",
  "Safe & Disciplined Environment",
];

type WhyGalleryTile =
  | {
      type: "image";
      title: string;
      description: string;
      image: string;
      alt: string;
      className: string;
    }
  | {
      type: "stat";
      title: string;
      description: string;
      className: string;
    };

const whyGallery: WhyGalleryTile[] = [
  {
    type: "image",
    title: "A Caring School Community",
    description: "Students learn with confidence in a respectful environment.",
    image: "/images/class.jpeg",
    alt: "Students and faculty at CHANAB Centre of Excellence",
    className: "lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-[520px]",
  },
  {
    type: "image",
    title: "Visionary Educational Leadership",
    description: "Guided by 34+ years of educational experience.",
    image: "/images/president.jpeg",
    alt: "Prof. Muhammad Aftab Tariq in his office",
    className: "min-h-[250px]",
  },
  {
    type: "stat",
    title: "34+",
    description: "Years of Educational Leadership",
    className: "min-h-[250px]",
  },
  {
    type: "stat",
    title: "VI-XII",
    description: "Middle, Matric & Intermediate",
    className: "min-h-[250px]",
  },
  {
    type: "image",
    title: "Future-Ready Learning",
    description: "STEM, AI awareness, digital literacy, and confidence.",
    image: "/images/bright-future.jpeg",
    alt: "Students preparing for a bright future",
    className: "min-h-[250px]",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        <HeroBgSlider />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/20" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl text-white">
            <p className="text-water-blue font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              Admissions Open | Session 2026–2027
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Where Knowledge, Character &amp; Faith Unite
            </h1>
            <p className="text-white/70 text-sm sm:text-base mb-8">
              Grades VI–XII | FBISE Curriculum
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-accent transition-colors"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/70 text-white font-semibold px-7 py-3 hover:bg-white hover:text-navy transition-colors"
              >
                Book a Campus Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHAIRMAN'S MESSAGE ===== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Portrait */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5]">
              <Image
                src="/images/president.jpeg"
                alt="Prof. Muhammad Aftab Tariq, Founder & Chairman"
                fill
                className="object-cover object-[65%_center]"
                sizes="(max-width: 1024px) 100vw, 448px"
              />
            </div>
            {/* Message */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                A Message from the Founder &amp; Chairman
              </h2>
              <span className="block w-10 h-1 bg-sky-primary mt-4 mb-6" />
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong className="text-navy">
                  Prof. Muhammad Aftab Tariq
                </strong>{" "}
                founded CHANAB Centre of Excellence after more than 34 years of
                distinguished service in teaching and educational leadership in
                Islamabad. He served as a Mathematics Lecturer, Associate
                Professor, Principal, Area Education Officer, and Director
                (Colleges), played a pivotal role in establishing six Model
                Colleges, and founded two Centres of Excellence in Islamabad
                Model Colleges — one for girls and one for boys. Inspired by a
                lifelong commitment to education, he established CHANAB Centre
                of Excellence to provide an institution where knowledge,
                character, and faith unite, preparing students for academic
                excellence and responsible leadership.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6 italic">
                &ldquo;Mathematics is the language of logic. If you can teach a
                child to think logically, you have equipped them to solve any
                problem life throws at them.&rdquo;
              </p>
              <Link
                href="/founder-message"
                className="inline-flex items-center bg-navy text-white font-semibold text-sm px-7 py-3.5 hover:bg-sky-primary transition-colors"
              >
                Learn More About Our Founder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WELCOME ===== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Welcome to CCoE
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-4">
            At CHANAB Centre of Excellence, we believe education should inspire
            young minds, build strong character, and prepare students for a
            successful future. Our approach combines academic excellence with
            Islamic values, innovation, and individual care to help every child
            reach their full potential.
          </p>
          <p className="text-navy font-semibold text-lg">
            We don&apos;t just prepare students for examinations — we prepare
            them for life.
          </p>
        </div>
      </section>

      {/* ===== EDUCATION WITHOUT BURDEN ===== */}
      <section className="py-16 sm:py-20 bg-water-pale/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6">
            <Backpack className="w-8 h-8 text-sky-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Education Without Burden
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4 max-w-2xl mx-auto">
            As part of our commitment to student well-being, CCoE has introduced
            Education Without Burden through its Classroom Learning Library.
            Prescribed textbooks remain in every classroom, enabling students to
            carry only the notebooks required according to the homework
            schedule, along with their student diary, lunch box, and water
            bottle.
          </p>
          <p className="text-sky-primary font-semibold text-lg mb-8">
            Lighter bags. Better health. Greater focus on learning.
          </p>
          <Link
            href="/low-bag-system"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold text-sm px-7 py-3.5 hover:bg-sky-primary transition-colors"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== FOUR PILLARS ===== */}
      <section className="gradient-navy py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Our Four Pillars
            </h2>
            <p className="text-white/70">
              Everything we do is built upon four important values.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white/5 border border-white/10 rounded-xl p-7 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-primary/20 mb-5">
                  <pillar.icon className="w-7 h-7 text-water-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY PARENTS CHOOSE CCoE ===== */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Why Parents Choose CCoE
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We provide an education that helps children grow academically,
              morally, and personally.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr gap-0 overflow-hidden bg-navy shadow-2xl">
            {whyGallery.map((tile) =>
              tile.type === "image" ? (
                <div
                  key={tile.title}
                  className={`group relative overflow-hidden ${tile.className}`}
                >
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent transition-colors duration-500 group-hover:from-navy/75" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-2">{tile.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                      {tile.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={tile.title}
                  className={`flex flex-col items-center justify-center bg-navy-light p-8 text-center text-white transition-colors duration-500 hover:bg-navy ${tile.className}`}
                >
                  <p className="text-5xl sm:text-6xl font-extrabold text-sky-primary leading-none mb-4">
                    {tile.title}
                  </p>
                  <p className="text-white/85 text-sm font-semibold tracking-wide">
                    {tile.description}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/why-ccoe"
              className="inline-flex items-center gap-2 text-sky-primary font-semibold hover:text-blue-accent transition-colors"
            >
              Discover the CCoE Difference
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ACADEMIC PROGRAMMES ===== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Academic Programmes
            </h2>
            <p className="text-slate-500">
              FBISE curriculum supported by concept-based teaching, practical
              learning, and continuous assessment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.map((prog) => (
              <Link
                key={prog.title}
                href="/academics"
                className="group rounded-xl border border-slate-200 p-8 card-hover bg-white"
              >
                <p className="text-sky-primary font-semibold text-sm tracking-wide uppercase mb-2">
                  {prog.range}
                </p>
                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-sky-primary transition-colors">
                  {prog.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {prog.detail}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sky-primary text-sm font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CCoE AT A GLANCE ===== */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              CCoE at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {atAGlance.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sky-primary mt-0.5 shrink-0" />
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADMISSIONS CTA ===== */}
      <section className="gradient-navy py-16 sm:py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Begin Your Child&apos;s Journey
          </h2>
          <p className="text-white/75 leading-relaxed mb-2">
            Choosing the right school is one of the most important decisions a
            parent can make. We invite you to visit our campus, meet our
            dedicated faculty, and experience the CCoE difference.
          </p>
          <p className="text-water-blue font-medium mb-8">
            Admissions Open | Session 2026–2027
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
              Visit Our Campus
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-water-blue" />
              Main Service Road, G-12, Islamabad
            </span>
            <a
              href="tel:0512154510"
              className="inline-flex items-center gap-2 hover:text-water-blue transition-colors"
            >
              <Phone className="w-4 h-4 text-water-blue" />
              051-2154510
            </a>
            <a
              href="mailto:ccoe.education@gmail.com"
              className="inline-flex items-center gap-2 hover:text-water-blue transition-colors"
            >
              <Mail className="w-4 h-4 text-water-blue" />
              ccoe.education@gmail.com
            </a>
          </div>
          <p className="mt-10 text-water-light font-medium italic">
            We Don&apos;t Just Teach — We Inspire.
          </p>
        </div>
      </section>
    </>
  );
}
