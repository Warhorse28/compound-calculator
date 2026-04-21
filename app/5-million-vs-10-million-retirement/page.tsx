import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/5-million-vs-10-million-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$5 Million vs $10 Million for Retirement: High-End vs Full Financial Freedom";
const pageTitle =
  "$5 Million vs $10 Million for Retirement: High-End vs Full Financial Freedom";
const pageDescription =
  "Compare $5 million vs $10 million for retirement. See how income, lifestyle, and long-term flexibility change between these two high-net-worth levels.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    benchmark: "$5 million at 4%",
    yearlyIncome: "$200,000",
    monthlyIncome: "$16,667",
    view: "High-end lifestyle with strong flexibility.",
  },
  {
    benchmark: "$10 million at 4%",
    yearlyIncome: "$400,000",
    monthlyIncome: "$33,333",
    view: "Full financial freedom with major margin.",
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
            The difference between $5 million and $10 million is not just about
            earning more. It is about how much control and freedom your retirement
            actually gives you.
          </p>

          <p className={styles.intro}>
            Both portfolios support a high-end lifestyle. But one still requires
            awareness and structure, while the other provides a much larger margin
            for flexibility, risk reduction, and long-term planning.
          </p>

          <p className={styles.intro}>
            This is where retirement moves from “very comfortable” into true
            financial independence at scale.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> the jump from $5M to $10M does not
              just double income — it dramatically increases freedom and reduces
              long-term financial pressure.
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
            Income difference: $5 million vs $10 million
          </h2>

          <p className={styles.paragraph}>
            Using the same withdrawal rate highlights how different these two
            levels of wealth really are.
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
            The difference is about $16,667 per month. That gap alone can
            dramatically expand lifestyle options, reduce stress, and improve
            long-term sustainability.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $5 million retirement feels like
          </h2>

          <p className={styles.paragraph}>
            A $5 million portfolio already supports a strong and high-end
            retirement in most situations.
          </p>

          <ul className={styles.list}>
            <li>High-quality lifestyle with strong flexibility</li>
            <li>Room for travel and discretionary spending</li>
            <li>Good protection against inflation</li>
            <li>Still requires structured planning</li>
          </ul>

          <p className={styles.paragraph}>
            It is a level where retirement feels very comfortable, but not
            completely unconstrained.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes at $10 million
          </h2>

          <p className={styles.paragraph}>
            At $10 million, retirement starts to feel fundamentally different.
          </p>

          <p className={styles.paragraph}>
            The increased income and capital base allow for much greater
            flexibility, lower withdrawal pressure, and more strategic planning.
          </p>

          <ul className={styles.list}>
            <li>Full financial independence with major flexibility</li>
            <li>Much larger margin for unexpected costs</li>
            <li>Lower sensitivity to market volatility</li>
            <li>Greater ability to stay conservative long term</li>
          </ul>

          <p className={styles.paragraph}>
            This is where retirement shifts from strong to truly resilient.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why this jump matters more than it looks
          </h2>

          <p className={styles.paragraph}>
            Doubling your portfolio does more than double your income. It
            transforms how your retirement behaves under stress.
          </p>

          <p className={styles.paragraph}>
            With more capital, you can:
          </p>

          <ul className={styles.list}>
            <li>Use more conservative withdrawal strategies</li>
            <li>Recover faster from market downturns</li>
            <li>Maintain lifestyle without constant adjustments</li>
            <li>Plan long-term with greater confidence</li>
          </ul>

          <p className={styles.paragraph}>
            That combination creates a much more stable and flexible retirement
            system.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how your portfolio compares
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different portfolio sizes, withdrawal
              rates, and income levels based on your own retirement goals.
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
              <Link href="/3-million-vs-5-million-retirement">
                $3 million vs $5 million retirement
              </Link>
            </li>
            <li>
              <Link href="/is-5-million-enough-to-retire">
                Is $5 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/is-10-million-enough-to-retire">
                Is $10 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-5-million-generate">
                How much income can $5 million generate?
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
            $5 million already provides a strong retirement. $10 million expands
            that into a much more flexible and resilient system.
          </p>

          <p className={styles.paragraph}>
            The difference is not just income. It is how much control, stability,
            and long-term confidence that income creates.
          </p>

          <p className={styles.paragraph}>
            Over time, that difference can significantly improve both your
            lifestyle and your financial peace of mind.
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
