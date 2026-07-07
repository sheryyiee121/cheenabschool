import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import SmoothScroll from "@/app/components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Chanab Centre of Excellence | Best School in Islamabad",
  description:
    "Chanab Centre of Excellence — Premier school in G-12 Islamabad offering conceptual learning, low bag weight system, and excellence in academics for grades 6–12.",
  keywords: [
    "best school in Islamabad",
    "Chanab Centre of Excellence",
    "school G-12 Islamabad",
    "conceptual learning",
    "FBISE school",
    "low bag weight",
  ],
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
