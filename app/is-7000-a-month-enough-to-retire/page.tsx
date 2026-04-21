import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-7000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $7,000 a Month Enough to Retire? A Realistic Breakdown";
const pageTitle =
  "Is $7,000 a Month Enough to Retire? What It Really Means";
const pageDescription =
  "Find out if $7,000 a month is enough to retire based on lifestyle, housing, healthcare, and long-term sustainability. Explore realistic retirement scenarios and compare your plan.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    lifestyle: "Comfortable",
    insight:
      "Can support a strong retirement lifestyle with room for needs, wants, and moderate flexibility.",
  },
  {
    lifestyle: "Very comfortable",
    insight:
      "Often allows for better housing choices, more travel flexibility, and less day-to-day budget pressure.",
  },
  {
    lifestyle: "High-cost pressure",
    insight:
      "Can still feel tighter in expensive areas or with higher healthcare and lifestyle expectations.",
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
            For many retirees, $7,000 a month represents a strong level of
            retirement income with real flexibility built in.
          </p>

          <p className={styles.intro}>
            It can support a comfortable lifestyle, cover major essentials, and
            leave room for travel, hobbies, or a larger financial cushion. But
            whether it feels strong depends heavily on location, housing, and
            fixed monthly costs.
          </p>

          <p className={styles.intro}>
            Retirement is not just about hitting a higher number. It is about
            how consistently that income can support your lifestyle over many
            years.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $7,000 a month can support a very
              comfortable retirement, but the real difference comes from how
              much margin it gives you after housing, healthcare, and taxes.
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
            What $7,000 a month usually looks like in retirement
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
            Compared with lower retirement income levels, $7,000 a month
            usually creates more breathing room. It can absorb more of life’s
            surprises without making every expense feel stressful.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $7,000 a month is usually enough to retire well
          </h2>

          <ul className={styles.list}>
            <li>moderate to moderately high cost of living</li>
            <li>stable housing expenses</li>
            <li>manageable healthcare costs</li>
            <li>little or no major debt</li>
            <li>clear long-term withdrawal planning</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $7,000 a month can support a retirement that
            feels comfortable, flexible, and more resilient over time.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $7,000 a month can still feel very different from one retiree to
            another
          </h2>

          <p className={styles.paragraph}>
            Two retirees with the same monthly income can have very different
            outcomes. One may feel financially secure, while the other still
            feels pressure from rent, medical bills, or a high-cost city.
          </p>

          <p className={styles.paragraph}>
            That is why retirement planning works best when monthly income is
            matched to real spending patterns, not just broad assumptions.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your retirement plan could support
            </h2>
            <p className={styles.ctaText}>
              Test different savings, return, and withdrawal assumptions to see
              how much monthly retirement income your portfolio may realistically
              sustain.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related retirement scenarios</h2>

          <ul className={styles.list}>
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
                href="/is-8000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $8,000 a month enough to retire
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
            $7,000 a month can absolutely be enough to retire. In many cases, it
            can support a lifestyle that feels comfortably above basic needs.
          </p>

          <p className={styles.paragraph}>
            The smarter question is not just whether $7,000 sounds strong, but
            how much retirement freedom it actually creates after your biggest
            recurring costs are covered.
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
