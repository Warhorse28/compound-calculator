"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./CompoundCalculator.module.css";

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

function formatPercent(value: number) {
  return `${value.toFixed(2)}%`;
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
  const years = investmentMonths / 12;
  const monthlyIncomeAt4Percent = (finalAmount * 0.04) / 12;
  const totalReturnPercent =
    totalInvested > 0 ? (interestEarned / totalInvested) * 100 : 0;

  return {
    finalAmount,
    totalInvested,
    interestEarned,
    years,
    monthlyIncomeAt4Percent,
    totalReturnPercent,
  };
}

function getProjectionMessage(monthlyIncome: number) {
  if (monthlyIncome < 2000) {
    return "This is a start, but for most households it would still be a fairly lean retirement income.";
  }
  if (monthlyIncome < 4000) {
    return "This could support a tighter retirement plan, especially in lower-cost areas.";
  }
  if (monthlyIncome < 7000) {
    return "This starts to look more workable for many retirees, depending on spending and location.";
  }
  if (monthlyIncome < 10000) {
    return "This points to a comfortable retirement range in many situations.";
  }
  if (monthlyIncome < 15000) {
    return "This suggests a strong retirement income with much more flexibility and breathing room.";
  }
  return "This points to a high-income retirement scenario with a wide financial margin.";
}

function getGrowthLabel(interestEarned: number, totalInvested: number) {
  if (totalInvested <= 0) return "No investment base yet.";
  const ratio = interestEarned / totalInvested;

  if (ratio < 0.2) return "Growth is still early.";
  if (ratio < 0.5) return "Compounding is starting to matter.";
  if (ratio < 1) return "Your gains are becoming meaningful.";
  return "Compounding is doing heavy lifting.";
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

  const handleCalculate = () => setHasCalculated(true);

  const clearFields = () => {
    setInitialInvestment("");
    setMonthlyContribution("");
    setMonthlyRate("");
    setInvestmentMonths("");
    setHasCalculated(false);
  };

  const showResults = hasCalculated && canCalculate && results;
  const showPlaceholder =
    !hasCalculated &&
    !hasNegativeValues &&
    !hasNonIntegerMonths &&
    !hasUnrealisticRate &&
    !hasUnrealisticMonths;

  const estimatedMonthlyIncome = results
    ? results.monthlyIncomeAt4Percent
    : 0;

  const projectionMessage = getProjectionMessage(estimatedMonthlyIncome);
  const growthLabel = results
    ? getGrowthLabel(results.interestEarned, results.totalInvested)
    : "";

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.badgeRow}>
              <span className={styles.badgePrimary}>Free investment tool</span>
              <span className={styles.badgeSecondary}>Built for real planning</span>
            </div>

            <h1 className={styles.title}>Compound Interest Calculator</h1>

            <p className={styles.lead}>
              See how your money could grow over time with compounding and
              recurring monthly contributions.
            </p>

            <p className={styles.intro}>
              This is not just a future balance estimate. It is a way to see
              what your current saving pace, timeline, and return assumptions
              could turn into.
            </p>

            <div className={styles.highlight}>
              <p className={styles.highlightText}>
                <strong>Key idea:</strong> small inputs can look modest today.
                Over enough time, compounding can do the heavy lifting.
              </p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <div className={styles.heroPanelTop}>
              <span className={styles.heroPanelEyebrow}>What this tool shows</span>
              <h2 className={styles.heroPanelTitle}>
                From contributions to future value
              </h2>
            </div>

            <ul className={styles.heroList}>
              <li>projected final balance.</li>
              <li>total amount you contributed.</li>
              <li>estimated growth earned.</li>
              <li>rough 4% retirement income view.</li>
            </ul>

            <p className={styles.heroPanelText}>
              The math is simple. What it could mean for your future is not.
            </p>
          </aside>
        </header>

        <section className={styles.toolSection}>
          <div className={styles.toolHeader}>
            <div>
              <p className={styles.toolEyebrow}>Calculator inputs</p>
              <h2 className={styles.toolTitle}>Run your projection</h2>
            </div>
            <p className={styles.toolText}>
              Enter your starting amount, monthly contribution, monthly return,
              and time horizon.
            </p>
          </div>

          <div className={styles.toolCard}>
            <div className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="initialInvestment" className={styles.label}>
                  Initial investment ($)
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
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="monthlyContribution" className={styles.label}>
                  Monthly contribution ($)
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
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="monthlyRate" className={styles.label}>
                  Interest rate (% per month)
                </label>
                <input
                  id="monthlyRate"
                  type="text"
                  inputMode="decimal"
                  placeholder="1.0"
                  value={monthlyRate}
                  onChange={(e) => setMonthlyRate(cleanDecimalInput(e.target.value))}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="investmentMonths" className={styles.label}>
                  Investment period (months)
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
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.actions}>
              <button onClick={handleCalculate} className={styles.primaryButton}>
                Calculate projection
              </button>
              <button onClick={clearFields} className={styles.secondaryButton}>
                Reset inputs
              </button>
            </div>

            <div className={styles.statusArea}>
              {hasNegativeValues && (
                <p className={styles.error}>
                  Please enter only non-negative values.
                </p>
              )}

              {hasNonIntegerMonths && (
                <p className={styles.error}>
                  Investment period must be a whole number of months.
                </p>
              )}

              {hasUnrealisticRate && (
                <p className={styles.error}>
                  Please enter a realistic monthly rate between 0 and 100.
                </p>
              )}

              {hasUnrealisticMonths && (
                <p className={styles.error}>
                  Investment period is too large. Please use 1200 months or less.
                </p>
              )}
            </div>
          </div>
        </section>

        {showPlaceholder && (
          <section className={styles.resultsSection}>
            <div className={styles.resultsHero}>
              <div className={styles.resultsHeroHeader}>
                <div>
                  <p className={styles.resultsEyebrow}>Projection area</p>
                  <h2 className={styles.resultsTitle}>Your results will appear here</h2>
                </div>
                <span className={styles.resultsBadge}>Waiting for inputs</span>
              </div>

              <p className={styles.resultsIntro}>
                Enter your numbers and run the calculation to see your projected
                future balance, total invested amount, estimated gains, and a
                simple retirement-income view.
              </p>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <p className={styles.infoLabel}>Future value</p>
                <p className={styles.infoPlaceholder}>Calculated after you run the tool.</p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoLabel}>Growth earned</p>
                <p className={styles.infoPlaceholder}>Shows how much compounding added.</p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoLabel}>Retirement income</p>
                <p className={styles.infoPlaceholder}>Simple monthly estimate at a 4% rate.</p>
              </div>
            </div>
          </section>
        )}

        {showResults && results && (
          <section className={styles.resultsSection}>
            <div className={styles.resultsHero}>
              <div className={styles.resultsHeroHeader}>
                <div>
                  <p className={styles.resultsEyebrow}>Your projection</p>
                  <h2 className={styles.resultsTitle}>Here is what your numbers suggest</h2>
                </div>
                <span className={styles.resultsBadge}>Estimated</span>
              </div>

              <div className={styles.heroValueCard}>
                <p className={styles.heroValueLabel}>Projected future value</p>
                <p className={styles.heroValue}>
                  {formatCurrency(results.finalAmount)}
                </p>
                <p className={styles.heroValueText}>
                  Based on {investmentMonthsValue} months of growth and
                  contributions.
                </p>
              </div>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Total contributed</p>
                <p className={styles.metricValue}>
                  {formatCurrency(results.totalInvested)}
                </p>
              </div>

              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Estimated growth earned</p>
                <p className={styles.metricValueStrong}>
                  {formatCurrency(results.interestEarned)}
                </p>
              </div>

              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Estimated total return</p>
                <p className={styles.metricValue}>
                  {formatPercent(results.totalReturnPercent)}
                </p>
              </div>

              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Investment timeline</p>
                <p className={styles.metricValue}>
                  {results.years.toFixed(1)} years
                </p>
              </div>
            </div>

            <div className={styles.incomeSection}>
              <div className={styles.incomeCard}>
                <p className={styles.incomeEyebrow}>
                  Estimated retirement income
                </p>
                <p className={styles.incomeValue}>
                  {formatCurrency(results.monthlyIncomeAt4Percent)} / month
                </p>
                <p className={styles.incomeText}>{projectionMessage}</p>
                <p className={styles.incomeNote}>
                  Based on a simple 4% withdrawal estimate from your final value.
                </p>
              </div>

              <div className={styles.interpretationCard}>
                <p className={styles.interpretationEyebrow}>What this result is saying</p>
                <h3 className={styles.interpretationTitle}>
                  {growthLabel}
                </h3>
                <p className={styles.interpretationText}>
                  Your ending balance is not just a headline number. It is a
                  rough picture of what your current saving pace and return
                  assumptions could build over time.
                </p>
                <p className={styles.interpretationText}>
                  A larger balance can support more income. But income is what
                  you live on. The balance is just the engine.
                </p>
              </div>
            </div>

            <div className={styles.linksCard}>
              <h3 className={styles.linksTitle}>
                Want to see what this could mean for retirement?
              </h3>
              <p className={styles.linksText}>
                Compare this projection with common retirement income levels and
                see how different monthly amounts may actually feel.
              </p>
              <div className={styles.linkPills}>
                <Link
                  href="/is-5000-a-month-enough-to-retire"
                  className={styles.linkPill}
                >
                  Is $5,000 a month enough to retire?
                </Link>
                <Link
                  href="/is-10000-a-month-enough-to-retire"
                  className={styles.linkPill}
                >
                  Is $10,000 a month enough to retire?
                </Link>
                <Link
                  href="/what-net-worth-generates-10000-a-month"
                  className={styles.linkPill}
                >
                  What net worth generates $10,000 a month?
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className={styles.footerNotes}>
          <div className={styles.noteCard}>
            <p className={styles.noteTitle}>How this works</p>
            <p className={styles.noteText}>
              This calculator assumes monthly compounding and end-of-month
              contributions.
            </p>
            <p className={styles.noteText}>
              Results are estimates for educational purposes only and should not
              be treated as personal financial advice.
            </p>
          </div>

          <div className={styles.noteCard}>
            <p className={styles.noteTitle}>Why this matters</p>
            <p className={styles.noteText}>
              Compounding is one of the clearest ways to see how time,
              consistency, and rate of return interact. Small monthly decisions
              can grow into very different outcomes.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
