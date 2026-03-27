import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/investing-early-vs-late-how-big-is-the-difference";
const calculatorPath = "/calculator";

const pageTitle =
  "Investing Early vs Late: How Big Is the Difference? Real Examples + Calculator";

const pageDescription =
  "Compare investing early vs late with clear examples, realistic numbers, and a simple calculator. See how much a 10-year delay can change your final balance.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}${pagePath}`,
    siteName: "Your Site",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Does investing early really make a big difference?",
    answer:
      "Yes. Starting earlier gives your money more time to compound, which can create a much larger final balance even when monthly contributions stay the same.",
  },
  {
    question: "Is investing early better than investing more later?",
    answer:
      "In many cases, yes. Starting earlier can reduce the need to make much larger contributions later just to reach a similar result.",
  },
  {
    question: "Why is the gap between early and late investing so large?",
    answer:
      "Because compounding needs time. Earlier gains can produce additional gains for longer, which widens the long-term difference.",
  },
  {
    question: "Can I catch up if I start investing late?",
    answer:
      "Sometimes, but it often requires higher monthly contributions, more time invested, or stronger return assumptions.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description: pageDescription,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}${pagePath}`,
  },
  author: {
    "@type": "Organization",
    name: "Your Site",
  },
  publisher: {
    "@type": "Organization",
    name: "Your Site",
  },
};

const comparisonRows = [
  {
    investor: "Early investor",
    monthlyAmount: "$300",
    annualReturn: "8%",
    startAge: "25",
    endAge: "55",
    yearsInvested: "30 years",
    estimatedBalance: "~$447,000",
    keyTakeaway: "More time gives compounding longer to build.",
  },
  {
    investor: "Late investor",
    monthlyAmount: "$300",
    annualReturn: "8%",
    startAge: "35",
    endAge: "55",
    yearsInvested: "20 years",
    estimatedBalance: "~$178,000",
    keyTakeaway: "A shorter timeline puts more pressure on each deposit.",
  },
];

const relatedGuides = [
  {
    href: "/how-to-calculate-compound-interest",
    label: "Guide",
    title: "How to Calculate Compound Interest",
    text: "Learn the formula behind growth and see why time changes the result so much.",
  },
  {
    href: "/how-much-will-i-have-if-i-invest-every-month",
    label: "Scenario",
    title: "How Much Will I Have If I Invest Every Month?",
    text: "See how regular monthly deposits can build into a much larger long-term balance.",
  },
  {
    href: "/what-interest-rate-do-i-need-to-reach-my-investment-goal",
    label: "Planning",
    title: "What Interest Rate Do I Need to Reach My Investment Goal?",
    text: "Compare how return, timeline, and monthly contributions shape your plan.",
  },
];

export default function Page() {
  return (
    <main className={styles.pageShell}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className={styles.articleCard}>
        <header className={styles.heroSection}>
          <div className={styles.eyebrow}>Timing comparison</div>

          <h1 className={styles.title}>
            Investing Early vs Late: How Big Is the Difference?
          </h1>

          <p className={styles.lead}>
            Your start date can completely change how much money you end up
            with. The real difference is not only that you begin investing
            sooner. It is that your money gets more years to compound on top of
            itself.
          </p>

          <p className={styles.lead}>
            That is why two people can invest the same monthly amount, earn the
            same average return, and still finish with dramatically different
            balances. A delay changes more than the calendar. It changes how
            long every future gain has to keep working.
          </p>

          <div className={styles.callout} role="note" aria-label="Key insight">
            <strong>Key insight:</strong> investing late does not only remove a
            few years of deposits. It also removes years of growth on earlier
            gains, which is why the gap can become much larger than expected.
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.heroButton}>
              See How Your Start Date Changes the Result →
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#why-the-gap-grows" className={styles.tocLink}>
                Why the gap grows over time
              </a>
            </li>
            <li>
              <a href="#side-by-side-example" className={styles.tocLink}>
                Early vs late investing example
              </a>
            </li>
            <li>
              <a href="#why-catching-up-is-hard" className={styles.tocLink}>
                Why catching up is harder than it looks
              </a>
            </li>
            <li>
              <a href="#how-to-think-about-it" className={styles.tocLink}>
                How to think about it realistically
              </a>
            </li>
            <li>
              <a href="#faq" className={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <section id="why-the-gap-grows" className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            Why the gap between early and late investing grows so much
          </h2>

          <p className={styles.paragraph}>
            The first mistake people make is treating time like a small detail.
            In reality, time is one of the main engines of compound growth.
            Starting earlier gives every contribution more chances to grow, and
            it gives each gain more chances to create another gain.
          </p>

          <p className={styles.paragraph}>
            That creates a stacking effect. A late start does not just mean
            less time invested. It often means needing a much more demanding
            plan later to approach the same destination.
          </p>

          <ul className={styles.list}>
            <li>earlier investing gives every deposit more time to grow</li>
            <li>later investing often increases contribution pressure</li>
            <li>
              more time can reduce the need for aggressive return assumptions
            </li>
            <li>delays can be expensive even when they look small on paper</li>
          </ul>
        </section>

        <section id="side-by-side-example" className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            Early vs late investing: a side-by-side example
          </h2>

          <p className={styles.paragraph}>
            Imagine two investors making the same monthly contribution and
            earning the same average annual return. The only major difference is
            when they begin.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption className={styles.tableCaption}>
                Same contribution. Same assumed return. Different starting ages.
              </caption>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Investor</th>
                  <th className={styles.tableHead}>Monthly amount</th>
                  <th className={styles.tableHead}>Annual return</th>
                  <th className={styles.tableHead}>Start age</th>
                  <th className={styles.tableHead}>End age</th>
                  <th className={styles.tableHead}>Years invested</th>
                  <th className={styles.tableHead}>Estimated balance</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.investor}>
                    <td className={styles.tableCellStrong}>{row.investor}</td>
                    <td className={styles.tableCell}>{row.monthlyAmount}</td>
                    <td className={styles.tableCell}>{row.annualReturn}</td>
                    <td className={styles.tableCell}>{row.startAge}</td>
                    <td className={styles.tableCell}>{row.endAge}</td>
                    <td className={styles.tableCell}>{row.yearsInvested}</td>
                    <td className={styles.tableCellStrong}>
                      {row.estimatedBalance}
                    </td>
                    <td className={styles.tableCell}>{row.keyTakeaway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            In this example, the early investor ends up with roughly{" "}
            <strong>$269,000 more</strong> by age 55, even though both investors
            put in the same $300 per month and both assumed the same 8% annual
            return.
          </p>

          <p className={styles.paragraph}>
            That is the part that matters. The early investor did not just
            invest for longer. They gave compounding 10 extra years to keep
            building. That is why a 10-year delay can create such a large
            long-term gap.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What this usually means in practice</p>
            <p className={styles.noteText}>
              A later start often requires either much larger monthly
              contributions, a longer investing timeline, or more optimistic
              return assumptions to close the same gap.
            </p>
          </div>
        </section>

        <section id="why-catching-up-is-hard" className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            Why catching up later is harder than it looks
          </h2>

          <p className={styles.paragraph}>
            A lot of people assume they can simply invest more later and fix the
            problem. Sometimes they can, but the catch-up plan is often much
            steeper than expected.
          </p>

          <p className={styles.paragraph}>
            That is because later contributions are trying to replace not only
            missed deposits, but also missed compounding time. That is a much
            harder problem to solve.
          </p>

          <ul className={styles.list}>
            <li>late starters often need higher monthly deposits</li>
            <li>the same target may require more years</li>
            <li>higher return assumptions may feel tempting but add risk</li>
            <li>a delay can reduce flexibility later in life</li>
          </ul>
        </section>

        <section id="how-to-think-about-it" className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            How to think about early vs late investing realistically
          </h2>

          <p className={styles.paragraph}>
            If you started late, the useful response is not panic. It is
            clarity. The real question becomes: what can you change now that has
            the biggest effect on your final outcome?
          </p>

          <p className={styles.paragraph}>
            If you want to understand the math behind this, read our{" "}
            <Link
              href="/how-to-calculate-compound-interest"
              className={styles.inlineLink}
            >
              compound interest guide
            </Link>
            . If you want to see how regular deposits build over time, explore{" "}
            <Link
              href="/how-much-will-i-have-if-i-invest-every-month"
              className={styles.inlineLink}
            >
              monthly investing scenarios
            </Link>
            . If you want a faster way to think about time and growth, read{" "}
            <Link
              href="/how-long-does-it-take-to-double-your-money"
              className={styles.inlineLink}
            >
              how long it takes to double your money
            </Link>
            .
          </p>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how much 10 years could change your result
            </h2>
            <p className={styles.ctaText}>
              Test an earlier start versus a delayed start, adjust the monthly
              amount, and compare how much your final balance can move.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Test Your Timeline in the Calculator →
            </Link>
          </div>
        </section>

        <section
          className={styles.relatedSection}
          aria-labelledby="related-guides"
        >
          <h2 id="related-guides" className={styles.relatedHeading}>
            Related guides
          </h2>

          <div className={styles.relatedGrid}>
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={styles.relatedCard}
              >
                <span className={styles.relatedLabel}>{guide.label}</span>
                <strong className={styles.relatedTitle}>{guide.title}</strong>
                <span className={styles.relatedText}>{guide.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className={styles.contentSection}
          aria-labelledby="faq-heading"
        >
          <h2 id="faq-heading" className={styles.sectionTitle}>
            Frequently asked questions
          </h2>

          {faqItems.map((item) => (
            <div key={item.question} className={styles.faqItem}>
              <h3 className={styles.questionTitle}>{item.question}</h3>
              <p className={styles.paragraph}>{item.answer}</p>
            </div>
          ))}
        </section>

        <section
          className={styles.contentSection}
          aria-labelledby="final-takeaway"
        >
          <h2 id="final-takeaway" className={styles.sectionTitle}>
            Final takeaway
          </h2>

          <p className={styles.paragraph}>
            Investing early vs late is not a small difference. It can reshape
            the entire plan. A delayed start can force later contributions to
            work much harder because they are trying to replace lost compounding
            time.
          </p>

          <p className={styles.paragraph}>
            If you want to compare deposit growth directly, explore{" "}
            <Link
              href="/how-much-will-i-have-if-i-invest-every-month"
              className={styles.inlineLink}
            >
              monthly investing scenarios
            </Link>
            . If you want to connect return assumptions with time, read{" "}
            <Link
              href="/how-long-does-it-take-to-double-your-money"
              className={styles.inlineLink}
            >
              how long it takes to double your money
            </Link>
            .
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to see how much a delayed start could cost you?
            </p>
            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              Compare your timelines with your own numbers →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}