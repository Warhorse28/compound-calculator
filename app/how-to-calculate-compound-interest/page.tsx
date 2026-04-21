import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "How to Calculate Compound Interest: Formula, Examples, and Monthly Contributions",
  description:
    "Learn how to calculate compound interest, understand the formula, compare it with simple interest, and see why monthly contributions are better modeled with a calculator.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is compound interest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compound interest is growth earned on both your original balance and the interest already added over time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the formula for compound interest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard formula is A = P (1 + r / n)^(n × t), where A is final amount, P is principal, r is annual interest rate, n is compounding frequency, and t is time in years.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the standard formula with monthly contributions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not cleanly. Once recurring monthly deposits are involved, a month-by-month method or calculator is usually more practical and accurate.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between compound interest and simple interest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple interest is calculated only on the original principal, while compound interest is calculated on both the principal and previously earned interest.",
      },
    },
    {
      "@type": "Question",
      name: "Why does compound growth accelerate over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compound growth accelerates because each new round of returns is applied to a balance that has already grown.",
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
          <span className={styles.eyebrow}>COMPOUND INTEREST GUIDE</span>

          <h1 className={styles.title}>
            How to Calculate Compound Interest: Formula, Examples, and Monthly
            Contributions
          </h1>

          <p className={styles.lead}>
            The basic compound interest formula works well for one-time deposits.
            Once you start adding money every month, a calculator or month-by-month
            method becomes a more realistic way to project growth.
          </p>

          <p className={styles.intro}>
            This guide explains the standard formula, shows how compound interest
            differs from simple interest, and breaks down why recurring
            contributions change the math in real investing scenarios.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              The formula explains the mechanism. A calculator is better for real
              monthly investing because every contribution starts compounding at a
              different time.
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
              <a href="#formula" className={styles.tocLink}>
                The compound interest formula
              </a>
            </li>
            <li>
              <a href="#simple-vs-compound" className={styles.tocLink}>
                Simple interest vs compound interest
              </a>
            </li>
            <li>
              <a href="#basic-example" className={styles.tocLink}>
                Example without monthly contributions
              </a>
            </li>
            <li>
              <a href="#monthly-contributions" className={styles.tocLink}>
                What changes with monthly contributions
              </a>
            </li>
            <li>
              <a href="#practical-method" className={styles.tocLink}>
                A practical month-by-month method
              </a>
            </li>
            <li>
              <a href="#mistakes" className={styles.tocLink}>
                Common mistakes
              </a>
            </li>
            <li>
              <a href="#faq" className={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <section id="formula" className={styles.section} aria-labelledby="formula-title">
          <h2 id="formula-title" className={styles.sectionTitle}>
            The compound interest formula
          </h2>

          <p className={styles.paragraph}>
            The standard formula for compound interest is:
          </p>

          <div className={styles.formulaBox}>
            <code className={styles.formula}>A = P (1 + r / n)^(n × t)</code>
          </div>

          <p className={styles.paragraph}>Where:</p>

          <ul className={styles.list}>
            <li>
              <strong>A</strong> = final amount
            </li>
            <li>
              <strong>P</strong> = principal, or starting balance
            </li>
            <li>
              <strong>r</strong> = annual interest rate in decimal form
            </li>
            <li>
              <strong>n</strong> = number of compounding periods per year
            </li>
            <li>
              <strong>t</strong> = time in years
            </li>
          </ul>

          <p className={styles.paragraph}>
            This formula is most useful when you are analyzing a lump sum without
            additional deposits. It gives you a clean way to estimate how one
            starting balance grows when returns are compounded over time.
          </p>
        </section>

        <section
          id="simple-vs-compound"
          className={styles.section}
          aria-labelledby="simple-vs-compound-title"
        >
          <h2 id="simple-vs-compound-title" className={styles.sectionTitle}>
            Simple interest vs compound interest
          </h2>

          <p className={styles.paragraph}>
            The difference between simple and compound interest is not minor. It
            changes how the balance behaves as time passes.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Type</th>
                  <th className={styles.tableHead}>How it works</th>
                  <th className={styles.tableHead}>Typical result over time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCellStrong}>Simple interest</td>
                  <td className={styles.tableCell}>
                    Interest is calculated only on the original principal.
                  </td>
                  <td className={styles.tableCell}>
                    Growth is linear and easier to estimate.
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableCellStrong}>Compound interest</td>
                  <td className={styles.tableCell}>
                    Interest is calculated on principal plus previously earned
                    interest.
                  </td>
                  <td className={styles.tableCell}>
                    Growth tends to accelerate because gains keep stacking on a
                    larger base.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            For investing, compound interest is usually the more realistic model
            because real balances can keep earning returns on prior gains, not just
            on the original deposit.
          </p>
        </section>

        <section
          id="basic-example"
          className={styles.section}
          aria-labelledby="basic-example-title"
        >
          <h2 id="basic-example-title" className={styles.sectionTitle}>
            Example without monthly contributions
          </h2>

          <p className={styles.paragraph}>
            Suppose you invest <strong>$1,000</strong> at an annual rate of{" "}
            <strong>6%</strong>, compounded monthly, for <strong>10 years</strong>.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>P</strong> = 1000
            </li>
            <li>
              <strong>r</strong> = 0.06
            </li>
            <li>
              <strong>n</strong> = 12
            </li>
            <li>
              <strong>t</strong> = 10
            </li>
          </ul>

          <p className={styles.paragraph}>
            In that case, the formula estimates the ending balance. The more useful
            insight is not just the final number, but the shape of the growth:
            later years tend to matter more because each new return is being
            applied to a larger balance than before.
          </p>

          <div className={styles.tipBox}>
            <p className={styles.tipTitle}>Why this matters</p>
            <p className={styles.tipText}>
              Compound growth usually looks modest early and stronger later. That
              is why time has such an outsized effect on long-term results.
            </p>
          </div>
        </section>

        <section
          id="monthly-contributions"
          className={styles.section}
          aria-labelledby="monthly-contributions-title"
        >
          <h2 id="monthly-contributions-title" className={styles.sectionTitle}>
            What changes with monthly contributions?
          </h2>

          <p className={styles.paragraph}>
            Most people do not invest one amount once and leave it untouched. They
            contribute monthly. That changes the math because every deposit enters
            the account at a different time.
          </p>

          <p className={styles.paragraph}>
            A contribution made in month 1 compounds for much longer than one made
            in month 36. Once recurring deposits are involved, the standard formula
            becomes less practical as a day-to-day planning tool.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>Important distinction</p>
            <p className={styles.noteText}>
              The classic formula is clean for lump sums. Monthly investing plans
              are usually better modeled with an iterative month-by-month approach
              or a calculator that handles recurring deposits automatically.
            </p>
          </div>
        </section>

        <section
          id="practical-method"
          className={styles.section}
          aria-labelledby="practical-method-title"
        >
          <h2 id="practical-method-title" className={styles.sectionTitle}>
            A practical month-by-month method
          </h2>

          <p className={styles.paragraph}>
            A practical way to estimate growth with recurring deposits looks like
            this:
          </p>

          <div className={styles.formulaBox}>
            <code className={styles.formula}>
              new balance = previous balance × (1 + monthly rate) + monthly
              contribution
            </code>
          </div>

          <p className={styles.paragraph}>
            That calculation is repeated once per month across the full timeline.
            For real savings and investing scenarios, this method is often more
            useful than trying to squeeze every recurring deposit into one compact
            formula.
          </p>

          <h3 className={styles.subsectionTitle}>Worked example with monthly deposits</h3>

          <p className={styles.paragraph}>
            Let’s say you start with <strong>$2,000</strong>, add{" "}
            <strong>$300 per month</strong>, earn <strong>1% per month</strong>,
            and continue for <strong>60 months</strong>.
          </p>

          <p className={styles.paragraph}>
            In that setup, the ending balance depends heavily on three variables:
          </p>

          <ul className={styles.list}>
            <li>the starting balance</li>
            <li>the monthly contribution amount</li>
            <li>the length of time those contributions can compound</li>
          </ul>

          <p className={styles.paragraph}>
            This is exactly where a calculator becomes more useful than manual
            math. You can test scenarios in seconds instead of repeating the same
            monthly steps by hand.
          </p>
        </section>

        <section className={styles.ctaSection} aria-labelledby="cta-title">
          <div className={styles.ctaBox}>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Run your own numbers instantly
            </h2>
            <p className={styles.ctaText}>
              Test different starting balances, monthly contributions, rates, and
              timelines without doing every monthly step manually.
            </p>
            <Link
              href="/compound-interest-calculator"
              className={styles.ctaButton}
            >
              Try the compound interest calculator
            </Link>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="why-it-matters-title">
          <h2 id="why-it-matters-title" className={styles.sectionTitle}>
            Why compound interest matters over the long term
          </h2>

          <p className={styles.paragraph}>
            Time is one of the strongest variables in the equation. A return that
            looks ordinary over one or two years can become much more meaningful
            over one or two decades.
          </p>

          <p className={styles.paragraph}>
            Regular contributions amplify that effect because they keep increasing
            the base that future returns can build on. That is why the combination
            of time and consistency usually matters more than trying to find a
            perfect moment to start.
          </p>
        </section>

        <section
          id="mistakes"
          className={styles.section}
          aria-labelledby="mistakes-title"
        >
          <h2 id="mistakes-title" className={styles.sectionTitle}>
            Common mistakes
          </h2>

          <ul className={styles.list}>
            <li>Using an annual rate as if it were a monthly rate</li>
            <li>Forgetting to convert percentages into decimals</li>
            <li>Ignoring the effect of recurring contributions</li>
            <li>Mixing simple interest assumptions with compound growth</li>
            <li>Expecting short-term timelines to produce long-term results</li>
          </ul>
        </section>

        <section id="faq" className={styles.section} aria-labelledby="faq-title">
          <h2 id="faq-title" className={styles.sectionTitle}>
            Frequently asked questions
          </h2>

          <h3 className={styles.questionTitle}>What is compound interest?</h3>
          <p className={styles.paragraph}>
            Compound interest is growth earned on both your initial balance and
            the interest already added to it over time.
          </p>

          <h3 className={styles.questionTitle}>
            What is the formula for compound interest?
          </h3>
          <p className={styles.paragraph}>
            The standard formula is <strong>A = P (1 + r / n)^(n × t)</strong>.
          </p>

          <h3 className={styles.questionTitle}>
            Can I use the standard formula with monthly contributions?
          </h3>
          <p className={styles.paragraph}>
            Not cleanly. Once recurring deposits are involved, a month-by-month
            method or calculator is usually more practical.
          </p>

          <h3 className={styles.questionTitle}>
            What is the difference between compound interest and simple interest?
          </h3>
          <p className={styles.paragraph}>
            Simple interest applies only to the original principal. Compound
            interest applies to the principal and previously earned interest.
          </p>

          <h3 className={styles.questionTitle}>
            Why does compound growth accelerate over time?
          </h3>
          <p className={styles.paragraph}>
            Because each round of growth is applied to a balance that has already
            increased, which means later gains build on earlier gains.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="related-guides-title">
          <div className={styles.sectionHeader}>
            <h2 id="related-guides-title" className={styles.sectionTitle}>
              Related guides
            </h2>
            <p className={styles.relatedIntro}>
              Keep exploring the cluster with the most useful next-step pages.
            </p>
          </div>

          <nav className={styles.relatedGrid} aria-label="Related guides">
            <Link
              href="/compound-interest-calculator"
              className={styles.relatedCard}
            >
              <span className={styles.relatedTag}>Tool</span>
              <strong className={styles.relatedTitle}>
                Compound Interest Calculator
              </strong>
              <span className={styles.relatedText}>
                Test your assumptions with monthly contributions, time, and rate
                changes.
              </span>
            </Link>

            <Link
              href="/how-much-will-i-have-if-i-invest-every-month"
              className={styles.relatedCard}
            >
              <span className={styles.relatedTag}>Next step</span>
              <strong className={styles.relatedTitle}>
                How much will I have if I invest every month?
              </strong>
              <span className={styles.relatedText}>
                See how recurring contributions can build over 10, 20, and 30
                years.
              </span>
            </Link>

            <Link
              href="/how-long-does-it-take-to-double-your-money"
              className={styles.relatedCard}
            >
              <span className={styles.relatedTag}>Time</span>
              <strong className={styles.relatedTitle}>
                How long does it take to double your money?
              </strong>
              <span className={styles.relatedText}>
                Compare growth timelines and see how rate and time interact.
              </span>
            </Link>
          </nav>
        </section>

        <section className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            Want to model your own starting balance and monthly deposits?
          </p>
          <Link
            href="/compound-interest-calculator"
            className={styles.bottomCtaLink}
          >
            Use the calculator now
          </Link>
        </section>
      </article>
    </main>
  );
}