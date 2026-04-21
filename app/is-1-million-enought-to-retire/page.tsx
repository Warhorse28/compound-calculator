import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/is-1-million-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $1 Million Enough to Retire? What It Really Buys";
const pageTitle =
  "Is $1 Million Enough to Retire? What It Really Buys in Retirement";
const pageDescription =
  "See whether $1 million is enough to retire based on withdrawal rates, monthly income, and the lifestyle it may realistically support.";

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
    yearlyIncome: "$30,000",
    monthlyIncome: "$2,500",
    view: "Safer approach, but modest retirement income.",
  },
  {
    rate: "4%",
    yearlyIncome: "$40,000",
    monthlyIncome: "$3,333",
    view: "Common benchmark, but still fairly limited.",
  },
  {
    rate: "5%",
    yearlyIncome: "$50,000",
    monthlyIncome: "$4,167",
    view: "Higher income, but more long-term pressure.",
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
            $1 million sounds like a huge retirement number, but what matters is
            the income it can actually produce.
          </p>

          <p className={styles.intro}>
            In retirement, the question is not whether $1 million is impressive.
            The question is whether it can support your spending for the rest of
            your life without creating too much pressure on the portfolio.
          </p>

          <p className={styles.intro}>
            That depends on your withdrawal rate, your lifestyle, and whether
            your plan needs to support only basic expenses or a more comfortable
            retirement.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $1 million can be enough to retire in
              some situations, but it usually supports a modest retirement rather
              than a highly flexible or premium one.
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
            How much income can $1 million generate?
          </h2>

          <p className={styles.paragraph}>
            The amount of retirement income a $1 million portfolio can generate
            depends mostly on the withdrawal strategy you use.
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
            At a 4% withdrawal rate, $1 million produces about $40,000 per year,
            or roughly $3,333 per month before taxes.
          </p>

          <p className={styles.paragraph}>
            That may be enough for some retirees with lower expenses, but it can
            feel tight in higher-cost areas or for people expecting more
            lifestyle flexibility.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $1 million may be enough
          </h2>

          <p className={styles.paragraph}>
            $1 million may be enough if your retirement plan is lean, your
            housing costs are low, and your spending is well controlled.
          </p>

          <ul className={styles.list}>
            <li>You live in a lower-cost area</li>
            <li>You have little or no debt</li>
            <li>Your retirement lifestyle is moderate</li>
            <li>You can stay flexible if markets decline</li>
          </ul>

          <p className={styles.paragraph}>
            In that kind of setup, $1 million can support a real retirement. But
            it usually does not create a large margin for error.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $1 million is probably not enough
          </h2>

          <p className={styles.paragraph}>
            If you want a more comfortable retirement, plan to retire early, or
            expect higher healthcare, travel, or family support costs, $1
            million often falls short.
          </p>

          <p className={styles.paragraph}>
            The challenge is not only generating income. It is keeping that
            income stable through inflation, recessions, and long retirement
            timelines.
          </p>

          <p className={styles.paragraph}>
            This is why $1 million often works better as a solid starting point
            than as a truly comfortable finish line.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            The real question behind the $1 million target
          </h2>

          <p className={styles.paragraph}>
            For many people, the better question is not “Can I retire with $1
            million?” but “What kind of retirement does $1 million actually buy?”
          </p>

          <p className={styles.paragraph}>
            That reframes the decision in a much more practical way. It shifts
            the focus from a headline number to the monthly income and lifestyle
            that number can realistically support.
          </p>

          <p className={styles.paragraph}>
            In some cases, $1 million is enough. In others, it only gets you part
            of the way there.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your portfolio can really support
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test your own withdrawal strategy, income
              target, and timeline instead of relying on generic retirement
              numbers.
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
              <Link href="/is-2-million-enough-to-retire">
                Is $2 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/what-does-1-million-net-worth-mean-for-retirement">
                What $1 million net worth means for retirement
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-1-million-generate">
                How much income can $1 million generate?
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
            $1 million can be enough to retire, but it usually supports a more
            modest retirement than people imagine.
          </p>

          <p className={styles.paragraph}>
            Whether it works depends on your withdrawal rate, your cost of living,
            and how much flexibility you want in retirement.
          </p>

          <p className={styles.paragraph}>
            The smarter move is to measure the income $1 million can generate —
            not just the size of the number itself.
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
