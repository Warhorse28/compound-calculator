import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/100-vs-300-vs-500-a-month-which-builds-more-wealth";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$100 vs $300 vs $500 a Month: Which Builds More Wealth?";

const pageTitle =
  "$100 vs $300 vs $500 a Month: Which Builds More Wealth Over Time?";

const pageDescription =
  "Compare investing $100, $300, or $500 a month and see how much each path could build over time.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparisonRows = [
  {
    monthly: "$100",
    invested: "$36,000",
    result: "~$149,000",
    insight: "Small monthly amount, but still meaningful with enough time.",
  },
  {
    monthly: "$300",
    invested: "$108,000",
    result: "~$447,000",
    insight: "A stronger path that starts to create real long-term momentum.",
  },
  {
    monthly: "$500",
    invested: "$180,000",
    result: "~$745,000",
    insight: "A major jump in final outcome, not just a modest increase.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Monthly investing comparison</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            The difference between investing $100, $300, or $500 a month is much
            bigger than most people expect.
          </p>

          <p className={styles.intro}>
            Over short periods, the gap can feel manageable. Over long periods,
            it becomes massive because each higher contribution gives
            compounding more capital to build on.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> the jump from $100 to $500 a month is
              not just 5x the contribution. Over time, it can create a much
              larger difference in total wealth.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Compare Your Monthly Amount →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How much wealth can $100, $300, or $500 a month build?
          </h2>

          <p className={styles.paragraph}>
            These examples assume an <strong>8% annual return</strong> over{" "}
            <strong>30 years</strong>. The only thing changing is the monthly
            contribution.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly investment</th>
                  <th className={styles.tableHead}>Total invested</th>
                  <th className={styles.tableHead}>Estimated result</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.monthly}>
                    <td className={styles.tableCellStrong}>{row.monthly}</td>
                    <td className={styles.tableCell}>{row.invested}</td>
                    <td className={styles.tableCellStrong}>{row.result}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The difference between $100 and $500 a month is not small. It can
            completely change the scale of your long-term result.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why the gap gets so large over time
          </h2>

          <p className={styles.paragraph}>
            Each higher monthly contribution does two things at once: it adds
            more capital every month, and it gives future compounding more to
            work with.
          </p>

          <p className={styles.paragraph}>
            That is why the final result does not grow in a straight line. The
            more money that stays invested over time, the more powerful the gap
            becomes.
          </p>

          <ul className={styles.list}>
            <li>higher monthly investing adds more capital immediately</li>
            <li>older contributions stay invested longer</li>
            <li>compounding builds on an increasingly larger base</li>
            <li>time turns contribution gaps into wealth gaps</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Which monthly amount makes the most sense?
          </h2>

          <p className={styles.paragraph}>
            The best amount is not automatically the highest one. It is the one
            you can sustain without breaking the plan after a few months.
          </p>

          <p className={styles.paragraph}>
            If you want to see each scenario in more detail, explore the{" "}
            <Link
              href="/if-you-invest-100-a-month-heres-how-much-you-could-have"
              className={styles.bottomCtaLink}
            >
              $100/month page
            </Link>
            , the{" "}
            <Link
              href="/if-you-invest-300-a-month-heres-how-much-you-could-have"
              className={styles.bottomCtaLink}
            >
              $300/month page
            </Link>
            , and the{" "}
            <Link
              href="/if-you-invest-500-a-month-heres-how-much-you-could-have"
              className={styles.bottomCtaLink}
            >
              $500/month page
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Test your own monthly investing path
              </h2>

              <p className={styles.ctaText}>
                Change the monthly amount and timeline to see how much each path
                could realistically build.
              </p>

              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your Comparison →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Investing $100, $300, or $500 a month may not feel dramatically
            different in the short term. Over decades, the difference becomes
            huge.
          </p>

          <p className={styles.paragraph}>
            The monthly amount matters, but consistency and time are what turn
            that amount into real wealth.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to compare your own monthly amount?
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
