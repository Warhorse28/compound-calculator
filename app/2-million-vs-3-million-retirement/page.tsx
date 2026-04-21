import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/2-million-vs-3-million-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$2 Million vs $3 Million for Retirement: How Much Difference Does It Make?";
const pageTitle =
  "$2 Million vs $3 Million for Retirement: How Much Difference Does It Make?";
const pageDescription =
  "Compare $2 million vs $3 million for retirement. See how income, flexibility, and long-term safety change between these two retirement benchmarks.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    benchmark: "$2 million at 4%",
    yearlyIncome: "$80,000",
    monthlyIncome: "$6,667",
    view: "Comfortable retirement, but still requires discipline.",
  },
  {
    benchmark: "$3 million at 4%",
    yearlyIncome: "$120,000",
    monthlyIncome: "$10,000",
    view: "Much stronger flexibility with reduced financial pressure.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement comparison</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            The jump from $2 million to $3 million may not sound massive, but in
            retirement terms, it can significantly change your level of comfort
            and flexibility.
          </p>

          <p className={styles.intro}>
            Both portfolios can support retirement, but they create different
            realities. One tends to require more structure and awareness. The
            other starts to feel more relaxed and adaptable.
          </p>

          <p className={styles.intro}>
            This difference becomes even more important over long retirement
            timelines, where margin and flexibility matter more than raw numbers.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> going from $2M to $3M doesn’t just
              increase income — it reduces pressure and increases long-term
              stability.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Compare Your Retirement Plan →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Income difference: $2 million vs $3 million
          </h2>

          <p className={styles.paragraph}>
            The simplest way to compare these two portfolios is by looking at the
            income they can generate using the same withdrawal rate.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Portfolio</th>
                  <th>Yearly income</th>
                  <th>Monthly income</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.benchmark}>
                    <td className={styles.tableCellStrong}>{row.benchmark}</td>
                    <td>{row.yearlyIncome}</td>
                    <td>{row.monthlyIncome}</td>
                    <td>{row.view}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            At a 4% withdrawal rate, the difference is about $3,333 per month.
            That gap alone can change housing options, travel frequency, and
            overall lifestyle flexibility.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $2 million retirement looks like
          </h2>

          <p className={styles.paragraph}>
            A $2 million portfolio is often enough for a comfortable retirement,
            but it still requires awareness and discipline.
          </p>

          <ul className={styles.list}>
            <li>Comfortable but not unlimited spending</li>
            <li>Moderate flexibility in lifestyle choices</li>
            <li>Some sensitivity to inflation and market cycles</li>
            <li>Less margin for large unexpected costs</li>
          </ul>

          <p className={styles.paragraph}>
            It works well for many people, but it is not fully stress-free in all
            scenarios.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes at $3 million
          </h2>

          <p className={styles.paragraph}>
            At $3 million, retirement often becomes noticeably more flexible and
            resilient.
          </p>

          <p className={styles.paragraph}>
            The higher income allows for more freedom in spending while still
            keeping withdrawal rates reasonable. This reduces the pressure to
            optimize every financial decision.
          </p>

          <ul className={styles.list}>
            <li>More room for travel and discretionary spending</li>
            <li>Better protection against inflation</li>
            <li>Greater flexibility in withdrawal strategy</li>
            <li>Lower stress during market downturns</li>
          </ul>

          <p className={styles.paragraph}>
            The portfolio starts working for you more comfortably, instead of you
            constantly managing around it.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why this gap matters long term
          </h2>

          <p className={styles.paragraph}>
            Retirement is not just about the first few years. It is about
            sustaining your lifestyle over decades.
          </p>

          <p className={styles.paragraph}>
            A larger portfolio gives you more margin for:
          </p>

          <ul className={styles.list}>
            <li>Unexpected expenses</li>
            <li>Healthcare costs</li>
            <li>Market volatility</li>
            <li>Longer-than-expected lifespan</li>
          </ul>

          <p className={styles.paragraph}>
            That is where the extra $1 million becomes far more valuable than it
            initially appears.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Compare your own retirement numbers
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different portfolio sizes, withdrawal
              rates, and income scenarios based on your goals.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Use the Calculator →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related comparisons</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/1-million-vs-2-million-retirement">
                $1 million vs $2 million retirement
              </Link>
            </li>
            <li>
              <Link href="/3-million-vs-5-million-retirement">
                $3 million vs $5 million retirement
              </Link>
            </li>
            <li>
              <Link href="/is-2-million-enough-to-retire">
                Is $2 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/is-3-million-enough-to-retire">
                Is $3 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href={calculatorPath}>
                Calculate your retirement income
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Both $2 million and $3 million can support retirement, but they offer
            very different levels of flexibility and security.
          </p>

          <p className={styles.paragraph}>
            The extra $1 million is not just additional income. It is additional
            margin, stability, and freedom in how you manage your retirement.
          </p>

          <p className={styles.paragraph}>
            Over time, that difference can significantly improve both your
            lifestyle and your peace of mind.
          </p>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Run Your Numbers →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
