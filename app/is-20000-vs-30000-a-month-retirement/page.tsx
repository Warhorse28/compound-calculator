import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-20000-vs-30000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$20,000 vs $30,000 a Month in Retirement: How Different Does It Really Feel?";
const pageTitle =
  "$20,000 vs $30,000 a Month in Retirement: How Different Does It Really Feel?";
const pageDescription =
  "Compare retiring on $20,000 vs $30,000 a month. See how lifestyle, housing, healthcare, travel, and long-term financial flexibility change at these income levels.";

const comparisonRows = [
  {
    category: "Lifestyle feel",
    twentyK:
      "$20,000 a month already supports a very comfortable retirement with low financial pressure, strong flexibility, and room for premium choices.",
    thirtyK:
      "$30,000 a month usually feels even more relaxed, with more room for luxury upgrades, easier decisions, and fewer practical limits.",
  },
  {
    category: "Housing flexibility",
    twentyK:
      "High-quality housing is already realistic, including desirable areas and larger homes, though the most premium choices may still require some prioritization.",
    thirtyK:
      "Luxury housing becomes easier to sustain, with more room for prime locations, larger properties, and premium living without meaningful tradeoffs elsewhere.",
  },
  {
    category: "Healthcare",
    twentyK:
      "Healthcare is highly manageable, including private plans, strong coverage, and room for larger medical expenses over time.",
    thirtyK:
      "Healthcare becomes even easier to absorb, with more financial distance from large bills, long-term care concerns, or premium service costs.",
  },
  {
    category: "Travel",
    twentyK:
      "Frequent travel is realistic, including longer stays and high-quality experiences with very little budgeting pressure.",
    thirtyK:
      "Travel becomes more flexible and more premium, with more room for spontaneity, luxury upgrades, and longer or more frequent trips.",
  },
  {
    category: "Financial margin",
    twentyK:
      "A very strong margin already exists, helping protect against inflation, surprises, and long retirement horizons.",
    thirtyK:
      "The larger income creates an even wider cushion, making retirement feel more resilient, more flexible, and easier to sustain over decades.",
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
            The jump from $20,000 to $30,000 a month in retirement is not about
            covering the basics. At this level, it is about how much easier,
            wider, and less restrictive retirement starts to feel.
          </p>

          <p className={styles.intro}>
            At $20,000 a month, many retirees can already enjoy a very high
            standard of living with strong housing options, easier healthcare,
            and frequent travel.
          </p>

          <p className={styles.intro}>
            At $30,000 a month, the difference is usually less about necessity
            and more about having even more room for premium choices, bigger
            buffers, and less financial friction over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $20,000 a month already supports an
              excellent retirement, but $30,000 a month usually makes retirement
              feel more effortless, more flexible, and more insulated from
              long-term financial stress.
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
            $20,000 vs $30,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$20,000 a month</th>
                  <th className={styles.tableHead}>$30,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.twentyK}</td>
                    <td className={styles.tableCell}>{row.thirtyK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support an exceptional retirement. The real
            difference is how much extra optionality and long-term breathing
            room you still have after everything important is already covered.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $20,000 a month already feels extremely strong
          </h2>

          <ul className={styles.list}>
            <li>very comfortable lifestyle with low financial pressure</li>
            <li>strong housing flexibility in many desirable areas</li>
            <li>healthcare costs feel highly manageable</li>
            <li>frequent travel with little budgeting stress</li>
            <li>wide margin for long-term planning</li>
          </ul>

          <p className={styles.paragraph}>
            In many real-world cases, $20,000 a month already feels like more
            than enough. It can remove most of the usual financial tradeoffs
            that shape retirement decisions.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What the jump to $30,000 a month really changes
          </h2>

          <p className={styles.paragraph}>
            The biggest change is not just spending capacity. It is ease. More
            decisions become preference-based rather than constraint-based, and
            larger surprises feel much smaller in the bigger picture.
          </p>

          <p className={styles.paragraph}>
            Over a long retirement, that bigger monthly margin can make the
            entire plan feel smoother, more durable, and easier to enjoy without
            constant financial recalculation.
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
                href="/is-20000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $20,000 a month enough to retire?
              </Link>
            </li>
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
                href="/is-20000-vs-40000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $20,000 vs $40,000 comparison
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
            $20,000 a month is already enough for a very comfortable retirement
            in many situations. But $30,000 a month can make retirement feel
            more effortless, more flexible, and even more resilient over time.
          </p>

          <p className={styles.paragraph}>
            The smartest move is still the same: compare your expected income to
            the lifestyle you actually want, then test your numbers before
            relying on any retirement target.
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
