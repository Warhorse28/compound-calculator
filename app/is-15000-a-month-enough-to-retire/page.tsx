import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-15000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $15,000 a Month Enough to Retire Comfortably? A Realistic Breakdown";
const pageTitle =
  "Is $15,000 a Month Enough to Retire Comfortably? A Realistic Breakdown";
const pageDescription =
  "See if $15,000 a month is enough to retire comfortably. Understand housing, healthcare, travel, flexibility, and long-term financial stability at this income level.";

const breakdownRows = [
  {
    category: "Lifestyle feel",
    description:
      "$15,000 a month typically supports a high-comfort retirement with strong flexibility, low financial stress, and the ability to make choices without constant tradeoffs.",
  },
  {
    category: "Housing flexibility",
    description:
      "Premium housing becomes very realistic. Many retirees can afford desirable locations, larger homes, or upgraded living situations without sacrificing other areas.",
  },
  {
    category: "Healthcare",
    description:
      "Healthcare costs are easier to manage, including private care, insurance premiums, and unexpected expenses that can arise over a long retirement.",
  },
  {
    category: "Travel",
    description:
      "Frequent and higher-quality travel becomes sustainable. Longer trips, better accommodations, and more flexibility are all realistic at this level.",
  },
  {
    category: "Financial margin",
    description:
      "$15,000 a month usually creates a wide financial cushion, helping protect against inflation, market changes, and long-term uncertainty.",
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
            $15,000 a month is not just about covering expenses. At this level,
            retirement starts to feel flexible, stable, and much easier to
            manage over the long term.
          </p>

          <p className={styles.intro}>
            Many retirees at this income level can comfortably handle housing,
            healthcare, and travel without constant tradeoffs. Decisions become
            less about limitations and more about preference.
          </p>

          <p className={styles.intro}>
            But even strong income levels depend on lifestyle, location, and how
            much long-term security you want built into your plan.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $15,000 a month can support a very
              comfortable and flexible retirement, but its real strength is the
              margin it creates for long-term stability and easier financial
              decisions.
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
            Is $15,000 a month enough to retire comfortably?
          </h2>

          <p className={styles.paragraph}>
            In many cases, yes. $15,000 a month can support a high-quality
            retirement with strong flexibility and significantly reduced
            financial pressure compared to lower income levels.
          </p>

          <p className={styles.paragraph}>
            At this level, the focus shifts away from covering basic expenses
            and toward maintaining a lifestyle that feels consistent, secure,
            and enjoyable over decades.
          </p>

          <p className={styles.paragraph}>
            This is not just about affordability. It is about having enough
            margin to handle both expected and unexpected costs without constant
            recalculation.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $15,000 a month can support in retirement
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>
                    What $15,000 a month means
                  </th>
                </tr>
              </thead>
              <tbody>
                {breakdownRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>
                      {row.category}
                    </td>
                    <td className={styles.tableCell}>
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The main advantage of this income level is not just higher spending
            power. It is the ability to support multiple priorities at the same
            time without creating tension between them.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $15,000 a month feels like a major upgrade
          </h2>

          <ul className={styles.list}>
            <li>premium housing becomes realistic without pressure</li>
            <li>healthcare feels easier to absorb long term</li>
            <li>travel becomes more frequent and higher quality</li>
            <li>more protection against inflation and surprises</li>
            <li>retirement decisions feel more flexible and stable</li>
          </ul>

          <p className={styles.paragraph}>
            This is where $15,000 a month starts to feel meaningfully different.
            It reduces the need to constantly optimize and allows for a more
            relaxed and confident retirement plan.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $15,000 a month may not feel as strong
          </h2>

          <p className={styles.paragraph}>
            Even at this level, costs can rise quickly depending on location,
            housing choices, and long-term healthcare needs. A more expensive
            lifestyle can still absorb a large portion of this income.
          </p>

          <p className={styles.paragraph}>
            This is especially true for retirees who want luxury-level travel,
            multiple properties, or significant financial support for family.
            In those cases, $15,000 a month is strong, but not unlimited.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how much income your plan could generate
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate your future monthly income based
              on your current savings and contribution strategy.
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
                href="/is-12000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $12,000 a month enough to retire?
              </Link>
            </li>
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
                href="/is-10000-vs-15000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $10,000 vs $15,000 a month in retirement
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
            $15,000 a month is enough for a very comfortable retirement in many
            situations. The biggest benefit is not just lifestyle, but the
            flexibility and security it brings over time.
          </p>

          <p className={styles.paragraph}>
            The smartest move is to compare this number with your real
            expectations, then test your own scenario to make sure your plan is
            aligned with the life you want.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own retirement plan?
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
