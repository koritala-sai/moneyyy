import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose your goal",
    description:
      "Identify what you're planning — a home, a vehicle, retirement savings or something else.",
  },
  {
    number: "02",
    title: "Explore your options",
    description:
      "Browse relevant financial avenues and understand what may be available for your requirement.",
  },
  {
    number: "03",
    title: "Share your requirement",
    description:
      "Fill in a simple enquiry form — no commitment, just a conversation starter.",
  },
  {
    number: "04",
    title: "Understand the next step",
    description:
      "Our team gets in touch to explain options, eligibility and what to expect.",
  },
  {
    number: "05",
    title: "Move forward with clarity",
    description:
      "With full information in hand, you decide your next move — at your own pace.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        background: "var(--brand-cream)",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            How It Works
          </span>
          <h2 className="section-heading">
            Simple.{" "}
            <span style={{ color: "var(--brand-orange)", fontStyle: "italic" }}>
              Transparent.
            </span>{" "}
            Supportive.
          </h2>
          <p
            className="section-subheading"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            From your first query to your next financial step — five stages,
            zero pressure.
          </p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="timeline-desktop">
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              position: "relative",
              gap: "0",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.number}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* Connector line (before the node, except first) */}
                {i > 0 && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "28px",
                      left: 0,
                      right: "50%",
                      height: "2px",
                      background:
                        "linear-gradient(90deg, var(--brand-orange), var(--brand-soft-orange))",
                      zIndex: 0,
                    }}
                  />
                )}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "28px",
                      left: "50%",
                      right: 0,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, var(--brand-soft-orange), rgba(201,116,26,0.25))",
                      zIndex: 0,
                    }}
                  />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "0 16px",
                    zIndex: 1,
                  }}
                >
                  {/* Node */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "var(--brand-orange)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      flexShrink: 0,
                      boxShadow: "0 4px 20px rgba(201,116,26,0.35)",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--brand-dark-brown)",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--brand-warm-brown)",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="timeline-mobile" style={{ display: "none" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: i < steps.length - 1 ? "0" : "0",
              }}
            >
              {/* Left: node + line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--brand-orange)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 16px rgba(201,116,26,0.3)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      width: "2px",
                      flex: 1,
                      minHeight: "40px",
                      background:
                        "linear-gradient(180deg, var(--brand-orange), rgba(201,116,26,0.2))",
                      margin: "8px 0",
                    }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div style={{ paddingBottom: i < steps.length - 1 ? "32px" : "0", paddingTop: "8px" }}>
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--brand-dark-brown)",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--brand-warm-brown)",
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-desktop { display: none !important; }
          .timeline-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}
