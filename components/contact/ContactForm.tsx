"use client";

import { useState } from "react";
import { MASJID_EMAIL } from "@/lib/iqama-config";

const SUBJECTS = [
  "General Inquiry",
  "School Enrollment",
  "Donation Question",
  "Membership",
  "Volunteer",
  "Construction Update",
  "Event Information",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: SUBJECTS[0],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: SUBJECTS[0], message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12 bg-islamic-50 rounded-2xl border border-islamic-100">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="font-cinzel font-bold text-xl text-islamic-700 mb-2">
          Message Sent — JazakAllah Khair!
        </h3>
        <p className="text-gray-500 mb-6">
          We&apos;ll get back to you as soon as possible, insha&apos;Allah.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-islamic-600 font-semibold underline underline-offset-2 text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Ahmed Khan"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="ahmed@example.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Subject <span className="text-red-400">*</span>
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors bg-white"
        >
          {SUBJECTS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Assalamu Alaikum, I would like to ask about..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          {errorMsg}{" "}
          <a
            href={`mailto:${MASJID_EMAIL}`}
            className="underline font-semibold"
          >
            Email us directly
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-islamic-700 hover:bg-islamic-600 disabled:bg-islamic-400 text-white font-cinzel font-bold py-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Or email us directly at{" "}
        <a
          href={`mailto:${MASJID_EMAIL}`}
          className="text-islamic-600 underline"
        >
          {MASJID_EMAIL}
        </a>
      </p>
    </form>
  );
}
