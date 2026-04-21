import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-should-you-invest-per-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Should You Invest Per Month? A Simple Guide";

const pageTitle =
  "How Much Should You Invest Per Month? Find the Right Amount for Your Goals";

const pageDescription =
  "Not sure how much to invest monthly? Learn how to choose the right amount based on your goals, timeline, and income.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const examples = [
  {
    monthly: "$100",
    result: "~$149K in 30 years",
    insight: "Slow start, but still meaningful over time.",
  },
  {
    monthly: "$300",
    result: "~$447K in 30 years",
    insight: "Strong balance between effort and growth.",
  },
  {
    monthly: "$500",
    result: "~$745K in 30 years",
    insight: "Accelerates results significantly.",
  },
  {
    monthly: "$1,000",
    result: "~$1.49M in 30 years",
    insight: "Aggressive growth path.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Monthly investing guide</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            There is no perfect number that works for everyone. The right monthly
            investment depends on your income, your goals, and how long you plan
            to stay invested.
          </p>

          <p className={styles.intro}>
            But there is a simple way to think about it: choose an amount that is
            high enough to move the needle — and realistic enough to sustain over
            time.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> consistency matters more than picking
              the “perfect” monthly amount.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Calculate Your Monthly Investment →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes when you invest more per month?
          </h2>

          <p className={styles.paragraph}>
            Monthly investing works through repetition. Each contribution adds
            capital, and older contributions keep compounding.
          </p>

          <p className={styles.paragraph}>
            Increasing your monthly investment does not just increase your final
            result — it accelerates how fast you get there.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly</th>
                  <th className={styles.tableHead}>30-year result</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {examples.map((row) => (
                  <tr key={row.monthly}>
                    <td className={styles.tableCellStrong}>
                      {row.monthly}
                    </td>
                    <td className={styles.tableCell}>{row.result}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The difference between $100 and $500 a month is not small — it
            completely changes the trajectory.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How to choose your monthly investment
          </h2>

          <ul className={styles.list}>
            <li>start with what you can sustain every month</li>
            <li>increase gradually as your income grows</li>
            <li>avoid setting unrealistic targets</li>
            <li>focus on long-term consistency</li>
          </ul>

          <p className={styles.paragraph}>
            If you want to explore specific scenarios, check{" "}
            <Link
              href="/if-you-invest-300-a-month-heres-how-much-you-could-have"
              className={styles.inlineLink}
            >
              $300/month example
            </Link>{" "}
            or{" "}
            <Link
              href="/if-you-invest-500-a-month-heres-how-much-you-could-have"
              className={styles.inlineLink}
            >
              $500/month scenario
            </Link>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            The biggest mistake people make
          </h2>

          <p className={styles.paragraph}>
            Most people try to find the perfect number before they start.
          </p>

          <p className={styles.paragraph}>
            In reality, starting with a smaller amount and increasing over time
            is usually more effective than waiting too long.
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Find your ideal monthly amount
              </h2>

              <p className={styles.ctaText}>
                Test different monthly investments and see how they impact your
                long-term results.
              </p>

              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your Scenario →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            The best monthly investment is not the highest one — it is the one
            you can maintain consistently over time.
          </p>

          <p className={styles.paragraph}>
            Start where you are, increase when possible, and let time do the rest.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your numbers?
            </p>

            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              Use the calculator →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
