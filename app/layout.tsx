import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import SmoothScroll from "@/app/components/SmoothScroll";
import { LOGO_SRC } from "@/app/logo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ccoe.edu.pk"),
  title: "Chanab Centre of Excellence | Best Institution in Islamabad",
  description:
    "Chanab Centre of Excellence — Premier institution in G-12 Islamabad offering conceptual learning, low bag weight system, and excellence in academics for grades 6–12.",
  keywords: [
    "best institution in Islamabad",
    "Chanab Centre of Excellence",
    "institution G-12 Islamabad",
    "conceptual learning",
    "FBISE school",
    "low bag weight",
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: LOGO_SRC, type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: LOGO_SRC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
