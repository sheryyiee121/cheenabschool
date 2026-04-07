import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Chanab Centre of Excellence",
  description:
    "Get in touch with Chanab Centre of Excellence. Visit us at G-12 Islamabad, call us, or send a WhatsApp message.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "0333-5500780",
    href: "tel:03335500780",
    description: "Call us during office hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "0333-5500780",
    href: "https://wa.me/923335500780?text=Hello%2C%20I%20want%20to%20inquire%20about%20Chanab%20Centre%20of%20Excellence.",
    description: "Quick response guaranteed",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@chanabschool.edu.pk",
    href: "mailto:info@chanabschool.edu.pk",
    description: "We reply within 24 hours",
  },
  {
    icon: Mail,
    title: "Gmail",
    value: "ccoe.education@gmail.com",
    href: "mailto:ccoe.education@gmail.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Main Service Road, G-12 Islamabad",
    href: "https://maps.google.com/?q=G-12+Islamabad",
    description: "Visit our campus",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-water-light mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about admissions, programs, or facilities? We&apos;d
            love to hear from you. Reach out through any channel below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {contactInfo.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target={c.title === "WhatsApp" || c.title === "Location" ? "_blank" : undefined}
                rel={c.title === "WhatsApp" || c.title === "Location" ? "noopener noreferrer" : undefined}
                className="bg-white rounded-2xl p-7 card-hover border border-gray-100 text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-accent group-hover:text-white transition-colors">
                  <c.icon className="w-6 h-6 text-blue-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-navy">{c.title}</h3>
                <p className="text-blue-accent font-medium text-sm mt-1">
                  {c.value}
                </p>
                <p className="text-xs text-gray-400 mt-2">{c.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="03XX-XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 outline-none transition-all text-sm text-gray-600">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Fee Structure</option>
                    <option>Campus Visit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 outline-none transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-accent text-white font-bold px-6 py-3.5 rounded-xl hover:bg-blue-primary transition-all shadow-lg shadow-blue-accent/25"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map + Office Hours */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8!2d72.98!3d33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzAwLjAiTiA3MsKwNTgnNDguMCJF!5e0!3m2!1sen!2spk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chanab Centre of Excellence Location"
                />
              </div>
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-accent" />
                  <h3 className="text-lg font-bold text-navy">Office Hours</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday – Friday</span>
                    <span className="font-medium text-navy">
                      8:00 AM – 3:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-navy">
                      9:00 AM – 1:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
