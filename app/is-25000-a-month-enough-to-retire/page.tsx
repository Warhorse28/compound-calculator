import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-25000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $25,000 a Month Enough to Retire Comfortably? What This Level Really Means";
const pageTitle =
  "Is $25,000 a Month Enough to Retire Comfortably? What This Level Really Means";
const pageDescription =
  "See if $25,000 a month is enough to retire comfortably. Understand lifestyle, housing, healthcare, travel, and long-term financial flexibility at this income level.";

const breakdownRows = [
  {
    category: "Lifestyle feel",
    description:
      "$25,000 a month can support an elite-level retirement lifestyle with very low financial pressure, high flexibility, and room for premium choices across almost all categories.",
  },
  {
    category: "Housing flexibility",
    description:
      "Top-tier housing becomes widely accessible. Many retirees can choose prime locations, larger properties, or luxury living arrangements without meaningful compromises.",
  },
  {
    category: "Healthcare",
    description:
      "Healthcare is highly manageable, including private care, premium insurance, and large unexpected costs that could otherwise disrupt a long-term retirement plan.",
  },
  {
    category: "Travel",
    description:
      "Frequent, high-quality travel becomes easy to sustain. Longer trips, better accommodations, and spontaneous travel decisions are all realistic at this level.",
  },
  {
    category: "Financial margin",
    description:
      "$25,000 a month usually creates a very strong financial buffer, helping absorb inflation, market volatility, and long-term uncertainties with far less stress.",
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
            $25,000 a month is well beyond basic retirement needs. For many
            people, it creates a level of financial ease where most decisions
            feel flexible rather than constrained.
          </p>

          <p className={styles.intro}>
            At this level, housing, healthcare, travel, and lifestyle choices
            can all work together without constant tradeoffs. That is a major
            shift from lower income levels.
          </p>

          <p className={styles.intro}>
            But even strong income does not remove all limits. The real question
            becomes how much comfort, flexibility, and long-term security you
            want your retirement to provide.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $25,000 a month can support an
              exceptional retirement, but its biggest advantage is how effortless
              financial decisions start to feel over time.
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
            Is $25,000 a month enough to retire comfortably?
          </h2>

          <p className={styles.paragraph}>
            In most cases, yes. $25,000 a month can support a very high-quality
            retirement with strong flexibility, low financial pressure, and a
            wide margin for unexpected costs.
          </p>

          <p className={styles.paragraph}>
            At this level, retirement becomes less about managing expenses and
            more about maintaining a lifestyle that feels consistent, enjoyable,
            and stable over time.
          </p>

          <p className={styles.paragraph}>
            The role of money changes here. It is no longer just about covering
            needs. It is about how much freedom and resilience your plan can
            sustain over decades.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $25,000 a month can support in retirement
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>
                    What $25,000 a month means
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
            The biggest advantage of this income is not just lifestyle quality.
            It is the ability to support multiple high-cost priorities at the
            same time without creating pressure between them.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $25,000 a month feels like a different level
          </h2>

          <ul className={styles.list}>
            <li>top-tier housing becomes widely accessible</li>
            <li>healthcare costs feel far less threatening long term</li>
            <li>travel can be frequent, flexible, and higher-end</li>
            <li>large unexpected expenses are easier to absorb</li>
            <li>retirement feels stable, not fragile</li>
          </ul>

          <p className={styles.paragraph}>
            This is where $25,000 a month clearly separates itself. It does not
            just improve lifestyle. It reduces financial friction across the
            entire retirement experience.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $25,000 a month may still feel limited
          </h2>

          <p className={styles.paragraph}>
            Even at this level, costs can grow quickly depending on lifestyle
            expectations. Multiple properties, luxury travel, and long-term care
            needs can still absorb a large portion of income.
          </p>

          <p className={styles.paragraph}>
            This is especially true in very high-cost areas or for retirees who
            want a high-end, global lifestyle. In those cases, $25,000 a month is
            strong, but not unlimited.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your own retirement income could be
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              investments could generate based on your current plan.
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
                href="/is-20000-vs-25000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $20,000 vs $25,000 a month in retirement
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
            $25,000 a month is enough for an exceptional retirement in many
            situations. The biggest benefit is not just what it allows you to
            buy, but how much easier and more flexible retirement can feel.
          </p>

          <p className={styles.paragraph}>
            The smartest approach is still to compare that number with your real
            expectations and test your own plan before relying on it long term.
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
