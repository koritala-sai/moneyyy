import { Phone } from "lucide-react";

const footerSolutions = [
  "Personal Loan",
  "Home Loan",
  "Loan Against Property",
  "Vehicle Loan",
  "Loan Against Securities",
  "Salary Account",
  "NPS",
  "Demat & Trading",
];

const footerExplore = [
  { label: "Solutions", href: "#solutions" },
  { label: "Financial Wellness", href: "#wellness" },
  { label: "About", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const handleNavClick = (href) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--brand-dark-brown)",
        color: "var(--brand-cream)",
        padding: "80px 0 0",
      }}
      id="footer"
    >
      <div className="container-main">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1.5fr 1.5fr",
            gap: "48px",
            paddingBottom: "64px",
            borderBottom: "1px solid rgba(248,241,228,0.08)",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span
                className="font-serif"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--brand-cream)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                Money
                <span style={{ color: "var(--brand-soft-orange)" }}>yyy</span>
              </span>
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(248,241,228,0.5)",
                  display: "block",
                  marginTop: "4px",
                }}
              >
                Borrow · Bank · Invest
              </span>
            </div>

            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(248,241,228,0.55)",
                lineHeight: 1.75,
                marginBottom: "24px",
                maxWidth: "280px",
              }}
            >
              A financial-products and financial-wellness initiative associated
              with Prudent Capital. Helping you explore, understand and move
              forward with clarity.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "rgba(248,241,228,0.7)",
                fontSize: "0.875rem",
              }}
            >
              <Phone size={15} style={{ color: "var(--brand-soft-orange)" }} />
              <div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(248,241,228,0.4)",
                    marginBottom: "2px",
                  }}
                >
                  Praveen Yaganti
                </div>
                <a
                  href="tel:+919502872083"
                  style={{
                    color: "var(--brand-soft-orange)",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--brand-cream)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--brand-soft-orange)")
                  }
                >
                  +91 95028 72083
                </a>
              </div>
            </div>
          </div>

          {/* Explore column */}
          <div>
            <h4
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(248,241,228,0.5)",
                marginBottom: "20px",
              }}
            >
              Explore
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerExplore.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      color: "rgba(248,241,228,0.65)",
                      padding: 0,
                      transition: "color 0.2s",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand-soft-orange)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(248,241,228,0.65)")
                    }
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions column */}
          <div>
            <h4
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(248,241,228,0.5)",
                marginBottom: "20px",
              }}
            >
              Solutions
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerSolutions.map((sol) => (
                <li key={sol}>
                  <button
                    onClick={() => handleNavClick("#solutions")}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      color: "rgba(248,241,228,0.65)",
                      padding: 0,
                      transition: "color 0.2s",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand-soft-orange)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(248,241,228,0.65)")
                    }
                  >
                    {sol}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(248,241,228,0.5)",
                marginBottom: "20px",
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Privacy Policy", "Terms of Use", "Disclaimer"].map((item) => (
                <li key={item}>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      color: "rgba(248,241,228,0.65)",
                      padding: 0,
                      transition: "color 0.2s",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand-soft-orange)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(248,241,228,0.65)")
                    }
                    aria-label={item}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: "32px",
                padding: "16px",
                background: "rgba(201,116,26,0.08)",
                border: "1px solid rgba(201,116,26,0.15)",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(248,241,228,0.45)",
                  lineHeight: 1.65,
                }}
              >
                Investments are subject to market risk. Please read all
                scheme-related documents carefully before investing.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(248,241,228,0.35)",
            }}
          >
            © 2026 Moneyyy. All rights reserved. A Prudent Capital initiative.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(248,241,228,0.25)",
            }}
          >
            Moneyyy is not a lender. Subject to eligibility & lender terms.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
