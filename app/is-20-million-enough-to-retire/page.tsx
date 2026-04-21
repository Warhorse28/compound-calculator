import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/is-20-million-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $20 Million Enough to Retire? What Ultra-Wealth Retirement Really Looks Like";
const pageTitle =
  "Is $20 Million Enough to Retire? What Ultra-Wealth Retirement Really Looks Like";
const pageDescription =
  "See whether $20 million is enough to retire based on withdrawal rates, retirement income, and what this level of wealth can realistically support over time.";

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
    yearlyIncome: "$600,000",
    monthlyIncome: "$50,000",
    view: "Very conservative with exceptional long-term durability.",
  },
  {
    rate: "4%",
    yearlyIncome: "$800,000",
    monthlyIncome: "$66,667",
    view: "Ultra-flexible income with strong long-term balance.",
  },
  {
    rate: "5%",
    yearlyIncome: "$1,000,000",
    monthlyIncome: "$83,333",
    view: "Very high spending power, but structure still matters.",
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
            $20 million is enough to retire in almost any normal scenario, but
            the real question at this level is no longer about sufficiency.
          </p>

          <p className={styles.intro}>
            At this point, retirement planning becomes less about whether your
            money can last and more about how you want that money to function.
            The focus shifts toward control, tax efficiency, legacy, optionality,
            and long-term capital preservation.
          </p>

          <p className={styles.intro}>
            Even so, very large portfolios still benefit from clear structure.
            Wealth reduces pressure, but it does not make planning irrelevant.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $20 million does not just support
              retirement income. It gives you the ability to design retirement on
              your own terms while staying conservative.
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
            How much income can $20 million generate?
          </h2>

          <p className={styles.paragraph}>
            The most useful way to understand a $20 million portfolio is to look
            at the income it can generate under different withdrawal strategies.
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
            At a 4% withdrawal rate, $20 million can support about $800,000 per
            year, or roughly $66,667 per month before taxes.
          </p>

          <p className={styles.paragraph}>
            That level of income can support a very high-end lifestyle while
            still leaving room for a relatively balanced and durable retirement
            plan.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes at the $20 million level?
          </h2>

          <p className={styles.paragraph}>
            Once a portfolio reaches this size, retirement often stops feeling
            like a financial question and starts feeling like an asset management
            question.
          </p>

          <ul className={styles.list}>
            <li>More room to stay conservative without sacrificing lifestyle</li>
            <li>Greater flexibility in taxes, gifting, and estate planning</li>
            <li>More protection against inflation and weak market periods</li>
            <li>Less dependence on maximizing returns to maintain income</li>
          </ul>

          <p className={styles.paragraph}>
            In practical terms, this means more choices and less fragility.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Is $20 million more than enough?
          </h2>

          <p className={styles.paragraph}>
            For most people, yes. This level of wealth is far above what is
            needed for a comfortable retirement and often well above what is
            needed for a premium one.
          </p>

          <p className={styles.paragraph}>
            It can support high spending, travel, real estate flexibility,
            private healthcare, philanthropy, family support, and long-term
            wealth preservation without forcing aggressive withdrawals.
          </p>

          <p className={styles.paragraph}>
            The main advantage is not just the amount you can spend. It is the
            amount you can protect while still spending well.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why strategy still matters at this level
          </h2>

          <p className={styles.paragraph}>
            Very large portfolios still need structure. Poor tax planning,
            uncontrolled spending, aggressive withdrawals, and weak portfolio
            design can still reduce long-term efficiency.
          </p>

          <p className={styles.paragraph}>
            The difference is that mistakes are less likely to destroy the plan,
            but they can still create unnecessary leakage over decades.
          </p>

          <p className={styles.paragraph}>
            That is why high-net-worth retirement is often more about management
            quality than about the raw number itself.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Model your retirement income with real numbers
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different withdrawal rates, income
              targets, and long-term assumptions based on the retirement
              structure you want.
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
              <Link href="/is-15-million-enough-to-retire">
                Is $15 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/is-10-million-enough-to-retire">
                Is $10 million enough to retire?
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
            $20 million is enough to retire in virtually any realistic scenario,
            and for most people it supports a level of flexibility far beyond
            standard retirement planning.
          </p>

          <p className={styles.paragraph}>
            The deeper value of this number is not just income. It is the ability
            to stay conservative, preserve capital, and still maintain a very
            high level of freedom.
          </p>

          <p className={styles.paragraph}>
            At this level, retirement becomes less about reaching a target and
            more about managing wealth intelligently over time.
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
