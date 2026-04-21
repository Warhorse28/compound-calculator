import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-10000-vs-20000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$10,000 vs $20,000 a Month in Retirement: How Big Is the Difference?";
const pageTitle =
  "$10,000 vs $20,000 a Month in Retirement: How Big Is the Difference?";
const pageDescription =
  "Compare retiring on $10,000 vs $20,000 a month. See how lifestyle, housing, healthcare, travel, and long-term financial flexibility change.";

const comparisonRows = [
  {
    category: "Lifestyle feel",
    tenK:
      "$10,000 a month already supports a very comfortable retirement with strong flexibility and low day-to-day financial pressure.",
    twentyK:
      "$20,000 a month feels significantly more effortless, where most financial decisions become optional rather than necessary.",
  },
  {
    category: "Housing flexibility",
    tenK:
      "High-quality housing is easily achievable, though premium locations or luxury properties may still require prioritization.",
    twentyK:
      "Top-tier housing becomes accessible, including prime locations and larger properties without meaningful tradeoffs.",
  },
  {
    category: "Healthcare",
    tenK:
      "Healthcare is well covered, including private plans and strong protection against major expenses.",
    twentyK:
      "Healthcare becomes almost irrelevant as a concern, with full access to premium care and minimal financial impact.",
  },
  {
    category: "Travel",
    tenK:
      "Frequent travel is realistic, including international trips and high-quality experiences with some planning.",
    twentyK:
      "Travel becomes extremely flexible and spontaneous, with luxury options and extended stays easily sustainable.",
  },
  {
    category: "Financial margin",
    tenK:
      "A strong margin exists, but long-term planning and inflation still require attention.",
    twentyK:
      "A very large financial buffer creates long-term stability, making retirement highly resilient and low stress.",
  },
];

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
          <div className={styles.eyebrow}>Retirement income comparison</div>
          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            The jump from $10,000 to $20,000 a month in retirement is not about
            covering basic needs. It is about how much easier and more flexible
            life becomes once financial pressure is almost completely removed.
          </p>

          <p className={styles.intro}>
            At $10,000 a month, most retirees can already enjoy a very
            comfortable lifestyle with strong control over housing, healthcare,
            and travel.
          </p>

          <p className={styles.intro}>
            At $20,000 a month, the difference is less about spending more and
            more about having complete freedom and long-term financial security.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $10,000 a month already delivers a
              comfortable retirement, but $20,000 a month removes nearly all
              financial constraints and creates true lifestyle freedom.
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
            $10,000 vs $20,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$10,000 a month</th>
                  <th className={styles.tableHead}>$20,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>
                      {row.category}
                    </td>
                    <td className={styles.tableCell}>{row.tenK}</td>
                    <td className={styles.tableCell}>{row.twentyK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels support a strong retirement. The real difference
            is how much flexibility, security, and ease you gain as income
            increases.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $10,000 a month already feels strong
          </h2>

          <ul className={styles.list}>
            <li>comfortable lifestyle with minimal financial stress</li>
            <li>strong housing and healthcare stability</li>
            <li>consistent travel and leisure options</li>
            <li>good margin for long-term planning</li>
          </ul>

          <p className={styles.paragraph}>
            For many people, $10,000 a month is already enough to create a very
            satisfying and stable retirement.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes at $20,000 a month
          </h2>

          <p className={styles.paragraph}>
            The biggest change is psychological. Financial decisions stop feeling
            like tradeoffs and start feeling like preferences.
          </p>

          <p className={styles.paragraph}>
            This level of income provides a wider safety margin, allowing you to
            absorb unexpected costs and maintain lifestyle quality over decades.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how your numbers compare
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how much income your investments
              could generate over time.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related pages</h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/is-10000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $10,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-20000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $20,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-10000-vs-15000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $10,000 vs $15,000 comparison
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
            $10,000 a month is already enough for a very comfortable retirement.
            However, $20,000 a month significantly increases flexibility,
            security, and long-term ease.
          </p>

          <p className={styles.paragraph}>
            The difference is not just financial. It is how retirement feels day
            to day and how resilient your plan is over time.
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
