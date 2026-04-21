import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-more-do-you-need-to-invest-if-you-start-late";
const calculatorPath = "/compound-interest-calculator";

const pageTitle =
  "How Much More Do You Need to Invest to Catch Up If You Start Late?";
const pageDescription =
  "See how much more you may need to invest if you start late. Compare timelines, contribution pressure, and realistic catch-up scenarios.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}${pagePath}` },
};

const comparisonRows = [
  { scenario: "Start at 25", monthly: "$300", years: "30 years", result: "~$447,000" },
  { scenario: "Start at 35", monthly: "$300", years: "20 years", result: "~$178,000" },
  { scenario: "Catch-up plan", monthly: "~$755", years: "20 years", result: "~$447,000" },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>CATCH-UP INVESTING</span>

          <h1 className={styles.title}>
            How Much More Do You Need to Invest to Catch Up If You Start Late?
          </h1>

          <p className={styles.lead}>
            Starting late can force your monthly contribution to rise much more
            than most people expect. When time is shorter, compounding has fewer
            chances to build.
          </p>

          <p className={styles.intro}>
            That does not mean you are too late. It means the plan changes. The
            key question becomes: how much more do you need to invest to close
            the gap from where you are now?
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              If you lose time, you often have to replace it with money. That is
              why late-start investing can create much higher monthly pressure.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              See how much more you may need to invest
            </Link>
            <Link
              href="/investing-early-vs-late-how-big-is-the-difference"
              className={styles.secondaryLink}
            >
              Compare early vs late examples
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#comparison" className={styles.tocLink}>
                A simple catch-up comparison
              </a>
            </li>
            <li>
              <a href="#framework" className={styles.tocLink}>
                How to build a catch-up plan
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
          <h2 className={styles.sectionTitle}>A simple catch-up comparison</h2>

          <p className={styles.paragraph}>
            Imagine one investor starts at 25 investing <strong>$300 a month</strong>,
            and another waits until 35 but wants to finish with the same final result.
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
            In this example, the late starter needs to invest more than{" "}
            <strong>2x per month</strong> to reach the same result.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What this really means</p>
            <p className={styles.noteText}>
              If you lose time, the only real ways to compensate are higher
              contributions, a longer timeline, or a lower target.
            </p>
          </div>
        </section>

        <section id="framework" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How to build a catch-up plan
          </h2>

          <ul className={styles.list}>
            <li>define your target amount</li>
            <li>define your realistic timeline</li>
            <li>calculate your monthly gap</li>
            <li>test different scenarios</li>
          </ul>

          <p className={styles.paragraph}>
            If you want to understand the math behind this, read our{" "}
            <Link
              href="/how-to-calculate-compound-interest"
              className={styles.inlineLink}
            >
              compound interest guide
            </Link>
            . If you want the broader timing comparison, explore{" "}
            <Link
              href="/is-it-too-late-to-start-investing"
              className={styles.inlineLink}
            >
              is it too late to start investing
            </Link>
            .
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Test your catch-up scenario</h2>
            <p className={styles.ctaText}>
              Compare different timelines and monthly amounts using your own
              numbers to see what catch-up really looks like.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Compare your scenario now
            </Link>
          </div>
        </section>

        <section id="takeaway" className={styles.bottomCta}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>
          <p className={styles.paragraph}>
            Starting late does not mean failure. It means your strategy needs to
            be more intentional. A shorter timeline usually requires stronger
            contributions, and that is exactly why running the numbers matters.
          </p>
          <p className={styles.bottomCtaText}>Want to see your catch-up numbers?</p>
          <Link href={calculatorPath} className={styles.bottomCtaLink}>
            See your catch-up scenario
          </Link>
        </section>
      </article>
    </main>
  );
}
