import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/what-does-5-million-net-worth-mean-for-retirement";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$5 Million for Retirement — Comfortable, Wealthy, or Overrated?";
const pageTitle =
  "$5 Million for Retirement — Comfortable, Wealthy, or Overrated?";

const pageDescription =
  "Understand what a $5 million net worth can realistically support in retirement, including income potential, lifestyle flexibility, withdrawal rates, long-term safety, and wealth preservation.";

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
    view:
      "Very conservative income with strong long-term durability and a wide safety margin.",
  },
  {
    rate: "4%",
    yearlyIncome: "$200,000",
    monthlyIncome: "$16,667",
    view:
      "Balanced high-income retirement with strong flexibility and meaningful lifestyle freedom.",
  },
  {
    rate: "5%",
    yearlyIncome: "$250,000",
    monthlyIncome: "$20,833",
    view:
      "Higher income potential, but more pressure on the portfolio and spending discipline.",
  },
];

const faqItems = [
  {
    question: "Is $5 million enough to retire comfortably?",
    answer:
      "Yes, in most cases. $5 million can support a very comfortable or high-end retirement, especially with controlled fixed costs, a realistic withdrawal rate, and a diversified portfolio.",
  },
  {
    question: "How much monthly income can $5 million generate?",
    answer:
      "At a 4% withdrawal rate, $5 million may generate about $200,000 per year, or roughly $16,667 per month before taxes. A 3% strategy would be more conservative, while 5% would create more income but more risk.",
  },
  {
    question: "Is $5 million considered wealthy in retirement?",
    answer:
      "For most retirees, yes. But whether it feels truly wealthy depends on lifestyle, location, taxes, healthcare costs, family support, and how aggressively the portfolio is used.",
  },
  {
    question: "Can $5 million support early retirement?",
    answer:
      "It can, but early retirement still requires careful planning because the portfolio may need to last longer. Lower withdrawal rates, flexible spending, and strong risk control become more important.",
  },
];

export default function Page() {
  return (
    <main className="cw-page">
      <article className="cw-shell">
        <header className="cw-hero">
          <div className="cw-eyebrow">Retirement interpretation</div>

          <h1 className="cw-title">{pageTitle}</h1>

          <p className="cw-lead">
            A $5 million net worth can place retirement in a completely
            different category. At this level, the question is no longer only
            whether you can retire. It is how much freedom, control, and
            durability the money can realistically create.
          </p>

          <p className="cw-intro">
            For many households, $5 million can support a high-quality
            retirement with strong housing flexibility, frequent travel, better
            healthcare options, and a wide margin for unexpected costs.
          </p>

          <p className="cw-intro">
            But $5 million is not automatically unlimited wealth. A high-cost
            lifestyle, aggressive withdrawals, poor market timing, taxes, and
            long retirement timelines can still create pressure if the plan is
            not managed carefully.
          </p>

          <p className="cw-intro">
            Wealth changes the problem. It does not remove the need for
            judgment.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> $5 million usually supports a
              highly flexible retirement, but the real power is not just income.
              It is the ability to protect lifestyle, reduce pressure, and stay
              resilient over decades.
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
            What $5 million can realistically generate
          </h2>

          <p className="cw-paragraph">
            The simplest way to understand $5 million in retirement is to
            convert it into income. The portfolio balance sounds impressive, but
            the income it can support is what shapes real life.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Withdrawal rate</th>
                  <th>Yearly income</th>
                  <th>Monthly income</th>
                  <th>What it usually means</th>
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
            At a 4% withdrawal rate, $5 million may generate about $200,000 per
            year, or roughly $16,667 per month before taxes.
          </p>

          <p className="cw-paragraph">
            That level of income can support a premium retirement in many parts
            of the country. It can create room for better housing, frequent
            travel, healthcare flexibility, family support, and a stronger
            long-term cushion.
          </p>

          <p className="cw-paragraph">
            Net worth is not the goal. What it produces is.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What kind of lifestyle does $5 million support?
          </h2>

          <p className="cw-paragraph">
            At $5 million, retirement often moves beyond basic comfort. The
            portfolio can support choices that lower-net-worth retirees may need
            to trade off against each other.
          </p>

          <ul className="cw-list">
            <li>high-quality housing with meaningful location flexibility.</li>
            <li>frequent travel without constant budget pressure.</li>
            <li>more room for premium healthcare and services.</li>
            <li>stronger ability to support family or legacy goals.</li>
            <li>better cushion against inflation, repairs, and expensive years.</li>
          </ul>

          <p className="cw-paragraph">
            This is where retirement can start feeling preference-based instead
            of limit-based. You may still make financial decisions carefully, but
            fewer choices feel forced.
          </p>

          <p className="cw-paragraph">
            The money gives options. The plan decides how durable those options
            are.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why $5 million changes the retirement equation
          </h2>

          <p className="cw-paragraph">
            The difference between $2 million and $5 million is not just a
            higher income number. It is a much wider margin for error. That
            margin can change how retirement feels during bad markets, expensive
            healthcare years, and periods of high inflation.
          </p>

          <ul className="cw-list">
            <li>more ability to use conservative withdrawal rates.</li>
            <li>less pressure to chase high returns.</li>
            <li>more room to absorb market downturns.</li>
            <li>greater flexibility if spending rises unexpectedly.</li>
            <li>stronger potential for legacy and long-term preservation.</li>
          </ul>

          <p className="cw-paragraph">
            This matters because retirement is not only tested during normal
            years. It is tested when markets fall, costs rise, health changes,
            or family needs become more expensive.
          </p>

          <p className="cw-paragraph">
            A bigger portfolio feels strongest when life gets less predictable.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Where $5 million can still feel less unlimited than expected
          </h2>

          <p className="cw-paragraph">
            A $5 million net worth is powerful, but it can still be stretched by
            very high fixed costs, luxury housing, private healthcare, family
            support, taxes, and aggressive lifestyle inflation.
          </p>

          <p className="cw-paragraph">
            This is especially true if the retirement plan assumes high spending
            every year with little flexibility. A high income target can make
            even a large portfolio work harder than it should.
          </p>

          <p className="cw-paragraph">
            The number looks rich. The withdrawal pressure tells the real story.
          </p>

          <p className="cw-paragraph">
            That is why $5 million should be treated as a serious wealth base,
            not as permission to ignore risk. The goal is not only to spend
            well. It is to stay free.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Turn your net worth into real retirement income
            </h2>

            <p className="cw-cta-text">
              Use the calculator to test withdrawal rates, portfolio size, and
              monthly income targets so you can see what your wealth may
              realistically support.
            </p>

            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Use the Calculator →
              </Link>
            </div>
          </div>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Explore related retirement pages
          </h2>

          <ul className="cw-list">
            <li>
              <Link href="/what-does-1-million-net-worth-mean-for-retirement">
                what $1 million net worth means for retirement.
              </Link>
            </li>
            <li>
              <Link href="/what-does-2-million-net-worth-mean-for-retirement">
                what $2 million net worth means for retirement.
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-5-million-generate">
                how much income $5 million can generate.
              </Link>
            </li>
            <li>
              <Link href="/3-million-vs-5-million-retirement">
                $3 million vs $5 million retirement.
              </Link>
            </li>
            <li>
              <Link href="/5-million-vs-10-million-retirement">
                $5 million vs $10 million retirement.
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
            A $5 million net worth can support a highly flexible, comfortable,
            and resilient retirement in most scenarios. It can create strong
            income, more lifestyle freedom, and a much wider cushion than lower
            portfolio levels.
          </p>

          <p className="cw-paragraph">
            But the real advantage is not just the income. It is the control.
            $5 million can give you more ability to choose where to live, how to
            spend, how conservative to be, and how much risk you want to carry.
          </p>

          <p className="cw-paragraph">
            The smartest way to think about $5 million is not as unlimited
            money, but as a powerful financial engine. Used well, it can make
            retirement feel less fragile, more flexible, and far more fully
            owned.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own retirement number?
            </h2>

            <p className="cw-cta-text">
              Estimate how your portfolio, withdrawal rate, and income target
              could translate into monthly retirement income.
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
