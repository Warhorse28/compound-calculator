import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-do-you-need-to-retire-comfortably";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Retire Comfortably? Real Numbers + Calculator";

const pageTitle =
  "How Much Do You Need to Retire Comfortably? A Realistic Breakdown";

const pageDescription =
  "Discover how much you need to retire comfortably based on lifestyle, timeline, and monthly investing. Explore scenarios and calculate your own plan.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    lifestyle: "Basic",
    monthly: "$300–$600",
    outcome: "Covers essentials, but limited flexibility.",
  },
  {
    lifestyle: "Balanced",
    monthly: "$800–$1,500",
    outcome: "Comfortable lifestyle with moderate freedom.",
  },
  {
    lifestyle: "High comfort",
    monthly: "$2,000+",
    outcome: "Strong flexibility and higher-quality lifestyle.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement comfort planning</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Retiring comfortably is not just about reaching a number — it is
            about building a lifestyle your investments can sustain.
          </p>

          <p className={styles.intro}>
            The amount you need depends on how you want to live, how long your
            money needs to last, and how consistently you invest over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> “comfortable retirement” is not a
              fixed number — it is a balance between lifestyle, time, and
              monthly investment.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Calculate Your Retirement Plan →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What “comfortable retirement” really means
          </h2>

          <p className={styles.paragraph}>
            Comfort in retirement varies from person to person. For some, it
            means covering basic expenses without stress. For others, it
            includes travel, flexibility, and a higher standard of living.
          </p>

          <p className={styles.paragraph}>
            Instead of chasing a universal number, it is more useful to think in
            terms of monthly income and sustainability over time.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Monthly investment vs retirement lifestyle
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Lifestyle</th>
                  <th className={styles.tableHead}>Monthly investment</th>
                  <th className={styles.tableHead}>What it leads to</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row) => (
                  <tr key={row.lifestyle}>
                    <td className={styles.tableCellStrong}>{row.lifestyle}</td>
                    <td className={styles.tableCell}>{row.monthly}</td>
                    <td className={styles.tableCell}>{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The higher your monthly investment, the more flexibility your
            retirement can offer. But sustainability matters more than
            intensity.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What actually determines how much you need
          </h2>

          <ul className={styles.list}>
            <li>your desired monthly lifestyle</li>
            <li>your retirement age</li>
            <li>your investment return over time</li>
            <li>how consistent your contributions are</li>
            <li>how long your money needs to last</li>
          </ul>

          <p className={styles.paragraph}>
            Most people underestimate how much time helps. Starting earlier
            reduces the monthly pressure significantly.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why time matters more than the final number
          </h2>

          <p className={styles.paragraph}>
            A large retirement goal can feel overwhelming. But when spread over
            decades, it becomes much more achievable through consistent monthly
            investing.
          </p>

          <p className={styles.paragraph}>
            The biggest mistake is focusing only on the final number instead of
            the process that gets you there.
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Build your own retirement scenario
              </h2>

              <p className={styles.ctaText}>
                Adjust your monthly investment and timeline to see what kind of
                retirement lifestyle you could realistically support.
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
            There is no single number that guarantees a comfortable retirement.
            What matters is aligning your investments with the lifestyle you
            want to sustain.
          </p>

          <p className={styles.paragraph}>
            Start early, stay consistent, and adjust over time — that is what
            turns a goal into a realistic outcome.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>Want to see your exact plan?</p>

            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              Calculate now →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
