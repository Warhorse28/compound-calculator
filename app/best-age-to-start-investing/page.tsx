import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/best-age-to-start-investing";
const calculatorPath = "/compound-interest-calculator";

const pageTitle =
  "Best Age to Start Investing (25, 35, or 50+): What Really Changes";
const pageDescription =
  "See what changes if you start investing at 25, 35, or even 50+. Compare timelines, monthly contributions, and outcomes with realistic examples and a simple calculator.";

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
    question: "Is 25 the best age to start investing?",
    answer:
      "Starting at 25 can create a major long-term advantage because your money has more time to compound. But that does not mean later starters are locked out of meaningful results.",
  },
  {
    question: "Is it too late to start investing at 35?",
    answer:
      "No. Starting at 35 can still build a strong long-term portfolio, especially with steady monthly contributions and a realistic time horizon.",
  },
  {
    question: "Can you still invest successfully after 50?",
    answer:
      "Yes. Starting after 50 can still help build additional capital, improve retirement income options, and reduce pressure on future cash flow. The strategy usually needs a shorter timeline and clearer targets.",
  },
  {
    question: "Why does starting age matter so much?",
    answer:
      "Starting age changes how long your deposits and gains have to compound. More time can reduce the monthly amount needed to reach a target. Less time often means higher contribution pressure.",
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
    startAge: "25",
    monthlyAmount: "$300",
    endAge: "65",
    yearsInvested: "40 years",
    annualReturn: "8%",
    estimatedBalance: "~$932,000",
    keyTakeaway: "More time lowers pressure on each monthly deposit.",
  },
  {
    startAge: "35",
    monthlyAmount: "$300",
    endAge: "65",
    yearsInvested: "30 years",
    annualReturn: "8%",
    estimatedBalance: "~$447,000",
    keyTakeaway: "Still strong, but compounding has less time to work.",
  },
  {
    startAge: "50",
    monthlyAmount: "$300",
    endAge: "65",
    yearsInvested: "15 years",
    annualReturn: "8%",
    estimatedBalance: "~$104,000",
    keyTakeaway: "Smaller ending balance, but still builds useful capital.",
  },
];

const relatedGuides = [
  {
    href: "/investing-early-vs-late-how-big-is-the-difference",
    label: "Comparison",
    title: "Investing Early vs Late: How Big Is the Difference?",
    text: "See how a delayed start can change the final balance even when the monthly contribution stays the same.",
  },
  {
    href: "/how-much-will-i-have-if-i-invest-every-month",
    label: "Scenario",
    title: "How Much Will I Have If I Invest Every Month?",
    text: "Explore how steady monthly investing can build over time under different timelines and return assumptions.",
  },
  {
    href: "/how-to-calculate-compound-interest",
    label: "Guide",
    title: "How to Calculate Compound Interest",
    text: "Learn the math behind long-term growth and why time matters so much in investing.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className={styles.article}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>AGE COMPARISON</span>

          <h1 className={styles.title}>
            Best Age to Start Investing: What Changes If You Start at 25, 35, or
            Even 50+
          </h1>

          <p className={styles.lead}>
            There is no single age when investing suddenly becomes worth it.
            What changes is the math. Your starting age affects how many years
            your money can compound, how much you may need to invest each month,
            and how large the final balance can realistically become.
          </p>

          <p className={styles.intro}>
            That matters whether you are 25, 35, or 50+. Starting earlier can
            make the path easier, but later starters can still build meaningful
            results. The real goal is not to shame anyone for starting late. It
            is to understand what changes and what actions still make sense now.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              The best age to start investing is not only about youth. It is
              about how your current age changes the time, contribution level,
              and outcome required to reach your goal.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Compare your starting age in the calculator
            </Link>
            <Link
              href="/investing-early-vs-late-how-big-is-the-difference"
              className={styles.secondaryLink}
            >
              Compare early vs late examples
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#why-age-matters" className={styles.tocLink}>
                Why starting age matters
              </a>
            </li>
            <li>
              <a href="#age-comparison" className={styles.tocLink}>
                Starting at 25, 35, or 50+
              </a>
            </li>
            <li>
              <a href="#what-changes-later" className={styles.tocLink}>
                What changes when you start later
              </a>
            </li>
            <li>
              <a href="#best-way-to-think" className={styles.tocLink}>
                The best way to think about it
              </a>
            </li>
            <li>
              <a href="#faq" className={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <section id="why-age-matters" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why your starting age matters so much in investing
          </h2>

          <p className={styles.paragraph}>
            Starting age changes more than the calendar. It changes how long
            each deposit has to grow, how long each gain can keep compounding,
            and how much room you have to recover from setbacks or contribute
            less aggressively later.
          </p>

          <p className={styles.paragraph}>
            That is why two people can invest the same monthly amount and end up
            with very different outcomes. The earlier starter gets more years of
            compounding. The later starter often has to rely more on larger
            deposits, a longer working timeline, or a tighter financial plan.
          </p>

          <ul className={styles.list}>
            <li>more time gives each deposit more chances to compound</li>
            <li>starting later usually raises contribution pressure</li>
            <li>a shorter timeline leaves less room for mistakes</li>
            <li>later does not mean hopeless, but it does change the math</li>
          </ul>
        </section>

        <section id="age-comparison" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes if you start at 25, 35, or even 50+
          </h2>

          <p className={styles.paragraph}>
            Imagine the same person investing <strong>$300 per month</strong> at
            an assumed <strong>8% annual return</strong>, stopping at age 65.
            The key difference below is not effort per month. It is how much
            time each scenario gets.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Start age</th>
                  <th className={styles.tableHead}>Monthly amount</th>
                  <th className={styles.tableHead}>End age</th>
                  <th className={styles.tableHead}>Years invested</th>
                  <th className={styles.tableHead}>Annual return</th>
                  <th className={styles.tableHead}>Estimated balance</th>
                  <th className={styles.tableHead}>What changes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.startAge}>
                    <td className={styles.tableCellStrong}>{row.startAge}</td>
                    <td className={styles.tableCell}>{row.monthlyAmount}</td>
                    <td className={styles.tableCell}>{row.endAge}</td>
                    <td className={styles.tableCell}>{row.yearsInvested}</td>
                    <td className={styles.tableCell}>{row.annualReturn}</td>
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
            The age-25 scenario is strongest because it has the most time to
            compound. But the important point is that later scenarios still
            matter. Starting at 35 can still build a large long-term portfolio.
            Starting at 50+ can still add meaningful capital.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What these numbers actually mean</p>
            <p className={styles.noteText}>
              Time makes the plan easier, but starting later is still far better
              than waiting even longer. The path changes, but the opportunity
              does not disappear.
            </p>
          </div>
        </section>

        <section id="what-changes-later" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What changes when you start investing later
          </h2>

          <p className={styles.paragraph}>
            Later starters are not automatically shut out. The real difference
            is that time no longer does as much of the heavy lifting. That means
            the plan usually has to work harder somewhere else.
          </p>

          <p className={styles.paragraph}>
            Someone starting at 50 may still invest successfully, but they often
            need a clearer target, a more realistic timeline, and a stronger
            focus on contribution size. Someone starting at 35 may still have
            enough runway for compounding to do serious work, but not enough to
            justify delay.
          </p>

          <ul className={styles.list}>
            <li>later starters often need higher monthly contributions</li>
            <li>risk tolerance matters more when the timeline shrinks</li>
            <li>income needs and liquidity become more important after 50</li>
            <li>starting later still beats postponing the decision again</li>
          </ul>
        </section>

        <section id="best-way-to-think" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            The best way to think about the best age to start investing
          </h2>

          <p className={styles.paragraph}>
            The best age to start investing is not only about being young. It is
            about matching your current age to a realistic plan. If you are
            younger, your biggest advantage is time. If you are older, your edge
            may need to come from stronger savings, clearer goals, and smarter
            expectations.
          </p>

          <p className={styles.paragraph}>
            If you want the broader math behind this, read our{" "}
            <Link
              href="/investing-early-vs-late-how-big-is-the-difference"
              className={styles.inlineLink}
            >
              early vs late investing guide
            </Link>
            . If you want to see how monthly deposits build over time, explore{" "}
            <Link
              href="/how-much-will-i-have-if-i-invest-every-month"
              className={styles.inlineLink}
            >
              monthly investing scenarios
            </Link>
            . If you want to understand the formula behind the growth, read our{" "}
            <Link
              href="/how-to-calculate-compound-interest"
              className={styles.inlineLink}
            >
              compound interest guide
            </Link>
            .
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              See how your starting age affects your result
            </h2>
            <p className={styles.ctaText}>
              Compare age 25, 35, and 50+, adjust your monthly investment, and
              see how your timeline changes with your own numbers.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Test your scenario in the calculator
            </Link>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="related-guides">
          <div className={styles.sectionHeader}>
            <h2 id="related-guides" className={styles.sectionTitle}>
              Related guides
            </h2>
          </div>

          <nav className={styles.relatedGrid} aria-label="Related guides">
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
          </nav>
        </section>

        <section id="faq" className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently asked questions</h2>

          {faqItems.map((item) => (
            <div key={item.question} className={styles.faqItem}>
              <h3 className={styles.questionTitle}>{item.question}</h3>
              <p className={styles.paragraph}>{item.answer}</p>
            </div>
          ))}
        </section>

        <section className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            Want to compare your age, timeline, and monthly amount right now?
          </p>
          <Link href={calculatorPath} className={styles.bottomCtaLink}>
            See the difference with your own numbers
          </Link>
        </section>
      </article>
    </main>
  );
}
