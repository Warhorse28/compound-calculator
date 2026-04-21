import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/is-4000-a-month-enough-to-retire";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "$4,000 a Month in Retirement — Comfortable or Still Too Tight?";
const pageTitle =
  "$4,000 a Month in Retirement — Comfortable or Still Too Tight?";

const pageDescription =
  "See whether $4,000 a month is enough to retire, what kind of lifestyle it can support, and where this income level still starts to feel limited.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const scenarios = [
  {
    lifestyle: "Basic",
    insight:
      "usually covers essentials comfortably, with some room left over.",
  },
  {
    lifestyle: "Moderate",
    insight:
      "can support a balanced retirement in many areas with manageable trade-offs.",
  },
  {
    lifestyle: "Comfortable",
    insight:
      "often works, but still depends heavily on housing, healthcare, and location.",
  },
];

const faqItems = [
  {
    question: "Can you retire on $4,000 a month in the US?",
    answer:
      "Yes, in many cases you can. It often supports a stable retirement, especially when housing costs are reasonable and debt is low. But in higher-cost areas, it may still feel tighter than people expect.",
  },
  {
    question: "Is $4,000 a month enough for a comfortable retirement?",
    answer:
      "For many retirees, it can be. But comfort is not universal. A paid-off home, manageable medical costs, and moderate expectations make a big difference in how comfortable that income feels.",
  },
  {
    question: "What are the biggest risks at this income level?",
    answer:
      "Healthcare, inflation, housing, and long retirement timelines are the biggest pressure points. $4,000 a month offers more margin than $2,000 or $3,000, but it still is not unlimited.",
  },
  {
    question: "What makes $4,000 a month work better in retirement?",
    answer:
      "Lower fixed expenses matter most. Paid-off housing, limited debt, a lower-cost area, and flexible spending habits all make $4,000 go further and feel more sustainable.",
  },
];

export default function Page() {
  return (
    <main className="cw-page">
      <article className="cw-shell">
        <header className="cw-hero">
          <div className="cw-eyebrow">Retirement income analysis</div>
          <h1 className="cw-title">{pageTitle}</h1>

          <p className="cw-lead">
            For many retirees, $4,000 a month sits in the space between basic
            retirement and real comfort. It is enough to feel workable in many
            situations. It is not always enough to feel easy.
          </p>

          <p className="cw-intro">
            This is where retirement starts to feel more realistic for a lot of
            people. The budget is no longer stripped down to essentials, but it
            still requires decisions. Housing matters. Healthcare matters.
            Inflation still matters more than most people expect.
          </p>

          <p className="cw-intro">
            The smarter question is not whether $4,000 sounds good on paper. It
            is what kind of life that number can actually support over twenty or
            thirty years. The estimate is useful. It is not a guarantee.
          </p>

          <div className="cw-highlight">
            <p className="cw-highlight-text">
              <strong>Key insight:</strong> $4,000 a month is often enough for a
              balanced retirement, but real comfort still depends on fixed
              costs, location, healthcare, and how much financial margin you
              want built into the plan.
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
            What $4,000 a month usually feels like in retirement
          </h2>

          <p className="cw-paragraph">
            $4,000 a month is where the conversation changes. At lower income
            levels, the focus is mostly survival and strict budgeting. At this
            level, stability becomes more possible. But the gap between stable
            and comfortable is still larger than many people assume.
          </p>

          <div className="cw-table-wrap">
            <table className="cw-table">
              <thead>
                <tr>
                  <th>Lifestyle</th>
                  <th>What it usually means</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row) => (
                  <tr key={row.lifestyle}>
                    <td>{row.lifestyle}</td>
                    <td>{row.insight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cw-paragraph">
            The same $4,000 can feel strong in one household and only moderate
            in another. A retiree with a paid-off home may see breathing room.
            A renter in a higher-cost area may still feel constant pressure. The
            number stays the same. The experience does not.
          </p>

          <p className="cw-paragraph">
            This is where retirement starts to feel real. It is also where trade
            offs become easier to underestimate.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            When this income can support a solid retirement
          </h2>

          <p className="cw-paragraph">
            $4,000 a month becomes meaningfully stronger when your fixed costs
            are under control. If housing is manageable and debt is limited,
            this income can support a retirement that feels stable, decent, and
            sustainable without constant strain.
          </p>

          <ul className="cw-list">
            <li>paid-off or low housing costs.</li>
            <li>manageable healthcare expenses.</li>
            <li>moderate lifestyle expectations.</li>
            <li>controlled debt and spending.</li>
            <li>reasonable local cost of living.</li>
          </ul>

          <p className="cw-paragraph">
            In these conditions, $4,000 a month often works well. It may not
            feel luxurious, but it can provide enough structure for daily life
            to feel predictable rather than fragile.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            Where $4,000 a month can still start to feel limited
          </h2>

          <p className="cw-paragraph">
            The weakness of this income level is not that it fails everywhere.
            It is that people often assume it removes financial pressure
            entirely. It does not. Once housing, medical costs, insurance, or
            lifestyle expectations climb, the margin begins to narrow quickly.
          </p>

          <ul className="cw-list">
            <li>high-cost housing markets.</li>
            <li>heavy healthcare needs.</li>
            <li>frequent travel or premium lifestyle goals.</li>
            <li>long retirement timelines.</li>
            <li>desire for larger financial buffers.</li>
          </ul>

          <p className="cw-paragraph">
            In those situations, $4,000 may still be enough on paper, but it
            often feels less comfortable in practice. It works until it does
            not. That is usually the real tension at this level.
          </p>

          <p className="cw-paragraph">
            A bigger number feels safer. It is not always safe enough.
          </p>
        </section>

        <section className="cw-section">
          <h2 className="cw-section-title">
            The real question is how much flexibility you want
          </h2>

          <p className="cw-paragraph">
            This is what makes $4,000 so important as a retirement benchmark. It
            can support a good life in many situations, but it does not erase
            uncertainty. A person who wants simplicity may see it as enough. A
            person who wants more travel, more convenience, or more protection
            against future costs may see it as only a starting point.
          </p>

          <p className="cw-paragraph">
            Retirement planning becomes more useful when you stop asking whether
            a number sounds decent and start asking what kind of freedom it
            buys. Net worth is not the goal. What it produces is.
          </p>
        </section>

        <section className="cw-section">
          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Test your retirement scenario with real numbers
            </h2>
            <p className="cw-cta-text">
              Use the calculator to see how your savings, timeline, and return
              assumptions translate into monthly income, and whether your plan
              creates enough margin for the retirement you actually want.
            </p>
            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Run Your Numbers →
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
              <Link href="/is-3000-a-month-enough-to-retire">
                is $3,000 a month enough to retire.
              </Link>
            </li>
            <li>
              <Link href="/is-5000-a-month-enough-to-retire">
                is $5,000 a month enough to retire.
              </Link>
            </li>
            <li>
              <Link href="/net-worth-needed-to-retire-with-4000-a-month">
                net worth needed to retire with $4,000 a month.
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
            $4,000 a month is often enough for retirement, and for many people
            it can support a balanced and stable lifestyle. But whether it feels
            merely workable or genuinely comfortable depends on what the money
            needs to carry each month.
          </p>

          <p className="cw-paragraph">
            The better question is not whether the number sounds good in theory.
            It is whether it supports the life you want to live with enough room
            for change, uncertainty, and time.
          </p>

          <div className="cw-cta-panel">
            <h2 className="cw-cta-title">
              Want to see what your plan could really produce?
            </h2>
            <p className="cw-cta-text">
              Compare different savings paths and assumptions to see whether
              your plan can realistically support the retirement income level
              you have in mind.
            </p>
            <div className="cw-bottom-actions">
              <Link href={calculatorPath} className="cw-button">
                Open the Calculator →
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
