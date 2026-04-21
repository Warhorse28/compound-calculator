import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/how-much-do-you-need-for-5-percent-withdrawal";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "What Net Worth Supports a 5% Withdrawal Rate? Real Numbers";
const pageTitle =
  "What Net Worth Supports a 5% Withdrawal Rate? A Realistic Breakdown";
const pageDescription =
  "Understand how much net worth is needed at a 5% withdrawal rate, and how it compares to safer strategies like 3% and 4%.";

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
    netWorth: "$1.20 million",
    yearlyIncome: "$60,000",
    view: "Lower capital, but higher long-term risk.",
  },
  {
    income: "$10,000/month",
    netWorth: "$2.40 million",
    yearlyIncome: "$120,000",
    view: "Aggressive but achievable target.",
  },
  {
    income: "$20,000/month",
    netWorth: "$4.80 million",
    yearlyIncome: "$240,000",
    view: "High income with less margin for error.",
  },
  {
    income: "$40,000/month",
    netWorth: "$9.60 million",
    yearlyIncome: "$480,000",
    view: "Strong income, but requires resilience.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Aggressive withdrawal</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            A 5% withdrawal rate reduces how much net worth you need, but it
            increases long-term pressure on your portfolio.
          </p>

          <p className={styles.intro}>
            Compared to 3% or 4%, this strategy prioritizes higher income today
            instead of long-term safety. It can work, but it leaves less room for
            market volatility, inflation, and unexpected changes.
          </p>

          <p className={styles.intro}>
            This is why it is often seen as an aggressive benchmark. It lowers
            the entry barrier to retirement, but increases the importance of
            flexibility and risk management.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> with a 5% withdrawal rate, every
              $1,000/month of income requires about $240,000 in net worth.
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
            Net worth required at a 5% withdrawal rate
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>Net worth needed</th>
                  <th>Yearly income</th>
                  <th>How it feels</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td className={styles.tableCellStrong}>{row.income}</td>
                    <td>{row.netWorth}</td>
                    <td>{row.yearlyIncome}</td>
                    <td>{row.view}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The biggest advantage of a 5% withdrawal rate is obvious: you need
            less capital to generate the same income.
          </p>

          <p className={styles.paragraph}>
            But that advantage comes with a trade-off. Your portfolio has less
            margin to absorb downturns, and the probability of running into
            long-term pressure increases.
          </p>

          <p className={styles.paragraph}>
            That does not mean it is wrong. It simply means the strategy must be
            aligned with your timeline, flexibility, and tolerance for risk.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When a 5% withdrawal strategy can make sense
          </h2>

          <p className={styles.paragraph}>
            A 5% withdrawal rate can work better in situations where retirement
            is shorter, income sources are diversified, or spending can be
            adjusted over time.
          </p>

          <p className={styles.paragraph}>
            It may also be used as a temporary strategy, especially in the early
            years of retirement when other income streams are expected to grow
            later.
          </p>

          <p className={styles.paragraph}>
            However, relying on it long-term without flexibility can increase the
            risk of depleting capital faster than expected.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            5% vs 4% vs 3%: what changes in practice
          </h2>

          <p className={styles.paragraph}>
            The difference between 3%, 4%, and 5% is not just a small percentage.
            It directly changes how much net worth you need by millions.
          </p>

          <p className={styles.paragraph}>
            Moving from 3% to 5% can reduce your required capital by almost half.
            But at the same time, it increases the pressure on your investments
            to perform consistently.
          </p>

          <p className={styles.paragraph}>
            This is why most people compare these strategies side by side before
            deciding. The right choice is not just about math, but about how much
            uncertainty you are willing to accept.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test different withdrawal strategies in seconds
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to compare 3%, 4%, and 5% scenarios and see how
              each one changes your retirement target.
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
              <Link href="/how-much-net-worth-needed-at-3-percent-withdrawal">
                3% withdrawal strategy
              </Link>
            </li>
            <li>
              <Link href="/how-much-net-worth-needed-at-4-percent-withdrawal">
                4% withdrawal strategy
              </Link>
            </li>
            <li>
              <Link href="/3-vs-5-percent-withdrawal-retirement">
                3% vs 5% comparison
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-20000-a-month">
                $20,000/month retirement
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
            A 5% withdrawal rate can significantly reduce the amount of net
            worth needed to retire, making high-income retirement more reachable
            in less time.
          </p>

          <p className={styles.paragraph}>
            But that comes with higher long-term uncertainty. The strategy
            demands more awareness, flexibility, and willingness to adapt.
          </p>

          <p className={styles.paragraph}>
            For many people, it works best when used alongside other income
            sources or as part of a broader, more flexible retirement plan.
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
