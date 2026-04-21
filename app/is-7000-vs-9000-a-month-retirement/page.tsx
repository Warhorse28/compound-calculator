import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-7000-vs-9000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$7,000 vs $9,000 a Month in Retirement: How Big Is the Difference?";

const pageTitle =
  "$7,000 vs $9,000 a Month: What Changes in Retirement";

const pageDescription =
  "Compare $7,000 vs $9,000 a month in retirement. See how lifestyle, flexibility, and financial security change between these two income levels.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparison = [
  {
    category: "Core expenses",
    seven: "Covers essentials comfortably in most locations",
    nine: "Covers essentials easily with extra margin",
  },
  {
    category: "Lifestyle flexibility",
    seven: "Moderate flexibility with some trade-offs",
    nine: "High flexibility with fewer compromises",
  },
  {
    category: "Travel and leisure",
    seven: "Occasional travel with planning",
    nine: "Frequent travel with less constraint",
  },
  {
    category: "Financial cushion",
    seven: "Some buffer for unexpected costs",
    nine: "Stronger buffer and resilience",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement comparison</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            The difference between $7,000 and $9,000 a month in retirement is not
            just about income. It is about flexibility, security, and how much
            control you have over your lifestyle.
          </p>

          <p className={styles.intro}>
            While both levels can support a comfortable retirement, the extra
            $2,000 creates a noticeable gap in freedom and long-term stability.
          </p>

          <p className={styles.intro}>
            Small differences in monthly income can lead to large differences in
            how retirement actually feels over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $7,000 supports comfort. $9,000
              creates flexibility. The gap is not survival. It is freedom.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Compare Your Own Numbers →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            $7,000 vs $9,000: side by side comparison
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$7,000 per month</th>
                  <th className={styles.tableHead}>$9,000 per month</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>
                      {row.category}
                    </td>
                    <td className={styles.tableCell}>{row.seven}</td>
                    <td className={styles.tableCell}>{row.nine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The difference is not extreme, but it compounds over time, especially
            when dealing with unexpected expenses or lifestyle choices.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $7,000 a month typically provides
          </h2>

          <ul className={styles.list}>
            <li>comfortable lifestyle in most areas</li>
            <li>controlled discretionary spending</li>
            <li>moderate travel and leisure</li>
            <li>need for some budgeting discipline</li>
          </ul>

          <p className={styles.paragraph}>
            $7,000 a month is strong, but it still requires awareness of spending
            decisions, especially in higher cost regions.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes when you reach $9,000
          </h2>

          <ul className={styles.list}>
            <li>greater margin after essential expenses</li>
            <li>less pressure from fixed costs</li>
            <li>more freedom in lifestyle decisions</li>
            <li>stronger protection against inflation</li>
          </ul>

          <p className={styles.paragraph}>
            The additional $2,000 per month acts as a buffer that reduces
            financial stress and increases long term confidence.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how your monthly income compares
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how different monthly contributions
              and returns affect your retirement income.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Simulation →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Explore related comparisons
          </h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/is-7000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $7,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-9000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $9,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-5000-vs-10000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $5,000 vs $10,000 retirement comparison
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
            Both $7,000 and $9,000 can support a comfortable retirement, but the
            difference is in flexibility and resilience.
          </p>

          <p className={styles.paragraph}>
            The extra income does not just improve lifestyle. It reduces risk and
            increases long term stability.
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
