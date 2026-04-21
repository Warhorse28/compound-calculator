import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/investing/500-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "If You Invest $500 a Month, Here’s How Much You Could Have in 10, 20, or 30 Years";
const pageTitle =
  "If You Invest $500 a Month, Here’s How Much You Could Have in 10, 20, or 30 Years";
const pageDescription =
  "See how much investing $500 a month could grow over 10, 20, and 30 years with compound interest.";

const growthRows = [
  {
    timeframe: "10 years",
    value: "$86,000",
    invested: "$60,000",
    insight: "A solid result from a manageable monthly habit.",
  },
  {
    timeframe: "20 years",
    value: "$260,000",
    invested: "$120,000",
    insight: "Compounding starts doing much more of the work.",
  },
  {
    timeframe: "30 years",
    value: "$614,000",
    invested: "$180,000",
    insight: "Time turns consistency into serious long-term value.",
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
            Investing $500 every month may look modest at first, but over time
            it can grow into a meaningful amount.
          </p>

          <p className={styles.intro}>
            The final result depends less on a single contribution and more on
            consistency plus time. That is where compounding starts to change
            the picture.
          </p>

          <p className={styles.intro}>
            Even a smaller monthly investment can grow much more than most
            people expect when given enough time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $500 a month may feel small in the
              short term, but consistency and time can turn it into substantial
              long-term growth.
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
            What $500 a month could grow into
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

          <p className={styles.paragraph}>
            These examples show why smaller monthly contributions should not be
            underestimated. The later years often create much more growth than
            people expect.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why a smaller monthly amount still matters
          </h2>

          <p className={styles.paragraph}>
            The strength of monthly investing is not just the amount itself. It
            is the combination of repetition, time, and compound growth.
          </p>

          <ul className={styles.list}>
            <li>Each month adds new capital</li>
            <li>Earlier deposits usually do more of the work</li>
            <li>Growth builds on prior growth</li>
            <li>Consistency often matters more than intensity</li>
          </ul>

          <p className={styles.paragraph}>
            This is why $500 a month invested for a long period can still
            produce a surprisingly strong result.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How to read these examples</h2>

          <p className={styles.paragraph}>
            These numbers are based on a steady average return assumption and
            are meant to illustrate long-term growth, not predict exact future
            performance.
          </p>

          <p className={styles.paragraph}>
            Even so, they show the same core principle: time and consistency can
            turn a manageable monthly habit into substantial long-term value.
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
                href="/investing/1000-a-month"
                className={styles.bottomCtaLink}
              >
                What if you invest $1,000 a month?
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
            $500 a month may not look huge at first, but over long periods it
            can still create meaningful wealth. Time is what makes the biggest
            difference.
          </p>

          <p className={styles.paragraph}>
            The smartest move is to start with a contribution you can sustain,
            then give compounding enough time to work.
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
