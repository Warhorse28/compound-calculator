import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-5000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $5,000 a Month Enough to Retire? A Realistic Breakdown";

const pageTitle =
  "Is $5,000 a Month Enough to Retire? What It Really Means";

const pageDescription =
  "Find out if $5,000 a month is enough to retire based on lifestyle, flexibility, and long-term planning. Explore realistic scenarios and calculate your plan.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    lifestyle: "Balanced",
    insight:
      "Can support a solid retirement lifestyle with reasonable flexibility.",
  },
  {
    lifestyle: "Comfortable",
    insight:
      "Often workable in many areas, but housing and healthcare still matter a lot.",
  },
  {
    lifestyle: "High-cost challenge",
    insight:
      "May feel tighter in expensive cities or with higher lifestyle expectations.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement income analysis</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            For many retirees, $5,000 a month sits in the range between
            “comfortable enough” and genuinely flexible retirement income.
          </p>

          <p className={styles.intro}>
            It can support a balanced lifestyle with room for essentials,
            moderate freedom, and some discretionary spending. But whether it
            feels strong depends heavily on location and fixed costs.
          </p>

          <p className={styles.intro}>
            Retirement is not just about hitting an income target. It is about
            how reliably that income supports the life you want over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $5,000 a month can be enough for a
              comfortable retirement, but the difference between “enough” and
              “easy” usually comes down to housing, healthcare, and lifestyle.
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
            What $5,000 a month usually looks like in retirement
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Lifestyle</th>
                  <th className={styles.tableHead}>What it usually means</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row) => (
                  <tr key={row.lifestyle}>
                    <td className={styles.tableCellStrong}>{row.lifestyle}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Compared with lower retirement income levels, $5,000 a month can
            offer more breathing room. But major expenses still shape how strong
            it really feels.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $5,000 a month is usually enough
          </h2>

          <ul className={styles.list}>
            <li>moderate cost of living</li>
            <li>manageable housing expenses</li>
            <li>controlled debt and fixed costs</li>
            <li>reasonable lifestyle expectations</li>
            <li>steady long-term planning</li>
          </ul>

          <p className={styles.paragraph}>
            In these cases, $5,000 a month can support a retirement that feels
            balanced, stable, and sustainable.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $5,000 a month can still feel very different
          </h2>

          <p className={styles.paragraph}>
            The same income can feel comfortable in one place and restrictive in
            another. Healthcare, rent, taxes, and spending habits can all change
            the picture fast.
          </p>

          <p className={styles.paragraph}>
            That is why retirement planning works best when income is evaluated
            alongside lifestyle and long-term sustainability.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>See what your plan could support</h2>

            <p className={styles.ctaText}>
              Test different assumptions and see how much monthly retirement
              income your portfolio may realistically sustain.
            </p>

            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Explore related retirement scenarios
          </h2>

          <ul className={styles.list}>
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
                href="/is-6000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $6,000 a month enough to retire
              </Link>
            </li>

            <li>
              <Link
                href="/how-much-do-you-need-to-retire-with-5000-a-month"
                className={styles.bottomCtaLink}
              >
                How much do you need to retire with $5,000 a month
              </Link>
            </li>

            <li>
              <Link
                href="/how-much-income-do-you-need-to-retire"
                className={styles.bottomCtaLink}
              >
                How much income do you need to retire
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $5,000 a month can absolutely be enough to retire, but how strong it
            feels depends on the structure of your spending and the flexibility
            built into your plan.
          </p>

          <p className={styles.paragraph}>
            The smarter question is not just whether $5,000 sounds good, but
            what kind of retirement it can reliably support.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own scenario?
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
