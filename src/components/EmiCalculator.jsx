import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Info } from "lucide-react";

function calcEMI(principal, annualRate, tenureMonths) {
  if (!principal || !annualRate || !tenureMonths) return null;
  const r = annualRate / 12 / 100;
  if (r === 0) return principal / tenureMonths;
  const emi =
    (principal * r * Math.pow(1 + r, tenureMonths)) /
    (Math.pow(1 + r, tenureMonths) - 1);
  return emi;
}

function formatINR(val) {
  if (!val && val !== 0) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(val));
}

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(60);

  const emi = useMemo(
    () => calcEMI(loanAmount, interestRate, tenure),
    [loanAmount, interestRate, tenure]
  );

  const totalPayable = emi ? emi * tenure : null;
  const totalInterest = totalPayable ? totalPayable - loanAmount : null;

  const getSliderStyle = (val, min, max) => ({
    "--fill-percent": `${((val - min) / (max - min)) * 100}%`,
  });

  return (
    <section
      id="calculator"
      style={{
        background: "var(--brand-light-cream)",
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
          style={{ marginBottom: "56px" }}
        >
          <span className="section-label">EMI Calculator</span>
          <h2 className="section-heading">
            Get a{" "}
            <span style={{ color: "var(--brand-orange)", fontStyle: "italic" }}>
              quick estimate.
            </span>
          </h2>
          <p className="section-subheading">
            Use this illustrative calculator to understand possible EMI ranges.
            Actual terms depend on the lender and your eligibility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="calc-grid"
        >
          {/* LEFT: Inputs */}
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "40px",
              border: "1px solid rgba(201,116,26,0.12)",
              boxShadow: "0 4px 20px rgba(33,26,20,0.05)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "36px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "rgba(201,116,26,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--brand-orange)",
                }}
              >
                <Calculator size={20} />
              </div>
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--brand-dark-brown)",
                }}
              >
                EMI Calculator
              </h3>
            </div>

            {/* Loan Amount */}
            <div style={{ marginBottom: "32px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <label
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "var(--brand-dark-brown)",
                  }}
                  htmlFor="loan-amount"
                >
                  Loan Amount
                </label>
                <span
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 700,
                    color: "var(--brand-orange)",
                    fontSize: "1rem",
                  }}
                >
                  {formatINR(loanAmount)}
                </span>
              </div>
              <input
                id="loan-amount"
                type="range"
                className="calc-slider"
                min={100000}
                max={10000000}
                step={100000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                style={getSliderStyle(loanAmount, 100000, 10000000)}
                aria-label="Loan amount slider"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "6px",
                  fontSize: "0.72rem",
                  color: "var(--brand-warm-brown)",
                }}
              >
                <span>₹1L</span>
                <span>₹1Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div style={{ marginBottom: "32px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <label
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "var(--brand-dark-brown)",
                  }}
                  htmlFor="interest-rate"
                >
                  Interest Rate (p.a.)
                </label>
                <span
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 700,
                    color: "var(--brand-orange)",
                    fontSize: "1rem",
                  }}
                >
                  {interestRate.toFixed(1)}%
                </span>
              </div>
              <input
                id="interest-rate"
                type="range"
                className="calc-slider"
                min={6}
                max={24}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                style={getSliderStyle(interestRate, 6, 24)}
                aria-label="Interest rate slider"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "6px",
                  fontSize: "0.72rem",
                  color: "var(--brand-warm-brown)",
                }}
              >
                <span>6%</span>
                <span>24%</span>
              </div>
            </div>

            {/* Tenure */}
            <div style={{ marginBottom: "0" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <label
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "var(--brand-dark-brown)",
                  }}
                  htmlFor="tenure"
                >
                  Tenure
                </label>
                <span
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 700,
                    color: "var(--brand-orange)",
                    fontSize: "1rem",
                  }}
                >
                  {tenure >= 12
                    ? `${tenure / 12} yr${tenure / 12 !== 1 ? "s" : ""}`
                    : `${tenure} mo`}
                </span>
              </div>
              <input
                id="tenure"
                type="range"
                className="calc-slider"
                min={12}
                max={360}
                step={12}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                style={getSliderStyle(tenure, 12, 360)}
                aria-label="Tenure slider"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "6px",
                  fontSize: "0.72rem",
                  color: "var(--brand-warm-brown)",
                }}
              >
                <span>1 yr</span>
                <span>30 yrs</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* EMI Result */}
            <div
              style={{
                background: "var(--brand-dark-brown)",
                borderRadius: "24px",
                padding: "36px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201,116,26,0.15)",
                  pointerEvents: "none",
                }}
              />
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(248,241,228,0.55)",
                  marginBottom: "8px",
                }}
              >
                Monthly EMI
              </p>
              <div
                className="font-serif"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  color: "var(--brand-soft-orange)",
                  lineHeight: 1.1,
                  marginBottom: "4px",
                }}
              >
                {emi ? formatINR(emi) : "—"}
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(248,241,228,0.4)",
                }}
              >
                per month (illustrative)
              </p>
            </div>

            {/* Breakdowns */}
            {[
              {
                label: "Total Interest",
                val: formatINR(totalInterest),
                color: "var(--brand-orange)",
              },
              {
                label: "Total Amount Payable",
                val: formatINR(totalPayable),
                color: "var(--brand-dark-brown)",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "24px 28px",
                  border: "1px solid rgba(201,116,26,0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 2px 12px rgba(33,26,20,0.04)",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "var(--brand-warm-brown)",
                  }}
                >
                  {item.label}
                </span>
                <span
                  className="font-serif"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: item.color,
                  }}
                >
                  {item.val}
                </span>
              </div>
            ))}

            {/* Disclaimer */}
            <div
              style={{
                background: "rgba(201,116,26,0.06)",
                border: "1px solid rgba(201,116,26,0.18)",
                borderRadius: "14px",
                padding: "16px 18px",
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
              }}
            >
              <Info
                size={16}
                style={{
                  color: "var(--brand-orange)",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              />
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "var(--brand-warm-brown)",
                  lineHeight: 1.65,
                }}
              >
                <strong>Illustrative calculation only.</strong> Actual rates,
                eligibility, EMIs and terms depend on the selected lender and
                your financial profile.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
