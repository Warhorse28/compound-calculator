import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-more-do-you-need-to-invest-if-you-start-late";
const calculatorPath = "/calculator";

const pageTitle =
  "How Much More Do You Need to Invest to Catch Up If You Start Late?";

const pageDescription =
  "See how much more you may need to invest if you start late. Compare timelines, contribution pressure, and realistic catch-up scenarios.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparisonRows = [
  {
    scenario: "Start at 25",
    monthly: "$300",
    years: "30 years",
    result: "~$447,000",
  },
  {
    scenario: "Start at 35",
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
    <main className={styles.pageShell}>
      <article className={styles.articleCard}>
        <header className={styles.heroSection}>
          <div className={styles.eyebrow}>Catch-up investing</div>

          <h1 className={styles.title}>
            How Much More Do You Need to Invest to Catch Up If You Start Late?
          </h1>

          <p className={styles.lead}>
            Starting late can force your monthly contribution to rise much more
            than most people expect. When time is shorter, compounding has fewer
            chances to build.
          </p>

          <p className={styles.lead}>
            That does not mean you are too late. It means the plan changes. The
            key question becomes: how much more do you need to invest to close
            the gap from where you are now?
          </p>

          <div className={styles.callout}>
            <strong>Key insight:</strong> if you lose time, you often have to
            replace it with money.
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.heroButton}>
              See How Much More You May Need to Invest →
            </Link>
          </div>
        </header>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            A simple catch-up comparison
          </h2>

          <p className={styles.paragraph}>
            Imagine one investor starts at 25 investing $300/month, and another
            waits until 35 but wants to reach the same final result.
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
                    <td className={styles.tableCellStrong}>
                      {row.scenario}
                    </td>
                    <td className={styles.tableCell}>{row.monthly}</td>
                    <td className={styles.tableCell}>{row.years}</td>
                    <td className={styles.tableCellStrong}>
                      {row.result}
                    </td>
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
            <p className={styles.noteText}>
              If you lose time, the only way to compensate is with higher
              contributions or a longer timeline.
            </p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            How to build a catch-up plan (simple framework)
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
            .
          </p>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your catch-up scenario
            </h2>
            <p className={styles.ctaText}>
              Compare different timelines and monthly amounts using your own
              numbers.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Compare Your Scenario Now →
            </Link>
          </div>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Starting late does not mean failure. It means your strategy needs to
            be more intentional. A shorter timeline usually requires stronger
            contributions.
          </p>

          <div className={styles.bottomCta}>
            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              See your catch-up numbers →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}