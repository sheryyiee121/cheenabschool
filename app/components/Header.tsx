"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Phone, Mail, MapPin } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About CCoE", href: "/about" },
  { name: "Founder's Message", href: "/founder-message" },
  { name: "Why Choose CCoE", href: "/why-ccoe" },
  { name: "Academics", href: "/academics" },
  { name: "Student Life & Tarbiyah", href: "/student-life" },
  { name: "Campus & Facilities", href: "/facilities" },
  { name: "Admissions", href: "/admissions" },
  { name: "News & Events", href: "/news" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lock page scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the drawer on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Utility bar */}
      <div className="bg-navy text-white text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <p className="tracking-wide">
            <span className="text-water-blue font-semibold">
              Admissions Open
            </span>{" "}
            <span className="hidden sm:inline text-white/80">
              | Session 2026–2027 | Grades VI–XII (FBISE)
            </span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:0512154510"
              className="hidden md:flex items-center gap-1.5 text-white/80 hover:text-water-blue transition-colors"
            >
              <Phone className="w-3 h-3" />
              051-2154510
            </a>
            <Link
              href="/admissions"
              className="font-semibold hover:text-water-blue transition-colors"
            >
              Apply
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/contact"
              className="font-semibold hover:text-water-blue transition-colors"
            >
              Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Logo bar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="CHANAB Centre of Excellence"
                width={52}
                height={52}
                className="rounded-md size-11 sm:size-12"
              />
              <div>
                <p className="font-bold text-navy text-base sm:text-lg leading-tight tracking-tight">
                  CHANAB Centre of Excellence
                </p>
                <p className="hidden sm:block text-[10px] text-blue-accent font-medium tracking-[0.14em] uppercase leading-tight">
                  Where Knowledge, Character &amp; Faith Unite
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-3 sm:gap-5">
              <Link
                href="/admissions"
                className="hidden sm:inline-flex bg-sky-primary text-white font-semibold text-sm px-5 py-2.5 hover:bg-blue-accent transition-colors"
              >
                Apply Now
              </Link>

              {/* Hamburger (all screen sizes) */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="group flex flex-col items-start justify-center gap-[5px] bg-navy hover:bg-sky-primary transition-colors p-3.5"
              >
                <span className="block h-[2px] w-6 bg-white transition-all group-hover:w-4" />
                <span className="block h-[2px] w-4 bg-white transition-all group-hover:w-6" />
                <span className="block h-[2px] w-5 bg-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Nav strip (desktop) */}
      <nav className="hidden lg:block bg-navy-light border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2.5 py-3 text-[12px] font-medium tracking-wide transition-colors border-b-2 ${
                    active
                      ? "text-water-blue border-water-blue"
                      : "text-white/90 border-transparent hover:text-water-blue hover:border-water-blue/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-navy/60 backdrop-blur-[2px] transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer (phone + desktop) */}
      <aside
        className={`fixed top-0 right-0 h-dvh w-full sm:w-[420px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo.jpeg"
              alt="CHANAB Centre of Excellence"
              width={40}
              height={40}
              className="rounded-md size-10"
            />
            <p className="font-bold text-navy text-sm leading-tight">
              CHANAB
              <span className="block text-[9px] text-blue-accent font-medium tracking-[0.14em] uppercase">
                Centre of Excellence
              </span>
            </p>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 text-navy hover:text-sky-primary transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-2">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between py-4 border-b border-slate-100 font-semibold transition-colors ${
                  active
                    ? "text-sky-primary"
                    : "text-navy hover:text-sky-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/admissions"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-sky-primary text-white font-semibold px-5 py-3.5 mt-6 mb-4 hover:bg-blue-accent transition-colors"
          >
            Apply Now — Session 2026–2027
          </Link>
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-5 border-t border-slate-100 bg-slate-50 space-y-2.5">
          <a
            href="tel:0512154510"
            className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-sky-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-sky-primary" />
            051-2154510
          </a>
          <a
            href="mailto:ccoe.education@gmail.com"
            className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-sky-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-sky-primary" />
            ccoe.education@gmail.com
          </a>
          <p className="flex items-center gap-2.5 text-sm text-slate-600">
            <MapPin className="w-4 h-4 text-sky-primary" />
            Main Service Road, G-12, Islamabad
          </p>
        </div>
      </aside>
    </header>
  );
}
