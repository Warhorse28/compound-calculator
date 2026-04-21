import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-to-invest-monthly-to-retire-early";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Do You Need to Invest Monthly to Retire Early?";

const pageTitle =
  "How Much Do You Need to Invest Monthly to Retire Early? A Practical Breakdown";

const pageDescription =
  "Find out how much you need to invest monthly to retire early. Explore timelines, scenarios, and calculate your own path.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    monthly: "$500",
    outcome: "Slow path",
    insight: "Possible, but requires a long timeline (30+ years).",
  },
  {
    monthly: "$1,000",
    outcome: "Balanced path",
    insight: "More realistic for early retirement with consistency.",
  },
  {
    monthly: "$2,000+",
    outcome: "Aggressive path",
    insight: "Shortens the timeline significantly if sustained.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Early retirement planning</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Retiring early is not just about saving more — it is about how much
            you invest consistently and how long your money compounds.
          </p>

          <p className={styles.intro}>
            The earlier you want to retire, the more pressure is placed on your
            monthly investment. Time shrinks, so contributions must increase.
          </p>

          <p className={styles.intro}>
            The right question is not just whether early retirement sounds good.
            It is whether your monthly contribution is strong enough to make the
            timeline realistic.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> early retirement is a trade-off
              between time and monthly investment. If you reduce one, the other
              usually has to grow.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Calculate Your Early Retirement Plan →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What monthly investment usually means for early retirement
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
            The key difference is not just how much you invest. It is how much
            time you are trying to compress.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why retiring early changes everything</h2>

          <p className={styles.paragraph}>
            Traditional retirement benefits from long timelines. Early
            retirement removes that advantage.
          </p>

          <ul className={styles.list}>
            <li>less time for compounding</li>
            <li>higher monthly pressure</li>
            <li>greater consistency required</li>
            <li>less room for mistakes</li>
          </ul>

          <p className={styles.paragraph}>
            That is why early retirement planning feels harder. It depends more
            on contribution level because time has less chance to help.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How to think about your own target</h2>

          <p className={styles.paragraph}>
            Instead of chasing a single number, think in trade-offs:
          </p>

          <ul className={styles.list}>
            <li>retire earlier → invest more monthly</li>
            <li>invest less → extend your timeline</li>
            <li>higher returns → reduce pressure slightly</li>
          </ul>

          <p className={styles.paragraph}>
            If you want to explore related scenarios, check{" "}
            <Link
              href="/how-much-do-you-need-to-invest-to-reach-1-million"
              className={styles.bottomCtaLink}
            >
              how much you need for $1 million
            </Link>{" "}
            or{" "}
            <Link
              href="/how-long-to-reach-1-million"
              className={styles.bottomCtaLink}
            >
              how long it takes to get there
            </Link>
            .
          </p>

          <div className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Build your early retirement plan</h2>

              <p className={styles.ctaText}>
                Adjust your monthly investment and timeline to see what your path
                could realistically look like.
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
            Early retirement is possible, but it comes at a cost: a higher
            monthly investment or a longer timeline than you may want.
          </p>

          <p className={styles.paragraph}>
            The key is understanding the trade-off and choosing a path you can
            actually sustain.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>Want to see your own plan?</p>

            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              Calculate now →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
