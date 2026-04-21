import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-20000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $20,000 a Month Enough to Retire Comfortably? A Realistic Breakdown";
const pageTitle =
  "Is $20,000 a Month Enough to Retire Comfortably? A Realistic Breakdown";
const pageDescription =
  "See if $20,000 a month is enough to retire comfortably. Compare housing, healthcare, travel, flexibility, and long-term financial stability at this income level.";

const breakdownRows = [
  {
    category: "Lifestyle feel",
    description:
      "$20,000 a month can support a very high-comfort retirement with low day-to-day financial pressure, strong flexibility, and room for premium choices across major categories.",
  },
  {
    category: "Housing flexibility",
    description:
      "Housing becomes a much easier decision at this level. Many retirees can afford desirable locations, larger homes, or upscale rentals without squeezing other priorities.",
  },
  {
    category: "Healthcare",
    description:
      "Healthcare costs usually feel far more manageable here, including insurance, private care, out-of-pocket costs, and the unexpected expenses that can appear over time.",
  },
  {
    category: "Travel",
    description:
      "Frequent travel, longer stays, and better accommodations become very realistic. Retirement can feel much more open and less restricted by budgeting pressure.",
  },
  {
    category: "Financial margin",
    description:
      "$20,000 a month usually creates a wide cushion for inflation, emergencies, market volatility, and long-term uncertainty, which is a major advantage in retirement.",
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
            $20,000 a month is not just enough to cover retirement expenses. For
            many people, it creates a level of comfort where major decisions
            start to feel easier and less stressful.
          </p>

          <p className={styles.intro}>
            At this income level, housing, healthcare, travel, and everyday
            spending can often work together without constant tradeoffs. That is
            a big shift from lower retirement budgets.
          </p>

          <p className={styles.intro}>
            But even strong income does not answer everything on its own. The
            real question is how much margin you want for the lifestyle, safety,
            and flexibility you expect over a long retirement.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $20,000 a month is enough for a very
              comfortable retirement in many situations, but its biggest
              advantage is how much long-term breathing room and financial ease
              it can create.
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
            Is $20,000 a month enough to retire comfortably?
          </h2>

          <p className={styles.paragraph}>
            In many cases, yes. $20,000 a month can support a very comfortable
            retirement with much more freedom than lower income levels. Core
            living expenses are usually well covered, and the focus shifts to
            lifestyle quality and long-term stability.
          </p>

          <p className={styles.paragraph}>
            This level of income can make retirement feel less like a budgeting
            exercise and more like a period with real choice. Housing quality,
            healthcare access, travel plans, and emergency flexibility all tend
            to improve when the monthly margin is this strong.
          </p>

          <p className={styles.paragraph}>
            That does not mean money stops mattering. It means the role of money
            changes. The question becomes less about covering necessities and
            more about how easy, resilient, and flexible retirement feels over
            time.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $20,000 a month can support in retirement
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>
                    What $20,000 a month means
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
            The strength of this income level is not only that it can support a
            nicer lifestyle. It is that it can support several major priorities
            at once without turning retirement into a constant series of
            compromises.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $20,000 a month feels especially strong
          </h2>

          <ul className={styles.list}>
            <li>premium housing becomes much easier to sustain</li>
            <li>healthcare costs create less long-term pressure</li>
            <li>travel can be more frequent, longer, and higher quality</li>
            <li>inflation and unexpected expenses feel easier to absorb</li>
            <li>retirement decisions feel more flexible than constrained</li>
          </ul>

          <p className={styles.paragraph}>
            This is where $20,000 a month starts to separate itself from lower
            retirement incomes. It does not just increase spending power. It
            reduces financial friction across the entire plan.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What could still make $20,000 a month feel smaller
          </h2>

          <p className={styles.paragraph}>
            Even strong retirement income can shrink quickly in very high-cost
            areas, with expensive real estate, rising healthcare needs, or a
            luxury-heavy lifestyle. Expectations matter as much as the number
            itself.
          </p>

          <p className={styles.paragraph}>
            This is especially true if you want multiple properties, constant
            premium travel, or a large buffer for family support and long-term
            care. In those cases, $20,000 a month is still strong, but it may
            not feel unlimited.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what income your own plan could produce
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              savings, contributions, and growth assumptions could support.
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
                href="/is-15000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $15,000 a month enough to retire?
              </Link>
            </li>
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
                href="/is-15000-vs-20000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $15,000 vs $20,000 a month in retirement
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
            $20,000 a month is enough for a very comfortable retirement in many
            situations. The biggest benefit is not just lifestyle quality, but
            the wider margin it creates for long-term flexibility and stability.
          </p>

          <p className={styles.paragraph}>
            The smartest move is still to test that number against the life you
            actually want, then compare it to your own plan before relying on it
            as a retirement target.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own retirement income target?
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
