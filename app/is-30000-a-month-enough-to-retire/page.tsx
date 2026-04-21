import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-30000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $30,000 a Month Enough to Retire Comfortably? What This Level Really Means";
const pageTitle =
  "Is $30,000 a Month Enough to Retire Comfortably? What This Level Really Means";
const pageDescription =
  "See if $30,000 a month is enough to retire comfortably. Compare lifestyle, housing, healthcare, travel, and long-term financial flexibility at this income level.";

const breakdownRows = [
  {
    category: "Lifestyle feel",
    description:
      "$30,000 a month can support an elite retirement lifestyle with very low financial pressure, major flexibility, and room for premium choices across nearly every category.",
  },
  {
    category: "Housing flexibility",
    description:
      "Luxury housing becomes much easier to sustain. Many retirees could afford prime locations, larger properties, or upscale living arrangements without meaningful tradeoffs elsewhere.",
  },
  {
    category: "Healthcare",
    description:
      "Healthcare is highly manageable at this level, including private care, premium insurance, and larger unexpected costs that might otherwise disrupt a retirement plan.",
  },
  {
    category: "Travel",
    description:
      "Frequent high-end travel becomes very realistic. Longer trips, premium accommodations, and more spontaneous decisions fit far more comfortably into the budget.",
  },
  {
    category: "Financial margin",
    description:
      "$30,000 a month usually creates an exceptional buffer for inflation, surprises, market volatility, and long-term uncertainty, making retirement feel far more resilient.",
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
            $30,000 a month is far beyond basic retirement needs. For many
            people, it creates a level of financial ease where most major
            decisions feel simple instead of restrictive.
          </p>

          <p className={styles.intro}>
            At this level, housing, healthcare, travel, and everyday spending
            can all work together with very little friction. That changes how
            retirement feels on a practical level.
          </p>

          <p className={styles.intro}>
            Still, even strong income is only part of the picture. The real
            question is how much comfort, freedom, and long-term protection you
            want retirement to provide over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $30,000 a month can support an
              exceptional retirement, but the biggest advantage is not just what
              you can buy. It is how easy and flexible financial decisions start
              to feel.
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
            Is $30,000 a month enough to retire comfortably?
          </h2>

          <p className={styles.paragraph}>
            In most situations, yes. $30,000 a month can support an
            exceptionally comfortable retirement with strong flexibility, low
            daily financial pressure, and a very wide margin for unexpected
            costs.
          </p>

          <p className={styles.paragraph}>
            At this level, retirement becomes less about managing expenses and
            more about shaping the kind of lifestyle you actually want. Many of
            the usual pressure points become much easier to handle.
          </p>

          <p className={styles.paragraph}>
            This is not just about comfort. It is about how much optionality
            you have once the core parts of retirement are already fully covered.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $30,000 a month can support in retirement
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>
                    What $30,000 a month means
                  </th>
                </tr>
              </thead>
              <tbody>
                {breakdownRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The real strength of this income is not only lifestyle quality. It
            is that multiple expensive priorities can fit together without
            creating pressure between them.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $30,000 a month feels especially powerful
          </h2>

          <ul className={styles.list}>
            <li>luxury housing feels far more realistic long term</li>
            <li>healthcare costs become easier to absorb without stress</li>
            <li>travel can be frequent, flexible, and premium</li>
            <li>unexpected expenses create less disruption</li>
            <li>retirement feels highly resilient, not fragile</li>
          </ul>

          <p className={styles.paragraph}>
            This is where $30,000 a month clearly stands out. It does not just
            upgrade lifestyle. It removes a large amount of financial friction
            from the overall retirement plan.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $30,000 a month may still not feel unlimited
          </h2>

          <p className={styles.paragraph}>
            Even a very strong retirement income can shrink quickly with luxury
            real estate, multiple properties, major family support, or
            extremely high-end travel habits. Expectations still matter.
          </p>

          <p className={styles.paragraph}>
            This is especially true in very expensive locations or for retirees
            who want a fully premium lifestyle across every category. In those
            cases, $30,000 a month is powerful, but not infinite.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your own retirement income could look like
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              investments could realistically support based on your current
              plan.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Explore related retirement pages
          </h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/is-25000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $25,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-40000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $40,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-30000-vs-40000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $30,000 vs $40,000 a month in retirement
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
            $30,000 a month is enough for an elite retirement in many
            situations. The biggest advantage is not just lifestyle quality, but
            the ease, flexibility, and long-term margin it creates.
          </p>

          <p className={styles.paragraph}>
            The smartest move is still to compare that number with your real
            expectations and test your own plan before relying on it over the
            long term.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own retirement numbers?
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
