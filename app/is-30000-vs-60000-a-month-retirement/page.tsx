import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-30000-vs-60000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$30,000 vs $60,000 a Month in Retirement: How Different Does It Really Feel?";
const pageTitle =
  "$30,000 vs $60,000 a Month in Retirement: How Different Does It Really Feel?";
const pageDescription =
  "Compare retiring on $30,000 vs $60,000 a month. See how lifestyle, housing, healthcare, travel, and long-term financial flexibility change at these income levels.";

const comparisonRows = [
  {
    category: "Lifestyle feel",
    thirtyK:
      "$30,000 a month already supports an elite retirement lifestyle with very low financial pressure and major flexibility across daily choices.",
    sixtyK:
      "$60,000 a month pushes retirement into an ultra-high-end range where most financial decisions feel almost irrelevant in day-to-day life.",
  },
  {
    category: "Housing flexibility",
    thirtyK:
      "Luxury housing is already realistic, including prime locations and larger properties, though the most extreme choices may still require prioritization.",
    sixtyK:
      "Luxury real estate, multiple homes, and premium global locations become much easier to sustain without tradeoffs elsewhere.",
  },
  {
    category: "Healthcare",
    thirtyK:
      "Healthcare is highly manageable, with strong protection against major costs and room for private care and premium services.",
    sixtyK:
      "Healthcare becomes even less meaningful as a financial concern, with full access to top-tier care, private services, and large long-term costs.",
  },
  {
    category: "Travel",
    thirtyK:
      "Frequent high-quality travel is already realistic, including premium experiences and longer trips with little pressure.",
    sixtyK:
      "Travel becomes almost completely unrestricted, with room for luxury, spontaneity, extended stays, and frequent international movement.",
  },
  {
    category: "Financial margin",
    thirtyK:
      "A very strong financial cushion already exists, supporting resilience against inflation, surprises, and long retirement horizons.",
    sixtyK:
      "The larger income creates an extreme buffer, making retirement feel exceptionally stable, durable, and insulated from long-term stress.",
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
            The jump from $30,000 to $60,000 a month in retirement is not about
            covering the basics. It is about how much further comfort,
            flexibility, and financial ease can expand once money stops being a
            practical constraint.
          </p>

          <p className={styles.intro}>
            At $30,000 a month, many retirees can already live extremely well,
            with premium housing, strong healthcare coverage, and frequent
            travel all within reach.
          </p>

          <p className={styles.intro}>
            At $60,000 a month, the difference is less about need and more about
            scale. The margin becomes so wide that lifestyle decisions can feel
            almost completely preference-based.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $30,000 a month already supports an
              elite retirement, but $60,000 a month usually removes almost all
              remaining financial friction and creates a far wider range of
              premium choices.
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
            $30,000 vs $60,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$30,000 a month</th>
                  <th className={styles.tableHead}>$60,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.thirtyK}</td>
                    <td className={styles.tableCell}>{row.sixtyK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels support an exceptional retirement. The real
            difference is how much further optionality expands once a very high
            income becomes an extremely high one.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $30,000 a month already feels exceptional
          </h2>

          <ul className={styles.list}>
            <li>luxury-level lifestyle with very low financial stress</li>
            <li>premium housing choices in many desirable locations</li>
            <li>strong healthcare resilience and flexibility</li>
            <li>frequent high-quality travel</li>
            <li>wide long-term financial margin</li>
          </ul>

          <p className={styles.paragraph}>
            In many real-world situations, $30,000 a month already feels like
            more than enough. It removes most of the financial pressure that
            shapes ordinary retirement decisions.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What really changes at $60,000 a month
          </h2>

          <p className={styles.paragraph}>
            The biggest change is not just spending capacity. It is that tradeoffs
            almost disappear. More categories can operate at a premium level at
            the same time without tension between them.
          </p>

          <p className={styles.paragraph}>
            Over a long retirement, that much additional margin can make the
            entire plan feel almost completely insulated from the kinds of costs
            and surprises that would matter at lower income levels.
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
                href="/is-30000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $30,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-60000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $60,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-30000-vs-40000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $30,000 vs $40,000 comparison
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
            $30,000 a month is already enough for an elite retirement in many
            situations. But $60,000 a month pushes that experience into a much
            wider range of luxury, resilience, and long-term ease.
          </p>

          <p className={styles.paragraph}>
            The smartest move is still to compare your expected income to the
            lifestyle you actually want, then test your own numbers before
            relying on a target over the long term.
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
