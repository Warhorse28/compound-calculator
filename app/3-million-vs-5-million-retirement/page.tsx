import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/3-million-vs-5-million-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$3 Million vs $5 Million for Retirement: From Comfortable to High-End";
const pageTitle =
  "$3 Million vs $5 Million for Retirement: From Comfortable to High-End";
const pageDescription =
  "Compare $3 million vs $5 million for retirement. See how income, lifestyle flexibility, and long-term safety change between these two portfolio levels.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    benchmark: "$3 million at 4%",
    yearlyIncome: "$120,000",
    monthlyIncome: "$10,000",
    view: "Strong, comfortable retirement with good flexibility.",
  },
  {
    benchmark: "$5 million at 4%",
    yearlyIncome: "$200,000",
    monthlyIncome: "$16,667",
    view: "High-end lifestyle with much more freedom and margin.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement comparison</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            The jump from $3 million to $5 million is where retirement starts to
            shift from comfortable to genuinely high-end.
          </p>

          <p className={styles.intro}>
            Both portfolios can support long-term retirement, but they create
            very different lifestyles. One gives you strong stability. The other
            adds a new level of freedom, optionality, and margin.
          </p>

          <p className={styles.intro}>
            This is not just about income. It is about how relaxed your retirement
            feels over decades.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> the move from $3M to $5M is where
              retirement often stops feeling constrained and starts feeling
              fully flexible.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Compare Your Retirement Plan →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Income difference: $3 million vs $5 million
          </h2>

          <p className={styles.paragraph}>
            Using the same withdrawal rate makes the difference between these
            portfolios very clear.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Portfolio</th>
                  <th>Yearly income</th>
                  <th>Monthly income</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.benchmark}>
                    <td className={styles.tableCellStrong}>{row.benchmark}</td>
                    <td>{row.yearlyIncome}</td>
                    <td>{row.monthlyIncome}</td>
                    <td>{row.view}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The difference is about $6,667 per month. That gap alone can
            completely change your lifestyle, location choices, and overall
            financial comfort.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $3 million retirement looks like
          </h2>

          <p className={styles.paragraph}>
            A $3 million portfolio provides a strong and stable retirement in
            most scenarios.
          </p>

          <ul className={styles.list}>
            <li>Comfortable lifestyle with solid flexibility</li>
            <li>Room for travel and discretionary spending</li>
            <li>Reasonable protection against inflation</li>
            <li>Still requires some planning and discipline</li>
          </ul>

          <p className={styles.paragraph}>
            It is a level where retirement feels secure, but not completely
            unconstrained.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes at $5 million
          </h2>

          <p className={styles.paragraph}>
            At $5 million, retirement starts to feel fundamentally different.
          </p>

          <p className={styles.paragraph}>
            The higher income and larger buffer allow for a much more relaxed
            approach to spending, investing, and long-term planning.
          </p>

          <ul className={styles.list}>
            <li>High-end lifestyle with broad flexibility</li>
            <li>Much larger margin for unexpected costs</li>
            <li>Less sensitivity to market volatility</li>
            <li>Greater ability to stay conservative</li>
          </ul>

          <p className={styles.paragraph}>
            This is where many people feel true financial independence rather
            than just financial stability.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why this jump matters more than it seems
          </h2>

          <p className={styles.paragraph}>
            The difference between $3M and $5M is not just proportional. It
            changes how your portfolio behaves under stress.
          </p>

          <p className={styles.paragraph}>
            With more capital, you can:
          </p>

          <ul className={styles.list}>
            <li>Withdraw less aggressively</li>
            <li>Recover more easily from downturns</li>
            <li>Maintain lifestyle without constant adjustments</li>
            <li>Plan long-term with more confidence</li>
          </ul>

          <p className={styles.paragraph}>
            That combination creates a much more resilient retirement.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how your portfolio compares
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different portfolio sizes, withdrawal
              strategies, and income levels based on your own retirement goals.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Use the Calculator →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related comparisons</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/2-million-vs-3-million-retirement">
                $2 million vs $3 million retirement
              </Link>
            </li>
            <li>
              <Link href="/5-million-vs-10-million-retirement">
                $5 million vs $10 million retirement
              </Link>
            </li>
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
              <Link href={calculatorPath}>
                Calculate your retirement income
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $3 million already supports a strong retirement. $5 million pushes it
            into a much more flexible and resilient category.
          </p>

          <p className={styles.paragraph}>
            The additional capital reduces pressure, increases options, and makes
            long-term planning far more comfortable.
          </p>

          <p className={styles.paragraph}>
            The key difference is not just income. It is how much freedom and
            stability that income creates over time.
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
