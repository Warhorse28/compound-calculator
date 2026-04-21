import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-do-you-need-to-retire-with-20000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Retire With $20,000 a Month?";
const pageTitle =
  "How Much Do You Need to Retire With $20,000 a Month?";
const pageDescription =
  "Estimate how much you may need to retire with $20,000 a month. See portfolio targets, withdrawal strategies, and what this income level can realistically support.";

const targetRows = [
  {
    withdrawalRate: "3%",
    portfolio: "~$8.0 million",
    meaning:
      "More conservative. Gives you a wider margin for long retirements, market volatility, and bigger future expenses.",
  },
  {
    withdrawalRate: "4%",
    portfolio: "~$6.0 million",
    meaning:
      "Classic benchmark. Often used as a planning shortcut, but still depends on taxes, lifestyle, and long-term risk tolerance.",
  },
  {
    withdrawalRate: "5%",
    portfolio: "~$4.8 million",
    meaning:
      "More aggressive. Lowers the target, but usually comes with less room for error and more long-term pressure.",
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
            If you want $20,000 a month in retirement, you are aiming well past
            the basics. The real question is how large your portfolio needs to
            be to support that income safely over time.
          </p>

          <p className={styles.intro}>
            A target like this usually points to a very comfortable retirement
            with strong housing flexibility, easier healthcare coverage,
            frequent travel, and a much wider margin for unexpected costs.
          </p>

          <p className={styles.intro}>
            But the exact number you need still depends on your withdrawal rate,
            taxes, lifestyle expectations, and how conservative you want your
            plan to be.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> a common planning range for
              generating $20,000 a month is roughly <strong>$4.8 million to $8.0 million</strong>,
              with <strong>~$6.0 million</strong> often used as the classic
              middle-ground estimate.
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
            How much money do you need for $20,000 a month?
          </h2>

          <p className={styles.paragraph}>
            $20,000 a month equals <strong>$240,000 a year</strong>. Once you
            convert the monthly number into annual spending, you can estimate a
            target portfolio using different withdrawal rates.
          </p>

          <p className={styles.paragraph}>
            The lower the withdrawal rate, the larger the portfolio you usually
            need. The tradeoff is that lower withdrawal rates often provide more
            safety and more flexibility over a long retirement.
          </p>

          <p className={styles.paragraph}>
            That is why there is no single perfect number. There is only a range
            that becomes more or less aggressive depending on your goals and
            risk tolerance.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Portfolio targets for $20,000 a month in retirement
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Withdrawal rate</th>
                  <th className={styles.tableHead}>Estimated portfolio</th>
                  <th className={styles.tableHead}>What it means</th>
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
            For many people, the rough middle estimate is around
            <strong> $6.0 million</strong>, based on a 4% withdrawal rate.
            That is a useful benchmark, but it should never be treated like a
            guarantee.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What a $20,000 a month retirement can realistically support
          </h2>

          <ul className={styles.list}>
            <li>very comfortable lifestyle with low day-to-day financial pressure</li>
            <li>strong housing flexibility in many premium locations</li>
            <li>much easier healthcare coverage and cost absorption</li>
            <li>frequent travel with wide room for upgrades</li>
            <li>large buffer for inflation and unexpected expenses</li>
          </ul>

          <p className={styles.paragraph}>
            This is what makes $20,000 a month different. It is not just a
            bigger number. It often changes how retirement feels by reducing
            tradeoffs across the most important spending categories.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What could push the target even higher
          </h2>

          <p className={styles.paragraph}>
            Your real target may need to be higher if you expect expensive
            housing, heavy taxes, luxury travel, large healthcare costs, or a
            very long retirement timeline.
          </p>

          <p className={styles.paragraph}>
            It may also need to be higher if you want a more conservative
            withdrawal rate, because safer draws usually require larger
            portfolios to produce the same monthly income.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your own retirement target
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              investments could generate based on your own assumptions.
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
                href="/is-20000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $20,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/how-much-do-you-need-to-retire-with-15000-a-month"
                className={styles.bottomCtaLink}
              >
                How much do you need to retire with $15,000 a month?
              </Link>
            </li>
            <li>
              <Link
                href="/is-20000-vs-30000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $20,000 vs $30,000 a month in retirement
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
            If you want $20,000 a month in retirement, a practical planning
            range is often around <strong>$4.8 million to $8.0 million</strong>,
            with <strong>~$6.0 million</strong> as a common benchmark.
          </p>

          <p className={styles.paragraph}>
            The smartest move is to treat that as a starting point, then test
            your own lifestyle, taxes, withdrawal rate, and risk tolerance
            before relying on a final target.
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
