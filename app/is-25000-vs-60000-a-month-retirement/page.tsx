import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-25000-vs-60000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$25,000 vs $60,000 a Month in Retirement: How Extreme Is the Difference?";
const pageTitle =
  "$25,000 vs $60,000 a Month in Retirement: How Extreme Is the Difference?";
const pageDescription =
  "Compare $25k vs $60k a month in retirement. See how lifestyle, luxury, and financial freedom scale at the highest income levels.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>
            Retirement income comparison
          </div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            The jump from $25,000 to $60,000 a month in retirement is not just
            an upgrade — it is a shift into a completely different financial
            reality.
          </p>

          <p className={styles.intro}>
            At $25,000 a month, retirement already feels premium, with strong
            flexibility, excellent living conditions, and very low financial
            stress.
          </p>

          <p className={styles.intro}>
            At $60,000 a month, the concept of financial limits becomes almost
            irrelevant. Most decisions are no longer constrained by cost, but
            driven by preference alone.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $25,000 a month delivers a premium
              retirement. $60,000 a month moves into a level where financial
              constraints largely disappear and lifestyle becomes fully
              scalable.
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
            $25k vs $60k a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$25,000 a month</th>
                  <th className={styles.tableHead}>$60,000 a month</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCellStrong}>
                    Lifestyle feel
                  </td>
                  <td className={styles.tableCell}>
                    Premium retirement with strong comfort and flexibility.
                  </td>
                  <td className={styles.tableCell}>
                    Ultra-high-end retirement with virtually no constraints.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>
                    Financial pressure
                  </td>
                  <td className={styles.tableCell}>
                    Very low, but still some planning involved.
                  </td>
                  <td className={styles.tableCell}>
                    Minimal to none. Most decisions require no tradeoffs.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>
                    Housing & assets
                  </td>
                  <td className={styles.tableCell}>
                    High-end housing and strong flexibility.
                  </td>
                  <td className={styles.tableCell}>
                    Access to top-tier global real estate and multiple
                    properties.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>
                    Travel & experiences
                  </td>
                  <td className={styles.tableCell}>
                    Frequent, comfortable travel.
                  </td>
                  <td className={styles.tableCell}>
                    Luxury travel, extended stays, and fully spontaneous plans.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>
                    Margin & security
                  </td>
                  <td className={styles.tableCell}>
                    Strong buffer for most scenarios.
                  </td>
                  <td className={styles.tableCell}>
                    Extremely wide margin with very high long-term resilience.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How extreme is the difference?
          </h2>

          <p className={styles.paragraph}>
            This is one of the largest jumps in the entire income ladder. The
            difference is not just noticeable — it is structural.
          </p>

          <p className={styles.paragraph}>
            At $60,000 a month, you are no longer balancing categories. You can
            maximize multiple high-cost areas simultaneously without pressure.
          </p>

          <p className={styles.paragraph}>
            The result is a retirement that feels not just comfortable, but
            completely unconstrained.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Run your own retirement numbers
            </h2>
            <p className={styles.ctaText}>
              See how different income levels change your required portfolio and
              long-term plan.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Start Calculation →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Related pages</h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/is-25000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $25,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-60000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $60,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-25000-vs-50000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $25k vs $50k comparison
              </Link>
            </li>
            <li>
              <Link href={calculatorPath} className={styles.bottomCtaLink}>
                Compound interest calculator
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $25,000 a month already delivers a premium retirement. $60,000 a
            month goes far beyond that, creating a level where financial limits
            are almost nonexistent.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to define your number?
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
