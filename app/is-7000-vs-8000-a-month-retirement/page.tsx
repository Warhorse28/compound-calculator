import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-7000-vs-8000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $7,000 vs $8,000 a Month Enough to Retire? Key Differences";

const pageTitle =
  "Is $7,000 vs $8,000 a Month Enough to Retire? What Changes";

const pageDescription =
  "Compare retiring on $7,000 vs $8,000 a month. See how lifestyle flexibility, costs, and long-term stability change between these income levels.";

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
    sevenK:
      "$7,000 a month can support a comfortable retirement in many areas, with solid flexibility and manageable constraints.",
    eightK:
      "$8,000 a month typically allows a more relaxed lifestyle with greater comfort and fewer financial tradeoffs.",
  },
  {
    category: "Housing flexibility",
    sevenK:
      "Housing options are good, but higher-cost areas may still require careful budgeting.",
    eightK:
      "More freedom to choose better housing or absorb rising costs without major adjustments.",
  },
  {
    category: "Healthcare impact",
    sevenK:
      "Healthcare expenses remain manageable but can still influence long-term planning.",
    eightK:
      "Greater ability to absorb healthcare costs without affecting overall lifestyle.",
  },
  {
    category: "Financial cushion",
    sevenK:
      "Provides a solid cushion, but larger unexpected expenses may still require adjustments.",
    eightK:
      "Stronger cushion for travel, inflation, and unexpected costs, reducing financial pressure.",
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
            The difference between $7,000 and $8,000 a month in retirement is
            not just about income. It is about how much flexibility and comfort
            your plan can realistically support.
          </p>

          <p className={styles.intro}>
            $7,000 a month can already provide a strong retirement in many
            situations. But $8,000 a month typically adds more stability,
            flexibility, and breathing room across key expenses.
          </p>

          <p className={styles.intro}>
            The real question is not which number is higher. It is how much
            financial freedom each level can sustain over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $7,000 a month supports a solid
              retirement, while $8,000 a month usually provides a stronger
              cushion and greater long-term flexibility.
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
            $7,000 vs $8,000 a month in retirement: what changes
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$7,000 a month</th>
                  <th className={styles.tableHead}>$8,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>
                      {row.category}
                    </td>
                    <td className={styles.tableCell}>{row.sevenK}</td>
                    <td className={styles.tableCell}>{row.eightK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both levels can support retirement comfortably. The difference is
            how much margin you have after covering essential costs.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $7,000 a month is enough
          </h2>

          <ul className={styles.list}>
            <li>moderate to slightly higher cost of living</li>
            <li>stable housing expenses</li>
            <li>controlled healthcare costs</li>
            <li>low or manageable debt</li>
            <li>balanced lifestyle expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $7,000 a month can support a very solid
            retirement. But there is still less margin compared to higher income
            levels.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $8,000 a month makes a difference
          </h2>

          <p className={styles.paragraph}>
            The extra income increases flexibility. It reduces the impact of
            rising costs and allows for a more stable and comfortable lifestyle
            over time.
          </p>

          <p className={styles.paragraph}>
            That additional cushion makes it easier to handle unexpected
            expenses without compromising long-term plans.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Compare your own retirement income
            </h2>

            <p className={styles.ctaText}>
              Use the calculator to test different scenarios and see how much
              monthly income your investments could generate.
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
                href="/is-7000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $7,000 a month enough to retire
              </Link>
            </li>
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
                href="/is-7000-vs-9000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $7,000 vs $9,000 comparison
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
            $7,000 and $8,000 a month can both support retirement, but they do
            not offer the same level of flexibility. One provides a strong base,
            while the other adds more comfort and security.
          </p>

          <p className={styles.paragraph}>
            The key is to understand how much income your plan can sustain and
            match it to your lifestyle expectations.
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
