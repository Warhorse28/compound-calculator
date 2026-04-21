import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-10000-vs-15000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $15,000 a Month Much Better Than $10,000 in Retirement?";

const pageTitle =
  "Is $15,000 a Month Much Better Than $10,000 in Retirement?";

const pageDescription =
  "Compare retiring on $10,000 vs $15,000 a month. See how a bigger monthly income changes lifestyle, housing, healthcare, and long-term retirement flexibility.";

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
    tenK:
      "$10,000 a month can already support a strong retirement lifestyle in many areas, with high comfort and solid flexibility.",
    fifteenK:
      "$15,000 a month usually feels much more open-ended, with more choice, more comfort, and less pressure around spending.",
  },
  {
    category: "Housing flexibility",
    tenK:
      "Housing options are strong, but expensive markets can still create some tradeoffs over time.",
    fifteenK:
      "There is much more room for premium housing, stronger location flexibility, and less sensitivity to rising costs.",
  },
  {
    category: "Healthcare buffer",
    tenK:
      "Healthcare costs are manageable, but larger medical expenses can still affect travel or lifestyle decisions.",
    fifteenK:
      "A wider income margin makes healthcare costs easier to absorb without disrupting the broader plan.",
  },
  {
    category: "Financial margin",
    tenK:
      "There is a strong cushion, but inflation, emergencies, and larger lifestyle goals still matter.",
    fifteenK:
      "The extra income creates a noticeably larger buffer for inflation, travel, family support, and long-term stability.",
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
            The jump from $10,000 to $15,000 a month in retirement is not just
            about spending more. It can change how free, resilient, and
            low-stress retirement actually feels.
          </p>

          <p className={styles.intro}>
            At $10,000 a month, many retirees can already live very well. The
            basics are covered, the lifestyle is comfortable, and there is room
            for flexibility.
          </p>

          <p className={styles.intro}>
            But at $15,000 a month, the experience often shifts again. Bigger
            costs become easier to handle, more choices open up, and long-term
            stability usually feels much stronger.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $10,000 a month can already support
              a high-quality retirement, but $15,000 a month usually creates a
              much wider cushion and a more flexible lifestyle.
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
            $10,000 vs $15,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$10,000 a month</th>
                  <th className={styles.tableHead}>$15,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.tenK}</td>
                    <td className={styles.tableCell}>{row.fifteenK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support retirement very well. The real
            difference is how much room you have after the basics are fully
            covered.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $10,000 a month already works very well
          </h2>

          <ul className={styles.list}>
            <li>comfortable to high cost-of-living areas</li>
            <li>stable housing situation</li>
            <li>manageable healthcare costs</li>
            <li>low or controlled debt</li>
            <li>strong but balanced lifestyle expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $10,000 a month can already feel more than
            enough. But there is still less room for bigger goals, family
            support, and rising long-term costs than many people assume.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $15,000 a month changes the experience
          </h2>

          <p className={styles.paragraph}>
            The biggest difference is not just comfort. It is optionality. A
            wider income buffer gives you more freedom in housing, travel,
            healthcare, and how you respond to unexpected events.
          </p>

          <p className={styles.paragraph}>
            Over a long retirement, that extra margin can reduce stress and make
            the plan feel much more stable and enjoyable.
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
                href="/is-10000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $10,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-12000-vs-15000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $12,000 vs $15,000 comparison
              </Link>
            </li>
            <li>
              <Link
                href="/is-15000-vs-20000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $15,000 vs $20,000 comparison
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
            $10,000 a month can already support a strong retirement. But
            $15,000 a month usually creates a noticeably easier and more
            flexible lifestyle, especially over the long run.
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
