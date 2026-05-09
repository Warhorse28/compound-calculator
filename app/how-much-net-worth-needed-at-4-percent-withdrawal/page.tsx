import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/how-much-net-worth-needed-at-4-percent-withdrawal";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Net Worth Do You Need at a 4% Withdrawal Rate?";
const pageTitle =
  "How Much Net Worth Do You Need at a 4% Withdrawal Rate?";

const pageDescription =
  "See how much net worth is needed at a 4% withdrawal rate. Compare monthly income targets, required portfolio sizes, risk, flexibility, and long-term retirement planning trade-offs.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    income: "$5,000/month",
    netWorth: "$1.50 million",
    yearlyIncome: "$60,000",
    view: "A practical retirement target, but still sensitive to housing, taxes, healthcare, and location.",
  },
  {
    income: "$10,000/month",
    netWorth: "$3.00 million",
    yearlyIncome: "$120,000",
    view: "A strong benchmark with more lifestyle flexibility and a wider cushion for expensive years.",
  },
  {
    income: "$20,000/month",
    netWorth: "$6.00 million",
    yearlyIncome: "$240,000",
    view: "A high-income retirement target where capital preservation and lifestyle discipline still matter.",
  },
  {
    income: "$40,000/month",
    netWorth: "$12.00 million",
    yearlyIncome: "$480,000",
    view: "A very high-end retirement target that requires serious capital and careful long-term structure.",
  },
];

const faqItems = [
  {
    question: "How do you calculate net worth needed at a 4% withdrawal rate?",
    answer:
      "Multiply your desired yearly retirement income by 25. For example, $120,000 per year divided by 4% equals $3 million. This gives a simple estimate, but taxes, inflation, fees, and market risk still matter.",
  },
  {
    question: "Is a 4% withdrawal rate safe?",
    answer:
      "A 4% withdrawal rate is widely used as a retirement planning benchmark, but it is not a guarantee. It depends on your retirement length, portfolio mix, spending flexibility, inflation, market timing, and whether you have other income sources.",
  },
  {
    question: "How much net worth do I need for $10,000 a month at 4%?",
    answer:
      "At a 4% withdrawal rate, $10,000 a month equals $120,000 per year, which points to about $3 million in net worth before taxes and other real-world adjustments.",
  },
  {
    question: "Should I use 4% or a lower withdrawal rate?",
    answer:
      "A lower rate like 3% may be better if you want more safety, are retiring early, or want stronger protection against market downturns. A 4% rate can be useful as a balanced starting point, but it should be tested against your real lifestyle and timeline.",
  },
];

export default function Page() {
  return (
    <main className="cw-page">
      <article className="cw-shell">
        <header className="cw-hero">
          <div className="cw-eyebrow">Withdrawal strategy</div>

          <h1 className="cw-title">{pageTitle}</h1>

          <p className="cw-lead">
            A 4% withdrawal rate is one of the clearest ways to turn a
            retirement income goal into a net worth target. It gives you a
            starting point, not a promise.
          </p>

          <p className="cw-intro">
            At 4%, every $1 million of portfolio value may support about
            $40,000 per year, or roughly $3,333 per month before taxes. That
            makes the math easy to understand and useful for planning.
          </p>

          <p className="cw-intro">
            But retirement is not lived inside a formula. Taxes, inflation,
            healthcare, market timing, and lifestyle flexibility can all change
            how safe that number really feels.
          </p>

          <p className="cw-intro">
            The estimate is useful. It is not a guarantee.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> with a 4% withdrawal rate, every
              $1,000 per month of retirement income requires about $300,000 in
              portfolio value before real-world adjustments.
            </p>
          </div>

          <div className="cw-hero-actions">
            <Link href={calculatorPath} className="cw-button">
              Calculate Your Plan →
            </Link>
          </div>
        </header>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The 4% rule turns monthly income into a portfolio target
          </h2>

          <p className="cw-paragraph">
            The basic formula is simple: take the annual income you want and
            divide it by 0.04. If you want $60,000 per year, the estimate is
            $1.5 million. If you want $120,000 per year, the estimate is
            $3 million.
          </p>

          <p className="cw-paragraph">
            This is why the 4% rule became so popular. It gives people a fast
            way to see whether their retirement goal is realistic, too
            aggressive, or closer than they thought.
          </p>

          <p className="cw-paragraph">
            Simple math creates clarity. Real life adds pressure.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Net worth needed at a 4% withdrawal rate
          </h2>

          <p className="cw-paragraph">
            The table below shows how much net worth may be needed for different
            monthly income targets using a 4% withdrawal rate. These numbers are
            before taxes, fees, inflation adjustments, and personal spending
            differences.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>Net worth needed</th>
                  <th>Yearly income</th>
                  <th>What it means</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td>{row.income}</td>
                    <td>{row.netWorth}</td>
                    <td>{row.yearlyIncome}</td>
                    <td>{row.view}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            A $10,000 monthly retirement target points to about $3 million at a
            4% withdrawal rate. A $20,000 monthly target points to about
            $6 million. The higher the income target, the more important
            durability becomes.
          </p>

          <p className="cw-paragraph">
            Net worth is not the goal. What it produces is.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why 4% became the default starting point
          </h2>

          <p className="cw-paragraph">
            The 4% rule is popular because it sits between two extremes. It is
            usually less conservative than a 3% withdrawal rate, but more
            cautious than a 5% withdrawal rate.
          </p>

          <ul className="cw-list">
            <li>it gives a clear retirement income estimate.</li>
            <li>it keeps the portfolio target easier to understand.</li>
            <li>it works as a planning anchor for many traditional retirements.</li>
            <li>it balances income efficiency with some long-term caution.</li>
            <li>it helps compare different retirement income goals quickly.</li>
          </ul>

          <p className="cw-paragraph">
            That does not make 4% perfect. It makes it useful. A good benchmark
            helps you start the conversation, but it should not end the
            planning process.
          </p>

          <p className="cw-paragraph">
            The formula is simple. The decision is not.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            When 4% may be too aggressive
          </h2>

          <p className="cw-paragraph">
            A 4% withdrawal rate can become more fragile when retirement is very
            long, spending is rigid, inflation is high, or poor market returns
            happen early. The portfolio may still look strong on paper while
            feeling less comfortable in real life.
          </p>

          <ul className="cw-list">
            <li>early retirement with a long time horizon.</li>
            <li>high fixed expenses that cannot easily be reduced.</li>
            <li>limited room to adjust travel, housing, or lifestyle spending.</li>
            <li>large healthcare or long-term care uncertainty.</li>
            <li>strong desire to preserve wealth for heirs or flexibility.</li>
          </ul>

          <p className="cw-paragraph">
            In those cases, a lower withdrawal rate may create more peace of
            mind. You may need more capital, but the plan carries less pressure.
          </p>

          <p className="cw-paragraph">
            A portfolio can look strong on paper and still feel fragile in real
            life.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            When 4% can be a practical planning rate
          </h2>

          <p className="cw-paragraph">
            A 4% withdrawal rate may fit better when retirement begins closer to
            a traditional age, spending has some flexibility, the portfolio is
            diversified, and other income sources help reduce pressure.
          </p>

          <ul className="cw-list">
            <li>traditional retirement timeline.</li>
            <li>flexible discretionary spending.</li>
            <li>other income sources such as Social Security or pensions.</li>
            <li>balanced portfolio with long-term growth potential.</li>
            <li>willingness to adjust withdrawals during weak markets.</li>
          </ul>

          <p className="cw-paragraph">
            The strongest retirement plans are not built only around a
            percentage. They are built around flexibility, margin, and the
            ability to adjust when reality changes.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Compare your retirement target with real numbers
            </h2>

            <p className="cw-cta-text">
              Use the calculator to test how different withdrawal rates,
              portfolio sizes, and income goals change the net worth you may
              need.
            </p>

            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Open Calculator →
              </Link>
            </div>
          </div>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Explore related withdrawal scenarios
          </h2>

          <ul className="cw-list">
            <li>
              <Link href="/how-much-net-worth-needed-at-3-percent-withdrawal">
                how much net worth you need at a 3% withdrawal rate.
              </Link>
            </li>
            <li>
              <Link href="/how-much-do-you-need-for-5-percent-withdrawal">
                how much net worth you need for a 5% withdrawal rate.
              </Link>
            </li>
            <li>
              <Link href="/3-vs-4-percent-withdrawal-retirement">
                3% vs 4% withdrawal rate comparison.
              </Link>
            </li>
            <li>
              <Link href="/4-vs-5-percent-withdrawal-retirement">
                4% vs 5% withdrawal rate comparison.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-10000-a-month">
                net worth needed to retire with $10,000 a month.
              </Link>
            </li>
            <li>
              <Link href={calculatorPath}>
                compound interest calculator.
              </Link>
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
          <h2 className="cw-section-title">Final perspective</h2>

          <p className="cw-paragraph">
            A 4% withdrawal rate remains one of the clearest retirement planning
            benchmarks because it turns income goals into portfolio targets
            quickly.
          </p>

          <p className="cw-paragraph">
            But the number should not be treated as automatic safety. It usually
            requires less capital than a 3% approach, but it carries more
            pressure than a more conservative plan.
          </p>

          <p className="cw-paragraph">
            The best use of 4% is as a starting point: calculate the target,
            test the risk, then adjust the plan around the retirement you
            actually want to live.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own withdrawal assumptions?
            </h2>

            <p className="cw-cta-text">
              Estimate how your desired income, withdrawal rate, and portfolio
              size work together before relying on a retirement target.
            </p>

            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Run Your Numbers →
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
