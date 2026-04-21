import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-8000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $8,000 a Month Enough to Retire? A Realistic Breakdown";

const pageTitle =
  "Is $8,000 a Month Enough to Retire? What It Really Means";

const pageDescription =
  "Find out if $8,000 a month is enough to retire based on lifestyle, flexibility, and long-term planning. Explore realistic scenarios and calculate your plan.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    lifestyle: "High comfort",
    insight: "Often enough for a flexible retirement with strong breathing room.",
  },
  {
    lifestyle: "Premium",
    insight:
      "Can support travel, better housing, and more freedom in daily spending.",
  },
  {
    lifestyle: "High-cost premium",
    insight:
      "Still strong, but may feel less abundant in expensive cities or with higher lifestyle expectations.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement income analysis</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            For many retirees, $8,000 a month moves retirement out of the
            “comfortable” range and closer to a premium lifestyle.
          </p>

          <p className={styles.intro}>
            It can create much more freedom in housing, travel, healthcare
            choices, and day-to-day flexibility. But even this level depends on
            where you live and how you plan to spend.
          </p>

          <p className={styles.intro}>
            Retirement is not only about hitting a high number. It is about how
            sustainable that number is over decades.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $8,000 a month can support a premium
              retirement lifestyle, but the real difference comes from the
              flexibility and margin it creates.
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
            What $8,000 a month usually looks like in retirement
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Lifestyle</th>
                  <th className={styles.tableHead}>What it usually means</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row) => (
                  <tr key={row.lifestyle}>
                    <td className={styles.tableCellStrong}>{row.lifestyle}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Compared to lower income targets, $8,000 often creates more margin
            for lifestyle upgrades, unexpected costs, and long-term stability.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $8,000 a month feels strong
          </h2>

          <ul className={styles.list}>
            <li>moderate cost of living or lower</li>
            <li>paid-off or manageable housing costs</li>
            <li>desire for travel and flexibility</li>
            <li>higher healthcare margin</li>
            <li>long-term focus on comfort and freedom</li>
          </ul>

          <p className={styles.paragraph}>
            In these cases, $8,000 a month can support a retirement that feels
            spacious rather than tight.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why a higher target still needs planning
          </h2>

          <p className={styles.paragraph}>
            A higher retirement income target usually requires a much larger
            portfolio. That means stronger investing, a longer runway, or both.
          </p>

          <p className={styles.paragraph}>
            The income can look impressive, but the sustainability of that
            income is what matters most.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>See what your plan could support</h2>

            <p className={styles.ctaText}>
              Test different assumptions and see what kind of retirement income
              your portfolio may be able to sustain.
            </p>

            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Explore related retirement scenarios
          </h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/is-6000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $6,000 a month enough to retire
              </Link>
            </li>

            <li>
              <Link
                href="/how-much-do-you-need-to-retire-with-10000-a-month"
                className={styles.bottomCtaLink}
              >
                How much do you need to retire with $10,000 a month
              </Link>
            </li>

            <li>
              <Link
                href="/5000-vs-10000-retirement-income"
                className={styles.bottomCtaLink}
              >
                $5,000 vs $10,000 a month in retirement
              </Link>
            </li>

            <li>
              <Link
                href="/how-much-income-do-you-need-to-retire"
                className={styles.bottomCtaLink}
              >
                How much income do you need to retire
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $8,000 a month is a strong retirement income, but its true value is
            not just the number itself. It is the flexibility, comfort, and
            resilience it can create.
          </p>

          <p className={styles.paragraph}>
            The smartest plan is not just to aim high, but to make sure the
            income can hold up over time.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own scenario?
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
