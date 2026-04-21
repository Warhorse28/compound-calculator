import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/net-worth-needed-to-retire-with-5000-a-month";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "What Net Worth Do You Really Need for $5,000/Month in Retirement?";
const pageTitle =
  "What Net Worth Do You Really Need\nfor $5,000 a Month in Retirement?";

const pageDescription =
  "Understand how much net worth is needed to generate $5,000 a month, how withdrawal rates change the outcome, and what this income actually means in real life.";

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
    netWorth: "$2.00 million",
    yearlyIncome: "$60,000",
    monthlyIncome: "$5,000",
    view: "most conservative approach with strong long-term protection.",
  },
  {
    rate: "4%",
    netWorth: "$1.50 million",
    yearlyIncome: "$60,000",
    monthlyIncome: "$5,000",
    view: "balanced benchmark used in many retirement plans.",
  },
  {
    rate: "5%",
    netWorth: "$1.20 million",
    yearlyIncome: "$60,000",
    monthlyIncome: "$5,000",
    view: "lower target, but with higher long-term pressure.",
  },
];

const faqItems = [
  {
    question: "How much net worth do you need for $5,000 a month at 4%?",
    answer:
      "At a 4% withdrawal rate, the typical benchmark is around $1.5 million. It’s a useful reference point, but not a guarantee. Taxes, inflation, and longevity all affect how stable that income really is.",
  },
  {
    question: "Is $5,000 a month enough to retire comfortably?",
    answer:
      "In many parts of the US, yes. It can support a comfortable lifestyle with room for flexibility. In higher-cost areas, it may still require careful spending decisions, especially with housing and healthcare.",
  },
  {
    question: "Why does a lower withdrawal rate require more money?",
    answer:
      "Because you are asking your portfolio to produce less income each year. That reduces long-term risk, but significantly increases the capital required to support the same lifestyle.",
  },
  {
    question: "Can I retire with less than $1.5 million for $5,000 a month?",
    answer:
      "Only by using a higher withdrawal rate or accepting more risk. That can work in some cases, but it reduces your margin for error if markets underperform or retirement lasts longer than expected.",
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
            $5,000 a month feels like a clear retirement goal. It sounds
            achievable. It sounds stable. What matters is what has to exist
            behind that number to make it last.
          </p>

          <p className="cw-intro">
            This income level translates to $60,000 per year. From there, the
            math is simple. Divide by your withdrawal rate and you get a target.
            But retirement is not lived inside a formula. It is lived through
            uncertainty.
          </p>

          <p className="cw-intro">
            A portfolio that produces $5,000 a month can feel calm in good
            markets and fragile in bad ones. The difference is not the income.
            It is the structure behind it.
          </p>

          <p className="cw-intro">
            The number looks stable. The experience is not.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> generating $5,000 a month typically
              requires between $1.2 million and $2 million. The income stays the
              same. The durability of that income does not.
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
            The real capital behind a $5,000/month plan
          </h2>

          <p className="cw-paragraph">
            Below are three different ways to generate the same $60,000 per
            year. On paper, they look identical. In reality, they behave very
            differently over time.
          </p>

          <p className="cw-paragraph">
            This is where most people oversimplify retirement planning. They
            focus on the income target and ignore how fragile or resilient the
            structure behind it might be.
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
            The 4% scenario points to around $1.5 million. It is the most common
            reference because it balances income and sustainability. It works
            in many scenarios. It fails in some.
          </p>

          <p className="cw-paragraph">
            The math is simple. Living with it is not.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What $5,000/month actually feels like in real life
          </h2>

          <p className="cw-paragraph">
            $5,000 a month sits in the middle of the retirement spectrum. It is
            not minimal, and it is not luxury. It is where many people start to
            feel a sense of control over their time and decisions.
          </p>

          <p className="cw-paragraph">
            But that feeling depends heavily on where you live and how you
            spend. The same number can feel abundant in one place and tight in
            another.
          </p>

          <ul className="cw-list">
            <li>comfortable housing in moderate-cost areas.</li>
            <li>ability to travel occasionally without stress.</li>
            <li>manageable healthcare and insurance costs.</li>
            <li>buffer for unexpected expenses without panic.</li>
          </ul>

          <p className="cw-paragraph">
            In a lower-cost lifestyle, this can feel like freedom. In a higher
            cost structure, it still requires awareness and discipline.
          </p>

          <p className="cw-paragraph">
            The number is fixed. Your life is not.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The hidden trade-off behind the same income
          </h2>

          <p className="cw-paragraph">
            A $1.2 million portfolio at 5% produces the same income as a $2
            million portfolio at 3%. The output is identical. The risk profile
            is not even close.
          </p>

          <p className="cw-paragraph">
            This is where retirement planning becomes real. Not when you choose
            a number, but when you decide how much uncertainty you are willing
            to carry.
          </p>

          <ul className="cw-list">
            <li>lower withdrawal rates reduce long-term pressure.</li>
            <li>higher rates increase exposure to market timing risk.</li>
            <li>long retirements reward conservative assumptions.</li>
            <li>flexible spending can absorb part of the risk.</li>
          </ul>

          <p className="cw-paragraph">
            More income today can mean less safety tomorrow.
          </p>

          <p className="cw-paragraph">
            A portfolio can look strong on paper and still feel fragile in real
            life.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            How to actually choose your target
          </h2>

          <p className="cw-paragraph">
            If you want a clear starting point, use the 4% case. That gives you
            a working number around $1.5 million to support $5,000 a month.
          </p>

          <p className="cw-paragraph">
            From there, adjust based on your reality. Earlier retirement,
            uncertain markets, or lower flexibility usually push the number
            higher. Additional income sources or lower expenses can bring it
            down.
          </p>

          <p className="cw-paragraph">
            The goal is not precision. The goal is clarity you can actually act
            on.
          </p>

          <p className="cw-paragraph">
            Net worth is not the goal. What it produces is.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              See how your own plan actually behaves
            </h2>
            <p className="cw-cta-text">
              Test different withdrawal rates, timelines, and portfolio sizes.
              Understand what your version of $5,000/month really requires —
              and how stable it actually is.
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
              <Link href="/net-worth-needed-to-retire-with-4000-a-month">
                net worth needed to retire with $4,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-6000-a-month">
                net worth needed to retire with $6,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/is-5000-a-month-enough-to-retire">
                is $5,000 a month enough to retire.
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
            Retiring with $5,000 a month usually requires between $1.2 million
            and $2 million, depending on how conservative you want your plan to
            be.
          </p>

          <p className="cw-paragraph">
            Around $1.5 million is a strong middle ground. But the number alone
            is not the plan. The structure behind it is.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to stress-test your own plan?
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
