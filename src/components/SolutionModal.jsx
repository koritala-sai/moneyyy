import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ExternalLink, ChevronRight } from "lucide-react";
import { zohoForms } from "../config/zohoForms";

export default function SolutionModal({ solution, onClose }) {
  const [showForm, setShowForm] = useState(false);

  if (!solution) return null;

  const formUrl = zohoForms[solution.zohoKey];
  const isPlaceholder = !formUrl || formUrl.startsWith("PASTE_ZOHO");

  const categoryColors = {
    Borrow: "#C9741A",
    Bank: "#B1842A",
    Invest: "#6D4320",
  };
  const accent = categoryColors[solution.category] || "#C9741A";

  return (
    <AnimatePresence>
      {solution && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          role="dialog"
          aria-modal="true"
          aria-label={`${solution.title} details`}
        >
          <motion.div
            className={`modal-box ${showForm ? "modal-iframe-box" : ""}`}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "var(--brand-cream)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--brand-dark-brown)",
                zIndex: 10,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#e5d5c0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--brand-cream)")
              }
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!showForm ? (
              /* ── Product Detail View ── */
              <div style={{ padding: "40px" }}>
                {/* Header */}
                <div style={{ marginBottom: "28px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: `${accent}14`,
                      color: accent,
                      borderRadius: "50px",
                      padding: "4px 12px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    {solution.category} · {solution.number}
                  </span>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--brand-dark-brown)",
                      lineHeight: 1.15,
                      marginBottom: "12px",
                    }}
                  >
                    {solution.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--brand-warm-brown)",
                      lineHeight: 1.7,
                    }}
                  >
                    {solution.longDescription}
                  </p>
                </div>

                <div className="divider" style={{ marginBottom: "28px" }} />

                {/* Suitable For */}
                <div style={{ marginBottom: "32px" }}>
                  <h3
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--brand-warm-brown)",
                      marginBottom: "14px",
                    }}
                  >
                    Suitable For
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {solution.suitableFor.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontSize: "0.9rem",
                          color: "var(--brand-dark-brown)",
                          fontWeight: 500,
                        }}
                      >
                        <span
                          style={{
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            background: `${accent}18`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: accent,
                            flexShrink: 0,
                          }}
                        >
                          <Check size={13} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div
                  style={{
                    background: "var(--brand-light-cream)",
                    borderRadius: "16px",
                    padding: "24px",
                    border: `1px solid ${accent}22`,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      color: "var(--brand-dark-brown)",
                      marginBottom: "6px",
                      fontSize: "0.95rem",
                    }}
                  >
                    Ready to discuss your requirement?
                  </p>
                  <p
                    style={{
                      fontSize: "0.84rem",
                      color: "var(--brand-warm-brown)",
                      marginBottom: "18px",
                      lineHeight: 1.6,
                    }}
                  >
                    Subject to eligibility and lender terms. Share your
                    requirement and we'll help you understand the next step.
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => setShowForm(true)}
                    style={{ width: "100%", justifyContent: "center" }}
                    aria-label={`Get started with ${solution.title}`}
                  >
                    Get Started <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ) : (
              /* ── Zoho Form View ── */
              <div>
                {/* Form Header */}
                <div
                  style={{
                    padding: "32px 40px 24px",
                    borderBottom: "1px solid rgba(201,116,26,0.1)",
                  }}
                >
                  <button
                    onClick={() => setShowForm(false)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--brand-orange)",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginBottom: "12px",
                      padding: 0,
                    }}
                  >
                    ← Back to details
                  </button>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "var(--brand-dark-brown)",
                    }}
                  >
                    Let's understand your requirement.
                  </h2>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--brand-warm-brown)",
                      marginTop: "6px",
                    }}
                  >
                    For: <strong>{solution.title}</strong>
                  </p>
                </div>

                <div style={{ padding: "0 40px 32px" }}>
                  {isPlaceholder ? (
                    /* Placeholder when URL not yet configured */
                    <div
                      style={{
                        textAlign: "center",
                        padding: "48px 24px",
                        borderRadius: "16px",
                        background: "var(--brand-light-cream)",
                        border: "1.5px dashed rgba(201,116,26,0.25)",
                        marginTop: "28px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "2.5rem",
                          marginBottom: "16px",
                          opacity: 0.5,
                        }}
                      >
                        📋
                      </div>
                      <h3
                        style={{
                          fontFamily: "Playfair Display, serif",
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "var(--brand-dark-brown)",
                          marginBottom: "10px",
                        }}
                      >
                        Form Coming Soon
                      </h3>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--brand-warm-brown)",
                          lineHeight: 1.7,
                          marginBottom: "24px",
                          maxWidth: "340px",
                          margin: "0 auto 24px",
                        }}
                      >
                        The enquiry form for <strong>{solution.title}</strong>{" "}
                        is being configured. In the meantime, you can reach us
                        directly.
                      </p>
                      <a
                        href="tel:+919502872083"
                        className="btn-primary"
                        style={{
                          display: "inline-flex",
                          textDecoration: "none",
                        }}
                      >
                        Call Us: +91 95028 72083
                      </a>
                    </div>
                  ) : (
                    /* Actual Zoho iframe */
                    <div style={{ marginTop: "24px" }}>
                      <iframe
                        src={formUrl}
                        title={`Moneyyy enquiry form — ${solution.title}`}
                        width="100%"
                        height="650"
                        frameBorder="0"
                        style={{
                          borderRadius: "12px",
                          border: "1px solid rgba(201,116,26,0.12)",
                          display: "block",
                        }}
                        aria-label={`Enquiry form for ${solution.title}`}
                      />
                      <div
                        style={{
                          marginTop: "16px",
                          padding: "14px",
                          background: "var(--brand-light-cream)",
                          borderRadius: "12px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--brand-warm-brown)",
                          }}
                        >
                          If the form doesn't load, open it in a new tab.
                        </span>
                        <a
                          href={formUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            color: "var(--brand-orange)",
                            fontWeight: 700,
                            fontSize: "0.82rem",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Open Form <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
