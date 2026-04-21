import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/how-much-net-worth-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle = "How Much Net Worth Do You Actually Need to Retire?";
const pageTitle = "How Much Net Worth Do You Actually Need to Retire?";
const pageDescription =
  "Learn how much net worth you may need to retire based on monthly income goals, withdrawal rates, lifestyle expectations, and long-term retirement durability.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const incomeRows = [
  {
    monthlyIncome: "$3,000",
    rate3: "~$1.2 million",
    rate4: "~$900,000",
    rate5: "~$720,000",
  },
  {
    monthlyIncome: "$5,000",
    rate3: "~$2.0 million",
    rate4: "~$1.5 million",
    rate5: "~$1.2 million",
  },
  {
    monthlyIncome: "$10,000",
    rate3: "~$4.0 million",
    rate4: "~$3.0 million",
    rate5: "~$2.4 million",
  },
  {
    monthlyIncome: "$20,000",
    rate3: "~$8.0 million",
    rate4: "~$6.0 million",
    rate5: "~$4.8 million",
  },
  {
    monthlyIncome: "$30,000",
    rate3: "~$12.0 million",
    rate4: "~$9.0 million",
    rate5: "~$7.2 million",
  },
];

const faqItems = [
  {
    question: "Is there one retirement net worth number that works for everyone?",
    answer:
      "No. Retirement math always depends on the income you want, how long the portfolio needs to last, and how conservatively you plan to withdraw from it. The same net worth can feel abundant for one person and tight for another.",
  },
  {
    question: "Why does the withdrawal rate change the target so much?",
    answer:
      "Because the withdrawal rate decides how hard your portfolio has to work. A lower rate usually asks for more capital up front, but it also creates more long-term breathing room. A higher rate lowers the target, but increases pressure on the plan.",
  },
  {
    question: "Is the 4% rule enough to plan retirement?",
    answer:
      "It is a useful benchmark, not a guarantee. It helps frame the relationship between income and portfolio size, but early retirement, high spending, inflation, market volatility, and personal flexibility can all justify a different target.",
  },
  {
    question: "Should I focus more on net worth or retirement income?",
    answer:
      "Retirement income is usually the better starting point. Net worth matters because it funds that income, but income is what determines whether your lifestyle actually works month after month.",
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
            The amount of net worth you need to retire is not really about
            chasing an impressive number. It is about building a portfolio that
            can generate enough income to support your life without putting your
            future under constant strain.
          </p>

          <p className="cw-intro">
            That sounds obvious. It is also where many people go wrong. A round
            number feels satisfying, but retirement is not funded by satisfaction.
            It is funded by cash flow.
          </p>

          <p className="cw-intro">
            That is the real shift. Net worth is not the goal. What it produces
            is. Once you connect lifestyle, income, and withdrawal strategy, the
            retirement problem becomes much clearer and much more honest.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> your retirement number is not random.
              It usually comes from one simple relationship: the income you want
              divided by the withdrawal rate your portfolio can realistically
              sustain.
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
            The income rule that quietly drives the whole plan
          </h2>

          <p className="cw-paragraph">
            Retirement becomes easier to understand when you stop thinking in
            terms of raw net worth and start thinking in terms of income. Your
            portfolio is not the finish line by itself. Its job is to create
            usable monthly cash flow for years or decades.
          </p>

          <p className="cw-paragraph">
            That is why withdrawal rates matter so much. They translate a
            portfolio into spendable income. A lower withdrawal rate asks less
            from the portfolio each year and usually improves durability. A
            higher withdrawal rate lowers the amount of capital you need up
            front, but it also increases long-term risk.
          </p>

          <p className="cw-paragraph">
            The math is simple. Living with it is not. That is why a retirement
            number only becomes useful when it is tied to the life you actually
            want to fund.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>Estimated net worth (3%)</th>
                  <th>Estimated net worth (4%)</th>
                  <th>Estimated net worth (5%)</th>
                </tr>
              </thead>
              <tbody>
                {incomeRows.map((row) => (
                  <tr key={row.monthlyIncome}>
                    <td>{row.monthlyIncome}</td>
                    <td>{row.rate3}</td>
                    <td>{row.rate4}</td>
                    <td>{row.rate5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            The table shows why retirement planning rarely comes down to one
            headline number. A person targeting $10,000 a month may need roughly
            $2.4 million, $3 million, or $4 million depending on how much safety
            they want built into the plan. The estimate is useful. It is not a
            promise.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why the same lifestyle can require very different targets
          </h2>

          <p className="cw-paragraph">
            Two people can want a similar retirement lifestyle and still need
            very different net worth levels. That happens because retirement is
            shaped by more than spending alone. Time horizon, flexibility,
            market conditions, and tolerance for uncertainty all change the math.
          </p>

          <ul className="cw-list">
            <li>lower withdrawal rates demand more capital, but usually create more durability.</li>
            <li>earlier retirement often requires a larger margin of safety.</li>
            <li>higher inflation risk makes fragile plans feel tighter over time.</li>
            <li>flexible spending lowers pressure when markets are weak.</li>
          </ul>

          <p className="cw-paragraph">
            This is where many retirement estimates go wrong. They treat the
            number as if it lives in a vacuum. In reality, the same portfolio
            behaves very differently depending on how hard you ask it to work
            and how long it needs to carry you. A bigger number feels safer. It
            is not always safer.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The trap behind choosing a number that simply sounds impressive
          </h2>

          <p className="cw-paragraph">
            A lot of people start with a number that sounds impressive and then
            work backward. That feels intuitive, but it often leads to the wrong
            conclusion. Saying “I want to retire with $1 million” is clear as a
            sentence, but not especially useful as a plan.
          </p>

          <p className="cw-paragraph">
            What matters is not whether a number sounds big. What matters is
            what that number can actually support after inflation, taxes,
            spending, healthcare, and unpredictable market periods. A retirement
            target only becomes meaningful when it answers a real-life question:
            what lifestyle can this portfolio support with a level of risk I can
            live with?
          </p>

          <ul className="cw-list">
            <li>net worth without income context is incomplete.</li>
            <li>a plan that looks efficient can still feel fragile in practice.</li>
            <li>peace of mind often comes from margin, not from a minimum viable number.</li>
            <li>the strongest plans are usually built around ranges, not magic milestones.</li>
          </ul>

          <p className="cw-paragraph">
            The number looks good. The pressure behind it matters more. That is
            what separates a portfolio that looks strong on paper from one that
            actually feels durable in real life.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What usually matters more than the number itself
          </h2>

          <p className="cw-paragraph">
            The real question behind retirement is not only “How much do I
            need?” It is also “How much uncertainty can my plan absorb?”
            Retirement is not a single withdrawal. It is a long sequence of
            years, each with its own surprises.
          </p>

          <p className="cw-paragraph">
            That is why a more conservative retirement plan can feel better even
            when it requires a larger target. You are not buying a number. You
            are buying flexibility. You are buying time. You are buying the
            ability to handle weak markets, rising costs, and changes in
            personal priorities without feeling trapped.
          </p>

          <p className="cw-paragraph">
            For that reason, the best retirement number is rarely the lowest
            possible number. It is the number that fits your desired lifestyle
            and still leaves room for reality to happen. More income today can
            mean less safety tomorrow.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              See what your own retirement target looks like in real numbers
            </h2>
            <p className="cw-cta-text">
              Test your monthly income goal, return assumptions, and planning
              timeline instead of guessing from a round number alone.
            </p>
            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Run the Calculator →
              </Link>
            </div>
          </div>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Useful next reads if you want to go deeper
          </h2>

          <ul className="cw-list">
            <li>
              <Link href="/safe-withdrawal-rate-for-retirement">
                safe withdrawal rate for retirement.
              </Link>
            </li>
            <li>
              <Link href="/how-to-calculate-net-worth-needed-for-retirement">
                how to calculate net worth needed for retirement.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-10000-a-month">
                net worth needed to retire with $10,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/what-net-worth-generates-10000-a-month">
                what net worth generates $10,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-your-net-worth-generate">
                how much income can your net worth generate.
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
            FAQ: the questions people usually ask next
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
            The amount of net worth you need to retire is not a universal
            milestone. It depends on the income you want, the withdrawal
            strategy you trust, and the level of durability you want your plan
            to have.
          </p>

          <p className="cw-paragraph">
            That is why retirement planning becomes much stronger when you stop
            asking whether a number sounds impressive and start asking what that
            number can actually do for your life over time. Net worth is not the
            goal. What it produces is.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Ready to turn a rough idea into a real retirement target?
            </h2>
            <p className="cw-cta-text">
              Test your monthly income goal and see what level of net worth it
              may require under different assumptions.
            </p>
            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Start Your Estimate →
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
