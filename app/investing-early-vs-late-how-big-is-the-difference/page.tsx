import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/investing-early-vs-late-how-big-is-the-difference";
const calculatorPath = "/compound-interest-calculator";

export const metadata: Metadata = {
  title:
    "Investing Early vs Late: How Big Is the Difference? Real Examples + Calculator",
  description:
    "Compare investing early vs late with clear examples, realistic numbers, and a simple calculator. See how much a 10-year delay can change your final balance.",
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does investing early really make a big difference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Starting earlier gives your money more time to compound, which can create a much larger final balance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I catch up if I start late?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sometimes, but it usually requires higher monthly contributions or more time.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the difference so big?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because compounding needs time. Early gains generate more gains for longer.",
      },
    },
  ],
};

const faqItems = [
  {
    question: "Does investing early really make a big difference?",
    answer:
      "Yes. Starting earlier gives your money more time to compound, which can create a much larger final balance.",
  },
  {
    question: "Can I catch up if I start late?",
    answer:
      "Sometimes, but it usually requires higher monthly contributions or more time.",
  },
  {
    question: "Why is the difference so big?",
    answer:
      "Because compounding needs time. Early gains generate more gains for longer.",
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className={styles.article}>
        <header className={styles.hero}>
          <span className={styles.eyebrow}>TIMING COMPARISON</span>

          <h1 className={styles.title}>
            Investing Early vs Late: How Big Is the Difference?
          </h1>

          <p className={styles.lead}>
            Starting earlier does not just give you more time. It gives your
            money more opportunities to grow on top of previous growth.
          </p>

          <p className={styles.intro}>
            That is why two people investing the same amount can end with very
            different results. A 10-year delay does not only shorten the plan.
            It removes years of compounding that are hard to replace later.
          </p>

          <div className={styles.highlight} role="note" aria-label="Key takeaway">
            <p className={styles.highlightLabel}>Key takeaway</p>
            <p className={styles.highlightText}>
              A delay does not only reduce time. It removes years of growth on
              top of growth, which is why the final gap can become much larger
              than most people expect.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.primaryCta}>
              Compare your scenario
            </Link>
            <Link
              href="/how-much-will-i-have-if-i-invest-every-month"
              className={styles.secondaryLink}
            >
              See monthly investing examples
            </Link>
          </div>
        </header>

        <nav className={styles.tocBox} aria-label="Table of contents">
          <p className={styles.tocTitle}>On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a href="#example" className={styles.tocLink}>
                Side-by-side example
              </a>
            </li>
            <li>
              <a href="#why" className={styles.tocLink}>
                Why time matters
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
          id="example"
          className={styles.section}
          aria-labelledby="example-title"
        >
          <h2 id="example-title" className={styles.sectionTitle}>
            Early vs late investing example
          </h2>

          <p className={styles.paragraph}>
            Two investors, same contribution, same return. The only difference
            is when they start.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Investor</th>
                  <th className={styles.tableHead}>Start age</th>
                  <th className={styles.tableHead}>Years invested</th>
                  <th className={styles.tableHead}>Ending balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>Early</td>
                  <td className={styles.tableCell}>25</td>
                  <td className={styles.tableCell}>30</td>
                  <td className={styles.tableCell}>~$447,000</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>Late</td>
                  <td className={styles.tableCell}>35</td>
                  <td className={styles.tableCell}>20</td>
                  <td className={styles.tableCell}>~$178,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.paragraph}>
            That gap is not just about investing longer. It is about giving
            compounding more time to work. The early investor gets more years
            where past gains can create new gains.
          </p>

          <div className={styles.tipBox}>
            <p className={styles.tipTitle}>What the example really shows</p>
            <p className={styles.tipText}>
              Starting earlier reduces the pressure to contribute more later or
              chase higher returns. Time does part of the heavy lifting.
            </p>
          </div>
        </section>

        <section
          id="why"
          className={styles.section}
          aria-labelledby="why-title"
        >
          <h2 id="why-title" className={styles.sectionTitle}>
            Why time matters so much
          </h2>

          <p className={styles.paragraph}>
            A lot of people think the biggest difference comes from how much you
            invest. That matters, but time changes what each dollar can do.
          </p>

          <ul className={styles.list}>
            <li>More time means more compounding cycles</li>
            <li>Early gains get the chance to generate future gains</li>
            <li>Starting earlier reduces the pressure to chase high returns</li>
            <li>Late starters often need bigger monthly contributions</li>
          </ul>

          <p className={styles.paragraph}>
            A delay forces your future contributions to work harder. That does
            not mean starting late is pointless. It means the plan usually needs
            stronger contributions, more patience, or both.
          </p>

          <div className={styles.noteBox}>
            <p className={styles.noteTitle}>Why this matters in practice</p>
            <p className={styles.noteText}>
              If you start later, the solution is not panic. The useful question
              is how much you need to adjust your monthly investing plan to make
              up for lost time.
            </p>
          </div>
        </section>

        <section className={styles.ctaSection} aria-labelledby="cta-title">
          <div className={styles.ctaBox}>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Compare your own timeline
            </h2>
            <p className={styles.ctaText}>
              Test different starting ages, monthly contributions, and return
              assumptions to see how much a delay could change your final
              balance.
            </p>
            <Link href={calculatorPath} className={styles.ctaButton}>
              Use the compound interest calculator
            </Link>
          </div>
        </section>

        <section id="faq" className={styles.section} aria-labelledby="faq-title">
          <h2 id="faq-title" className={styles.sectionTitle}>
            Frequently asked questions
          </h2>

          {faqItems.map((item) => (
            <div key={item.question} className={styles.faqItem}>
              <h3 className={styles.questionTitle}>{item.question}</h3>
              <p className={styles.paragraph}>{item.answer}</p>
            </div>
          ))}
        </section>

        <section className={styles.section} aria-labelledby="related-guides-title">
          <div className={styles.sectionHeader}>
            <h2 id="related-guides-title" className={styles.sectionTitle}>
              Related guides
            </h2>
            <p className={styles.relatedIntro}>
              Explore the math behind compounding, monthly investing, and the
              tradeoff between time and contribution size.
            </p>
          </div>

          <nav className={styles.relatedGrid} aria-label="Related guides">
            <Link
              href="/how-to-calculate-compound-interest"
              className={styles.relatedCard}
            >
              <span className={styles.relatedLabel}>Guide</span>
              <strong className={styles.relatedTitle}>
                Compound interest explained
              </strong>
              <span className={styles.relatedText}>
                Understand how long-term growth actually works.
              </span>
            </Link>

            <Link
              href="/how-much-will-i-have-if-i-invest-every-month"
              className={styles.relatedCard}
            >
              <span className={styles.relatedLabel}>Scenario</span>
              <strong className={styles.relatedTitle}>
                Monthly investing results
              </strong>
              <span className={styles.relatedText}>
                See how consistency builds wealth over time.
              </span>
            </Link>

            <Link
              href="/best-age-to-start-investing"
              className={styles.relatedCard}
            >
              <span className={styles.relatedLabel}>Planning</span>
              <strong className={styles.relatedTitle}>
                Best age to start investing
              </strong>
              <span className={styles.relatedText}>
                See what changes when you begin at 25, 35, or later.
              </span>
            </Link>
          </nav>
        </section>

        <section className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            Want to test your own timeline and contribution level?
          </p>
          <Link href={calculatorPath} className={styles.bottomCtaLink}>
            Use the calculator
          </Link>
        </section>
      </article>
    </main>
  );
}
