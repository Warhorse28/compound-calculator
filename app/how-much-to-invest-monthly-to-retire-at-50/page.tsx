import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-to-invest-monthly-to-retire-at-50";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Invest Monthly to Retire at 50?";

const pageTitle =
  "How Much Do You Need to Invest Monthly to Retire at 50? A Practical Breakdown";

const pageDescription =
  "Find out how much you need to invest monthly to retire at 50. Explore realistic paths and calculate your own scenario.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    monthly: "$500",
    outcome: "Slow path",
    insight: "Possible, but requires a long and consistent timeline.",
  },
  {
    monthly: "$1,000",
    outcome: "Balanced path",
    insight: "A common target for steady early retirement progress.",
  },
  {
    monthly: "$1,500+",
    outcome: "Strong path",
    insight: "Accelerates compounding and shortens the timeline.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retire at 50 planning</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Retiring at 50 is a realistic goal for many — but it still requires
            a deliberate investing strategy.
          </p>

          <p className={styles.intro}>
            Compared to retiring at 40, you have more time. But compared to
            traditional retirement, the timeline is still shorter.
          </p>

          <p className={styles.intro}>
            That balance makes your monthly investment one of the most important
            factors in your plan.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> retiring at 50 is where time and
              contribution start to balance — but consistency is still critical.
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
            What it usually takes to retire at 50
          </h2>

          <p className={styles.paragraph}>
            These examples show how different monthly investments shape your
            path. Time helps — but it still needs support.
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
            At this stage, both time and contribution matter — but neither can
            fully compensate for the other.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why retiring at 50 is more achievable
          </h2>

          <p className={styles.paragraph}>
            Compared to more aggressive timelines, you benefit from:
          </p>

          <ul className={styles.list}>
            <li>more compounding time</li>
            <li>lower monthly pressure</li>
            <li>greater flexibility</li>
            <li>more room for adjustments</li>
          </ul>

          <p className={styles.paragraph}>
            This makes retiring at 50 one of the most balanced early retirement
            targets.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How to approach your own plan
          </h2>

          <p className={styles.paragraph}>
            Think in terms of flexibility and sustainability:
          </p>

          <ul className={styles.list}>
            <li>increase contributions when possible</li>
            <li>stay consistent over time</li>
            <li>avoid relying only on high returns</li>
          </ul>

          <p className={styles.paragraph}>
            You can also explore{" "}
            <Link
              href="/how-much-to-invest-monthly-to-retire-at-40"
              className={styles.bottomCtaLink}
            >
              retiring at 40
            </Link>{" "}
            or see{" "}
            <Link
              href="/how-much-to-invest-monthly-to-retire-early"
              className={styles.bottomCtaLink}
            >
              broader early retirement strategies
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Build your retirement timeline
              </h2>

              <p className={styles.ctaText}>
                Adjust your numbers and see what your path to retiring at 50
                could look like.
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
            Retiring at 50 is achievable for many investors — but it still
            requires consistency and a solid monthly contribution.
          </p>

          <p className={styles.paragraph}>
            The key is finding a balance you can sustain over time.
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
