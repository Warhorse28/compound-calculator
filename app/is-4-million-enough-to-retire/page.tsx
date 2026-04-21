import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/is-4-million-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $4 Million Enough to Retire? A Premium Retirement Income Breakdown";
const pageTitle =
  "Is $4 Million Enough to Retire? A Premium Retirement Income Breakdown";
const pageDescription =
  "Understand how far $4 million goes in retirement. Compare withdrawal rates, monthly income, and what kind of lifestyle it can realistically support.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    rate: "3%",
    yearlyIncome: "$120,000",
    monthlyIncome: "$10,000",
    view: "Highly conservative with strong long-term safety.",
  },
  {
    rate: "4%",
    yearlyIncome: "$160,000",
    monthlyIncome: "$13,333",
    view: "Premium-level retirement for many lifestyles.",
  },
  {
    rate: "5%",
    yearlyIncome: "$200,000",
    monthlyIncome: "$16,667",
    view: "High-end lifestyle, but more exposure to risk.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement benchmark</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            $4 million moves retirement into a much more flexible and premium
            territory.
          </p>

          <p className={styles.intro}>
            At this level, many people are no longer focused on just covering
            expenses. Instead, the goal becomes maintaining a higher quality of
            life while still protecting the portfolio for decades.
          </p>

          <p className={styles.intro}>
            But even with $4 million, the outcome depends heavily on how you draw
            income, how long your retirement lasts, and what kind of lifestyle
            you expect to sustain.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $4 million can support a premium
              retirement in many scenarios, but long-term sustainability still
              depends on disciplined withdrawals.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Test Your Retirement Number →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How much income can $4 million generate?
          </h2>

          <p className={styles.paragraph}>
            What matters most is not the portfolio size itself, but the income it
            can consistently generate year after year without breaking your plan.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Withdrawal rate</th>
                  <th>Yearly income</th>
                  <th>Monthly income</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.rate}>
                    <td className={styles.tableCellStrong}>{row.rate}</td>
                    <td>{row.yearlyIncome}</td>
                    <td>{row.monthlyIncome}</td>
                    <td>{row.view}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            At a 4% withdrawal rate, $4 million can generate around $160,000 per
            year — or roughly $13,300 per month before taxes.
          </p>

          <p className={styles.paragraph}>
            That level of income can support a premium lifestyle in many regions,
            especially when combined with a disciplined withdrawal strategy.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $4 million is more than enough
          </h2>

          <p className={styles.paragraph}>
            For many retirees, $4 million creates a strong sense of financial
            control. It allows for flexibility in spending, travel, healthcare,
            and lifestyle choices without constant financial pressure.
          </p>

          <ul className={styles.list}>
            <li>You want a premium but sustainable retirement</li>
            <li>You value flexibility and optional spending</li>
            <li>You want a strong buffer against inflation</li>
            <li>You prefer peace of mind over maximizing risk</li>
          </ul>

          <p className={styles.paragraph}>
            In many cases, this level of wealth makes retirement feel stable and
            adaptable, not just possible.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $4 million may still feel limited
          </h2>

          <p className={styles.paragraph}>
            Even at this level, expectations matter. High-cost cities, early
            retirement timelines, or very high spending targets can reduce how
            far $4 million actually goes.
          </p>

          <p className={styles.paragraph}>
            If your goal is a luxury-level lifestyle with no constraints, the
            portfolio may still need to stretch further — especially over longer
            time horizons.
          </p>

          <p className={styles.paragraph}>
            This is why context matters more than the headline number.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $4 million feels different from lower benchmarks
          </h2>

          <p className={styles.paragraph}>
            The jump from $3 million to $4 million is not just incremental. It
            increases income potential while reducing pressure on withdrawal
            rates.
          </p>

          <p className={styles.paragraph}>
            This can make a conservative strategy feel much more comfortable,
            allowing your plan to better absorb market volatility and unexpected
            expenses.
          </p>

          <p className={styles.paragraph}>
            In practical terms, it creates more room for both lifestyle and
            stability at the same time.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how $4 million fits your plan
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different withdrawal strategies and
              income levels based on your goals and timeline.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Use the Calculator →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related scenarios</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/is-3-million-enough-to-retire">
                Is $3 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/is-5-million-enough-to-retire">
                Is $5 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-3-million-generate">
                How much income can $3 million generate?
              </Link>
            </li>
            <li>
              <Link href="/safe-withdrawal-rate-for-retirement">
                Safe withdrawal rate guide
              </Link>
            </li>
            <li>
              <Link href={calculatorPath}>
                Calculate your retirement income
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $4 million is enough to retire comfortably in many situations and
            often supports a premium lifestyle with solid financial stability.
          </p>

          <p className={styles.paragraph}>
            But the real strength of this number comes from how it is used — not
            just how large it is.
          </p>

          <p className={styles.paragraph}>
            A well-structured withdrawal strategy turns $4 million into a
            long-term income engine rather than just a large balance.
          </p>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Run Your Numbers →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
