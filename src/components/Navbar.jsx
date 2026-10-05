import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import moneyyyLogo from "../assets/moneyyy-logo.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Financial Wellness", href: "#wellness" },
  { label: "About", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className="container-main"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px",
          }}
        >
          {/* Official Moneyyy Brand Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: 0,
              textDecoration: "none",
            }}
            aria-label="Moneyyy — Borrow · Bank · Invest"
          >
            <img
              src={moneyyyLogo}
              alt="Moneyyy - Borrow · Bank · Invest"
              className="navbar-brand-logo"
            />
          </button>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "var(--brand-dark-brown)",
                  padding: "4px 0",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--brand-orange)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--brand-dark-brown)")
                }
              >
                {link.label}
              </button>
            ))}
            <button
              className="btn-primary"
              style={{ padding: "10px 22px", fontSize: "0.875rem" }}
              onClick={() => handleNavClick("#contact")}
              aria-label="Get Started with Moneyyy"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--brand-dark-brown)",
              display: "none",
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "76px",
              left: 0,
              right: 0,
              background: "var(--brand-light-cream)",
              borderBottom: "1px solid rgba(201,116,26,0.15)",
              boxShadow: "0 16px 40px rgba(33,26,20,0.12)",
              zIndex: 999,
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--brand-dark-brown)",
                  padding: "14px 0",
                  textAlign: "left",
                  borderBottom: "1px solid rgba(201,116,26,0.08)",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              className="btn-primary"
              style={{ marginTop: "16px", justifyContent: "center" }}
              onClick={() => handleNavClick("#contact")}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-brand-logo {
          width: 165px;
          height: auto;
          object-fit: contain;
          display: block;
        }
        @media (max-width: 900px) {
          .navbar-brand-logo {
            width: 135px;
          }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
