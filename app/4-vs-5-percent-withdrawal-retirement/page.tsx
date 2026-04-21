import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/4-vs-5-percent-withdrawal-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "4% vs 5% Withdrawal Rate: Higher Income or Higher Risk?";
const pageTitle =
  "4% vs 5% Withdrawal Rate: How Much Risk Are You Really Taking?";
const pageDescription =
  "Compare 4% vs 5% withdrawal rates and see how much net worth you need. Understand the trade-off between lower capital and higher risk.";

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
    yearly: "$60,000",
    netWorth4: "$1.50M",
    netWorth5: "$1.20M",
    difference: "$300K less with 5%",
  },
  {
    income: "$10,000/month",
    yearly: "$120,000",
    netWorth4: "$3.00M",
    netWorth5: "$2.40M",
    difference: "$600K less with 5%",
  },
  {
    income: "$20,000/month",
    yearly: "$240,000",
    netWorth4: "$6.00M",
    netWorth5: "$4.80M",
    difference: "$1.2M less with 5%",
  },
  {
    income: "$40,000/month",
    yearly: "$480,000",
    netWorth4: "$12.00M",
    netWorth5: "$9.60M",
    difference: "$2.4M less with 5%",
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
            More income today often means more risk tomorrow.
          </p>

          <p className={styles.intro}>
            The jump from a 4% to a 5% withdrawal rate looks small, but it
            significantly increases the pressure on your portfolio.
          </p>

          <p className={styles.intro}>
            While it reduces how much net worth you need, it also raises the
            chance of running out of money over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> moving from 4% to 5% reduces your
              required net worth by about 20% — but increases long-term risk.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Test Your Scenario →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            The real difference between 4% and 5%
          </h2>

          <p className={styles.paragraph}>
            A 4% withdrawal rate is widely accepted as a balanced strategy. It
            offers a mix of sustainability and income efficiency.
          </p>

          <p className={styles.paragraph}>
            A 5% withdrawal rate pushes the limit. It reduces the capital
            required but increases exposure to market downturns and sequence of
            returns risk.
          </p>

          <p className={styles.paragraph}>
            The trade-off is simple: less capital vs higher uncertainty.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Net worth comparison (4% vs 5%)
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>Yearly income</th>
                  <th>4% strategy</th>
                  <th>5% strategy</th>
                  <th>Difference</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td className={styles.tableCellStrong}>{row.income}</td>
                    <td>{row.yearly}</td>
                    <td>{row.netWorth4}</td>
                    <td>{row.netWorth5}</td>
                    <td>{row.difference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The higher the income target, the more aggressive the 5% strategy
            becomes.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When 4% is the safer choice
          </h2>

          <p className={styles.paragraph}>
            A 4% withdrawal rate is better suited for long retirements and
            investors who want a margin of safety.
          </p>

          <p className={styles.paragraph}>
            It provides more resilience during market downturns and reduces the
            risk of depleting your portfolio.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When 5% might make sense
          </h2>

          <p className={styles.paragraph}>
            A 5% withdrawal rate can work if you have flexibility in spending,
            shorter retirement horizons, or additional income sources.
          </p>

          <p className={styles.paragraph}>
            It is a more aggressive approach and requires careful planning.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Compare your strategy in seconds
            </h2>
            <p className={styles.ctaText}>
              See how different withdrawal rates impact your retirement number.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Open Calculator →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Explore more comparisons
          </h2>
          <ul className={styles.list}>
            <li>
              <Link href="/3-vs-4-percent-withdrawal-retirement">
                3% vs 4% comparison
              </Link>
            </li>
            <li>
              <Link href="/how-much-net-worth-needed-at-4-percent-withdrawal">
                4% breakdown
              </Link>
            </li>
            <li>
              <Link href="/how-much-net-worth-needed-at-5-percent-withdrawal">
                5% breakdown
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
            The difference between 4% and 5% is not just about numbers — it’s
            about risk tolerance.
          </p>

          <p className={styles.paragraph}>
            One gives you more safety. The other gives you more flexibility with
            less capital.
          </p>

          <p className={styles.paragraph}>
            The best choice depends on how much uncertainty you are willing to
            accept over time.
          </p>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Calculate Your Plan →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
