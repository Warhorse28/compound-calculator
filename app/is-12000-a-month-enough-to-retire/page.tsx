import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-12000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $12,000 a Month Enough to Retire? What This Income Really Feels Like";
const pageTitle =
  "Is $12,000 a Month Enough to Retire? What This Income Really Feels Like";
const pageDescription =
  "See whether $12,000 a month is enough to retire comfortably. Compare housing, healthcare, travel, flexibility, and long-term financial breathing room.";

const breakdownRows = [
  {
    category: "Lifestyle feel",
    description:
      "$12,000 a month can support a very comfortable retirement with strong flexibility, lower day-to-day pressure, and room for a higher standard of living than many retirees expect.",
  },
  {
    category: "Housing flexibility",
    description:
      "Many retirees could afford attractive housing choices, including desirable areas, larger homes, or premium rentals, without every decision feeling tight.",
  },
  {
    category: "Healthcare",
    description:
      "Healthcare becomes much easier to absorb at this level, especially when routine costs, insurance premiums, and unexpected bills all need space in the budget.",
  },
  {
    category: "Travel",
    description:
      "Regular travel is realistic here. Many retirees could afford multiple trips a year and still keep enough margin for normal living expenses.",
  },
  {
    category: "Financial margin",
    description:
      "$12,000 a month usually creates meaningful breathing room. That matters for inflation, emergencies, market swings, and the long time horizon of retirement.",
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
            For many retirees, $12,000 a month is not about just covering the
            basics. It is about having enough room for comfort, choice, and a
            retirement that feels much easier to manage.
          </p>
          <p className={styles.intro}>
            At this level, housing pressure can drop, healthcare costs become
            easier to absorb, and travel starts to feel realistic without
            forcing constant tradeoffs.
          </p>
          <p className={styles.intro}>
            That said, whether $12,000 a month is enough still depends on your
            lifestyle, where you live, and how much cushion you want for the
            future.
          </p>
          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $12,000 a month is enough for a
              strong and comfortable retirement in many situations, but the real
              advantage is not luxury alone. It is the extra flexibility and
              financial breathing room it creates.
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
            Is $12,000 a month enough to retire comfortably?
          </h2>
          <p className={styles.paragraph}>
            In many cases, yes. $12,000 a month can support a very comfortable
            retirement with much more flexibility than lower income levels.
            Basic expenses are usually not the main issue anymore.
          </p>
          <p className={styles.paragraph}>
            The bigger question becomes how you want retirement to feel. Some
            people want a quiet, low-cost life. Others want premium housing,
            better healthcare access, frequent travel, and a larger safety
            margin. That is where this income level starts to matter.
          </p>
          <p className={styles.paragraph}>
            This is not just about survival. It is about how easy life feels
            once the major categories of retirement are funded with less
            pressure.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $12,000 a month can cover in retirement
          </h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>What $12,000 a month means</th>
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
            The biggest strength of this income is not just spending power. It
            is the fact that multiple parts of retirement can work well at the
            same time without every category competing for limited dollars.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $12,000 a month feels noticeably stronger
          </h2>
          <ul className={styles.list}>
            <li>more housing choice without constant tradeoffs</li>
            <li>healthcare costs feel easier to absorb</li>
            <li>travel becomes realistic on a regular basis</li>
            <li>less pressure from inflation and unexpected expenses</li>
            <li>retirement feels more flexible, not just affordable</li>
          </ul>
          <p className={styles.paragraph}>
            This is why $12,000 a month can feel very different from lower
            retirement income levels. It creates room to make decisions with
            more confidence instead of constantly optimizing every expense.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What could still make $12,000 a month feel tighter
          </h2>
          <p className={styles.paragraph}>
            Even a strong retirement income can feel smaller if your housing
            costs are very high, your healthcare expenses rise sharply, or you
            want a much more premium lifestyle over a long retirement.
          </p>
          <p className={styles.paragraph}>
            This is especially true if you want a large margin for gifting,
            supporting family, luxury travel, or maintaining expensive property
            in a high-cost location. In those cases, $12,000 a month may still
            be good, but not as effortless as it first sounds.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your own retirement numbers look like
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              savings and contributions could realistically support.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related retirement pages</h2>
          <ul className={styles.list}>
            <li>
              <Link
                href="/is-10000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $10,000 a month enough to retire?
              </Link>
            </li>
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
                href="/is-10000-vs-12000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $10,000 vs $12,000 a month in retirement
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
            $12,000 a month is enough for a comfortable retirement in many
            situations. The real value is not only what it buys, but how much
            easier it can make housing, healthcare, travel, and long-term
            planning feel.
          </p>
          <p className={styles.paragraph}>
            The smartest move is to compare that number to the lifestyle you
            actually want, then test your own assumptions before relying on any
            retirement target.
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
