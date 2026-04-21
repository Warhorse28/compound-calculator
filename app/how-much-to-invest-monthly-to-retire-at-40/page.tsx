import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-to-invest-monthly-to-retire-at-40";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Invest Monthly to Retire at 40?";

const pageTitle =
  "How Much Do You Need to Invest Monthly to Retire at 40? A Realistic Breakdown";

const pageDescription =
  "See how much you need to invest monthly to retire at 40. Compare scenarios and calculate your own early retirement plan.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    monthly: "$1,000",
    outcome: "Difficult path",
    insight: "Possible, but requires long consistency and strong returns.",
  },
  {
    monthly: "$2,000",
    outcome: "Realistic path",
    insight: "More achievable with discipline and stable investing.",
  },
  {
    monthly: "$3,000+",
    outcome: "Aggressive path",
    insight: "Shortens timeline significantly, but requires high income.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retire at 40 planning</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Retiring at 40 sounds ambitious — because it is. The biggest
            constraint is time, not just money.
          </p>

          <p className={styles.intro}>
            With a shorter timeline, compounding has less time to work. That
            means your monthly investment needs to do more of the heavy lifting.
          </p>

          <p className={styles.intro}>
            The earlier you want to retire, the more aggressive your strategy
            needs to be.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> retiring at 40 is less about finding
              the perfect return — and more about sustaining a high monthly
              investment over time.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Calculate Your Plan →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What it usually takes to retire at 40
          </h2>

          <p className={styles.paragraph}>
            These are simplified paths to help you understand the level of effort
            required. The goal stays the same — but time is compressed.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly investment</th>
                  <th className={styles.tableHead}>Path</th>
                  <th className={styles.tableHead}>What it implies</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row) => (
                  <tr key={row.monthly}>
                    <td className={styles.tableCellStrong}>{row.monthly}</td>
                    <td className={styles.tableCellStrong}>{row.outcome}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The shorter the timeline, the more your monthly investment becomes
            the dominant factor.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why retiring at 40 is so demanding
          </h2>

          <p className={styles.paragraph}>
            Traditional investing relies heavily on time. Retiring at 40 removes
            much of that advantage.
          </p>

          <ul className={styles.list}>
            <li>limited compounding time</li>
            <li>higher monthly pressure</li>
            <li>less margin for mistakes</li>
            <li>greater need for consistency</li>
          </ul>

          <p className={styles.paragraph}>
            This is why early retirement requires not just discipline, but also a
            realistic understanding of your financial capacity.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How to approach your own strategy
          </h2>

          <p className={styles.paragraph}>
            Instead of chasing a number blindly, think in trade-offs:
          </p>

          <ul className={styles.list}>
            <li>higher monthly investment → faster timeline</li>
            <li>lower investment → delayed retirement</li>
            <li>better returns → small advantage, but not everything</li>
          </ul>

          <p className={styles.paragraph}>
            You can also explore{" "}
            <Link
              href="/how-much-to-invest-monthly-to-retire-early"
              className={styles.bottomCtaLink}
            >
              general early retirement planning
            </Link>{" "}
            or see{" "}
            <Link
              href="/how-long-to-reach-1-million"
              className={styles.bottomCtaLink}
            >
              how long it takes to reach $1 million
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Test your retirement timeline
              </h2>

              <p className={styles.ctaText}>
                Adjust your monthly investment and see how realistic retiring at
                40 could be for you.
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
            Retiring at 40 is possible — but it demands a high level of monthly
            investment and consistency.
          </p>

          <p className={styles.paragraph}>
            The key is not just aiming for the goal, but understanding what it
            realistically requires.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your scenario?
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
