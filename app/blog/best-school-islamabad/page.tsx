import Link from "next/link";
import { Calendar, Clock, ArrowLeft, CheckCircle, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best School in Islamabad for Conceptual Learning | Chanab Centre of Excellence",
  description:
    "What makes a school the best in Islamabad? Conceptual learning, student health, and proven results. Discover Chanab Centre of Excellence.",
};

export default function BestSchoolArticle() {
  return (
    <article className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-blue-accent hover:text-blue-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
          <span className="bg-blue-50 text-blue-accent px-2.5 py-1 rounded-full font-medium">
            Education
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            February 28, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />6 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
          Best School in Islamabad for Conceptual Learning
        </h1>

        <div className="mt-10 prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed text-lg">
            Islamabad has no shortage of schools. From large chains to small
            academies, parents face an overwhelming choice. But the question
            isn&apos;t just &quot;which school has the best results?&quot; — it&apos;s
            &quot;which school produces the best <em>thinkers</em>?&quot;
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
            The Problem with Rote Learning
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Most Pakistani schools still rely heavily on rote memorization. Students
            memorize textbooks word-for-word, reproduce them in exams, and forget
            everything within weeks. This approach creates:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Students who can recite but cannot apply knowledge</li>
            <li>• High stress and anxiety before exams</li>
            <li>• Poor performance in university entry tests (ECAT, MDCAT, NTS)</li>
            <li>• Lack of critical thinking and creativity</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
            What is Conceptual Learning?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Conceptual learning is teaching students to <strong>understand</strong>{" "}
            rather than memorize. When a student learns <em>why</em> Newton&apos;s
            second law works rather than just memorizing F=ma, they can apply it to
            any problem — not just textbook questions.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
            How Chanab Centre of Excellence Does It Differently
          </h2>
          <div className="space-y-4 mt-4">
            {[
              {
                title: "Visual & Practical Teaching",
                desc: "Experiments, diagrams, and real-world examples make abstract concepts tangible. Students see science happen, not just read about it.",
              },
              {
                title: "Discussion-Based Classrooms",
                desc: "Our teachers encourage questions and debate. When a student asks 'why?', we celebrate it — not silence it.",
              },
              {
                title: "Application-Focused Assessments",
                desc: "Our tests don't just check memory. They test whether students can apply concepts to new scenarios and problems.",
              },
              {
                title: "Small Class Sizes",
                desc: "With 25 students per class, every child gets personal attention. No student is left behind or overlooked.",
              },
              {
                title: "Board + Beyond",
                desc: "We prepare students for FBISE board exams AND for real-world success. Our graduates are ready for university from day one.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 text-gray-600">
                <CheckCircle className="w-5 h-5 text-water-blue mt-0.5 shrink-0" />
                <div>
                  <strong className="text-navy">{item.title}:</strong>{" "}
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
            What Parents Are Saying
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 italic">
              &ldquo;My son was struggling in a rote-learning school. After
              transferring to Chanab, his understanding of science and math
              improved dramatically. He now enjoys studying instead of dreading
              it.&rdquo;
            </p>
            <p className="mt-3 text-sm font-medium text-navy">
              — Ahmed Khan, Parent
            </p>
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <p className="font-bold text-navy text-lg">
              Ready to give your child a better education?
            </p>
            <p className="text-gray-600 mt-2">
              Visit Chanab Centre of Excellence in G-12 Islamabad and see the
              difference conceptual learning makes.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-blue-accent text-white font-bold px-5 py-2.5 rounded-lg hover:bg-blue-primary transition-colors text-sm"
              >
                Apply Now →
              </Link>
              <Link
                href="/academics"
                className="inline-flex items-center gap-2 text-blue-accent font-semibold hover:text-blue-primary transition-colors text-sm"
              >
                Explore Academics →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
