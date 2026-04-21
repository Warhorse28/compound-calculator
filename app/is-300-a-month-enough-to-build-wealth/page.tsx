import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-300-a-month-enough-to-build-wealth";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $300 a Month Enough to Build Wealth? Realistic Breakdown";

const pageTitle =
  "Is $300 a Month Enough to Build Wealth Over Time?";

const pageDescription =
  "See if investing $300 a month is enough to build real wealth. Explore timelines, outcomes, and realistic expectations.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarioRows = [
  {
    years: "10 years",
    invested: "$36,000",
    result: "~$55,000",
    insight: "Growth is visible, but still early.",
  },
  {
    years: "20 years",
    invested: "$72,000",
    result: "~$176,000",
    insight: "Compounding starts gaining strength.",
  },
  {
    years: "30 years",
    invested: "$108,000",
    result: "~$447,000",
    insight: "Time turns consistency into serious results.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Monthly investing reality</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            $300 a month may not seem like much — but over time, it can turn into
            a significant amount.
          </p>

          <p className={styles.intro}>
            The real question is not whether $300 is “enough”, but how long you
            stay consistent and allow compounding to work.
          </p>

          <p className={styles.intro}>
            Many people underestimate this level of investing because the early
            results look small.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $300 a month is not about fast
              results — it is about long-term consistency turning into real
              wealth.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              See What $300/Month Can Become →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $300 a month can realistically turn into
          </h2>

          <p className={styles.paragraph}>
            These examples assume an <strong>8% annual return</strong>. The
            contribution stays the same — only time changes.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Timeline</th>
                  <th className={styles.tableHead}>Total invested</th>
                  <th className={styles.tableHead}>Estimated result</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {scenarioRows.map((row) => (
                  <tr key={row.years}>
                    <td className={styles.tableCellStrong}>{row.years}</td>
                    <td className={styles.tableCell}>{row.invested}</td>
                    <td className={styles.tableCellStrong}>{row.result}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The longer the timeline, the more the results accelerate. The jump
            between 20 and 30 years is where compounding becomes clearly visible.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $300 a month is often underestimated
          </h2>

          <p className={styles.paragraph}>
            Most people judge investing over short timeframes. Over a few months
            or even a couple of years, $300 does not look impressive.
          </p>

          <p className={styles.paragraph}>
            But investing does not grow linearly. Over longer periods, the curve
            begins to accelerate — and that is where real results appear.
          </p>

          <ul className={styles.list}>
            <li>early growth feels slow</li>
            <li>consistency builds the base</li>
            <li>compounding increases over time</li>
            <li>long timelines create exponential effects</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $300 a month may not be enough
          </h2>

          <p className={styles.paragraph}>
            $300 a month can build strong results — but it depends on your goals
            and timeline.
          </p>

          <p className={styles.paragraph}>
            If your target is aggressive or your timeline is short, you may need
            to increase your monthly contribution.
          </p>

          <p className={styles.paragraph}>
            You can compare with higher contributions like{" "}
            <Link
              href="/if-you-invest-500-a-month-heres-how-much-you-could-have"
              className={styles.bottomCtaLink}
            >
              $500 a month
            </Link>{" "}
            or see how smaller contributions behave in the{" "}
            <Link
              href="/if-you-invest-100-a-month-heres-how-much-you-could-have"
              className={styles.bottomCtaLink}
            >
              $100 a month scenario
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Test your own monthly plan
              </h2>

              <p className={styles.ctaText}>
                Adjust your contribution and timeline to see what works for your
                goals.
              </p>

              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your Scenario →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $300 a month is enough to build meaningful wealth — but only if you
            give it time.
          </p>

          <p className={styles.paragraph}>
            The power is not in the amount alone, but in how long it stays
            invested and how consistent you are.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own numbers?
            </p>

            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              Use the calculator →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
