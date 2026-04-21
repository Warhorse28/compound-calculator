import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-6000-vs-7000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$6,000 vs $7,000 a Month in Retirement: Is the Upgrade Noticeable?";
const pageTitle =
  "$6,000 vs $7,000 a Month in Retirement: Is the Upgrade Noticeable?";
const pageDescription =
  "Compare retiring on $6,000 vs $7,000 a month. See how housing, healthcare, travel, and financial flexibility change between these retirement income levels.";

const comparisonRows = [
  {
    category: "Lifestyle feel",
    sixK:
      "$6,000 a month can support a comfortable retirement in many places, with decent flexibility and manageable day-to-day financial pressure.",
    sevenK:
      "$7,000 a month usually feels more relaxed, with a bit more breathing room across the budget and fewer small tradeoffs.",
  },
  {
    category: "Housing flexibility",
    sixK:
      "Housing is often comfortable, but location and size may still need some balancing depending on local costs.",
    sevenK:
      "Housing choices open up a bit more, with better chances of upgrading location, quality, or space without squeezing other categories.",
  },
  {
    category: "Healthcare",
    sixK:
      "Healthcare is generally manageable, but larger or recurring costs can still affect the broader plan.",
    sevenK:
      "Healthcare becomes easier to absorb, with a stronger cushion for premiums, out-of-pocket costs, and unexpected bills.",
  },
  {
    category: "Travel",
    sixK:
      "Travel is realistic, though it may still require planning and selective spending.",
    sevenK:
      "Travel usually feels easier, with more room for regular trips, better accommodations, or less budgeting pressure.",
  },
  {
    category: "Financial margin",
    sixK:
      "There is a useful buffer, but inflation and surprises can still matter quite a bit over time.",
    sevenK:
      "That extra $1,000 a month creates a noticeably stronger margin, which can make retirement feel more stable and flexible.",
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
            The move from $6,000 to $7,000 a month in retirement may not sound
            huge at first, but it can still make retirement feel meaningfully
            easier and less tight.
          </p>

          <p className={styles.intro}>
            At $6,000 a month, many retirees can already live comfortably,
            especially in lower-cost areas or with a simpler lifestyle.
          </p>

          <p className={styles.intro}>
            At $7,000 a month, the difference is usually not about luxury. It is
            about having more room for housing, healthcare, travel, and
            long-term peace of mind.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $6,000 a month can work well in
              retirement, but $7,000 a month often gives you the extra margin
              that makes the overall plan feel more comfortable and resilient.
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
            $6,000 vs $7,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$6,000 a month</th>
                  <th className={styles.tableHead}>$7,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.sixK}</td>
                    <td className={styles.tableCell}>{row.sevenK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support a solid retirement. The real
            difference is how much flexibility remains after the main monthly
            expenses are covered.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $6,000 a month already feels strong
          </h2>

          <ul className={styles.list}>
            <li>comfortable retirement in many lower-cost areas</li>
            <li>manageable housing and everyday spending</li>
            <li>basic travel and leisure can still fit</li>
            <li>reasonable flexibility with good planning</li>
          </ul>

          <p className={styles.paragraph}>
            For many retirees, $6,000 a month is already enough to create a
            stable and satisfying retirement, especially with controlled
            expenses.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What the extra $1,000 a month really changes
          </h2>

          <p className={styles.paragraph}>
            The biggest change is not dramatic luxury. It is less pressure. That
            extra margin can make healthcare, housing, or unexpected bills feel
            less disruptive to the overall plan.
          </p>

          <p className={styles.paragraph}>
            Over a long retirement, even a moderate increase like this can
            create a noticeably stronger sense of stability and choice.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your own retirement income could look like
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
                href="/is-5000-vs-6000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $5,000 vs $6,000 comparison
              </Link>
            </li>
            <li>
              <Link
                href="/is-7000-vs-8000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $7,000 vs $8,000 comparison
              </Link>
            </li>
            <li>
              <Link
                href="/is-6000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $6,000 a month enough to retire?
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
            $6,000 a month can already support a comfortable retirement in many
            situations. But $7,000 a month often gives you the extra breathing
            room that makes retirement feel less tight and more secure.
          </p>

          <p className={styles.paragraph}>
            The smartest move is to compare your expected income with your real
            costs, then test your own numbers before relying on a target long
            term.
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
