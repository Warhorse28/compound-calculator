import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-15000-vs-20000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$15,000 vs $20,000 a Month in Retirement: What Changes?";

const pageTitle =
  "$15,000 vs $20,000 a Month in Retirement: What Changes?";

const pageDescription =
  "Compare retiring on $15,000 vs $20,000 a month. See how lifestyle, housing, healthcare, and long-term retirement flexibility can change across these two high-income retirement levels.";

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
    fifteenK:
      "$15,000 a month can support a very comfortable retirement lifestyle in many situations, with strong flexibility and substantial room for discretionary spending.",
    twentyK:
      "$20,000 a month usually supports an even more elevated retirement lifestyle with greater margin, stronger resilience, and more day-to-day freedom.",
  },
  {
    category: "Housing flexibility",
    fifteenK:
      "Housing choices are already very strong, but top-tier markets can still reduce flexibility or create tradeoffs over time.",
    twentyK:
      "More room for premium housing options, stronger location flexibility, or better protection against rising housing costs.",
  },
  {
    category: "Healthcare impact",
    fifteenK:
      "Healthcare costs are usually manageable, but major medical expenses can still reshape part of the budget.",
    twentyK:
      "A higher income level creates more room to absorb healthcare costs without changing the broader retirement plan.",
  },
  {
    category: "Financial cushion",
    fifteenK:
      "Provides a strong cushion for many retirees, though larger surprises can still affect travel, lifestyle, or long-term flexibility.",
    twentyK:
      "Usually creates a wider cushion for inflation, travel, lifestyle upgrades, and unexpected expenses.",
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
            The difference between $15,000 and $20,000 a month in retirement is
            not just about income. It is about how much more freedom your plan
            has after essential expenses are covered.
          </p>

          <p className={styles.intro}>
            $15,000 a month can already support a very strong retirement in many
            areas. But $20,000 a month usually creates more room for housing,
            healthcare, travel, and larger unexpected costs.
          </p>

          <p className={styles.intro}>
            What really matters is not just the difference in income, but how
            each level impacts long-term comfort, flexibility, and financial
            security.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $15,000 a month can support a strong
              retirement, while $20,000 a month usually creates a wider
              cushion, stronger flexibility, and less pressure from rising
              costs.
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
            $15,000 vs $20,000 a month in retirement: what changes
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$15,000 a month</th>
                  <th className={styles.tableHead}>$20,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.fifteenK}</td>
                    <td className={styles.tableCell}>{row.twentyK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support retirement very well. The real
            difference is how much margin you have once housing, healthcare, and
            daily living costs are fully accounted for.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $15,000 a month can still be enough
          </h2>

          <ul className={styles.list}>
            <li>high cost of living areas</li>
            <li>stable housing expenses</li>
            <li>manageable healthcare costs</li>
            <li>limited debt and fixed costs</li>
            <li>premium retirement expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $15,000 a month can support a comfortable and
            flexible retirement. But $20,000 a month still creates a wider
            cushion, which can reduce pressure over time.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $20,000 a month creates a clear advantage
          </h2>

          <p className={styles.paragraph}>
            The biggest benefit is flexibility. A higher monthly income makes it
            easier to absorb housing changes, healthcare costs, inflation, and
            unexpected expenses without cutting lifestyle quality too quickly.
          </p>

          <ul className={styles.list}>
            <li>more room for premium housing options</li>
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
              <Link
                href="/is-10000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $10,000 a month enough to retire
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
            $15,000 and $20,000 a month can both support retirement very well,
            but they do not create the same level of flexibility or protection.
            One gives you a strong base. The other usually gives you even more
            breathing room.
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
