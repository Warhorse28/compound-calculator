import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-500-a-month-enough-to-become-a-millionaire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $500 a Month Enough to Become a Millionaire? Timeline & Examples";

const pageTitle =
  "Is $500 a Month Enough to Become a Millionaire?";

const pageDescription =
  "See if investing $500 a month can reach $1 million. Explore timelines, assumptions, and realistic outcomes.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    years: "20 years",
    invested: "$120,000",
    result: "~$294,000",
    insight: "Solid growth, but not enough time for $1M.",
  },
  {
    years: "30 years",
    invested: "$180,000",
    result: "~$745,000",
    insight: "Compounding becomes strong, but still below $1M.",
  },
  {
    years: "35–40 years",
    invested: "$210,000–$240,000",
    result: "~$1M+",
    insight: "Time allows compounding to fully develop.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Millionaire path</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Investing $500 a month can get you close to $1 million — but whether
            it actually gets you there depends mostly on time.
          </p>

          <p className={styles.intro}>
            The difference between 20, 30, and 40 years is massive. The monthly
            amount stays the same, but compounding behaves completely
            differently.
          </p>

          <p className={styles.intro}>
            Over long periods, even small differences in time can decide whether
            you reach $1 million or fall short.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $500 a month can reach $1 million —
              but only if compounding has enough time to fully build.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Test Your $500/Month Scenario →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Can $500 a month realistically reach $1 million?
          </h2>

          <p className={styles.paragraph}>
            These examples assume an <strong>8% annual return</strong>. The
            monthly investment stays the same — only the timeline changes.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Timeline</th>
                  <th className={styles.tableHead}>Total invested</th>
                  <th className={styles.tableHead}>Estimated result</th>
                  <th className={styles.tableHead}>What happens</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
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
            The difference between 30 and 40 years is where the outcome changes
            completely. That extra decade often determines whether you hit $1
            million.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why time matters more than the amount
          </h2>

          <p className={styles.paragraph}>
            Many people try to compensate for less time by investing more. While
            that helps, it rarely replaces the full effect of long-term
            compounding.
          </p>

          <ul className={styles.list}>
            <li>early years build the base</li>
            <li>middle years accelerate growth</li>
            <li>later years dominate the result</li>
            <li>time allows returns to generate returns</li>
          </ul>

          <p className={styles.paragraph}>
            Without enough time, even strong monthly contributions struggle to
            reach large financial goals.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What if you want to reach $1 million faster?
          </h2>

          <p className={styles.paragraph}>
            If your timeline is shorter, you will likely need to increase your
            monthly contribution.
          </p>

          <p className={styles.paragraph}>
            You can explore the full breakdown in{" "}
            <Link
              href="/how-much-do-you-need-to-invest-to-reach-1-million"
              className={styles.bottomCtaLink}
            >
              this $1 million guide
            </Link>
            , or compare different monthly amounts in the{" "}
            <Link
              href="/100-vs-300-vs-500-a-month-which-builds-more-wealth"
              className={styles.bottomCtaLink}
            >
              $100 vs $300 vs $500 comparison
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Find your path to $1 million
              </h2>

              <p className={styles.ctaText}>
                Adjust your monthly investment and timeline to see what it takes
                to reach your goal.
              </p>

              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your Plan →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $500 a month can be enough to reach $1 million — but time is the
            deciding factor.
          </p>

          <p className={styles.paragraph}>
            The longer you stay invested, the more compounding does the heavy
            lifting.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your timeline?
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
