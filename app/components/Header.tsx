"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

const topLinks = [
  { name: "Fee Structure", href: "/admissions#fees" },
  { name: "Online Admission", href: "/admissions" },
  { name: "Low Bag System", href: "/low-bag-system" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/programs",
    children: [
      { name: "Middle School (VI–VIII)", href: "/programs#middle" },
      { name: "Secondary (IX–X)", href: "/programs#secondary" },
      { name: "Higher Secondary (XI–XII)", href: "/programs#higher" },
    ],
  },
  { name: "Facilities", href: "/facilities" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      {/* ========== TOP BAR ========== */}
      <div className="bg-navy text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          {/* Left — contact info */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:03335500780"
              className="flex items-center gap-1.5 hover:text-water-blue transition-colors"
            >
              <Phone className="w-3 h-3" />
              0333-5500780
            </a>
            <a
              href="mailto:ccoe.education@gmail.com"
              className="flex items-center gap-1.5 hover:text-water-blue transition-colors"
            >
              <Mail className="w-3 h-3" />
              ccoe.education@gmail.com
            </a>
            <span className="flex items-center gap-1.5 text-gray-400">
              <MapPin className="w-3 h-3" />
              G-12 Islamabad
            </span>
          </div>

          {/* Center — quick links */}
          <div className="hidden lg:flex items-center gap-5">
            {topLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-water-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right — admissions button */}
          <div className="flex items-center gap-4 ml-auto md:ml-0">
            <span className="md:hidden flex items-center gap-1.5 text-water-light">
              <Phone className="w-3 h-3" />
              0333-5500780
            </span>
            <Link
              href="/admissions"
              className="bg-water-blue text-navy font-bold px-4 py-1 rounded text-xs hover:bg-water-light transition-colors tracking-wide uppercase"
            >
              Admissions
            </Link>
          </div>
        </div>
      </div>

      {/* ========== MAIN NAV BAR ========== */}
      <nav className="bg-white shadow-sm border-b-[3px] border-water-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="Chanab Centre of Excellence"
                width={52}
                height={52}
                className="rounded-lg"
              />
              <div className="hidden sm:block">
                <p className="font-bold text-navy text-[15px] leading-tight tracking-tight">
                  CHANAB
                </p>
                <p className="text-[9px] text-blue-accent font-semibold tracking-[0.2em] uppercase">
                  Centre of Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.name)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-[13px] font-semibold text-gray-700 hover:text-blue-accent transition-colors uppercase tracking-wide"
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-60 bg-white rounded-b-xl shadow-xl border border-gray-100 py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-gray-600 hover:text-blue-accent hover:bg-blue-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-navy" />
              ) : (
                <Menu className="w-6 h-6 text-navy" />
              )}
            </button>
          </div>
        </div>

        {/* ========== MOBILE MENU ========== */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-accent hover:bg-blue-50 rounded-lg transition-colors uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-9 pr-4 py-2 text-sm text-gray-500 hover:text-blue-accent hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100">
                {topLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-500 hover:text-blue-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
