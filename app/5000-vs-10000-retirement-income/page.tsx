import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/5000-vs-10000-retirement-income";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$5,000 vs $10,000 a Month in Retirement: What Changes?";
const pageTitle =
  "$5,000 vs $10,000 a Month in Retirement: What Changes?";
const pageDescription =
  "Compare $5,000 vs $10,000 a month in retirement and see how lifestyle, flexibility, and portfolio targets change over time.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparisonRows = [
  {
    income: "$5,000/month",
    lifestyle: "Comfortable",
    portfolio: "~$1.8M",
    insight: "Balanced retirement target with moderate flexibility.",
  },
  {
    income: "$10,000/month",
    lifestyle: "High comfort",
    portfolio: "~$3.6M",
    insight: "Premium lifestyle target with much higher capital needs.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement income comparison</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            The difference between $5,000 and $10,000 a month in retirement is
            not just a bigger paycheck. It changes lifestyle, flexibility, and
            the size of the portfolio you need behind it.
          </p>

          <p className={styles.intro}>
            Both numbers can support retirement. But they support very different
            versions of retirement, and the planning requirements are not even
            close.
          </p>

          <p className={styles.intro}>
            That is why income-based retirement planning is so useful. It turns
            an abstract goal into something practical and measurable.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> doubling your retirement income
              target does not just raise the lifestyle. It raises the portfolio
              pressure, the planning demands, and the margin for error.
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
            What changes between $5,000 and $10,000 a month?
          </h2>

          <p className={styles.paragraph}>
            These examples assume a long-term retirement plan and a moderate
            withdrawal framework. They are simplified planning ranges, not fixed
            promises.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly income</th>
                  <th className={styles.tableHead}>Lifestyle</th>
                  <th className={styles.tableHead}>Estimated portfolio</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.income}>
                    <td className={styles.tableCellStrong}>{row.income}</td>
                    <td className={styles.tableCellStrong}>{row.lifestyle}</td>
                    <td className={styles.tableCellStrong}>{row.portfolio}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The gap is not only numerical. A higher income target usually means
            more lifestyle freedom, but also a far larger capital requirement.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why the portfolio gap gets so large
          </h2>

          <p className={styles.paragraph}>
            Retirement income scales differently from short-term spending.
            Higher targets usually require a much larger base because that income
            has to be sustained for years or even decades.
          </p>

          <ul className={styles.list}>
            <li>higher income targets need larger portfolios</li>
            <li>longer retirements increase the required margin of safety</li>
            <li>inflation puts more pressure on higher-spending lifestyles</li>
            <li>flexibility in retirement usually comes from excess capital</li>
          </ul>

          <p className={styles.paragraph}>
            This is why a retirement plan should be based on income, time, and
            lifestyle together — not just a single round number.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Which target makes more sense for you?
          </h2>

          <p className={styles.paragraph}>
            The better target depends on how you want to live and how realistic
            it is for you to build the capital behind it.
          </p>

          <p className={styles.paragraph}>
            If you want more detail, compare{" "}
            <Link
              href="/how-much-do-you-need-to-retire-with-5000-a-month"
              className={styles.bottomCtaLink}
            >
              retiring with $5,000 a month
            </Link>{" "}
            and{" "}
            <Link
              href="/how-much-do-you-need-to-retire-with-10000-a-month"
              className={styles.bottomCtaLink}
            >
              retiring with $10,000 a month
            </Link>
            .
          </p>

          <p className={styles.paragraph}>
            If you want the broader framework, read{" "}
            <Link
              href="/how-much-income-do-you-need-to-retire"
              className={styles.bottomCtaLink}
            >
              how much income you need to retire
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Compare your own retirement income target
              </h2>
              <p className={styles.ctaText}>
                Adjust your assumptions and see what kind of portfolio may be
                needed for the retirement income you want.
              </p>
              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your Numbers →
              </Link>
            </div>
          </div>
        </section>

        {/* 🔥 BLOCO DE LINKS INTERNOS */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Explore related retirement income scenarios
          </h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/how-much-do-you-need-to-retire-with-5000-a-month"
                className={styles.bottomCtaLink}
              >
                How much do you need to retire with $5,000 a month
              </Link>
            </li>

            <li>
              <Link
                href="/how-much-do-you-need-to-retire-with-10000-a-month"
                className={styles.bottomCtaLink}
              >
                How much do you need to retire with $10,000 a month
              </Link>
            </li>

            <li>
              <Link
                href="/how-much-income-do-you-need-to-retire"
                className={styles.bottomCtaLink}
              >
                How much income do you need to retire
              </Link>
            </li>

            <li>
              <Link
                href="/how-much-do-you-need-to-retire-comfortably"
                className={styles.bottomCtaLink}
              >
                How much do you need to retire comfortably
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            The difference between $5,000 and $10,000 a month in retirement is
            much bigger than it first appears. It changes not just spending, but
            the entire scale of the plan behind it.
          </p>

          <p className={styles.paragraph}>
            Income-first planning makes retirement goals easier to compare,
            understand, and build toward realistically.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own retirement income goal?
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
