import { motion } from "framer-motion";
import { ArrowRight, Wallet, Home, TrendingUp } from "lucide-react";

const categories = [
  {
    key: "borrow",
    title: "BORROW",
    tagline: "For planned and immediate financial needs.",
    description:
      "Explore personal loans, home loans, vehicle loans and more — options designed around borrowing smarter.",
    icon: <Wallet size={32} />,
    accent: "#C9741A",
    solutions: ["Personal Loan", "Home Loan", "Loan Against Property", "Vehicle Loan", "Loan Against Securities"],
  },
  {
    key: "bank",
    title: "BANK",
    tagline: "For everyday banking needs.",
    description:
      "Discover banking solutions built for salaried professionals looking for more from their banking relationship.",
    icon: <Home size={32} />,
    accent: "#B1842A",
    solutions: ["Salary Account"],
  },
  {
    key: "invest",
    title: "INVEST",
    tagline: "For long-term financial goals.",
    description:
      "Explore disciplined investing avenues that may support your retirement planning and market participation goals.",
    icon: <TrendingUp size={32} />,
    accent: "#6D4320",
    solutions: ["NPS", "Demat & Trading"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function CategoryCards({ onExplore }) {
  return (
    <section
      id="explore"
      style={{
        background: "var(--brand-white)",
        padding: "100px 0",
      }}
    >
      <div className="container-main">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: "64px" }}
        >
          <span className="section-label">Explore Moneyyy</span>
          <h2 className="section-heading">
            One destination.{" "}
            <span style={{ color: "var(--brand-orange)", fontStyle: "italic" }}>
              Multiple financial avenues.
            </span>
          </h2>
          <p className="section-subheading">
            From borrowing to banking and investing, explore solutions based on
            your goals.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="cat-grid"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.key}
              variants={cardVariant}
              style={{
                background: "var(--brand-light-cream)",
                border: "1px solid rgba(201,116,26,0.12)",
                borderRadius: "24px",
                padding: "36px 32px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
              whileHover={{
                y: -8,
                borderColor: cat.accent,
                boxShadow: `0 20px 50px rgba(201,116,26,0.13)`,
              }}
              onClick={onExplore}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onExplore()}
              aria-label={`Explore ${cat.title} solutions`}
            >
              {/* Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "18px",
                  background: `${cat.accent}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: cat.accent,
                  marginBottom: "24px",
                  flexShrink: 0,
                }}
              >
                {cat.icon}
              </div>

              {/* Title */}
              <h3
                className="font-serif"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: cat.accent,
                  letterSpacing: "0.04em",
                  marginBottom: "8px",
                }}
              >
                {cat.title}
              </h3>

              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "var(--brand-dark-brown)",
                  marginBottom: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {cat.tagline}
              </p>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--brand-warm-brown)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                  flex: 1,
                }}
              >
                {cat.description}
              </p>

              {/* Solution pills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "28px",
                }}
              >
                {cat.solutions.map((s) => (
                  <span
                    key={s}
                    style={{
                      background: `${cat.accent}14`,
                      color: cat.accent,
                      borderRadius: "50px",
                      padding: "4px 12px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Arrow CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: cat.accent,
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  transition: "gap 0.2s ease",
                }}
                className="cat-arrow"
              >
                Explore{" "}
                <motion.span
                  whileHover={{ x: 6 }}
                  style={{ display: "inline-flex" }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cat-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .cat-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
