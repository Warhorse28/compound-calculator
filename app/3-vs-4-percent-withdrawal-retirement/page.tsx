import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/3-vs-4-percent-withdrawal-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "3% vs 4% Withdrawal Rate: Which Retirement Strategy Is Safer?";
const pageTitle =
  "3% vs 4% Withdrawal Rate: Safety vs Income Trade-Off Explained";
const pageDescription =
  "Compare 3% vs 4% withdrawal rates and see how much net worth you need under each strategy. Understand risk, safety, and income trade-offs.";

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
    netWorth3: "$2.00M",
    netWorth4: "$1.50M",
    difference: "$500K less with 4%",
  },
  {
    income: "$10,000/month",
    yearly: "$120,000",
    netWorth3: "$4.00M",
    netWorth4: "$3.00M",
    difference: "$1M less with 4%",
  },
  {
    income: "$20,000/month",
    yearly: "$240,000",
    netWorth3: "$8.00M",
    netWorth4: "$6.00M",
    difference: "$2M less with 4%",
  },
  {
    income: "$40,000/month",
    yearly: "$480,000",
    netWorth3: "$16.00M",
    netWorth4: "$12.00M",
    difference: "$4M less with 4%",
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
            A small percentage change can mean millions of dollars.
          </p>

          <p className={styles.intro}>
            The difference between a 3% and 4% withdrawal rate might look small,
            but it has a massive impact on how much net worth you need.
          </p>

          <p className={styles.intro}>
            Choosing between them is essentially choosing between maximum safety
            and higher income efficiency.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> moving from 3% to 4% can reduce your
              required net worth by 25%.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Run Your Numbers →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            The core difference between 3% and 4%
          </h2>

          <p className={styles.paragraph}>
            A 3% withdrawal rate is more conservative. It prioritizes long-term
            stability and reduces the risk of running out of money.
          </p>

          <p className={styles.paragraph}>
            A 4% withdrawal rate is more efficient. It allows you to retire with
            less capital but exposes your portfolio to more long-term pressure.
          </p>

          <p className={styles.paragraph}>
            The trade-off is simple: safety vs capital requirement.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Net worth comparison (3% vs 4%)
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>Yearly income</th>
                  <th>3% strategy</th>
                  <th>4% strategy</th>
                  <th>Difference</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td className={styles.tableCellStrong}>{row.income}</td>
                    <td>{row.yearly}</td>
                    <td>{row.netWorth3}</td>
                    <td>{row.netWorth4}</td>
                    <td>{row.difference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The higher the income target, the bigger the gap between these two
            strategies becomes.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When 3% makes more sense
          </h2>

          <p className={styles.paragraph}>
            A 3% withdrawal rate is ideal if you want maximum safety, early
            retirement, or strong protection against market volatility.
          </p>

          <p className={styles.paragraph}>
            It is especially useful for long retirement horizons (30+ years).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When 4% is a better choice
          </h2>

          <p className={styles.paragraph}>
            A 4% withdrawal rate works well if you want to reduce your required
            net worth and accept moderate risk.
          </p>

          <p className={styles.paragraph}>
            It is widely used as a balanced starting point for retirement
            planning.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test both strategies instantly
            </h2>
            <p className={styles.ctaText}>
              Compare how different withdrawal rates affect your retirement
              number in real time.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Open Calculator →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Explore related strategies
          </h2>
          <ul className={styles.list}>
            <li>
              <Link href="/how-much-net-worth-needed-at-3-percent-withdrawal">
                3% withdrawal breakdown
              </Link>
            </li>
            <li>
              <Link href="/how-much-net-worth-needed-at-4-percent-withdrawal">
                4% withdrawal breakdown
              </Link>
            </li>
            <li>
              <Link href="/how-much-net-worth-needed-at-5-percent-withdrawal">
                5% withdrawal breakdown
              </Link>
            </li>
            <li>
              <Link href="/4-vs-5-percent-withdrawal-retirement">
                4% vs 5% comparison
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
            The difference between 3% and 4% is not just technical — it defines
            your entire retirement strategy.
          </p>

          <p className={styles.paragraph}>
            One prioritizes safety. The other prioritizes efficiency.
          </p>

          <p className={styles.paragraph}>
            The best choice depends on how much risk you're willing to carry
            over decades.
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
