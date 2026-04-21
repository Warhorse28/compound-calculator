import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-6000-vs-9000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$6,000 vs $9,000 a Month in Retirement: What Changes?";

const pageTitle =
  "$6,000 vs $9,000 a Month in Retirement: What Changes?";

const pageDescription =
  "Compare retiring on $6,000 vs $9,000 a month. See how lifestyle, healthcare, housing, and long-term retirement flexibility can change across these two income levels.";

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
    sixK:
      "$6,000 a month can support a comfortable retirement in many situations, but it still requires more awareness around fixed costs and spending decisions.",
    nineK:
      "$9,000 a month usually supports a stronger retirement lifestyle with more flexibility, more comfort, and a wider financial margin.",
  },
  {
    category: "Housing flexibility",
    sixK:
      "Housing still matters a lot. Expensive markets can reduce flexibility and force more careful tradeoffs.",
    nineK:
      "More room for better housing options or stronger protection against rising housing costs over time.",
  },
  {
    category: "Healthcare impact",
    sixK:
      "Healthcare can still take a meaningful share of the budget, especially if costs rise faster than expected.",
    nineK:
      "A higher income level makes it easier to absorb medical costs without changing the broader retirement plan.",
  },
  {
    category: "Financial cushion",
    sixK:
      "Provides a workable cushion, but larger surprises can still create pressure and reduce flexibility.",
    nineK:
      "Usually creates a stronger cushion for inflation, travel, lifestyle choices, and unexpected expenses.",
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
            The difference between $6,000 and $9,000 a month in retirement is
            not just about income. It is about how much more freedom your plan
            has after essential expenses are covered.
          </p>

          <p className={styles.intro}>
            $6,000 a month can already support a strong retirement in many
            areas. But $9,000 a month usually creates more room for housing,
            healthcare, travel, and larger unexpected costs.
          </p>

          <p className={styles.intro}>
            The real question is not which number sounds better. It is how much
            stability, flexibility, and long-term comfort each level can
            realistically support.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $6,000 a month can support a solid
              retirement, while $9,000 a month usually creates a wider cushion,
              stronger flexibility, and less pressure from rising costs.
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
            $6,000 vs $9,000 a month in retirement: what changes
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$6,000 a month</th>
                  <th className={styles.tableHead}>$9,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.sixK}</td>
                    <td className={styles.tableCell}>{row.nineK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support retirement. The real difference is
            how much margin you have once housing, healthcare, and daily living
            costs are fully accounted for.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $6,000 a month can still be enough
          </h2>

          <ul className={styles.list}>
            <li>moderate cost of living areas</li>
            <li>stable housing expenses</li>
            <li>manageable healthcare costs</li>
            <li>limited debt and fixed costs</li>
            <li>practical retirement expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $6,000 a month can support a comfortable
            retirement. But the room for error is smaller, which makes planning
            and spending discipline more important.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $9,000 a month creates a clear advantage
          </h2>

          <p className={styles.paragraph}>
            The biggest benefit is flexibility. A higher monthly income makes it
            easier to absorb housing changes, healthcare costs, inflation, and
            unexpected expenses without cutting lifestyle quality too quickly.
          </p>

          <ul className={styles.list}>
            <li>more room for better housing options</li>
            <li>better resilience against healthcare costs</li>
            <li>greater freedom for travel and leisure</li>
            <li>stronger protection against inflation pressure</li>
          </ul>

          <p className={styles.paragraph}>
            That wider cushion can make retirement feel more stable, less
            restrictive, and easier to maintain over the long term.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Compare your own retirement income plan
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different savings, return, and
              withdrawal assumptions and see what monthly income your portfolio
              may realistically support.
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
                href="/is-6000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $6,000 a month enough to retire
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
                href="/is-6000-vs-8000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $6,000 vs $8,000 a month in retirement
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
            $6,000 and $9,000 a month can both support retirement, but they do
            not create the same level of flexibility or protection. One gives
            you a solid base. The other usually gives you much more breathing
            room.
          </p>

          <p className={styles.paragraph}>
            The best move is to estimate how much monthly income your savings
            can realistically support, then match that number to the retirement
            lifestyle you actually want.
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
