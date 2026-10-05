import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faq"
      style={{
        background: "var(--brand-white)",
        padding: "100px 0",
      }}
    >
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "flex-start",
          }}
          className="faq-layout"
        >
          {/* Left: heading */}
          <div style={{ position: "sticky", top: "100px" }}>
            <span className="section-label">FAQ</span>
            <h2 className="section-heading">
              Questions?{" "}
              <span
                style={{ color: "var(--brand-orange)", fontStyle: "italic" }}
              >
                We've got answers.
              </span>
            </h2>
            <p className="section-subheading">
              Everything you need to know about Moneyyy and how we work. Can't
              find what you're looking for? Talk to us directly.
            </p>
            <div style={{ marginTop: "32px" }}>
              <a
                href="tel:+919502872083"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--brand-orange)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                📞 +91 95028 72083
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  style={{
                    border: isOpen
                      ? "1.5px solid var(--brand-orange)"
                      : "1.5px solid rgba(201,116,26,0.15)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "border-color 0.25s ease",
                    background: isOpen
                      ? "var(--brand-light-cream)"
                      : "var(--brand-white)",
                  }}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "20px 24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "16px",
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                  >
                    <span
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: isOpen
                          ? "var(--brand-orange)"
                          : "var(--brand-dark-brown)",
                        lineHeight: 1.4,
                        transition: "color 0.25s ease",
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        color: isOpen
                          ? "var(--brand-orange)"
                          : "var(--brand-warm-brown)",
                        flexShrink: 0,
                      }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            padding: "0 24px 20px",
                            borderTop: "1px solid rgba(201,116,26,0.1)",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "0.9rem",
                              color: "var(--brand-warm-brown)",
                              lineHeight: 1.8,
                              paddingTop: "16px",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-layout {
            grid-template-columns: 1fr !important;
          }
          .faq-layout > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
