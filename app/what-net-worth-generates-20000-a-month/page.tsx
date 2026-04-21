import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/what-net-worth-generates-20000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "What Net Worth Generates $20,000 a Month? A Real High-Income Breakdown";
const pageTitle =
  "What Net Worth Generates $20,000 a Month? A Real High-Income Breakdown";

const pageDescription =
  "Understand how much net worth is needed to generate $20,000 a month, how withdrawal rates change the equation, and what this income actually means in real life.";

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
    netWorth: "$8,000,000",
    yearlyIncome: "$240,000",
    monthlyIncome: "$20,000",
    view: "very conservative with strong long-term durability.",
  },
  {
    rate: "4%",
    netWorth: "$6,000,000",
    yearlyIncome: "$240,000",
    monthlyIncome: "$20,000",
    view: "balanced benchmark used in many retirement plans.",
  },
  {
    rate: "5%",
    netWorth: "$4,800,000",
    yearlyIncome: "$240,000",
    monthlyIncome: "$20,000",
    view: "more efficient on paper, but meaningfully riskier.",
  },
];

const faqItems = [
  {
    question: "Is $6 million enough to generate $20,000 a month?",
    answer:
      "At a 4% withdrawal rate, yes, that is the classic benchmark. But whether it feels safe depends on taxes, lifestyle, market conditions, and how long the portfolio needs to last.",
  },
  {
    question: "Can I reach $20,000 a month with less than $5 million?",
    answer:
      "Only by using a higher withdrawal rate or taking more risk. That may work in some cases, but it usually reduces the margin for error during downturns or long retirements.",
  },
  {
    question: "Does $20,000 a month mean financial freedom?",
    answer:
      "For many people, yes. But financial freedom is not just about income. It depends on expenses, location, obligations, and how stable that income remains over time.",
  },
  {
    question: "Should I aim for income first or net worth first?",
    answer:
      "Income is the better starting point. Net worth only matters because it produces income. The lifestyle you want should define the target, not the other way around.",
  },
];

export default function Page() {
  return (
    <main className="cw-page">
      <article className="cw-shell">
        <header className="cw-hero">
          <div className="cw-eyebrow">Income target</div>

          <h1 className="cw-title">{pageTitle}</h1>

          <p className="cw-lead">
            Generating $20,000 a month from investments requires a large
            portfolio, but the real question is not just the number. It is how
            much pressure that number puts on your plan.
          </p>

          <p className="cw-intro">
            At this level, the math becomes simple and the decisions become
            harder. $20,000 a month means $240,000 a year. What changes is how
            much capital you need to produce that income without exposing
            yourself to unnecessary risk.
          </p>

          <p className="cw-intro">
            The withdrawal rate is what drives everything. A lower rate demands
            more wealth, but usually creates a more stable plan. A higher rate
            reduces the target, but increases the strain on the portfolio from
            day one.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> generating $20,000 a month typically
              requires between $4.8 million and $8 million. The number changes
              with the rate. The risk behind it changes with your life.
            </p>
          </div>

          <div className="cw-hero-actions">
            <Link href={calculatorPath} className="cw-button">
              Calculate Your Required Net Worth →
            </Link>
          </div>
        </header>

        <section className="cw-section">
          <h2 className="cw-section-title">
            How much portfolio usually supports $20,000 a month
          </h2>

          <p className="cw-paragraph">
            The table below shows three different ways to generate the same
            $240,000 per year. The income is identical. The level of risk is not.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Withdrawal rate</th>
                  <th>Net worth required</th>
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
            The 4% benchmark lands around $6 million, which is why that number
            appears frequently in higher-income retirement discussions. But it
            is only a starting point, not a guarantee.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What $20,000 a month actually looks like in real life
          </h2>

          <p className="cw-paragraph">
            On paper, $20,000 a month sounds like a high-income retirement. In
            practice, it usually represents a wide margin of flexibility rather
            than unlimited spending.
          </p>

          <ul className="cw-list">
            <li>premium housing with strong flexibility.</li>
            <li>frequent travel without tight budgeting.</li>
            <li>healthcare and insurance without constant stress.</li>
            <li>room for family support, taxes, and unexpected costs.</li>
          </ul>

          <p className="cw-paragraph">
            In most parts of the US, this level of income feels wealthy. In very
            high-cost areas, it still feels strong, but not excessive. The number
            is large, but the lifestyle it buys still depends heavily on where
            and how you live.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why the withdrawal rate matters more than the number
          </h2>

          <p className="cw-paragraph">
            It is easy to focus on the portfolio size first. That is natural, but
            incomplete. A $4.8 million portfolio at 5% produces the same income
            as an $8 million portfolio at 3%, but those are very different plans.
          </p>

          <ul className="cw-list">
            <li>lower rates reduce long-term pressure on the portfolio.</li>
            <li>higher rates increase exposure to bad market timing.</li>
            <li>long retirements usually reward more conservative assumptions.</li>
            <li>flexible spending makes higher rates easier to survive.</li>
          </ul>

          <p className="cw-paragraph">
            The difference is not visible in the income number. It shows up later
            when markets are weak, inflation rises, or retirement lasts longer
            than expected.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why high-income retirement still requires discipline
          </h2>

          <p className="cw-paragraph">
            A $20,000 monthly income can feel like a safe zone, but it does not
            remove risk. It changes the scale of decisions, not the need for
            them.
          </p>

          <p className="cw-paragraph">
            Larger portfolios can absorb more volatility, but they also carry
            more exposure. Taxes, spending habits, and investment decisions still
            shape how long that income lasts.
          </p>

          <p className="cw-paragraph">
            The plan may look strong on paper. The real test is how it behaves
            over decades.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              See what your own $20,000/month path looks like
            </h2>

            <p className="cw-cta-text">
              Test different withdrawal rates, timelines, and contribution levels
              to understand how much net worth you may actually need.
            </p>

            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Use the Calculator →
              </Link>
            </div>
          </div>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">Explore related pages</h2>

          <ul className="cw-list">
            <li>
              <Link href="/what-net-worth-generates-10000-a-month">
                what net worth generates $10,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/what-net-worth-generates-30000-a-month">
                what net worth generates $30,000 a month.
              </Link>
            </li>
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
              <Link href={calculatorPath}>
                compound interest calculator.
              </Link>
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
            Generating $20,000 per month typically requires between $4.8 million
            and $8 million, depending on how conservative you want to be.
          </p>

          <p className="cw-paragraph">
            The real decision is not just how to reach that number. It is how
            durable you want the income to be once you get there.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own path to $20,000 a month?
            </h2>

            <p className="cw-cta-text">
              Run your numbers and see how different strategies change your
              required net worth.
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
