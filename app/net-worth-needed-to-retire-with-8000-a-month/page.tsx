import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/net-worth-needed-to-retire-with-8000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Net Worth Do You Need for $8,000 a Month in Retirement?";
const pageTitle =
  "How Much Net Worth Do You Need for $8,000 a Month in Retirement?";

const pageDescription =
  "See how much net worth you may need to retire with $8,000 a month using 3%, 4%, and 5% withdrawal strategies, and what that really means for long-term stability.";

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
    netWorth: "$3.20 million",
    yearlyIncome: "$96,000",
    monthlyIncome: "$8,000",
    view: "maximum safety with strong long-term resilience.",
  },
  {
    rate: "4%",
    netWorth: "$2.40 million",
    yearlyIncome: "$96,000",
    monthlyIncome: "$8,000",
    view: "balanced benchmark used in many retirement strategies.",
  },
  {
    rate: "5%",
    netWorth: "$1.92 million",
    yearlyIncome: "$96,000",
    monthlyIncome: "$8,000",
    view: "lower target, but with higher long-term pressure.",
  },
];

const faqItems = [
  {
    question: "How much net worth is needed for $8,000 a month at 4%?",
    answer:
      "At a 4% withdrawal rate, the rough target is about $2.4 million. It is a useful benchmark, but long-term success still depends on market conditions, inflation, and spending flexibility.",
  },
  {
    question: "Is $8,000 a month considered a high retirement income?",
    answer:
      "For many households, yes. It often supports a flexible lifestyle with room for travel, comfort, and unexpected expenses. But in higher-cost areas, it may feel less generous than expected.",
  },
  {
    question: "Why does the required net worth increase so quickly?",
    answer:
      "Because each additional dollar of income requires capital behind it. Higher monthly income means higher yearly withdrawals, which significantly raises the portfolio size needed to sustain it.",
  },
  {
    question: "Is a 5% withdrawal rate safe for this income level?",
    answer:
      "It can work in some scenarios, but it comes with more risk. A 5% withdrawal rate reduces the required net worth, but also reduces your margin for error if markets perform poorly.",
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
            An $8,000 monthly income means producing about $96,000 per year from
            your portfolio. The number looks strong. The structure behind it is
            what determines if it lasts.
          </p>

          <p className="cw-intro">
            Reaching this level is not just about hitting a target. It is about
            building a portfolio that can support that income through market
            cycles, inflation, and time. The math is simple. Living with it is
            not.
          </p>

          <p className="cw-intro">
            Your withdrawal rate is the key variable. It controls how much net
            worth you need and how much pressure your portfolio carries over the
            years.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> to retire with $8,000 a month, you
              may need roughly $1.92 million to $3.2 million depending on your
              withdrawal strategy. The income stays fixed. The risk does not.
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
            What level of net worth supports $8,000 a month
          </h2>

          <p className="cw-paragraph">
            The scenarios below all produce the same $96,000 per year. What
            changes is the amount of capital required and how resilient that
            income is over time.
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
            The 4% scenario lands around $2.4 million, which is why it often
            becomes the reference point. It is simple. It is useful. It is not a
            guarantee.
          </p>

          <p className="cw-paragraph">
            A smaller portfolio may still generate the same income. The real
            difference shows up later, when the plan faces real-world stress.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why higher income targets accelerate fast
          </h2>

          <p className="cw-paragraph">
            Increasing your monthly income target has a direct and powerful
            effect on how much net worth you need. The jump from $6,000 to
            $8,000 is not linear. It is exponential in terms of pressure.
          </p>

          <p className="cw-paragraph">
            Every additional $1,000 a month requires more capital, more
            discipline, and more tolerance for uncertainty. The number grows.
            The margin for error shrinks.
          </p>

          <ul className="cw-list">
            <li>higher income means higher annual withdrawals.</li>
            <li>higher withdrawals require larger portfolios.</li>
            <li>larger portfolios demand more time or higher contributions.</li>
            <li>more aggressive plans increase long-term fragility.</li>
          </ul>

          <p className="cw-paragraph">
            The math scales quickly. Your strategy needs to keep up.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What $8,000 a month actually feels like
          </h2>

          <p className="cw-paragraph">
            For many people, $8,000 a month represents a high level of financial
            comfort. It usually supports a flexible lifestyle with room for
            travel, convenience, and discretionary spending.
          </p>

          <ul className="cw-list">
            <li>comfortable housing with flexibility.</li>
            <li>regular travel without constant budgeting pressure.</li>
            <li>capacity to absorb unexpected expenses.</li>
            <li>more freedom in lifestyle decisions.</li>
          </ul>

          <p className="cw-paragraph">
            In some regions, it feels abundant. In others, it feels simply
            comfortable. Income is relative. Expenses define reality.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            A simple way to anchor this goal
          </h2>

          <p className="cw-paragraph">
            If you want a clean starting point, use the 4% case. That gives you
            a working target of about $2.4 million. It is not perfect, but it is
            clear.
          </p>

          <p className="cw-paragraph">
            From there, adjust based on your situation. More conservative plans
            require more capital. More flexible plans may work with less. The
            goal is not precision. It is direction.
          </p>

          <p className="cw-paragraph">
            A portfolio can look strong on paper and still feel fragile in real
            life. Structure matters more than the headline number.
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
              actually need for your goals.
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
              <Link href="/net-worth-needed-to-retire-with-7000-a-month">
                net worth needed to retire with $7,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-9000-a-month">
                net worth needed to retire with $9,000 a month.
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
              <Link href="/is-8000-a-month-enough-to-retire">
                is $8,000 a month enough to retire.
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
            Retiring with $8,000 a month typically requires between $1.92
            million and $3.2 million, depending on how conservative your plan
            is.
          </p>

          <p className="cw-paragraph">
            Around $2.4 million is often used as a balanced estimate. It is not
            a promise. It is a planning anchor. The real goal is not just
            reaching the number. It is making the income sustainable.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own $8,000/month plan?
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
