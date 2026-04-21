import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/net-worth-needed-to-retire-rich";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Net Worth Do You Need to Retire Rich?";
const pageTitle =
  "How Much Net Worth Do You Need to Retire Rich? A Clear Wealth Target Breakdown";
const pageDescription =
  "See how much net worth you may need to retire rich based on income goals, withdrawal rates, and long-term sustainability.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
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
  {
    income: "$20,000/month",
    at3: "$8.00M",
    at4: "$6.00M",
    at5: "$4.80M",
  },
  {
    income: "$30,000/month",
    at3: "$12.00M",
    at4: "$9.00M",
    at5: "$7.20M",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Rich retirement</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Retiring rich is not just about leaving work. It is about having the
            freedom to live at a higher level without constant financial limits.
          </p>

          <p className={styles.intro}>
            A rich retirement usually means more than covering bills comfortably.
            It often includes premium housing choices, travel, private
            healthcare, generous discretionary spending, and the ability to help
            family without damaging your own security.
          </p>

          <p className={styles.intro}>
            Because of that, the net worth needed to retire rich is usually far
            above the amount required for a standard or simply comfortable
            retirement.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> retiring rich is less about reaching
              a flashy number and more about building a portfolio that can
              support a high-income lifestyle for decades.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Find Your Rich Retirement Number →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Net worth needed for rich retirement income
          </h2>

          <p className={styles.paragraph}>
            “Rich” means different things to different people, but retirement
            income in the $10,000 to $30,000 per month range is often where the
            conversation moves from comfort into higher-end financial freedom.
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
            At these levels, the gap between withdrawal strategies becomes
            massive. A single percentage point can translate into millions of
            dollars in additional capital required.
          </p>

          <p className={styles.paragraph}>
            That is why wealthy retirement planning is not just about income. It
            is about capital durability, risk tolerance, and how much certainty
            you want built into the plan.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What a rich retirement usually includes
          </h2>

          <p className={styles.paragraph}>
            A rich retirement often means you are no longer optimizing around the
            minimum. You are optimizing around freedom, convenience, and choice.
          </p>

          <ul className={styles.list}>
            <li>Higher-end housing or multiple property options</li>
            <li>Frequent travel without major budget pressure</li>
            <li>Premium healthcare and lifestyle flexibility</li>
            <li>Greater ability to absorb inflation and market volatility</li>
          </ul>

          <p className={styles.paragraph}>
            The goal is not only to maintain your life. It is to expand your
            options while preserving long-term stability.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why rich retirement still needs discipline
          </h2>

          <p className={styles.paragraph}>
            A large portfolio does not automatically eliminate risk. In fact,
            higher spending levels can make retirement plans more fragile if the
            structure underneath them is weak.
          </p>

          <p className={styles.paragraph}>
            Market declines, poor withdrawal timing, and lifestyle inflation can
            still put pressure on a wealthy retirement plan. The difference is
            that the numbers are much larger.
          </p>

          <p className={styles.paragraph}>
            The smartest wealthy retirees usually pair higher income goals with a
            more thoughtful risk management approach.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Is retiring rich the same as being financially secure?
          </h2>

          <p className={styles.paragraph}>
            Not exactly. Financial security means your needs are covered with a
            solid margin of safety. Retiring rich usually means going well beyond
            that baseline.
          </p>

          <p className={styles.paragraph}>
            It includes lifestyle upgrades, more room for generosity, and more
            freedom to spend without the same trade-offs most retirees face.
          </p>

          <p className={styles.paragraph}>
            That is why the net worth threshold for rich retirement is much
            higher than the threshold for simply retiring comfortably.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Model your wealthy retirement target
            </h2>
            <p className={styles.ctaText}>
              Test higher income goals, different withdrawal rates, and long-term
              assumptions to see what level of portfolio may be needed.
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
              <Link href="/net-worth-needed-to-retire-comfortably">
                Net worth needed to retire comfortably
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-young">
                Net worth needed to retire young
              </Link>
            </li>
            <li>
              <Link href="/what-net-worth-generates-30000-a-month">
                What net worth generates $30,000 a month
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
            Retiring rich usually requires a portfolio large enough to support
            high monthly spending without creating constant long-term pressure.
          </p>

          <p className={styles.paragraph}>
            For many people, that means several million dollars at a minimum —
            and sometimes well beyond that depending on the lifestyle target and
            withdrawal strategy.
          </p>

          <p className={styles.paragraph}>
            The richer the retirement you want, the more important it becomes to
            balance freedom with durability.
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
