import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/net-worth-needed-to-retire-young";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Net Worth Do You Need to Retire Young?";
const pageTitle =
  "How Much Net Worth Do You Need to Retire Young? A Long-Horizon Reality Check";
const pageDescription =
  "See how much net worth you may need to retire young based on income goals, withdrawal rates, and the extra pressure of a longer retirement timeline.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    income: "$4,000/month",
    at3: "$1.60M",
    at4: "$1.20M",
    at5: "$960K",
  },
  {
    income: "$6,000/month",
    at3: "$2.40M",
    at4: "$1.80M",
    at5: "$1.44M",
  },
  {
    income: "$8,000/month",
    at3: "$3.20M",
    at4: "$2.40M",
    at5: "$1.92M",
  },
  {
    income: "$10,000/month",
    at3: "$4.00M",
    at4: "$3.00M",
    at5: "$2.40M",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Young retirement</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Retiring young sounds attractive, but the math gets harder when your
            portfolio may need to fund decades of life.
          </p>

          <p className={styles.intro}>
            The younger you retire, the longer your money has to survive. That
            creates a very different challenge from standard retirement, where
            the portfolio may only need to last 20 to 30 years.
          </p>

          <p className={styles.intro}>
            Retiring young usually requires a larger margin of safety, more
            discipline, and more flexibility than people expect when they first
            look at a headline number.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> retiring young is not just about
              reaching financial independence early. It is about building a plan
              durable enough to survive a much longer timeline.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Find Your Young Retirement Number →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Net worth needed to retire young
          </h2>

          <p className={styles.paragraph}>
            A young retiree often needs to think more conservatively because the
            portfolio has to absorb more inflation, more market cycles, and more
            uncertainty over time.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>3% strategy</th>
                  <th>4% strategy</th>
                  <th>5% strategy</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td className={styles.tableCellStrong}>{row.income}</td>
                    <td>{row.at3}</td>
                    <td>{row.at4}</td>
                    <td>{row.at5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            At younger retirement ages, the difference between a 3% and 4%
            withdrawal strategy becomes especially important. What looks like a
            small change on paper can dramatically alter long-term survival odds.
          </p>

          <p className={styles.paragraph}>
            The longer the timeline, the less forgiving an aggressive plan tends
            to be.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why young retirement creates extra pressure
          </h2>

          <p className={styles.paragraph}>
            A retiree in their 40s may need the portfolio to last 40 years or
            more. That means there is more exposure to inflation, more exposure
            to bad return sequences, and more time for spending assumptions to go
            wrong.
          </p>

          <p className={styles.paragraph}>
            This is why many young retirees prefer lower withdrawal rates and
            higher flexibility. A plan that is barely safe over 25 years may feel
            fragile over 45 years.
          </p>

          <p className={styles.paragraph}>
            The challenge is not only hitting the number. It is protecting the
            number.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What makes retiring young more realistic
          </h2>

          <p className={styles.paragraph}>
            Young retirement tends to work better when the plan includes
            adaptability. That can mean lower fixed expenses, part-time income,
            variable spending rules, or a larger cash reserve.
          </p>

          <p className={styles.paragraph}>
            People who retire young successfully often keep more room to adjust
            rather than assuming life will stay perfectly predictable.
          </p>

          <ul className={styles.list}>
            <li>Lower withdrawal rates improve durability</li>
            <li>Flexible spending can reduce portfolio stress</li>
            <li>Extra income streams create more margin</li>
            <li>Long-term planning matters more than headline freedom</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Is retiring young the same as being rich?
          </h2>

          <p className={styles.paragraph}>
            Not necessarily. Retiring young means you reached independence early.
            Retiring rich means the portfolio can support a much more premium
            lifestyle.
          </p>

          <p className={styles.paragraph}>
            Some people retire young by living lean. Others retire young with
            much larger portfolios and more spending freedom. The age is one
            variable. The lifestyle target is another.
          </p>

          <p className={styles.paragraph}>
            That is why the right number depends on both timing and lifestyle,
            not timing alone.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your long-horizon retirement plan
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to model different income goals and withdrawal
              assumptions for a younger retirement timeline.
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
              <Link href="/net-worth-needed-for-early-retirement">
                Net worth needed for early retirement
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-rich">
                Net worth needed to retire rich
              </Link>
            </li>
            <li>
              <Link href="/how-much-net-worth-needed-at-3-percent-withdrawal">
                3% withdrawal strategy breakdown
              </Link>
            </li>
            <li>
              <Link href="/safe-withdrawal-rate-for-retirement">
                Safe withdrawal rate guide
              </Link>
            </li>
            <li>
              <Link href={calculatorPath}>
                Calculate your retirement income potential
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            Retiring young usually requires more than just reaching financial
            independence early. It requires a plan that can withstand a much
            longer retirement horizon.
          </p>

          <p className={styles.paragraph}>
            For many people, the safest path is to combine a larger net worth
            target with lower withdrawal rates and more flexibility.
          </p>

          <p className={styles.paragraph}>
            The younger you want to retire, the more important durability
            becomes.
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
