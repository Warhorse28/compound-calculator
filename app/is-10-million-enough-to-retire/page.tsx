import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/is-10-million-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $10 Million Enough to Retire? What This Level of Wealth Can Really Support";
const pageTitle =
  "Is $10 Million Enough to Retire? What This Level of Wealth Can Really Support";
const pageDescription =
  "See whether $10 million is enough to retire based on withdrawal rates, monthly income, and the kind of lifestyle this level of wealth can realistically sustain.";

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
    yearlyIncome: "$300,000",
    monthlyIncome: "$25,000",
    view: "Very conservative with major long-term protection.",
  },
  {
    rate: "4%",
    yearlyIncome: "$400,000",
    monthlyIncome: "$33,333",
    view: "Extremely strong income with broad flexibility.",
  },
  {
    rate: "5%",
    yearlyIncome: "$500,000",
    monthlyIncome: "$41,667",
    view: "Ultra-premium lifestyle, but still needs discipline.",
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
            $10 million is enough to retire in most scenarios, but what it
            creates is not just retirement. It creates a very different level of
            financial freedom.
          </p>

          <p className={styles.intro}>
            At this level, the question is usually no longer whether retirement
            is possible. The real question becomes how much freedom, margin, and
            optionality you want your portfolio to deliver over time.
          </p>

          <p className={styles.intro}>
            Even so, a portfolio this large is not magic. Taxes, spending level,
            retirement age, family goals, and withdrawal discipline still shape
            the outcome in meaningful ways.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $10 million can support an extremely
              flexible retirement, but the real advantage is control — not just
              the size of the balance.
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
            How much income can $10 million generate?
          </h2>

          <p className={styles.paragraph}>
            The income potential of a $10 million portfolio is where this number
            becomes easier to understand in real life.
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
            At a 4% withdrawal rate, $10 million can support about $400,000 per
            year, or roughly $33,333 per month before taxes.
          </p>

          <p className={styles.paragraph}>
            That level of income can support a very high-end lifestyle in most
            places while still allowing for a relatively balanced withdrawal
            approach.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes when retirement reaches this level?
          </h2>

          <p className={styles.paragraph}>
            A $10 million retirement usually changes the conversation from
            budgeting around limits to managing abundance with discipline.
          </p>

          <ul className={styles.list}>
            <li>Much more room to stay conservative while spending well</li>
            <li>Greater protection against inflation and volatility</li>
            <li>More flexibility in taxes, gifting, and legacy planning</li>
            <li>Less dependence on perfect market timing</li>
          </ul>

          <p className={styles.paragraph}>
            At this level, retirement can feel much less fragile because the
            portfolio has more capacity to absorb shocks without forcing major
            lifestyle changes.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $10 million is more than enough
          </h2>

          <p className={styles.paragraph}>
            For most retirees, $10 million is far beyond the threshold needed for
            a comfortable retirement. It can support substantial spending,
            premium healthcare, travel, family support, and long-term optionality
            without pushing the portfolio too hard.
          </p>

          <p className={styles.paragraph}>
            It also creates more room for lower withdrawal rates, which can make
            the plan significantly more durable over multi-decade retirements.
          </p>

          <p className={styles.paragraph}>
            In many cases, this is the point where retirement shifts closer to
            financial independence at an elite level.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $10 million still does not make planning irrelevant
          </h2>

          <p className={styles.paragraph}>
            A portfolio this large reduces pressure, but it does not eliminate
            risk. Overspending, poor tax planning, very early retirement, and
            aggressive withdrawals can still weaken even a strong portfolio over
            time.
          </p>

          <p className={styles.paragraph}>
            Wealth increases options, but strong retirement outcomes still come
            from structure. The portfolio needs a plan, not just a headline
            number.
          </p>

          <p className={styles.paragraph}>
            That is especially true if you want the money to support not only
            lifestyle, but also family goals, philanthropy, or multigenerational
            wealth transfer.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how far your portfolio can really go
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different withdrawal rates, income
              targets, and timelines based on the retirement you actually want to
              build.
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
              <Link href="/5-million-vs-10-million-retirement">
                $5 million vs $10 million retirement
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-5-million-generate">
                How much income can $5 million generate?
              </Link>
            </li>
            <li>
              <Link href="/what-does-5-million-net-worth-mean-for-retirement">
                What $5 million net worth means for retirement
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
            $10 million is enough to retire in the vast majority of scenarios,
            and in many cases it supports a very high level of freedom.
          </p>

          <p className={styles.paragraph}>
            But the biggest advantage is not just the income it can generate. It
            is the flexibility to stay conservative while still living extremely
            well.
          </p>

          <p className={styles.paragraph}>
            The smartest way to think about $10 million is not as a finish line,
            but as a portfolio powerful enough to support both lifestyle and
            long-term control.
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
