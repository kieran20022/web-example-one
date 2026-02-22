"use client";

import Link from "next/link";

const displayFont = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
const bodyFont = "var(--font-lora), Lora, Georgia, serif";

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10"
      style={{
        background: "#110C06",
        borderTop: "1px solid rgba(201, 168, 76, 0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-1.5 mb-5">
              <span
                className="text-2xl tracking-[0.3em] text-cream uppercase"
                style={{ fontFamily: displayFont, fontWeight: 300 }}
              >
                Bliksem
              </span>
              <span className="text-gold mx-0.5">⚡</span>
              <span
                className="text-2xl tracking-[0.3em] text-cream uppercase"
                style={{ fontFamily: displayFont, fontWeight: 300 }}
              >
                Cafe
              </span>
            </div>
            <p
              className="text-warm text-sm leading-7 max-w-xs mb-6"
              style={{ fontFamily: bodyFont }}
            >
              An intimate sanctuary where exceptional coffee meets unhurried
              luxury. Every cup, a revelation. Every visit, a memory.
            </p>
            <div
              className="h-px w-16"
              style={{ background: "rgba(201, 168, 76, 0.4)" }}
            />
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <h4
              className="text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: bodyFont, color: "#C9A84C" }}
            >
              Hours
            </h4>
            <ul className="space-y-3" style={{ fontFamily: bodyFont }}>
              {[
                { day: "Mon – Fri", time: "07:00 – 20:00" },
                { day: "Saturday", time: "08:00 – 21:00" },
                { day: "Sunday", time: "09:00 – 18:00" },
              ].map(({ day, time }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-warm text-sm">{day}</span>
                  <span className="text-cream text-sm">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4
              className="text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: bodyFont, color: "#C9A84C" }}
            >
              Find Us
            </h4>
            <address
              className="not-italic text-sm leading-7"
              style={{ fontFamily: bodyFont, color: "#A89070" }}
            >
              Keizersgracht 42
              <br />
              1015 CS Amsterdam
              <br />
              Netherlands
              <br />
              <br />
              <a
                href="tel:+31201234567"
                className="transition-colors duration-200"
                style={{ color: "#E5D5B8" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#C9A84C")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#E5D5B8")
                }
              >
                +31 20 123 4567
              </a>
              <br />
              <a
                href="mailto:hello@bliksemcafe.com"
                className="transition-colors duration-200"
                style={{ color: "#E5D5B8" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#C9A84C")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#E5D5B8")
                }
              >
                hello@bliksemcafe.com
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(201, 168, 76, 0.1)" }}
        >
          <p
            className="text-xs tracking-widest"
            style={{ fontFamily: bodyFont, color: "#3D2B1A" }}
          >
            © {new Date().getFullYear()} BliksemCafe. All rights reserved.
          </p>
          <nav className="flex gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Menu", href: "/menu" },
              { label: "Reserve", href: "/book" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ fontFamily: bodyFont, color: "#3D2B1A" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#C9A84C")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#3D2B1A")
                }
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
