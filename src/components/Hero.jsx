import { motion } from "framer-motion";
import { ArrowRight, Wallet, Home, TrendingUp } from "lucide-react";

const floatingBadges = [
  { label: "8 Financial Avenues", top: "12%", left: "6%", delay: 0 },
  { label: "Personalised Support", top: "68%", left: "2%", delay: 0.4 },
  { label: "Financial Wellness", top: "80%", right: "4%", delay: 0.8 },
];

const heroCards = [
  {
    key: "borrow",
    label: "BORROW",
    icon: <Wallet size={24} />,
    desc: "Smart financing for your needs",
    accent: "#C9741A",
    floatClass: "float-a",
    rotate: "-4deg",
  },
  {
    key: "bank",
    label: "BANK",
    icon: <Home size={24} />,
    desc: "Everyday banking solutions",
    accent: "#B1842A",
    floatClass: "float-b",
    rotate: "0deg",
  },
  {
    key: "invest",
    label: "INVEST",
    icon: <TrendingUp size={24} />,
    desc: "Build your financial future",
    accent: "#6D4320",
    floatClass: "float-c",
    rotate: "4deg",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero({ onExplore, onTalkToUs }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "var(--brand-light-cream)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Decorative background curves */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(201,116,26,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          border: "1px solid rgba(201,116,26,0.12)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-160px",
          left: "-100px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          border: "1px solid rgba(177,132,42,0.06)",
          pointerEvents: "none",
        }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
            minHeight: "calc(100vh - 80px)",
          }}
          className="hero-grid"
        >
          {/* LEFT: Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">A Prudent Capital Initiative</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "var(--brand-dark-brown)",
                marginBottom: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              Your Goals.{" "}
              <span
                style={{
                  color: "var(--brand-orange)",
                  display: "block",
                  fontStyle: "italic",
                }}
              >
                Our Support.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "var(--brand-dark-brown)",
                marginBottom: "12px",
                letterSpacing: "0.01em",
              }}
            >
              Borrow smarter. Bank better. Invest with purpose.
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "1rem",
                color: "var(--brand-warm-brown)",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "480px",
              }}
            >
              Moneyyy helps you explore financial solutions across borrowing,
              banking and investing — with clarity, transparency and support.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            >
              <button
                className="btn-primary"
                onClick={onExplore}
                aria-label="Explore Moneyyy financial solutions"
              >
                Explore Solutions <ArrowRight size={16} />
              </button>
              <button
                className="btn-secondary"
                onClick={onTalkToUs}
                aria-label="Talk to the Moneyyy team"
              >
                Talk to Us
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                gap: "36px",
                marginTop: "52px",
                flexWrap: "wrap",
              }}
            >
              {[
                { val: "8", label: "Financial Avenues" },
                { val: "3", label: "Core Categories" },
                { val: "1", label: "Dedicated Support" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-serif"
                    style={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--brand-orange)",
                      lineHeight: 1,
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--brand-warm-brown)",
                      marginTop: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Visual Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            style={{ position: "relative", height: "500px" }}
            className="hero-visual"
          >
            {/* SVG connecting path */}
            <svg
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
              }}
              viewBox="0 0 400 500"
              fill="none"
            >
              <path
                d="M 80 120 Q 200 220 320 180 Q 380 160 350 320 Q 320 420 200 400"
                stroke="rgba(201,116,26,0.15)"
                strokeWidth="2"
                strokeDasharray="8 6"
                fill="none"
              />
              <circle cx="80" cy="120" r="5" fill="#C9741A" opacity="0.5" />
              <circle cx="350" cy="320" r="5" fill="#B1842A" opacity="0.5" />
              <circle cx="200" cy="400" r="5" fill="#6D4320" opacity="0.5" />
            </svg>

            {/* Floating Cards */}
            {heroCards.map((card, i) => (
              <div
                key={card.key}
                className={card.floatClass}
                style={{
                  position: "absolute",
                  top:
                    i === 0 ? "5%" : i === 1 ? "35%" : "62%",
                  left:
                    i === 0 ? "4%" : i === 1 ? "30%" : "10%",
                  right: i === 2 ? "4%" : "auto",
                  zIndex: i === 1 ? 3 : 2,
                  transform: `rotate(${card.rotate})`,
                  transformOrigin: "center center",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: `1.5px solid ${card.accent}22`,
                    borderRadius: "18px",
                    padding: "20px 24px",
                    boxShadow: `0 12px 36px rgba(33,26,20,0.1), 0 2px 8px ${card.accent}22`,
                    minWidth: "170px",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${card.accent}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: card.accent,
                      marginBottom: "12px",
                    }}
                  >
                    {card.icon}
                  </div>
                  <div
                    className="font-serif"
                    style={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: card.accent,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {card.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--brand-warm-brown)",
                      marginTop: "4px",
                      fontWeight: 500,
                    }}
                  >
                    {card.desc}
                  </div>
                </div>
              </div>
            ))}

            {/* Floating Badges */}
            {floatingBadges.map((b) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + b.delay, duration: 0.5 }}
                style={{
                  position: "absolute",
                  top: b.top,
                  left: b.left,
                  right: b.right,
                  background: "var(--brand-orange)",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "8px 16px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 16px rgba(201,116,26,0.35)",
                  whiteSpace: "nowrap",
                  zIndex: 4,
                }}
              >
                <span
                  className="pulse-dot"
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#fff",
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                />
                {b.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-top: 20px;
            padding-bottom: 60px;
          }
          .hero-visual {
            height: 340px !important;
          }
        }
        @media (max-width: 576px) {
          .hero-visual {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
