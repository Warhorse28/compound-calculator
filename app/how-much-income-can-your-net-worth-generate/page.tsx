import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/how-much-income-can-your-net-worth-generate";
const calculatorPath = "/compound-interest-calculator";

const metaTitle = "How Much Income Can Your Net Worth Generate?";
const pageTitle = "How Much Income Can Your Net Worth Generate?";
const pageDescription =
  "See how much income your net worth may generate using 3%, 4%, and 5% withdrawal rates, with practical examples and realistic retirement context.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const incomeRows = [
  {
    netWorth: "$500,000",
    at3: "$15,000/year",
    at4: "$20,000/year",
    at5: "$25,000/year",
  },
  {
    netWorth: "$1,000,000",
    at3: "$30,000/year",
    at4: "$40,000/year",
    at5: "$50,000/year",
  },
  {
    netWorth: "$2,000,000",
    at3: "$60,000/year",
    at4: "$80,000/year",
    at5: "$100,000/year",
  },
  {
    netWorth: "$3,000,000",
    at3: "$90,000/year",
    at4: "$120,000/year",
    at5: "$150,000/year",
  },
  {
    netWorth: "$5,000,000",
    at3: "$150,000/year",
    at4: "$200,000/year",
    at5: "$250,000/year",
  },
];

const faqItems = [
  {
    question: "What is the easiest way to estimate income from net worth?",
    answer:
      "The simplest method is to apply a withdrawal rate to your portfolio. If you use 4%, a $1 million portfolio suggests about $40,000 per year. It is not a guarantee, but it gives you a practical benchmark.",
  },
  {
    question: "Why does a small change in withdrawal rate matter so much?",
    answer:
      "Because the entire retirement plan sits on that percentage. Moving from 3% to 5% can meaningfully raise income today, but it also asks much more from the portfolio over time.",
  },
  {
    question: "Should I think in yearly income or monthly income?",
    answer:
      "Both matter, but monthly income is usually easier to feel in real life. Annual numbers are useful for strategy. Monthly numbers are useful for understanding whether your lifestyle actually fits the plan.",
  },
  {
    question: "Does a bigger net worth always mean a safe retirement?",
    answer:
      "Not automatically. A large portfolio helps, but safety still depends on spending, withdrawal discipline, inflation, time horizon, and how much flexibility you have during weak market periods.",
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
            Your net worth is not just a number on paper. What matters in
            retirement is how much income that number can actually produce year
            after year.
          </p>

          <p className="cw-intro">
            This is where retirement planning becomes much more practical.
            Instead of staring at a portfolio value and wondering whether it is
            “enough,” you translate it into cash flow. That is the moment when a
            wealth number starts becoming a real lifestyle number.
          </p>

          <p className="cw-intro">
            A large portfolio looks impressive. The income behind it is what
            makes it useful. Once you understand the relationship between net
            worth and withdrawal rate, you stop thinking in vague milestones and
            start thinking in terms of usable income.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> income from net worth is usually a
              simple equation, but the meaning of that income depends on how
              sustainable the withdrawal rate is over time.
            </p>
          </div>

          <div className="cw-hero-actions">
            <Link href={calculatorPath} className="cw-button">
              Test Your Income Range →
            </Link>
          </div>
        </header>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The basic formula is easy. The implications are not.
          </h2>

          <p className="cw-paragraph">
            The math itself is straightforward. You multiply your total net
            worth by a withdrawal rate. That gives you an estimated yearly
            income your portfolio may support.
          </p>

          <p className="cw-paragraph">
            For example, a $1 million portfolio at a 4% withdrawal rate points
            to roughly $40,000 per year. At 3%, it drops to $30,000. At 5%, it
            rises to $50,000. The formula is simple. Living with the result is
            where judgment matters.
          </p>

          <p className="cw-paragraph">
            That is why retirement planning is never just about net worth. Two
            people with the same portfolio can live very different retirements
            depending on how much income they try to pull from it and how much
            risk they are quietly accepting in the process.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            A quick look at what different portfolios may produce
          </h2>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Net worth</th>
                  <th>3% income</th>
                  <th>4% income</th>
                  <th>5% income</th>
                </tr>
              </thead>
              <tbody>
                {incomeRows.map((row) => (
                  <tr key={row.netWorth}>
                    <td>{row.netWorth}</td>
                    <td>{row.at3}</td>
                    <td>{row.at4}</td>
                    <td>{row.at5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            This table is useful because it makes the relationship visible right
            away. A larger portfolio obviously produces more income, but the
            withdrawal rate still changes the picture dramatically. The same
            net worth can look conservative at 3% and exposed at 5%.
          </p>

          <p className="cw-paragraph">
            The estimate is useful. It is not a guarantee. Markets do not move
            in straight lines, and retirement does not happen in a laboratory.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why the withdrawal rate changes the whole story
          </h2>

          <p className="cw-paragraph">
            A higher withdrawal rate can make a portfolio feel more powerful
            today, because it increases income immediately. The problem is that
            it also puts more stress on the plan over the long term.
          </p>

          <ul className="cw-list">
            <li>3% usually means lower income today, but more durability.</li>
            <li>4% is a common benchmark because it balances usability and caution.</li>
            <li>5% raises income, but usually reduces margin for error.</li>
            <li>long retirements tend to reward more conservative assumptions.</li>
          </ul>

          <p className="cw-paragraph">
            This is the core trade-off. You are never choosing income alone. You
            are choosing income plus pressure. More income today can mean less
            safety tomorrow.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Why monthly income usually tells the truth faster
          </h2>

          <p className="cw-paragraph">
            Annual income is useful for calculations, but most people experience
            life monthly. Mortgage or rent, food, insurance, travel, and
            healthcare all feel more real when you convert them into monthly
            cash flow.
          </p>

          <p className="cw-paragraph">
            For example, $80,000 per year sounds strong. But in practical terms,
            it is about $6,667 per month before taxes. That monthly frame makes
            it easier to compare the number with the life you actually want to
            support.
          </p>

          <p className="cw-paragraph">
            This is why translating net worth into monthly income is one of the
            most useful steps in retirement planning. Big annual numbers can
            impress you. Monthly numbers make you honest.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What income tables clarify — and what they cannot promise
          </h2>

          <p className="cw-paragraph">
            Tables are helpful, but they can create false certainty if you read
            them too literally. A portfolio does not distribute the exact same
            outcome every year. Markets move. Inflation changes what that income
            buys. Spending shifts over time.
          </p>

          <p className="cw-paragraph">
            So the real value of a table like this is not that it predicts the
            future perfectly. Its value is that it gives you a decision-making
            framework. It helps you see whether your current net worth is in the
            right zip code for the life you want.
          </p>

          <ul className="cw-list">
            <li>income estimates are planning tools, not guarantees.</li>
            <li>higher spending leaves less room for bad years.</li>
            <li>inflation can quietly reduce what the same income really covers.</li>
            <li>flexibility often matters as much as portfolio size.</li>
          </ul>

          <p className="cw-paragraph">
            A portfolio can look strong on paper and still feel fragile in real
            life. That difference is where real retirement planning begins.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              See your income range with your own numbers
            </h2>
            <p className="cw-cta-text">
              Use the calculator to test different portfolio sizes, timelines,
              and withdrawal assumptions instead of relying on generic examples
              alone.
            </p>
            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Open the Calculator →
              </Link>
            </div>
          </div>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Related pages worth reading next
          </h2>

          <ul className="cw-list">
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
              <Link href="/what-net-worth-generates-10000-a-month">
                what net worth generates $10,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-1-million-generate">
                how much income can $1 million generate.
              </Link>
            </li>
            <li>
              <Link href="/how-much-income-can-5-million-generate">
                how much income can $5 million generate.
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
            Your net worth only matters in retirement if it can generate income
            that supports your life. That is the bridge between a portfolio
            number and a real retirement plan.
          </p>

          <p className="cw-paragraph">
            Once you understand how withdrawal rates shape that income, your
            planning becomes more practical, more honest, and much easier to act
            on. You stop admiring numbers and start evaluating what they can
            actually do. Net worth is not the goal. What it produces is.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to test your own portfolio and income target?
            </h2>
            <p className="cw-cta-text">
              Run your numbers and see what level of yearly and monthly income
              your net worth may realistically support.
            </p>
            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Calculate Your Retirement Income →
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
