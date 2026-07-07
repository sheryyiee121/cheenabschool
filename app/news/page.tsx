import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Newspaper,
  PartyPopper,
  Trophy,
  Building2,
  Camera,
  CalendarDays,
  CheckCircle,
} from "lucide-react";

import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "News & Events | CHANAB Centre of Excellence",
  description:
    "Latest news, events, celebrations, and student achievements at CHANAB Centre of Excellence — stay connected with life at CCoE.",
};

const sections = [
  {
    icon: Newspaper,
    title: "Latest News",
    intro: "Stay informed with important updates from CCoE, including:",
    items: [
      "Admissions Announcements",
      "Academic Calendar",
      "Examination Schedules",
      "Parent Notices",
      "Institutional Updates",
      "New Initiatives",
    ],
  },
  {
    icon: PartyPopper,
    title: "Events & Celebrations",
    intro:
      "Our annual calendar includes a variety of educational, cultural, and recreational events that enrich the student experience:",
    items: [
      "Orientation Programme",
      "Independence Day Celebrations",
      "Seerat-un-Nabi (SAW) Programmes",
      "Annual Sports Week",
      "Science & STEM Exhibition",
      "Literary & Debate Competitions",
      "Qur'an Recitation & Naat Competitions",
      "Educational Visits",
      "Annual Prize Distribution Ceremony",
      "Graduation Ceremony",
    ],
  },
  {
    icon: Trophy,
    title: "Student Achievements",
    intro: "We proudly celebrate students who demonstrate excellence in:",
    items: [
      "Academics",
      "Science & Innovation",
      "Mathematics",
      "Information Technology",
      "Sports",
      "Public Speaking",
      "Debating",
      "Creative Arts",
      "Community Service",
    ],
  },
  {
    icon: Building2,
    title: "Institutional Highlights",
    intro: "Keep up with important milestones, including:",
    items: [
      "New Facilities",
      "Faculty Development Programmes",
      "Partnerships & Collaborations",
      "Community Outreach Activities",
      "Institutional Achievements",
      "Special Events",
    ],
  },
  {
    icon: Camera,
    title: "Photo Gallery",
    intro: "A glimpse into life at CCoE through photographs of:",
    items: [
      "Classroom Activities",
      "Science Experiments",
      "Sports Events",
      "Competitions",
      "Cultural Programmes",
      "National Day Celebrations",
      "Educational Visits",
      "Student Leadership Activities",
      "Award Ceremonies",
    ],
  },
  {
    icon: CalendarDays,
    title: "Upcoming Events",
    intro:
      "Stay informed about upcoming activities and important dates, including:",
    items: [
      "Admission Open House",
      "Parent–Teacher Meetings",
      "Examination Schedule",
      "Workshops & Seminars",
      "Student Competitions",
      "National & Religious Observances",
      "Annual Events",
    ],
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Banner */}
      <PageHero
        eyebrow="Stay Connected with Life at CCoE"
        title="News & Events"
        description="Institutional news, academic achievements, student accomplishments, announcements, and memorable moments from campus life."
        imageSrc="/images/class.jpeg"
        imageAlt="Students and faculty at CHANAB Centre of Excellence"
      />

      {/* Intro */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 leading-relaxed text-lg">
            Discover how our students learn, grow, lead, and celebrate
            throughout the academic year.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-white rounded-xl border border-slate-200 p-8 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-water-pale shrink-0">
                    <section.icon className="w-6 h-6 text-sky-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-navy">
                    {section.title}
                  </h2>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {section.intro}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                      <p className="text-slate-600 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            Follow CHANAB Centre of Excellence through our official
            communication channels for the latest news, announcements, and
            event highlights. Together, let&apos;s celebrate learning,
            achievement, and the many milestones that make every academic year
            memorable.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-accent transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-10 text-water-light font-medium italic">
            Every Achievement Begins with Opportunity. Every Success Has a
            Story.
          </p>
        </div>
      </section>
    </>
  );
}
