
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-7000-vs-10000-a-month-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $7,000 vs $10,000 a Month Enough to Retire? How Big Is the Difference?";

const pageTitle =
  "Is $7,000 vs $10,000 a Month Enough to Retire? How Big Is the Difference?";

const pageDescription =
  "Compare retiring on $7,000 vs $10,000 a month. See how a bigger monthly income changes lifestyle, flexibility, and long-term retirement stability.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const comparisonRows = [
  {
    category: "Lifestyle feel",
    sevenK:
      "$7,000 a month can support a strong retirement in many areas, with good flexibility and manageable tradeoffs.",
    tenK:
      "$10,000 a month usually supports a far more relaxed retirement lifestyle, with wider choice and much less financial pressure.",
  },
  {
    category: "Housing flexibility",
    sevenK:
      "Housing options are good, but higher-cost areas can still force planning and compromise.",
    tenK:
      "Much more room to choose premium housing, better locations, or absorb rising housing costs comfortably.",
  },
  {
    category: "Healthcare buffer",
    sevenK:
      "Healthcare is manageable, but large medical costs can still affect long-term planning.",
    tenK:
      "A wider margin makes healthcare costs easier to absorb without changing lifestyle too aggressively.",
  },
  {
    category: "Financial margin",
    sevenK:
      "Provides a solid cushion, but inflation and unexpected expenses still matter a lot.",
    tenK:
      "Creates a noticeably larger cushion for travel, inflation, emergencies, and day-to-day flexibility.",
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
            The jump from $7,000 to $10,000 a month in retirement is not just
            about a bigger number. It can completely change how secure,
            flexible, and comfortable retirement feels.
          </p>

          <p className={styles.intro}>
            $7,000 a month already puts many retirees in a strong position. In
            the right location, it can support a comfortable lifestyle with
            reasonable freedom.
          </p>

          <p className={styles.intro}>
            But $10,000 a month creates a much wider margin. That extra room can
            make housing, healthcare, travel, and unexpected costs feel far less
            stressful over time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $7,000 a month can support a solid
              retirement, but $10,000 a month usually moves retirement into a
              much more flexible and resilient range.
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
            $7,000 vs $10,000 a month: side-by-side breakdown
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>$7,000 a month</th>
                  <th className={styles.tableHead}>$10,000 a month</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.sevenK}</td>
                    <td className={styles.tableCell}>{row.tenK}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            Both levels can support retirement well. The main difference is how
            much room you have left after essential costs are paid.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $7,000 a month already works well
          </h2>

          <ul className={styles.list}>
            <li>moderate cost of living areas</li>
            <li>stable housing situation</li>
            <li>controlled healthcare expenses</li>
            <li>low or manageable debt</li>
            <li>comfortable but balanced lifestyle expectations</li>
          </ul>

          <p className={styles.paragraph}>
            In these conditions, $7,000 a month can feel strong enough. You can
            live comfortably, but you may still need to think more carefully
            about larger expenses and long-term inflation.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What the move to $10,000 a month really changes
          </h2>

          <p className={styles.paragraph}>
            The biggest change is not luxury. It is margin. More margin means
            more choices, fewer compromises, and less pressure from unexpected
            events.
          </p>

          <p className={styles.paragraph}>
            Over time, that wider financial buffer can make retirement feel more
            stable, more enjoyable, and easier to sustain.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your retirement income could look like
            </h2>

            <p className={styles.ctaText}>
              Use the calculator to estimate how much monthly income your
              investments could generate based on your savings, returns, and
              retirement assumptions.
            </p>

            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related comparisons</h2>

          <ul className={styles.list}>
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
                href="/is-10000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $10,000 a month enough to retire
              </Link>
            </li>
            <li>
              <Link
                href="/is-8000-vs-10000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $8,000 vs $10,000 comparison
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
            $7,000 a month can already support a strong retirement. But $10,000
            a month can make retirement feel much easier, with more freedom and
            more protection against future uncertainty.
          </p>

          <p className={styles.paragraph}>
            The best move is to compare your expected income with the lifestyle
            you want, then test the numbers before you rely on them.
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
