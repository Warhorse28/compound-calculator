import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "How Long Does It Take to Double Your Money? Rule of 72 Explained With Examples",
  description:
    "Learn how long it may take to double your money using the Rule of 72, compare return rates, and see when a calculator gives a more realistic estimate.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to double your money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fast estimate comes from the Rule of 72. Divide 72 by your annual return rate to estimate how many years it may take for your money to double.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Rule of 72?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Rule of 72 is a shortcut used to estimate how long it takes for money to double at a fixed annual return rate.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Rule of 72 work for investing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, as a rough estimate. It is useful for quick comparisons and planning, but a calculator gives a more exact result for real scenarios.",
      },
    },
    {
      "@type": "Question",
      name: "What matters more: time or return rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both matter, but time is often more powerful than people expect. A longer holding period can change results dramatically even without extreme returns.",
      },
    },
  ],
};

export default function Page() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className={styles.article}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>RULE OF 72 GUIDE</span>

          <h1 className={styles.title}>
            How Long Does It Take to Double Your Money? Rule of 72 Explained
          </h1>

          <p className={styles.lead}>
            The Rule of 72 is one of the fastest ways to turn a return percentage
            into a time estimate. Instead of thinking only in terms of annual
            return, you can quickly estimate how many years your money may need to
            double.
          </p>

          <p className={styles.intro}>
            That makes it useful for planning, comparing scenarios, and judging how
            much a small change in return can affect long-term growth. It is not a
            precise calculator, but it is a strong mental shortcut.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              The Rule of 72 works because it translates abstract percentages into a
              timeline. Once you think in years instead of just returns, long-term
              investing becomes much easier to evaluate.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link
              href="/compound-interest-calculator"
              className={styles.primaryCta}
            >
              Use the compound interest calculator
            </Link>
            <Link
              href="/how-to-calculate-compound-interest"
              className={styles.secondaryLink}
            >
              Learn the compound interest formula
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#what-rule-72-means" className={styles.tocLink}>
                What the Rule of 72 means
              </a>
            </li>
            <li>
              <a href="#examples" className={styles.tocLink}>
                Real doubling-time examples
              </a>
            </li>
            <li>
              <a href="#why-it-matters" className={styles.tocLink}>
                Why doubling time matters
              </a>
            </li>
            <li>
              <a href="#where-it-works" className={styles.tocLink}>
                Where the rule is useful — and where it is not
              </a>
            </li>
            <li>
              <a href="#faq" className={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <section
          id="what-rule-72-means"
          className={styles.section}
          aria-labelledby="what-rule-72-means-title"
        >
          <h2 id="what-rule-72-means-title" className={styles.sectionTitle}>
            What the Rule of 72 actually means
          </h2>

          <p className={styles.paragraph}>
            The Rule of 72 gives you a rough estimate of how many years it may take
            for your money to double at a fixed annual return rate.
          </p>

          <div className={styles.formulaBox}>
            <code className={styles.formula}>
              72 ÷ annual return rate = estimated years to double
            </code>
          </div>

          <p className={styles.paragraph}>That means:</p>

          <ul className={styles.list}>
            <li>6% annual return → about 12 years</li>
            <li>8% annual return → about 9 years</li>
            <li>12% annual return → about 6 years</li>
          </ul>

          <p className={styles.paragraph}>
            It is not exact math. It is a fast planning shortcut. That is what
            makes it useful: it helps you think in time, not only in percentages.
          </p>
        </section>

        <section
          id="examples"
          className={styles.section}
          aria-labelledby="examples-title"
        >
          <h2 id="examples-title" className={styles.sectionTitle}>
            Real doubling-time examples
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Annual return</th>
                  <th className={styles.tableHead}>
                    Estimated years to double
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>4%</td>
                  <td className={styles.tableCell}>18 years</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>6%</td>
                  <td className={styles.tableCell}>12 years</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>8%</td>
                  <td className={styles.tableCell}>9 years</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>10%</td>
                  <td className={styles.tableCell}>7.2 years</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>12%</td>
                  <td className={styles.tableCell}>6 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            These examples show why return rate matters, but they also show
            something deeper: time magnifies small differences. A return that looks
            only slightly better on paper can shorten the doubling timeline more
            than most people expect.
          </p>

          <div className={styles.tipBox}>
            <p className={styles.tipTitle}>What the table really shows</p>
            <p className={styles.tipText}>
              The Rule of 72 is useful because it makes the tradeoff visible. A few
              percentage points can move the timeline by years, not just months.
            </p>
          </div>
        </section>

        <section
          id="why-it-matters"
          className={styles.section}
          aria-labelledby="why-it-matters-title"
        >
          <h2 id="why-it-matters-title" className={styles.sectionTitle}>
            Why doubling time matters
          </h2>

          <p className={styles.paragraph}>
            A lot of investing advice speaks in percentages. The Rule of 72 turns
            that into something easier to feel. Instead of hearing “8% per year,”
            you start thinking, “my money may double in about 9 years.”
          </p>

          <p className={styles.paragraph}>
            That shift matters because it makes long-term growth easier to compare.
            Patience stops feeling abstract. It becomes measurable.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>Why this is useful</p>
            <p className={styles.noteText}>
              The Rule of 72 helps with quick comparison, but it also improves your
              investing intuition. It makes the relationship between return and time
              easier to judge before you open a calculator.
            </p>
          </div>
        </section>

        <section
          id="where-it-works"
          className={styles.section}
          aria-labelledby="where-it-works-title"
        >
          <h2 id="where-it-works-title" className={styles.sectionTitle}>
            Where the rule is useful — and where it is not
          </h2>

          <p className={styles.paragraph}>
            The Rule of 72 works best as a quick estimate. It is useful when you
            want to compare fixed annual return assumptions quickly.
          </p>

          <ul className={styles.list}>
            <li>good for rough return comparisons</li>
            <li>good for planning conversations</li>
            <li>good for building long-term investing intuition</li>
          </ul>

          <p className={styles.paragraph}>
            It becomes less useful when your returns are irregular, when
            contributions change over time, or when you need a more exact forecast.
          </p>

          <p className={styles.paragraph}>
            That is where a calculator becomes more practical. The Rule of 72 gives
            intuition. The calculator gives a more realistic estimate for your own
            numbers.
          </p>
        </section>

        <section className={styles.ctaSection} aria-labelledby="cta-title">
          <div className={styles.ctaBox}>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Test your own doubling timeline
            </h2>
            <p className={styles.ctaText}>
              Change the return rate, starting balance, contributions, and time
              horizon to see how fast your money could realistically grow.
            </p>
            <Link
              href="/compound-interest-calculator"
              className={styles.ctaButton}
            >
              Calculate your investment growth
            </Link>
          </div>
        </section>

        <section id="faq" className={styles.section} aria-labelledby="faq-title">
          <h2 id="faq-title" className={styles.sectionTitle}>
            Frequently asked questions
          </h2>

          <h3 className={styles.questionTitle}>
            How long does it take to double your money?
          </h3>
          <p className={styles.paragraph}>
            A fast estimate comes from the Rule of 72. Divide 72 by your annual
            return rate to estimate how many years it may take for your money to
            double.
          </p>

          <h3 className={styles.questionTitle}>What is the Rule of 72?</h3>
          <p className={styles.paragraph}>
            It is a shortcut used to estimate how long it takes for money to double
            at a fixed annual return rate.
          </p>

          <h3 className={styles.questionTitle}>
            Does the Rule of 72 work for investing?
          </h3>
          <p className={styles.paragraph}>
            Yes, as a rough estimate. It is useful for quick comparisons and
            planning, but a calculator gives a more exact result for real
            scenarios.
          </p>

          <h3 className={styles.questionTitle}>
            What matters more: time or return rate?
          </h3>
          <p className={styles.paragraph}>
            Both matter, but time is often more powerful than people expect. A
            longer holding period can make a major difference even when the return
            rate is not extreme.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="related-guides-title">
          <div className={styles.sectionHeader}>
            <h2 id="related-guides-title" className={styles.sectionTitle}>
              Related guides
            </h2>
            <p className={styles.relatedIntro}>
              Explore the math, the monthly investing side, and the planning side
              of long-term growth.
            </p>
          </div>

          <nav className={styles.relatedGrid} aria-label="Related guides">
            <Link
              href="/how-to-calculate-compound-interest"
              className={styles.relatedCard}
            >
              <span className={styles.relatedLabel}>Guide</span>
              <strong className={styles.relatedTitle}>
                How to Calculate Compound Interest
              </strong>
              <span className={styles.relatedText}>
                Learn the core formula and see how compounding works step by step.
              </span>
            </Link>

            <Link
              href="/how-much-will-i-have-if-i-invest-every-month"
              className={styles.relatedCard}
            >
              <span className={styles.relatedLabel}>Scenario</span>
              <strong className={styles.relatedTitle}>
                How Much Will I Have If I Invest Every Month?
              </strong>
              <span className={styles.relatedText}>
                See how regular monthly investing can build over time with real
                examples.
              </span>
            </Link>

            <Link
              href="/what-interest-rate-do-i-need-to-reach-my-investment-goal"
              className={styles.relatedCard}
            >
              <span className={styles.relatedLabel}>Planning</span>
              <strong className={styles.relatedTitle}>
                What Interest Rate Do I Need to Reach My Investment Goal?
              </strong>
              <span className={styles.relatedText}>
                Compare time, return, and contribution size when you plan toward a
                target.
              </span>
            </Link>
          </nav>
        </section>

        <section className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            Want to estimate your own timeline, return, and growth path?
          </p>
          <Link
            href="/compound-interest-calculator"
            className={styles.bottomCtaLink}
          >
            Use the compound interest calculator
          </Link>
        </section>
      </article>
    </main>
  );
}