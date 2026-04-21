import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/investing-early-vs-investing-more";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Investing Early vs Investing More: Which Builds More Wealth?";
const pageTitle =
  "Investing Early vs Investing More: Which Strategy Builds More Wealth Over Time?";
const pageDescription =
  "Compare investing early vs investing more later with real examples. See which strategy builds more wealth and test your own numbers.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparisonRows = [
  {
    scenario: "Start early",
    monthly: "$300",
    years: "30 years",
    result: "~$447,000",
  },
  {
    scenario: "Start later (same amount)",
    monthly: "$300",
    years: "20 years",
    result: "~$178,000",
  },
  {
    scenario: "Catch-up plan",
    monthly: "~$755",
    years: "20 years",
    result: "~$447,000",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>STRATEGY COMPARISON</span>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            In many cases, starting early beats investing more later — because
            time can do work that money alone struggles to replace.
          </p>

          <p className={styles.intro}>
            The real question is not just how much you invest, but how long your
            money has to compound. When time is shorter, contributions often
            need to increase dramatically.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              If you lose time, you usually have to replace it with
              significantly more money. That is why early investing is often the
              more efficient strategy.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Compare both strategies with your numbers
            </Link>
            <Link
              href="/how-much-more-do-you-need-to-invest-if-you-start-late"
              className={styles.secondaryLink}
            >
              See the catch-up example
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#comparison" className={styles.tocLink}>
                Early start vs investing more later
              </a>
            </li>
            <li>
              <a href="#early-wins" className={styles.tocLink}>
                Why starting early usually wins
              </a>
            </li>
            <li>
              <a href="#later-can-work" className={styles.tocLink}>
                When investing more later can work
              </a>
            </li>
            <li>
              <a href="#takeaway" className={styles.tocLink}>
                Final takeaway
              </a>
            </li>
          </ul>
        </nav>

        <section id="comparison" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Early start vs investing more later
          </h2>

          <p className={styles.paragraph}>
            Imagine two investors with the same goal. One starts earlier with a
            smaller monthly contribution, while the other waits and tries to
            compensate by investing more later.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Scenario</th>
                  <th className={styles.tableHead}>Monthly</th>
                  <th className={styles.tableHead}>Years</th>
                  <th className={styles.tableHead}>Final Balance</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.scenario}>
                    <td className={styles.tableCellStrong}>{row.scenario}</td>
                    <td className={styles.tableCell}>{row.monthly}</td>
                    <td className={styles.tableCell}>{row.years}</td>
                    <td className={styles.tableCellStrong}>{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The difference is clear: starting early gives compounding longer to
            work. Waiting forces you to raise your monthly investment
            significantly just to reach the same outcome.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What this really shows</p>
            <p className={styles.noteText}>
              Time is often the cheaper lever. Once time is gone, closing the
              gap usually requires much more cash each month.
            </p>
          </div>
        </section>

        <section id="early-wins" className={styles.section}>
          <h2 className={styles.sectionTitle}>Why starting early usually wins</h2>

          <p className={styles.paragraph}>
            When you invest early, your money gets more years to grow. Gains can
            generate additional gains, and that snowball becomes much more
            powerful over longer periods.
          </p>

          <ul className={styles.list}>
            <li>more time for compounding</li>
            <li>lower monthly pressure</li>
            <li>more flexibility in your plan</li>
            <li>better long-term efficiency</li>
          </ul>
        </section>

        <section id="later-can-work" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When investing more later can still work
          </h2>

          <p className={styles.paragraph}>
            If you start late, investing more is often the only way to narrow
            the gap. But this strategy works best when it is built around a
            realistic plan.
          </p>

          <ul className={styles.list}>
            <li>increase your monthly contribution consistently</li>
            <li>extend your timeline if possible</li>
            <li>adjust expectations to realistic targets</li>
            <li>test different scenarios with a calculator</li>
          </ul>

          <p className={styles.paragraph}>
            If you want to understand how much more you may need to invest, read{" "}
            <Link
              href="/how-much-more-do-you-need-to-invest-if-you-start-late"
              className={styles.inlineLink}
            >
              this catch-up investing guide
            </Link>
            .
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Find out which strategy works best for you
            </h2>
            <p className={styles.ctaText}>
              Compare starting early vs investing more later with your own
              numbers and see what changes most.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run your scenario
            </Link>
          </div>
        </section>

        <section id="takeaway" className={styles.bottomCta}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Investing early vs investing more is really a tradeoff between time
            and contribution size. In most cases, time has the stronger effect.
          </p>

          <p className={styles.paragraph}>
            Starting earlier makes the strategy easier and more efficient.
            Starting later is still possible — but it usually requires much
            higher monthly effort.
          </p>

          <p className={styles.bottomCtaText}>Want to see your own numbers?</p>
          <Link href={calculatorPath} className={styles.bottomCtaLink}>
            Compare strategies now
          </Link>
        </section>
      </article>
    </main>
  );
}
