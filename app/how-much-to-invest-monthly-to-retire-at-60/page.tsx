import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-to-invest-monthly-to-retire-at-60";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Invest Monthly to Retire at 60?";

const pageTitle =
  "How Much Do You Need to Invest Monthly to Retire at 60? A Practical Breakdown";

const pageDescription =
  "Find out how much you need to invest monthly to retire at 60. Explore realistic paths and calculate your own retirement scenario.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    monthly: "$300",
    outcome: "Light path",
    insight: "Helpful over time, but may create a limited retirement cushion.",
  },
  {
    monthly: "$500",
    outcome: "Balanced path",
    insight: "A meaningful contribution level for many long-term plans.",
  },
  {
    monthly: "$1,000+",
    outcome: "Strong path",
    insight: "Creates much more flexibility and a stronger retirement base.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retire at 60 planning</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Retiring at 60 is usually more achievable than retiring at 40 or 50
            because you give compounding more time to work.
          </p>

          <p className={styles.intro}>
            That extra time reduces the pressure on your monthly investment. But
            it does not remove the need for a realistic plan.
          </p>

          <p className={styles.intro}>
            The monthly amount still matters — especially if you want more than a
            minimal retirement cushion.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> retiring at 60 gives you more room
              to work with, but the monthly contribution still determines how
              strong and flexible your retirement becomes.
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
            What it usually takes to retire at 60
          </h2>

          <p className={styles.paragraph}>
            These are simplified planning ranges. The goal is not to promise a
            fixed result, but to show how different monthly contributions shape
            your path.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly investment</th>
                  <th className={styles.tableHead}>Path</th>
                  <th className={styles.tableHead}>What it implies</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row) => (
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
            At this stage, time helps much more than in shorter retirement
            targets — but larger contributions still create a much better
            outcome.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why retiring at 60 is more forgiving
          </h2>

          <p className={styles.paragraph}>
            Compared with more aggressive retirement timelines, retiring at 60
            benefits from:
          </p>

          <ul className={styles.list}>
            <li>more compounding time</li>
            <li>lower monthly pressure</li>
            <li>more flexibility to adjust</li>
            <li>better recovery room after setbacks</li>
          </ul>

          <p className={styles.paragraph}>
            That makes it one of the most practical retirement targets for people
            who want balance between ambition and realism.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How to think about your own retirement path
          </h2>

          <p className={styles.paragraph}>
            The best way to plan is not to guess a monthly number blindly. It is
            to connect the amount you can invest with the retirement outcome you
            actually want.
          </p>

          <ul className={styles.list}>
            <li>higher monthly investment → more retirement flexibility</li>
            <li>lower monthly investment → smaller cushion or later retirement</li>
            <li>more time → less pressure on each contribution</li>
          </ul>

          <p className={styles.paragraph}>
            You can compare this with{" "}
            <Link
              href="/how-much-to-invest-monthly-to-retire-at-50"
              className={styles.bottomCtaLink}
            >
              retiring at 50
            </Link>{" "}
            or explore{" "}
            <Link
              href="/how-much-to-invest-monthly-to-retire-early"
              className={styles.bottomCtaLink}
            >
              broader early retirement planning
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>
                Build your retirement scenario
              </h2>

              <p className={styles.ctaText}>
                Adjust your monthly investment and timeline to see what retiring
                at 60 could realistically look like.
              </p>

              <Link href={calculatorPath} className={styles.ctaButton}>
                Run Your Numbers →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Retiring at 60 is one of the more realistic long-term targets because
            time still has room to help you.
          </p>

          <p className={styles.paragraph}>
            The monthly amount you invest will decide whether that retirement
            feels tight, comfortable, or flexible.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own scenario?
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
