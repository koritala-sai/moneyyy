import { motion } from "framer-motion";
import {
  Wallet,
  House,
  Building2,
  Car,
  ChartNoAxesCombined,
  WalletCards,
  Sprout,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { solutions } from "../data/solutions";

const iconMap = {
  Wallet,
  House,
  Building2,
  Car,
  ChartNoAxesCombined,
  WalletCards,
  Sprout,
  TrendingUp,
};

const categoryColors = {
  Borrow: "#C9741A",
  Bank: "#B1842A",
  Invest: "#6D4320",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SolutionCards({ onCardClick }) {
  return (
    <section
      id="solutions"
      style={{
        background: "var(--brand-cream)",
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
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            8 Financial Avenues
          </span>
          <h2 className="section-heading">
            Find the solution that{" "}
            <span style={{ color: "var(--brand-orange)", fontStyle: "italic" }}>
              fits your goal.
            </span>
          </h2>
          <p
            className="section-subheading"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Explore our financial avenues and take the next step when you're
            ready.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
          className="solution-grid"
        >
          {solutions.map((sol) => {
            const IconComponent = iconMap[sol.icon] || Wallet;
            const accent = categoryColors[sol.category] || "#C9741A";

            return (
              <motion.div
                key={sol.id}
                variants={cardVariant}
                onClick={() => onCardClick(sol)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onCardClick(sol)}
                aria-label={`View details for ${sol.title}`}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(201,116,26,0.1)",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  minHeight: "220px",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{
                  y: -6,
                  borderColor: accent,
                  boxShadow: `0 16px 40px rgba(201,116,26,0.14)`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Number */}
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: `${accent}66`,
                    marginBottom: "16px",
                    textTransform: "uppercase",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  {sol.number}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: `${accent}14`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: accent,
                    marginBottom: "16px",
                    flexShrink: 0,
                    transition: "transform 0.2s ease",
                  }}
                >
                  <IconComponent size={22} />
                </div>

                {/* Category pill */}
                <span
                  style={{
                    display: "inline-block",
                    background: `${accent}12`,
                    color: accent,
                    borderRadius: "50px",
                    padding: "3px 10px",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                    alignSelf: "flex-start",
                  }}
                >
                  {sol.category}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--brand-dark-brown)",
                    marginBottom: "8px",
                    lineHeight: 1.25,
                  }}
                >
                  {sol.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--brand-warm-brown)",
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: "20px",
                  }}
                >
                  {sol.description}
                </p>

                {/* Explore CTA */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: accent,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Explore <ArrowRight size={14} />
                </div>

                {/* Hover corner decoration */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: `${accent}08`,
                    transition: "transform 0.3s ease",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .solution-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .solution-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .solution-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
