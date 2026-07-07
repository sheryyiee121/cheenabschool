import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  FlaskConical,
  Monitor,
  BookOpen,
  Backpack,
  Languages,
  ClipboardCheck,
  UserCheck,
  Lightbulb,
  Wrench,
  Brain,
  Cpu,
  LineChart,
  TabletSmartphone,
} from "lucide-react";

import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Academics | CHANAB Centre of Excellence",
  description:
    "Academic programmes at CHANAB Centre of Excellence — Middle School (VI–VIII), Matriculation (IX–X), and Intermediate (XI–XII) with an FBISE-aligned, concept-based curriculum.",
};

const programmes = [
  {
    id: "middle",
    title: "Middle School",
    range: "Grades VI – VIII (Pre-9th)",
    groups: [],
    description:
      "A strong academic foundation that develops subject knowledge, study skills, critical thinking, and confidence while preparing students for higher learning.",
  },
  {
    id: "secondary",
    title: "Matriculation",
    range: "Grades IX – X",
    groups: ["Science", "Arts"],
    description:
      "Students receive comprehensive preparation for the Federal Board of Intermediate & Secondary Education (FBISE) examinations while strengthening analytical and problem-solving skills.",
  },
  {
    id: "higher",
    title: "Intermediate",
    range: "Grades XI – XII",
    groups: ["Pre-Medical", "Pre-Engineering", "ICS", "I.Com", "Humanities"],
    description:
      "Our Higher Secondary programmes prepare students for university education and professional careers through academic excellence and practical understanding.",
  },
];

const conceptPoints = [
  "Understand concepts",
  "Ask questions",
  "Solve problems",
  "Think logically",
  "Learn independently",
  "Apply knowledge in everyday life",
];

const teachingMethods = [
  "Interactive classroom discussions",
  "Activity-based learning",
  "Project-based learning",
  "Practical demonstrations",
  "Collaborative learning",
  "Educational technology",
  "Research and presentations",
];

const approachCards = [
  { icon: Lightbulb, title: "Concept-Based Learning" },
  { icon: Wrench, title: "Practical Learning" },
  { icon: Brain, title: "Critical Thinking" },
  { icon: Cpu, title: "STEM & AI" },
  { icon: LineChart, title: "Continuous Assessment" },
  { icon: TabletSmartphone, title: "Digital Learning" },
];

const stemAreas = [
  {
    title: "Science",
    detail: "Learning by observation, experimentation, and discovery.",
  },
  {
    title: "Technology",
    detail: "Developing digital literacy and responsible use of technology.",
  },
  {
    title: "Engineering Thinking",
    detail: "Encouraging creativity, design, and practical problem-solving.",
  },
  {
    title: "Mathematics",
    detail:
      "Strengthening logical reasoning, analytical thinking, and confidence.",
  },
];

const futureSkills = [
  "Science exploration",
  "Technology integration",
  "Artificial Intelligence awareness",
  "Robotics exposure",
  "Coding fundamentals",
  "Research and innovation projects",
];

const assessments = [
  "Classroom participation",
  "Assignments and projects",
  "Quizzes and periodic assessments",
  "Term examinations",
  "Pre-board examinations",
];

const labs = [
  "Physics Laboratory",
  "Chemistry Laboratory",
  "Biology Laboratory",
  "Computer Laboratory",
  "Modern IT Lab",
  "Library & Reading Resources",
];

const beyondClassroom = [
  "Science Projects",
  "Mathematics Competitions",
  "Debating",
  "Quiz Competitions",
  "IT Activities",
  "Educational Visits",
  "Leadership Programmes",
  "Research Projects",
];

const academicPromise = [
  "High academic standards",
  "Qualified and experienced teachers",
  "Concept-based learning",
  "Continuous academic support",
  "Modern teaching methods",
  "Practical learning experiences",
  "Future-ready education",
  "Preparation for university and beyond",
];

export default function AcademicsPage() {
  return (
    <>
      {/* Banner */}
      <PageHero
        eyebrow="Academic Excellence"
        title="Academics"
        description="Inspiring Young Minds to Learn, Think and Excel"
        imageSrc="/images/class.jpeg"
        imageAlt="Students and faculty at CHANAB Centre of Excellence"
      />

      {/* Intro */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 leading-relaxed text-lg">
            Education is not about memorising facts — it is about understanding
            concepts, developing curiosity, and preparing students for lifelong
            success. Our academic programmes are designed to help every student
            achieve excellence while developing critical thinking, creativity,
            confidence, and strong moral values.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Our Academic Programmes
            </h2>
            <p className="text-slate-500">
              Quality education from Grade VI to Grade XII.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.map((prog) => (
              <div
                key={prog.id}
                id={prog.id}
                className="bg-white rounded-xl border border-slate-200 p-8 card-hover flex flex-col"
              >
                <p className="text-sky-primary font-semibold text-sm tracking-wide uppercase mb-2">
                  {prog.range}
                </p>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {prog.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {prog.description}
                </p>
                {prog.groups.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2">
                    {prog.groups.map((group) => (
                      <span
                        key={group}
                        className="bg-water-pale text-blue-accent text-xs font-semibold rounded-full px-3 py-1"
                      >
                        {group}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-8 max-w-2xl mx-auto">
            CHANAB Centre of Excellence follows the curriculum prescribed by the
            Federal Board of Intermediate and Secondary Education (FBISE),
            Islamabad. For Middle School, we combine the National Curriculum
            with internationally recognised learning resources.
          </p>
        </div>
      </section>

      {/* Concept-based learning */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Concept-Based Learning
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                At CCoE, we replace{" "}
                <em className="text-navy font-semibold">
                  &ldquo;Ratta&rdquo; with Understanding
                </em>
                . Instead of asking students to memorise answers, we encourage
                them to:
              </p>
              <div className="space-y-3">
                {conceptPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-navy mb-4">
                Modern Teaching Methodology
              </h3>
              <p className="text-slate-500 text-sm mb-5">
                Our classrooms are interactive, engaging, and student-centred.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {teachingMethods.map((method) => (
                  <div key={method} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-primary mt-2 shrink-0" />
                    <p className="text-slate-600 text-sm">{method}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our academic approach */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {approachCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl border border-slate-200 p-5 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-water-pale mb-3">
                  <card.icon className="w-5 h-5 text-sky-primary" />
                </div>
                <p className="text-navy text-sm font-semibold leading-snug">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEM */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              STEM &amp; Future Learning
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              The future belongs to students who can think, innovate, and solve
              problems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stemAreas.map((area) => (
              <div
                key={area.title}
                className="bg-water-pale/60 rounded-xl p-7 text-center card-hover"
              >
                <h3 className="text-lg font-bold text-navy mb-2">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {futureSkills.map((skill) => (
              <span
                key={skill}
                className="bg-navy text-white text-sm font-medium rounded-full px-5 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education Without Burden */}
      <section className="py-16 sm:py-20 gradient-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-primary/20 mb-6">
            <Backpack className="w-8 h-8 text-water-blue" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Education Without Burden
          </h2>
          <p className="text-white/75 leading-relaxed mb-4 max-w-2xl mx-auto">
            Every classroom at CCoE is equipped with a Classroom Learning
            Library, where all prescribed textbooks are readily available during
            lessons. Students bring only their required notebooks, a lunch box,
            and a water bottle.
          </p>
          <p className="text-water-light font-medium italic mb-8">
            &ldquo;Light Bags. Happy Learners. Brighter Futures.&rdquo;
          </p>
          <Link
            href="/low-bag-system"
            className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-6 py-3 hover:bg-blue-accent transition-colors"
          >
            Learn More About This Initiative
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Language + Assessment + Support */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <Languages className="w-8 h-8 text-sky-primary mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">
                Language Development
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Students develop confidence in English and Urdu — reading,
                writing, public speaking, presentation skills, and creative
                expression — to become effective communicators and confident
                speakers.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <ClipboardCheck className="w-8 h-8 text-sky-primary mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">
                Assessment &amp; Continuous Progress
              </h3>
              <ul className="space-y-2">
                {assessments.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <UserCheck className="w-8 h-8 text-sky-primary mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">
                Individual Student Support
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Every child learns differently. Our teachers provide individual
                academic guidance, extra support for struggling students,
                encouragement for high achievers, personal mentoring, and career
                guidance.
              </p>
              <p className="text-navy font-semibold text-sm">
                No student is left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Labs + Beyond classroom */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-5">
                <FlaskConical className="w-7 h-7 text-sky-primary" />
                <h3 className="text-xl font-bold text-navy">
                  Laboratories &amp; Learning Resources
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {labs.map((lab) => (
                  <div key={lab} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm">{lab}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-5">
                <Monitor className="w-7 h-7 text-sky-primary" />
                <h3 className="text-xl font-bold text-navy">
                  Beyond the Classroom
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {beyondClassroom.map((activity) => (
                  <div key={activity} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic promise */}
      <section className="py-16 sm:py-20 gradient-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-10 h-10 text-water-blue mx-auto mb-5" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our Academic Promise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-left max-w-2xl mx-auto mb-10">
            {academicPromise.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-water-blue mt-0.5 shrink-0" />
                <p className="text-white/85">{item}</p>
              </div>
            ))}
          </div>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-accent transition-colors"
          >
            Excellence Begins Here — Apply Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
