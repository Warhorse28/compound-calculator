import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-3000-vs-4000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Retiring on $3,000 vs $4,000 a Month: Is the Difference Noticeable?";

const pageTitle =
  "Retiring on $3,000 vs $4,000 a Month: Is the Difference Noticeable?";

const pageDescription =
  "Compare retiring on $3,000 vs $4,000 a month. See how an extra $1,000 impacts lifestyle, flexibility, and long-term financial comfort.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparisonRows = [
  {
    category: "Daily lifestyle",
    threeK:
      "$3,000 a month can support a simple and controlled retirement, often requiring careful budgeting.",
    fourK:
      "$4,000 a month adds more breathing room, allowing a more relaxed and flexible daily lifestyle.",
  },
  {
    category: "Housing options",
    threeK:
      "Housing choices may be limited, especially in higher-cost areas.",
    fourK:
      "More flexibility to choose better housing or absorb increases in rent and expenses.",
  },
  {
    category: "Unexpected costs",
    threeK:
      "Unexpected expenses can quickly impact your financial stability.",
    fourK:
      "An extra $1,000 creates a buffer that makes surprises easier to handle.",
  },
  {
    category: "Stress level",
    threeK:
      "Financial decisions often require more attention and planning.",
    fourK:
      "Less day-to-day financial pressure and fewer tradeoffs.",
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
            At first glance, $3,000 vs $4,000 a month might not seem like a big
            difference. But in retirement, even an extra $1,000 can change how
            comfortable and stable your lifestyle feels.
          </p>

          <p className={styles.intro}>
            $3,000 a month can work in many cases, especially with lower living
            costs and a disciplined budget.
          </p>

          <p className={styles.intro}>
            But $4,000 a month often creates a noticeable shift — less pressure,
            more flexibility, and a better ability to deal with unexpected
            expenses.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> The jump from $3,000 to $4,000 a
              month is not about luxury. It is about reducing financial pressure
              and gaining more control over your retirement lifestyle.
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
            $3,000 vs $4,000 a month: what actually changes
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$3,000 a month</th>
                  <th className={styles.tableHead}>$4,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.threeK}</td>
                    <td className={styles.tableCell}>{row.fourK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both levels can support retirement, but the difference becomes clear
            when you look at flexibility and financial margin.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $3,000 a month can still be enough
          </h2>

          <ul className={styles.list}>
            <li>low cost of living areas</li>
            <li>paid-off housing</li>
            <li>minimal debt</li>
            <li>controlled spending habits</li>
            <li>simple lifestyle expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In these situations, $3,000 a month can be enough. But it leaves less
            room for error, especially over long periods.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $4,000 a month feels different in practice
          </h2>

          <p className={styles.paragraph}>
            The biggest change is not what you can buy — it is how much less you
            need to worry. A higher income reduces the impact of unexpected
            costs and gives you more control over your decisions.
          </p>

          <p className={styles.paragraph}>
            Over time, this difference compounds. It can make retirement feel
            more stable, predictable, and sustainable.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your retirement income could look like
            </h2>

            <p className={styles.ctaText}>
              Use the calculator to estimate how your savings translate into
              monthly income based on different assumptions.
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
                href="/is-3000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $3,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-4000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $4,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-3000-vs-5000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $3,000 vs $5,000 comparison
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
            $3,000 and $4,000 a month may seem close, but they lead to different
            retirement experiences. One requires tighter control. The other
            offers more flexibility and stability.
          </p>

          <p className={styles.paragraph}>
            The key is to match your income with your lifestyle expectations and
            test the numbers before making long-term decisions.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to see your numbers?
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
