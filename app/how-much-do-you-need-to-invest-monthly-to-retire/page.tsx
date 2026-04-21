import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-do-you-need-to-invest-monthly-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Invest Monthly to Retire?";

const pageTitle =
  "How Much Do You Need to Invest Monthly to Retire? A Simple Planning Guide";

const pageDescription =
  "See how much you may need to invest monthly for retirement based on your timeline, goals, and realistic contribution paths.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    monthly: "$300",
    outcome: "Lower retirement cushion",
    insight: "Helpful, but may be too small for an aggressive retirement target.",
  },
  {
    monthly: "$500",
    outcome: "Meaningful long-term growth",
    insight: "A strong base for many people if started early enough.",
  },
  {
    monthly: "$1,000",
    outcome: "Much stronger retirement path",
    insight: "Higher consistency can materially change retirement options.",
  },
  {
    monthly: "$1,500+",
    outcome: "Aggressive retirement build",
    insight: "Shortens pressure on the timeline and expands flexibility later.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement planning</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            The monthly amount you need for retirement depends on one thing
            above all: what kind of retirement you are trying to build.
          </p>

          <p className={styles.intro}>
            A small monthly investment can still matter, but it may not support
            an ambitious retirement goal. A larger monthly amount creates a
            stronger cushion, especially when combined with time.
          </p>

          <p className={styles.intro}>
            The right question is not just “How much should I invest?” It is
            “How much do I need to invest monthly to make my retirement target
            realistic?”
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> the monthly amount you need for
              retirement is not universal. It depends on your timeline, your
              target lifestyle, and how much compounding time you still have.
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
            What monthly investing level usually changes
          </h2>

          <p className={styles.paragraph}>
            These are not fixed retirement promises. They are planning ranges
            that show how different monthly contributions can shape your future
            flexibility.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly investment</th>
                  <th className={styles.tableHead}>What it usually creates</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.monthly}>
                    <td className={styles.tableCellStrong}>{row.monthly}</td>
                    <td className={styles.tableCellStrong}>{row.outcome}</td>
                    <td className={styles.tableCell}>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The biggest difference is not only the final number. It is how much
            freedom you may have later.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What determines how much you need to invest for retirement
          </h2>

          <ul className={styles.list}>
            <li>your retirement age target</li>
            <li>your desired retirement lifestyle</li>
            <li>your current starting balance</li>
            <li>your expected return assumptions</li>
            <li>how many years you still have to invest</li>
          </ul>

          <p className={styles.paragraph}>
            Someone starting early may reach the same retirement goal with a
            lower monthly contribution. Someone starting later may need to
            invest much more to close the gap.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            The mistake most people make with retirement investing
          </h2>

          <p className={styles.paragraph}>
            Most people pick a monthly amount based only on what feels
            comfortable today.
          </p>

          <p className={styles.paragraph}>
            That can be a problem. A comfortable number that is too low may
            create years of false confidence. A better approach is to test your
            retirement target first, then work backward into a monthly amount.
          </p>

          <p className={styles.paragraph}>
            If you want to compare this with broader monthly investing logic,
            read{" "}
            <Link
              href="/how-much-should-you-invest-per-month"
              className={styles.bottomCtaLink}
            >
              how much you should invest per month
            </Link>
            . If you want to compare millionaire-level planning, explore{" "}
            <Link
              href="/how-much-do-you-need-to-invest-to-reach-1-million"
              className={styles.bottomCtaLink}
            >
              how much you need to invest to reach $1 million
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Find your monthly retirement target
              </h2>

              <p className={styles.ctaText}>
                Test different monthly contributions, timelines, and return
                assumptions to see what your retirement path could look like.
              </p>

              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your Retirement Scenario →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            The amount you need to invest monthly for retirement depends on the
            outcome you want, not just on what feels easy to contribute today.
          </p>

          <p className={styles.paragraph}>
            The earlier you start, the less pressure each monthly contribution
            usually needs to carry.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to see what retirement path your monthly amount can support?
            </p>

            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              Use the calculator now →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
