import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/investing/1000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "If You Invest $1,000 a Month, Here’s How Much You Could Have in 10, 20, or 30 Years";
const pageTitle =
  "If You Invest $1,000 a Month, Here’s How Much You Could Have in 10, 20, or 30 Years";
const pageDescription =
  "See how much investing $1,000 a month could grow over 10, 20, and 30 years with compound interest.";

const growthRows = [
  {
    timeframe: "10 years",
    value: "$173,000",
    invested: "$120,000",
    insight: "Solid result, but still early in the compounding curve.",
  },
  {
    timeframe: "20 years",
    value: "$521,000",
    invested: "$240,000",
    insight: "Now compounding starts doing heavy lifting.",
  },
  {
    timeframe: "30 years",
    value: "$1,227,000",
    invested: "$360,000",
    insight: "The later years create the biggest acceleration.",
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
          <div className={styles.eyebrow}>Monthly investing example</div>
          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Investing $1,000 every month can build meaningful wealth over time.
            But the biggest driver is not just the amount you invest. It is how
            long you stay invested.
          </p>

          <p className={styles.intro}>
            A 10-year investing period and a 30-year investing period can lead
            to dramatically different outcomes, even with the exact same monthly
            contribution.
          </p>

          <p className={styles.intro}>
            That is the power of compound growth. The gap between 10 and 30
            years is not incremental. It becomes much larger as your returns
            start generating returns of their own.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $1,000 a month is strong, but time
              is what turns that contribution into something much bigger.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Use the Compound Interest Calculator →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $1,000 a month could grow into
          </h2>

          <p className={styles.paragraph}>
            Assumes a 7% average annual return, compounded monthly, with
            contributions made at the end of each month.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Timeframe</th>
                  <th className={styles.tableHead}>Estimated value</th>
                  <th className={styles.tableHead}>Amount invested</th>
                  <th className={styles.tableHead}>What stands out</th>
                </tr>
              </thead>
              <tbody>
                {growthRows.map((row) => (
                  <tr key={row.timeframe}>
                    <td className={styles.tableCellStrong}>{row.timeframe}</td>
                    <td className={styles.tableCell}>{row.value}</td>
                    <td className={styles.tableCell}>{row.invested}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why the difference gets so large</h2>

          <p className={styles.paragraph}>
            Monthly investing works in layers. First, each contribution adds new
            capital. Then older contributions have more time to grow. Finally,
            investment gains start compounding on top of previous gains.
          </p>

          <ul className={styles.list}>
            <li>Every month adds more money to your portfolio</li>
            <li>Earlier deposits stay invested longer</li>
            <li>Compounding becomes stronger over time</li>
            <li>Longer timelines can outweigh short-term intensity</li>
          </ul>

          <p className={styles.paragraph}>
            This is why the jump from 20 years to 30 years can be more dramatic
            than many people expect. The later years often do more heavy lifting
            than the early years.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How to think about these numbers</h2>

          <p className={styles.paragraph}>
            These figures are examples, not guarantees. Real-world returns vary
            from year to year, and your actual results will depend on market
            performance, fees, taxes, and how consistently you keep investing.
          </p>

          <p className={styles.paragraph}>
            Still, the broader lesson remains the same: increasing either your
            monthly contribution or your investing timeline can materially
            improve your long-term outcome.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your own monthly investing plan
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate what your contribution could become
              over time based on your own assumptions.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related pages</h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/investing/500-a-month"
                className={styles.bottomCtaLink}
              >
                What if you invest $500 a month?
              </Link>
            </li>
            <li>
              <Link
                href="/investing-early-vs-late-how-big-is-the-difference"
                className={styles.bottomCtaLink}
              >
                Investing early vs late: how big is the difference?
              </Link>
            </li>
            <li>
              <Link href={calculatorPath} className={styles.bottomCtaLink}>
                Try the compound interest calculator
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Investing $1,000 a month can create strong long-term results, but
            the biggest multiplier is time. The longer you stay invested, the
            more compounding starts to do the heavy lifting.
          </p>

          <p className={styles.paragraph}>
            The smartest move is to start with a realistic contribution, keep it
            consistent, and give your investments enough time to grow.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own investing timeline?
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
