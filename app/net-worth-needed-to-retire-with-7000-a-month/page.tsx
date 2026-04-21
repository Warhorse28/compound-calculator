import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/net-worth-needed-to-retire-with-7000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "What It Takes to Retire on $7,000 a Month (Real Net Worth Targets)";
const pageTitle =
  "What It Takes to Retire on $7,000 a Month (Real Net Worth Targets)";

const pageDescription =
  "See how much net worth you may need to retire with $7,000 a month using 3%, 4%, and 5% withdrawal rate scenarios, with real-world context and trade-offs.";

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
    netWorth: "$2.80 million",
    yearlyIncome: "$84,000",
    monthlyIncome: "$7,000",
    view: "most conservative option with the widest margin of safety.",
  },
  {
    rate: "4%",
    netWorth: "$2.10 million",
    yearlyIncome: "$84,000",
    monthlyIncome: "$7,000",
    view: "balanced middle-ground for many retirement plans.",
  },
  {
    rate: "5%",
    netWorth: "$1.68 million",
    yearlyIncome: "$84,000",
    monthlyIncome: "$7,000",
    view: "lower capital target, but more long-term pressure.",
  },
];

const faqItems = [
  {
    question: "How much net worth do you need for $7,000 a month at 4%?",
    answer:
      "At a 4% withdrawal rate, the rough target is about $2.1 million. It is a strong reference point, but not a guarantee. Taxes, inflation, and how long your retirement lasts still matter.",
  },
  {
    question: "Is $7,000 a month a strong retirement income?",
    answer:
      "For many households, yes. It usually supports a comfortable and flexible lifestyle. But location, housing, and healthcare costs can still change how far it really goes.",
  },
  {
    question: "Why does the required net worth increase so fast?",
    answer:
      "Because every extra $1,000 per month translates into a much larger capital requirement when using conservative withdrawal rates. The increase feels small in spending, but large in investment terms.",
  },
  {
    question: "Can I retire with less than $2.1 million?",
    answer:
      "Possibly, but it usually means taking on more risk through a higher withdrawal rate. That reduces the margin for error if markets perform poorly or if retirement lasts longer than expected.",
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
            A $7,000 monthly retirement income means generating about $84,000 a
            year from your portfolio. That number looks solid. The structure
            behind it decides whether it actually feels solid.
          </p>

          <p className="cw-intro">
            This is where retirement planning shifts. It is no longer just about
            covering expenses. It becomes about flexibility, control, and how
            much pressure your portfolio needs to carry over time.
          </p>

          <p className="cw-intro">
            Your withdrawal rate is what defines that pressure. Lower rates
            increase the capital requirement but reduce long-term stress. Higher
            rates make the goal easier to reach, but harder to sustain.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> to retire with $7,000 a month, you
              may need roughly $1.68 million to $2.8 million depending on your
              withdrawal strategy. The income stays the same. The risk does not.
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
            What kind of portfolio supports $7,000 a month
          </h2>

          <p className="cw-paragraph">
            The table below shows three different ways to produce the same
            $84,000 per year. The income is identical. The stability behind that
            income is not.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Withdrawal rate</th>
                  <th>Net worth needed</th>
                  <th>Yearly income</th>
                  <th>Monthly income</th>
                  <th>How it feels</th>
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
            For most people, the 4% scenario offers a practical starting point.
            That puts the target around $2.1 million for a $7,000 monthly income.
          </p>

          <p className="cw-paragraph">
            It looks achievable on paper. In real life, it depends on how well
            that number holds up under pressure.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why higher income targets get harder faster
          </h2>

          <p className="cw-paragraph">
            Moving from $6,000 to $7,000 a month does not feel dramatic. It is
            just another $1,000. But once translated into capital, the jump is
            significant.
          </p>

          <p className="cw-paragraph">
            At a 4% withdrawal rate, that extra $1,000 means roughly $300,000
            more in required net worth. At 3%, it is closer to $400,000. The
            lifestyle upgrade is small. The financial requirement is not.
          </p>

          <ul className="cw-list">
            <li>each income increase compounds the capital requirement quickly.</li>
            <li>lower withdrawal rates amplify that effect even more.</li>
            <li>higher targets demand more precision in planning.</li>
            <li>this is where retirement goals become significantly harder.</li>
          </ul>

          <p className="cw-paragraph">
            The math is simple. Living with it is not.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What $7,000 a month actually feels like
          </h2>

          <p className="cw-paragraph">
            For many households, $7,000 a month moves beyond basic comfort and
            into real flexibility. It allows more choice in housing, travel, and
            day-to-day life.
          </p>

          <ul className="cw-list">
            <li>more freedom in housing and location decisions.</li>
            <li>ability to travel regularly without strain.</li>
            <li>less pressure from unexpected expenses.</li>
            <li>greater breathing room in the monthly budget.</li>
          </ul>

          <p className="cw-paragraph">
            But context still matters. In a moderate-cost area, this can feel
            strong. In a high-cost city, it may feel comfortable, but not
            excessive.
          </p>

          <p className="cw-paragraph">
            A bigger number feels safer. It is not always safer.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The decision behind the number
          </h2>

          <p className="cw-paragraph">
            A $1.68 million portfolio at 5% produces the same income as a $2.8
            million portfolio at 3%. The output is identical. The experience is
            not.
          </p>

          <p className="cw-paragraph">
            One version depends more on favorable market conditions. The other
            carries more margin and stability. Both can work. Only one may feel
            calm when things go wrong.
          </p>

          <p className="cw-paragraph">
            Net worth is not the goal. What it produces is.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">Model your own retirement target</h2>
            <p className="cw-cta-text">
              Use the calculator to test different income levels, withdrawal
              rates, and timelines based on your real situation.
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
              <Link href="/net-worth-needed-to-retire-with-6000-a-month">
                net worth needed to retire with $6,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-8000-a-month">
                net worth needed to retire with $8,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/safe-withdrawal-rate-for-retirement">
                safe withdrawal rate for retirement.
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-your-net-worth-generate">
                how much income can your net worth generate.
              </Link>
            </li>
            <li>
              <Link href="/is-7000-a-month-enough-to-retire">
                is $7,000 a month enough to retire.
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
            Retiring with $7,000 a month typically requires between $1.68
            million and $2.8 million, depending on how conservative your
            approach is.
          </p>

          <p className="cw-paragraph">
            Around $2.1 million is a strong middle-ground estimate. It is not a
            guarantee. It is a starting point for building something that can
            actually last.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to see how your plan holds up?
            </h2>
            <p className="cw-cta-text">
              Test different scenarios and see what level of net worth may
              realistically support your retirement income.
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
