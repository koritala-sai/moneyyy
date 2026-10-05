import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA({ onExplore, onTalkToUs }) {
  return (
    <section
      id="contact"
      style={{
        background: "var(--brand-dark-brown)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background circles */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "500px",
          height: "500px",
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
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(201,116,26,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          border: "1px solid rgba(201,116,26,0.05)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-main"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--brand-soft-orange)",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "2px",
                background: "var(--brand-soft-orange)",
                display: "inline-block",
                borderRadius: "2px",
              }}
            />
            Get Started
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--brand-cream)",
              lineHeight: 1.15,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Not sure where to start?
            <br />
            <span
              style={{
                color: "var(--brand-soft-orange)",
                fontStyle: "italic",
              }}
            >
              Let's talk it through.
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(248,241,228,0.65)",
              lineHeight: 1.75,
              marginBottom: "48px",
              maxWidth: "520px",
              margin: "0 auto 48px",
            }}
          >
            Tell us what you're planning. We'll help you understand the
            relevant options — with no pressure and no commitment.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-primary"
              onClick={onExplore}
              style={{ padding: "16px 32px", fontSize: "1rem" }}
              aria-label="Explore Moneyyy solutions"
            >
              Explore Solutions <ArrowRight size={18} />
            </button>
            <button
              className="btn-outline-white"
              onClick={onTalkToUs}
              style={{ padding: "16px 32px", fontSize: "1rem" }}
              aria-label="Talk to the Moneyyy team"
            >
              <MessageCircle size={18} /> Talk to Us
            </button>
          </div>

          {/* Contact line */}
          <div
            style={{
              marginTop: "52px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(201,116,26,0.12)",
              display: "flex",
              gap: "32px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(248,241,228,0.4)",
                  marginBottom: "4px",
                }}
              >
                Speak with
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--brand-cream)",
                }}
              >
                Praveen Yaganti
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(248,241,228,0.4)",
                  marginBottom: "4px",
                }}
              >
                Phone
              </p>
              <a
                href="tel:+919502872083"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--brand-soft-orange)",
                  textDecoration: "none",
                }}
              >
                +91 95028 72083
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
