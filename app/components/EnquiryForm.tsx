"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const grades = [
  "Grade VI",
  "Grade VII",
  "Grade VIII",
  "Grade IX (Matric)",
  "Grade X (Matric)",
  "Grade XI (Intermediate)",
  "Grade XII (Intermediate)",
];

const inputClasses =
  "w-full border border-slate-300 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-sky-primary focus:ring-1 focus:ring-sky-primary transition-colors";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    parentName: "",
    studentName: "",
    grade: grades[0],
    mobile: "",
    email: "",
    message: "",
  });

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Admission Enquiry — CCoE Website",
      `Parent/Guardian: ${form.parentName}`,
      `Student: ${form.studentName}`,
      `Grade Applying For: ${form.grade}`,
      `Mobile: ${form.mobile}`,
      form.email ? `Email: ${form.email}` : "",
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/923335500780?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="Parent/Guardian Name"
          value={form.parentName}
          onChange={update("parentName")}
          className={inputClasses}
        />
        <input
          type="text"
          required
          placeholder="Student Name"
          value={form.studentName}
          onChange={update("studentName")}
          className={inputClasses}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          value={form.grade}
          onChange={update("grade")}
          className={inputClasses}
        >
          {grades.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
        <input
          type="tel"
          required
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={update("mobile")}
          className={inputClasses}
        />
      </div>
      <input
        type="email"
        placeholder="Email Address (optional)"
        value={form.email}
        onChange={update("email")}
        className={inputClasses}
      />
      <textarea
        required
        rows={4}
        placeholder="Your Message"
        value={form.message}
        onChange={update("message")}
        className={inputClasses}
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-sky-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-accent transition-colors"
      >
        <Send className="w-4 h-4" />
        Submit Enquiry
      </button>
      <p className="text-xs text-slate-400">
        Your enquiry will be sent to our admissions team via WhatsApp.
      </p>
    </form>
  );
}
