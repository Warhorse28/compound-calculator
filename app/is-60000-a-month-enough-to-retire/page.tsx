import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-60000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Is $60,000 a Month Enough to Retire Comfortably? How Extreme Does It Get?";
const pageTitle =
  "Is $60,000 a Month Enough to Retire Comfortably? How Extreme Does It Get?";
const pageDescription =
  "See if $60,000 a month is enough to retire. Understand lifestyle, flexibility, healthcare, travel, and long-term financial stability at this level.";

const breakdownRows = [
  {
    category: "Lifestyle feel",
    description:
      "$60,000 a month supports an extremely high-end retirement where financial stress is virtually nonexistent and lifestyle choices feel unlimited.",
  },
  {
    category: "Housing flexibility",
    description:
      "Luxury real estate, multiple homes, and prime global locations become easily sustainable without forcing tradeoffs.",
  },
  {
    category: "Healthcare",
    description:
      "Healthcare becomes a non-issue financially, with full access to top-tier care, private services, and strong protection against major costs.",
  },
  {
    category: "Travel",
    description:
      "Travel becomes fully flexible, with the ability to sustain luxury, long stays, and spontaneous decisions anywhere in the world.",
  },
  {
    category: "Financial margin",
    description:
      "$60,000 a month creates an extreme financial buffer, making retirement highly resistant to inflation, volatility, and long-term risks.",
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
            $60,000 a month is far beyond what most retirees need. It creates a
            level of financial freedom where almost every decision feels easy,
            flexible, and low stress.
          </p>

          <p className={styles.intro}>
            At this level, housing, healthcare, travel, and lifestyle choices
            can all operate at a premium level without pressure. Retirement
            becomes about preference, not limitation.
          </p>

          <p className={styles.intro}>
            The real question is no longer whether it is enough. It is how much
            additional value higher income actually creates once everything is
            already covered.
          </p>

          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              <strong>Key insight:</strong> $60,000 a month supports an
              extremely high-end retirement, but beyond this level, the gains
              become more about comfort and convenience than necessity.
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
            Is $60,000 a month enough to retire comfortably?
          </h2>

          <p className={styles.paragraph}>
            In virtually all scenarios, yes. $60,000 a month can support an
            elite retirement with full flexibility, minimal financial pressure,
            and a very large margin for uncertainty.
          </p>

          <p className={styles.paragraph}>
            At this level, retirement becomes less about managing money and more
            about shaping your lifestyle exactly how you want it.
          </p>

          <p className={styles.paragraph}>
            The biggest change is psychological. Financial decisions stop feeling
            heavy and start feeling almost irrelevant in day-to-day life.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What $60,000 a month can support
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Category</th>
                  <th className={styles.tableHead}>
                    What $60,000 a month means
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
            At this point, income is not the limiting factor. Lifestyle choices,
            preferences, and long-term planning become the main variables.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Where $60,000 a month stands out
          </h2>

          <ul className={styles.list}>
            <li>multiple luxury homes become sustainable</li>
            <li>healthcare costs feel insignificant</li>
            <li>travel becomes global and unrestricted</li>
            <li>unexpected costs have minimal impact</li>
            <li>retirement feels extremely stable and predictable</li>
          </ul>

          <p className={styles.paragraph}>
            Financial friction is almost completely removed at this level. That
            changes how retirement feels in a fundamental way.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            When $60,000 a month may still have limits
          </h2>

          <p className={styles.paragraph}>
            Ultra-high-end lifestyles, global mobility, and large financial
            commitments can still increase costs significantly. Expectations can
            grow with income.
          </p>

          <p className={styles.paragraph}>
            Even so, $60,000 a month places you in a position where most
            financial concerns are minimized or eliminated.
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
                href="/is-50000-a-month-enough-to-retire"
                className={styles.bottomCtaLink}
              >
                Is $50,000 a month enough to retire?
              </Link>
            </li>
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
            $60,000 a month is more than enough for an elite retirement. The
            biggest advantage is not just lifestyle, but how effortless and
            stable everything becomes.
          </p>

          <p className={styles.paragraph}>
            At this level, the focus shifts from income to how you want to use
            your time, energy, and freedom long term.
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
