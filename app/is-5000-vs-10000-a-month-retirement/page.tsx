import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-5000-vs-10000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $5,000 vs $10,000 a Month Better for Retirement? Key Differences";
const pageTitle =
  "Is $5,000 vs $10,000 a Month Better for Retirement? Key Differences";
const pageDescription =
  "Compare retiring on $5,000 vs $10,000 a month. See how lifestyle, flexibility, housing, and long-term margin can change your retirement plan.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparisonRows = [
  {
    category: "Lifestyle range",
    fiveK:
      "$5,000 a month can support a comfortable retirement in many situations, but usually with more tradeoffs.",
    tenK:
      "$10,000 a month can support a premium retirement lifestyle with much more flexibility and margin.",
  },
  {
    category: "Housing flexibility",
    fiveK:
      "Housing decisions matter a lot. Expensive areas can put real pressure on the budget.",
    tenK:
      "More room for stronger housing choices, including higher-cost locations or larger homes.",
  },
  {
    category: "Healthcare impact",
    fiveK:
      "Healthcare can quickly reduce available spending if costs rise over time.",
    tenK:
      "Higher income creates more room to absorb medical costs without changing the whole plan.",
  },
  {
    category: "Day-to-day pressure",
    fiveK:
      "Usually requires more attention to monthly spending and fixed costs.",
    tenK:
      "Often allows a much wider financial cushion and less day-to-day pressure.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement income comparison</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            The gap between $5,000 and $10,000 a month in retirement is not just
            about having more money. It is about how much more freedom,
            resilience, and flexibility your income creates.
          </p>

          <p className={styles.intro}>
            $5,000 a month can absolutely be enough for retirement in many
            situations. But $10,000 a month can change the experience
            completely, especially when housing, healthcare, travel, and
            unexpected costs enter the picture.
          </p>

          <p className={styles.intro}>
            The real question is not which number sounds better. It is how much
            retirement each income level can realistically support over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $5,000 a month may be enough for a
              comfortable retirement, while $10,000 a month usually creates a
              much larger cushion, more lifestyle freedom, and less pressure
              from major recurring costs.
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
            $5,000 vs $10,000 a month in retirement: what changes
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$5,000 a month</th>
                  <th className={styles.tableHead}>$10,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.fiveK}</td>
                    <td className={styles.tableCell}>{row.tenK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can work. But they create very different levels
            of comfort. At $5,000 a month, retirement may still require more
            tradeoffs. At $10,000 a month, those tradeoffs are usually much
            smaller.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $5,000 a month can still be enough
          </h2>

          <ul className={styles.list}>
            <li>moderate cost of living</li>
            <li>manageable housing expenses</li>
            <li>controlled healthcare costs</li>
            <li>low debt and stable spending habits</li>
            <li>realistic lifestyle expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $5,000 a month can support a retirement that
            feels balanced and workable. But the available margin is smaller,
            which means major expenses matter more.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $10,000 a month creates a major advantage
          </h2>

          <p className={styles.paragraph}>
            The biggest difference is not just spending power. It is financial
            margin. A higher monthly income can absorb housing inflation,
            healthcare costs, travel, and unexpected expenses with much less
            disruption.
          </p>

          <p className={styles.paragraph}>
            That margin can make retirement feel more flexible, less stressful,
            and easier to sustain over the long run.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Compare your own retirement income scenario
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different savings, return, and
              withdrawal assumptions and see how much monthly retirement income
              your portfolio may realistically support.
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
                href="/is-5000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $5,000 a month enough to retire
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
                href="/is-7000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $7,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-9000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $9,000 a month enough to retire
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Retiring on $5,000 a month and retiring on $10,000 a month are not
            just two versions of the same plan. They often represent two very
            different levels of comfort, flexibility, and long-term margin.
          </p>

          <p className={styles.paragraph}>
            The smarter move is to calculate how much monthly retirement income
            your portfolio can actually support, then match that number to the
            lifestyle you want.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own numbers?
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
