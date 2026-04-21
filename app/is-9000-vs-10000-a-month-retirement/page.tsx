import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-9000-vs-10000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$9,000 vs $10,000 a Month in Retirement: Is the Difference Noticeable?";
const pageTitle =
  "$9,000 vs $10,000 a Month in Retirement: Is the Difference Noticeable?";
const pageDescription =
  "Compare retiring on $9,000 vs $10,000 a month. See how housing, healthcare, travel, and financial flexibility change between these retirement income levels.";

const comparisonRows = [
  {
    category: "Lifestyle feel",
    nineK:
      "$9,000 a month already supports a very comfortable retirement in many situations, with strong flexibility and relatively low financial pressure.",
    tenK:
      "$10,000 a month often feels just a bit easier, with more room for day-to-day comfort and fewer small tradeoffs across the budget.",
  },
  {
    category: "Housing flexibility",
    nineK:
      "Housing is often strong and comfortable, though certain locations or upgrades may still require more careful prioritization.",
    tenK:
      "Housing choices usually open up a little more, making it easier to absorb better locations, more space, or higher-quality living.",
  },
  {
    category: "Healthcare",
    nineK:
      "Healthcare is generally manageable, but recurring costs or larger bills can still affect the wider plan over time.",
    tenK:
      "Healthcare feels slightly more secure, with a stronger cushion for premiums, out-of-pocket costs, and future uncertainty.",
  },
  {
    category: "Travel",
    nineK:
      "Travel is realistic and often comfortable, though bigger or more frequent trips may still require planning.",
    tenK:
      "Travel tends to feel a bit more flexible, with more room for better accommodations or more frequent trips without pressure.",
  },
  {
    category: "Financial margin",
    nineK:
      "There is already a good margin here, but inflation and unexpected costs still matter over a long retirement.",
    tenK:
      "That extra $1,000 a month strengthens the long-term cushion and can make retirement feel more resilient and less tight.",
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
            The move from $9,000 to $10,000 a month in retirement is not a huge
            leap on paper, but it can still make retirement feel a little more
            flexible, stable, and relaxed.
          </p>

          <p className={styles.intro}>
            At $9,000 a month, many retirees can already live very well, with
            solid housing, manageable healthcare, and good room for travel and
            leisure.
          </p>

          <p className={styles.intro}>
            At $10,000 a month, the difference is usually not dramatic luxury.
            It is the extra margin that makes everyday decisions feel slightly
            easier and long-term planning feel a little stronger.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $9,000 a month already supports a
              strong retirement, but $10,000 a month often provides the extra
              breathing room that makes the whole plan feel more durable and
              comfortable.
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
            $9,000 vs $10,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$9,000 a month</th>
                  <th className={styles.tableHead}>$10,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.nineK}</td>
                    <td className={styles.tableCell}>{row.tenK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support a very comfortable retirement. The
            real difference is how much extra ease and resilience the additional
            monthly income creates over time.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $9,000 a month already feels strong
          </h2>

          <ul className={styles.list}>
            <li>very comfortable lifestyle in many areas</li>
            <li>solid housing and healthcare flexibility</li>
            <li>good room for travel and leisure</li>
            <li>strong day-to-day financial stability</li>
          </ul>

          <p className={styles.paragraph}>
            For many retirees, $9,000 a month is already enough to support a
            retirement that feels secure, comfortable, and enjoyable.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What the extra $1,000 a month really changes
          </h2>

          <p className={styles.paragraph}>
            The biggest change is not a completely different lifestyle. It is
            less friction. That extra margin can make housing, healthcare,
            inflation, and unexpected costs feel less disruptive to the overall
            plan.
          </p>

          <p className={styles.paragraph}>
            Over a long retirement, even a modest difference like this can
            improve confidence, flexibility, and overall peace of mind.
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
                href="/is-8000-vs-9000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $8,000 vs $9,000 comparison
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
                href="/is-10000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $10,000 a month enough to retire?
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
            $9,000 a month already supports a very strong retirement in many
            situations. But $10,000 a month often gives you the extra margin
            that makes retirement feel just a little easier, stronger, and more
            resilient.
          </p>

          <p className={styles.paragraph}>
            The smartest move is still to compare your expected income with your
            real costs and long-term goals before locking in any retirement
            target.
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
