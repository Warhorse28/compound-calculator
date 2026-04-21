import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/if-you-invest-500-a-month-heres-how-much-you-could-have";
const calculatorPath = "/compound-interest-calculator";

const metaTitle = "If You Invest $500 a Month, How Much Could You Have?";
const pageTitle =
  "If You Invest $500 a Month, Here’s How Much You Could Have in 10, 20, or 30 Years";
const pageDescription =
  "See how $500 a month could grow over 10, 20, or 30 years. Compare timelines and test your own numbers with a simple calculator.";

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
    monthly: "$500",
    contributed: "$60,000",
    result: "~$91,000",
    insight: "Growth is visible, but compounding is still building momentum.",
  },
  {
    years: "20 years",
    monthly: "$500",
    contributed: "$120,000",
    result: "~$294,000",
    insight: "Time starts doing real work here.",
  },
  {
    years: "30 years",
    monthly: "$500",
    contributed: "$180,000",
    result: "~$745,000",
    insight: "Compounding becomes the dominant force.",
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
            Investing $500 a month can build far more wealth than most people
            expect — but only if it has enough time to compound.
          </p>

          <p className={styles.intro}>
            The same monthly investment can lead to completely different
            outcomes depending on whether it runs for 10, 20, or 30 years. Time
            does not just increase the result — it reshapes it.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              The gap between 10 and 30 years is not linear. It accelerates
              because compounding builds on top of previous gains.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              See your $500-a-month results
            </Link>
            <Link
              href="/how-much-will-i-have-if-i-invest-every-month"
              className={styles.secondaryLink}
            >
              Compare more monthly scenarios
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#why-it-grows" className={styles.tocLink}>
                Why $500 a month can grow more than it looks
              </a>
            </li>
            <li>
              <a href="#timeline" className={styles.tocLink}>
                How the outcome changes over time
              </a>
            </li>
            <li>
              <a href="#what-changes" className={styles.tocLink}>
                What actually changes the result
              </a>
            </li>
            <li>
              <a href="#takeaway" className={styles.tocLink}>
                Final takeaway
              </a>
            </li>
          </ul>
        </nav>

        <section id="why-it-grows" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $500 a month can grow more than it looks
          </h2>

          <p className={styles.paragraph}>
            The power of monthly investing does not come from a single deposit.
            It comes from repetition. Every month adds new capital, and older
            contributions keep compounding.
          </p>

          <p className={styles.paragraph}>
            Over time, those earlier deposits start doing more of the work than
            the new ones. That is when the growth curve begins to change shape.
          </p>

          <ul className={styles.list}>
            <li>each deposit adds new capital</li>
            <li>older deposits usually grow the longest</li>
            <li>compounding builds on previous gains</li>
            <li>time gradually becomes the main driver</li>
          </ul>
        </section>

        <section id="timeline" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            If you invest $500 a month, here’s how the outcome changes over time
          </h2>

          <p className={styles.paragraph}>
            These examples assume an <strong>8% annual return</strong>. The
            monthly amount stays the same — only time changes.
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
            The jump from 20 to 30 years is where compounding becomes clearly
            visible. The result does not just increase — it starts accelerating.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What this really means</p>
            <p className={styles.noteText}>
              The same $500 a month behaves very differently depending on how
              long it stays invested. Time changes the entire trajectory.
            </p>
          </div>
        </section>

        <section id="what-changes" className={styles.section}>
          <h2 className={styles.sectionTitle}>What actually changes your final result</h2>

          <p className={styles.paragraph}>
            Three variables matter: your monthly contribution, your timeline,
            and your return rate. Of these, time usually has the most
            underestimated impact.
          </p>

          <p className={styles.paragraph}>
            Increasing the monthly amount helps. A higher return helps too. But
            neither replaces time completely — they only compensate for less of
            it.
          </p>

          <ul className={styles.list}>
            <li>higher monthly amounts accelerate growth</li>
            <li>longer timelines amplify compounding</li>
            <li>return assumptions influence the curve</li>
            <li>time determines how far compounding can go</li>
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Test your own investing scenario</h2>
            <p className={styles.ctaText}>
              Adjust the timeline, return, and monthly amount to see how your
              results could change.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run your numbers
            </Link>
          </div>
        </section>

        <section id="takeaway" className={styles.bottomCta}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Investing $500 a month can lead to strong results — but the timeline
            determines how powerful that habit becomes.
          </p>

          <p className={styles.paragraph}>
            Over shorter periods, growth is steady. Over longer periods,
            compounding begins to dominate. That is where the real difference
            shows up.
          </p>

          <p className={styles.bottomCtaText}>Want to see your own projection?</p>
          <Link href={calculatorPath} className={styles.bottomCtaLink}>
            Compare your numbers now
          </Link>
        </section>
      </article>
    </main>
  );
}
