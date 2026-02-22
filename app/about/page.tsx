"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── IMAGE CATALOG ────────────────────────────────────────────────────────────
// Replace any URL here to swap the image. All from Unsplash (free license).
const IMAGES = {
  // Hero: warm overhead shot of coffee being poured
  hero: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?auto=format&fit=crop&w=1920&q=80",

  // Story section: barista at work, detail shot
  barista:
    "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=900&q=80",

  // Values section: coffee beans close-up
  beans:
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",

  // Bottom full-width: moody cafe window seat
  window:
    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1920&q=80",
};
// ─────────────────────────────────────────────────────────────────────────────

const displayFont = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
const bodyFont = "var(--font-lora), Lora, Georgia, serif";

const values = [
  {
    number: "01",
    title: "Obsessive Sourcing",
    body: "We visit every farm we work with. We cup hundreds of lots each season. Only when a coffee moves us does it make it onto the menu.",
  },
  {
    number: "02",
    title: "Unhurried Service",
    body: "A good cup takes time. We won't rush yours. Pull up a chair, take your coat off — this is your hour.",
  },
  {
    number: "03",
    title: "Honest Craft",
    body: "No shortcuts, no automated machines, no powders. Everything is made by hand, by people who care deeply about what they're making.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#0C0804" }}>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ height: "70vh", minHeight: 480 }}
      >
        <Image
          src={IMAGES.hero}
          alt="BliksemCafe — warm coffee being poured"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,8,4,0.3) 0%, rgba(12,8,4,0.85) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: bodyFont, color: "#C9A84C" }}
          >
            Our story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{
              fontFamily: displayFont,
              fontWeight: 300,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "#F5ECD7",
              lineHeight: 1.05,
            }}
          >
            Born from
            <br />
            <em>a single conviction.</em>
          </motion.h1>
        </div>
      </section>

      {/* ── OPENING STATEMENT ─────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0C0804" }}>
        <div className="max-w-3xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <p
              className="italic leading-relaxed mb-6"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "#E5D5B8",
              }}
            >
              &ldquo;Coffee, at its best, is not a commodity. It is a landscape,
              a season, a pair of hands you'll never shake. We wanted to build a
              place that honours all of that.&rdquo;
            </p>
            <footer
              className="text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: bodyFont, color: "#C9A84C" }}
            >
              — Marieke &amp; Daan, Founders
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-28" style={{ background: "#100A05" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
            style={{ height: 560 }}
          >
            <Image
              src={IMAGES.barista}
              alt="A BliksemCafe barista at work"
              fill
              className="object-cover"
            />
            {/* Decorative gold border offset */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full pointer-events-none"
              style={{ border: "1px solid rgba(201, 168, 76, 0.2)", zIndex: -1 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: bodyFont, color: "#C9A84C" }}
            >
              How it began
            </p>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                color: "#F5ECD7",
              }}
            >
              A canal-side café,
              <br />
              five years in the making.
            </h2>
            <div
              className="w-12 h-px mb-7"
              style={{ background: "rgba(201, 168, 76, 0.4)" }}
            />
            <div
              className="space-y-5 text-sm leading-8"
              style={{ fontFamily: bodyFont, color: "#A89070" }}
            >
              <p>
                Marieke spent three years managing specialty cafés in Melbourne
                before returning to Amsterdam with a single ambition: to open
                the most thoughtfully sourced café the city had ever seen. Daan,
                an architect with a long-standing obsession with roasting, joined
                her the week she signed the lease on Keizersgracht.
              </p>
              <p>
                They named the place <em style={{ color: "#E5D5B8" }}>Bliksem</em> — lightning —
                because that's what a perfect cup feels like. A bolt. Sudden clarity.
                The world sharpened for a moment.
              </p>
              <p>
                Five years later, the team has grown to seventeen people. The
                lease is signed for another decade. And the coffee, we'd argue,
                has never been better.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PULL QUOTE ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center" style={{ background: "#0C0804" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-xl mx-auto"
        >
          <div
            className="w-px h-16 mx-auto mb-8"
            style={{ background: "linear-gradient(to bottom, transparent, #C9A84C)" }}
          />
          <p
            className="text-xs tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: bodyFont, color: "#6B5540" }}
          >
            What we believe
          </p>
          <p
            className="italic leading-relaxed"
            style={{
              fontFamily: displayFont,
              fontWeight: 300,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "#C9A84C",
            }}
          >
            &ldquo;Slowness is not inefficiency.
            <br />
            It is the whole point.&rdquo;
          </p>
          <div
            className="w-px h-16 mx-auto mt-8"
            style={{ background: "linear-gradient(to bottom, #C9A84C, transparent)" }}
          />
        </motion.div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────────── */}
      <section className="py-16 pb-28 px-6" style={{ background: "#0F0906" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#F5ECD7",
              }}
            >
              How we work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(201,168,76,0.08)" }}>
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="p-10"
                style={{ background: "#0C0804" }}
              >
                <p
                  className="text-xs tracking-[0.3em] mb-5"
                  style={{ fontFamily: bodyFont, color: "rgba(201,168,76,0.4)" }}
                >
                  {v.number}
                </p>
                <div
                  className="w-8 h-px mb-6"
                  style={{ background: "#C9A84C" }}
                />
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: displayFont,
                    fontWeight: 400,
                    fontSize: "1.6rem",
                    color: "#F5ECD7",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-7"
                  style={{ fontFamily: bodyFont, color: "#A89070" }}
                >
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: 500 }}>
        <Image
          src={IMAGES.window}
          alt="A quiet corner at BliksemCafe"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(12,8,4,0.55)" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center px-6"
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: bodyFont, color: "#C9A84C" }}
            >
              Come as you are
            </p>
            <h2
              className="italic"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "#F5ECD7",
                lineHeight: 1.1,
              }}
            >
              The chair is waiting for you.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center" style={{ background: "#0C0804" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/menu"
            className="px-10 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300"
            style={{ fontFamily: bodyFont, background: "#C9A84C", color: "#0C0804" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#E8C97A")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#C9A84C")
            }
          >
            See the menu
          </Link>
          <Link
            href="/book"
            className="px-10 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300"
            style={{
              fontFamily: bodyFont,
              color: "#F5ECD7",
              border: "1px solid rgba(245,236,215,0.25)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(201,168,76,0.5)";
              el.style.color = "#C9A84C";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(245,236,215,0.25)";
              el.style.color = "#F5ECD7";
            }}
          >
            Reserve a table
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
