"use client";

import { useMemo, useState, type CSSProperties } from "react";

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

function cleanDecimalInput(value: string) {
  const normalized = value.replace(",", ".");
  let result = "";
  let hasDot = false;

  for (const char of normalized) {
    if (char >= "0" && char <= "9") {
      result += char;
      continue;
    }

    if (char === "." && !hasDot) {
      result += char;
      hasDot = true;
    }
  }

  return result;
}

function cleanIntegerInput(value: string) {
  return value.replace(/\D/g, "");
}

function parseDecimal(value: string) {
  if (value.trim() === "" || value === ".") return 0;
  return Number(value);
}

function calculateCompoundInterest({
  initialInvestment,
  monthlyContribution,
  monthlyRatePercent,
  investmentMonths,
}: {
  initialInvestment: number;
  monthlyContribution: number;
  monthlyRatePercent: number;
  investmentMonths: number;
}) {
  const monthlyRate = monthlyRatePercent / 100;
  let finalAmount = initialInvestment;

  for (let month = 0; month < investmentMonths; month++) {
    finalAmount = finalAmount * (1 + monthlyRate) + monthlyContribution;
  }

  const totalInvested =
    initialInvestment + monthlyContribution * investmentMonths;

  const interestEarned = finalAmount - totalInvested;

  return {
    finalAmount,
    totalInvested,
    interestEarned,
  };
}

export default function CompoundCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [monthlyRate, setMonthlyRate] = useState("");
  const [investmentMonths, setInvestmentMonths] = useState("");
  const [hasCalculated, setHasCalculated] = useState(false);

  const initialInvestmentValue = parseDecimal(initialInvestment);
  const monthlyContributionValue = parseDecimal(monthlyContribution);
  const monthlyRateValue = parseDecimal(monthlyRate);
  const investmentMonthsValue =
    investmentMonths.trim() === "" ? 0 : Number(investmentMonths);

  const hasAnyInput =
    initialInvestment !== "" ||
    monthlyContribution !== "" ||
    monthlyRate !== "" ||
    investmentMonths !== "";

  const hasInvalidNumber =
    Number.isNaN(initialInvestmentValue) ||
    Number.isNaN(monthlyContributionValue) ||
    Number.isNaN(monthlyRateValue) ||
    Number.isNaN(investmentMonthsValue);

  const hasNegativeValues =
    initialInvestmentValue < 0 ||
    monthlyContributionValue < 0 ||
    monthlyRateValue < 0 ||
    investmentMonthsValue < 0;

  const hasNonIntegerMonths =
    investmentMonths !== "" && !Number.isInteger(investmentMonthsValue);

  const hasUnrealisticRate = monthlyRateValue > 100;
  const hasUnrealisticMonths = investmentMonthsValue > 1200;

  const canCalculate =
    hasAnyInput &&
    !hasInvalidNumber &&
    !hasNegativeValues &&
    !hasNonIntegerMonths &&
    !hasUnrealisticRate &&
    !hasUnrealisticMonths;

  const results = useMemo(() => {
    if (!canCalculate) return null;

    return calculateCompoundInterest({
      initialInvestment: initialInvestmentValue || 0,
      monthlyContribution: monthlyContributionValue || 0,
      monthlyRatePercent: monthlyRateValue || 0,
      investmentMonths: investmentMonthsValue || 0,
    });
  }, [
    canCalculate,
    initialInvestmentValue,
    monthlyContributionValue,
    monthlyRateValue,
    investmentMonthsValue,
  ]);

  const handleCalculate = () => {
    setHasCalculated(true);
  };

  const clearFields = () => {
    setInitialInvestment("");
    setMonthlyContribution("");
    setMonthlyRate("");
    setInvestmentMonths("");
    setHasCalculated(false);
  };

  const showResults = hasCalculated && canCalculate && results;

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <div style={styles.topRow}>
          <span style={styles.topBadge}>Free Investment Tool</span>
          <span style={styles.trustBadge}>Fast & easy to use</span>
        </div>

        <h1 style={styles.title}>Compound Interest Calculator (Free & Easy)</h1>

        <p style={styles.description}>
          Estimate your future balance with compound interest and recurring
          monthly contributions.
        </p>

        <div style={styles.form}>
          <div style={styles.field}>
            <label htmlFor="initialInvestment" style={styles.label}>
              Initial Investment ($)
            </label>
            <input
              id="initialInvestment"
              type="text"
              inputMode="decimal"
              placeholder="1000"
              value={initialInvestment}
              onChange={(e) =>
                setInitialInvestment(cleanDecimalInput(e.target.value))
              }
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label htmlFor="monthlyContribution" style={styles.label}>
              Monthly Contribution ($)
            </label>
            <input
              id="monthlyContribution"
              type="text"
              inputMode="decimal"
              placeholder="250"
              value={monthlyContribution}
              onChange={(e) =>
                setMonthlyContribution(cleanDecimalInput(e.target.value))
              }
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label htmlFor="monthlyRate" style={styles.label}>
              Interest Rate (% per month)
            </label>
            <input
              id="monthlyRate"
              type="text"
              inputMode="decimal"
              placeholder="1.0"
              value={monthlyRate}
              onChange={(e) => setMonthlyRate(cleanDecimalInput(e.target.value))}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label htmlFor="investmentMonths" style={styles.label}>
              Investment Period (months)
            </label>
            <input
              id="investmentMonths"
              type="text"
              inputMode="numeric"
              placeholder="24"
              value={investmentMonths}
              onChange={(e) =>
                setInvestmentMonths(cleanIntegerInput(e.target.value))
              }
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.actions}>
          <button onClick={handleCalculate} style={styles.primaryButton}>
            Calculate
          </button>

          <button onClick={clearFields} style={styles.secondaryButton}>
            Reset Calculator
          </button>
        </div>

        {hasNegativeValues && (
          <p style={styles.error}>
            Please enter only non-negative values.
          </p>
        )}

        {hasNonIntegerMonths && (
          <p style={styles.error}>
            Investment period must be a whole number of months.
          </p>
        )}

        {hasUnrealisticRate && (
          <p style={styles.error}>
            Please enter a realistic monthly rate between 0 and 100.
          </p>
        )}

        {hasUnrealisticMonths && (
          <p style={styles.error}>
            Investment period is too large. Please use 1200 months or less.
          </p>
        )}

        {!hasCalculated &&
          !hasNegativeValues &&
          !hasNonIntegerMonths &&
          !hasUnrealisticRate &&
          !hasUnrealisticMonths && (
            <div style={styles.resultBox}>
              <div style={styles.resultHeader}>
                <h2 style={styles.resultTitle}>Results</h2>
                <span style={styles.resultHeaderBadge}>Projection</span>
              </div>

              <p style={styles.placeholderText}>
                Enter your numbers and click Calculate to see your future
                balance.
              </p>
            </div>
          )}

        {showResults && (
          <div style={styles.resultBox}>
            <div style={styles.resultHeader}>
              <h2 style={styles.resultTitle}>Your Projection</h2>
              <span style={styles.resultHeaderBadge}>Estimated</span>
            </div>

            <div style={styles.heroValueBox}>
              <p style={styles.heroValueLabel}>Total Value</p>
              <p style={styles.heroValue}>{formatCurrency(results.finalAmount)}</p>
              <p style={styles.heroSubtext}>
                Based on your current assumptions over {investmentMonthsValue}{" "}
                months.
              </p>
            </div>

            <div style={styles.resultRow}>
              <span style={styles.resultLabel}>Your Investment</span>
              <strong style={styles.resultValue}>
                {formatCurrency(results.totalInvested)}
              </strong>
            </div>

            <div style={styles.profitRow}>
              <span style={styles.resultLabel}>Profit Earned</span>
              <strong style={styles.resultValueGreen}>
                {formatCurrency(results.interestEarned)}
              </strong>
            </div>
          </div>
        )}

        <div style={styles.noteBox}>
          <p style={styles.noteTitle}>How this works</p>
          <p style={styles.noteText}>
            This calculator assumes monthly compounding and end-of-month
            contributions.
          </p>
          <p style={styles.noteText}>
            Results are estimates for educational purposes only and should not
            be considered financial advice.
          </p>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #eef4ff 0%, #f8fbff 45%, #f3f7fc 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "32px 20px",
    fontFamily:
      'Inter, Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  card: {
    width: "100%",
    maxWidth: "780px",
    backgroundColor: "#ffffff",
    borderRadius: "28px",
    padding: "34px",
    boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
    border: "1px solid rgba(37, 99, 235, 0.08)",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "18px",
  },
  topBadge: {
    display: "inline-block",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#1d4ed8",
    backgroundColor: "#dbeafe",
    padding: "8px 12px",
    borderRadius: "999px",
  },
  trustBadge: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#475569",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    padding: "8px 12px",
    borderRadius: "999px",
  },
  title: {
    fontSize: "44px",
    lineHeight: "1.08",
    margin: "0 0 12px 0",
    color: "#0f172a",
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },
  description: {
    fontSize: "17px",
    color: "#475569",
    marginBottom: "28px",
    lineHeight: "1.6",
    maxWidth: "650px",
  },
  form: {
    display: "grid",
    gap: "18px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    fontWeight: 700,
    marginBottom: "8px",
    color: "#1e293b",
  },
  input: {
    width: "100%",
    padding: "15px 16px",
    fontSize: "16px",
    borderRadius: "14px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    outline: "none",
    boxSizing: "border-box",
  },
  actions: {
    marginTop: "22px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    flexWrap: "wrap",
  },
  primaryButton: {
    border: "none",
    borderRadius: "14px",
    padding: "14px 20px",
    fontSize: "15px",
    fontWeight: 800,
    cursor: "pointer",
    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    color: "#ffffff",
    boxShadow: "0 12px 24px rgba(59, 130, 246, 0.28)",
  },
  secondaryButton: {
    border: "1px solid #cbd5e1",
    borderRadius: "14px",
    padding: "14px 20px",
    fontSize: "15px",
    fontWeight: 800,
    cursor: "pointer",
    backgroundColor: "#ffffff",
    color: "#0f172a",
  },
  error: {
    marginTop: "16px",
    color: "#991b1b",
    backgroundColor: "#fee2e2",
    padding: "13px 14px",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: 600,
  },
  resultBox: {
    marginTop: "28px",
    background: "linear-gradient(180deg, #0f172a 0%, #172554 100%)",
    borderRadius: "22px",
    padding: "24px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.24)",
  },
  resultHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "18px",
  },
  resultTitle: {
    margin: 0,
    fontSize: "22px",
    color: "#ffffff",
    fontWeight: 800,
  },
  resultHeaderBadge: {
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#bfdbfe",
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: "8px 10px",
    borderRadius: "999px",
  },
  placeholderText: {
    margin: 0,
    color: "#cbd5e1",
    fontSize: "15px",
    lineHeight: "1.6",
  },
  heroValueBox: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "18px",
    marginBottom: "16px",
  },
  heroValueLabel: {
    margin: "0 0 8px 0",
    color: "#cbd5e1",
    fontSize: "13px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  heroValue: {
    margin: 0,
    color: "#ffffff",
    fontSize: "34px",
    fontWeight: 800,
    lineHeight: "1.1",
  },
  heroSubtext: {
    margin: "8px 0 0 0",
    color: "#94a3b8",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  resultRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    padding: "14px 0",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    color: "#e2e8f0",
    fontSize: "16px",
  },
  profitRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    padding: "16px 0 0 0",
    color: "#e2e8f0",
    fontSize: "16px",
  },
  resultLabel: {
    color: "#cbd5e1",
    fontWeight: 600,
  },
  resultValue: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: 700,
  },
  resultValueGreen: {
    color: "#4ade80",
    fontSize: "22px",
    fontWeight: 800,
  },
  noteBox: {
    marginTop: "24px",
    padding: "18px",
    borderRadius: "18px",
    backgroundColor: "#f8fafc",
    border: "1px solid #dbeafe",
  },
  noteTitle: {
    margin: "0 0 8px 0",
    fontSize: "14px",
    fontWeight: 800,
    color: "#1d4ed8",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },
  noteText: {
    margin: "6px 0 0 0",
    fontSize: "14px",
    color: "#475569",
    lineHeight: "1.6",
  },
};