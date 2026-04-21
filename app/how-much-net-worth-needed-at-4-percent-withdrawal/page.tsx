import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/how-much-net-worth-needed-at-4-percent-withdrawal";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Net Worth Do You Need at a 4% Withdrawal Rate?";
const pageTitle =
  "How Much Net Worth Do You Need at a 4% Withdrawal Rate?";
const pageDescription =
  "See how much net worth is needed at a 4% withdrawal rate and why this is one of the most commonly used retirement planning benchmarks.";

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
    netWorth: "$1.50 million",
    yearlyIncome: "$60,000",
    view: "Popular middle-ground starting point.",
  },
  {
    income: "$10,000/month",
    netWorth: "$3.00 million",
    yearlyIncome: "$120,000",
    view: "Strong benchmark for higher retirement income.",
  },
  {
    income: "$20,000/month",
    netWorth: "$6.00 million",
    yearlyIncome: "$240,000",
    view: "Large target, but still more flexible than 3%.",
  },
  {
    income: "$40,000/month",
    netWorth: "$12.00 million",
    yearlyIncome: "$480,000",
    view: "High-income retirement with balanced assumptions.",
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
            A 4% withdrawal rate is one of the most widely used benchmarks in
            retirement planning.
          </p>

          <p className={styles.intro}>
            It sits in the middle between safety and income efficiency. It does
            not require as much capital as a 3% strategy, but it still gives a
            more conservative structure than a 5% withdrawal approach.
          </p>

          <p className={styles.intro}>
            That is why many retirement plans start here. It offers a practical
            balance between how much income you want and how much net worth you
            realistically need to build.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> with a 4% withdrawal rate, every
              $1,000/month of retirement income requires about $300,000 in net
              worth.
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
            Net worth required at a 4% withdrawal rate
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
            This is why the 4% rule is so popular. It turns retirement planning
            into something easier to visualize. Once you know the income target,
            the net worth target becomes much more concrete.
          </p>

          <p className={styles.paragraph}>
            For example, if you want $10,000 a month in retirement, a 4%
            strategy points to about $3 million. If you want $20,000 a month,
            the benchmark rises to about $6 million.
          </p>

          <p className={styles.paragraph}>
            The math is simple, but the implications are important. Small
            changes in withdrawal rate can mean millions of dollars more or less
            in required capital.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why the 4% rule became the default benchmark
          </h2>

          <p className={styles.paragraph}>
            The 4% withdrawal rate became popular because it gives people a
            practical framework. It is conservative enough to feel serious, but
            not so strict that the target becomes unreachable for most long-term
            savers.
          </p>

          <p className={styles.paragraph}>
            It works especially well as a planning anchor. Even if someone later
            decides to use 3.5% or 4.5%, the 4% rule often provides the first
            realistic estimate of how much retirement capital may be needed.
          </p>

          <p className={styles.paragraph}>
            That makes it useful not because it is perfect, but because it is
            clear, intuitive, and easy to build around.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When a 4% withdrawal rate may or may not fit
          </h2>

          <p className={styles.paragraph}>
            A 4% strategy can make sense for traditional retirement timelines,
            especially when someone has a diversified portfolio and some
            flexibility in spending.
          </p>

          <p className={styles.paragraph}>
            But it may feel too aggressive for very early retirement or too
            optimistic for people who want a larger safety cushion against poor
            market conditions.
          </p>

          <p className={styles.paragraph}>
            In other words, 4% is often a strong starting point, but not always
            the final answer. The right number depends on timeline, risk
            tolerance, and how much uncertainty you want to absorb.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Compare your retirement target with real numbers
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test how different withdrawal rates change
              the amount of net worth you may need.
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
              <Link href="/how-much-net-worth-needed-at-5-percent-withdrawal">
                5% withdrawal strategy
              </Link>
            </li>
            <li>
              <Link href="/3-vs-4-percent-withdrawal-retirement">
                3% vs 4% withdrawal rate
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-10000-a-month">
                $10,000/month retirement
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
            A 4% withdrawal rate remains one of the clearest retirement planning
            benchmarks because it balances income efficiency with reasonable
            caution.
          </p>

          <p className={styles.paragraph}>
            It usually requires less capital than a 3% approach, while still
            giving a stronger structure than more aggressive withdrawal
            strategies.
          </p>

          <p className={styles.paragraph}>
            For many people, it is the most practical place to begin. From
            there, you can adjust up or down based on how conservative you want
            your plan to be.
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
