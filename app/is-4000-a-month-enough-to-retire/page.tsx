import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-4000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $4,000 a Month Enough to Retire? A Realistic Breakdown";

const pageTitle =
  "Is $4,000 a Month Enough to Retire? What It Really Means";

const pageDescription =
  "See if $4,000 a month is enough to retire based on lifestyle, flexibility, and long-term planning. Explore realistic scenarios and calculate your plan.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    lifestyle: "Basic",
    insight: "Usually more than enough for essentials, with room for some flexibility.",
  },
  {
    lifestyle: "Moderate",
    insight: "Can support a balanced retirement in many cases with manageable trade-offs.",
  },
  {
    lifestyle: "Comfortable",
    insight: "Often workable, but depends heavily on housing, healthcare, and location.",
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
            For many retirees, $4,000 a month sits in the middle ground between
            basic retirement and comfortable retirement.
          </p>

          <p className={styles.intro}>
            It can be enough to support a solid lifestyle, but the answer still
            depends on where you live, what you spend, and how much flexibility
            you want later.
          </p>

          <p className={styles.intro}>
            Retirement planning makes more sense when you ask not just whether a
            number sounds good, but what kind of lifestyle that number can
            realistically support.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $4,000 a month is often enough for a
              balanced retirement, but comfort still depends on your expenses,
              timeline, and expectations.
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
            What $4,000 a month usually looks like in retirement
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
            The same income can feel comfortable in one situation and only
            moderate in another. The biggest variables are housing, healthcare,
            and daily lifestyle choices.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $4,000 a month can be enough
          </h2>

          <ul className={styles.list}>
            <li>paid-off or low housing costs</li>
            <li>manageable healthcare expenses</li>
            <li>moderate lifestyle expectations</li>
            <li>controlled debt and spending</li>
            <li>reasonable cost of living</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $4,000 a month can support a retirement that
            feels stable, flexible, and sustainable.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When it may still feel limited
          </h2>

          <ul className={styles.list}>
            <li>high-cost housing markets</li>
            <li>heavy healthcare needs</li>
            <li>frequent travel or premium lifestyle goals</li>
            <li>long retirement timelines</li>
            <li>desire for more financial margin</li>
          </ul>

          <p className={styles.paragraph}>
            In these cases, $4,000 may still work, but it often leaves less room
            for comfort than people expect.
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Test your retirement scenario
              </h2>

              <p className={styles.ctaText}>
                Adjust your timeline and assumptions to see what kind of
                retirement income your plan could support.
              </p>

              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your Numbers →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Explore related retirement scenarios
          </h2>

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
                href="/how-much-income-do-you-need-to-retire"
                className={styles.bottomCtaLink}
              >
                How much income do you need to retire
              </Link>
            </li>

            <li>
              <Link
                href="/how-much-do-you-need-to-retire-comfortably"
                className={styles.bottomCtaLink}
              >
                How much do you need to retire comfortably
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
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $4,000 a month is often enough for retirement, but whether it feels
            basic, balanced, or comfortable depends on the life you want to
            support.
          </p>

          <p className={styles.paragraph}>
            The smarter approach is not to ask whether the number sounds good in
            theory, but whether it fits your real retirement plan.
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
