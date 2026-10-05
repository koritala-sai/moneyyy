import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Car,
  User,
  Building2,
  Banknote,
  Landmark,
  Sprout,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { goals, getGoalSolutions } from "../data/goals";

const iconMap = {
  Home,
  Car,
  User,
  Building2,
  Banknote,
  Landmark,
  Sprout,
  TrendingUp,
};

const categoryColors = {
  Borrow: "#C9741A",
  Bank: "#B1842A",
  Invest: "#6D4320",
};

export default function Goals({ onSolutionClick }) {
  const [activeGoal, setActiveGoal] = useState(null);

  const relevantSolutions = activeGoal ? getGoalSolutions(activeGoal) : [];

  return (
    <section
      id="goals"
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
          style={{ textAlign: "center", marginBottom: "52px" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            Financial Goals
          </span>
          <h2 className="section-heading">
            What's your next{" "}
            <span style={{ color: "var(--brand-orange)", fontStyle: "italic" }}>
              financial goal?
            </span>
          </h2>
          <p
            className="section-subheading"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Select a goal to discover which Moneyyy solutions may be relevant
            for you.
          </p>
        </motion.div>

        {/* Goal selector grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            marginBottom: "52px",
          }}
        >
          {goals.map((goal) => {
            const IconComp = iconMap[goal.icon] || Home;
            const isActive = activeGoal === goal.id;

            return (
              <button
                key={goal.id}
                onClick={() =>
                  setActiveGoal(isActive ? null : goal.id)
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 22px",
                  borderRadius: "50px",
                  border: isActive
                    ? "1.5px solid var(--brand-orange)"
                    : "1.5px solid rgba(201,116,26,0.2)",
                  background: isActive
                    ? "var(--brand-orange)"
                    : "var(--brand-light-cream)",
                  color: isActive ? "#fff" : "var(--brand-dark-brown)",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isActive
                    ? "0 6px 20px rgba(201,116,26,0.35)"
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "var(--brand-orange)";
                    e.currentTarget.style.color = "var(--brand-orange)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor =
                      "rgba(201,116,26,0.2)";
                    e.currentTarget.style.color = "var(--brand-dark-brown)";
                  }
                }}
                aria-pressed={isActive}
                aria-label={`Select goal: ${goal.label}`}
              >
                <IconComp
                  size={17}
                  style={{ flexShrink: 0 }}
                  aria-hidden="true"
                />
                {goal.label}
              </button>
            );
          })}
        </motion.div>

        {/* Relevant solutions */}
        <AnimatePresence mode="wait">
          {activeGoal && relevantSolutions.length > 0 && (
            <motion.div
              key={activeGoal}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <div
                style={{
                  padding: "36px",
                  background: "var(--brand-light-cream)",
                  borderRadius: "24px",
                  border: "1px solid rgba(201,116,26,0.15)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--brand-warm-brown)",
                    marginBottom: "20px",
                  }}
                >
                  Relevant Moneyyy Solutions
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                  }}
                >
                  {relevantSolutions.map((sol) => {
                    const accent = categoryColors[sol.category] || "#C9741A";
                    return (
                      <button
                        key={sol.id}
                        onClick={() => onSolutionClick(sol)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          padding: "16px 20px",
                          background: "#fff",
                          border: `1px solid ${accent}22`,
                          borderRadius: "16px",
                          cursor: "pointer",
                          transition: "all 0.25s ease",
                          minWidth: "220px",
                          textAlign: "left",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = accent;
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow = `0 8px 24px ${accent}22`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${accent}22`;
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                        aria-label={`Explore ${sol.title}`}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "12px",
                            background: `${accent}14`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: accent,
                            flexShrink: 0,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Playfair Display, serif",
                              fontSize: "0.9rem",
                              fontWeight: 700,
                            }}
                          >
                            {sol.number}
                          </span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontFamily: "Playfair Display, serif",
                              fontWeight: 700,
                              fontSize: "0.95rem",
                              color: "var(--brand-dark-brown)",
                              marginBottom: "2px",
                            }}
                          >
                            {sol.title}
                          </div>
                          <div
                            style={{
                              fontSize: "0.75rem",
                              color: "var(--brand-warm-brown)",
                            }}
                          >
                            {sol.category}
                          </div>
                        </div>
                        <ArrowRight size={14} style={{ color: accent, flexShrink: 0 }} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {activeGoal && relevantSolutions.length === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: "center", color: "var(--brand-warm-brown)", padding: "40px" }}
            >
              <p>No specific solutions mapped. Please contact us to discuss.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
