import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/if-you-invest-300-a-month-heres-how-much-you-could-have";
const calculatorPath = "/compound-interest-calculator";

const metaTitle = "If You Invest $300 a Month, How Much Could You Have?";
const pageTitle =
  "If You Invest $300 a Month, Here’s How Much You Could Have in 10, 20, or 30 Years";
const pageDescription =
  "See how $300 a month could grow over 10, 20, or 30 years. Compare timelines and test your own numbers with a simple compound interest calculator.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparisonRows = [
  {
    years: "10 years",
    monthly: "$300",
    contributed: "$36,000",
    result: "~$54,500",
    insight: "Growth is visible, but time has not fully amplified compounding yet.",
  },
  {
    years: "20 years",
    monthly: "$300",
    contributed: "$72,000",
    result: "~$176,000",
    insight: "The gap between money invested and total value starts widening.",
  },
  {
    years: "30 years",
    monthly: "$300",
    contributed: "$108,000",
    result: "~$447,000",
    insight: "Compounding becomes the main engine, not just your deposits.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>MONTHLY INVESTING EXAMPLE</span>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Investing $300 a month can build much more wealth than it seems at
            first glance — but the timeline changes everything.
          </p>

          <p className={styles.intro}>
            The same monthly habit can lead to very different outcomes over 10,
            20, or 30 years. The difference is not just more deposits. It is
            more time for compounding to build on itself.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              $300 a month may look modest, but over long periods it can turn
              into a serious result because compounding gradually does more of
              the work than the contributions themselves.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              See your $300-a-month results
            </Link>
            <Link
              href="/if-you-invest-500-a-month-heres-how-much-you-could-have"
              className={styles.secondaryLink}
            >
              Compare with $500 a month
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#why-it-works" className={styles.tocLink}>
                Why $300 a month can grow more than it looks
              </a>
            </li>
            <li>
              <a href="#timeline" className={styles.tocLink}>
                How the outcome changes over time
              </a>
            </li>
            <li>
              <a href="#what-drives-result" className={styles.tocLink}>
                What actually drives the final result
              </a>
            </li>
            <li>
              <a href="#takeaway" className={styles.tocLink}>
                Final takeaway
              </a>
            </li>
          </ul>
        </nav>

        <section id="why-it-works" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $300 a month can grow more than it looks
          </h2>

          <p className={styles.paragraph}>
            Monthly investing works because it creates a repeatable system. Each
            new deposit adds capital, while the older deposits keep compounding
            in the background.
          </p>

          <p className={styles.paragraph}>
            At first, the result looks mostly tied to how much you put in. Later,
            the balance starts pulling away from your total contributions. That
            is when compounding becomes visible.
          </p>

          <ul className={styles.list}>
            <li>every month adds new capital to the base</li>
            <li>older deposits usually compound the longest</li>
            <li>gains can generate future gains</li>
            <li>time changes the shape of the outcome</li>
          </ul>
        </section>

        <section id="timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            If you invest $300 a month, here’s how the outcome changes over time
          </h2>

          <p className={styles.paragraph}>
            These examples assume an <strong>8% annual return</strong>. The
            contribution stays the same. Only the timeline changes.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Timeline</th>
                  <th className={styles.tableHead}>Monthly</th>
                  <th className={styles.tableHead}>Total invested</th>
                  <th className={styles.tableHead}>Estimated result</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.years}>
                    <td className={styles.tableCellStrong}>{row.years}</td>
                    <td className={styles.tableCell}>{row.monthly}</td>
                    <td className={styles.tableCell}>{row.contributed}</td>
                    <td className={styles.tableCellStrong}>{row.result}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The biggest shift happens when the timeline gets long enough for your
            earlier deposits to keep stacking gains on top of gains. That is why
            30 years looks completely different from 10.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What this really means</p>
            <p className={styles.noteText}>
              A longer timeline does not just add more months of investing. It
              gives your existing balance more chances to compound, which is why
              long-term results can feel surprisingly large.
            </p>
          </div>
        </section>

        <section id="what-drives-result" className={styles.section}>
          <h2 className={styles.sectionTitle}>What actually drives the final result</h2>

          <p className={styles.paragraph}>
            Your final balance depends on three things: how much you invest, how
            long you stay invested, and what return rate you assume. Of these,
            time is often the variable people underestimate most.
          </p>

          <p className={styles.paragraph}>
            Raising the contribution helps. A better return assumption helps too.
            But over long periods, time is what gives compounding room to become
            powerful.
          </p>

          <ul className={styles.list}>
            <li>higher monthly investing increases the base faster</li>
            <li>longer timelines give compounding more room</li>
            <li>return assumptions shape the growth curve</li>
            <li>consistency matters because missed months reduce momentum</li>
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Test your own $300-a-month scenario</h2>
            <p className={styles.ctaText}>
              Change the timeline, return, and contribution amount to see how
              your result could look with your own assumptions.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run your numbers
            </Link>
          </div>
        </section>

        <section id="takeaway" className={styles.bottomCta}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Investing $300 a month can produce a meaningful long-term result —
            but the timeline decides how powerful that habit becomes.
          </p>

          <p className={styles.paragraph}>
            Over shorter periods, progress is steady. Over longer periods,
            compounding starts to dominate. That is where the real wealth gap
            appears.
          </p>

          <p className={styles.bottomCtaText}>Want to test your own projection?</p>
          <Link href={calculatorPath} className={styles.bottomCtaLink}>
            Compare your numbers now
          </Link>
        </section>
      </article>
    </main>
  );
}
