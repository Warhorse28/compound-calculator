import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-do-you-need-to-retire-with-30000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Retire With $30,000 a Month?";
const pageTitle =
  "How Much Do You Need to Retire With $30,000 a Month?";
const pageDescription =
  "Estimate how much you need to retire with $30,000 a month. See portfolio ranges, withdrawal strategies, and what this income level supports.";

const targetRows = [
  {
    withdrawalRate: "3%",
    portfolio: "~$12.0 million",
    meaning:
      "More conservative. Strong protection against volatility, inflation, and long retirement horizons.",
  },
  {
    withdrawalRate: "4%",
    portfolio: "~$9.0 million",
    meaning:
      "Common benchmark. Balanced between sustainability and capital efficiency.",
  },
  {
    withdrawalRate: "5%",
    portfolio: "~$7.2 million",
    meaning:
      "More aggressive. Lower target, but less room for error over time.",
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
            If you want $30,000 a month in retirement, you are entering a level
            where money is less about covering needs and more about maximizing
            freedom and flexibility.
          </p>

          <p className={styles.intro}>
            This income level typically supports a premium lifestyle with strong
            housing options, easier healthcare, frequent travel, and very low
            day-to-day financial pressure.
          </p>

          <p className={styles.intro}>
            But the key question is not the income itself. It is how large your
            portfolio needs to be to sustain that income safely over decades.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> generating $30,000 a month usually
              requires roughly <strong>$7.2M to $12.0M</strong>, with{" "}
              <strong>~$9.0M</strong> often used as a central estimate.
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
            How much money do you need for $30,000 a month?
          </h2>

          <p className={styles.paragraph}>
            $30,000 a month equals <strong>$360,000 a year</strong>. From there,
            you can estimate the portfolio needed based on your withdrawal rate.
          </p>

          <p className={styles.paragraph}>
            Lower withdrawal rates increase safety but require more capital.
            Higher rates reduce the required portfolio but increase long-term
            risk.
          </p>

          <p className={styles.paragraph}>
            That is why most retirement plans work within a range instead of a
            single fixed number.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Portfolio targets for $30,000 a month
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
            A common planning reference is around <strong>$9 million</strong>,
            but your actual target depends heavily on lifestyle, taxes, and how
            conservative you want your plan to be.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $30,000 a month allows in retirement
          </h2>

          <ul className={styles.list}>
            <li>very high-end lifestyle with minimal financial stress</li>
            <li>premium housing in most locations</li>
            <li>frequent international travel with upgrades</li>
            <li>strong healthcare flexibility</li>
            <li>large buffers for unexpected costs and inflation</li>
          </ul>

          <p className={styles.paragraph}>
            At this level, retirement becomes less about tradeoffs and more
            about personal preference and lifestyle design.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Run your retirement scenario
            </h2>
            <p className={styles.ctaText}>
              Adjust return rates, contributions, and timelines to see what
              your plan could realistically generate.
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
                href="/how-much-do-you-need-to-retire-with-25000-a-month"
                className={styles.bottomCtaLink}
              >
                How much do you need for $25,000/month?
              </Link>
            </li>
            <li>
              <Link
                href="/is-30000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $30,000/month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-30000-vs-40000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $30k vs $40k retirement comparison
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
            To generate $30,000 a month in retirement, most plans fall between{" "}
            <strong>$7M and $12M</strong>, with around{" "}
            <strong>$9M</strong> as a common reference point.
          </p>

          <p className={styles.paragraph}>
            The exact number depends on how safe, flexible, and resilient you
            want your retirement to feel over time.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want a precise number for your situation?
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
