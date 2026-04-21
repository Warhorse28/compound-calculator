import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-25000-vs-50000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$25,000 vs $50,000 a Month in Retirement: How Big Is the Real Upgrade?";
const pageTitle =
  "$25,000 vs $50,000 a Month in Retirement: How Big Is the Real Upgrade?";
const pageDescription =
  "Compare $25k vs $50k a month in retirement. See how lifestyle, luxury, flexibility, and financial freedom change at this level.";

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
            The move from $25,000 to $50,000 a month in retirement is not a
            small step. It is the difference between a premium retirement and a
            truly elite one.
          </p>

          <p className={styles.intro}>
            At $25,000 a month, most retirees already enjoy a very high standard
            of living, with strong housing options, flexible travel, and low
            financial stress.
          </p>

          <p className={styles.intro}>
            At $50,000 a month, the difference becomes much more about scale.
            You are no longer optimizing across categories — you are expanding
            all of them at the same time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $25,000 a month supports a premium
              lifestyle. $50,000 a month moves retirement into a level where
              financial limits become minimal and most decisions are purely
              preference-based.
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
            $25k vs $50k a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$25,000 a month</th>
                  <th className={styles.tableHead}>$50,000 a month</th>
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
                    Elite retirement with maximum flexibility and almost no
                    constraints.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>
                    Financial pressure
                  </td>
                  <td className={styles.tableCell}>
                    Very low, but still some decisions require thought.
                  </td>
                  <td className={styles.tableCell}>
                    Minimal. Most decisions no longer require tradeoffs.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>
                    Housing level
                  </td>
                  <td className={styles.tableCell}>
                    High-end housing with strong flexibility.
                  </td>
                  <td className={styles.tableCell}>
                    Access to top-tier real estate and luxury properties
                    globally.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>
                    Travel & lifestyle
                  </td>
                  <td className={styles.tableCell}>
                    Frequent and comfortable travel.
                  </td>
                  <td className={styles.tableCell}>
                    Luxury travel, long stays, and complete spontaneity.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>
                    Long-term security
                  </td>
                  <td className={styles.tableCell}>
                    Strong buffer for most scenarios.
                  </td>
                  <td className={styles.tableCell}>
                    Extremely wide margin with high resilience to uncertainty.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How big is the upgrade, really?
          </h2>

          <p className={styles.paragraph}>
            This is a noticeable upgrade — much more than smaller jumps like
            $20k to $25k or $25k to $30k.
          </p>

          <p className={styles.paragraph}>
            The shift to $50,000 a month removes a large portion of the
            remaining constraints. It allows multiple high-cost categories to
            scale together without pressure.
          </p>

          <p className={styles.paragraph}>
            In practice, it is not just about spending more. It is about having
            fewer limits across your entire lifestyle.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your retirement income level
            </h2>
            <p className={styles.ctaText}>
              See how different income levels affect your retirement plan and
              how much you need to invest.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
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
                href="/is-50000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $50,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-25000-vs-40000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $25k vs $40k comparison
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
            $25,000 a month already creates a premium retirement. But $50,000 a
            month pushes that into a level where most financial constraints
            disappear.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to see your number?
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
