import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-15000-vs-30000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$15,000 vs $30,000 a Month in Retirement: Is the Upgrade Bigger Than It Looks?";
const pageTitle =
  "$15,000 vs $30,000 a Month in Retirement: Is the Upgrade Bigger Than It Looks?";
const pageDescription =
  "Compare $15k vs $30k a month in retirement. See how housing, healthcare, travel, and financial flexibility really change between these two income levels.";

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
            The move from $15,000 to $30,000 a month in retirement is not just a
            simple doubling of income. In real life, it can feel bigger than
            that because the added money usually lands after the most important
            needs are already covered.
          </p>

          <p className={styles.intro}>
            At $15,000 a month, many retirees can already enjoy a very strong
            lifestyle. Housing, healthcare, travel, and daily expenses can all
            work together with relatively low financial pressure in many parts
            of the country.
          </p>

          <p className={styles.intro}>
            At $30,000 a month, the difference is less about whether retirement
            works and more about how much easier, wider, and more premium it
            starts to feel. Expensive categories compete less, and long-term
            decisions usually feel much lighter.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $15,000 a month already supports a
              very strong retirement, but $30,000 a month usually creates a much
              wider margin for premium housing, better healthcare coverage,
              bigger travel flexibility, and much smoother long-term planning.
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
            $15k vs $30k a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$15,000 a month</th>
                  <th className={styles.tableHead}>$30,000 a month</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCellStrong}>Lifestyle feel</td>
                  <td className={styles.tableCell}>
                    Very comfortable retirement with strong flexibility and low
                    day-to-day pressure.
                  </td>
                  <td className={styles.tableCell}>
                    Much more premium retirement with more optionality, fewer
                    tradeoffs, and a smoother overall lifestyle.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>Housing options</td>
                  <td className={styles.tableCell}>
                    Comfortable and often high-quality housing in many markets,
                    though premium locations may still require prioritization.
                  </td>
                  <td className={styles.tableCell}>
                    Far more room for top locations, larger homes, better
                    neighborhoods, and upgrades without crowding out other goals.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>Healthcare comfort</td>
                  <td className={styles.tableCell}>
                    Healthcare is usually manageable, with room for strong
                    coverage and many expected costs.
                  </td>
                  <td className={styles.tableCell}>
                    Healthcare becomes much easier to absorb, including premium
                    care, stronger insurance, and larger long-term expenses.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>Travel freedom</td>
                  <td className={styles.tableCell}>
                    Frequent travel is realistic, though some budgeting and
                    prioritization may still matter.
                  </td>
                  <td className={styles.tableCell}>
                    Travel becomes much more open-ended, with better
                    accommodations, more spontaneity, longer stays, and less
                    concern about total cost.
                  </td>
                </tr>

                <tr>
                  <td className={styles.tableCellStrong}>Financial margin</td>
                  <td className={styles.tableCell}>
                    Strong financial buffer for many situations, though bigger
                    shocks and long timelines still deserve careful planning.
                  </td>
                  <td className={styles.tableCell}>
                    Much wider long-term cushion, making retirement feel more
                    resilient, more durable, and easier to run with low stress.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support retirement well. The real difference
            is how much easier life feels once the major categories of spending
            stop competing against each other.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $15,000 a month already feels strong
          </h2>

          <ul className={styles.list}>
            <li>very comfortable housing in many strong markets</li>
            <li>solid healthcare flexibility without constant pressure</li>
            <li>frequent travel with room for enjoyment and upgrades</li>
            <li>daily life that already feels stable and low stress</li>
            <li>retirement that is clearly above basic comfort</li>
          </ul>

          <p className={styles.paragraph}>
            This is what makes $15,000 a month such an important benchmark. It
            already creates a retirement that many people would consider strong,
            flexible, and comfortable over the long term.
          </p>

          <p className={styles.paragraph}>
            That matters because the move to $30,000 is not from weak to strong.
            It is from strong to much more premium.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What really changes at $30,000 a month
          </h2>

          <p className={styles.paragraph}>
            The biggest shift is not just higher spending power. It is that more
            parts of life can improve at the same time. Better housing no longer
            has to squeeze travel. Stronger healthcare coverage no longer has to
            compete with everyday flexibility.
          </p>

          <p className={styles.paragraph}>
            At this level, retirement begins to feel much more preference-based.
            More decisions can be made around what you want rather than what you
            need to limit.
          </p>

          <p className={styles.paragraph}>
            In that sense, the upgrade is both practical and psychological. Life
            feels smoother, and fewer choices feel heavy.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Compare your own retirement target
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              savings, timeline, and expected returns could realistically
              support.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Related pages</h2>

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
                href="/is-30000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $30,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-15000-vs-25000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $15k vs $25k comparison
              </Link>
            </li>
            <li>
              <Link
                href="/how-much-do-you-need-to-retire-with-30000-a-month"
                className={styles.bottomCtaLink}
              >
                How much do you need for $30,000/month?
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $15,000 a month already creates a very strong retirement in many
            situations. But $30,000 a month usually delivers a much wider,
            easier, and more premium experience, where fewer decisions are
            shaped by financial limits.
          </p>

          <p className={styles.paragraph}>
            The smartest way to judge the difference is not by the raw numbers
            alone. It is by how much freedom, comfort, and long-term flexibility
            each income level gives you in everyday life.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own retirement number?
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
