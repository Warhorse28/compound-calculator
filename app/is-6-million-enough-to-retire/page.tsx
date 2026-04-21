import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/is-6-million-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $6 Million Enough to Retire? What This Level of Wealth Really Changes";
const pageTitle =
  "Is $6 Million Enough to Retire? What This Level of Wealth Really Changes";
const pageDescription =
  "See whether $6 million is enough to retire based on withdrawal rates, retirement income, and the kind of flexibility this portfolio can realistically support.";

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
    yearlyIncome: "$180,000",
    monthlyIncome: "$15,000",
    view: "Very conservative with strong long-term protection.",
  },
  {
    rate: "4%",
    yearlyIncome: "$240,000",
    monthlyIncome: "$20,000",
    view: "High flexibility with balanced sustainability.",
  },
  {
    rate: "5%",
    yearlyIncome: "$300,000",
    monthlyIncome: "$25,000",
    view: "High-end lifestyle, but requires more monitoring.",
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
            $6 million pushes retirement beyond comfort and into true financial
            flexibility.
          </p>

          <p className={styles.intro}>
            At this level, retirement is usually no longer about covering core
            expenses. It becomes more about maintaining freedom, absorbing
            uncertainty, and giving yourself more room to adjust without major
            lifestyle pressure.
          </p>

          <p className={styles.intro}>
            A $6 million portfolio can support very strong income even with more
            conservative withdrawal strategies. That creates a different kind of
            retirement structure than smaller benchmarks.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $6 million can create a highly
              resilient retirement, but the biggest advantage is flexibility, not
              just income size.
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
            How much income can $6 million generate?
          </h2>

          <p className={styles.paragraph}>
            The strength of a $6 million portfolio is not only that it produces
            higher income. It is that it can produce that income with less
            pressure than smaller portfolios usually allow.
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
            At a 4% withdrawal rate, $6 million can support about $240,000 per
            year, or roughly $20,000 per month before taxes.
          </p>

          <p className={styles.paragraph}>
            That level of income can support a very high standard of living in
            many places while still leaving room for a more balanced long-term
            plan.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes at this level of wealth?
          </h2>

          <p className={styles.paragraph}>
            At $6 million, the retirement conversation often changes in an
            important way. You are no longer just asking whether retirement is
            possible. You are asking how strong, flexible, and durable you want
            that retirement to be.
          </p>

          <ul className={styles.list}>
            <li>More room to reduce risk exposure</li>
            <li>Higher tolerance for market volatility</li>
            <li>More flexibility in how withdrawals are structured</li>
            <li>Greater protection against sequence of returns risk</li>
          </ul>

          <p className={styles.paragraph}>
            The biggest shift is often psychological. You are less likely to feel
            like the portfolio is under constant pressure, which can make
            retirement decisions much calmer and more strategic.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $6 million is more than enough
          </h2>

          <p className={styles.paragraph}>
            For many retirees, $6 million is comfortably above the level needed
            for a secure retirement. It can support premium spending, travel,
            healthcare flexibility, and a stronger margin for unexpected changes.
          </p>

          <p className={styles.paragraph}>
            It also gives you more ability to stay conservative. That matters
            because long-term financial strength often comes from not needing to
            stretch the portfolio too hard.
          </p>

          <p className={styles.paragraph}>
            In many real-world situations, this is the level where retirement
            starts to feel far less fragile.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $6 million may still not feel unlimited
          </h2>

          <p className={styles.paragraph}>
            Even a portfolio this large still has limits. Very early retirement,
            very expensive cities, or highly luxury-oriented lifestyles can still
            put more pressure on the plan than expected.
          </p>

          <p className={styles.paragraph}>
            The number is large, but the timeline still matters. A 25-year
            retirement and a 45-year retirement are very different problems, even
            at the same wealth level.
          </p>

          <p className={styles.paragraph}>
            That is why context always matters more than the headline number by
            itself.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how $6 million fits your plan
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different income targets, withdrawal
              rates, and timelines based on your own retirement goals.
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
              <Link href="/what-net-worth-generates-30000-a-month">
                What net worth generates $30,000 a month?
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
            $6 million is enough to retire in many scenarios, and for many people
            it supports a very strong level of financial flexibility.
          </p>

          <p className={styles.paragraph}>
            But the true advantage of this number is not just that it is bigger.
            It is that it allows you to structure retirement with more margin,
            more control, and less long-term pressure.
          </p>

          <p className={styles.paragraph}>
            The smartest way to judge $6 million is by how much durable income it
            can create, not just by how impressive the portfolio looks on paper.
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
