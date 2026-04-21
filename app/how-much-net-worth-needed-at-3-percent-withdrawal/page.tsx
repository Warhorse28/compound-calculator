import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/how-much-net-worth-needed-at-3-percent-withdrawal";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Net Worth Do You Need at a 3% Withdrawal Rate?";
const pageTitle =
  "How Much Net Worth Do You Need at a 3% Withdrawal Rate?";
const pageDescription =
  "Understand how much net worth is required using a 3% withdrawal rate and why it is considered one of the safest retirement strategies.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    income: "$5,000/month",
    netWorth: "$2.00 million",
  },
  {
    income: "$10,000/month",
    netWorth: "$4.00 million",
  },
  {
    income: "$20,000/month",
    netWorth: "$8.00 million",
  },
  {
    income: "$40,000/month",
    netWorth: "$16.00 million",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Withdrawal strategy</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            A 3% withdrawal rate is widely considered one of the safest ways to
            generate retirement income from your portfolio.
          </p>

          <p className={styles.intro}>
            It prioritizes long-term sustainability over short-term income,
            requiring a larger net worth but offering stronger protection
            against market volatility and inflation.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> with a 3% withdrawal rate, every
              $1,000/month of income requires roughly $400,000 in net worth.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Calculate Your Plan →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Net worth required at a 3% withdrawal rate
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>Net worth needed</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td className={styles.tableCellStrong}>{row.income}</td>
                    <td>{row.netWorth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The 3% rule significantly increases the amount of capital required
            compared to higher withdrawal rates, but it also improves the
            probability that your money will last for decades.
          </p>

          <p className={styles.paragraph}>
            This approach is often used by people planning for long retirements,
            early retirement, or those who want to minimize risk.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why the 3% rule is considered safer
          </h2>

          <p className={styles.paragraph}>
            A lower withdrawal rate reduces the impact of market downturns,
            especially during the early years of retirement.
          </p>

          <p className={styles.paragraph}>
            It also allows your portfolio more time to recover from losses,
            making it more resilient across different economic cycles.
          </p>

          <p className={styles.paragraph}>
            The tradeoff is clear: you need more capital upfront, but you gain
            stability and peace of mind over time.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When a 3% withdrawal rate makes sense
          </h2>

          <p className={styles.paragraph}>
            This strategy is ideal for early retirees, people with long time
            horizons, and those who prioritize safety over maximizing income.
          </p>

          <p className={styles.paragraph}>
            It is also useful in uncertain market conditions where future
            returns may be lower than historical averages.
          </p>

          <p className={styles.paragraph}>
            In exchange for a higher net worth requirement, you reduce the risk
            of running out of money.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your own withdrawal strategy
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to compare different withdrawal rates and see
              how they impact your required net worth.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Open Calculator →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related scenarios</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/how-much-net-worth-needed-at-4-percent-withdrawal">
                4% withdrawal strategy
              </Link>
            </li>
            <li>
              <Link href="/how-much-net-worth-needed-at-5-percent-withdrawal">
                5% withdrawal strategy
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-10000-a-month">
                $10,000/month retirement
              </Link>
            </li>
            <li>
              <Link href="/safe-withdrawal-rate-for-retirement">
                Safe withdrawal rate guide
              </Link>
            </li>
            <li>
              <Link href={calculatorPath}>Compound interest calculator</Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            A 3% withdrawal rate requires significantly more capital, but it
            offers one of the safest paths for long-term retirement income.
          </p>

          <p className={styles.paragraph}>
            It is a strategy focused on durability, not maximum income.
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
