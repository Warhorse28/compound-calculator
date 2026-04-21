import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/net-worth-needed-for-early-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Net Worth You Really Need for Early Retirement";
const pageTitle =
  "How Much Net Worth You Really Need for Early Retirement (And Why It’s Higher Than You Think)";
const pageDescription =
  "Discover how much net worth is required for early retirement based on income goals, withdrawal rates, and long-term sustainability.";

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
    at3: "$2.00M",
    at4: "$1.50M",
    at5: "$1.20M",
  },
  {
    income: "$8,000/month",
    at3: "$3.20M",
    at4: "$2.40M",
    at5: "$1.92M",
  },
  {
    income: "$10,000/month",
    at3: "$4.00M",
    at4: "$3.00M",
    at5: "$2.40M",
  },
  {
    income: "$15,000/month",
    at3: "$6.00M",
    at4: "$4.50M",
    at5: "$3.60M",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Early retirement planning</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Early retirement is not just a financial goal. It is a long-term
            stress test for your entire portfolio.
          </p>

          <p className={styles.intro}>
            Retiring early means your money may need to last 30, 40, or even 50
            years. That changes everything. The same strategy that works for a
            20-year retirement can completely fail over longer periods.
          </p>

          <p className={styles.intro}>
            Because of this, early retirement almost always requires more net
            worth than people initially expect. The timeline creates pressure,
            and that pressure demands a larger margin of safety.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> early retirement is not about hitting
              a number — it is about sustaining that number for decades without
              breaking your plan.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Find Your Early Retirement Number →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Net worth required for early retirement scenarios
          </h2>

          <p className={styles.paragraph}>
            The amount you need depends heavily on your withdrawal strategy.
            Lower withdrawal rates increase safety, but they also require more
            capital upfront.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>3% strategy</th>
                  <th>4% strategy</th>
                  <th>5% strategy</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td className={styles.tableCellStrong}>{row.income}</td>
                    <td>{row.at3}</td>
                    <td>{row.at4}</td>
                    <td>{row.at5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The gap between these strategies is not small. Moving from a 4%
            withdrawal rate to 3% can increase your required net worth by
            hundreds of thousands — or even millions — depending on your income.
          </p>

          <p className={styles.paragraph}>
            That difference can determine whether your retirement lasts 40 years
            or fails much earlier.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why early retirement is harder than it looks
          </h2>

          <p className={styles.paragraph}>
            One of the biggest risks in early retirement is not just how much you
            withdraw, but when you withdraw it.
          </p>

          <p className={styles.paragraph}>
            This is known as sequence of returns risk. If your portfolio
            experiences losses early in retirement, withdrawals amplify those
            losses and make recovery much harder.
          </p>

          <p className={styles.paragraph}>
            Over a 40-year horizon, even small mistakes or bad timing can have a
            massive impact on long-term outcomes.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What most early retirees underestimate
          </h2>

          <p className={styles.paragraph}>
            Many people focus only on reaching a target number. But sustaining
            that number is a completely different challenge.
          </p>

          <ul className={styles.list}>
            <li>Inflation slowly increases your required income over time</li>
            <li>Market downturns can hit early and reduce your base capital</li>
            <li>Longer lifespans increase uncertainty dramatically</li>
            <li>Spending patterns rarely stay perfectly stable</li>
          </ul>

          <p className={styles.paragraph}>
            Early retirement works best when flexibility is built into the plan.
            Rigid strategies tend to break under long-term pressure.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Building a more resilient early retirement plan
          </h2>

          <p className={styles.paragraph}>
            A stronger approach is to combine conservative withdrawal rates with
            adaptability.
          </p>

          <p className={styles.paragraph}>
            Some early retirees reduce risk by adjusting spending during market
            downturns, generating part-time income, or maintaining a larger cash
            buffer.
          </p>

          <p className={styles.paragraph}>
            The goal is not just to retire early — it is to stay retired.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your early retirement scenario
            </h2>
            <p className={styles.ctaText}>
              Run different income targets, timelines, and withdrawal strategies
              to see how much you actually need.
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
              <Link href="/net-worth-needed-to-retire-young">
                How much you need to retire in your 40s
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-comfortably">
                What “comfortable retirement” really means financially
              </Link>
            </li>
            <li>
              <Link href="/how-much-net-worth-needed-at-3-percent-withdrawal">
                Why a 3% withdrawal rate changes everything
              </Link>
            </li>
            <li>
              <Link href="/safe-withdrawal-rate-for-retirement">
                Safe withdrawal strategies explained
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
            Early retirement requires more than just reaching a number. It
            requires a plan that can survive decades of uncertainty.
          </p>

          <p className={styles.paragraph}>
            For most people, that means using a lower withdrawal rate, building
            flexibility into spending, and preparing for long-term market
            variability.
          </p>

          <p className={styles.paragraph}>
            The difference between a fragile plan and a resilient one often comes
            down to discipline, margin, and realistic expectations.
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
