import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/is-it-too-late-to-start-investing";
const calculatorPath = "/compound-interest-calculator";

const pageTitle =
  "Is It Too Late to Start Investing at 30, 40, or 50+? What It Does to Your Final Balance";
const pageDescription =
  "See what starting to invest at 30, 40, or 50+ could do to your final balance. Compare timelines, contribution pressure, and realistic outcomes with a calculator.";

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
    question: "Is 30 too late to start investing?",
    answer:
      "No. Starting at 30 can still give your money decades to compound. You may not have the same runway as someone who started earlier, but you can still build a strong long-term portfolio.",
  },
  {
    question: "Is 40 too late to start investing?",
    answer:
      "No. Starting at 40 usually means more contribution pressure than starting at 30, but it can still produce meaningful long-term growth if the plan is realistic and consistent.",
  },
  {
    question: "Can you still invest successfully after 50?",
    answer:
      "Yes. Investing after 50 can still help build useful capital, improve retirement income options, and reduce pressure on future cash flow. The strategy usually needs a shorter timeline and clearer goals.",
  },
  {
    question: "Why does starting later affect the final balance so much?",
    answer:
      "Because a later start removes years of compounding. That means fewer years for deposits to grow and fewer years for gains to keep building on top of earlier gains.",
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
    startAge: "30",
    monthlyAmount: "$400",
    endAge: "65",
    yearsInvested: "35 years",
    annualReturn: "8%",
    estimatedBalance: "~$826,000",
    keyTakeaway: "Long runway. Time still does a lot of the work.",
  },
  {
    startAge: "40",
    monthlyAmount: "$400",
    endAge: "65",
    yearsInvested: "25 years",
    annualReturn: "8%",
    estimatedBalance: "~$380,000",
    keyTakeaway: "Still meaningful, but the timeline is much shorter.",
  },
  {
    startAge: "50",
    monthlyAmount: "$400",
    endAge: "65",
    yearsInvested: "15 years",
    annualReturn: "8%",
    estimatedBalance: "~$138,000",
    keyTakeaway: "Useful capital, but each year now matters more.",
  },
];

const relatedGuides = [
  {
    href: "/best-age-to-start-investing",
    label: "Age Guide",
    title: "Best Age to Start Investing: What Changes at 25, 35, or 50+",
    text: "See how different starting ages change the timeline, pressure, and final outcome.",
  },
  {
    href: "/how-to-calculate-compound-interest",
    label: "Guide",
    title: "How to Calculate Compound Interest",
    text: "Understand the formula behind compounding and why time can change the result so much.",
  },
  {
    href: "/how-much-will-i-have-if-i-invest-every-month",
    label: "Scenario",
    title: "How Much Will I Have If I Invest Every Month?",
    text: "See how regular contributions can build over time under different assumptions.",
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
          <span className={styles.eyebrow}>LATE-START INVESTING</span>

          <h1 className={styles.title}>
            Is It Too Late to Start Investing at 30, 40, or 50+? What It Does
            to Your Final Balance
          </h1>

          <p className={styles.lead}>
            Starting later can absolutely change your final balance. But later
            does not mean pointless. What changes is the math: you have fewer
            years to compound, which usually means more pressure on each monthly
            contribution.
          </p>

          <p className={styles.intro}>
            That matters whether you are 30, 40, or 50+. Starting earlier makes
            the path easier, but later starters can still build meaningful
            results. The real question is not whether the opportunity is gone.
            It is what changes now and what still makes sense from your current
            position.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              Starting later usually lowers the final balance, but it does not
              erase the value of investing. The strategy changes. The
              opportunity does not disappear.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              See what starting later could change
            </Link>
            <Link
              href="/best-age-to-start-investing"
              className={styles.secondaryLink}
            >
              Compare starting ages
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#why-it-feels-late" className={styles.tocLink}>
                Why starting later feels risky
              </a>
            </li>
            <li>
              <a href="#age-comparison" className={styles.tocLink}>
                Starting at 30, 40, or 50+
              </a>
            </li>
            <li>
              <a href="#what-changes" className={styles.tocLink}>
                What actually changes
              </a>
            </li>
            <li>
              <a href="#how-to-respond" className={styles.tocLink}>
                How to respond intelligently
              </a>
            </li>
            <li>
              <a href="#faq" className={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <section id="why-it-feels-late" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Why starting later feels more risky than starting early
          </h2>

          <p className={styles.paragraph}>
            Starting later feels heavy because time is no longer doing as much
            of the work. When you begin earlier, each deposit gets more years to
            grow, and each gain has more time to produce another gain.
          </p>

          <p className={styles.paragraph}>
            A later start removes part of that chain. It does not make
            investing useless. It simply means that a smaller portion of the
            outcome comes from time and a larger portion has to come from
            contribution size, consistency, and realistic planning.
          </p>

          <ul className={styles.list}>
            <li>less time means fewer compounding cycles</li>
            <li>later starters often need stronger monthly deposits</li>
            <li>shorter timelines leave less room for delay</li>
            <li>the plan matters more, but the opportunity still exists</li>
          </ul>
        </section>

        <section id="age-comparison" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What it does to your final balance at 30, 40, or 50+
          </h2>

          <p className={styles.paragraph}>
            Imagine the same person investing <strong>$400 per month</strong> at
            an assumed <strong>8% annual return</strong>, stopping at age 65.
            The biggest variable here is not effort per month. It is time.
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
                  <th className={styles.tableHead}>What stands out</th>
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
            The age-30 scenario has a clear time advantage. The age-40 scenario
            still has room for meaningful growth, but the gap becomes visible.
            The age-50 scenario finishes with a smaller balance, yet it still
            creates useful capital.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What these numbers really mean</p>
            <p className={styles.noteText}>
              Starting later changes the size of the result, not the value of
              the decision. If you are starting now, the relevant question is no
              longer “Did I start perfectly?” It is “What can I still build from
              here?”
            </p>
          </div>
        </section>

        <section id="what-changes" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            What actually changes when you start later
          </h2>

          <p className={styles.paragraph}>
            The biggest change is contribution pressure. If you start at 30,
            time can still carry a large share of the outcome. If you start at
            40, your monthly amount often matters more. If you start at 50+,
            clarity becomes even more important because the timeline is short
            and every year matters more.
          </p>

          <p className={styles.paragraph}>
            That does not mean later starters should give up. It means the plan
            usually needs to be more deliberate. Targets, time horizon, risk
            level, and cash flow all become more important as the clock
            tightens.
          </p>

          <ul className={styles.list}>
            <li>later starts usually raise the monthly amount needed</li>
            <li>shorter timelines reduce room for mistakes</li>
            <li>liquidity and income needs matter more after 50</li>
            <li>starting now still beats waiting another year</li>
          </ul>
        </section>

        <section id="how-to-respond" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How to respond intelligently if you are starting later
          </h2>

          <p className={styles.paragraph}>
            If you are starting later, the right response is not panic. It is
            clarity. You want to know how much time you have, how much you can
            contribute, and what kind of result is still realistic.
          </p>

          <p className={styles.paragraph}>
            If you want to understand the math behind the growth, read our{" "}
            <Link
              href="/how-to-calculate-compound-interest"
              className={styles.inlineLink}
            >
              compound interest guide
            </Link>
            . If you want to see how steady contributions build over time,
            explore{" "}
            <Link
              href="/how-much-will-i-have-if-i-invest-every-month"
              className={styles.inlineLink}
            >
              monthly investing scenarios
            </Link>
            . If you want to understand how long compounding needs to work, read{" "}
            <Link
              href="/how-long-does-it-take-to-double-your-money"
              className={styles.inlineLink}
            >
              how long it takes to double your money
            </Link>
            .
          </p>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Test your age and timeline now</h2>
            <p className={styles.ctaText}>
              Compare 30, 40, and 50+, change the monthly amount, and see what
              your current starting point could do to your final balance.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Test your numbers in the calculator
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
            Want to see what your age could do to your final balance?
          </p>
          <Link href={calculatorPath} className={styles.bottomCtaLink}>
            Compare your scenario with your own numbers
          </Link>
        </section>
      </article>
    </main>
  );
}
