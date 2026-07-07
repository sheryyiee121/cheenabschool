import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Globe,
} from "lucide-react";

import EnquiryForm from "@/app/components/EnquiryForm";
import PageHero from "@/app/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | CHANAB Centre of Excellence",
  description:
    "Contact CHANAB Centre of Excellence — Main Service Road, G-12, Islamabad. Phone 051-2154510, WhatsApp +92-333-5500780. Schedule a campus visit today.",
};

const visitReasons = [
  "Tour our classrooms and laboratories",
  "Meet our experienced teachers",
  "Explore our academic programmes",
  "Learn about our teaching methodology",
  "Discuss your child's educational goals",
  "Experience our safe, disciplined, and caring environment",
];

const whyVisit = [
  "A welcoming and caring environment",
  "Highly qualified and dedicated teachers",
  "Modern classrooms and laboratories",
  "Strong academic programmes",
  "Separate classes for boys and girls",
  "Islamic Tarbiyah and character development",
  "Safe and disciplined campus",
  "Individual attention for every student",
  "A commitment to excellence in everything we do",
];

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Main Service Road", "G-12, Islamabad"],
    href: undefined,
  },
  {
    icon: Phone,
    title: "Telephone",
    lines: ["051-2154510"],
    href: "tel:0512154510",
  },
  {
    icon: MessageCircle,
    title: "Mobile / WhatsApp",
    lines: ["+92-333-5500780"],
    href: "https://wa.me/923335500780",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["ccoe.education@gmail.com"],
    href: "mailto:ccoe.education@gmail.com",
  },
  {
    icon: Globe,
    title: "Website",
    lines: ["www.ccoe.edu.pk"],
    href: "https://www.ccoe.edu.pk",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Monday to Friday", "8:00 AM – 3:00 PM"],
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <PageHero
        eyebrow="Your Child's Future Begins Here"
        title="Contact Us"
        description="We'd love to welcome you to CHANAB Centre of Excellence."
        imageSrc="/images/class.jpeg"
        imageAlt="Students and faculty at CHANAB Centre of Excellence"
      />

      {/* Contact cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Get in Touch
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Whether you would like to learn more about our academic
              programmes, visit our campus, or discuss your child&apos;s
              educational needs, our team will be delighted to assist you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactDetails.map((item) => {
              const content = (
                <>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-water-pale mb-4">
                    <item.icon className="w-6 h-6 text-sky-primary" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-slate-600 text-sm">
                      {line}
                    </p>
                  ))}
                </>
              );
              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block bg-white rounded-xl border border-slate-200 p-7 card-hover"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-slate-200 p-7"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visit campus */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Visit Our Campus
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                There is no better way to understand our vision than by seeing
                it in action. During your visit, you can:
              </p>
              <ul className="space-y-3">
                {visitReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-700">{reason}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-navy mb-3">
                Why Visit CCoE?
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Every school has classrooms. Every school has books. What makes
                a school truly exceptional is its people, its values, and its
                vision. When you visit, you will experience:
              </p>
              <ul className="space-y-2.5">
                {whyVisit.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form + map */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
                Send Us an Enquiry
              </h2>
              <p className="text-slate-500 mb-8">
                Have a question? We&apos;d be delighted to hear from you.
              </p>
              <EnquiryForm />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
                Find Us
              </h2>
              <p className="text-slate-500 mb-8">
                Main Service Road, G-12, Islamabad. Campus visits are available
                by appointment.
              </p>
              <div className="w-full aspect-[4/3] border border-slate-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Main+Service+Road+G-12+Islamabad&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CHANAB Centre of Excellence location — G-12, Islamabad"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay connected */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Stay Connected
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Follow CHANAB Centre of Excellence on our official social media
            platforms for admissions updates, student achievements, events, and
            institutional news.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { initial: "f", label: "Facebook", href: "#" },
              { initial: "ig", label: "Instagram", href: "#" },
              { initial: "yt", label: "YouTube", href: "#" },
              { initial: "in", label: "LinkedIn", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="inline-flex items-center justify-center w-12 h-12 bg-navy text-white hover:bg-sky-primary transition-colors text-xs font-bold uppercase"
              >
                {social.initial}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Begin?
          </h2>
          <p className="text-white/75 leading-relaxed mb-2 max-w-2xl mx-auto">
            We welcome applications for Middle School (VI–VIII), Secondary
            School (IX–X), and Higher Secondary School (XI–XII).
          </p>
          <p className="text-water-blue font-medium mb-10">
            Seats are limited — we encourage parents to apply early.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://wa.me/923335500780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-accent transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Message Us on WhatsApp
            </a>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3 hover:bg-white hover:text-navy transition-colors"
            >
              View Admissions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-water-light font-medium italic">
            Building Minds • Shaping Character • Inspiring Faith
          </p>
        </div>
      </section>
    </>
  );
}
