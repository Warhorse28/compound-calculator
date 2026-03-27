import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-will-i-have-if-i-invest-every-month";
const calculatorPath = "/calculator";

const pageTitle =
  "How Much Will I Have If I Invest Every Month? See How Your Balance Can Grow";

const pageDescription =
  "See how much you could have if you invest every month. Compare timelines, monthly amounts, and realistic growth scenarios with a simple calculator.";

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
    question: "How much will I have if I invest every month?",
    answer:
      "It depends on your monthly amount, timeline, and return rate. Even moderate monthly investing can build a much larger balance over time when compounding has enough years to work.",
  },
  {
    question: "Does investing every month make a big difference?",
    answer:
      "Yes. Regular monthly investing can steadily build your balance, especially over long timelines. The combination of consistency and compounding is what makes the difference.",
  },
  {
    question: "Is it better to invest monthly or wait until later?",
    answer:
      "Starting earlier is often more powerful because your money gets more time to compound. Waiting may require much larger contributions later to reach a similar result.",
  },
  {
    question: "What matters most in monthly investing?",
    answer:
      "The biggest factors are usually your monthly contribution, the number of years invested, and the return rate. Time is especially important because it gives compounding more chances to build.",
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
    monthlyAmount: "$200",
    years: "10 years",
    annualReturn: "8%",
    estimatedBalance: "~$36,000",
    takeaway: "Small monthly amount, short timeline.",
  },
  {
    monthlyAmount: "$300",
    years: "20 years",
    annualReturn: "8%",
    estimatedBalance: "~$177,000",
    takeaway: "Longer time creates a much bigger result.",
  },
  {
    monthlyAmount: "$500",
    years: "30 years",
    annualReturn: "8%",
    estimatedBalance: "~$745,000",
    takeaway: "Consistency plus time can build serious capital.",
  },
];

const relatedGuides = [
  {
    href: "/how-to-calculate-compound-interest",
    label: "Guide",
    title: "How to Calculate Compound Interest",
    text: "Understand the formula behind long-term growth and why time matters so much.",
  },
  {
    href: "/how-much-difference-does-10-years-make-in-investing",
    label: "Comparison",
    title: "How Much Difference Does 10 Years Make in Investing?",
    text: "See how a 10-year difference can dramatically change the final balance.",
  },
  {
    href: "/investing-early-vs-late-how-big-is-the-difference",
    label: "Timing",
    title: "Investing Early vs Late: How Big Is the Difference?",
    text: "Compare what happens when the same contribution starts earlier or later.",
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
          <div className={styles.eyebrow}>Monthly investing</div>

          <h1 className={styles.title}>
            How Much Will I Have If I Invest Every Month? See How Your Balance
            Can Grow
          </h1>

          <p className={styles.lead}>
            Monthly investing can build far more than many people expect. The
            reason is simple: every contribution adds new money, and
            compounding gives that money more chances to keep growing.
          </p>

          <p className={styles.lead}>
            That is why even a moderate monthly amount can turn into a much
            larger balance over time. The key variables are your contribution,
            your timeline, and how long compounding has to work.
          </p>

          <div className={styles.callout} role="note" aria-label="Key insight">
            <strong>Key insight:</strong> monthly investing is powerful because
            consistency adds new deposits while time allows those deposits and
            gains to keep compounding.
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.heroButton}>
              See How Your Monthly Investing Could Grow →
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#why-monthly-investing-works" className={styles.tocLink}>
                Why monthly investing works
              </a>
            </li>
            <li>
              <a href="#monthly-investing-examples" className={styles.tocLink}>
                Monthly investing examples
              </a>
            </li>
            <li>
              <a href="#what-changes-your-result" className={styles.tocLink}>
                What changes your result
              </a>
            </li>
            <li>
              <a href="#how-to-think-about-it" className={styles.tocLink}>
                How to think about it clearly
              </a>
            </li>
            <li>
              <a href="#faq" className={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <section
          id="why-monthly-investing-works"
          className={styles.contentSection}
        >
          <h2 className={styles.sectionTitle}>
            Why investing every month can grow your balance so much
          </h2>

          <p className={styles.paragraph}>
            Monthly investing works because it combines two advantages. First,
            you keep adding fresh money on a regular basis. Second, older
            contributions keep getting more time to compound.
          </p>

          <p className={styles.paragraph}>
            That means the result is not only about how much you put in. It is
            also about how long each deposit stays invested. Earlier deposits
            often become some of the most important parts of the final balance.
          </p>

          <ul className={styles.list}>
            <li>monthly deposits build consistency</li>
            <li>older deposits usually grow the longest</li>
            <li>time gives compounding more chances to work</li>
            <li>small amounts can become meaningful over long periods</li>
          </ul>
        </section>

        <section
          id="monthly-investing-examples"
          className={styles.contentSection}
        >
          <h2 className={styles.sectionTitle}>
            Monthly investing examples with simple numbers
          </h2>

          <p className={styles.paragraph}>
            To make this easier to picture, here are a few example scenarios
            using regular monthly contributions and an assumed{" "}
            <strong>8% annual return</strong>.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <caption className={styles.tableCaption}>
                Example monthly investing scenarios with different amounts and
                timelines.
              </caption>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Monthly amount</th>
                  <th className={styles.tableHead}>Years invested</th>
                  <th className={styles.tableHead}>Annual return</th>
                  <th className={styles.tableHead}>Estimated balance</th>
                  <th className={styles.tableHead}>What stands out</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={`${row.monthlyAmount}-${row.years}`}>
                    <td className={styles.tableCellStrong}>
                      {row.monthlyAmount}
                    </td>
                    <td className={styles.tableCell}>{row.years}</td>
                    <td className={styles.tableCell}>{row.annualReturn}</td>
                    <td className={styles.tableCellStrong}>
                      {row.estimatedBalance}
                    </td>
                    <td className={styles.tableCell}>{row.takeaway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The biggest difference usually comes from time. A longer investing
            window often changes the final balance far more than people expect,
            even when the monthly contribution does not look huge at first.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>What these examples really show</p>
            <p className={styles.noteText}>
              The monthly amount matters, but time often does more work than
              people realize. Regular investing becomes much more powerful when
              it has many years to build.
            </p>
          </div>
        </section>

        <section
          id="what-changes-your-result"
          className={styles.contentSection}
        >
          <h2 className={styles.sectionTitle}>
            What changes how much you could have
          </h2>

          <p className={styles.paragraph}>
            Three variables usually matter most: how much you invest each
            month, how many years you stay invested, and the return rate you
            assume. Of those three, time is often the most underestimated.
          </p>

          <p className={styles.paragraph}>
            A higher monthly amount can help. A better return can help too. But
            when time gets shorter, your balance often has less room to grow.
            That is why starting earlier usually reduces pressure later.
          </p>

          <ul className={styles.list}>
            <li>larger monthly deposits can accelerate growth</li>
            <li>longer timelines usually have the biggest impact</li>
            <li>return assumptions matter, but time still drives compounding</li>
            <li>starting early can make the path much easier</li>
          </ul>
        </section>

        <section
          id="how-to-think-about-it"
          className={styles.contentSection}
        >
          <h2 className={styles.sectionTitle}>
            How to think about monthly investing more clearly
          </h2>

          <p className={styles.paragraph}>
            The useful question is not only “How much will I have?” It is also
            “What can I control from here?” You can change your monthly amount,
            your timeline, and the assumptions you test in the calculator.
          </p>

          <p className={styles.paragraph}>
            If you want to understand the formula behind the growth, read our{" "}
            <Link
              href="/how-to-calculate-compound-interest"
              className={styles.inlineLink}
            >
              compound interest guide
            </Link>
            . If you want to compare what happens when time changes, explore{" "}
            <Link
              href="/how-much-difference-does-10-years-make-in-investing"
              className={styles.inlineLink}
            >
              the 10-year investing difference
            </Link>
            . If you want to compare starting earlier versus later, read{" "}
            <Link
              href="/investing-early-vs-late-how-big-is-the-difference"
              className={styles.inlineLink}
            >
              investing early vs late
            </Link>
            .
          </p>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your monthly investing scenario
            </h2>
            <p className={styles.ctaText}>
              Change the monthly amount, timeline, and return to see how your
              balance could grow with your own numbers.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Test Your Numbers in the Calculator →
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
            How much will you have if you invest every month? Often far more
            than people expect, especially when the timeline is long. Monthly
            investing works because consistency adds new money while time gives
            compounding more chances to build.
          </p>

          <p className={styles.paragraph}>
            If you want to compare timing more directly, read{" "}
            <Link
              href="/how-much-difference-does-10-years-make-in-investing"
              className={styles.inlineLink}
            >
              how much 10 years changes the result
            </Link>
            . If you want to understand the formula behind the growth, explore{" "}
            <Link
              href="/how-to-calculate-compound-interest"
              className={styles.inlineLink}
            >
              compound interest math
            </Link>
            .
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to see how much your monthly investing could build?
            </p>
            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              Compare your scenario with your own numbers →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}