import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-6000-vs-8000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $6,000 vs $8,000 a Month Enough to Retire? Key Differences";
const pageTitle =
  "Is $6,000 vs $8,000 a Month Enough to Retire? What Changes";
const pageDescription =
  "Compare retiring on $6,000 vs $8,000 a month. See how lifestyle, housing, healthcare, and long-term flexibility can change your retirement plan.";

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
    sixK:
      "$6,000 a month can support a comfortable retirement in many situations, but with some tradeoffs depending on location and fixed costs.",
    eightK:
      "$8,000 a month can support a stronger retirement lifestyle with more flexibility, margin, and day-to-day comfort.",
  },
  {
    category: "Housing flexibility",
    sixK:
      "Housing still matters a lot. Expensive markets can reduce flexibility and force tighter choices.",
    eightK:
      "More room for better housing options or more resilience against rising housing costs.",
  },
  {
    category: "Healthcare impact",
    sixK:
      "Healthcare can still take a meaningful share of the budget over time.",
    eightK:
      "Higher income creates more room to absorb medical costs without changing the full plan.",
  },
  {
    category: "Financial cushion",
    sixK:
      "Provides a workable cushion, but larger surprises can still create pressure.",
    eightK:
      "Usually creates a wider cushion for travel, inflation, and unexpected expenses.",
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
            The difference between $6,000 and $8,000 a month in retirement is
            not just about a higher number. It is about how much more room you
            have after your biggest recurring costs are covered.
          </p>

          <p className={styles.intro}>
            $6,000 a month can already support a comfortable retirement in many
            areas. But $8,000 a month usually brings more flexibility in
            housing, healthcare, travel, and unexpected expenses.
          </p>

          <p className={styles.intro}>
            The real question is not which number sounds better. It is how much
            retirement freedom each level can realistically support over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $6,000 a month can be enough for a
              comfortable retirement, while $8,000 a month usually creates a
              larger financial cushion and more lifestyle flexibility.
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
            $6,000 vs $8,000 a month in retirement: what changes
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$6,000 a month</th>
                  <th className={styles.tableHead}>$8,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.sixK}</td>
                    <td className={styles.tableCell}>{row.eightK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can work well. The difference is how much margin
            you have once housing, healthcare, and daily living costs are paid.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $6,000 a month can still be enough
          </h2>

          <ul className={styles.list}>
            <li>moderate cost of living</li>
            <li>stable housing expenses</li>
            <li>manageable healthcare costs</li>
            <li>controlled debt and fixed costs</li>
            <li>reasonable retirement expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $6,000 a month can support a retirement that
            feels comfortable and sustainable. But the room for error is smaller
            than it is at $8,000 a month.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $8,000 a month creates a clear advantage
          </h2>

          <p className={styles.paragraph}>
            The biggest benefit is flexibility. A higher monthly income can make
            it easier to handle rising costs, protect lifestyle quality, and
            reduce the pressure created by larger unexpected expenses.
          </p>

          <p className={styles.paragraph}>
            That larger cushion can make retirement feel more stable, less
            restrictive, and easier to maintain over the long term.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Compare your own retirement income plan
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different savings, return, and
              withdrawal assumptions and see what monthly income your portfolio
              may realistically support.
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
                href="/is-7000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $7,000 a month enough to retire
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
            $6,000 and $8,000 a month can both support retirement, but they do
            not create the same level of comfort or flexibility. One gives you a
            solid base. The other usually gives you a stronger cushion.
          </p>

          <p className={styles.paragraph}>
            The smartest move is to estimate how much monthly income your assets
            can actually support, then match that to the retirement lifestyle
            you want.
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
