import { motion } from "framer-motion";
import { Eye, Shield, GitFork, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: <Eye size={28} />,
    title: "CLARITY",
    description:
      "Clear and simplified financial guidance. We help you understand what's available, what it means and what fits your situation.",
    accent: "#C9741A",
  },
  {
    icon: <Shield size={28} />,
    title: "TRANSPARENCY",
    description:
      "Honest and unbiased options. We present financial avenues without preference or pressure, so you can make informed decisions.",
    accent: "#B1842A",
  },
  {
    icon: <GitFork size={28} />,
    title: "CHOICE",
    description:
      "Explore relevant financial avenues. Whether you're borrowing, banking or investing, discover options that may be suitable for your goals.",
    accent: "#6D4320",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "LONG-TERM SUPPORT",
    description:
      "Support beyond a single transaction. As your financial journey evolves, we're here to help you navigate new goals and decisions.",
    accent: "#C9741A",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function WhyMoneyyy() {
  return (
    <section
      id="why"
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            Why Moneyyy
          </span>
          <h2 className="section-heading">
            Built on{" "}
            <span style={{ color: "var(--brand-orange)", fontStyle: "italic" }}>
              four principles.
            </span>
          </h2>
          <p
            className="section-subheading"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            Every interaction at Moneyyy is guided by clarity, transparency,
            genuine choice and lasting support.
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
            gap: "24px",
          }}
          className="why-grid"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={cardVariant}
              style={{
                background:
                  i % 2 === 0 ? "var(--brand-light-cream)" : "var(--brand-cream)",
                border: "1px solid rgba(201,116,26,0.12)",
                borderRadius: "20px",
                padding: "32px 24px",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                y: -8,
                borderColor: pillar.accent,
                boxShadow: `0 20px 50px rgba(201,116,26,0.1)`,
              }}
            >
              {/* Icon ring */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: `${pillar.accent}14`,
                  border: `1.5px solid ${pillar.accent}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: pillar.accent,
                  marginBottom: "24px",
                  transition: "transform 0.2s ease",
                }}
              >
                {pillar.icon}
              </div>

              <h3
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: pillar.accent,
                  marginBottom: "12px",
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--brand-warm-brown)",
                  lineHeight: 1.75,
                }}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
