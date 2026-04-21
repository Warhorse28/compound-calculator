import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/is-15-million-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $15 Million Enough to Retire? High-Net-Worth Retirement Reality Check";
const pageTitle =
  "Is $15 Million Enough to Retire? High-Net-Worth Retirement Reality Check";
const pageDescription =
  "See whether $15 million is enough to retire based on withdrawal rates, income potential, and what this level of wealth can realistically support.";

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
    yearlyIncome: "$450,000",
    monthlyIncome: "$37,500",
    view: "Extremely conservative with long-term stability.",
  },
  {
    rate: "4%",
    yearlyIncome: "$600,000",
    monthlyIncome: "$50,000",
    view: "Elite-level income with strong flexibility.",
  },
  {
    rate: "5%",
    yearlyIncome: "$750,000",
    monthlyIncome: "$62,500",
    view: "Ultra-high lifestyle, but requires discipline.",
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
            $15 million puts retirement firmly into high-net-worth territory,
            where flexibility becomes the defining advantage.
          </p>

          <p className={styles.intro}>
            At this level, retirement is rarely about financial survival. It
            becomes about optimization — how to structure income, manage risk,
            and maintain control over long time horizons.
          </p>

          <p className={styles.intro}>
            Even so, large portfolios still require planning. The difference is
            that you now have far more room to be conservative while maintaining
            a high standard of living.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $15 million shifts retirement from
              “can it work?” to “how strong and flexible do you want it to be?”
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
            How much income can $15 million generate?
          </h2>

          <p className={styles.paragraph}>
            The income from a $15 million portfolio is substantial, but the real
            advantage is that it can be generated with relatively low risk if
            structured properly.
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
            At a 4% withdrawal rate, $15 million can support about $600,000 per
            year, or roughly $50,000 per month before taxes.
          </p>

          <p className={styles.paragraph}>
            That level of income supports an extremely high-end lifestyle in most
            regions, while still allowing for a relatively balanced long-term
            strategy.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What defines retirement at this level?
          </h2>

          <p className={styles.paragraph}>
            At $15 million, retirement is less about limits and more about
            control.
          </p>

          <ul className={styles.list}>
            <li>Ability to stay conservative without sacrificing lifestyle</li>
            <li>Greater protection against long-term market cycles</li>
            <li>Flexibility in tax planning and income structure</li>
            <li>More room for legacy, family support, and philanthropy</li>
          </ul>

          <p className={styles.paragraph}>
            This level of wealth allows you to design retirement, not just react
            to it.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $15 million may still require structure
          </h2>

          <p className={styles.paragraph}>
            Even at this level, poor withdrawal strategies, aggressive spending,
            or very early retirement timelines can still create pressure over
            decades.
          </p>

          <p className={styles.paragraph}>
            Wealth reduces risk, but it does not eliminate it. Long-term success
            still depends on discipline and planning.
          </p>

          <p className={styles.paragraph}>
            The biggest difference is that mistakes become less catastrophic —
            but they still matter.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your own retirement scenario
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to explore different income levels, withdrawal
              strategies, and timelines based on your own goals.
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
              <Link href="/is-10-million-enough-to-retire">
                Is $10 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/is-20-million-enough-to-retire">
                Is $20 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/what-net-worth-generates-50000-a-month">
                What net worth generates $50,000 a month?
              </Link>
            </li>
            <li>
              <Link href="/safe-withdrawal-rate-for-retirement">
                Safe withdrawal rate guide
              </Link>
            </li>
            <li>
              <Link href={calculatorPath}>
                Calculate your retirement income potential
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $15 million is enough to retire in almost any realistic scenario, and
            it supports a very high level of financial flexibility.
          </p>

          <p className={styles.paragraph}>
            But the real advantage is not just the income. It is the ability to
            stay conservative, absorb uncertainty, and maintain control over
            decades.
          </p>

          <p className={styles.paragraph}>
            At this level, retirement becomes less about reaching a number and
            more about managing a system that can sustain your lifestyle long
            term.
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
