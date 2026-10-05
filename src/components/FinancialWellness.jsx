import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const wellnessCards = [
  {
    number: "01",
    title: "CONTROL",
    subtitle: "Know where your money goes.",
    description:
      "Understanding your income, expenses and savings is the first step toward financial clarity. Small, conscious decisions compound over time.",
    accent: "#C9741A",
  },
  {
    number: "02",
    title: "SECURE",
    subtitle: "Build financial safety nets.",
    description:
      "An emergency fund, appropriate insurance and structured savings can provide stability when life takes an unexpected turn.",
    accent: "#B1842A",
  },
  {
    number: "03",
    title: "PREPARED",
    subtitle: "Plan for important goals and obligations.",
    description:
      "Whether it's education, a home, or retirement — planning ahead helps you stay on course and avoid reactive financial decisions.",
    accent: "#6D4320",
  },
  {
    number: "04",
    title: "FREEDOM",
    subtitle: "Build towards greater financial confidence.",
    description:
      "As your financial foundation strengthens, you gain the flexibility to make choices that reflect what truly matters to you.",
    accent: "#C9741A",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function FinancialWellness({ onExplore }) {
  return (
    <section
      id="wellness"
      style={{
        background: "var(--brand-dark-brown)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(201,116,26,0.1)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(201,116,26,0.08)",
          pointerEvents: "none",
        }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: "64px" }}
        >
          <span
            className="section-label"
            style={{ color: "var(--brand-soft-orange)" }}
          >
            <span
              style={{
                width: "24px",
                height: "2px",
                background: "var(--brand-soft-orange)",
                display: "inline-block",
                borderRadius: "2px",
                marginRight: "8px",
              }}
            />
            Financial Wellness
          </span>
          <h2
            className="font-serif section-heading"
            style={{
              color: "var(--brand-cream)",
              maxWidth: "680px",
              lineHeight: 1.2,
            }}
          >
            Financial wellness starts with{" "}
            <span
              style={{ color: "var(--brand-soft-orange)", fontStyle: "italic" }}
            >
              understanding your money.
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(248,241,228,0.65)",
              lineHeight: 1.75,
              maxWidth: "520px",
              marginTop: "12px",
            }}
          >
            A stronger financial future begins with simple, informed decisions —
            made with clarity and purpose.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "52px",
          }}
          className="wellness-grid"
        >
          {wellnessCards.map((card) => (
            <motion.div
              key={card.number}
              variants={cardVariant}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,116,26,0.15)",
                borderRadius: "20px",
                padding: "32px 24px",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                background: "rgba(201,116,26,0.07)",
                borderColor: "rgba(201,116,26,0.4)",
                y: -6,
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: `${card.accent}30`,
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                {card.number}
              </div>

              <h3
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: card.accent,
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  color: "var(--brand-cream)",
                  marginBottom: "14px",
                  lineHeight: 1.4,
                }}
              >
                {card.subtitle}
              </p>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(248,241,228,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            className="btn-primary"
            onClick={onExplore}
            aria-label="Explore Financial Wellness resources"
          >
            Explore Financial Wellness <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .wellness-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          .wellness-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .section-label { display: inline-flex; align-items: center; }
      `}</style>
    </section>
  );
}
