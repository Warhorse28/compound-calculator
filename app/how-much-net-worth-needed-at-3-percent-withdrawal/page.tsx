import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/how-much-net-worth-needed-at-3-percent-withdrawal";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "How Much Net Worth Do You Need at a 3% Withdrawal Rate?";
const pageTitle =
  "How Much Net Worth Do You Need at a 3% Withdrawal Rate?";

const pageDescription =
  "See how much net worth is needed at a 3% withdrawal rate. Understand why this conservative strategy requires more capital but may offer stronger long-term retirement protection.";

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
    yearlyIncome: "$60,000",
    netWorth: "$2.00 million",
    view: "A conservative retirement target with stronger protection, but a higher savings requirement.",
  },
  {
    income: "$10,000/month",
    yearlyIncome: "$120,000",
    netWorth: "$4.00 million",
    view: "A strong income goal that requires serious capital but creates more long-term breathing room.",
  },
  {
    income: "$20,000/month",
    yearlyIncome: "$240,000",
    netWorth: "$8.00 million",
    view: "A high-income retirement target built around durability, caution, and capital preservation.",
  },
  {
    income: "$40,000/month",
    yearlyIncome: "$480,000",
    netWorth: "$16.00 million",
    view: "An ultra-high target where safety requires a very large portfolio base.",
  },
];

const faqItems = [
  {
    question: "How do you calculate net worth needed at a 3% withdrawal rate?",
    answer:
      "Divide your desired yearly retirement income by 0.03. For example, $120,000 per year divided by 3% equals $4 million. This gives a conservative estimate before taxes, fees, inflation, and personal spending differences.",
  },
  {
    question: "Is a 3% withdrawal rate safer than 4%?",
    answer:
      "Usually, yes. A 3% withdrawal rate takes less from the portfolio each year, which gives the plan more room to handle market downturns, inflation, healthcare costs, and longer retirement timelines.",
  },
  {
    question: "How much net worth do I need for $10,000 a month at 3%?",
    answer:
      "At a 3% withdrawal rate, $10,000 a month equals $120,000 per year, which points to about $4 million in net worth before taxes and other real-world adjustments.",
  },
  {
    question: "Who should consider using a 3% withdrawal rate?",
    answer:
      "A 3% withdrawal rate may fit early retirees, people with long retirement horizons, conservative investors, high fixed expenses, or anyone who wants more protection against bad market timing and future uncertainty.",
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
            A 3% withdrawal rate is one of the more conservative ways to turn a
            portfolio into retirement income. It asks for more net worth upfront,
            but it puts less pressure on the portfolio later.
          </p>

          <p className="cw-intro">
            At 3%, every $1 million of portfolio value may support about $30,000
            per year, or roughly $2,500 per month before taxes. That is less
            income than a 4% or 5% strategy, but the lower withdrawal can make
            the plan more durable.
          </p>

          <p className="cw-intro">
            This approach is not about maximizing income. It is about reducing
            fragility. For early retirement, long timelines, or high uncertainty,
            that extra caution can matter more than the higher income a more
            aggressive rate may promise.
          </p>

          <p className="cw-intro">
            Less income today can mean more safety tomorrow.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> with a 3% withdrawal rate, every
              $1,000 per month of retirement income requires about $400,000 in
              portfolio value before taxes and real-world adjustments.
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
            The 3% rule makes safety more expensive
          </h2>

          <p className="cw-paragraph">
            The calculation is simple: take the annual income you want and
            divide it by 0.03. If you want $60,000 per year, the estimate is
            $2 million. If you want $120,000 per year, the estimate is
            $4 million.
          </p>

          <p className="cw-paragraph">
            That higher net worth requirement is the cost of being conservative.
            A 3% withdrawal rate leaves more money invested, which can help the
            portfolio survive inflation, poor markets, healthcare shocks, and a
            retirement that lasts longer than expected.
          </p>

          <p className="cw-paragraph">
            The math is simple. The discipline is not.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Net worth needed at a 3% withdrawal rate
          </h2>

          <p className="cw-paragraph">
            The table below shows how much net worth may be needed for different
            monthly income targets using a 3% withdrawal rate. These numbers are
            before taxes, fees, inflation adjustments, and personal spending
            differences.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>Yearly income</th>
                  <th>Net worth needed</th>
                  <th>What it means</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td>{row.income}</td>
                    <td>{row.yearlyIncome}</td>
                    <td>{row.netWorth}</td>
                    <td>{row.view}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            A $10,000 monthly retirement income target points to about
            $4 million at a 3% withdrawal rate. A $20,000 monthly target points
            to about $8 million.
          </p>

          <p className="cw-paragraph">
            That can feel demanding, but the point of 3% is not convenience. The
            point is durability.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why conservative withdrawals can protect the plan
          </h2>

          <p className="cw-paragraph">
            A lower withdrawal rate gives the portfolio more room to recover
            after weak markets. That matters because the early years of
            retirement can be especially dangerous if withdrawals continue while
            asset values are falling.
          </p>

          <ul className="cw-list">
            <li>lower pressure on the portfolio each year.</li>
            <li>more room to recover from market downturns.</li>
            <li>stronger protection against sequence-of-returns risk.</li>
            <li>better fit for early or long retirements.</li>
            <li>more ability to preserve capital over time.</li>
          </ul>

          <p className="cw-paragraph">
            The goal is not to avoid all risk. No withdrawal rate can do that.
            The goal is to reduce how much has to go right for the retirement
            plan to keep working.
          </p>

          <p className="cw-paragraph">
            A safer plan usually needs more room.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            When a 3% withdrawal rate may make sense
          </h2>

          <p className="cw-paragraph">
            A 3% withdrawal rate is most useful when the retirement timeline is
            long, spending flexibility is limited, or the retiree wants a
            stronger margin against uncertainty.
          </p>

          <ul className="cw-list">
            <li>early retirement before a traditional retirement age.</li>
            <li>long retirement timeline of 30 years or more.</li>
            <li>high fixed expenses that cannot easily be reduced.</li>
            <li>strong desire to preserve wealth or leave a legacy.</li>
            <li>low tolerance for market volatility and bad timing.</li>
          </ul>

          <p className="cw-paragraph">
            In these situations, 3% can feel less like overplanning and more
            like protection. The higher target may be harder to reach, but the
            plan may feel calmer once retirement begins.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            When 3% may be too conservative
          </h2>

          <p className="cw-paragraph">
            A 3% withdrawal rate is not automatically the best choice for
            everyone. It can require so much capital that it delays retirement
            longer than necessary, especially for someone with flexible spending,
            other income sources, or a shorter expected retirement timeline.
          </p>

          <ul className="cw-list">
            <li>retirement starts closer to a traditional age.</li>
            <li>spending can adjust during weak markets.</li>
            <li>Social Security, pensions, or rental income reduce pressure.</li>
            <li>the portfolio is not the only income source.</li>
            <li>the retiree values earlier freedom over maximum safety.</li>
          </ul>

          <p className="cw-paragraph">
            More safety is useful. Too much caution can also keep someone
            working years longer than needed.
          </p>

          <p className="cw-paragraph">
            A bigger number feels safer. It is not always better.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Test your own withdrawal strategy
            </h2>

            <p className="cw-cta-text">
              Use the calculator to compare different withdrawal rates,
              portfolio sizes, and income targets before relying on a retirement
              number.
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
              <Link href="/how-much-net-worth-needed-at-4-percent-withdrawal">
                how much net worth you need at a 4% withdrawal rate.
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
            A 3% withdrawal rate requires significantly more capital, but it can
            create one of the more durable retirement income structures.
          </p>

          <p className="cw-paragraph">
            It is not built for maximum income. It is built for lower pressure,
            longer timelines, and stronger protection against the parts of
            retirement that do not go according to plan.
          </p>

          <p className="cw-paragraph">
            The best use of 3% is not fear. It is clarity: understand the safer
            target, compare it with 4% and 5%, then decide how much safety your
            real retirement actually needs.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own retirement number?
            </h2>

            <p className="cw-cta-text">
              Estimate how your desired income, withdrawal rate, and portfolio
              size work together before depending on a long-term retirement
              target.
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
