import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-20000-vs-25000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$20,000 vs $25,000 a Month in Retirement: What Changes?";

const pageTitle =
  "$20,000 vs $25,000 a Month in Retirement: What Changes?";

const pageDescription =
  "Compare retiring on $20,000 vs $25,000 a month. See how lifestyle, housing, healthcare, and long-term financial flexibility change at higher income levels.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparisonRows = [
  {
    category: "Lifestyle range",
    twentyK:
      "$20,000 a month can support an elevated retirement lifestyle with strong flexibility and high discretionary spending capacity.",
    twentyFiveK:
      "$25,000 a month usually supports a top-tier retirement lifestyle with greater comfort, margin, and freedom in daily decisions.",
  },
  {
    category: "Housing flexibility",
    twentyK:
      "High-end housing is accessible, but premium locations can still require prioritization and tradeoffs.",
    twentyFiveK:
      "Greater access to top-tier housing options with stronger flexibility and less sensitivity to price increases.",
  },
  {
    category: "Healthcare impact",
    twentyK:
      "Healthcare is manageable, but significant costs can still influence long-term planning decisions.",
    twentyFiveK:
      "More room to absorb healthcare costs without affecting lifestyle or long-term financial structure.",
  },
  {
    category: "Financial cushion",
    twentyK:
      "Provides a very strong cushion, though major unexpected expenses can still require adjustments.",
    twentyFiveK:
      "Creates a larger financial buffer, allowing for more stability, flexibility, and protection against inflation.",
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
            The difference between $20,000 and $25,000 a month in retirement is
            not just about income. It is about how much more control and
            flexibility your plan has after essential expenses are covered.
          </p>

          <p className={styles.intro}>
            $20,000 a month already supports a high-level retirement lifestyle.
            But $25,000 a month typically creates more room for premium housing,
            healthcare, travel, and long-term financial stability.
          </p>

          <p className={styles.intro}>
            What really matters is how each level impacts your ability to
            maintain comfort, absorb unexpected costs, and sustain your
            lifestyle over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $20,000 a month can support a
              high-end retirement, while $25,000 a month usually creates a wider
              cushion, stronger flexibility, and greater long-term security.
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
            $20,000 vs $25,000 a month in retirement: what changes
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$20,000 a month</th>
                  <th className={styles.tableHead}>$25,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.twentyK}</td>
                    <td className={styles.tableCell}>{row.twentyFiveK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels provide strong retirement outcomes. The
            difference is how much margin you retain after covering all
            essential and lifestyle-related expenses.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $20,000 a month is already sufficient
          </h2>

          <ul className={styles.list}>
            <li>premium lifestyle expectations</li>
            <li>stable housing situation</li>
            <li>predictable healthcare costs</li>
            <li>low debt exposure</li>
            <li>controlled long-term spending</li>
          </ul>

          <p className={styles.paragraph}>
            In these situations, $20,000 a month can already deliver a very
            comfortable and flexible retirement. However, the margin for large
            unexpected changes is still smaller than at $25,000.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $25,000 a month creates a clear advantage
          </h2>

          <p className={styles.paragraph}>
            The main difference is the level of financial freedom. A higher
            income makes it easier to absorb large expenses, adapt to economic
            changes, and maintain a high-quality lifestyle without constant
            adjustments.
          </p>

          <ul className={styles.list}>
            <li>greater flexibility in housing decisions</li>
            <li>stronger protection against inflation</li>
            <li>more freedom for travel and leisure</li>
            <li>less pressure from unexpected financial events</li>
          </ul>

          <p className={styles.paragraph}>
            This additional margin can significantly improve long-term stability
            and reduce financial stress over time.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Compare your own retirement income plan
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different savings, return, and
              withdrawal assumptions and estimate the monthly income your
              portfolio may realistically generate.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Test Your Retirement Income →
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
                href="/is-15000-vs-20000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $15,000 vs $20,000 a month in retirement
              </Link>
            </li>
            <li>
              <Link
                href="/is-12000-vs-15000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $12,000 vs $15,000 a month in retirement
              </Link>
            </li>
            <li>
              <Link
                href="/is-10000-vs-12000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $10,000 vs $12,000 a month in retirement
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
            $20,000 and $25,000 a month both support high-quality retirement
            lifestyles. The key difference is how much flexibility and financial
            security each level provides over time.
          </p>

          <p className={styles.paragraph}>
            The most effective strategy is to align your expected monthly income
            with your desired lifestyle while maintaining a margin for
            unexpected events.
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
