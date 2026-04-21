import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-to-invest-monthly-to-retire-at-65";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Invest Monthly to Retire at 65?";

const pageTitle =
  "How Much Do You Need to Invest Monthly to Retire at 65? A Practical Breakdown";

const pageDescription =
  "Find out how much you need to invest monthly to retire at 65. Explore realistic paths and calculate your own retirement scenario.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    monthly: "$200",
    outcome: "Light path",
    insight:
      "Can help over time, but may create a limited retirement cushion.",
  },
  {
    monthly: "$500",
    outcome: "Balanced path",
    insight:
      "A strong baseline for building a comfortable retirement over time.",
  },
  {
    monthly: "$1,000+",
    outcome: "Strong path",
    insight:
      "Creates flexibility and a much more secure long-term retirement.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retire at 65 planning</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Retiring at 65 is one of the most common and realistic long-term
            goals — mainly because it gives your investments more time to grow.
          </p>

          <p className={styles.intro}>
            With a longer timeline, compounding has more room to work. This
            reduces the pressure on how much you need to invest each month.
          </p>

          <p className={styles.intro}>
            But the monthly amount still determines whether your retirement feels
            tight, comfortable, or flexible.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> retiring at 65 benefits from time,
              but your monthly investment still defines the quality of your
              retirement.
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
            What it usually takes to retire at 65
          </h2>

          <p className={styles.paragraph}>
            These are simplified planning paths. They show how different monthly
            investments shape your long-term outcome.
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
                    <td className={styles.tableCellStrong}>
                      {row.monthly}
                    </td>
                    <td className={styles.tableCellStrong}>
                      {row.outcome}
                    </td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Because the timeline is longer, even moderate contributions can grow
            meaningfully — but higher contributions still create a much stronger
            outcome.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why retiring at 65 is more flexible
          </h2>

          <p className={styles.paragraph}>
            Compared with earlier retirement goals, retiring at 65 gives you:
          </p>

          <ul className={styles.list}>
            <li>more time for compounding</li>
            <li>lower monthly pressure</li>
            <li>greater margin for error</li>
            <li>more flexibility to adjust your plan</li>
          </ul>

          <p className={styles.paragraph}>
            This makes it one of the most achievable and stable long-term
            retirement strategies.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How it compares to earlier retirement
          </h2>

          <p className={styles.paragraph}>
            If you compare this with{" "}
            <Link
              href="/how-much-to-invest-monthly-to-retire-at-60"
              className={styles.bottomCtaLink}
            >
              retiring at 60
            </Link>{" "}
            or{" "}
            <Link
              href="/how-much-to-invest-monthly-to-retire-at-50"
              className={styles.bottomCtaLink}
            >
              retiring at 50
            </Link>
            , you’ll notice one key difference:
          </p>

          <p className={styles.paragraph}>
            Time reduces pressure. The later the retirement age, the less extreme
            your monthly investment needs to be.
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Build your retirement scenario
              </h2>

              <p className={styles.ctaText}>
                Adjust your monthly investment and timeline to see what retiring
                at 65 could realistically look like.
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
            Retiring at 65 gives you more room to work with — but your monthly
            investment still defines the strength of your retirement.
          </p>

          <p className={styles.paragraph}>
            Time helps a lot. But consistency and contribution level are what
            turn that time into real results.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to see your own plan?
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
