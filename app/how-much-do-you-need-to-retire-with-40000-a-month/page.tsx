import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-do-you-need-to-retire-with-40000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Retire With $40,000 a Month?";
const pageTitle =
  "How Much Do You Need to Retire With $40,000 a Month?";
const pageDescription =
  "Estimate how much you need to retire with $40,000 a month. See portfolio targets, withdrawal strategies, and lifestyle expectations.";

const targetRows = [
  {
    withdrawalRate: "3%",
    portfolio: "~$16.0 million",
    meaning:
      "Very conservative. Maximum safety and long-term stability.",
  },
  {
    withdrawalRate: "4%",
    portfolio: "~$12.0 million",
    meaning:
      "Balanced approach. Common benchmark for long-term planning.",
  },
  {
    withdrawalRate: "5%",
    portfolio: "~$9.6 million",
    meaning:
      "More aggressive. Lower capital requirement but higher risk over time.",
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
          <div className={styles.eyebrow}>Retirement income planning</div>
          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Reaching $40,000 a month in retirement places you in a range where
            financial constraints become minimal and lifestyle choices expand significantly.
          </p>

          <p className={styles.intro}>
            At this level, retirement is no longer about covering expenses. It becomes
            about flexibility, comfort, and the ability to make decisions without financial pressure.
          </p>

          <p className={styles.intro}>
            The key challenge is building a portfolio large enough to sustain this income
            consistently over decades.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> generating $40,000 a month typically requires
              around <strong>$9.6M to $16.0M</strong>, with{" "}
              <strong>~$12.0M</strong> as a common reference point.
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
            How much money do you need for $40,000 a month?
          </h2>

          <p className={styles.paragraph}>
            $40,000 a month equals <strong>$480,000 a year</strong>. Your required
            portfolio depends mainly on your withdrawal rate.
          </p>

          <p className={styles.paragraph}>
            Lower withdrawal rates increase safety and longevity. Higher rates reduce
            the required capital but add more long-term risk.
          </p>

          <p className={styles.paragraph}>
            Most investors choose a middle-ground approach to balance flexibility and
            sustainability.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Portfolio targets for $40,000 a month
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Withdrawal rate</th>
                  <th className={styles.tableHead}>Portfolio needed</th>
                  <th className={styles.tableHead}>Interpretation</th>
                </tr>
              </thead>
              <tbody>
                {targetRows.map((row) => (
                  <tr key={row.withdrawalRate}>
                    <td className={styles.tableCellStrong}>
                      {row.withdrawalRate}
                    </td>
                    <td className={styles.tableCell}>{row.portfolio}</td>
                    <td className={styles.tableCell}>{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Around <strong>$12 million</strong> is often used as a central estimate,
            but your actual number depends on lifestyle, taxes, and risk tolerance.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $40,000 a month supports
          </h2>

          <ul className={styles.list}>
            <li>luxury lifestyle with minimal financial constraints</li>
            <li>premium real estate options in most regions</li>
            <li>frequent high-end travel and experiences</li>
            <li>top-tier healthcare flexibility</li>
            <li>large financial buffers for uncertainty</li>
          </ul>

          <p className={styles.paragraph}>
            At this level, retirement becomes almost entirely preference-driven.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Plan your retirement scenario
            </h2>
            <p className={styles.ctaText}>
              Test different assumptions and see how your plan evolves over time.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Open Calculator →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Related pages</h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/how-much-do-you-need-to-retire-with-30000-a-month"
                className={styles.bottomCtaLink}
              >
                How much do you need for $30,000/month?
              </Link>
            </li>
            <li>
              <Link
                href="/is-40000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $40,000/month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-40000-vs-50000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $40k vs $50k comparison
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
            To generate $40,000 a month, most retirement plans fall between{" "}
            <strong>$9.6M and $16M</strong>, with around{" "}
            <strong>$12M</strong> as a common benchmark.
          </p>

          <p className={styles.paragraph}>
            Your exact target depends on how conservative and flexible you want
            your retirement to be.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want your exact number?
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
