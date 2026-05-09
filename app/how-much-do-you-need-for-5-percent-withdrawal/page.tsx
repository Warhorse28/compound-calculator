import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/how-much-do-you-need-for-5-percent-withdrawal";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "What Net Worth Supports a 5% Withdrawal Rate?";
const pageTitle =
  "What Net Worth Supports a 5% Withdrawal Rate?";

const pageDescription =
  "See how much net worth is needed at a 5% withdrawal rate. Compare income targets, required portfolio sizes, risk, flexibility, and how 5% compares with 3% and 4% withdrawal strategies.";

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
    netWorth: "$1.20 million",
    view: "Lower capital requirement, but less room for weak markets or unexpected spending.",
  },
  {
    income: "$10,000/month",
    yearlyIncome: "$120,000",
    netWorth: "$2.40 million",
    view: "A reachable high-income target, but more aggressive than a 3% or 4% plan.",
  },
  {
    income: "$20,000/month",
    yearlyIncome: "$240,000",
    netWorth: "$4.80 million",
    view: "Strong income potential, but the portfolio must carry more pressure every year.",
  },
  {
    income: "$40,000/month",
    yearlyIncome: "$480,000",
    netWorth: "$9.60 million",
    view: "Very high income, but durability depends heavily on flexibility and risk control.",
  },
];

const faqItems = [
  {
    question: "How do you calculate net worth needed at a 5% withdrawal rate?",
    answer:
      "Divide your desired yearly retirement income by 0.05. For example, $120,000 per year divided by 5% equals $2.4 million. This is a simple estimate before taxes, inflation, fees, and market risk.",
  },
  {
    question: "Is a 5% withdrawal rate too aggressive?",
    answer:
      "It can be aggressive, especially for long retirements or portfolios with little spending flexibility. A 5% withdrawal rate pulls more income from the portfolio each year, which leaves less room for bad market timing, inflation, and unexpected expenses.",
  },
  {
    question: "How much net worth do I need for $10,000 a month at 5%?",
    answer:
      "At a 5% withdrawal rate, $10,000 a month equals $120,000 per year, which points to about $2.4 million in net worth before taxes and other real-world adjustments.",
  },
  {
    question: "When can a 5% withdrawal rate make sense?",
    answer:
      "A 5% rate may make more sense when retirement is shorter, spending can adjust, fixed costs are low, or other income sources such as Social Security, pensions, rental income, or part-time work reduce pressure on the portfolio.",
  },
];

export default function Page() {
  return (
    <main className="cw-page">
      <article className="cw-shell">
        <header className="cw-hero">
          <div className="cw-eyebrow">Aggressive withdrawal strategy</div>

          <h1 className="cw-title">{pageTitle}</h1>

          <p className="cw-lead">
            A 5% withdrawal rate can make retirement look much closer. It lowers
            the net worth target, but it also asks the portfolio to carry more
            risk every year.
          </p>

          <p className="cw-intro">
            At 5%, every $1 million of portfolio value may support about
            $50,000 per year, or roughly $4,167 per month before taxes. That is
            more income than a 3% or 4% strategy, but it leaves less margin for
            bad timing.
          </p>

          <p className="cw-intro">
            This is why 5% is not just a bigger income assumption. It is a
            different risk profile. The plan may look easier on paper while
            becoming more fragile in real life.
          </p>

          <p className="cw-intro">
            More income today can mean less safety tomorrow.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> with a 5% withdrawal rate, every
              $1,000 per month of retirement income requires about $240,000 in
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
            The 5% rule lowers the target, but raises the pressure
          </h2>

          <p className="cw-paragraph">
            The calculation is simple: take the annual income you want and
            divide it by 0.05. If you want $60,000 per year, the estimate is
            $1.2 million. If you want $120,000 per year, the estimate is
            $2.4 million.
          </p>

          <p className="cw-paragraph">
            That lower target is the main appeal of 5%. It can make a retirement
            number feel more reachable, especially when compared with 3% or 4%.
            But the lower target exists because the portfolio is being asked to
            pay out more each year.
          </p>

          <p className="cw-paragraph">
            The number looks easier. The risk behind it is heavier.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Net worth needed at a 5% withdrawal rate
          </h2>

          <p className="cw-paragraph">
            The table below shows how much net worth may be needed for different
            monthly income targets using a 5% withdrawal rate. These numbers are
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
            $2.4 million at a 5% withdrawal rate. A $20,000 monthly target
            points to about $4.8 million.
          </p>

          <p className="cw-paragraph">
            That is meaningfully lower than a 3% or 4% target. But the trade-off
            is real: the portfolio has less room to absorb weak markets, higher
            inflation, healthcare shocks, or a longer retirement than expected.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why 5% can be tempting
          </h2>

          <p className="cw-paragraph">
            A 5% withdrawal rate is attractive because it makes the required
            portfolio smaller. For someone trying to retire sooner, that can
            feel powerful.
          </p>

          <ul className="cw-list">
            <li>lower net worth required for the same income target.</li>
            <li>more income from each dollar invested.</li>
            <li>shorter path to a retirement number on paper.</li>
            <li>more flexibility when other income sources exist.</li>
            <li>better fit when spending can be reduced during weak years.</li>
          </ul>

          <p className="cw-paragraph">
            The problem is that the advantage shows up immediately, while the
            risk may show up later. A 5% plan can feel comfortable in good
            markets and then become much tighter when returns disappoint.
          </p>

          <p className="cw-paragraph">
            Retirement is not tested by average years. It is tested by bad ones.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Where 5% becomes dangerous
          </h2>

          <p className="cw-paragraph">
            A 5% withdrawal rate becomes more fragile when fixed expenses are
            high, retirement is long, investment returns are weak early, or the
            retiree has little ability to reduce spending.
          </p>

          <ul className="cw-list">
            <li>early retirement with a long time horizon.</li>
            <li>high fixed housing or healthcare expenses.</li>
            <li>little flexibility to cut travel or discretionary spending.</li>
            <li>portfolio is the only major income source.</li>
            <li>low tolerance for market volatility or lifestyle cuts.</li>
          </ul>

          <p className="cw-paragraph">
            The biggest risk is not that 5% fails immediately. It is that the
            portfolio loses resilience quietly, especially if withdrawals happen
            during a weak market stretch.
          </p>

          <p className="cw-paragraph">
            Higher income can hide lower durability.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            How 5% compares with 4% and 3%
          </h2>

          <p className="cw-paragraph">
            The difference between 3%, 4%, and 5% is not cosmetic. It changes
            the entire retirement target. The higher the withdrawal rate, the
            less net worth you need. But the higher rate also leaves less
            protection if reality turns against the plan.
          </p>

          <p className="cw-paragraph">
            At $10,000 per month, a 3% strategy points to about $4 million, a
            4% strategy points to about $3 million, and a 5% strategy points to
            about $2.4 million.
          </p>

          <p className="cw-paragraph">
            That gap is why withdrawal rate matters so much. It does not just
            change the math. It changes the risk you are accepting.
          </p>

          <p className="cw-paragraph">
            Withdrawal rate is not just a formula. It is a stress test.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Test different withdrawal strategies in seconds
            </h2>

            <p className="cw-cta-text">
              Use the calculator to compare 3%, 4%, and 5% scenarios and see how
              each one changes your required portfolio and retirement income
              target.
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
              <Link href="/how-much-net-worth-needed-at-4-percent-withdrawal">
                how much net worth you need at a 4% withdrawal rate.
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
              <Link href="/net-worth-needed-to-retire-with-20000-a-month">
                net worth needed to retire with $20,000 a month.
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
            A 5% withdrawal rate can significantly reduce the amount of net
            worth needed to retire, but it does that by increasing pressure on
            the portfolio.
          </p>

          <p className="cw-paragraph">
            It may work when spending is flexible, other income sources exist,
            or the retirement timeline is shorter. But it can become dangerous
            when the plan depends on strong markets and steady withdrawals for
            decades.
          </p>

          <p className="cw-paragraph">
            The best use of 5% is not blind optimism. It is comparison: test the
            lower target, understand the higher risk, then decide whether the
            trade-off fits the retirement you actually want.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to compare your withdrawal assumptions?
            </h2>

            <p className="cw-cta-text">
              Estimate how different withdrawal rates change your required net
              worth, monthly income, and long-term retirement margin.
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
