import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/is-2-million-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $2 Million Enough to Retire? A More Flexible Retirement Benchmark";
const pageTitle =
  "Is $2 Million Enough to Retire? A More Flexible Retirement Benchmark";
const pageDescription =
  "See whether $2 million is enough to retire based on withdrawal rates, monthly income, and the lifestyle it may realistically support.";

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
    yearlyIncome: "$60,000",
    monthlyIncome: "$5,000",
    view: "Safer structure with decent retirement flexibility.",
  },
  {
    rate: "4%",
    yearlyIncome: "$80,000",
    monthlyIncome: "$6,667",
    view: "Strong middle-ground for many retirees.",
  },
  {
    rate: "5%",
    yearlyIncome: "$100,000",
    monthlyIncome: "$8,333",
    view: "Higher lifestyle potential, but more pressure over time.",
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
            $2 million moves retirement from “possible” to much more flexible,
            but it still does not guarantee unlimited freedom.
          </p>

          <p className={styles.intro}>
            Compared with $1 million, a $2 million portfolio creates a very
            different retirement picture. It can produce meaningfully higher
            income and usually provides a stronger cushion against normal market
            volatility.
          </p>

          <p className={styles.intro}>
            Still, whether $2 million is enough depends on your withdrawal rate,
            cost of living, retirement age, and the lifestyle you expect the
            portfolio to support.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $2 million is enough for many
              retirees, but the level of comfort it creates depends far more on
              income expectations than on the headline number itself.
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
            How much income can $2 million generate?
          </h2>

          <p className={styles.paragraph}>
            The real value of a retirement portfolio comes from the income it can
            safely produce year after year.
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
            At a 4% withdrawal rate, $2 million can support about $80,000 per
            year, or roughly $6,667 per month before taxes.
          </p>

          <p className={styles.paragraph}>
            That often supports a solid retirement lifestyle, but it may still
            feel very different depending on where you live and how much margin
            you want built into your plan.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $2 million is enough to retire
          </h2>

          <p className={styles.paragraph}>
            For many households, $2 million is a realistic retirement finish
            line. It can support a comfortable lifestyle without forcing the
            portfolio into an overly aggressive withdrawal plan.
          </p>

          <ul className={styles.list}>
            <li>You want more than basic retirement income</li>
            <li>You prefer some margin above minimum expenses</li>
            <li>You expect moderate lifestyle flexibility</li>
            <li>You want a stronger buffer than $1 million can provide</li>
          </ul>

          <p className={styles.paragraph}>
            In many cases, $2 million is where retirement starts to feel much
            less fragile.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $2 million may still fall short
          </h2>

          <p className={styles.paragraph}>
            If you plan to retire early, live in a high-cost area, spend heavily
            on travel, or support a larger household, $2 million may not go as
            far as expected.
          </p>

          <p className={styles.paragraph}>
            The number also becomes less powerful if taxes, healthcare, housing,
            and inflation consume a large share of your available income.
          </p>

          <p className={styles.paragraph}>
            A bigger portfolio does not remove risk. It only changes the scale of
            what you can safely afford.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $2 million feels very different from $1 million
          </h2>

          <p className={styles.paragraph}>
            The jump from $1 million to $2 million is not just a percentage
            increase. It can completely change the quality of retirement income
            you can generate.
          </p>

          <p className={styles.paragraph}>
            Instead of a modest plan built around tight spending, $2 million may
            support a more balanced retirement with room for adjustments,
            discretionary spending, and a better buffer against bad market years.
          </p>

          <p className={styles.paragraph}>
            That is why many retirees see $2 million as a much stronger
            real-world benchmark than $1 million.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what $2 million could actually support
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different withdrawal rates, monthly
              income targets, and timelines based on your own situation.
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
              <Link href="/is-1-million-enough-to-retire">
                Is $1 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/is-3-million-enough-to-retire">
                Is $3 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-2-million-generate">
                How much income can $2 million generate?
              </Link>
            </li>
            <li>
              <Link href="/what-does-2-million-net-worth-mean-for-retirement">
                What $2 million net worth means for retirement
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
            $2 million is enough to retire in many situations, and it usually
            creates much more flexibility than a $1 million portfolio.
          </p>

          <p className={styles.paragraph}>
            But whether it is enough still depends on the income you want, the
            lifestyle you expect, and how much long-term safety you need.
          </p>

          <p className={styles.paragraph}>
            The smartest way to judge $2 million is not by the size of the
            number, but by the retirement income it can realistically sustain.
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
