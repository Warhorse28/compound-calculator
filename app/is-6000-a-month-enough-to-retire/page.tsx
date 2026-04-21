import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-6000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $6,000 a Month Enough to Retire? A Realistic Breakdown";

const pageTitle =
  "Is $6,000 a Month Enough to Retire? What It Really Means";

const pageDescription =
  "Find out if $6,000 a month is enough to retire based on lifestyle, flexibility, and long-term planning. Explore realistic scenarios and calculate your plan.";

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
    insight: "Often enough for a relaxed lifestyle with good flexibility.",
  },
  {
    lifestyle: "High comfort",
    insight:
      "Can support travel, better housing, and fewer financial constraints.",
  },
  {
    lifestyle: "Premium",
    insight:
      "Possible in lower-cost areas, but may feel more limited in expensive regions.",
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
            For many retirees, $6,000 a month is a strong retirement income. But
            whether it feels simply comfortable or highly flexible depends on
            your lifestyle.
          </p>

          <p className={styles.intro}>
            In some cases, it supports travel, better housing, and more breathing
            room. In others, especially in high-cost areas, it may still require
            careful planning.
          </p>

          <p className={styles.intro}>
            Retirement is not just about reaching a number. It is about what that
            number can consistently support over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $6,000 a month can support a very
              comfortable retirement — but location, lifestyle, and time horizon
              still define how far it goes.
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
            What $6,000 a month usually looks like in retirement
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
            Compared to lower retirement income levels, $6,000 usually creates
            more flexibility — but it still needs to match your real cost of
            living.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $6,000 a month can be enough
          </h2>

          <ul className={styles.list}>
            <li>moderate or low cost of living areas</li>
            <li>controlled housing expenses</li>
            <li>balanced lifestyle expectations</li>
            <li>long-term investment planning</li>
            <li>desire for stability and flexibility</li>
          </ul>

          <p className={styles.paragraph}>
            In these scenarios, $6,000 a month can support a retirement that
            feels both secure and enjoyable.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why higher income targets change the plan
          </h2>

          <p className={styles.paragraph}>
            As retirement income rises, the portfolio behind it usually needs to
            rise sharply too. Higher targets often demand stronger investing,
            more time, or both.
          </p>

          <p className={styles.paragraph}>
            That is why retirement planning works best when income, timeline, and
            lifestyle are considered together.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>See what your plan could support</h2>

            <p className={styles.ctaText}>
              Test different assumptions and see what kind of retirement income
              your portfolio may be able to sustain.
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
                href="/how-much-income-do-you-need-to-retire"
                className={styles.bottomCtaLink}
              >
                How much income do you need to retire
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
                href="/how-much-do-you-need-to-retire-with-10000-a-month"
                className={styles.bottomCtaLink}
              >
                How much do you need to retire with $10,000 a month
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $6,000 a month is a strong retirement income, but its real value
            depends on how well it fits your lifestyle and long-term plan.
          </p>

          <p className={styles.paragraph}>
            The goal is not just to reach the number. It is to build a plan that
            can sustain it with confidence.
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
