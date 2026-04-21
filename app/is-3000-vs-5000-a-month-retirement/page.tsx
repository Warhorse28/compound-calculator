import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-3000-vs-5000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Can You Retire on $3,000 vs $5,000 a Month? What’s the Real Difference?";

const pageTitle =
  "Can You Retire on $3,000 vs $5,000 a Month? What’s the Real Difference?";

const pageDescription =
  "Compare retiring on $3,000 vs $5,000 a month. See how an extra $2,000 changes lifestyle, flexibility, housing choices, and long-term retirement stability.";

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
    threeK:
      "$3,000 a month usually supports a modest retirement, especially in lower-cost areas with careful budgeting.",
    fiveK:
      "$5,000 a month usually supports a much more comfortable retirement with noticeably more room to breathe.",
  },
  {
    category: "Housing flexibility",
    threeK:
      "Housing costs can quickly limit your options, especially if rent, taxes, or maintenance are high.",
    fiveK:
      "You have more room to handle housing costs without putting as much pressure on the rest of the budget.",
  },
  {
    category: "Healthcare buffer",
    threeK:
      "Healthcare expenses can take a meaningful share of the budget and may require tighter tradeoffs elsewhere.",
    fiveK:
      "Medical costs are easier to absorb without disrupting everyday comfort too aggressively.",
  },
  {
    category: "Financial margin",
    threeK:
      "Unexpected expenses matter a lot. A single surprise can force quick adjustments.",
    fiveK:
      "The extra income creates a wider margin for inflation, emergencies, travel, and quality-of-life spending.",
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
            The gap between $3,000 and $5,000 a month in retirement is bigger
            than it looks. That extra $2,000 can change whether retirement feels
            tight and carefully managed or noticeably more comfortable.
          </p>

          <p className={styles.intro}>
            For some retirees, $3,000 a month can work. But it usually depends
            on lower living costs, stable housing, and very controlled spending.
          </p>

          <p className={styles.intro}>
            At $5,000 a month, retirement often feels less fragile. You still
            need a plan, but the margin for error is much better.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $3,000 a month may be enough for a
              basic retirement, but $5,000 a month usually creates a far more
              flexible and resilient lifestyle.
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
            $3,000 vs $5,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$3,000 a month</th>
                  <th className={styles.tableHead}>$5,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.threeK}</td>
                    <td className={styles.tableCell}>{row.fiveK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both numbers can support retirement in the right circumstances. The
            difference is how much freedom you have after covering the basics.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $3,000 a month can still work
          </h2>

          <ul className={styles.list}>
            <li>lower cost of living areas</li>
            <li>paid-off or reduced housing expenses</li>
            <li>controlled healthcare costs</li>
            <li>low debt and limited fixed expenses</li>
            <li>simple lifestyle expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In these situations, $3,000 a month can be workable. But it usually
            leaves less room for surprises, upgrades, or rising costs over time.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $5,000 a month changes in practice
          </h2>

          <p className={styles.paragraph}>
            The biggest change is not luxury. It is breathing room. More income
            means fewer tradeoffs and less pressure from everyday uncertainty.
          </p>

          <p className={styles.paragraph}>
            Over a long retirement, that extra margin can make housing,
            healthcare, travel, and inflation much easier to manage without
            constantly reworking the plan.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what retirement income your plan could support
            </h2>

            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              savings and investment assumptions could realistically produce.
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
                href="/is-3000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $3,000 a month enough to retire
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
                href="/is-4000-vs-6000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $4,000 vs $6,000 comparison
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
            $3,000 a month can be enough for some retirees, but it usually comes
            with tighter limits. $5,000 a month creates a noticeably stronger
            retirement position.
          </p>

          <p className={styles.paragraph}>
            The smartest move is to compare your expected income with the
            lifestyle you actually want, then test the numbers before relying on
            them.
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
