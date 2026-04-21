import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-do-you-need-to-retire-with-10000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Retire With $10,000 a Month?";

const pageTitle =
  "How Much Do You Need to Retire With $10,000 a Month? A Practical Breakdown";

const pageDescription =
  "See how much you may need to retire with $10,000 a month. Explore retirement income targets, timelines, and realistic planning scenarios.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    timeline: "25 years",
    target: "~$3.0M",
    insight: "Higher withdrawal pressure and less room for error.",
  },
  {
    timeline: "30 years",
    target: "~$3.6M",
    insight: "A more balanced long-term planning target.",
  },
  {
    timeline: "35+ years",
    target: "~$4.2M+",
    insight: "More conservative and flexible retirement planning.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement income target</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Wanting $10,000 a month in retirement is a premium lifestyle goal —
            but the real question is how much capital you need to support that
            income safely.
          </p>

          <p className={styles.intro}>
            The answer depends on how long you expect retirement to last, how
            conservative you want your plan to be, and how much flexibility you
            want later.
          </p>

          <p className={styles.intro}>
            The same monthly income target can require very different portfolio
            sizes depending on whether you are planning for 25, 30, or 35+
            years.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $10,000 a month is not just an
              income target. It is a portfolio-size decision, and the timeline
              changes everything.
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
            How much you may need for $10,000 a month
          </h2>

          <p className={styles.paragraph}>
            These are simplified examples to show planning ranges. They are not
            promises, but realistic ways to think about a higher retirement
            income target.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Retirement timeline</th>
                  <th className={styles.tableHead}>Estimated portfolio target</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row) => (
                  <tr key={row.timeline}>
                    <td className={styles.tableCellStrong}>{row.timeline}</td>
                    <td className={styles.tableCellStrong}>{row.target}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The longer your retirement may last, the more capital you usually
            need to support the same monthly income comfortably.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why the timeline matters even more at higher income levels
          </h2>

          <p className={styles.paragraph}>
            A $10,000 monthly target creates more pressure because the income
            level is higher and the margin for planning mistakes gets smaller.
          </p>

          <ul className={styles.list}>
            <li>shorter retirements can work with less capital</li>
            <li>longer retirements need more safety and flexibility</li>
            <li>inflation puts more pressure on higher lifestyle targets</li>
            <li>larger portfolios usually provide more room for error</li>
          </ul>

          <p className={styles.paragraph}>
            That is why retirement planning should not stop at income alone.
            Income, flexibility, and timeline need to be planned together.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How to think about your own target
          </h2>

          <p className={styles.paragraph}>
            Instead of asking only “How much do I need?”, ask:
          </p>

          <ul className={styles.list}>
            <li>how long might I need this income to last?</li>
            <li>how conservative do I want my plan to be?</li>
            <li>how much flexibility do I want in retirement?</li>
          </ul>

          <p className={styles.paragraph}>
            If you want a broader comparison, read{" "}
            <Link
              href="/how-much-income-do-you-need-to-retire"
              className={styles.bottomCtaLink}
            >
              how much income you need to retire
            </Link>{" "}
            or explore{" "}
            <Link
              href="/how-much-do-you-need-to-retire-with-5000-a-month"
              className={styles.bottomCtaLink}
            >
              how much you may need for $5,000 a month
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Build your $10,000-a-month scenario
              </h2>

              <p className={styles.ctaText}>
                Adjust your timeline, contributions, and assumptions to see how
                close your plan could get to $10,000 a month in retirement.
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
            Retiring with $10,000 a month is not just about hitting a large
            number. It is about matching income, timeline, and flexibility in a
            realistic way.
          </p>

          <p className={styles.paragraph}>
            The target portfolio may look big, but it becomes much easier to
            understand when you break it into income and time-based planning.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own target?
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
