import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/safe-withdrawal-rate-for-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Safe Withdrawal Rate for Retirement: What Is a Reasonable Starting Point?";
const pageTitle =
  "Safe Withdrawal Rate for Retirement: What Is a Reasonable Starting Point?";
const pageDescription =
  "Learn what a safe withdrawal rate means in retirement, how 3%, 4%, and 5% compare, and how to choose a realistic starting point for your plan.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rateRows = [
  {
    rate: "3%",
    meaning: "More conservative",
    portfolioNeeded: "$2.0 million",
    annualIncomeFrom2M: "$60,000",
    fit: "Long retirements, wider safety margin, more caution.",
  },
  {
    rate: "4%",
    meaning: "Balanced starting point",
    portfolioNeeded: "$1.5 million",
    annualIncomeFrom2M: "$80,000",
    fit: "Common benchmark for many retirement plans.",
  },
  {
    rate: "5%",
    meaning: "More aggressive",
    portfolioNeeded: "$1.2 million",
    annualIncomeFrom2M: "$100,000",
    fit: "Higher income today, but less margin for error.",
  },
];

const faqItems = [
  {
    question: "Is 4% still a good retirement withdrawal rate?",
    answer:
      "It is still a useful benchmark, but not a universal answer. It gives people a practical place to start, yet whether it feels safe depends on age, flexibility, taxes, asset mix, and how long the money needs to last.",
  },
  {
    question: "Why does a lower withdrawal rate require so much more net worth?",
    answer:
      "Because you are asking the portfolio to do less work each year. That reduces pressure and usually improves durability, but the trade-off is obvious: you need more capital before retirement feels viable.",
  },
  {
    question: "Can 5% work in retirement?",
    answer:
      "It can in some cases, especially if spending is flexible or there are other income sources. But it usually leaves less room for bad markets, inflation, or a retirement that lasts longer than expected.",
  },
  {
    question: "Should early retirees use a lower withdrawal rate?",
    answer:
      "Often yes. A longer retirement horizon usually means more exposure to weak market sequences, inflation, and spending surprises. The longer the plan needs to survive, the more valuable a wider margin of safety becomes.",
  },
];

export default function Page() {
  return (
    <main className="cw-page">
      <article className="cw-shell">
        <header className="cw-hero">
          <div className="cw-eyebrow">Retirement planning</div>
          <h1 className="cw-title">{pageTitle}</h1>
          <p className="cw-lead">
            A safe withdrawal rate is the percentage of your retirement
            portfolio you can withdraw each year without putting too much
            long-term stress on the plan.
          </p>
          <p className="cw-intro">
            It sounds like a small detail. It is not. This one assumption
            changes how much net worth you need, how much income you can
            realistically spend, and how fragile or durable retirement may feel
            once markets turn against you.
          </p>
          <p className="cw-intro">
            A lower withdrawal rate usually means more safety and a bigger
            required portfolio. A higher rate makes retirement look easier on
            paper, but often increases the pressure behind the number. The math
            is simple. Living with it is not.
          </p>
          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> a safe withdrawal rate is not about
              maximizing what you can take out. It is about choosing a spending
              level your portfolio has a realistic chance of surviving.
            </p>
          </div>
          <div className="cw-hero-actions">
            <Link href={calculatorPath} className="cw-button">
              Test Your Withdrawal Rate →
            </Link>
          </div>
        </header>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What a withdrawal rate really controls
          </h2>
          <p className="cw-paragraph">
            If you retire with $1 million and use a 4% withdrawal rate, that
            points to roughly $40,000 a year. If you have $2 million, the same
            rate points to about $80,000. That part is straightforward.
          </p>
          <p className="cw-paragraph">
            What matters more is what sits underneath the estimate. A withdrawal
            rate is not just a formula. It is a statement about how hard your
            portfolio has to work, how much uncertainty it needs to absorb, and
            how much flexibility your lifestyle can tolerate later.
          </p>
          <p className="cw-paragraph">
            That is why retirement planning is never just about reaching a large
            number. Net worth is not the goal. What it produces is.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            A quick view of 3%, 4%, and 5%
          </h2>
          <p className="cw-paragraph">
            These percentages may look close together, but they produce very
            different retirement plans. A one-point change sounds small. It is
            not small in practice.
          </p>
          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Rate</th>
                  <th>General feel</th>
                  <th>Portfolio needed for $60k/year</th>
                  <th>Income from a $2M portfolio</th>
                  <th>Best fit</th>
                </tr>
              </thead>
              <tbody>
                {rateRows.map((row) => (
                  <tr key={row.rate}>
                    <td>{row.rate}</td>
                    <td>{row.meaning}</td>
                    <td>{row.portfolioNeeded}</td>
                    <td>{row.annualIncomeFrom2M}</td>
                    <td>{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cw-paragraph">
            Moving from 5% to 3% can dramatically increase the net worth needed
            for the same income. The estimate looks cleaner at 5%. The margin
            of safety usually looks cleaner at 3%.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why 4% became the default reference point
          </h2>
          <p className="cw-paragraph">
            The 4% rule became popular because it gives people a simple place to
            start. It is easy to remember, easy to calculate, and good enough
            to create a first draft of a retirement plan.
          </p>
          <p className="cw-paragraph">
            That is also where people can misuse it. A benchmark is useful. It
            is not a guarantee. A 4% withdrawal rate may feel balanced for one
            household and too aggressive for another, depending on age, taxes,
            investment mix, inflation, and willingness to reduce spending in
            bad years.
          </p>
          <p className="cw-paragraph">
            In other words, 4% is often a starting point. It should not be
            treated like a law of nature.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            When a lower rate usually makes more sense
          </h2>
          <p className="cw-paragraph">
            A lower rate like 3% often fits people who want a wider cushion,
            expect a long retirement, or simply do not want to build a plan
            that depends too heavily on good market behavior.
          </p>
          <ul className="cw-list">
            <li>early retirement usually benefits from more caution.</li>
            <li>longer timelines leave less room for aggressive withdrawals.</li>
            <li>higher expected healthcare costs justify more margin.</li>
            <li>lower flexibility usually calls for a safer spending level.</li>
          </ul>
          <p className="cw-paragraph">
            The downside is obvious: it takes much more wealth to support the
            same lifestyle. A lower rate feels safer. It is also more expensive
            to reach.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why a higher rate can look better than it feels
          </h2>
          <p className="cw-paragraph">
            A 5% withdrawal rate can make retirement look much more achievable
            because the portfolio target falls fast. That is why it is so
            tempting. The number looks good. The pressure behind it matters
            more.
          </p>
          <p className="cw-paragraph">
            Higher withdrawals leave less room for bad sequences early in
            retirement, weaker returns, inflation shocks, or spending that
            rises faster than expected. That does not automatically make 5%
            impossible, but it usually makes the plan less forgiving.
          </p>
          <p className="cw-paragraph">
            More income today can mean less safety tomorrow. That is the trade.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            How to choose a rate that fits real life
          </h2>
          <p className="cw-paragraph">
            The smartest question is not, “What is the highest rate I can get
            away with?” It is, “What rate gives me a retirement plan I can
            actually trust?”
          </p>
          <p className="cw-paragraph">
            Someone with flexible spending, outside income, and a shorter
            timeline may be comfortable leaning a little higher. Someone who
            wants more stability, more predictability, or a retirement that may
            last 35 to 40 years will often benefit from leaning lower.
          </p>
          <p className="cw-paragraph">
            The right answer is personal, but the pattern is clear: the more
            risk you want to remove, the more net worth you usually need to
            build.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              See how different withdrawal rates change your number
            </h2>
            <p className="cw-cta-text">
              Run the calculator and compare 3%, 4%, and 5% assumptions to see
              how much net worth your retirement plan may need under different
              scenarios.
            </p>
            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Open the Calculator →
              </Link>
            </div>
          </div>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">Related pages worth reading next</h2>
          <ul className="cw-list">
            <li>
              <Link href="/how-much-net-worth-to-retire">
                how much net worth do you need to retire.
              </Link>
            </li>
            <li>
              <Link href="/how-to-calculate-net-worth-needed-for-retirement">
                how to calculate net worth needed for retirement.
              </Link>
            </li>
            <li>
              <Link href="/what-net-worth-generates-10000-a-month">
                what net worth generates $10,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-your-net-worth-generate">
                how much income can your net worth generate.
              </Link>
            </li>
            <li>
              <Link href="/4-vs-5-percent-withdrawal-retirement">
                4% vs 5% withdrawal retirement.
              </Link>
            </li>
            <li>
              <Link href={calculatorPath}>compound interest calculator.</Link>
            </li>
          </ul>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            FAQ: what people usually ask next
          </h2>
          <div className="cw-faq-list">
            {faqItems.map((item) => (
              <div key={item.question} className="cw-faq-item">
                <h3 className="cw-faq-question">{item.question}</h3>
                <p className="cw-faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">Final takeaway</h2>
          <p className="cw-paragraph">
            A safe withdrawal rate matters because it connects your lifestyle,
            your portfolio, and your risk tolerance in one decision.
          </p>
          <p className="cw-paragraph">
            Lower rates usually buy more durability and demand more wealth.
            Higher rates lower the target and often raise the strain. The best
            answer is rarely the most optimistic one. It is the one your future
            self can live with.
          </p>
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own retirement assumptions?
            </h2>
            <p className="cw-cta-text">
              Compare different withdrawal rates with your own numbers and see
              how much portfolio strength your plan may really require.
            </p>
            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Run the Calculator →
              </Link>
            </div>
          </div>
          <p className="cw-support-note">
            This project is built independently. If it gave you clarity or
            direction, you’re welcome to support it. ☕ & ❤️
          </p>
        </section>
      </article>
    </main>
  );
}
