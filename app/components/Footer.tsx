import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "About CCoE", href: "/about" },
  { name: "Founder's Message", href: "/founder-message" },
  { name: "Why Choose CCoE", href: "/why-ccoe" },
];

const learnLinks = [
  { name: "Academics", href: "/academics" },
  { name: "Student Life & Tarbiyah", href: "/student-life" },
  { name: "Campus & Facilities", href: "/facilities" },
  { name: "Admissions", href: "/admissions" },
  { name: "Education Without Burden", href: "/low-bag-system" },
  { name: "News & Events", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-navy border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="CHANAB Centre of Excellence"
                width={56}
                height={56}
                className="rounded-lg size-14"
              />
              <div>
                <p className="font-bold text-lg leading-tight text-navy">
                  CHANAB
                </p>
                <p className="text-[10px] text-sky-primary tracking-widest uppercase">
                  Centre of Excellence
                </p>
              </div>
            </div>
            <p className="text-navy/80 text-sm leading-relaxed mb-3 font-semibold">
              Where Knowledge, Character &amp; Faith Unite.
            </p>
            <p className="text-sky-primary text-sm italic font-medium">
              We Don&apos;t Just Teach — We Inspire.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-sky-primary mb-4 text-sm tracking-wide uppercase">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-accent text-sm font-semibold hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning */}
          <div>
            <h3 className="font-semibold text-sky-primary mb-4 text-sm tracking-wide uppercase">
              Learning
            </h3>
            <ul className="space-y-2.5">
              {learnLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-accent text-sm font-semibold hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sky-primary mb-4 text-sm tracking-wide uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                <span className="text-navy/80 text-sm font-bold">
                  Main Service Road, G-12, Islamabad
                </span>
              </li>
              <li>
                <a
                  href="tel:0512154510"
                  className="flex items-center gap-3 text-blue-accent text-sm font-bold hover:text-navy transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-primary shrink-0" />
                  051-2154510
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923335500780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-accent text-sm font-bold hover:text-navy transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-primary shrink-0" />
                  +92-333-5500780 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="mailto:ccoe.education@gmail.com"
                  className="flex items-center gap-3 text-blue-accent text-sm font-bold hover:text-navy transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-primary shrink-0" />
                  ccoe.education@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-primary mt-0.5 shrink-0" />
                <span className="text-navy/80 text-sm font-bold">
                  Mon–Fri: 8:00 AM – 3:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy/70 text-xs font-semibold">
            &copy; {new Date().getFullYear()} CHANAB Centre of Excellence. All
            rights reserved.
          </p>
          <p className="text-blue-accent text-xs font-medium">
            Building Minds • Shaping Character • Inspiring Faith
          </p>
        </div>
      </div>
    </footer>
  );
}
