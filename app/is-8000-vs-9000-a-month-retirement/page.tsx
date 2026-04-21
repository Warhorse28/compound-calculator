import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-8000-vs-9000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $8,000 vs $9,000 a Month Enough to Retire? How Big Is the Difference?";

const pageTitle =
  "Is $8,000 vs $9,000 a Month Enough to Retire? How Big Is the Difference?";

const pageDescription =
  "Compare retiring on $8,000 vs $9,000 a month. See how much difference an extra $1,000 really makes in lifestyle, flexibility, and long-term stability.";

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
    eightK:
      "$8,000 a month already supports a very comfortable retirement in many areas, with strong flexibility.",
    nineK:
      "$9,000 a month feels noticeably more relaxed, with fewer tradeoffs and more room for discretionary spending.",
  },
  {
    category: "Housing options",
    eightK:
      "You have good housing flexibility, but high-cost areas may still require some planning.",
    nineK:
      "Greater freedom to choose premium locations or upgrade housing without pressure.",
  },
  {
    category: "Healthcare buffer",
    eightK:
      "Healthcare is manageable, but still something to plan for carefully over time.",
    nineK:
      "More breathing room to absorb healthcare costs without impacting lifestyle.",
  },
  {
    category: "Financial margin",
    eightK:
      "Solid cushion, but larger unexpected costs can still affect long-term plans.",
    nineK:
      "Stronger margin that makes it easier to handle surprises and inflation.",
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
            At first glance, $8,000 vs $9,000 a month might not seem like a huge
            difference. But in retirement, that extra $1,000 can quietly change
            how flexible and stress-free your life feels.
          </p>

          <p className={styles.intro}>
            $8,000 a month already puts you in a strong position. You can cover
            essentials, enjoy a good lifestyle, and still have some room to
            breathe.
          </p>

          <p className={styles.intro}>
            But $9,000 a month adds something different — less pressure, more
            choice, and a noticeably wider margin for unexpected costs.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> The jump from $8,000 to $9,000 is not
              about luxury. It is about reducing financial stress and gaining
              more control over your retirement lifestyle.
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
            $8,000 vs $9,000 a month: what actually changes
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$8,000 a month</th>
                  <th className={styles.tableHead}>$9,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>
                      {row.category}
                    </td>
                    <td className={styles.tableCell}>{row.eightK}</td>
                    <td className={styles.tableCell}>{row.nineK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels support a strong retirement. The difference is
            how much flexibility you have once everything is paid.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $8,000 a month already works very well
          </h2>

          <ul className={styles.list}>
            <li>comfortable cost of living</li>
            <li>stable housing situation</li>
            <li>predictable expenses</li>
            <li>moderate lifestyle expectations</li>
            <li>controlled financial commitments</li>
          </ul>

          <p className={styles.paragraph}>
            In these situations, $8,000 a month can feel more than enough. You
            can live well without constantly worrying about money.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What the extra $1,000 really changes
          </h2>

          <p className={styles.paragraph}>
            The biggest difference is psychological as much as financial. That
            extra margin gives you more confidence in your plan.
          </p>

          <p className={styles.paragraph}>
            It becomes easier to travel, handle surprises, and maintain your
            lifestyle without needing to adjust constantly.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your retirement income could look like
            </h2>

            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              investments can generate based on your current plan.
            </p>

            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Explore similar comparisons
          </h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/is-8000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $8,000 a month enough to retire
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
                href="/is-8000-vs-10000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $8,000 vs $10,000 comparison
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
            $8,000 a month gives you a strong retirement. $9,000 a month makes it
            feel easier and more stable.
          </p>

          <p className={styles.paragraph}>
            Over time, that extra margin can be the difference between managing
            your lifestyle and fully enjoying it.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to see your numbers?
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
