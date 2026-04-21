import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/how-to-calculate-net-worth-needed-for-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How to Calculate Net Worth Needed for Retirement: A Simple Formula";
const pageTitle =
  "How to Calculate Net Worth Needed for Retirement: A Simple Formula";
const pageDescription =
  "Learn how to calculate the net worth you need for retirement using a simple formula based on income goals and withdrawal rates.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const calculationRows = [
  {
    desiredIncome: "$3,000/month",
    annualIncome: "$36,000/year",
    at3Percent: "$1.20 million",
    at4Percent: "$900,000",
    at5Percent: "$720,000",
  },
  {
    desiredIncome: "$5,000/month",
    annualIncome: "$60,000/year",
    at3Percent: "$2.00 million",
    at4Percent: "$1.50 million",
    at5Percent: "$1.20 million",
  },
  {
    desiredIncome: "$8,000/month",
    annualIncome: "$96,000/year",
    at3Percent: "$3.20 million",
    at4Percent: "$2.40 million",
    at5Percent: "$1.92 million",
  },
  {
    desiredIncome: "$10,000/month",
    annualIncome: "$120,000/year",
    at3Percent: "$4.00 million",
    at4Percent: "$3.00 million",
    at5Percent: "$2.40 million",
  },
];

const faqItems = [
  {
    question: "What is the basic formula for retirement net worth?",
    answer:
      "The usual shortcut is annual retirement income divided by your withdrawal rate. If you want $60,000 a year and use 4%, the estimate is $1.5 million. It is a planning tool, not a promise.",
  },
  {
    question: "Why does the withdrawal rate change the target so much?",
    answer:
      "Because the withdrawal rate determines how hard your invested assets need to work. A lower rate usually improves durability, but it also forces you to build a larger financial base before retirement feels realistic.",
  },
  {
    question: "Should I calculate from monthly income or yearly income?",
    answer:
      "Monthly income is usually easier to feel in real life, but the formula itself works from annual income. The practical flow is simple: decide the monthly lifestyle you want, convert it into a yearly number, then divide by a withdrawal rate.",
  },
  {
    question: "Does this formula include taxes, inflation, and healthcare?",
    answer:
      "Not by itself. The formula gives you a clean baseline. Real planning still needs adjustments for taxes, inflation, healthcare, housing, and any outside income like Social Security or pensions.",
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
            The easiest way to calculate how much net worth you need for
            retirement is to start with one simple question: how much yearly
            income do you want your money to produce?
          </p>

          <p className="cw-intro">
            Once you know the income target, you can work backward using a
            withdrawal rate. That is what turns a vague wealth goal into a real
            retirement number. The formula is simple. The outcome is not.
          </p>

          <p className="cw-intro">
            In practice, retirement is not about chasing the biggest balance
            possible. It is about building enough invested wealth to support
            your lifestyle with a level of safety you can actually trust.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> retirement net worth is usually
              estimated with one relationship: annual income needed divided by
              your chosen withdrawal rate.
            </p>
          </div>

          <div className="cw-hero-actions">
            <Link href={calculatorPath} className="cw-button">
              Calculate Your Retirement Number →
            </Link>
          </div>
        </header>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The formula is easy to learn and useful to keep
          </h2>

          <p className="cw-paragraph">
            The core formula is straightforward:
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Net worth needed =</strong> annual retirement income ÷
              withdrawal rate.
            </p>
          </div>

          <p className="cw-paragraph">
            For example, if you want $60,000 a year in retirement and use a 4%
            withdrawal rate, the math looks like this: $60,000 ÷ 0.04 = $1.5
            million.
          </p>

          <p className="cw-paragraph">
            That means a retirement fund of about $1.5 million could
            theoretically support $60,000 a year in withdrawals. But theory is
            only the first layer. Taxes, inflation, market returns, and the
            length of retirement still decide how comfortable that number really
            feels.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What different income goals look like on paper
          </h2>

          <p className="cw-paragraph">
            Here is where the formula becomes practical. Once you map monthly
            income into yearly income, the size of the required capital becomes
            much easier to see.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Monthly income goal</th>
                  <th>Yearly income</th>
                  <th>At 3%</th>
                  <th>At 4%</th>
                  <th>At 5%</th>
                </tr>
              </thead>
              <tbody>
                {calculationRows.map((row) => (
                  <tr key={row.desiredIncome}>
                    <td>{row.desiredIncome}</td>
                    <td>{row.annualIncome}</td>
                    <td>{row.at3Percent}</td>
                    <td>{row.at4Percent}</td>
                    <td>{row.at5Percent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            The table makes one thing obvious: a conservative retirement plan
            often requires far more capital than people expect at first. A
            smaller withdrawal rate looks safer. It also raises the bar.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why the withdrawal rate changes everything
          </h2>

          <p className="cw-paragraph">
            The withdrawal rate is not a technical footnote. It is the pressure
            setting behind the entire plan. Change that setting and the
            retirement target moves fast.
          </p>

          <ul className="cw-list">
            <li>3% usually means more caution and a larger required nest egg.</li>
            <li>4% is a common benchmark because it balances usability and restraint.</li>
            <li>5% can lower the target, but often increases long-term strain.</li>
            <li>longer retirements usually reward more conservative assumptions.</li>
          </ul>

          <p className="cw-paragraph">
            This is why two people can want the same lifestyle and still need
            very different amounts of wealth. The number matters. The rate
            behind it matters more.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What this calculation does not automatically capture
          </h2>

          <p className="cw-paragraph">
            The formula is useful because it is clean. Real life is not clean.
            Healthcare, taxes, inflation, housing, market downturns, and
            changing spending patterns can all push the real target higher than
            the first calculation suggests.
          </p>

          <p className="cw-paragraph">
            Some retirees spend more in the early years because of travel,
            hobbies, and freedom. Others spend less later, but not always.
            Healthcare alone can break the idea that retirement spending
            naturally falls with age.
          </p>

          <p className="cw-paragraph">
            That is why the formula should be treated as a baseline, not a final
            verdict. The estimate is useful. It is not a guarantee.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            How to use the formula in a smarter way
          </h2>

          <p className="cw-paragraph">
            The best way to use this calculation is to build a range, not cling
            to one perfect number. Start with your target monthly income. Convert
            it into annual income. Then test it at 3%, 4%, and 5%.
          </p>

          <p className="cw-paragraph">
            That gives you a realistic band instead of a fantasy target. A
            bigger number can feel frustrating at first, but it often buys
            something valuable: flexibility. A tighter number can feel exciting,
            but it may leave less room for reality.
          </p>

          <p className="cw-paragraph">
            Retirement planning gets stronger the moment you stop asking, “What
            is the lowest number I can use?” and start asking, “What level gives
            me a plan I can actually live with?”
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Test your retirement target with real inputs
            </h2>
            <p className="cw-cta-text">
              Use the calculator to see how your income goal, time horizon, and
              withdrawal assumptions change the amount of net worth you may need.
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
              <Link href="/safe-withdrawal-rate-for-retirement">
                safe withdrawal rate for retirement.
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-your-net-worth-generate">
                how much income can your net worth generate.
              </Link>
            </li>
            <li>
              <Link href="/what-net-worth-generates-10000-a-month">
                what net worth generates $10,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-5000-a-month">
                net worth needed to retire with $5,000 a month.
              </Link>
            </li>
            <li>
              <Link href={calculatorPath}>compound interest calculator.</Link>
            </li>
          </ul>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            FAQ: what people usually ask after this
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
            To calculate retirement net worth, start with the annual income you
            want and divide it by a realistic withdrawal rate. That gives you a
            clean and useful planning baseline.
          </p>

          <p className="cw-paragraph">
            But the formula alone is not the full answer. What matters is how
            that number holds up once taxes, inflation, spending shocks, and
            real life enter the picture. A large target can feel intimidating.
            A weak plan can feel worse.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own retirement target?
            </h2>
            <p className="cw-cta-text">
              Run the calculator and see how much net worth your income goal may
              require under different assumptions.
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
