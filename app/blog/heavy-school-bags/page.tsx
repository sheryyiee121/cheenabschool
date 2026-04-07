import Link from "next/link";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Why Heavy School Bags Are Harmful for Your Child | Chanab Centre of Excellence",
  description:
    "Research shows heavy school bags cause spinal damage, poor posture, and reduced academic performance. Learn about the dangers and the low bag weight solution.",
};

export default function HeavyBagsArticle() {
  return (
    <article className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-blue-accent hover:text-blue-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
          <span className="bg-blue-50 text-blue-accent px-2.5 py-1 rounded-full font-medium">
            Student Health
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            March 15, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />5 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
          Why Heavy School Bags Are Harmful for Your Child
        </h1>

        {/* Content */}
        <div className="mt-10 prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed text-lg">
            Every morning, millions of Pakistani children strap on school bags
            that weigh far more than medical guidelines recommend. According to
            orthopedic experts, a child&apos;s school bag should not exceed{" "}
            <strong>10% of their body weight</strong>. Yet studies show that most
            students carry bags weighing <strong>15–20% or more</strong> of
            their body weight.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
            The Health Risks
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">1.</span>
              <div>
                <strong className="text-navy">Spinal Damage:</strong> Heavy bags
                compress the spinal discs and can lead to chronic back pain,
                scoliosis, and postural deformities that may become permanent.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">2.</span>
              <div>
                <strong className="text-navy">Shoulder & Neck Pain:</strong>{" "}
                Uneven weight distribution causes muscle strain, headaches, and
                nerve compression in the neck and shoulders.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">3.</span>
              <div>
                <strong className="text-navy">Reduced Lung Capacity:</strong>{" "}
                Forward-leaning posture from heavy bags compresses the chest
                cavity, reducing breathing efficiency and causing fatigue.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold mt-1">4.</span>
              <div>
                <strong className="text-navy">Academic Impact:</strong> Physical
                discomfort leads to poor concentration, reduced classroom
                engagement, and lower academic performance.
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
            The Chanab Solution: Low Bag Weight System
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <strong>Chanab Centre of Excellence</strong>, we recognized this
            crisis and implemented a revolutionary{" "}
            <strong>Low Bag Weight System</strong>:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Every student gets a personal pigeon-hole locker at school",
              "Books and notebooks stay at school — no daily carrying",
              "Students carry only a light bag with lunch and stationery",
              "Bag weight reduced by up to 90%",
              "Children arrive at school fresh, energetic, and ready to learn",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600">
                <CheckCircle className="w-5 h-5 text-water-blue mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-10 mb-4">
            What Parents Can Do
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If your child&apos;s school hasn&apos;t adopted a low bag weight
            system, here are some steps you can take:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              • Weigh your child&apos;s bag regularly — it should be under 10%
              of their weight
            </li>
            <li>• Choose ergonomic bags with wide, padded straps</li>
            <li>• Encourage your child to use both straps evenly</li>
            <li>
              • Speak with the school administration about locker facilities
            </li>
            <li>
              • Consider schools like Chanab that prioritize student health
            </li>
          </ul>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <p className="font-bold text-navy text-lg">
              Your child&apos;s health should never be compromised for education.
            </p>
            <p className="text-gray-600 mt-2">
              At Chanab Centre of Excellence, we believe learning and well-being
              go hand in hand. Our Low Bag Weight System is just one of the many
              ways we put students first.
            </p>
            <Link
              href="/low-bag-system"
              className="mt-4 inline-flex items-center gap-2 text-blue-accent font-semibold hover:text-blue-primary transition-colors"
            >
              Learn more about our Low Bag Weight System →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
