import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-50000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $50,000 a Month Enough to Retire Comfortably? What This Level Really Feels Like";
const pageTitle =
  "Is $50,000 a Month Enough to Retire Comfortably? What This Level Really Feels Like";
const pageDescription =
  "See if $50,000 a month is enough to retire. Understand lifestyle, flexibility, healthcare, travel, and long-term financial stability at this level.";

const breakdownRows = [
  {
    category: "Lifestyle feel",
    description:
      "$50,000 a month supports a top-tier retirement lifestyle where financial decisions feel effortless and day-to-day pressure is almost nonexistent.",
  },
  {
    category: "Housing flexibility",
    description:
      "Luxury housing options become widely accessible, including prime real estate, multiple properties, and premium locations without meaningful tradeoffs.",
  },
  {
    category: "Healthcare",
    description:
      "Healthcare becomes highly secure, with access to premium insurance, private care, and strong protection against large or unexpected costs.",
  },
  {
    category: "Travel",
    description:
      "Frequent international travel, luxury experiences, and flexible planning become easy to sustain over long periods.",
  },
  {
    category: "Financial margin",
    description:
      "$50,000 a month creates an extremely large financial buffer, making retirement highly resilient against inflation, uncertainty, and long-term risks.",
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
          <div className={styles.eyebrow}>Retirement income comparison</div>
          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            $50,000 a month is far beyond covering retirement needs. It creates
            a level of financial ease where most decisions feel simple,
            flexible, and low stress.
          </p>

          <p className={styles.intro}>
            At this level, housing, healthcare, travel, and lifestyle choices
            can all coexist without pressure. Retirement becomes less about
            managing money and more about enjoying freedom.
          </p>

          <p className={styles.intro}>
            Still, even very high income raises an important question. How much
            additional comfort and flexibility does more money actually bring at
            this level?
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $50,000 a month supports an
              ultra-comfortable retirement, but the real advantage is how
              effortless, stable, and flexible financial decisions become over
              time.
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
            Is $50,000 a month enough to retire comfortably?
          </h2>

          <p className={styles.paragraph}>
            In almost every scenario, yes. $50,000 a month can support a
            high-end retirement with minimal financial pressure and strong
            flexibility across all major expenses.
          </p>

          <p className={styles.paragraph}>
            At this level, retirement stops feeling like a budget. It starts
            feeling like full control over how you live, travel, and spend your
            time.
          </p>

          <p className={styles.paragraph}>
            The focus shifts from “can I afford this?” to “how do I want to
            structure my lifestyle long term?”
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $50,000 a month can support
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>
                    What $50,000 a month means
                  </th>
                </tr>
              </thead>
              <tbody>
                {breakdownRows.map((row) => (
                  <tr key={row.category}>
                    <td className={styles.tableCellStrong}>{row.category}</td>
                    <td className={styles.tableCell}>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The key advantage here is not just spending power. It is the ability
            to sustain multiple high-cost priorities at the same time without
            creating stress or tradeoffs.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $50,000 a month stands out
          </h2>

          <ul className={styles.list}>
            <li>luxury housing becomes easy to maintain long term</li>
            <li>healthcare costs feel far less impactful</li>
            <li>travel becomes flexible and premium by default</li>
            <li>unexpected expenses are easier to absorb</li>
            <li>retirement feels extremely stable and predictable</li>
          </ul>

          <p className={styles.paragraph}>
            At this level, financial friction becomes very low. That changes how
            retirement feels on a daily basis.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $50,000 a month may still have limits
          </h2>

          <p className={styles.paragraph}>
            Ultra-luxury lifestyles, multiple high-end properties, and global
            living can still push expenses higher. The ceiling depends on how
            ambitious the lifestyle is.
          </p>

          <p className={styles.paragraph}>
            In those cases, $50,000 a month is still powerful, but expectations
            can grow alongside income.
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See what your retirement could look like
            </h2>
            <p className={styles.ctaText}>
              Use the calculator to estimate how much income your investments
              could generate.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Explore related retirement pages
          </h2>

          <ul className={styles.list}>
            <li>
              <Link
                href="/is-40000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $40,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-60000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $60,000 a month enough to retire?
              </Link>
            </li>
            <li>
              <Link
                href="/is-30000-vs-40000-a-month-retirement"
                className={styles.bottomCtaLink}
              >
                $30,000 vs $40,000 comparison
              </Link>
            </li>
            <li>
              <Link href={calculatorPath} className={styles.bottomCtaLink}>
                Compound interest calculator
              </Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $50,000 a month is enough for an ultra-comfortable retirement in
            most situations. The biggest benefit is not just lifestyle, but how
            easy and stable everything feels.
          </p>

          <p className={styles.paragraph}>
            The smartest move is still to test your numbers and compare them to
            your real expectations before making long-term decisions.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to test your own plan?
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
