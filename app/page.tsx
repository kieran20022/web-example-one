"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// ─── IMAGE CATALOG ────────────────────────────────────────────────────────────
// Replace any URL here to swap the image across the site.
// All photos from Unsplash — free to use under the Unsplash License.
const IMAGES = {
  // Hero: dark moody coffee shop interior
  hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80",

  // Atmosphere section: warm cafe with ambient lighting
  atmosphere:
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1920&q=80",

  // Feature card 1: close-up latte art
  latte:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",

  // Feature card 2: elegant cafe interior with seating
  interior:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",

  // Feature card 3: artisan pastry on a plate
  pastry:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
};
// ─────────────────────────────────────────────────────────────────────────────

const displayFont = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
const bodyFont = "var(--font-lora), Lora, Georgia, serif";

const features = [
  {
    image: IMAGES.latte,
    alt: "Expertly crafted latte",
    label: "Exceptional Coffee",
    description:
      "Single-origin beans, sourced directly from family farms across three continents. Each cup tells a story of terroir and craft.",
  },
  {
    image: IMAGES.interior,
    alt: "Intimate cafe interior",
    label: "Intimate Atmosphere",
    description:
      "Velvet seating, warm amber light, and the unhurried pace that turns a coffee break into a genuine ritual.",
  },
  {
    image: IMAGES.pastry,
    alt: "Artisan pastry",
    label: "Curated Kitchen",
    description:
      "A rotating menu of house-made pastries and seasonal small plates, crafted to complement every cup on our list.",
  },
];

const marqueeItems = [
  "Exceptional Coffee",
  "Unhurried Luxury",
  "Single Origin",
  "Artisan Bakes",
  "Amsterdam",
  "Bliksem ⚡",
];

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div style={{ background: "#0C0804" }}>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "100svh", minHeight: 600 }}
      >
        {/* Parallax background image */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroImageY, scale: 1.15 }}
        >
          <Image
            src={IMAGES.hero}
            alt="BliksemCafe interior at dusk"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,8,4,0.45) 0%, rgba(12,8,4,0.55) 50%, rgba(12,8,4,0.90) 100%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase mb-8"
            style={{ fontFamily: bodyFont, color: "#C9A84C" }}
          >
            Amsterdam · Est. 2019
          </motion.p>

          {/* Main title */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="leading-none tracking-[0.12em] uppercase text-cream"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(4rem, 12vw, 10rem)",
              }}
            >
              Bliksem
            </motion.h1>
          </div>

          {/* Lightning divider */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "backOut" }}
            className="my-1 text-gold"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            ⚡
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="leading-none tracking-[0.35em] uppercase text-cream"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
              }}
            >
              Cafe
            </motion.h1>
          </div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="w-24 h-px mb-6 origin-center"
            style={{ background: "rgba(201, 168, 76, 0.5)" }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-base md:text-lg mb-10 italic"
            style={{ fontFamily: displayFont, color: "#A89070", fontWeight: 300 }}
          >
            Struck by the perfect cup.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link
              href="/menu"
              className="px-10 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                fontFamily: bodyFont,
                background: "#C9A84C",
                color: "#0C0804",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#E8C97A")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#C9A84C")
              }
            >
              Explore the Menu
            </Link>
            <Link
              href="/book"
              className="px-10 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                fontFamily: bodyFont,
                color: "#F5ECD7",
                border: "1px solid rgba(245, 236, 215, 0.3)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201, 168, 76, 0.6)";
                el.style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(245, 236, 215, 0.3)";
                el.style.color = "#F5ECD7";
              }}
            >
              Reserve a Table
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: bodyFont, color: "#6B5540" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, #6B5540, transparent)" }}
          />
        </motion.div>
      </section>

      {/* ── MARQUEE BAND ──────────────────────────────────────────────────── */}
      <div
        className="py-4 overflow-hidden"
        style={{
          background: "#C9A84C",
          borderTop: "1px solid rgba(201, 168, 76, 0.3)",
        }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, block) => (
            <span key={block} className="flex items-center">
              {marqueeItems.map((item, i) => (
                <span key={i} className="flex items-center">
                  <span
                    className="text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: bodyFont, color: "#0C0804", padding: "0 2.5rem" }}
                  >
                    {item}
                  </span>
                  <span style={{ color: "rgba(12,8,4,0.35)", fontSize: "0.5rem" }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: bodyFont, color: "#C9A84C" }}
          >
            A sanctuary for the senses
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mb-8 leading-tight"
            style={{
              fontFamily: displayFont,
              fontWeight: 300,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#F5ECD7",
            }}
          >
            Where every cup carries
            <br />
            <em>the weight of a story.</em>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px mx-auto mb-8 origin-center"
            style={{ background: "rgba(201, 168, 76, 0.45)" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-base md:text-lg leading-8"
            style={{ fontFamily: bodyFont, color: "#A89070" }}
          >
            BliksemCafe was born from a simple conviction: that a great cup of
            coffee is not merely a drink, but a deliberate pause in a hurried
            world. We source with obsession, roast with care, and serve with warmth.
          </motion.p>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
      <section className="pb-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(201, 168, 76, 0.1)" }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group relative overflow-hidden"
              style={{ background: "#0C0804" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 280 }}>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(12,8,4,0.85) 100%)",
                  }}
                />
              </div>

              {/* Text */}
              <div className="p-8">
                <div
                  className="w-8 h-px mb-5"
                  style={{ background: "#C9A84C" }}
                />
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: displayFont,
                    fontWeight: 400,
                    fontSize: "1.5rem",
                    color: "#F5ECD7",
                  }}
                >
                  {feature.label}
                </h3>
                <p
                  className="text-sm leading-7"
                  style={{ fontFamily: bodyFont, color: "#A89070" }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ATMOSPHERE ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: 600 }}>
        <Image
          src={IMAGES.atmosphere}
          alt="The BliksemCafe atmosphere — warm and intimate"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(12,8,4,0.92) 0%, rgba(12,8,4,0.92) 40%, rgba(12,8,4,0.45) 100%)",
          }}
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="max-w-lg"
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-5"
                style={{ fontFamily: bodyFont, color: "#C9A84C" }}
              >
                The space
              </p>
              <h2
                className="mb-6 leading-tight"
                style={{
                  fontFamily: displayFont,
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#F5ECD7",
                }}
              >
                An unhurried ritual,
                <br />
                <em>beautifully held.</em>
              </h2>
              <div
                className="w-12 h-px mb-6"
                style={{ background: "rgba(201, 168, 76, 0.5)" }}
              />
              <p
                className="text-sm leading-8 mb-8"
                style={{ fontFamily: bodyFont, color: "#A89070" }}
              >
                Tucked along Keizersgracht, our space was designed to slow you
                down. Deep booths, candlelit tables, the smell of roasted single-
                origin — a deliberate contrast to the city outside.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                style={{ fontFamily: bodyFont, color: "#C9A84C" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#E8C97A")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#C9A84C")
                }
              >
                Our story
                <span className="block w-8 h-px" style={{ background: "currentColor" }} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MENU PREVIEW ──────────────────────────────────────────────────── */}
      <section className="py-28 px-6" style={{ background: "#100A05" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: bodyFont, color: "#C9A84C" }}
            >
              A taste of what awaits
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#F5ECD7",
              }}
            >
              From our menu
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Bliksem Signature",
                category: "Specialty Coffee",
                description:
                  "Double ristretto, smoked vanilla syrup, oat milk, served over a single large ice sphere.",
                price: "€6.50",
              },
              {
                name: "Almond Frangipane",
                category: "Patisserie",
                description:
                  "House-made tart shell, almond cream, seasonal stone fruit, glazed with chamomile honey.",
                price: "€5.00",
              },
              {
                name: "Ethiopian Pour Over",
                category: "Filter Coffee",
                description:
                  "Yirgacheffe natural, blueberry and jasmine notes, brewed to order in a Hario V60.",
                price: "€5.50",
              },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-8"
                style={{ border: "1px solid rgba(201, 168, 76, 0.12)" }}
              >
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-3"
                  style={{ fontFamily: bodyFont, color: "#C9A84C" }}
                >
                  {item.category}
                </p>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: displayFont,
                    fontWeight: 400,
                    fontSize: "1.5rem",
                    color: "#F5ECD7",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-sm leading-7 mb-5"
                  style={{ fontFamily: bodyFont, color: "#A89070" }}
                >
                  {item.description}
                </p>
                <div
                  className="flex items-center justify-between pt-5"
                  style={{ borderTop: "1px solid rgba(201, 168, 76, 0.12)" }}
                >
                  <span
                    style={{
                      fontFamily: displayFont,
                      fontSize: "1.3rem",
                      color: "#C9A84C",
                      fontWeight: 400,
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{ fontFamily: bodyFont, color: "#C9A84C" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#E8C97A")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#C9A84C")
              }
            >
              View the full menu
              <span className="block w-12 h-px" style={{ background: "currentColor" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ───────────────────────────────────────────────────── */}
      <section className="py-28 px-6 text-center" style={{ background: "#0C0804" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl mx-auto"
        >
          <span
            className="text-gold text-3xl block mb-6"
          >
            ⚡
          </span>
          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: displayFont,
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#F5ECD7",
            }}
          >
            Reserve your table.
          </h2>
          <p
            className="text-base leading-8 mb-10"
            style={{ fontFamily: bodyFont, color: "#A89070" }}
          >
            Secure your seat at BliksemCafe. Whether a quiet morning alone or
            an afternoon with friends — we'll be ready for you.
          </p>
          <Link
            href="/book"
            className="inline-block px-12 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
            style={{
              fontFamily: bodyFont,
              background: "transparent",
              color: "#C9A84C",
              border: "1px solid rgba(201, 168, 76, 0.4)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#C9A84C";
              el.style.color = "#0C0804";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#C9A84C";
            }}
          >
            Make a reservation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
