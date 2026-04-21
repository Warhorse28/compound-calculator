import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-7000-vs-11000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Different Does Retirement Feel at $7,000 vs $11,000 a Month?";

const pageTitle =
  "How Different Does Retirement Feel at $7,000 vs $11,000 a Month?";

const pageDescription =
  "Compare retiring on $7,000 vs $11,000 a month. See how the gap changes housing, flexibility, healthcare, and long-term retirement comfort.";

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
    sevenK:
      "$7,000 a month can support a strong retirement in many areas, with good flexibility and manageable compromises.",
    elevenK:
      "$11,000 a month usually feels far more relaxed, with wider choice, more comfort, and much less day-to-day financial pressure.",
  },
  {
    category: "Housing options",
    sevenK:
      "Housing can be comfortable, but expensive markets may still force more planning and tradeoffs.",
    elevenK:
      "There is much more room for better locations, stronger housing choices, and less pressure from rising costs.",
  },
  {
    category: "Healthcare buffer",
    sevenK:
      "Healthcare is manageable, but larger medical costs can still affect travel, savings, or lifestyle decisions.",
    elevenK:
      "A wider margin makes healthcare costs easier to absorb without disrupting the broader plan.",
  },
  {
    category: "Financial margin",
    sevenK:
      "There is a solid cushion, but inflation and unexpected expenses still matter quite a bit.",
    elevenK:
      "The larger income creates a noticeably stronger buffer for inflation, emergencies, travel, and long-term stability.",
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
            The move from $7,000 to $11,000 a month in retirement is not just a
            small upgrade. It can change retirement from comfortably manageable
            to noticeably more flexible, resilient, and enjoyable.
          </p>

          <p className={styles.intro}>
            At $7,000 a month, many retirees can already live well, especially
            in moderate-cost areas with stable expenses.
          </p>

          <p className={styles.intro}>
            But at $11,000 a month, the financial margin becomes much wider.
            Housing, healthcare, travel, and unexpected costs usually feel far
            easier to handle over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $7,000 a month can support a solid
              retirement, but $11,000 a month usually shifts retirement into a
              much more comfortable and resilient range.
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
            $7,000 vs $11,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$7,000 a month</th>
                  <th className={styles.tableHead}>$11,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.sevenK}</td>
                    <td className={styles.tableCell}>{row.elevenK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both levels can support retirement well. The real difference is how
            much freedom you have once the basics are fully covered.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $7,000 a month already works well
          </h2>

          <ul className={styles.list}>
            <li>moderate cost of living areas</li>
            <li>stable housing expenses</li>
            <li>manageable healthcare costs</li>
            <li>low or controlled debt</li>
            <li>comfortable but balanced lifestyle expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In those conditions, $7,000 a month can already feel strong enough.
            But larger unexpected costs and long-term inflation still have more
            power over the plan.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $11,000 a month changes the experience
          </h2>

          <p className={styles.paragraph}>
            The biggest difference is not just spending more. It is feeling less
            constrained. Bigger decisions become easier, and smaller surprises
            stop feeling like threats to the plan.
          </p>

          <p className={styles.paragraph}>
            Over a long retirement, that larger margin can improve comfort,
            confidence, and long-term financial stability in a meaningful way.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your retirement income could look like
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
                href="/is-7000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $7,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-9000-vs-11000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $9,000 vs $11,000 comparison
              </Link>
            </li>
            <li>
              <Link
                href="/is-7000-vs-10000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $7,000 vs $10,000 comparison
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
            $7,000 a month can already support a strong retirement. But
            $11,000 a month usually creates a noticeably easier and more
            resilient retirement lifestyle.
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
