import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-9000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $9,000 a Month Enough to Retire? A Realistic Breakdown";
const pageTitle =
  "Is $9,000 a Month Enough to Retire? What It Really Means";
const pageDescription =
  "Find out if $9,000 a month is enough to retire. Explore lifestyle scenarios, flexibility, and how far this income can go in retirement.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    lifestyle: "Very comfortable",
    insight:
      "Supports a strong retirement lifestyle with flexibility, travel options, and financial breathing room.",
  },
  {
    lifestyle: "Premium lifestyle",
    insight:
      "Allows for high-quality housing, more discretionary spending, and fewer financial constraints.",
  },
  {
    lifestyle: "High-cost limitation",
    insight:
      "Still impacted by expensive cities, healthcare costs, and lifestyle inflation.",
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
            For many retirees, $9,000 a month represents a high level of
            retirement income with strong flexibility and lifestyle options.
          </p>

          <p className={styles.intro}>
            It can comfortably cover essential expenses while allowing for
            travel, hobbies, and a higher standard of living. But even at this
            level, location and fixed costs still matter.
          </p>

          <p className={styles.intro}>
            Retirement is not just about income. It is about how consistently
            that income supports your lifestyle over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $9,000 a month can support a premium
              retirement lifestyle, but the real advantage comes from the margin
              it creates after essential costs.
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
            What $9,000 a month usually looks like in retirement
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
            Compared to mid-range retirement income, $9,000 a month usually
            provides more flexibility and resilience, especially when facing
            unexpected costs.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $9,000 a month is more than enough
          </h2>

          <ul className={styles.list}>
            <li>moderate or even high cost of living</li>
            <li>stable housing situation</li>
            <li>controlled healthcare costs</li>
            <li>low or no debt</li>
            <li>structured long-term planning</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $9,000 a month can support a retirement that
            feels not just comfortable, but flexible and secure.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $9,000 a month still depends on your lifestyle
          </h2>

          <p className={styles.paragraph}>
            Even a high income can feel limited if fixed expenses are too high.
            Housing, healthcare, and lifestyle inflation can quickly reduce your
            financial margin.
          </p>

          <p className={styles.paragraph}>
            That is why understanding your spending patterns is just as important
            as your income level.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your retirement income strategy
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              investments can generate based on your savings and assumptions.
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
                href="/is-10000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $10,000 a month enough to retire
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
            $9,000 a month can absolutely support a strong retirement. In many
            cases, it allows for flexibility, comfort, and long-term stability.
          </p>

          <p className={styles.paragraph}>
            The key question is not just the number, but how much freedom it
            creates after your essential costs are covered.
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
