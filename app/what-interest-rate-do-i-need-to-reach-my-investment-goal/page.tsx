import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "What Interest Rate Do I Need to Reach My Investment Goal? Examples and Calculator",
  description:
    "Estimate the return you may need to reach your investment goal, compare realistic scenarios, and see when time or contributions matter more than return.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What interest rate do I need to reach my investment goal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your target amount, contribution size, starting balance, and timeline. A calculator is the fastest way to estimate what kind of return may be required.",
      },
    },
    {
      "@type": "Question",
      name: "Is a higher return always the best solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. In many cases, increasing your monthly contribution or extending your timeline is more realistic than assuming much higher returns.",
      },
    },
    {
      "@type": "Question",
      name: "Can I reach my goal with a lower return if I invest more?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A larger contribution can reduce the return required to reach the same target.",
      },
    },
    {
      "@type": "Question",
      name: "How do I estimate the return I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest way is to test different combinations of time, contributions, starting balance, and return assumptions in a calculator.",
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
          <span className={styles.eyebrow}>INVESTMENT PLANNING GUIDE</span>

          <h1 className={styles.title}>
            What Interest Rate Do I Need to Reach My Investment Goal?
          </h1>

          <p className={styles.lead}>
            If you have a target balance in mind, the real question is not only
            where to invest. It is what combination of return, time, and
            contribution gives you a realistic chance of getting there.
          </p>

          <p className={styles.intro}>
            Many people assume the answer is simply to earn a higher return. In
            practice, the return required often drops meaningfully when you
            extend the timeline, invest more each month, or start from a larger
            base.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              If the return required to hit your goal looks too aggressive, the
              problem may not be the goal itself. It may be the current mix of
              timeline, contribution size, and expectations.
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
              href="/how-much-will-i-have-if-i-invest-every-month"
              className={styles.secondaryLink}
            >
              See monthly investing examples
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#what-determines-return" className={styles.tocLink}>
                What determines the return you need
              </a>
            </li>
            <li>
              <a href="#examples" className={styles.tocLink}>
                Real examples with different plans
              </a>
            </li>
            <li>
              <a href="#higher-return" className={styles.tocLink}>
                When a higher return is not the real answer
              </a>
            </li>
            <li>
              <a href="#how-to-think" className={styles.tocLink}>
                How to think about your goal more realistically
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
          id="what-determines-return"
          className={styles.section}
          aria-labelledby="what-determines-return-title"
        >
          <h2
            id="what-determines-return-title"
            className={styles.sectionTitle}
          >
            What determines the return you need
          </h2>

          <p className={styles.paragraph}>
            The return required to reach a goal depends on four main variables:
          </p>

          <ul className={styles.list}>
            <li>your target amount</li>
            <li>your starting balance</li>
            <li>how much you contribute regularly</li>
            <li>how long your money has to grow</li>
          </ul>

          <p className={styles.paragraph}>
            Most people focus almost entirely on return. In reality,
            contribution size and time are often just as important, and they are
            usually easier to control.
          </p>
        </section>

        <section
          id="examples"
          className={styles.section}
          aria-labelledby="examples-title"
        >
          <h2 id="examples-title" className={styles.sectionTitle}>
            Real examples with different plans
          </h2>

          <p className={styles.paragraph}>
            Imagine you want to reach <strong>$100,000</strong>. The return you
            need can change dramatically when you change only one other input.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly contribution</th>
                  <th className={styles.tableHead}>Time horizon</th>
                  <th className={styles.tableHead}>Required return</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>$300</td>
                  <td className={styles.tableCell}>10 years</td>
                  <td className={styles.tableCell}>High</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>$500</td>
                  <td className={styles.tableCell}>10 years</td>
                  <td className={styles.tableCell}>Moderate</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>$500</td>
                  <td className={styles.tableCell}>15 years</td>
                  <td className={styles.tableCell}>Much lower</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The point is not the exact percentage in each row. The point is that
            the return required can move a lot when you change just one other
            variable. That is why focusing only on rate can lead to poor
            planning.
          </p>

          <div className={styles.tipBox}>
            <p className={styles.tipTitle}>What the table really shows</p>
            <p className={styles.tipText}>
              Return is only one lever. In many cases, a little more time or a
              slightly larger monthly contribution can reduce the pressure to
              earn unrealistic returns.
            </p>
          </div>
        </section>

        <section
          id="higher-return"
          className={styles.section}
          aria-labelledby="higher-return-title"
        >
          <h2 id="higher-return-title" className={styles.sectionTitle}>
            When a higher return is not the real answer
          </h2>

          <p className={styles.paragraph}>
            A lot of people assume the solution is to find a better investment.
            Sometimes that helps. Often it does not solve the real problem.
          </p>

          <p className={styles.paragraph}>
            If your goal is close, your contribution is small, and your timeline
            is short, asking for a much higher return may push you toward
            unrealistic assumptions or unnecessary risk.
          </p>

          <p className={styles.paragraph}>
            In many situations, the more realistic move is simpler:
          </p>

          <ul className={styles.list}>
            <li>invest a bit more each month</li>
            <li>give the plan more time</li>
            <li>adjust the target to something more practical</li>
          </ul>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What this usually means</p>
            <p className={styles.noteText}>
              If the required return feels too aggressive, that does not always
              mean your goal is impossible. It often means the plan needs a
              better balance between time, contribution level, and expected
              return.
            </p>
          </div>
        </section>

        <section
          id="how-to-think"
          className={styles.section}
          aria-labelledby="how-to-think-title"
        >
          <h2 id="how-to-think-title" className={styles.sectionTitle}>
            How to think about your goal more realistically
          </h2>

          <p className={styles.paragraph}>
            A good plan is not just “what return do I need?” A better question
            is: “what combination of time, contribution, and return gives me the
            best chance of reaching this goal?”
          </p>

          <p className={styles.paragraph}>
            That is why calculators are useful. They let you compare multiple
            paths instead of getting stuck on one fragile assumption.
          </p>

          <p className={styles.paragraph}>
            You may discover that the gap between your current plan and your goal
            is smaller than it looks once you adjust one practical lever.
          </p>
        </section>

        <section className={styles.ctaSection} aria-labelledby="cta-title">
          <div className={styles.ctaBox}>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Compare the return, time, and contribution mix
            </h2>
            <p className={styles.ctaText}>
              Test different timelines, monthly amounts, and return assumptions
              to see which combinations give your goal a realistic path.
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
            What interest rate do I need to reach my investment goal?
          </h3>
          <p className={styles.paragraph}>
            It depends on your target amount, contribution size, starting
            balance, and timeline. A calculator is the fastest way to estimate
            what kind of return may be required.
          </p>

          <h3 className={styles.questionTitle}>
            Is a higher return always the best solution?
          </h3>
          <p className={styles.paragraph}>
            No. In many cases, increasing your monthly contribution or extending
            your timeline is more realistic than assuming much higher returns.
          </p>

          <h3 className={styles.questionTitle}>
            Can I reach my goal with a lower return if I invest more?
          </h3>
          <p className={styles.paragraph}>
            Yes. A larger contribution can reduce the return required to reach
            the same target.
          </p>

          <h3 className={styles.questionTitle}>
            How do I estimate the return I need?
          </h3>
          <p className={styles.paragraph}>
            The easiest way is to test different combinations of time,
            contributions, starting balance, and return assumptions in a
            calculator.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="related-guides-title">
          <div className={styles.sectionHeader}>
            <h2 id="related-guides-title" className={styles.sectionTitle}>
              Related guides
            </h2>
            <p className={styles.relatedIntro}>
              Explore the formula, monthly investing scenarios, and time-based
              planning questions around your goal.
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
                Understand the formula, the core variables, and how long-term
                growth builds.
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
                Compare recurring deposit outcomes and see how consistency
                changes the result.
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
                Turn return assumptions into a time estimate and compare growth
                speed.
              </span>
            </Link>
          </nav>
        </section>

        <section className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            Need to compare different timelines and contribution levels with your
            own numbers?
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
