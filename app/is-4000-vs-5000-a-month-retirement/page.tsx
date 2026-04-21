import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-4000-vs-5000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $4,000 vs $5,000 a Month a Big Deal in Retirement?";

const pageTitle =
  "Is $4,000 vs $5,000 a Month a Big Deal in Retirement?";

const pageDescription =
  "Compare retiring on $4,000 vs $5,000 a month. See how an extra $1,000 affects comfort, flexibility, and long-term financial stability.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparisonRows = [
  {
    category: "Lifestyle feel",
    fourK:
      "$4,000 a month supports a comfortable retirement in many areas, but still requires awareness of spending.",
    fiveK:
      "$5,000 a month usually feels more relaxed, with fewer daily financial tradeoffs.",
  },
  {
    category: "Housing flexibility",
    fourK:
      "Housing is manageable, but higher-cost areas may still require compromises.",
    fiveK:
      "More freedom to choose better housing or handle increases without stress.",
  },
  {
    category: "Unexpected costs",
    fourK:
      "Unexpected expenses are manageable, but can still affect the overall plan.",
    fiveK:
      "A stronger buffer makes surprises easier to absorb without disruption.",
  },
  {
    category: "Financial margin",
    fourK:
      "There is some margin, but careful planning still matters over time.",
    fiveK:
      "A wider margin creates more stability, flexibility, and long-term comfort.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement income comparison</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Going from $4,000 to $5,000 a month in retirement might not sound
            like a major jump. But in practice, that extra $1,000 can make a
            noticeable difference in how relaxed and flexible your life feels.
          </p>

          <p className={styles.intro}>
            At $4,000 a month, many retirees can live comfortably, especially in
            moderate cost-of-living areas.
          </p>

          <p className={styles.intro}>
            But at $5,000 a month, the experience often shifts — less pressure,
            fewer compromises, and more room for unexpected expenses.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> The difference between $4,000 and
              $5,000 a month is not about luxury. It is about reducing stress
              and gaining more control over your financial life.
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
            $4,000 vs $5,000 a month: what actually changes
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$4,000 a month</th>
                  <th className={styles.tableHead}>$5,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.fourK}</td>
                    <td className={styles.tableCell}>{row.fiveK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support retirement. The real difference is
            how much freedom you have after covering your essential costs.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $4,000 a month is enough
          </h2>

          <ul className={styles.list}>
            <li>moderate cost of living</li>
            <li>controlled housing expenses</li>
            <li>low debt</li>
            <li>stable healthcare costs</li>
            <li>disciplined spending habits</li>
          </ul>

          <p className={styles.paragraph}>
            In these situations, $4,000 a month can be enough for a comfortable
            retirement. But it may still require attention to larger or
            unexpected expenses.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $5,000 a month feels different
          </h2>

          <p className={styles.paragraph}>
            The biggest change is not what you can buy, but how much easier
            decisions become. A higher income reduces pressure and increases
            flexibility across all areas of your life.
          </p>

          <p className={styles.paragraph}>
            Over time, this makes retirement more stable, predictable, and
            enjoyable — especially when dealing with inflation and unexpected
            costs.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your retirement plan can generate
            </h2>

            <p className={styles.ctaText}>
              Use the calculator to estimate how your savings translate into
              monthly income based on realistic assumptions.
            </p>

            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related comparisons</h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/is-4000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $4,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-5000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $5,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-3000-vs-4000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $3,000 vs $4,000 comparison
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
            $4,000 and $5,000 a month can both support retirement, but they lead
            to different levels of comfort and flexibility.
          </p>

          <p className={styles.paragraph}>
            The key is understanding how much margin your plan needs — and
            whether your expected income can support your lifestyle over time.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own numbers?
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
