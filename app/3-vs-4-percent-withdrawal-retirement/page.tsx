import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/3-vs-4-percent-withdrawal-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "3% vs 4% Withdrawal Rate — The Safety Trade-Off Behind Retirement Income";
const pageTitle =
  "3% vs 4% Withdrawal Rate — The Safety Trade-Off Behind Retirement Income";

const pageDescription =
  "Compare 3% vs 4% withdrawal rates for retirement. See how much net worth each strategy requires and how safety, income, risk, and long-term flexibility change.";

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
    netWorth3: "$2.00M",
    netWorth4: "$1.50M",
    difference: "$500K less with 4%",
  },
  {
    income: "$10,000/month",
    yearly: "$120,000",
    netWorth3: "$4.00M",
    netWorth4: "$3.00M",
    difference: "$1M less with 4%",
  },
  {
    income: "$20,000/month",
    yearly: "$240,000",
    netWorth3: "$8.00M",
    netWorth4: "$6.00M",
    difference: "$2M less with 4%",
  },
  {
    income: "$40,000/month",
    yearly: "$480,000",
    netWorth3: "$16.00M",
    netWorth4: "$12.00M",
    difference: "$4M less with 4%",
  },
];

const faqItems = [
  {
    question: "Is a 3% withdrawal rate safer than 4%?",
    answer:
      "Usually, yes. A 3% withdrawal rate is more conservative because it removes less money from the portfolio each year. That can improve durability, especially for early retirees, long retirement timelines, or people who want more protection against market downturns.",
  },
  {
    question: "Why does 4% require less net worth than 3%?",
    answer:
      "Because the portfolio is being asked to produce more income per dollar invested. At 4%, each $1 million may support about $40,000 per year. At 3%, the same $1 million may support about $30,000 per year.",
  },
  {
    question: "Is the 4% rule still a good retirement starting point?",
    answer:
      "It can be a useful starting point, but it is not a guarantee. Taxes, fees, inflation, asset allocation, retirement length, market timing, and spending flexibility all affect whether 4% is appropriate.",
  },
  {
    question: "Who should consider a 3% withdrawal strategy?",
    answer:
      "A 3% strategy may fit people who want more safety, expect a long retirement, are retiring early, have less flexible spending, or want to preserve capital for legacy, healthcare, or future uncertainty.",
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
            A 3% withdrawal rate and a 4% withdrawal rate look close on paper.
            In real retirement planning, they can produce very different levels
            of safety, income, and pressure.
          </p>

          <p className="cw-intro">
            A 3% strategy usually requires more net worth, but it gives the
            portfolio more room to survive bad markets, inflation, healthcare
            costs, and a longer-than-expected retirement.
          </p>

          <p className="cw-intro">
            A 4% strategy usually requires less net worth, but it asks more from
            the portfolio every year. That can make retirement easier to reach,
            but harder to protect if the early years go badly.
          </p>

          <p className="cw-intro">
            The formula is simple. The outcome is not.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> moving from 3% to 4% can reduce the
              required portfolio by 25%, but the lower capital requirement comes
              with higher withdrawal pressure.
            </p>
          </div>

          <div className="cw-hero-actions">
            <Link href={calculatorPath} className="cw-button">
              Run Your Numbers →
            </Link>
          </div>
        </header>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The real trade-off is safety versus required capital
          </h2>

          <p className="cw-paragraph">
            A 3% withdrawal rate is more conservative. It means withdrawing
            $30,000 per year for every $1 million invested. A 4% withdrawal rate
            means withdrawing $40,000 per year for every $1 million invested.
          </p>

          <p className="cw-paragraph">
            That extra 1 percentage point may look small, but it changes the
            entire retirement equation. The same income target requires much
            more capital at 3% than it does at 4%.
          </p>

          <p className="cw-paragraph">
            Lower withdrawals protect the portfolio. Higher withdrawals make the
            target easier to reach.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            How much net worth you need at 3% versus 4%
          </h2>

          <p className="cw-paragraph">
            The difference becomes clearer when you compare real monthly income
            targets. At lower income levels, the gap is meaningful. At higher
            income levels, the gap can reach millions of dollars.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>Yearly income</th>
                  <th>3% strategy</th>
                  <th>4% strategy</th>
                  <th>Difference</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td>{row.income}</td>
                    <td>{row.yearly}</td>
                    <td>{row.netWorth3}</td>
                    <td>{row.netWorth4}</td>
                    <td>{row.difference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            For a $10,000 monthly income target, the difference is about
            $1 million. At $40,000 a month, the difference becomes about
            $4 million.
          </p>

          <p className="cw-paragraph">
            A small percentage can become a very large number.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why 3% feels more conservative
          </h2>

          <p className="cw-paragraph">
            A 3% withdrawal rate gives the portfolio more breathing room. It may
            be especially attractive for people who are retiring early, expect a
            long retirement, want to preserve wealth, or do not want their
            lifestyle to depend heavily on strong market performance.
          </p>

          <ul className="cw-list">
            <li>more protection against poor market timing.</li>
            <li>more room for inflation and healthcare costs.</li>
            <li>lower pressure on the portfolio each year.</li>
            <li>better fit for long or early retirements.</li>
            <li>more potential to preserve capital over time.</li>
          </ul>

          <p className="cw-paragraph">
            The downside is clear: you need more money upfront. That can delay
            retirement or require a larger savings target.
          </p>

          <p className="cw-paragraph">
            More safety usually has a price.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why 4% can still be useful
          </h2>

          <p className="cw-paragraph">
            A 4% withdrawal rate is more efficient because it supports more
            income from the same portfolio. That can make retirement feel more
            reachable, especially for people with flexible spending, shorter
            retirement horizons, other income sources, or a willingness to
            adjust during difficult markets.
          </p>

          <ul className="cw-list">
            <li>lower net worth required for the same income target.</li>
            <li>more income from each dollar invested.</li>
            <li>useful as a planning benchmark.</li>
            <li>better fit when spending can adjust if needed.</li>
            <li>more practical for people who do not want to oversave.</li>
          </ul>

          <p className="cw-paragraph">
            The risk is that 4% leaves less room for bad timing. If markets fall
            early in retirement and withdrawals continue, the portfolio may face
            more stress.
          </p>

          <p className="cw-paragraph">
            More income today can mean less safety tomorrow.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The smarter choice depends on your pressure points
          </h2>

          <p className="cw-paragraph">
            Neither rate is automatically right. A 3% strategy can be too
            conservative for someone who has flexible spending and other income
            sources. A 4% strategy can be too aggressive for someone retiring
            young with high fixed costs and little room to cut expenses.
          </p>

          <p className="cw-paragraph">
            The real question is not only “which rate gives me enough income?”
            It is “which rate can survive the kind of retirement I actually
            want?”
          </p>

          <p className="cw-paragraph">
            Withdrawal rate is not just math. It is the pressure level you place
            on your future self.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Test both withdrawal strategies
            </h2>

            <p className="cw-cta-text">
              Use the calculator to compare how different withdrawal rates,
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
            Explore related withdrawal strategies
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
              <Link href="/how-much-do-you-need-for-5-percent-withdrawal">
                how much net worth you need for a 5% withdrawal rate.
              </Link>
            </li>
            <li>
              <Link href="/4-vs-5-percent-withdrawal-retirement">
                4% vs 5% withdrawal rate comparison.
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
            The difference between 3% and 4% is not just technical. It defines
            how much capital you need, how much income you can take, and how much
            pressure your portfolio carries over decades.
          </p>

          <p className="cw-paragraph">
            A 3% strategy prioritizes durability. A 4% strategy prioritizes
            efficiency. The best choice depends on your timeline, spending
            flexibility, risk tolerance, and need for long-term protection.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to compare your own withdrawal rate?
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
