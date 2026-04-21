import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "How Much Will I Have If I Invest Every Month? Examples, Growth, and What Matters Most",
  description:
    "See how much monthly investing could grow over time, compare real examples, and understand why time and consistency often matter more than chasing return.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much will I have if I invest every month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your monthly contribution, your time horizon, and your average return. A calculator gives the fastest estimate for your own scenario.",
      },
    },
    {
      "@type": "Question",
      name: "Is a small monthly investment worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Over time, even small monthly investments can grow meaningfully because each new contribution has a chance to compound.",
      },
    },
    {
      "@type": "Question",
      name: "What matters more: time or return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both matter, but time is often more powerful than people expect. A longer timeline can create a much larger balance even without unusually high returns.",
      },
    },
    {
      "@type": "Question",
      name: "Why does investing every month work well for many people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monthly investing works well because it builds consistency, adds fresh capital regularly, and gives each contribution time to compound.",
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
          <span className={styles.eyebrow}>MONTHLY INVESTING GUIDE</span>

          <h1 className={styles.title}>
            How Much Will I Have If I Invest Every Month?
          </h1>

          <p className={styles.lead}>
            Monthly investing can build more than many people expect. The final
            number is not driven only by how much you contribute. It is also shaped
            by how long your money stays invested and how much time compounding has
            to work.
          </p>

          <p className={styles.intro}>
            This guide walks through realistic examples, explains why monthly
            investing works, and shows why consistency and time often matter more
            than trying to find a perfect return or entry point.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              In most realistic scenarios, extending your timeline by a few years
              can change the final balance more than chasing a slightly higher rate
              of return.
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
              <a href="#examples" className={styles.tocLink}>
                Monthly investing examples
              </a>
            </li>
            <li>
              <a href="#why-it-works" className={styles.tocLink}>
                Why investing every month works
              </a>
            </li>
            <li>
              <a href="#what-matters-most" className={styles.tocLink}>
                What matters most in the final result
              </a>
            </li>
            <li>
              <a href="#why-the-question-matters" className={styles.tocLink}>
                Why this question matters
              </a>
            </li>
            <li>
              <a href="#faq" className={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <section id="examples" className={styles.section} aria-labelledby="examples-title">
          <h2 id="examples-title" className={styles.sectionTitle}>
            Monthly investing examples
          </h2>

          <p className={styles.paragraph}>
            These simplified examples assume a 7% average annual return over 20
            years with regular monthly contributions:
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly investment</th>
                  <th className={styles.tableHead}>Estimated balance after 20 years</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>$100/month</td>
                  <td className={styles.tableCell}>about $52,000</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>$300/month</td>
                  <td className={styles.tableCell}>about $156,000</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>$500/month</td>
                  <td className={styles.tableCell}>about $260,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The pattern matters more than the exact rounded number. Growth is not
            driven only by deposits. It accelerates because each contribution has a
            chance to earn returns, and later returns are applied to a balance that
            has already grown.
          </p>

          <div className={styles.tipBox}>
            <p className={styles.tipTitle}>What the table really shows</p>
            <p className={styles.tipText}>
              Monthly investing is not just about adding money. It is about giving
              each contribution enough time to start participating in compound
              growth.
            </p>
          </div>
        </section>

        <section
          id="why-it-works"
          className={styles.section}
          aria-labelledby="why-it-works-title"
        >
          <h2 id="why-it-works-title" className={styles.sectionTitle}>
            Why investing every month works
          </h2>

          <ul className={styles.list}>
            <li>It builds consistency without requiring perfect timing.</li>
            <li>It keeps adding fresh capital to the account regularly.</li>
            <li>It gives every new contribution a chance to compound.</li>
            <li>It works even if you start with a small amount.</li>
          </ul>

          <p className={styles.paragraph}>
            This is one reason monthly investing feels more practical for many
            people than waiting to invest a large lump sum later. It turns the
            process into a repeatable habit instead of a one-time decision.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What people often underestimate</p>
            <p className={styles.noteText}>
              Many people focus only on return. In real long-term investing,
              contribution discipline and time are often the stronger drivers of
              the final result.
            </p>
          </div>
        </section>

        <section
          id="what-matters-most"
          className={styles.section}
          aria-labelledby="what-matters-most-title"
        >
          <h2 id="what-matters-most-title" className={styles.sectionTitle}>
            What matters most in the final result
          </h2>

          <p className={styles.paragraph}>
            If you are trying to estimate how much you could have, three variables
            usually matter most:
          </p>

          <ul className={styles.list}>
            <li>your monthly contribution amount</li>
            <li>your investment timeline</li>
            <li>your average rate of return</li>
          </ul>

          <p className={styles.paragraph}>
            Most people expect return to be the main factor. In practice, time
            often does more work than they realize. A longer timeline gives your
            contributions and gains more chances to build on each other.
          </p>

          <p className={styles.paragraph}>
            That is why an ordinary return sustained for many years can still
            produce a meaningful balance. The math is less about a lucky number and
            more about repeated contributions plus time.
          </p>
        </section>

        <section
          id="why-the-question-matters"
          className={styles.section}
          aria-labelledby="why-the-question-matters-title"
        >
          <h2 id="why-the-question-matters-title" className={styles.sectionTitle}>
            Why this question matters
          </h2>

          <p className={styles.paragraph}>
            This question is not just about curiosity. It is about planning. Once
            you have a rough estimate of what monthly investing could become, it is
            easier to decide whether you should increase your contribution, extend
            your timeline, or adjust your expectations.
          </p>

          <p className={styles.paragraph}>
            A calculator is especially useful here because it lets you test
            different monthly amounts and timeframes quickly instead of relying on a
            vague guess.
          </p>
        </section>

        <section className={styles.ctaSection} aria-labelledby="cta-title">
          <div className={styles.ctaBox}>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Test your own monthly investing scenario
            </h2>
            <p className={styles.ctaText}>
              Change the monthly amount, timeline, starting balance, and return
              assumptions to see how your future balance could change.
            </p>
            <Link
              href="/compound-interest-calculator"
              className={styles.ctaButton}
            >
              Calculate your investment growth
            </Link>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="faq-title">
          <h2 id="faq-title" className={styles.sectionTitle}>
            Frequently asked questions
          </h2>

          <h3 className={styles.questionTitle}>
            How much will I have if I invest every month?
          </h3>
          <p className={styles.paragraph}>
            It depends on your monthly contribution, your timeline, and your
            average return. A calculator gives the fastest estimate for your own
            scenario.
          </p>

          <h3 className={styles.questionTitle}>
            Is a small monthly investment worth it?
          </h3>
          <p className={styles.paragraph}>
            Yes. Over time, even small monthly amounts can grow meaningfully
            because each contribution has a chance to compound.
          </p>

          <h3 className={styles.questionTitle}>
            What matters more: time or return?
          </h3>
          <p className={styles.paragraph}>
            Both matter, but time is often more powerful than people expect. A
            longer timeline can create a much larger balance even without unusually
            high returns.
          </p>

          <h3 className={styles.questionTitle}>
            Why does monthly investing work well for many people?
          </h3>
          <p className={styles.paragraph}>
            It builds consistency, keeps adding new capital, and allows each
            contribution to participate in compound growth over time.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="related-guides-title">
          <div className={styles.sectionHeader}>
            <h2 id="related-guides-title" className={styles.sectionTitle}>
              Related guides
            </h2>
            <p className={styles.relatedIntro}>
              Explore the next pages that help you understand the math, the
              timeline, and the return side of the equation.
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
                Understand the formula and see why recurring contributions change
                the math.
              </span>
            </Link>

            <Link
              href="/how-long-does-it-take-to-double-your-money"
              className={styles.relatedCard}
            >
              <span className={styles.relatedLabel}>Time</span>
              <strong className={styles.relatedTitle}>
                How Long Does It Take to Double Your Money?
              </strong>
              <span className={styles.relatedText}>
                Turn return assumptions into a rough timeline and compare growth
                speed.
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
                See how return, time, and contribution size work together when you
                plan toward a target.
              </span>
            </Link>
          </nav>
        </section>

        <section className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            Want to test different monthly amounts and timeframes with your own
            numbers?
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