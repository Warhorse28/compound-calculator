import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-5000-vs-6000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Does $6,000 a Month Feel Much Different From $5,000 in Retirement?";

const pageTitle =
  "Does $6,000 a Month Feel Much Different From $5,000 in Retirement?";

const pageDescription =
  "Compare retiring on $5,000 vs $6,000 a month. See whether an extra $1,000 meaningfully changes comfort, flexibility, and long-term retirement stability.";

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
    fiveK:
      "$5,000 a month can already support a comfortable retirement in many areas, with a decent amount of flexibility.",
    sixK:
      "$6,000 a month usually feels more relaxed, with fewer tradeoffs and more room for discretionary spending.",
  },
  {
    category: "Housing flexibility",
    fiveK:
      "Housing is manageable, but higher-cost areas may still require more careful choices.",
    sixK:
      "The extra income makes better housing options easier to afford without putting as much pressure on the budget.",
  },
  {
    category: "Healthcare buffer",
    fiveK:
      "Healthcare costs are manageable, but larger bills can still affect other parts of the plan.",
    sixK:
      "A wider margin makes healthcare costs easier to absorb without cutting lifestyle too quickly.",
  },
  {
    category: "Financial margin",
    fiveK:
      "There is a workable cushion, but inflation and unexpected expenses still matter quite a bit.",
    sixK:
      "The extra $1,000 creates a stronger cushion for emergencies, travel, inflation, and overall peace of mind.",
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
            On paper, $5,000 and $6,000 a month can seem fairly close. In real
            life, that extra $1,000 often changes how much breathing room you
            have once retirement actually begins.
          </p>

          <p className={styles.intro}>
            At $5,000 a month, many retirees can already live comfortably,
            especially with moderate housing costs and controlled spending.
          </p>

          <p className={styles.intro}>
            At $6,000 a month, the pressure usually drops. The budget feels less
            tight, unexpected costs are easier to handle, and retirement often
            feels more stable overall.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> The jump from $5,000 to $6,000 a
              month is less about luxury and more about margin. That margin can
              make retirement feel noticeably easier to sustain.
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
            $5,000 vs $6,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$5,000 a month</th>
                  <th className={styles.tableHead}>$6,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.fiveK}</td>
                    <td className={styles.tableCell}>{row.sixK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support retirement. The real difference is
            how much financial room you still have after the basics are covered.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $5,000 a month already works well
          </h2>

          <ul className={styles.list}>
            <li>moderate cost of living areas</li>
            <li>stable housing expenses</li>
            <li>low or manageable debt</li>
            <li>predictable healthcare costs</li>
            <li>balanced lifestyle expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In those situations, $5,000 a month can already support a solid and
            comfortable retirement. But the margin for larger surprises is still
            smaller than many people expect.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $6,000 a month can feel noticeably better
          </h2>

          <p className={styles.paragraph}>
            The biggest change is not that your entire lifestyle suddenly
            changes. It is that everyday decisions become easier and less
            stressful.
          </p>

          <p className={styles.paragraph}>
            Over a long retirement, that extra cushion can help with housing,
            medical costs, inflation, travel, and overall confidence in the
            plan.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your retirement plan could support
            </h2>

            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              savings and investment assumptions could realistically generate.
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
                href="/is-5000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $5,000 a month enough to retire
              </Link>
            </li>
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
                href="/is-4000-vs-5000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $4,000 vs $5,000 comparison
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
            $5,000 and $6,000 a month can both support retirement, but they do
            not feel exactly the same. One is comfortable. The other usually
            feels more stable and forgiving.
          </p>

          <p className={styles.paragraph}>
            The smartest move is to compare your expected income with your real
            lifestyle needs, then test the numbers before relying on them.
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
