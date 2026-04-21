import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-long-to-reach-1-million";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Long Does It Take to Reach $1 Million? (By Monthly Investment)";

const pageTitle =
  "How Long Does It Take to Reach $1 Million? Timeline by Monthly Investment";

const pageDescription =
  "See how long it takes to reach $1 million depending on your monthly investment. Compare timelines and test your own scenario.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const timelineRows = [
  {
    monthly: "$300",
    years: "~40 years",
    insight: "Low contribution needs a long timeline to work.",
  },
  {
    monthly: "$500",
    years: "~32 years",
    insight: "Moderate investing shortens the journey significantly.",
  },
  {
    monthly: "$1,000",
    years: "~25 years",
    insight: "Higher contributions accelerate compounding.",
  },
  {
    monthly: "$2,000",
    years: "~20 years",
    insight: "Aggressive investing dramatically reduces time.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Million-dollar timeline</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Reaching $1 million is not just about how much you invest — it is
            about how long your money has to compound.
          </p>

          <p className={styles.intro}>
            The same goal can take 20, 30, or even 40 years depending on your
            monthly contribution. Time and consistency define the path.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> higher monthly investments reduce
              time, but compounding still needs years to work.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Calculate Your $1M Timeline →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How long it takes to reach $1 million (simple comparison)
          </h2>

          <p className={styles.paragraph}>
            These examples assume an <strong>8% annual return</strong>. The goal
            stays the same — only the monthly investment changes.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly investment</th>
                  <th className={styles.tableHead}>Estimated time</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {timelineRows.map((row) => (
                  <tr key={row.monthly}>
                    <td className={styles.tableCellStrong}>{row.monthly}</td>
                    <td className={styles.tableCell}>{row.years}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The pattern is clear: increasing your monthly investment shortens the
            timeline, but compounding still needs time to build.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What actually determines your timeline
          </h2>

          <ul className={styles.list}>
            <li>your monthly contribution</li>
            <li>your investment return</li>
            <li>how long you stay invested</li>
            <li>consistency over time</li>
          </ul>

          <p className={styles.paragraph}>
            Most people focus only on the monthly amount. But time is what allows
            compounding to fully develop.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why time matters more than you think</h2>

          <p className={styles.paragraph}>
            Early in the journey, growth feels slow. But over longer periods, the
            curve starts accelerating as returns generate their own returns.
          </p>

          <p className={styles.paragraph}>
            That is why reducing your timeline too much can make the goal feel
            harder — compounding does not have enough time to do the heavy
            lifting.
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Find your exact timeline</h2>

              <p className={styles.ctaText}>
                Adjust your monthly investment and see how long it could take to
                reach $1 million.
              </p>

              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your Timeline →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.bottomCta}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Reaching $1 million is not a fixed path. It depends on how much you
            invest and how long you stay consistent.
          </p>

          <p className={styles.paragraph}>
            More money can shorten the journey — but time is what makes the
            journey possible.
          </p>

          <p className={styles.bottomCtaText}>Want to see your own timeline?</p>

          <Link href={calculatorPath} className={styles.bottomCtaLink}>
            Calculate now →
          </Link>
        </section>
      </article>
    </main>
  );
}
