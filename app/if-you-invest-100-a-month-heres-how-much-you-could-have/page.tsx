import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://yoursite.com";
const pagePath = "/if-you-invest-100-a-month-heres-how-much-you-could-have";
const calculatorPath = "/compound-interest-calculator";

const metaTitle =
  "If You Invest $100 a Month, How Much Could You Have Over Time?";
const pageTitle =
  "If You Invest $100 a Month, Here’s How Much You Could Have in 10, 20, or 30 Years";
const pageDescription =
  "See how $100 a month can grow over time. Compare 10, 20, and 30 year outcomes and test your own numbers with a compound interest calculator.";

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
};

const comparisonRows = [
  {
    years: "10 years",
    invested: "$12,000",
    result: "~$18,200",
  },
  {
    years: "20 years",
    invested: "$24,000",
    result: "~$58,700",
  },
  {
    years: "30 years",
    invested: "$36,000",
    result: "~$149,000",
  },
];

export default function Page() {
  return (
    <main className={styles.pageShell}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className={styles.articleCard}>
        <header className={styles.heroSection}>
          <div className={styles.eyebrow}>Low monthly investing</div>

          <h1 className={styles.title}>{pageTitle}</h1>

          {/* 🔥 HOOK MAIS FORTE */}
          <p className={styles.lead}>
            Most people ignore $100 a month — because it feels too small to
            matter.
          </p>

          <p className={styles.lead}>
            But over time, that small amount can turn into something surprisingly
            large. The difference isn’t the money itself — it’s how long it stays
            invested.
          </p>

          <div className={styles.callout}>
            <strong>Key insight:</strong> small amounts don’t stay small when
            compounding has enough time to work.
          </div>

          <div className={styles.heroActions}>
            <Link href={calculatorPath} className={styles.heroButton}>
              See what $100/month could turn into →
            </Link>
          </div>
        </header>

        {/* 🔥 NOVO: seção de contexto psicológico */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            Why $100 a month is often underestimated
          </h2>

          <p className={styles.paragraph}>
            Most people think in short timeframes. Over a few months, $100 feels
            irrelevant. Even over a year, the change seems small.
          </p>

          <p className={styles.paragraph}>
            But investing doesn’t behave linearly. Over longer periods, the
            growth curve starts to bend — and eventually accelerate.
          </p>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            If you invest $100 a month, here’s how it grows over time
          </h2>

          <p className={styles.paragraph}>
            These estimates assume an <strong>8% annual return</strong>. The
            contribution stays the same — only time changes.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Timeline</th>
                  <th className={styles.tableHead}>Total invested</th>
                  <th className={styles.tableHead}>Estimated result</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.years}>
                    <td className={styles.tableCellStrong}>{row.years}</td>
                    <td className={styles.tableCell}>{row.invested}</td>
                    <td className={styles.tableCellStrong}>{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 🔥 MELHOR EXPLICAÇÃO */}
          <p className={styles.paragraph}>
            Notice how the jump from 20 to 30 years is much larger than from 10
            to 20. That’s not because you invested more — it’s because
            compounding had more time to build on itself.
          </p>
        </section>

        {/* 🔥 NOVO: conexão com outras páginas */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            What happens if you increase your monthly investment
          </h2>

          <p className={styles.paragraph}>
            $100 a month is just a starting point. Increasing your contribution
            can accelerate results — but time still plays the biggest role.
          </p>

          <p className={styles.paragraph}>
            Compare this with{" "}
            <Link
              href="/if-you-invest-300-a-month-heres-how-much-you-could-have"
              className={styles.inlineLink}
            >
              $300 per month
            </Link>{" "}
            or{" "}
            <Link
              href="/if-you-invest-500-a-month-heres-how-much-you-could-have"
              className={styles.inlineLink}
            >
              $500 per month
            </Link>{" "}
            to see how scaling contributions changes the outcome.
          </p>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Test your own monthly investing scenario
            </h2>

            <p className={styles.ctaText}>
              Adjust the amount, timeline, and return to see what your numbers
              could realistically look like.
            </p>

            <Link href={calculatorPath} className={styles.ctaButton}>
              Run your numbers →
            </Link>
          </div>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Final takeaway</h2>

          <p className={styles.paragraph}>
            $100 a month may not look impressive at first. But over time, it can
            grow into something meaningful — especially if you stay consistent.
          </p>

          <p className={styles.paragraph}>
            The biggest mistake is not the amount. It’s underestimating what time
            can do.
          </p>

          <div className={styles.bottomCta}>
            <p className={styles.bottomCtaText}>
              Want to see your own projection?
            </p>

            <Link href={calculatorPath} className={styles.bottomCtaLink}>
              See your numbers →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
