import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/what-does-5-million-net-worth-mean-for-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "What Does $5 Million Net Worth Represent in Retirement?";
const pageTitle =
  "What Does $5 Million Net Worth Represent in Retirement?";
const pageDescription =
  "Understand what a $5 million net worth can support in retirement, including income potential, lifestyle flexibility, and long-term financial stability.";

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
    yearlyIncome: "$150,000",
    monthlyIncome: "$12,500",
    view: "Very conservative with strong long-term stability.",
  },
  {
    rate: "4%",
    yearlyIncome: "$200,000",
    monthlyIncome: "$16,667",
    view: "Balanced approach with high flexibility.",
  },
  {
    rate: "5%",
    yearlyIncome: "$250,000",
    monthlyIncome: "$20,833",
    view: "Higher income, but requires active management.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement meaning</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            A $5 million net worth places retirement in a completely different
            category. At this level, the focus shifts from covering expenses to
            managing wealth with flexibility and control.
          </p>

          <p className={styles.intro}>
            Unlike lower portfolio levels, $5 million provides a meaningful
            margin of safety. It allows for higher income, more resilience
            against market fluctuations, and greater freedom in lifestyle
            choices.
          </p>

          <p className={styles.intro}>
            However, the real meaning of this number still depends on how the
            portfolio is structured and how income is withdrawn over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $5 million usually supports a highly
              flexible and comfortable retirement, but long-term success still
              depends on strategy and discipline.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Test Your Retirement Income →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Income potential from a $5 million portfolio
          </h2>

          <p className={styles.paragraph}>
            The best way to understand what $5 million means is to convert it
            into potential income using different withdrawal strategies:
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
            At a 4% withdrawal rate, $5 million produces about $200,000 per year
            — roughly $16,600 per month before taxes.
          </p>

          <p className={styles.paragraph}>
            This level of income provides strong flexibility in most retirement
            scenarios and supports a wide range of lifestyle choices.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What kind of lifestyle does $5 million support?
          </h2>

          <p className={styles.paragraph}>
            At this level, retirement is no longer defined by constraints. It is
            defined by options.
          </p>

          <ul className={styles.list}>
            <li>High-quality housing with location flexibility</li>
            <li>Frequent travel and discretionary spending</li>
            <li>Access to premium healthcare and services</li>
            <li>Ability to support family or legacy planning</li>
          </ul>

          <p className={styles.paragraph}>
            In many regions, this level of wealth moves into what most people
            consider a high-end or even wealthy retirement lifestyle.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $5 million changes the game
          </h2>

          <p className={styles.paragraph}>
            The difference between $2 million and $5 million is not just income —
            it is resilience.
          </p>

          <ul className={styles.list}>
            <li>More protection against market downturns</li>
            <li>Greater flexibility in withdrawal strategies</li>
            <li>Lower relative stress from unexpected expenses</li>
          </ul>

          <p className={styles.paragraph}>
            This creates a retirement structure that is not only comfortable, but
            also more durable over long time horizons.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            The real meaning behind $5 million
          </h2>

          <p className={styles.paragraph}>
            A $5 million net worth represents a transition from financial
            security to financial flexibility.
          </p>

          <p className={styles.paragraph}>
            It allows you to design your retirement instead of simply adapting to
            constraints.
          </p>

          <p className={styles.paragraph}>
            But even at this level, long-term success still depends on how
            income is managed and how the portfolio is structured.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Turn your net worth into real income
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to see how different withdrawal strategies
              impact your long-term financial stability.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Use the Calculator →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related pages</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/what-does-2-million-net-worth-mean-for-retirement">
                What does $2 million mean for retirement?
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-5-million-generate">
                How much income can $5 million generate?
              </Link>
            </li>
            <li>
              <Link href="/is-5-million-enough-to-retire">
                Is $5 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/what-net-worth-generates-20000-a-month">
                What net worth generates $20,000/month?
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
            A $5 million net worth supports a highly flexible and comfortable
            retirement in most scenarios.
          </p>

          <p className={styles.paragraph}>
            At a balanced withdrawal rate, it generates strong income with
            meaningful long-term stability.
          </p>

          <p className={styles.paragraph}>
            The real advantage is not just the income level, but the control and
            resilience it provides over time.
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
