import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/how-much-income-can-5-million-generate";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "What Income Can a $5 Million Portfolio Produce in Retirement?";
const pageTitle =
  "What Income Can a $5 Million Portfolio Produce in Retirement?";

const pageDescription =
  "Explore how much monthly income a $5 million portfolio can generate using different withdrawal rates and what that means for long-term retirement.";

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
    yearlyIncome: "$150,000",
    monthlyIncome: "$12,500",
    view: "very conservative with strong long-term durability.",
  },
  {
    rate: "4%",
    yearlyIncome: "$200,000",
    monthlyIncome: "$16,667",
    view: "balanced and widely used high-net-worth strategy.",
  },
  {
    rate: "5%",
    yearlyIncome: "$250,000",
    monthlyIncome: "$20,833",
    view: "higher income, but meaningfully more pressure.",
  },
];

const faqItems = [
  {
    question: "How much monthly income can $5 million generate at 4%?",
    answer:
      "At a 4% withdrawal rate, a $5 million portfolio points to about $200,000 per year, or roughly $16,667 per month before taxes. It is a strong income level, but still shaped by taxes, spending, and market conditions.",
  },
  {
    question: "Is $5 million enough for a very comfortable retirement?",
    answer:
      "For many households, yes. In most parts of the US, it supports a high level of flexibility and financial security. But the lifestyle it funds still depends on housing, taxes, travel habits, healthcare costs, and how long retirement lasts.",
  },
  {
    question: "Can a $5 million portfolio safely produce over $20,000 a month?",
    answer:
      "It can at a 5% withdrawal rate, but the trade-off is a lower margin of safety. Higher withdrawals may feel attractive today, but they usually leave the plan more exposed to inflation, bad market sequences, and long retirements.",
  },
  {
    question: "What matters more at this level: the portfolio size or the withdrawal strategy?",
    answer:
      "Both matter, but the withdrawal strategy determines how durable the income really is. A large portfolio helps, but even large portfolios can become fragile if the withdrawal pressure is too high.",
  },
];

export default function Page() {
  return (
    <main className="cw-page">
      <article className="cw-shell">
        <header className="cw-hero">
          <div className="cw-eyebrow">Income analysis</div>
          <h1 className="cw-title">{pageTitle}</h1>

          <p className="cw-lead">
            A $5 million portfolio moves retirement into a very different
            category. At this level, the conversation is no longer about simply
            covering expenses. It becomes about flexibility, control, and how
            durable you want that control to be.
          </p>

          <p className="cw-intro">
            That does not mean the work is over. It means the questions get more
            refined. The income your portfolio can safely produce still depends
            on how aggressively you withdraw and how much long-term pressure you
            are willing to place on the plan.
          </p>

          <p className="cw-intro">
            This is where financial independence starts to feel more stable, but
            not automatic. A large portfolio helps. A strong structure matters
            just as much. The number looks impressive. The pressure behind it
            matters more.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> a $5 million portfolio can produce
              somewhere between $12,500 and $20,833 per month under common
              withdrawal strategies. The income can look powerful across the
              board. The durability can look very different.
            </p>
          </div>

          <div className="cw-hero-actions">
            <Link href={calculatorPath} className="cw-button">
              Test Your Retirement Income →
            </Link>
          </div>
        </header>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What income a $5 million portfolio usually supports
          </h2>

          <p className="cw-paragraph">
            Here is the practical breakdown. The portfolio stays the same. What
            changes is the withdrawal rate and the amount of strain you place on
            the underlying capital.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Withdrawal rate</th>
                  <th>Yearly income</th>
                  <th>Monthly income</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.rate}>
                    <td>{row.rate}</td>
                    <td>{row.yearlyIncome}</td>
                    <td>{row.monthlyIncome}</td>
                    <td>{row.view}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            At a 4% withdrawal rate, a $5 million portfolio points to about
            $200,000 per year, or roughly $16,667 per month before taxes. That
            is why this number often feels like the dividing line between a
            comfortable retirement and a highly flexible one.
          </p>

          <p className="cw-paragraph">
            But the benchmark is only a reference point. It is not a promise. A
            portfolio can look strong on paper and still feel less secure in
            real life than people expect.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What changes when retirement reaches this level
          </h2>

          <p className="cw-paragraph">
            At $5 million, retirement planning shifts from constraint management
            to strategic control. There is more room to absorb market
            volatility, more freedom in lifestyle design, and more ability to
            make decisions without constant financial friction.
          </p>

          <ul className="cw-list">
            <li>greater flexibility in housing and location choices.</li>
            <li>more room for travel and discretionary spending.</li>
            <li>better resilience against unexpected costs and market stress.</li>
            <li>capacity to support both current lifestyle and legacy goals.</li>
          </ul>

          <p className="cw-paragraph">
            The biggest change is not only numerical. It is psychological. The
            plan can start to feel more stable and less fragile. That matters.
            But it does not make discipline optional.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why withdrawal discipline still matters at $5 million
          </h2>

          <p className="cw-paragraph">
            Even at this level, a poor withdrawal strategy can create long-term
            problems. The portfolio is larger, but the same forces still apply:
            inflation, bad market timing, taxes, and spending drift.
          </p>

          <ul className="cw-list">
            <li>3% usually creates a stronger long-term cushion.</li>
            <li>4% often balances income and durability more effectively.</li>
            <li>5% can feel stronger today, but less forgiving later.</li>
            <li>longer retirements make aggressive withdrawals harder to defend.</li>
          </ul>

          <p className="cw-paragraph">
            More income today can mean less safety tomorrow. That trade-off does
            not disappear just because the portfolio is large. It simply becomes
            easier to ignore until it matters.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why high-wealth retirement is still not automatic
          </h2>

          <p className="cw-paragraph">
            It is easy to assume $5 million guarantees a bulletproof retirement.
            It does not. It creates options, margin, and flexibility. That is
            valuable. But the structure behind the income still determines how
            calm or fragile the plan feels over decades.
          </p>

          <p className="cw-paragraph">
            Taxes can quietly reduce usable income. Lifestyle inflation can turn
            flexibility into dependency. A long retirement can expose weak
            assumptions more than people expect. A bigger portfolio feels safer.
            It is not always safer.
          </p>

          <p className="cw-paragraph">
            The real advantage of $5 million is not just that it generates more
            income. It is that it gives you more room to build a retirement plan
            that can survive reality without constant compromise.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Build your retirement income plan
            </h2>
            <p className="cw-cta-text">
              Use the calculator to explore how different portfolio sizes,
              withdrawal rates, and timelines may change the income your plan
              can realistically support.
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
              <Link href="/how-much-income-can-1-million-generate">
                how much income can $1 million generate.
              </Link>
            </li>
            <li>
              <Link href="/what-net-worth-generates-20000-a-month">
                what net worth generates $20,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/what-net-worth-generates-50000-a-month">
                what net worth generates $50,000 a month.
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
            A $5 million portfolio can generate strong and flexible retirement
            income across all standard withdrawal strategies.
          </p>

          <p className="cw-paragraph">
            At a 4% rate, it points to around $16,667 per month before taxes,
            which supports a high level of comfort in many real-world
            scenarios. But the real advantage is not just the income itself. It
            is the ability to make that income more durable with better
            structure and more margin.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own portfolio income path?
            </h2>
            <p className="cw-cta-text">
              Run the numbers and compare different strategies to see how much
              income your retirement assets may realistically support over time.
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
