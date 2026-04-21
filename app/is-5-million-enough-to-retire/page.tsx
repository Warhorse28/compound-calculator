import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/is-5-million-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $5 Million Enough to Retire? High-End Retirement Income Explained";
const pageTitle =
  "Is $5 Million Enough to Retire? High-End Retirement Income Explained";
const pageDescription =
  "See what $5 million can realistically support in retirement. Compare withdrawal rates, income levels, and whether it delivers a truly high-end lifestyle.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    rate: "3%",
    yearlyIncome: "$150,000",
    monthlyIncome: "$12,500",
    view: "Very safe structure with strong long-term durability.",
  },
  {
    rate: "4%",
    yearlyIncome: "$200,000",
    monthlyIncome: "$16,667",
    view: "High-end retirement for most lifestyles.",
  },
  {
    rate: "5%",
    yearlyIncome: "$250,000",
    monthlyIncome: "$20,833",
    view: "Luxury-level potential, but less margin of safety.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Retirement benchmark</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            $5 million is where retirement often starts to feel truly high-end —
            not just comfortable.
          </p>

          <p className={styles.intro}>
            At this level, many retirees are no longer thinking about financial
            constraints. Instead, the focus shifts toward lifestyle freedom,
            optionality, and long-term security across decades.
          </p>

          <p className={styles.intro}>
            Still, even a $5 million portfolio is not unlimited. The outcome
            depends on your withdrawal strategy, timeline, and how aggressive
            your lifestyle expectations are.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $5 million can support a high-end
              retirement, but sustainability still depends on how income is
              structured over time.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Test Your Retirement Number →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How much income can $5 million generate?
          </h2>

          <p className={styles.paragraph}>
            The real power of a $5 million portfolio comes from the income it can
            consistently produce — not just the headline number.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Withdrawal rate</th>
                  <th>Yearly income</th>
                  <th>Monthly income</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.rate}>
                    <td className={styles.tableCellStrong}>{row.rate}</td>
                    <td>{row.yearlyIncome}</td>
                    <td>{row.monthlyIncome}</td>
                    <td>{row.view}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            At a 4% withdrawal rate, $5 million can generate about $200,000 per
            year — roughly $16,600 per month before taxes.
          </p>

          <p className={styles.paragraph}>
            That income level supports a high standard of living in most places
            and can feel close to financial independence without meaningful
            trade-offs.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $5 million feels like financial freedom
          </h2>

          <p className={styles.paragraph}>
            For many people, this is the point where retirement becomes less
            about constraints and more about choices.
          </p>

          <ul className={styles.list}>
            <li>You want a high-end or premium lifestyle</li>
            <li>You value flexibility and optional spending</li>
            <li>You want strong protection against inflation</li>
            <li>You prefer a wide margin of safety</li>
          </ul>

          <p className={styles.paragraph}>
            At this level, retirement often feels stable, flexible, and
            adaptable — not fragile.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $5 million may still have limits
          </h2>

          <p className={styles.paragraph}>
            Even $5 million has boundaries depending on your lifestyle. Early
            retirement, expensive cities, or luxury spending can still stretch
            the portfolio.
          </p>

          <p className={styles.paragraph}>
            A long retirement horizon (40–50 years) also increases pressure,
            making conservative withdrawal strategies more important.
          </p>

          <p className={styles.paragraph}>
            This is why “enough” is always relative — even at higher wealth
            levels.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why $5 million is a major step up
          </h2>

          <p className={styles.paragraph}>
            The jump from $4 million to $5 million significantly increases income
            potential while improving long-term resilience.
          </p>

          <p className={styles.paragraph}>
            It allows you to use more conservative withdrawal rates while still
            maintaining a high standard of living.
          </p>

          <p className={styles.paragraph}>
            In practice, this creates a powerful balance between lifestyle and
            financial durability.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how $5 million works for your plan
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to test different withdrawal rates and income
              levels based on your goals and retirement timeline.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Use the Calculator →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore related scenarios</h2>
          <ul className={styles.list}>
            <li>
              <Link href="/is-4-million-enough-to-retire">
                Is $4 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/is-6-million-enough-to-retire">
                Is $6 million enough to retire?
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-4-million-generate">
                How much income can $4 million generate?
              </Link>
            </li>
            <li>
              <Link href="/safe-withdrawal-rate-for-retirement">
                Safe withdrawal rate guide
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
            $5 million is enough to retire comfortably — and often supports a
            high-end lifestyle with strong flexibility.
          </p>

          <p className={styles.paragraph}>
            But the real advantage comes from how the portfolio is managed, not
            just its size.
          </p>

          <p className={styles.paragraph}>
            A disciplined income strategy turns $5 million into long-term
            financial freedom instead of just a large number.
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
