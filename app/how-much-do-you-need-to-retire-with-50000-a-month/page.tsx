import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-do-you-need-to-retire-with-50000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Retire With $50,000 a Month?";
const pageTitle =
  "How Much Do You Need to Retire With $50,000 a Month?";
const pageDescription =
  "Find out how much you need to retire with $50,000 a month. Explore portfolio ranges, withdrawal rates, and lifestyle expectations.";

const targetRows = [
  {
    withdrawalRate: "3%",
    portfolio: "~$20.0 million",
    meaning:
      "Highly conservative. Maximum safety and long-term resilience.",
  },
  {
    withdrawalRate: "4%",
    portfolio: "~$15.0 million",
    meaning:
      "Balanced strategy. Common planning benchmark.",
  },
  {
    withdrawalRate: "5%",
    portfolio: "~$12.0 million",
    meaning:
      "More aggressive. Lower requirement but less margin for error.",
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
            Reaching $50,000 a month in retirement moves you into a level where
            financial decisions become almost entirely optional.
          </p>

          <p className={styles.intro}>
            At this point, retirement is not about managing expenses. It is about
            maximizing lifestyle, flexibility, and long-term security.
          </p>

          <p className={styles.intro}>
            The real challenge is building a portfolio large enough to sustain
            this income without exposing yourself to unnecessary risk.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> generating $50,000 a month typically
              requires around <strong>$12.0M to $20.0M</strong>, with{" "}
              <strong>~$15.0M</strong> as a common reference point.
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
            How much money do you need for $50,000 a month?
          </h2>

          <p className={styles.paragraph}>
            $50,000 a month equals <strong>$600,000 a year</strong>. From there,
            you estimate your required portfolio based on withdrawal strategy.
          </p>

          <p className={styles.paragraph}>
            Lower withdrawal rates provide more safety and long-term stability.
            Higher rates reduce the capital required but increase exposure to
            market risks.
          </p>

          <p className={styles.paragraph}>
            Most long-term plans aim for a balance between efficiency and
            sustainability.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Portfolio targets for $50,000 a month
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
            Around <strong>$15 million</strong> is often used as a central
            planning number, but your actual target depends on your goals and
            risk tolerance.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $50,000 a month supports
          </h2>

          <ul className={styles.list}>
            <li>elite lifestyle with virtually no financial constraints</li>
            <li>top-tier real estate in prime locations</li>
            <li>luxury global travel and premium experiences</li>
            <li>maximum healthcare flexibility</li>
            <li>significant buffers for long-term uncertainty</li>
          </ul>

          <p className={styles.paragraph}>
            At this level, retirement becomes almost entirely preference-based,
            not necessity-driven.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your retirement scenario
            </h2>
            <p className={styles.ctaText}>
              Adjust assumptions and see how your future income can evolve.
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
                href="/how-much-do-you-need-to-retire-with-40000-a-month"
                className={styles.bottomCtaLink}
              >
                How much for $40,000/month?
              </Link>
            </li>
            <li>
              <Link
                href="/is-50000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $50,000/month enough to retire?
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
            To generate $50,000 a month, most plans fall between{" "}
            <strong>$12M and $20M</strong>, with{" "}
            <strong>$15M</strong> as a strong reference point.
          </p>

          <p className={styles.paragraph}>
            The exact number depends on how conservative and flexible you want
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
