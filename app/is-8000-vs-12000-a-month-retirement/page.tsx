import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-8000-vs-12000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$8,000 vs $12,000 a Month in Retirement: How Big Is the Lifestyle Gap?";
const pageTitle =
  "$8,000 vs $12,000 a Month in Retirement: How Big Is the Lifestyle Gap?";
const pageDescription =
  "Compare retiring on $8,000 vs $12,000 a month. See how lifestyle, housing, healthcare, and financial flexibility change between these income levels.";

const comparisonRows = [
  {
    category: "Lifestyle feel",
    eightK:
      "$8,000 a month already supports a strong and comfortable retirement in many areas, with good flexibility and moderate financial pressure.",
    twelveK:
      "$12,000 a month usually feels significantly more relaxed, where most day-to-day financial constraints start to disappear.",
  },
  {
    category: "Housing flexibility",
    eightK:
      "Housing can be comfortable and well-located, but still requires some tradeoffs depending on the area.",
    twelveK:
      "Housing options expand noticeably, with access to better locations, larger spaces, and fewer compromises overall.",
  },
  {
    category: "Healthcare",
    eightK:
      "Healthcare is manageable, but major or recurring costs can still impact long-term planning.",
    twelveK:
      "Healthcare becomes much easier to absorb, with a stronger cushion for both expected and unexpected costs.",
  },
  {
    category: "Travel",
    eightK:
      "Travel is realistic but often planned carefully to fit within the budget.",
    twelveK:
      "Travel becomes more frequent and flexible, with room for better experiences and less budgeting stress.",
  },
  {
    category: "Financial margin",
    eightK:
      "There is a solid buffer, but inflation and surprises still require attention.",
    twelveK:
      "The larger income creates a wide margin, making retirement feel far more stable and resilient over time.",
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
            The jump from $8,000 to $12,000 a month in retirement is not just a
            small upgrade. It often changes how comfortable and flexible daily
            life feels.
          </p>

          <p className={styles.intro}>
            At $8,000 a month, many retirees already live well, with solid
            housing, manageable healthcare, and some room for travel.
          </p>

          <p className={styles.intro}>
            At $12,000 a month, the difference becomes more noticeable. Financial
            pressure drops further, and more lifestyle choices become easier to
            sustain long term.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $8,000 a month supports a strong
              retirement, but $12,000 a month often removes many remaining
              financial constraints and creates a much wider comfort margin.
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
            $8,000 vs $12,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$8,000 a month</th>
                  <th className={styles.tableHead}>$12,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.eightK}</td>
                    <td className={styles.tableCell}>{row.twelveK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support a comfortable retirement. The real
            difference is how much flexibility and long-term security you gain
            with the higher income.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $8,000 a month already works well
          </h2>

          <ul className={styles.list}>
            <li>comfortable lifestyle in many regions</li>
            <li>manageable housing and healthcare</li>
            <li>some travel flexibility</li>
            <li>reasonable financial stability</li>
          </ul>

          <p className={styles.paragraph}>
            For many retirees, $8,000 a month is already enough to live well,
            especially with controlled expenses.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What the jump to $12,000 really changes
          </h2>

          <p className={styles.paragraph}>
            The biggest shift is not luxury. It is ease. More decisions become
            simple, and fewer tradeoffs are required between important life
            categories.
          </p>

          <p className={styles.paragraph}>
            Over time, that extra margin can significantly improve long-term
            stability and overall quality of life.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your retirement income could look like
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              investments can generate.
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
                href="/is-8000-vs-10000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $8,000 vs $10,000 comparison
              </Link>
            </li>
            <li>
              <Link
                href="/is-10000-vs-12000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $10,000 vs $12,000 comparison
              </Link>
            </li>
            <li>
              <Link
                href="/is-12000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $12,000 a month enough?
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
            $8,000 a month can already support a strong retirement. But $12,000 a
            month often creates a noticeably easier, more flexible, and more
            resilient financial life.
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
