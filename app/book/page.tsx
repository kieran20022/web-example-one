"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ─── IMAGE CATALOG ────────────────────────────────────────────────────────────
// Replace any URL here to swap the image. All from Unsplash (free license).
const IMAGES = {
  // Sidebar: intimate cafe table with coffee and candle
  sidebar:
    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80",
};
// ─────────────────────────────────────────────────────────────────────────────

const displayFont = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
const bodyFont = "var(--font-lora), Lora, Georgia, serif";

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00",
];

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(201,168,76,0.2)",
  padding: "0.75rem 0",
  fontFamily: bodyFont,
  fontSize: "0.875rem",
  color: "#F5ECD7",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: bodyFont,
  fontSize: "0.6rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: "#6B5540",
  marginBottom: "0.5rem",
};

export default function BookPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Booking not fully implemented — shows confirmation state
    setSubmitted(true);
  }

  const focusedBorderColor = "rgba(201,168,76,0.6)";

  return (
    <div style={{ background: "#0C0804" }}>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="pt-36 pb-16 px-6 text-center"
        style={{
          background:
            "linear-gradient(to bottom, #110C06 0%, #0C0804 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs tracking-[0.35em] uppercase mb-5"
          style={{ fontFamily: bodyFont, color: "#C9A84C" }}
        >
          Reservations
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          style={{
            fontFamily: displayFont,
            fontWeight: 300,
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            color: "#F5ECD7",
            lineHeight: 1.05,
          }}
        >
          Reserve your table
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-16 h-px mx-auto mt-6 origin-center"
          style={{ background: "rgba(201,168,76,0.4)" }}
        />
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* ── FORM ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label style={labelStyle}>Full name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        placeholder="Your name"
                        style={{
                          ...inputStyle,
                          borderBottomColor:
                            focused === "name" ? focusedBorderColor : undefined,
                        }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        placeholder="you@example.com"
                        style={{
                          ...inputStyle,
                          borderBottomColor:
                            focused === "email" ? focusedBorderColor : undefined,
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label style={labelStyle}>Phone number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        placeholder="+31 6 12 34 56 78"
                        style={{
                          ...inputStyle,
                          borderBottomColor:
                            focused === "phone" ? focusedBorderColor : undefined,
                        }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Number of guests *</label>
                      <select
                        name="guests"
                        required
                        value={form.guests}
                        onChange={handleChange}
                        onFocus={() => setFocused("guests")}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...inputStyle,
                          cursor: "pointer",
                          borderBottomColor:
                            focused === "guests" ? focusedBorderColor : undefined,
                        }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option
                            key={n}
                            value={n}
                            style={{ background: "#1A1009", color: "#F5ECD7" }}
                          >
                            {n} {n === 1 ? "guest" : "guests"}
                          </option>
                        ))}
                        <option
                          value="9+"
                          style={{ background: "#1A1009", color: "#F5ECD7" }}
                        >
                          9+ guests (contact us)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label style={labelStyle}>Preferred date *</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        onFocus={() => setFocused("date")}
                        onBlur={() => setFocused(null)}
                        min={new Date().toISOString().split("T")[0]}
                        style={{
                          ...inputStyle,
                          colorScheme: "dark",
                          borderBottomColor:
                            focused === "date" ? focusedBorderColor : undefined,
                        }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Preferred time *</label>
                      <select
                        name="time"
                        required
                        value={form.time}
                        onChange={handleChange}
                        onFocus={() => setFocused("time")}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...inputStyle,
                          cursor: "pointer",
                          borderBottomColor:
                            focused === "time" ? focusedBorderColor : undefined,
                        }}
                      >
                        <option
                          value=""
                          disabled
                          style={{ background: "#1A1009", color: "#6B5540" }}
                        >
                          Select a time
                        </option>
                        {TIME_SLOTS.map((t) => (
                          <option
                            key={t}
                            value={t}
                            style={{ background: "#1A1009", color: "#F5ECD7" }}
                          >
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label style={labelStyle}>Special requests or notes</label>
                    <textarea
                      name="notes"
                      rows={4}
                      value={form.notes}
                      onChange={handleChange}
                      onFocus={() => setFocused("notes")}
                      onBlur={() => setFocused(null)}
                      placeholder="Dietary requirements, occasion, seating preferences…"
                      style={{
                        ...inputStyle,
                        borderBottom: "none",
                        border: `1px solid ${focused === "notes" ? focusedBorderColor : "rgba(201,168,76,0.2)"}`,
                        padding: "0.875rem",
                        resize: "none",
                        lineHeight: "1.75",
                      }}
                    />
                  </div>

                  {/* Fine print */}
                  <p
                    className="text-xs leading-6"
                    style={{ fontFamily: bodyFont, color: "#3D2B1A" }}
                  >
                    We hold reservations for 15 minutes. For groups of 9 or more,
                    please contact us directly. Submitting this form sends a request —
                    our team will confirm via email within 2 hours.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                    style={{
                      fontFamily: bodyFont,
                      background: "#C9A84C",
                      color: "#0C0804",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = "#E8C97A")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = "#C9A84C")
                    }
                  >
                    Send reservation request
                  </button>
                </motion.form>
              ) : (
                /* ── CONFIRMATION ─────────────────────────────────────────── */
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="py-16"
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center mb-8"
                    style={{ border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    <span className="text-gold text-2xl">⚡</span>
                  </div>
                  <h2
                    className="mb-4"
                    style={{
                      fontFamily: displayFont,
                      fontWeight: 300,
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      color: "#F5ECD7",
                    }}
                  >
                    We&rsquo;ll see you soon, {form.name.split(" ")[0]}.
                  </h2>
                  <div
                    className="w-12 h-px mb-6"
                    style={{ background: "rgba(201,168,76,0.4)" }}
                  />
                  <p
                    className="text-sm leading-8 mb-8 max-w-md"
                    style={{ fontFamily: bodyFont, color: "#A89070" }}
                  >
                    Your reservation request for{" "}
                    <span style={{ color: "#E5D5B8" }}>
                      {form.guests} {parseInt(form.guests) === 1 ? "guest" : "guests"}
                    </span>
                    {form.date && (
                      <>
                        {" "}on{" "}
                        <span style={{ color: "#E5D5B8" }}>
                          {new Date(form.date + "T12:00:00").toLocaleDateString("en-GB", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                          })}
                        </span>
                      </>
                    )}
                    {form.time && (
                      <>
                        {" "}at{" "}
                        <span style={{ color: "#E5D5B8" }}>{form.time}</span>
                      </>
                    )}{" "}
                    has been received. A confirmation will be sent to{" "}
                    <span style={{ color: "#E5D5B8" }}>{form.email}</span>{" "}
                    within two hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "", email: "", phone: "",
                        date: "", time: "", guests: "2", notes: "",
                      });
                    }}
                    className="text-xs tracking-[0.2em] uppercase transition-colors duration-200"
                    style={{ fontFamily: bodyFont, color: "#6B5540" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#C9A84C")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#6B5540")
                    }
                  >
                    Make another reservation
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── SIDEBAR ───────────────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative overflow-hidden"
              style={{ height: 340 }}
            >
              <Image
                src={IMAGES.sidebar}
                alt="A table set at BliksemCafe"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, rgba(12,8,4,0.7) 100%)",
                }}
              />
            </motion.div>

            {/* Info block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="space-y-8"
            >
              {/* Hours */}
              <div>
                <h3
                  className="text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ fontFamily: bodyFont, color: "#C9A84C" }}
                >
                  Opening hours
                </h3>
                <ul className="space-y-2" style={{ fontFamily: bodyFont }}>
                  {[
                    { day: "Monday – Friday", time: "07:00 – 20:00" },
                    { day: "Saturday", time: "08:00 – 21:00" },
                    { day: "Sunday", time: "09:00 – 18:00" },
                  ].map(({ day, time }) => (
                    <li
                      key={day}
                      className="flex justify-between text-sm gap-4"
                    >
                      <span style={{ color: "#A89070" }}>{day}</span>
                      <span style={{ color: "#E5D5B8" }}>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="h-px"
                style={{ background: "rgba(201,168,76,0.1)" }}
              />

              {/* Location */}
              <div>
                <h3
                  className="text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ fontFamily: bodyFont, color: "#C9A84C" }}
                >
                  Find us
                </h3>
                <address
                  className="not-italic text-sm leading-7"
                  style={{ fontFamily: bodyFont, color: "#A89070" }}
                >
                  Keizersgracht 42
                  <br />
                  1015 CS Amsterdam
                  <br />
                  Netherlands
                </address>
              </div>

              <div
                className="h-px"
                style={{ background: "rgba(201,168,76,0.1)" }}
              />

              {/* Contact */}
              <div>
                <h3
                  className="text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ fontFamily: bodyFont, color: "#C9A84C" }}
                >
                  Large groups &amp; private events
                </h3>
                <p
                  className="text-sm leading-7 mb-3"
                  style={{ fontFamily: bodyFont, color: "#A89070" }}
                >
                  For parties of 9 or more, or to enquire about private hire
                  of the café, please reach out directly.
                </p>
                <a
                  href="mailto:hello@bliksemcafe.com"
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: bodyFont, color: "#C9A84C" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#E8C97A")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#C9A84C")
                  }
                >
                  hello@bliksemcafe.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
