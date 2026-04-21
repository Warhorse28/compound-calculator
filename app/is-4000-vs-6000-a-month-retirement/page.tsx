import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-4000-vs-6000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $4,000 vs $6,000 a Month Enough to Retire? Key Differences";
const pageTitle =
  "Is $4,000 vs $6,000 a Month Enough to Retire? What Changes";
const pageDescription =
  "Compare retiring on $4,000 vs $6,000 a month. Understand lifestyle differences, flexibility, and how income impacts long-term retirement planning.";

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
    fourK:
      "$4,000 a month can support a basic to moderate retirement lifestyle with tighter budgeting.",
    sixK:
      "$6,000 a month can support a more comfortable lifestyle with better flexibility and fewer constraints.",
  },
  {
    category: "Housing pressure",
    fourK:
      "Housing costs play a major role. Higher rent or property expenses can quickly limit options.",
    sixK:
      "More flexibility to choose better housing or absorb rising costs without major tradeoffs.",
  },
  {
    category: "Healthcare impact",
    fourK:
      "Healthcare expenses can significantly affect the available budget over time.",
    sixK:
      "Higher income allows more room to handle medical costs without disrupting the plan.",
  },
  {
    category: "Financial margin",
    fourK:
      "Lower margin means unexpected expenses can create pressure quickly.",
    sixK:
      "More breathing room to handle surprises and maintain stability.",
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
            The difference between $4,000 and $6,000 a month in retirement is
            not just about income. It is about how much flexibility and
            financial margin your plan actually has.
          </p>

          <p className={styles.intro}>
            $4,000 a month can work in many situations, especially with
            controlled expenses. But $6,000 a month often reduces pressure and
            allows for a more comfortable and flexible lifestyle.
          </p>

          <p className={styles.intro}>
            The real question is not which number is bigger. It is how much
            stability and freedom each level can support over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $4,000 a month may be enough for a
              modest retirement, while $6,000 a month typically provides more
              flexibility, stability, and room for unexpected expenses.
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
            $4,000 vs $6,000 a month in retirement: what changes
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$4,000 a month</th>
                  <th className={styles.tableHead}>$6,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.fourK}</td>
                    <td className={styles.tableCell}>{row.sixK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both income levels can support retirement. The difference is how
            much room you have after covering essential expenses.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $4,000 a month can still be enough
          </h2>

          <ul className={styles.list}>
            <li>lower cost of living areas</li>
            <li>reduced housing expenses</li>
            <li>minimal debt</li>
            <li>controlled lifestyle spending</li>
            <li>simple retirement expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In these cases, $4,000 a month can support a functional retirement.
            But the margin is smaller, so planning becomes more important.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $6,000 a month creates a clear advantage
          </h2>

          <p className={styles.paragraph}>
            The biggest difference is flexibility. A higher income can absorb
            housing changes, healthcare costs, and unexpected expenses with less
            disruption.
          </p>

          <p className={styles.paragraph}>
            This makes retirement feel more stable and less dependent on strict
            budgeting.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your retirement income scenario
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to see how different savings and return
              assumptions translate into monthly retirement income.
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
                href="/is-6000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $6,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-5000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $5,000 a month enough to retire
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
            $4,000 and $6,000 a month represent two different levels of
            retirement experience. One requires more control and tradeoffs. The
            other offers more flexibility and stability.
          </p>

          <p className={styles.paragraph}>
            The best approach is to calculate how much income your plan can
            realistically support and match that to your lifestyle expectations.
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
