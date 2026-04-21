import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-income-do-you-need-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Income Do You Need to Retire? A Practical Breakdown";

const pageTitle =
  "How Much Income Do You Need to Retire? A Practical Breakdown";

const pageDescription =
  "Learn how much retirement income you may need based on lifestyle, spending, and long-term planning. Explore realistic scenarios and calculate your plan.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    income: "$2,000/month",
    lifestyle: "Basic",
    insight: "Can cover essentials, but usually leaves limited flexibility.",
  },
  {
    income: "$4,000/month",
    lifestyle: "Balanced",
    insight: "More room for comfort, moderate freedom, and fewer trade-offs.",
  },
  {
    income: "$6,000+/month",
    lifestyle: "High comfort",
    insight: "Supports a more flexible lifestyle with stronger spending power.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement income planning</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            The real question in retirement is not just how much money you want
            to have. It is how much monthly income you want that money to
            produce.
          </p>

          <p className={styles.intro}>
            Retirement planning becomes clearer when you think in terms of
            monthly income instead of one big final number. Income is what
            supports your lifestyle.
          </p>

          <p className={styles.intro}>
            The amount you need depends on how you want to live, how much you
            spend, and how much flexibility you want later.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> retirement income is the practical
              side of retirement planning. Your target lifestyle determines the
              income you need, and that income determines how much you need to
              build.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Calculate Your Retirement Plan →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What different retirement income levels usually mean
          </h2>

          <p className={styles.paragraph}>
            These are simplified examples. The point is not to promise a fixed
            lifestyle, but to show how different income levels usually affect
            retirement comfort.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly income</th>
                  <th className={styles.tableHead}>Lifestyle</th>
                  <th className={styles.tableHead}>What it usually means</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row) => (
                  <tr key={row.income}>
                    <td className={styles.tableCellStrong}>{row.income}</td>
                    <td className={styles.tableCellStrong}>{row.lifestyle}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The bigger the monthly income target, the stronger your retirement
            portfolio usually needs to be.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What determines how much retirement income you need
          </h2>

          <ul className={styles.list}>
            <li>your expected monthly expenses</li>
            <li>the lifestyle you want to maintain</li>
            <li>housing, healthcare, and travel plans</li>
            <li>how conservative or flexible you want to be</li>
            <li>how long your retirement may last</li>
          </ul>

          <p className={styles.paragraph}>
            Most people underestimate how much flexibility matters. A retirement
            plan that only covers essentials may work on paper, but feel tight
            in real life.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why income matters more than the final number
          </h2>

          <p className={styles.paragraph}>
            A portfolio value by itself does not tell you much. What matters is
            what kind of income that portfolio can realistically support over
            time.
          </p>

          <p className={styles.paragraph}>
            That is why retirement planning becomes much clearer when you start
            with income first, then work backward into how much you may need to
            invest.
          </p>

          <p className={styles.paragraph}>
            If you want a broader view, compare this with{" "}
            <Link
              href="/how-much-do-you-need-to-retire-comfortably"
              className={styles.bottomCtaLink}
            >
              how much you need to retire comfortably
            </Link>{" "}
            or explore{" "}
            <Link
              href="/how-much-to-invest-monthly-to-retire"
              className={styles.bottomCtaLink}
            >
              how much to invest monthly for retirement
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Build your retirement income scenario
              </h2>

              <p className={styles.ctaText}>
                Adjust your monthly investment and timeline to estimate what kind
                of retirement income your plan could support.
              </p>

              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your Numbers →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Retirement income is what actually supports your lifestyle. That is
            why it makes more sense to plan around monthly income than a single
            portfolio number.
          </p>

          <p className={styles.paragraph}>
            Define the lifestyle first, estimate the income it requires, and
            then build your investing plan around that target.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own retirement income path?
            </p>

            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              Calculate now →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
