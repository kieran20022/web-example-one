"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ─── IMAGE CATALOG ────────────────────────────────────────────────────────────
// Replace any URL here to swap the image. All from Unsplash (free license).
const IMAGES = {
  // Hero: overhead view of coffee preparation tools on dark surface
  hero: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1920&q=80",
};
// ─────────────────────────────────────────────────────────────────────────────

const displayFont = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
const bodyFont = "var(--font-lora), Lora, Georgia, serif";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
};

type Category = {
  id: string;
  label: string;
  intro: string;
  items: MenuItem[];
};

const MENU: Category[] = [
  {
    id: "espresso",
    label: "Espresso Bar",
    intro: "All espresso drinks begin with our house blend — a washed Ethiopian and natural Brazilian. Ask your barista about single-origin options.",
    items: [
      {
        name: "Espresso",
        description: "A 25ml shot of our house blend, pulled at 93°C.",
        price: "€3.00",
      },
      {
        name: "Cortado",
        description: "Equal parts espresso and warm milk, no foam.",
        price: "€3.50",
      },
      {
        name: "Flat White",
        description: "Double ristretto, velvety micro-foam, 150ml.",
        price: "€4.00",
      },
      {
        name: "Latte",
        description: "Single origin espresso, steamed milk, delicate latte art.",
        price: "€4.50",
      },
      {
        name: "Cappuccino",
        description: "Equal thirds espresso, milk, and airy foam.",
        price: "€4.00",
      },
      {
        name: "Americano",
        description: "Double espresso, extended with hot water.",
        price: "€3.50",
      },
      {
        name: "Long Black",
        description: "Hot water first, double ristretto poured over. Preserves the crema.",
        price: "€3.50",
      },
      {
        name: "Macchiato",
        description: "Espresso marked with a spoonful of textured milk.",
        price: "€3.00",
      },
    ],
  },
  {
    id: "specialty",
    label: "Signatures & Specialties",
    intro: "Seasonally inspired drinks developed by our barista team. Each one is a small experiment in flavour.",
    items: [
      {
        name: "Bliksem Signature",
        description:
          "Double ristretto, smoked vanilla syrup, oat milk. Served over a single large ice sphere.",
        price: "€6.50",
        note: "Our most ordered drink",
      },
      {
        name: "Golden Storm",
        description:
          "Turmeric, ginger, black pepper, oat milk and a double espresso. Warming and complex.",
        price: "€5.50",
      },
      {
        name: "Jasmine Cold Brew",
        description:
          "24-hour cold-extracted Ethiopian, steeped with dried jasmine blossoms. Served black over ice.",
        price: "€5.50",
      },
      {
        name: "Spiced Honey Latte",
        description:
          "Cardamom and cinnamon-infused honey syrup, double espresso, warm oat milk.",
        price: "€5.50",
      },
      {
        name: "Matcha Ceremony",
        description:
          "Ceremonial grade matcha, hand-whisked with oat milk. Optional honey on the side.",
        price: "€5.00",
      },
      {
        name: "Midnight Chai",
        description:
          "Our house masala chai blend steeped for 8 minutes, served with steamed milk.",
        price: "€4.50",
      },
    ],
  },
  {
    id: "filter",
    label: "Filter Coffee",
    intro: "Brewed to order. We rotate three origins weekly — ask what's on the bar today.",
    items: [
      {
        name: "Pour Over — V60",
        description:
          "Single origin, brewed to order. Rotating selection. Ask your barista for today's cup notes.",
        price: "€5.50",
        note: "Current origin: Yirgacheffe, Ethiopia",
      },
      {
        name: "AeroPress",
        description:
          "A richer, syrupy brew. Naturally suited to medium and dark roast profiles.",
        price: "€5.00",
      },
      {
        name: "Batch Brew",
        description:
          "Our house filter, brewed fresh every 30 minutes. Ideal for a second or third cup.",
        price: "€3.50",
      },
      {
        name: "Cold Brew — Classic",
        description: "Slow-extracted for 20 hours. Bold, smooth, no acidity.",
        price: "€5.00",
      },
    ],
  },
  {
    id: "kitchen",
    label: "From the Kitchen",
    intro: "Everything is baked in-house each morning. The menu changes seasonally and sometimes daily.",
    items: [
      {
        name: "Almond Frangipane Tart",
        description:
          "Buttery shell, almond cream, seasonal stone fruit, chamomile honey glaze.",
        price: "€5.00",
        note: "Best with our Ethiopian pour over",
      },
      {
        name: "Butter Croissant",
        description:
          "Three-day laminated dough, 27 layers, served warm from the oven.",
        price: "€3.50",
      },
      {
        name: "Pain au Chocolat",
        description:
          "Dark Valrhona chocolate batons, same laminated dough as our croissant.",
        price: "€4.00",
      },
      {
        name: "Cardamom Bun",
        description:
          "Enriched dough, generous cardamom-butter filling, pearl sugar. Baked to order on weekends.",
        price: "€4.00",
      },
      {
        name: "Seasonal Toast",
        description:
          "Sourdough from our bakery partners, seasonal toppings. Ask for today's selection.",
        price: "€6.50",
      },
      {
        name: "Cheese & Charcuterie",
        description:
          "A curated small plate — two aged cheeses, one cured meat, mustard, and bread.",
        price: "€12.00",
      },
      {
        name: "Soft-Boiled Egg Plate",
        description:
          "Two eggs cooked at 64°C for 40 minutes, labneh, za'atar, and sourdough.",
        price: "€8.50",
      },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(MENU[0].id);

  const category = MENU.find((c) => c.id === activeCategory)!;

  return (
    <div style={{ background: "#0C0804" }}>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ height: "52vh", minHeight: 380 }}
      >
        <Image
          src={IMAGES.hero}
          alt="Coffee beans — the foundation of our menu"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,8,4,0.4) 0%, rgba(12,8,4,0.92) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: bodyFont, color: "#C9A84C" }}
          >
            Seasonal menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{
              fontFamily: displayFont,
              fontWeight: 300,
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              color: "#F5ECD7",
              lineHeight: 1.05,
            }}
          >
            The Menu
          </motion.h1>
        </div>
      </section>

      {/* ── CATEGORY TABS ─────────────────────────────────────────────────── */}
      <div
        className="sticky top-20 z-30 overflow-x-auto"
        style={{
          background: "rgba(12,8,4,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-0 min-w-max">
            {MENU.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="relative px-6 py-5 text-xs tracking-[0.18em] uppercase transition-colors duration-200"
                style={{
                  fontFamily: bodyFont,
                  color: activeCategory === cat.id ? "#C9A84C" : "#6B5540",
                }}
                onMouseEnter={(e) =>
                  activeCategory !== cat.id &&
                  ((e.currentTarget as HTMLElement).style.color = "#A89070")
                }
                onMouseLeave={(e) =>
                  activeCategory !== cat.id &&
                  ((e.currentTarget as HTMLElement).style.color = "#6B5540")
                }
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: "#C9A84C" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MENU ITEMS ────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {/* Category intro */}
              <div className="max-w-2xl mb-14">
                <p
                  className="text-sm leading-8 italic"
                  style={{ fontFamily: displayFont, color: "#A89070", fontSize: "1.1rem" }}
                >
                  {category.intro}
                </p>
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(201,168,76,0.08)" }}>
                {category.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    className="p-8 group"
                    style={{ background: "#0C0804" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3
                          className="mb-1"
                          style={{
                            fontFamily: displayFont,
                            fontWeight: 400,
                            fontSize: "1.45rem",
                            color: "#F5ECD7",
                          }}
                        >
                          {item.name}
                        </h3>
                        {item.note && (
                          <p
                            className="text-xs tracking-[0.15em] uppercase"
                            style={{ fontFamily: bodyFont, color: "#C9A84C" }}
                          >
                            {item.note}
                          </p>
                        )}
                      </div>
                      <span
                        className="shrink-0 mt-1"
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
                    <p
                      className="text-sm leading-7"
                      style={{ fontFamily: bodyFont, color: "#A89070" }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
                {/* Placeholder to fill the grid when item count is odd — hides gap background */}
                {category.items.length % 2 !== 0 && (
                  <div style={{ background: "#0C0804" }} />
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dietary note */}
          <p
            className="mt-12 text-xs leading-6"
            style={{ fontFamily: bodyFont, color: "#3D2B1A" }}
          >
            All plant-based milks (oat, almond, soy) available at no extra charge. &nbsp;·&nbsp;
            Please inform us of any allergies before ordering. &nbsp;·&nbsp;
            Menu subject to seasonal change.
          </p>
        </div>
      </section>

      {/* ── BOOK CTA ──────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background: "#100A05",
          borderTop: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: bodyFont, color: "#6B5540" }}
        >
          Ready to visit?
        </p>
        <h2
          className="mb-8"
          style={{
            fontFamily: displayFont,
            fontWeight: 300,
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            color: "#F5ECD7",
          }}
        >
          Reserve your table today.
        </h2>
        <Link
          href="/book"
          className="inline-block px-10 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300"
          style={{
            fontFamily: bodyFont,
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.35)",
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
      </section>
    </div>
  );
}
