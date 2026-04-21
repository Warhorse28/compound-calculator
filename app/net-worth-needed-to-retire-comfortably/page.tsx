import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://compoundwealth.com";
const pagePath = "/net-worth-needed-to-retire-comfortably";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "What Net Worth Do You Need to Retire Comfortably?";
const pageTitle =
  "What Net Worth Do You Need to Retire Comfortably? A More Realistic Breakdown";
const pageDescription =
  "See how much net worth you may need to retire comfortably based on monthly income goals, withdrawal rates, and long-term sustainability.";

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
          <div className={styles.eyebrow}>Comfortable retirement</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Comfortable retirement is not about luxury. It is about having enough
            income to live with stability, flexibility, and far less stress.
          </p>

          <p className={styles.intro}>
            For some people, a comfortable retirement means covering essentials
            without pressure. For others, it means having room for travel,
            hobbies, healthcare, family support, and a buffer against surprises.
          </p>

          <p className={styles.intro}>
            That is why there is no single retirement number. The real target
            depends on the lifestyle you want, the withdrawal strategy you use,
            and how much margin you want built into the plan.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> comfortable retirement usually
              requires more than just “enough to survive” — it requires enough
              net worth to absorb inflation, volatility, and changing expenses
              over time.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Find Your Comfortable Retirement Number →
            </Link>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Comfortable retirement net worth scenarios
          </h2>

          <p className={styles.paragraph}>
            A comfortable retirement income often falls somewhere between basic
            financial security and a more premium lifestyle. That usually means
            aiming for a portfolio that can support consistent spending without
            constant fear of market swings.
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
            For many households, a comfortable retirement often starts around the
            $6,000 to $8,000 per month range. But the net worth required changes
            dramatically depending on whether you want maximum safety or a more
            aggressive withdrawal plan.
          </p>

          <p className={styles.paragraph}>
            Even a one-point shift in withdrawal rate can change your target by
            hundreds of thousands of dollars.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What “comfortable” really means in retirement
          </h2>

          <p className={styles.paragraph}>
            Comfortable does not mean the same thing for everyone. But in most
            cases, it means your retirement income can cover needs, absorb normal
            surprises, and still leave room for enjoyment.
          </p>

          <ul className={styles.list}>
            <li>Housing and core bills feel manageable</li>
            <li>Healthcare costs do not create immediate stress</li>
            <li>Travel or leisure spending is still possible</li>
            <li>You have room for flexibility when life changes</li>
          </ul>

          <p className={styles.paragraph}>
            That is why comfortable retirement usually sits well above the bare
            minimum. It is not about excess. It is about resilience and peace of
            mind.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why a comfortable plan needs more than a minimum number
          </h2>

          <p className={styles.paragraph}>
            A retirement plan built around the bare minimum can break more
            easily. Inflation rises, markets fall, and spending changes over
            time. A thin plan often leaves no room to adapt.
          </p>

          <p className={styles.paragraph}>
            A more comfortable target gives you breathing room. It reduces the
            odds that one bad market cycle or one unexpected expense forces major
            lifestyle cuts.
          </p>

          <p className={styles.paragraph}>
            In practice, comfort usually comes from margin — not just from
            hitting a single headline number.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            A realistic way to think about your retirement target
          </h2>

          <p className={styles.paragraph}>
            Instead of asking, “What is the minimum I can retire with?” a better
            question is, “What portfolio gives me a retirement I can actually
            enjoy and sustain?”
          </p>

          <p className={styles.paragraph}>
            That shift matters. It pushes you away from fragile assumptions and
            toward a plan that works in real life, not just on paper.
          </p>

          <p className={styles.paragraph}>
            Many retirees would rather build a slightly larger portfolio than
            spend decades worrying whether their original number was too low.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Model your comfortable retirement target
            </h2>
            <p className={styles.ctaText}>
              Test different monthly income goals, return assumptions, and
              withdrawal strategies to see what kind of retirement your net worth
              can realistically support.
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
                How much you need for early retirement
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-rich">
                Net worth needed to retire rich
              </Link>
            </li>
            <li>
              <Link href="/safe-withdrawal-rate-for-retirement">
                Safe withdrawal strategies explained
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-your-net-worth-generate">
                How much income your net worth can generate
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
            Retiring comfortably usually means aiming above the minimum. You are
            not just buying income — you are buying flexibility, resilience, and
            a more stable future.
          </p>

          <p className={styles.paragraph}>
            For many people, comfort starts when the portfolio can support both
            core living costs and a realistic margin for inflation, healthcare,
            and changing priorities.
          </p>

          <p className={styles.paragraph}>
            The right number is the one that gives you confidence your
            retirement can keep working long after the excitement of leaving work
            wears off.
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
