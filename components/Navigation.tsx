"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/book", label: "Reserve" },
];

const displayFont =
  "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
const bodyFont = "var(--font-lora), Lora, Georgia, serif";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(12, 8, 4, 0.88)"
            : "linear-gradient(to bottom, rgba(12,8,4,0.7), transparent)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(201, 168, 76, 0.15)"
            : "1px transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <span
              className="text-xl tracking-[0.3em] text-cream uppercase"
              style={{ fontFamily: displayFont, fontWeight: 300 }}
            >
              Bliksem
            </span>
            <span className="text-gold text-base mx-0.5">⚡</span>
            <span
              className="text-xl tracking-[0.3em] text-cream uppercase"
              style={{ fontFamily: displayFont, fontWeight: 300 }}
            >
              Cafe
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-xs tracking-[0.18em] uppercase transition-colors duration-300"
                  style={{
                    fontFamily: bodyFont,
                    color: pathname === link.href ? "#C9A84C" : "#A89070",
                  }}
                  onMouseEnter={(e) =>
                    pathname !== link.href &&
                    ((e.currentTarget as HTMLElement).style.color = "#F5ECD7")
                  }
                  onMouseLeave={(e) =>
                    pathname !== link.href &&
                    ((e.currentTarget as HTMLElement).style.color = "#A89070")
                  }
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "#C9A84C" }}
                    />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300"
                style={{
                  fontFamily: bodyFont,
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
                Book a Table
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-px bg-cream transition-all duration-300"
              style={{
                transform: menuOpen ? "rotate(45deg) translateY(10px)" : "",
              }}
            />
            <span
              className="block w-6 h-px bg-cream transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-cream transition-all duration-300"
              style={{
                transform: menuOpen ? "rotate(-45deg) translateY(-10px)" : "",
              }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "#0C0804" }}
          >
            <ul className="flex flex-col items-center gap-8 mb-12">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="block text-5xl tracking-[0.15em] uppercase"
                    style={{
                      fontFamily: displayFont,
                      fontWeight: 300,
                      color: pathname === link.href ? "#C9A84C" : "#F5ECD7",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#6B5540", fontFamily: bodyFont }}
            >
              ⚡ &nbsp; Struck by the perfect cup
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
