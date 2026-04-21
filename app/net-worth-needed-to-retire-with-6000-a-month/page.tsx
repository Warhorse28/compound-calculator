import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/net-worth-needed-to-retire-with-6000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Net Worth Does a $6,000/Month Retirement Really Need?";
const pageTitle =
  "How Much Net Worth Does a $6,000/Month Retirement Really Need?";

const pageDescription =
  "Find out how much net worth you may need to retire with $6,000 a month using 3%, 4%, and 5% withdrawal rate scenarios, with real-world context and trade-offs.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    rate: "3%",
    netWorth: "$2.40 million",
    yearlyIncome: "$72,000",
    monthlyIncome: "$6,000",
    view: "most conservative option with the widest long-term buffer.",
  },
  {
    rate: "4%",
    netWorth: "$1.80 million",
    yearlyIncome: "$72,000",
    monthlyIncome: "$6,000",
    view: "balanced middle-ground for many retirement plans.",
  },
  {
    rate: "5%",
    netWorth: "$1.44 million",
    yearlyIncome: "$72,000",
    monthlyIncome: "$6,000",
    view: "lower target, but with less room for mistakes over time.",
  },
];

const faqItems = [
  {
    question: "How much net worth do you need for $6,000 a month at 4%?",
    answer:
      "At a 4% withdrawal rate, the rough target is about $1.8 million. It is a strong benchmark, but not a guarantee. Taxes, inflation, and retirement length still shape how durable that income will feel.",
  },
  {
    question: "Is $6,000 a month enough to retire comfortably?",
    answer:
      "For many households, yes. It can support a comfortable and flexible retirement in a large part of the US. But housing, healthcare, taxes, and location can still change the experience significantly.",
  },
  {
    question: "Why does the required net worth jump so much from $5,000 to $6,000 a month?",
    answer:
      "Because every extra $1,000 of monthly income creates a much larger capital requirement when you translate it through a conservative withdrawal rate. The increase looks small in spending terms, but large in portfolio terms.",
  },
  {
    question: "Can I retire with less than $1.8 million for $6,000 a month?",
    answer:
      "Possibly, but only by using a higher withdrawal rate or accepting more risk. That can work in some cases, but it gives the plan less margin for bad markets, inflation, and a longer retirement horizon.",
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
            A $6,000 monthly retirement income means generating about $72,000 a
            year from your portfolio. That sounds clear enough. The harder
            question is how much wealth has to sit behind that number to make it
            feel stable.
          </p>

          <p className="cw-intro">
            This is where retirement planning becomes less about the monthly
            goal and more about the structure underneath it. A bigger income
            target does not just require a little more capital. It often
            requires a lot more.
          </p>

          <p className="cw-intro">
            Your withdrawal rate decides how much pressure the portfolio has to
            carry. A lower rate increases the target, but usually improves
            durability. A higher rate lowers the target, but can make the plan
            feel much less forgiving over time.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> to retire with $6,000 a month, you
              may need between $1.44 million and $2.4 million depending on your
              withdrawal strategy. The income target stays fixed. The safety
              behind it does not.
            </p>
          </div>

          <div className="cw-hero-actions">
            <Link href={calculatorPath} className="cw-button">
              Calculate Your Retirement Plan →
            </Link>
          </div>
        </header>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What kind of portfolio supports $6,000 a month
          </h2>

          <p className="cw-paragraph">
            Here is the practical breakdown. All three scenarios below support
            the same $72,000 per year. What changes is the amount of capital
            required and how much strain your portfolio has to absorb along the
            way.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Withdrawal rate</th>
                  <th>Net worth needed</th>
                  <th>Yearly income</th>
                  <th>Monthly income</th>
                  <th>How it feels</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.rate}>
                    <td>{row.rate}</td>
                    <td>{row.netWorth}</td>
                    <td>{row.yearlyIncome}</td>
                    <td>{row.monthlyIncome}</td>
                    <td>{row.view}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            For many readers, the 4% scenario gives the clearest working
            estimate. That points to a retirement target of about $1.8 million
            for a $6,000 monthly income goal.
          </p>

          <p className="cw-paragraph">
            This sounds solid. It is not effortless. A lower target can still
            work, but the trade-off shows up later, when markets weaken or
            inflation keeps pushing spending higher.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why this number scales faster than people expect
          </h2>

          <p className="cw-paragraph">
            Moving from $5,000 to $6,000 a month does not feel dramatic in day
            to day life. It is just another $1,000. But once that goal gets
            translated into retirement capital, the increase becomes much more
            serious.
          </p>

          <p className="cw-paragraph">
            At 4%, that extra $1,000 a month means another $300,000 of net
            worth. At 3%, it means another $400,000. The spending increase looks
            small. The capital increase does not.
          </p>

          <ul className="cw-list">
            <li>higher monthly targets magnify the capital requirement quickly.</li>
            <li>lower withdrawal rates make the jump even larger.</li>
            <li>small lifestyle upgrades often require major portfolio upgrades.</li>
            <li>this is where retirement math becomes more demanding than expected.</li>
          </ul>

          <p className="cw-paragraph">
            The number may look manageable from the outside. Building the
            portfolio behind it is where the real work begins.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What $6,000 a month can actually feel like
          </h2>

          <p className="cw-paragraph">
            For many households, $6,000 a month represents a move beyond basic
            comfort and into genuine flexibility. It can cover housing,
            healthcare, food, transportation, and still leave room to breathe.
          </p>

          <ul className="cw-list">
            <li>comfortable housing in many moderate-cost regions.</li>
            <li>more room for travel and discretionary spending.</li>
            <li>less stress around healthcare and unexpected expenses.</li>
            <li>greater ability to absorb rising costs without immediate strain.</li>
          </ul>

          <p className="cw-paragraph">
            But real life still matters. In a lower-cost area, $6,000 a month
            may feel strong. In a more expensive city, it may feel comfortable
            but not luxurious. The income is the same. The experience is not.
          </p>

          <p className="cw-paragraph">
            A bigger monthly number feels safer. It is not always safer.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The real decision is not just the number
          </h2>

          <p className="cw-paragraph">
            It is easy to focus on the retirement target and stop there. But the
            deeper decision is how durable you want that target to be. A $1.44
            million portfolio at 5% produces the same income as a $2.4 million
            portfolio at 3%. Those are not the same plan.
          </p>

          <p className="cw-paragraph">
            One version asks the portfolio to work harder from day one. The
            other carries more margin and more patience. Both may look fine in a
            spreadsheet. Only one may feel calm when conditions get worse.
          </p>

          <p className="cw-paragraph">
            More income efficiency today can mean less peace of mind tomorrow.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">Test your own numbers</h2>
            <p className="cw-cta-text">
              Use the calculator to simulate your retirement plan with your own
              income target, timeline, and withdrawal assumptions. See what your
              version of $6,000 a month may really require.
            </p>
            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Open the Calculator →
              </Link>
            </div>
          </div>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">Explore related pages</h2>
          <ul className="cw-list">
            <li>
              <Link href="/net-worth-needed-to-retire-with-5000-a-month">
                net worth needed to retire with $5,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-7000-a-month">
                net worth needed to retire with $7,000 a month.
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
              <Link href="/is-6000-a-month-enough-to-retire">
                is $6,000 a month enough to retire.
              </Link>
            </li>
            <li>
              <Link href={calculatorPath}>compound interest calculator.</Link>
            </li>
          </ul>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            FAQ: what people usually want to know next
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
            Retiring with $6,000 per month typically requires between $1.44
            million and $2.4 million, depending on how conservative your
            withdrawal strategy is.
          </p>

          <p className="cw-paragraph">
            Around $1.8 million is a strong and realistic middle-ground
            estimate. It is not a promise, but it is a practical baseline. The
            smarter goal is not just to reach the number. It is to build an
            income structure that can keep doing its job when real life gets
            complicated.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to see how strong your plan really is?
            </h2>
            <p className="cw-cta-text">
              Run your numbers and compare different withdrawal assumptions to
              see what level of net worth may realistically support your
              retirement income goal.
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
