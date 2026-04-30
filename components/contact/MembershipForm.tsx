"use client";

import { useState } from "react";
import { MASJID_EMAIL } from "@/lib/iqama-config";

type Status = "idle" | "loading" | "success" | "error";

export default function MembershipForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    membership: "General Member",
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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Membership Registration — ${form.membership}`,
          message: `Phone: ${form.phone || "Not provided"}\nMembership Type: ${form.membership}\n\n${form.message}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", membership: "General Member", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-14 bg-white rounded-2xl border border-islamic-100 shadow-sm">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="font-cinzel font-bold text-2xl text-islamic-700 mb-2">
          Welcome to the ICL Family!
        </h3>
        <p className="text-gray-500 mb-2">JazakAllah Khair for registering.</p>
        <p className="text-gray-500 text-sm">We&apos;ll be in touch soon, insha&apos;Allah.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-islamic-100 shadow-sm p-8 space-y-5">
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

      <div className="grid sm:grid-cols-2 gap-4">
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
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(602) 555-0100"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Membership Type</label>
        <select
          name="membership"
          value={form.membership}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors bg-white"
        >
          <option>General Member</option>
          <option>Supporting Member ($25+/mo)</option>
          <option>Builder Member ($100+/mo)</option>
          <option>Volunteer</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Anything you&apos;d like us to know? (optional)
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="How did you find us? Any programs you're interested in?"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          {errorMsg}{" "}
          <a href={`mailto:${MASJID_EMAIL}`} className="underline font-semibold">
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
            Registering…
          </>
        ) : (
          "Register as Member"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Registration is free. Your information is kept private and only used to welcome you to ICL.
      </p>
    </form>
  );
}
