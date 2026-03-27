import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/how-much-difference-does-10-years-make-in-investing";
const calculatorPath = "/calculator";

const pageTitle =
  "How Much Difference Does 10 Years Make in Investing? Final Balance Impact";

const pageDescription =
  "See how a 10-year difference in investing can change your final balance. Compare timelines, contributions, and outcomes with a simple calculator.";

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
    question: "Does 10 years really make a big difference in investing?",
    answer:
      "Yes. A 10-year head start can dramatically change the final balance because it gives deposits and gains more time to compound.",
  },
  {
    question: "Why is a 10-year delay so expensive?",
    answer:
      "Because the delay removes both contribution years and compounding years. That means later deposits have less time to grow and earlier gains never happen.",
  },
  {
    question: "Can I still invest successfully if I started 10 years late?",
    answer:
      "Yes. Starting later can still build meaningful results. The plan usually needs stronger monthly contributions or a longer timeline to narrow the gap.",
  },
  {
    question: "Is time more important than returns?",
    answer:
      "Both matter, but time is one of the strongest drivers of compounding. Even with the same return, a 10-year difference can create a large gap.",
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
    scenario: "Start at 25",
    monthlyAmount: "$350",
    endAge: "55",
    yearsInvested: "30 years",
    estimatedBalance: "~$522,000",
  },
  {
    scenario: "Start at 35",
    monthlyAmount: "$350",
    endAge: "55",
    yearsInvested: "20 years",
    estimatedBalance: "~$200,000",
  },
];

const relatedGuides = [
  {
    href: "/investing-early-vs-late-how-big-is-the-difference",
    label: "Comparison",
    title: "Investing Early vs Late: How Big Is the Difference?",
    text: "See how delaying your start changes the final result.",
  },
  {
    href: "/is-it-too-late-to-start-investing",
    label: "Decision",
    title: "Is It Too Late to Start Investing?",
    text: "Understand what changes when you start later.",
  },
  {
    href: "/how-much-will-i-have-if-i-invest-every-month",
    label: "Scenario",
    title: "How Much Will I Have If I Invest Every Month?",
    text: "See how consistent investing builds over time.",
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
          <div className={styles.eyebrow}>10-year comparison</div>

          <h1 className={styles.title}>
            How Much Difference Does 10 Years Make in Investing? See How It
            Changes Your Final Balance
          </h1>

          <p className={styles.lead}>
            A 10-year difference can change your final balance far more than
            most people expect. Compounding needs time, and a decade gives your
            money many more chances to grow.
          </p>

          <p className={styles.lead}>
            A delay does not make investing useless. It changes the math. Less
            time means more pressure on contributions and a smaller window for
            growth.
          </p>

          <div className={styles.callout}>
            <strong>Key insight:</strong> a 10-year delay removes years of
            compounding on both your deposits and your gains.
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.heroButton}>
              See How 10 Years Changes Your Final Balance →
            </Link>
          </div>
        </header>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            A simple 10-year investing comparison
          </h2>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Scenario</th>
                  <th className={styles.tableHead}>Monthly</th>
                  <th className={styles.tableHead}>Years</th>
                  <th className={styles.tableHead}>Final Balance</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.scenario}>
                    <td className={styles.tableCellStrong}>
                      {row.scenario}
                    </td>
                    <td className={styles.tableCell}>
                      {row.monthlyAmount}
                    </td>
                    <td className={styles.tableCell}>
                      {row.yearsInvested}
                    </td>
                    <td className={styles.tableCellStrong}>
                      {row.estimatedBalance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            The difference is not just time invested. It is the compounding that
            happens on earlier gains. That is what creates the gap.
          </p>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            What to do if you are starting later
          </h2>

          <p className={styles.paragraph}>
            Starting later does not mean you missed your chance. It means you
            need clarity. Focus on realistic contributions, timeline, and goals.
          </p>

          <p className={styles.paragraph}>
            Learn more about the math in our{" "}
            <Link
              href="/how-to-calculate-compound-interest"
              className={styles.inlineLink}
            >
              compound interest guide
            </Link>{" "}
            or compare scenarios in{" "}
            <Link
              href="/investing-early-vs-late-how-big-is-the-difference"
              className={styles.inlineLink}
            >
              early vs late investing
            </Link>
            .
          </p>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your timeline now
            </h2>
            <p className={styles.ctaText}>
              Compare now versus 10 years later using your own numbers.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Test Your Numbers →
            </Link>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <h2 className={styles.relatedHeading}>Related guides</h2>

          <div className={styles.relatedGrid}>
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className={styles.relatedCard}>
                <span className={styles.relatedLabel}>{guide.label}</span>
                <strong className={styles.relatedTitle}>{guide.title}</strong>
                <span className={styles.relatedText}>{guide.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="faq" className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>FAQ</h2>

          {faqItems.map((item) => (
            <div key={item.question}>
              <h3 className={styles.questionTitle}>{item.question}</h3>
              <p className={styles.paragraph}>{item.answer}</p>
            </div>
          ))}
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            A 10-year difference can significantly change your final balance.
            Starting earlier gives compounding more time. Starting later still
            matters, but requires a more intentional plan.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to see your own numbers?
            </p>
            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              Compare your timeline →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}