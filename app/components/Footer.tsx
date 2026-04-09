import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Admissions", href: "/admissions" },
  { name: "Programs", href: "/programs" },
  { name: "Facilities", href: "/facilities" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const programs = [
  { name: "Middle School (VI–VIII)", href: "/programs#middle" },
  { name: "Secondary (IX–X)", href: "/programs#secondary" },
  { name: "Higher Secondary (XI–XII)", href: "/programs#higher" },
  { name: "Low Bag System", href: "/low-bag-system" },
];

export default function Footer() {
  return (
    <footer className="gradient-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="Chanab Centre of Excellence"
                width={44}
                height={44}
                className="rounded-lg"
              />
              <div>
                <p className="font-bold text-lg leading-tight">CHANAB</p>
                <p className="text-[10px] text-water-blue tracking-widest uppercase">
                  Centre of Excellence
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Shaping futures through conceptual learning, innovation, and care.
              Your child deserves the best education in Islamabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-water-blue mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-water-blue mb-4 text-sm tracking-wide uppercase">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-water-blue mb-4 text-sm tracking-wide uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-water-blue mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Main Service Road, G-12 Islamabad
                </span>
              </li>
              <li>
                <a
                  href="tel:03335500780"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-water-blue shrink-0" />
                  0333-5500780
                </a>
              </li>
              <li>
                <a
                  href="mailto:ccoe.education@gmail.com"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-water-blue shrink-0" />
                  ccoe.education@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Chanab Centre of Excellence. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-gray-500 text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about"
              className="text-gray-500 text-xs hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
