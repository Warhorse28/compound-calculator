import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/net-worth-needed-to-retire-with-9000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Retiring on $9,000 a Month: How Much Net Worth It Really Takes";
const pageTitle =
  "Retiring on $9,000 a Month: How Much Net Worth It Really Takes";

const pageDescription =
  "See how much net worth you may need to retire with $9,000 a month using 3%, 4%, and 5% withdrawal strategies, and what that really means in real life.";

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
    netWorth: "$3.60 million",
    yearlyIncome: "$108,000",
    monthlyIncome: "$9,000",
    view: "maximum safety with the strongest long-term protection.",
  },
  {
    rate: "4%",
    netWorth: "$2.70 million",
    yearlyIncome: "$108,000",
    monthlyIncome: "$9,000",
    view: "balanced benchmark used in many retirement plans.",
  },
  {
    rate: "5%",
    netWorth: "$2.16 million",
    yearlyIncome: "$108,000",
    monthlyIncome: "$9,000",
    view: "lower target, but with higher long-term pressure.",
  },
];

const faqItems = [
  {
    question: "How much net worth do you need for $9,000 a month at 4%?",
    answer:
      "At a 4% withdrawal rate, the rough target is about $2.7 million. It is a widely used benchmark, but long-term success still depends on inflation, market conditions, and spending flexibility.",
  },
  {
    question: "Is $9,000 a month considered a high retirement income?",
    answer:
      "For most households, yes. It usually supports a comfortable and flexible lifestyle, but the real experience depends heavily on location, taxes, and healthcare costs.",
  },
  {
    question: "Why does the required net worth increase so much at this level?",
    answer:
      "Because higher income requires larger yearly withdrawals. As withdrawals grow, the portfolio must be bigger to remain sustainable over time.",
  },
  {
    question: "Is a 5% withdrawal rate safe for $9,000 a month?",
    answer:
      "It can work in some cases, but it carries more risk. A higher withdrawal rate reduces the required net worth, but also reduces your margin for error during market downturns.",
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
            A $9,000 monthly income means generating about $108,000 per year
            from your portfolio. It looks powerful on paper. The real question
            is whether it holds up over time.
          </p>

          <p className="cw-intro">
            Reaching this level is not just about hitting a number. It is about
            building a portfolio that can sustain that income through inflation,
            market cycles, and decades of withdrawals. The math is simple.
            Living with it is not.
          </p>

          <p className="cw-intro">
            Your withdrawal rate defines everything. It determines how much
            capital you need and how much pressure your portfolio carries every
            single year.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> to retire with $9,000 a month, you
              may need roughly $2.16 million to $3.6 million depending on your
              strategy. The income stays the same. The durability does not.
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
            What level of net worth supports $9,000 a month
          </h2>

          <p className="cw-paragraph">
            The three scenarios below all produce the same $108,000 per year.
            What changes is how much capital is required and how resilient that
            income is under stress.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Withdrawal rate</th>
                  <th>Net worth needed</th>
                  <th>Yearly income</th>
                  <th>Monthly income</th>
                  <th>What it means</th>
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
            The 4% scenario lands around $2.7 million. That is why it often
            becomes the reference point. It is clear. It is practical. It is not
            guaranteed.
          </p>

          <p className="cw-paragraph">
            A smaller portfolio may still generate the same income. The real
            difference appears later, when the plan is tested by time and
            uncertainty.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why higher income increases pressure fast
          </h2>

          <p className="cw-paragraph">
            At this level, income scaling becomes aggressive. The jump from
            $7,000 to $9,000 is not just $2,000 more. It represents a much
            larger capital requirement.
          </p>

          <p className="cw-paragraph">
            Every increase raises withdrawals, and higher withdrawals demand a
            stronger portfolio to survive long-term. The number grows. The
            margin shrinks.
          </p>

          <ul className="cw-list">
            <li>higher income increases annual withdrawals.</li>
            <li>higher withdrawals require larger portfolios.</li>
            <li>larger portfolios demand more time or higher contributions.</li>
            <li>more aggressive strategies reduce long-term stability.</li>
          </ul>

          <p className="cw-paragraph">
            More income today can mean more pressure tomorrow.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What $9,000 a month actually feels like
          </h2>

          <p className="cw-paragraph">
            For most people, $9,000 a month represents a high-income
            retirement. It usually allows flexibility, comfort, and freedom in
            daily decisions.
          </p>

          <ul className="cw-list">
            <li>strong housing flexibility.</li>
            <li>frequent travel without heavy constraints.</li>
            <li>capacity to absorb large unexpected expenses.</li>
            <li>more control over lifestyle choices.</li>
          </ul>

          <p className="cw-paragraph">
            In some regions, it feels abundant. In others, it feels simply
            comfortable. Income is absolute. Lifestyle is relative.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            A simple way to anchor this goal
          </h2>

          <p className="cw-paragraph">
            A practical starting point is the 4% scenario. Around $2.7 million
            gives you a working target that balances realism and sustainability.
          </p>

          <p className="cw-paragraph">
            From there, you adjust. More conservative plans require more
            capital. More flexible plans may work with less. The goal is not to
            be exact. It is to be directionally correct.
          </p>

          <p className="cw-paragraph">
            Net worth is not the goal. What it produces is.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              See how your own plan compares
            </h2>
            <p className="cw-cta-text">
              Use the calculator to test different portfolio sizes and
              withdrawal strategies and understand how much net worth you may
              actually need.
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
              <Link href="/net-worth-needed-to-retire-with-8000-a-month">
                net worth needed to retire with $8,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-10000-a-month">
                net worth needed to retire with $10,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/safe-withdrawal-rate-for-retirement">
                safe withdrawal rate for retirement.
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-your-net-worth-generate">
                how much income your net worth can generate.
              </Link>
            </li>
            <li>
              <Link href="/is-9000-a-month-enough-to-retire">
                is $9,000 a month enough to retire.
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
            Retiring with $9,000 a month typically requires between $2.16
            million and $3.6 million, depending on how conservative your plan
            is.
          </p>

          <p className="cw-paragraph">
            Around $2.7 million is often used as a balanced estimate. It is not
            a promise. It is a planning anchor. The real goal is making that
            income sustainable over time.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own $9,000/month plan?
            </h2>
            <p className="cw-cta-text">
              Run your numbers and see how different strategies change your
              required net worth and long-term stability.
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
