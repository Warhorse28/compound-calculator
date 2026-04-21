import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-10000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $10,000 a Month Enough to Retire? A Realistic Breakdown";

const pageTitle =
  "Is $10,000 a Month Enough to Retire? What It Really Means";

const pageDescription =
  "Find out if $10,000 a month is enough to retire based on lifestyle, flexibility, and long-term planning. Explore realistic scenarios and calculate your plan.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    lifestyle: "High comfort",
    insight:
      "Strong financial freedom with room for travel, comfort, and flexibility.",
  },
  {
    lifestyle: "Premium",
    insight:
      "Supports high-end lifestyle choices, better housing, and fewer limitations.",
  },
  {
    lifestyle: "Luxury",
    insight:
      "Can provide a luxury retirement depending on location and spending habits.",
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
            For many retirees, $10,000 a month represents a high level of
            financial comfort. It can support a premium or even luxury lifestyle,
            depending on where and how you live.
          </p>

          <p className={styles.intro}>
            This level of income opens the door to more freedom in housing,
            travel, healthcare, and day-to-day spending. But lifestyle inflation
            can quickly change what “enough” actually means.
          </p>

          <p className={styles.intro}>
            Retirement is not just about reaching a large number. It is about how
            consistently that income can be sustained over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $10,000 a month can support a premium
              retirement lifestyle — but the real advantage comes from the
              flexibility and margin it provides.
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
            What $10,000 a month usually looks like in retirement
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
            Compared to lower income levels, $10,000 a month significantly
            expands lifestyle options — but it also increases expectations.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $10,000 a month is more than enough
          </h2>

          <ul className={styles.list}>
            <li>moderate or low cost of living areas</li>
            <li>controlled lifestyle inflation</li>
            <li>strong portfolio support</li>
            <li>flexible spending habits</li>
            <li>long-term financial planning</li>
          </ul>

          <p className={styles.paragraph}>
            In these situations, $10,000 a month can provide not just comfort,
            but a high degree of freedom and security.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why higher income requires stronger planning
          </h2>

          <p className={styles.paragraph}>
            The higher your target income, the larger your required investment
            base. Maintaining $10,000 a month over decades requires careful
            strategy and sustainability.
          </p>

          <p className={styles.paragraph}>
            Without proper planning, even a high income can become unstable over
            time.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>See what your plan could support</h2>

            <p className={styles.ctaText}>
              Test different scenarios and find out how much monthly income your
              investments can realistically sustain.
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
                href="/is-8000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $8,000 a month enough to retire
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
            $10,000 a month can support a premium retirement — but the real value
            depends on how well it aligns with your lifestyle and long-term plan.
          </p>

          <p className={styles.paragraph}>
            The key is not just reaching a high number, but building a system
            that sustains it with confidence.
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
