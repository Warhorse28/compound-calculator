import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-30000-vs-40000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$30,000 vs $40,000 a Month in Retirement: How Much Better Is It Really?";

const pageTitle =
  "$30,000 vs $40,000 a Month in Retirement: How Much Better Is It Really?";

const pageDescription =
  "Compare retiring on $30,000 vs $40,000 a month. See how the difference affects lifestyle, travel, housing, flexibility, and long-term financial comfort.";

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
    thirtyK:
      "$30,000 a month already supports an elite retirement lifestyle with major flexibility, comfort, and very little day-to-day financial pressure.",
    fortyK:
      "$40,000 a month usually feels even more effortless, with more room for premium choices and even less need to think about spending limits.",
  },
  {
    category: "Housing flexibility",
    thirtyK:
      "High-end housing is already realistic, though the most expensive luxury options may still require some prioritization.",
    fortyK:
      "There is more room for top-tier housing, premium locations, and larger properties without creating meaningful tradeoffs elsewhere.",
  },
  {
    category: "Healthcare buffer",
    thirtyK:
      "Healthcare is highly manageable, including private care and premium services, with strong resilience against major expenses.",
    fortyK:
      "Large healthcare costs become even easier to absorb without affecting the broader retirement plan or lifestyle quality.",
  },
  {
    category: "Travel and leisure",
    thirtyK:
      "Frequent travel, premium experiences, and high discretionary spending are already fully realistic and sustainable.",
    fortyK:
      "Travel becomes even more flexible and spontaneous, with more room for luxury upgrades, longer stays, and less planning pressure.",
  },
  {
    category: "Financial margin",
    thirtyK:
      "There is already a very strong cushion for inflation, surprises, and long-term planning.",
    fortyK:
      "The larger income creates an even wider buffer, making retirement feel more resilient, more flexible, and easier to sustain over decades.",
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
            The move from $30,000 to $40,000 a month in retirement is not about
            covering the basics. At this level, it is about how smooth,
            flexible, and low-stress retirement feels.
          </p>

          <p className={styles.intro}>
            At $30,000 a month, many retirees can already enjoy an exceptional
            lifestyle with major freedom in housing, healthcare, travel, and
            day-to-day spending.
          </p>

          <p className={styles.intro}>
            At $40,000 a month, the difference is usually less about buying more
            things and more about removing even more financial friction from the
            plan.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $30,000 a month already supports an
              elite retirement, but $40,000 a month usually makes retirement
              feel even easier, more flexible, and more resilient over the long
              term.
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
            $30,000 vs $40,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$30,000 a month</th>
                  <th className={styles.tableHead}>$40,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.thirtyK}</td>
                    <td className={styles.tableCell}>{row.fortyK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support an extremely strong retirement. The
            real difference is how much optionality and long-term breathing room
            you still have after everything important is covered.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $30,000 a month already feels exceptional
          </h2>

          <ul className={styles.list}>
            <li>high-end lifestyle expectations</li>
            <li>premium housing choices</li>
            <li>strong healthcare resilience</li>
            <li>frequent travel flexibility</li>
            <li>wide margin for long-term stability</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $30,000 a month can already feel more than
            enough. For many retirees, it already provides a level of freedom
            that removes most financial pressure.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What the jump to $40,000 a month really changes
          </h2>

          <p className={styles.paragraph}>
            The biggest difference is not necessity. It is ease. More income can
            make large decisions feel lighter and smaller surprises feel almost
            irrelevant in the bigger picture.
          </p>

          <p className={styles.paragraph}>
            Over a long retirement, that extra margin can make the entire plan
            feel smoother, more flexible, and easier to enjoy without constant
            financial recalculation.
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
                href="/is-25000-vs-30000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $25,000 vs $30,000 comparison
              </Link>
            </li>
            <li>
              <Link
                href="/is-20000-vs-25000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $20,000 vs $25,000 comparison
              </Link>
            </li>
            <li>
              <Link
                href="/is-15000-vs-25000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $15,000 vs $25,000 comparison
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
            $30,000 a month already supports an exceptional retirement. But
            $40,000 a month usually creates an even wider margin for comfort,
            flexibility, and long-term peace of mind.
          </p>

          <p className={styles.paragraph}>
            The smartest move is still the same: compare your expected income to
            the lifestyle you actually want, then test the numbers before
            relying on them.
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
