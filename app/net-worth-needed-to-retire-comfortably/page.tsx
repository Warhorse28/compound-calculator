import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/net-worth-needed-to-retire-comfortably";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "Net Worth Needed to Retire Comfortably — What Enough Really Means";
const pageTitle =
  "Net Worth Needed to Retire Comfortably — What Enough Really Means";

const pageDescription =
  "See how much net worth you may need to retire comfortably based on monthly income goals, withdrawal rates, lifestyle expectations, and long-term retirement safety.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const rows = [
  {
    income: "$4,000/month",
    at3: "$1.60M",
    at4: "$1.20M",
    at5: "$960K",
    view: "Modest comfort if housing and healthcare are controlled.",
  },
  {
    income: "$6,000/month",
    at3: "$2.40M",
    at4: "$1.80M",
    at5: "$1.44M",
    view: "A stronger comfort zone with more room for normal life costs.",
  },
  {
    income: "$8,000/month",
    at3: "$3.20M",
    at4: "$2.40M",
    at5: "$1.92M",
    view: "A flexible retirement target for many households.",
  },
  {
    income: "$10,000/month",
    at3: "$4.00M",
    at4: "$3.00M",
    at5: "$2.40M",
    view: "A high-comfort target with stronger lifestyle freedom.",
  },
];

const faqItems = [
  {
    question: "How much net worth do you need to retire comfortably?",
    answer:
      "A comfortable retirement often requires enough net worth to support monthly income beyond basic expenses. For many households, that may mean $1.8 million to $3 million or more, depending on spending, housing, healthcare, taxes, and withdrawal rate.",
  },
  {
    question: "Is $1 million enough to retire comfortably?",
    answer:
      "$1 million can support retirement in some cases, especially with low fixed costs and modest spending. But for many retirees, it may feel more like a basic foundation than a fully comfortable retirement plan.",
  },
  {
    question: "What monthly income is considered comfortable in retirement?",
    answer:
      "A comfortable retirement income varies by location and lifestyle, but many households begin to feel more flexibility around $6,000 to $8,000 per month before taxes. Higher-cost areas or more active lifestyles may require more.",
  },
  {
    question: "Why does withdrawal rate change the net worth needed so much?",
    answer:
      "The withdrawal rate determines how much income each dollar of portfolio value is expected to produce. A lower rate like 3% requires more net worth but gives more safety. A higher rate like 5% requires less net worth but adds more long-term risk.",
  },
];

export default function Page() {
  return (
    <main className="cw-page">
      <article className="cw-shell">
        <header className="cw-hero">
          <div className="cw-eyebrow">Comfortable retirement</div>

          <h1 className="cw-title">{pageTitle}</h1>

          <p className="cw-lead">
            Comfortable retirement is not just about leaving work. It is about
            having enough income, flexibility, and margin that your plan does
            not feel fragile every time life gets expensive.
          </p>

          <p className="cw-intro">
            For one person, comfort means covering housing, food, healthcare,
            and basic bills without stress. For another, it means travel,
            hobbies, family support, better healthcare options, and enough room
            to handle surprises without panic.
          </p>

          <p className="cw-intro">
            That is why there is no single perfect number. The net worth needed
            to retire comfortably depends on your monthly income target, your
            withdrawal rate, your fixed costs, and how much uncertainty you want
            your portfolio to absorb.
          </p>

          <p className="cw-intro">
            The minimum gets you retired. The margin helps you stay retired.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> a comfortable retirement usually
              requires more than enough to survive. It requires enough net worth
              to support real life: inflation, healthcare, market downturns,
              repairs, travel, and changing priorities over time.
            </p>
          </div>

          <div className="cw-hero-actions">
            <Link href={calculatorPath} className="cw-button">
              Find Your Comfortable Retirement Number →
            </Link>
          </div>
        </header>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Comfort starts when the numbers have room to breathe
          </h2>

          <p className="cw-paragraph">
            A comfortable retirement income often sits between basic security
            and a high-end lifestyle. It is not necessarily luxury. It is the
            ability to cover normal life without feeling like every unexpected
            bill threatens the plan.
          </p>

          <p className="cw-paragraph">
            The table below compares different monthly income targets using 3%,
            4%, and 5% withdrawal strategies. The lower the withdrawal rate, the
            more net worth you need — but the more safety the plan usually has.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Monthly income</th>
                  <th>3% strategy</th>
                  <th>4% strategy</th>
                  <th>5% strategy</th>
                  <th>What it usually means</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.income}>
                    <td>{row.income}</td>
                    <td>{row.at3}</td>
                    <td>{row.at4}</td>
                    <td>{row.at5}</td>
                    <td>{row.view}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            For many households, a comfortable retirement starts to feel more
            realistic around the $6,000 to $8,000 per month range before taxes.
            At a 4% withdrawal rate, that points to roughly $1.8 million to
            $2.4 million in portfolio value.
          </p>

          <p className="cw-paragraph">
            But the estimate is useful. It is not a guarantee.
          </p>

          <p className="cw-paragraph">
            A one-point change in withdrawal rate can change the target by
            hundreds of thousands of dollars. That is why the same lifestyle can
            require very different net worth depending on how conservative you
            want the plan to be.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            What comfortable really means once work income stops
          </h2>

          <p className="cw-paragraph">
            Comfortable does not mean careless. It means the retirement plan has
            enough structure and enough cushion that daily life can continue
            without constant financial tension.
          </p>

          <ul className="cw-list">
            <li>housing and core bills feel manageable.</li>
            <li>healthcare costs do not create immediate stress.</li>
            <li>travel or leisure spending remains realistic.</li>
            <li>unexpected expenses do not force major lifestyle cuts.</li>
            <li>the plan has room to adjust when life changes.</li>
          </ul>

          <p className="cw-paragraph">
            This is why comfortable retirement usually sits above the bare
            minimum. A plan can be mathematically possible and still feel tight
            in real life.
          </p>

          <p className="cw-paragraph">
            The math can say yes while the lifestyle says maybe.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The hidden risk is building a plan with no margin
          </h2>

          <p className="cw-paragraph">
            A retirement plan built around the smallest possible number can
            break more easily. Inflation rises. Markets fall. Healthcare gets
            more expensive. Home repairs happen at the wrong time. Family needs
            change.
          </p>

          <p className="cw-paragraph">
            A more comfortable target gives the plan breathing room. It reduces
            the chance that one bad market cycle, one expensive year, or one
            wrong assumption forces you to cut the lifestyle you built the plan
            around.
          </p>

          <p className="cw-paragraph">
            Comfort usually comes from margin, not from hitting a headline
            number.
          </p>

          <p className="cw-paragraph">
            That margin matters more over time because retirement is not a
            one-year calculation. It may need to work for 20, 30, or even 40
            years.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Low-cost comfort and high-cost comfort are not the same
          </h2>

          <p className="cw-paragraph">
            Two people can both want a comfortable retirement and need very
            different amounts of net worth. Location, housing, taxes,
            healthcare, debt, travel, and family support can change the target
            dramatically.
          </p>

          <p className="cw-paragraph">
            A $6,000 monthly income may feel strong in a lower-cost area with a
            paid-off home. The same income may feel tight in a high-cost city
            with rent, medical premiums, and frequent travel.
          </p>

          <p className="cw-paragraph">
            The number is only meaningful when it is attached to a lifestyle.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            A better question than “what is the minimum?”
          </h2>

          <p className="cw-paragraph">
            Instead of asking, “What is the minimum I can retire with?” a better
            question is, “What portfolio gives me a retirement I can actually
            enjoy and sustain?”
          </p>

          <p className="cw-paragraph">
            That shift matters. It moves the plan away from fragile assumptions
            and toward a retirement that can survive real life. The goal is not
            only to quit working. The goal is to avoid spending the next decades
            wondering whether the number was too low.
          </p>

          <p className="cw-paragraph">
            Retiring comfortably is not about being rich. It is about reducing
            the number of financial decisions that feel forced.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Model your comfortable retirement target
            </h2>

            <p className="cw-cta-text">
              Use the calculator to test monthly income goals, withdrawal rates,
              portfolio size, and return assumptions so you can see what kind of
              retirement your net worth may realistically support.
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
            Explore related retirement scenarios
          </h2>

          <ul className="cw-list">
            <li>
              <Link href="/net-worth-needed-for-early-retirement">
                net worth needed for early retirement.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-rich">
                net worth needed to retire rich.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-8000-a-month">
                net worth needed to retire with $8,000 a month.
              </Link>
            </li>
            <li>
              <Link href="/is-10000-a-month-enough-to-retire">
                is $10,000 a month enough to retire?
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
            Retiring comfortably usually means aiming above the minimum. You are
            not just buying income. You are buying flexibility, resilience, and
            a plan that can keep working after life becomes less predictable.
          </p>

          <p className="cw-paragraph">
            For many people, comfort begins when the portfolio can support core
            living costs and still leave room for inflation, healthcare, market
            stress, and changing priorities.
          </p>

          <p className="cw-paragraph">
            The right number is not the smallest number that lets you retire. It
            is the number that lets retirement feel stable after the excitement
            of leaving work wears off.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to find your comfortable number?
            </h2>

            <p className="cw-cta-text">
              Estimate how your savings, timeline, and withdrawal assumptions
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
