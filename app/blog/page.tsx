import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import SectionHeading from "@/app/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Chanab Centre of Excellence",
  description:
    "Read our latest articles on education, student health, conceptual learning, and board exam preparation.",
};

const blogs = [
  {
    slug: "heavy-school-bags",
    title: "Why Heavy School Bags Are Harmful for Your Child",
    excerpt:
      "Research shows that carrying bags weighing more than 10% of a child's body weight leads to serious spinal problems. Here's what every parent should know — and what Chanab is doing about it.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Student Health",
    featured: true,
  },
  {
    slug: "best-school-islamabad",
    title: "Best Institution in Islamabad for Conceptual Learning",
    excerpt:
      "What makes an institution truly great? It's not just results — it's how students learn. Discover why conceptual learning at Chanab Centre of Excellence produces better thinkers and higher achievers.",
    date: "February 28, 2026",
    readTime: "6 min read",
    category: "Education",
    featured: true,
  },
  {
    slug: "fbise-vs-other-boards",
    title: "FBISE vs Other Education Boards: A Complete Comparison",
    excerpt:
      "Choosing the right education board is crucial. We break down FBISE, Punjab Board, Cambridge, and AKU-EB — their strengths, recognition, and which is best for your child.",
    date: "February 10, 2026",
    readTime: "8 min read",
    category: "Board Exams",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-water-light mb-6">
            <BookOpen className="w-4 h-4" />
            Our Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Insights & <span className="text-gradient">Articles</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Expert perspectives on education, student health, and academic
            success from the Chanab team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 flex flex-col"
              >
                <div className="h-48 gradient-navy flex items-center justify-center relative">
                  <BookOpen className="w-16 h-16 text-water-blue/30" />
                  {blog.featured && (
                    <span className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="bg-blue-50 text-blue-accent px-2.5 py-1 rounded-full font-medium">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-navy leading-snug">
                    {blog.title}
                  </h2>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1">
                    {blog.excerpt}
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="flex items-center gap-1 text-sm font-semibold text-blue-accent hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
