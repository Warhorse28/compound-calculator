import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-do-you-need-to-invest-to-reach-1-million";
const calculatorPath = "/compound-interest-calculator";

const metaTitle = "How Much Do You Need to Invest to Reach $1 Million?";
const pageTitle =
  "How Much Do You Need to Invest to Reach $1 Million? Monthly Examples and Calculator";
const pageDescription =
  "See how much you may need to invest monthly to reach $1 million. Compare timelines, return assumptions, and monthly contribution examples.";

export const metadata: Metadata = {
  title: metaTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
  openGraph: {
    title: metaTitle,
    description: pageDescription,
    url: `${siteUrl}${pagePath}`,
    siteName: "Your Site",
    type: "article",
  },
};

const faqItems = [
  {
    question: "How much do I need to invest monthly to reach $1 million?",
    answer:
      "It depends on your timeline, return rate, and starting balance. A longer timeline usually lowers the monthly amount required.",
  },
  {
    question: "Is reaching $1 million realistic with monthly investing?",
    answer:
      "Yes, for many people it can be realistic over a long enough timeline. The biggest drivers are consistency, time, and return assumptions.",
  },
  {
    question: "What matters more: investing more or starting earlier?",
    answer:
      "Both matter, but starting earlier often reduces how much you need to invest each month because compounding has more time to work.",
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
    years: "10 years",
    annualReturn: "8%",
    monthlyNeeded: "~$5,435",
    takeaway: "Very aggressive. Short timelines force high monthly pressure.",
  },
  {
    years: "20 years",
    annualReturn: "8%",
    monthlyNeeded: "~$1,680",
    takeaway: "Still demanding, but much more realistic than a 10-year plan.",
  },
  {
    years: "30 years",
    annualReturn: "8%",
    monthlyNeeded: "~$671",
    takeaway: "Time does more of the heavy lifting here.",
  },
];

const relatedGuides = [
  {
    href: "/if-you-invest-500-a-month-heres-how-much-you-could-have",
    label: "Scenario",
    title: "If You Invest $500 a Month, Here’s How Much You Could Have",
    text: "Compare a common monthly investing example against a million-dollar goal.",
  },
  {
    href: "/investing-early-vs-late-how-big-is-the-difference",
    label: "Comparison",
    title: "Investing Early vs Late: How Big Is the Difference?",
    text: "See why starting earlier can reduce how much you need to invest later.",
  },
  {
    href: "/what-interest-rate-do-i-need-to-reach-my-investment-goal",
    label: "Planning",
    title: "What Interest Rate Do I Need to Reach My Investment Goal?",
    text: "Understand how return assumptions change the path toward a target amount.",
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
          <span className={styles.eyebrow}>MILLION-DOLLAR GOAL</span>

          <h1 className={styles.title}>{pageTitle}</h1>

          <p className={styles.lead}>
            Reaching $1 million sounds huge, but the real question is simpler:
            how much do you need to invest each month to get there?
          </p>

          <p className={styles.intro}>
            The answer depends on three variables: your timeline, your return
            assumption, and whether you start early enough for compounding to do
            serious work. Without enough time, the monthly amount rises fast.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              A million-dollar goal is not just about investing more. It is
              about giving compounding enough time so the monthly requirement
              becomes realistic.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Calculate your path to $1 million
            </Link>
            <Link
              href="/if-you-invest-500-a-month-heres-how-much-you-could-have"
              className={styles.secondaryLink}
            >
              Compare with $500/month
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#monthly-needed" className={styles.tocLink}>
                How much you may need monthly
              </a>
            </li>
            <li>
              <a href="#why-timeline-matters" className={styles.tocLink}>
                Why timeline changes everything
              </a>
            </li>
            <li>
              <a href="#how-to-think-about-it" className={styles.tocLink}>
                How to think about a $1 million goal
              </a>
            </li>
            <li>
              <a href="#faq" className={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <section id="monthly-needed" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How much do you need to invest to reach $1 million?
          </h2>

          <p className={styles.paragraph}>
            These examples assume an <strong>8% annual return</strong> and a{" "}
            <strong>starting balance of $0</strong>. The only thing changing
            here is the timeline.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Timeline</th>
                  <th className={styles.tableHead}>Annual return</th>
                  <th className={styles.tableHead}>Monthly amount needed</th>
                  <th className={styles.tableHead}>What stands out</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.years}>
                    <td className={styles.tableCellStrong}>{row.years}</td>
                    <td className={styles.tableCell}>{row.annualReturn}</td>
                    <td className={styles.tableCellStrong}>
                      {row.monthlyNeeded}
                    </td>
                    <td className={styles.tableCell}>{row.takeaway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            This is the core lesson: the monthly number can look brutal over a
            short timeline, then become surprisingly manageable over a long one.
            That is why starting earlier usually matters more than people think.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What this really shows</p>
            <p className={styles.noteText}>
              A million-dollar goal is not only a savings problem. It is a time
              problem. Less time usually means much higher monthly pressure.
            </p>
          </div>
        </section>

        <section id="why-timeline-matters" className={styles.section}>
          <h2 className={styles.sectionTitle}>Why timeline changes everything</h2>

          <p className={styles.paragraph}>
            Many people assume the path to $1 million is mostly about finding a
            higher return. In practice, extending the timeline often changes the
            math more than chasing an extra percentage point.
          </p>

          <ul className={styles.list}>
            <li>longer timelines reduce the monthly amount required</li>
            <li>shorter timelines leave less room for compounding</li>
            <li>starting earlier usually lowers contribution pressure</li>
            <li>late starts often require bigger monthly sacrifice</li>
          </ul>

          <p className={styles.paragraph}>
            If you want to see the timing side more clearly, read our{" "}
            <Link
              href="/investing-early-vs-late-how-big-is-the-difference"
              className={styles.inlineLink}
            >
              early vs late investing guide
            </Link>
            . If you want to estimate a target return instead, explore{" "}
            <Link
              href="/what-interest-rate-do-i-need-to-reach-my-investment-goal"
              className={styles.inlineLink}
            >
              what interest rate you may need
            </Link>
            .
          </p>
        </section>

        <section id="how-to-think-about-it" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How to think about a $1 million goal realistically
          </h2>

          <p className={styles.paragraph}>
            A million dollars is a strong long-term target, but it should not be
            treated like a magic number. What matters is whether your plan is
            realistic for your income, timeline, and risk expectations.
          </p>

          <p className={styles.paragraph}>
            The better question is not just, “Can I reach $1 million?” It is,
            “What monthly amount, timeline, and return assumption make that goal
            realistic for me?”
          </p>

          <ul className={styles.list}>
            <li>define your actual deadline</li>
            <li>use realistic return assumptions</li>
            <li>test several monthly contribution levels</li>
            <li>compare easier and more aggressive paths</li>
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Build your own path to $1 million
            </h2>
            <p className={styles.ctaText}>
              Change the timeline, starting balance, and monthly contribution to
              see how realistic your plan looks with your own numbers.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Run your $1 million scenario
            </Link>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="related-guides-title">
          <div className={styles.sectionHeader}>
            <h2 id="related-guides-title" className={styles.sectionTitle}>
              Related guides
            </h2>
            <p className={styles.relatedIntro}>
              Explore the monthly investing, timing, and planning pages that
              support this goal.
            </p>
          </div>

          <nav className={styles.relatedGrid} aria-label="Related guides">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className={styles.relatedCard}>
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
            Want to see whether your timeline makes $1 million realistic?
          </p>
          <Link href={calculatorPath} className={styles.bottomCtaLink}>
            Use the calculator now
          </Link>
        </section>
      </article>
    </main>
  );
}
