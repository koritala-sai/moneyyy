import { motion } from "framer-motion";
import { Shield, AlertCircle } from "lucide-react";

const trustPoints = [
  "Moneyyy helps customers explore financial products and connect with relevant financial solutions.",
  "Moneyyy is not the final lender. Final approval, interest rates, eligibility, pricing and terms are determined by the respective partner bank or financial institution.",
  "For investment-related products (NPS, Demat & Trading), investments are subject to market risk. This website does not constitute personalised investment advice. Please read all scheme-related documents carefully before investing.",
  "All information on this website is for general educational and informational purposes only.",
];

export default function TrustDisclaimer() {
  return (
    <section
      style={{
        background: "var(--brand-cream)",
        padding: "72px 0",
        borderTop: "1px solid rgba(201,116,26,0.12)",
        borderBottom: "1px solid rgba(201,116,26,0.12)",
      }}
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "32px",
            alignItems: "flex-start",
          }}
          className="trust-grid"
        >
          {/* Icon */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "rgba(201,116,26,0.1)",
              border: "1px solid rgba(201,116,26,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--brand-orange)",
              flexShrink: 0,
            }}
          >
            <Shield size={26} />
          </div>

          {/* Content */}
          <div>
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--brand-dark-brown)",
                marginBottom: "16px",
              }}
            >
              Important Disclosures
            </h3>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {trustPoints.map((point, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    fontSize: "0.875rem",
                    color: "var(--brand-warm-brown)",
                    lineHeight: 1.7,
                  }}
                >
                  <AlertCircle
                    size={15}
                    style={{
                      color: "var(--brand-orange)",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
