import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-to-reach-100k-fast";
const calculatorPath = "/compound-interest-calculator";

const metaTitle = "How to Reach $100K Fast: Monthly Investing Paths";
const pageTitle =
  "How to Reach $100K Fast: Monthly Investing Paths, Timelines, and Calculator";
const pageDescription =
  "See realistic ways to reach $100K faster with monthly investing. Compare timelines, contribution levels, and use the calculator to test your scenario.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const pathRows = [
  {
    monthly: "$300",
    time: "~16 years",
    insight: "Lower pressure, but slower path.",
  },
  {
    monthly: "$500",
    time: "~11 years",
    insight: "Balanced path for many investors.",
  },
  {
    monthly: "$1,000",
    time: "~7 years",
    insight: "Much faster, but needs stronger cash flow.",
  },
  {
    monthly: "$1,500",
    time: "~5 years",
    insight: "Aggressive path with higher monthly pressure.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>100K goal</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Reaching $100K fast is not just about chasing high returns. In most
            cases, it comes down to contribution size, timeline, and staying
            consistent long enough for compounding to start helping.
          </p>

          <p className={styles.intro}>
            The path can be much shorter than people expect, but only if the
            monthly investment is realistic for your income and you do not break
            the plan too early.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> the fastest route to $100K usually
              comes from stronger monthly contributions, but the best route is
              the one you can actually sustain.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Calculate Your Path to $100K →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How fast can you realistically reach $100K?
          </h2>

          <p className={styles.paragraph}>
            These examples assume an <strong>8% annual return</strong>. The goal
            stays the same — only the monthly investment changes.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly investment</th>
                  <th className={styles.tableHead}>Estimated timeline</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {pathRows.map((row) => (
                  <tr key={row.monthly}>
                    <td className={styles.tableCellStrong}>{row.monthly}</td>
                    <td className={styles.tableCell}>{row.time}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The jump from $300 to $1,000 a month does more than shorten the
            timeline. It changes the entire speed of the plan.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What actually makes the path faster?
          </h2>

          <ul className={styles.list}>
            <li>higher monthly contributions</li>
            <li>starting now instead of delaying</li>
            <li>keeping the money invested consistently</li>
            <li>using realistic return assumptions</li>
          </ul>

          <p className={styles.paragraph}>
            Most people focus only on return rate. But for a $100K target,
            monthly contribution size often changes the timeline much more
            directly.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            The mistake that slows most people down
          </h2>

          <p className={styles.paragraph}>
            The biggest mistake is not choosing a contribution level that is too
            small. It is quitting before the plan has enough time to work.
          </p>

          <p className={styles.paragraph}>
            A fast path matters, but a sustainable path matters more. Reaching
            $100K fast only works if you can keep the monthly habit alive.
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Test your fastest realistic path</h2>

              <p className={styles.ctaText}>
                Adjust the monthly amount, timeline, and return to see which
                $100K path makes sense for your numbers.
              </p>

              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your $100K Scenario →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            If you want to reach $100K fast, the fastest answer is simple:
            invest more, start earlier, and stay consistent.
          </p>

          <p className={styles.paragraph}>
            The better answer is more realistic: choose the highest monthly
            amount you can sustain without breaking the plan.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to see how fast your own path could be?
            </p>

            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              Use the calculator now →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
