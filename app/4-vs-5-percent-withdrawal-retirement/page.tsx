import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/4-vs-5-percent-withdrawal-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "4% vs 5% Withdrawal Rate — The Extra Income Comes With a Cost";
const pageTitle =
  "4% vs 5% Withdrawal Rate — The Extra Income Comes With a Cost";

const pageDescription =
  "Compare 4% vs 5% withdrawal rates for retirement. See how much net worth each strategy requires and how income, risk, flexibility, and long-term safety change.";

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
    yearly: "$60,000",
    netWorth4: "$1.50M",
    netWorth5: "$1.20M",
    difference: "$300K less with 5%",
  },
  {
    income: "$10,000/month",
    yearly: "$120,000",
    netWorth4: "$3.00M",
    netWorth5: "$2.40M",
    difference: "$600K less with 5%",
  },
  {
    income: "$20,000/month",
    yearly: "$240,000",
    netWorth4: "$6.00M",
    netWorth5: "$4.80M",
    difference: "$1.2M less with 5%",
  },
  {
    income: "$40,000/month",
    yearly: "$480,000",
    netWorth4: "$12.00M",
    netWorth5: "$9.60M",
    difference: "$2.4M less with 5%",
  },
];

const faqItems = [
  {
    question: "Is a 5% withdrawal rate too risky?",
    answer:
      "It can be risky, especially for long retirements, early retirees, or portfolios that have little room for spending cuts. A 5% withdrawal rate asks more from the portfolio each year, so bad market timing, inflation, and healthcare costs can create more pressure.",
  },
  {
    question: "Why does 5% require less net worth than 4%?",
    answer:
      "Because each dollar of portfolio value is being asked to produce more income. At 4%, each $1 million may support about $40,000 per year. At 5%, each $1 million may support about $50,000 per year.",
  },
  {
    question: "Can a 5% withdrawal rate ever make sense?",
    answer:
      "Yes, but usually only with flexibility. It may work better for people with shorter retirement timelines, other income sources, lower fixed costs, or the ability to reduce spending during weak markets.",
  },
  {
    question: "Is 4% safer than 5%?",
    answer:
      "Generally, yes. A 4% strategy leaves more money invested each year and gives the portfolio more room to handle market downturns, inflation, and unexpected expenses.",
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
            A 5% withdrawal rate can make retirement look easier to reach. It
            reduces the portfolio you need on paper, but it also increases the
            pressure your money must carry every year.
          </p>

          <p className="cw-intro">
            A 4% strategy is usually more balanced. It may still support strong
            income, but it leaves more room for market downturns, inflation,
            healthcare surprises, and years when spending runs higher than
            expected.
          </p>

          <p className="cw-intro">
            A 5% strategy is more aggressive. It can create more income today,
            but it leaves less margin if the early years of retirement are
            difficult.
          </p>

          <p className="cw-intro">
            More income today can mean less safety tomorrow.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> moving from 4% to 5% can reduce the
              required portfolio by about 20%, but the lower target comes with
              higher withdrawal pressure and less long-term protection.
            </p>
          </div>

          <div className="cw-hero-actions">
            <Link href={calculatorPath} className="cw-button">
              Test Your Scenario →
            </Link>
          </div>
        </header>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The real trade-off is income now versus durability later
          </h2>

          <p className="cw-paragraph">
            A 4% withdrawal rate means withdrawing $40,000 per year for every
            $1 million invested. A 5% withdrawal rate means withdrawing $50,000
            per year for every $1 million invested.
          </p>

          <p className="cw-paragraph">
            That difference can feel attractive because it lowers the amount of
            net worth needed to hit the same income target. But it also makes
            the portfolio work harder from the beginning.
          </p>

          <p className="cw-paragraph">
            The number looks better. The pressure behind it matters more.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            How much net worth you need at 4% versus 5%
          </h2>

          <p className="cw-paragraph">
            The difference becomes clearer when you compare real monthly income
            targets. A 5% withdrawal rate can reduce the required portfolio
            meaningfully, but the savings come from accepting more risk.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>Yearly income</th>
                  <th>4% strategy</th>
                  <th>5% strategy</th>
                  <th>Difference</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td>{row.income}</td>
                    <td>{row.yearly}</td>
                    <td>{row.netWorth4}</td>
                    <td>{row.netWorth5}</td>
                    <td>{row.difference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            For a $10,000 monthly income target, the difference is about
            $600,000. At $40,000 a month, the difference grows to about
            $2.4 million.
          </p>

          <p className="cw-paragraph">
            That is why 5% is tempting. It can make a retirement target feel
            closer. But it also gives the portfolio less room to recover when
            markets turn against you.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why 4% is usually the more balanced path
          </h2>

          <p className="cw-paragraph">
            A 4% withdrawal rate is often used because it sits between income
            efficiency and long-term caution. It does not guarantee safety, but
            it usually gives the portfolio more room to handle uncertainty than
            a 5% strategy.
          </p>

          <ul className="cw-list">
            <li>more room for market downturns.</li>
            <li>less pressure from sequence-of-returns risk.</li>
            <li>better fit for longer retirement timelines.</li>
            <li>more flexibility if inflation runs hot.</li>
            <li>stronger protection when spending cannot easily be reduced.</li>
          </ul>

          <p className="cw-paragraph">
            The trade-off is that 4% requires more capital. You may need to save
            longer or accept a lower income target to keep the plan more
            conservative.
          </p>

          <p className="cw-paragraph">
            Safety usually asks for patience.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why 5% can look good — and still be dangerous
          </h2>

          <p className="cw-paragraph">
            A 5% withdrawal rate can work in some situations, but it is not a
            casual assumption. It works best when the retiree has flexibility:
            lower fixed costs, other income sources, willingness to reduce
            spending, or a shorter expected retirement period.
          </p>

          <ul className="cw-list">
            <li>lower net worth required for the same income target.</li>
            <li>more income from each dollar invested.</li>
            <li>better fit when spending can be adjusted.</li>
            <li>more practical with pensions, Social Security, or other income.</li>
            <li>riskier when fixed expenses are high.</li>
          </ul>

          <p className="cw-paragraph">
            The risk is hidden early. A 5% strategy may feel comfortable when
            markets are strong, but it can become fragile if poor returns happen
            near the start of retirement.
          </p>

          <p className="cw-paragraph">
            A higher withdrawal rate feels better early. Retirement lasts
            longer than early.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The real question is how flexible your spending is
          </h2>

          <p className="cw-paragraph">
            The right withdrawal rate depends less on the percentage alone and
            more on the lifestyle behind it. A retiree with flexible travel and
            discretionary spending can handle a higher withdrawal rate more
            easily than someone whose budget is mostly fixed.
          </p>

          <p className="cw-paragraph">
            If your spending can adjust, 5% may be more survivable. If your
            spending cannot adjust, 5% can put the portfolio under pressure
            quickly.
          </p>

          <p className="cw-paragraph">
            Withdrawal rate is not just a formula. It is a stress test for your
            future lifestyle.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Compare your withdrawal strategy in seconds
            </h2>

            <p className="cw-cta-text">
              Use the calculator to test how different withdrawal rates,
              portfolio sizes, and income targets change your retirement number.
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
            Explore more withdrawal strategies
          </h2>

          <ul className="cw-list">
            <li>
              <Link href="/3-vs-4-percent-withdrawal-retirement">
                3% vs 4% withdrawal rate comparison.
              </Link>
            </li>
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
              <Link href="/how-much-net-worth-needed-at-3-percent-withdrawal">
                how much net worth you need at a 3% withdrawal rate.
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
            The difference between 4% and 5% is not just about numbers. It is
            about how much uncertainty you are asking your portfolio to survive.
          </p>

          <p className="cw-paragraph">
            A 4% strategy usually gives more durability. A 5% strategy gives
            more income efficiency, but less room for bad timing, inflation,
            and long retirement timelines.
          </p>

          <p className="cw-paragraph">
            The best choice is not the one that looks strongest in a simple
            calculator. It is the one that can survive the retirement you
            actually plan to live.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own withdrawal rate?
            </h2>

            <p className="cw-cta-text">
              Estimate how different withdrawal assumptions change your required
              net worth and monthly retirement income.
            </p>

            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Calculate Your Plan →
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
