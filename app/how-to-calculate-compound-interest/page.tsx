import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How to Calculate Compound Interest: Formula, Examples, and Monthly Contributions",
  description:
    "Learn how to calculate compound interest step by step, understand the formula, compare it with simple interest, and see examples with monthly contributions.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is compound interest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compound interest is growth earned on both your original balance and the interest already added over time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the formula for compound interest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard formula is A = P (1 + r / n)^(n × t), where A is final amount, P is principal, r is annual interest rate, n is compounding frequency, and t is time in years.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the standard formula with monthly contributions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not cleanly. Once you add recurring monthly deposits, a month-by-month calculation method is usually more practical and accurate.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between compound interest and simple interest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple interest is calculated only on the original principal, while compound interest is calculated on both the principal and previously earned interest.",
      },
    },
  ],
};

export default function Page() {
  return (
    <main style={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article style={styles.article}>
        <div style={styles.eyebrow}>Compound interest guide</div>

        <h1 style={styles.title}>
          How to Calculate Compound Interest: Formula, Examples, and Monthly
          Contributions
        </h1>

        <p style={styles.lead}>
          Compound interest plays a central role in long-term investment growth.
          Instead of earning returns only on your initial amount, your balance
          grows as interest is repeatedly added over time.
        </p>

        <p style={styles.lead}>
          Over longer periods, even moderate returns can lead to results that
          are significantly larger than many people expect, especially when
          regular contributions are involved.
        </p>

        <div style={styles.callout}>
          <strong>In short:</strong> if you invest regularly, a calculator will
          usually give you a more realistic projection than relying on a fixed
          formula alone.
        </div>

        <div style={styles.heroCtaWrap}>
          <Link href="/" style={styles.heroCta}>
            Calculate Your Investment Growth →
          </Link>
        </div>

        <nav style={styles.tocBox} aria-label="Table of contents">
          <p style={styles.tocTitle}>On this page</p>
          <ul style={styles.tocList}>
            <li>
              <a href="#formula" style={styles.tocLink}>
                The compound interest formula
              </a>
            </li>
            <li>
              <a href="#simple-vs-compound" style={styles.tocLink}>
                Simple interest vs compound interest
              </a>
            </li>
            <li>
              <a href="#basic-example" style={styles.tocLink}>
                Example without monthly contributions
              </a>
            </li>
            <li>
              <a href="#monthly-contributions" style={styles.tocLink}>
                What changes with monthly contributions
              </a>
            </li>
            <li>
              <a href="#practical-method" style={styles.tocLink}>
                A practical month-by-month method
              </a>
            </li>
            <li>
              <a href="#mistakes" style={styles.tocLink}>
                Common mistakes
              </a>
            </li>
            <li>
              <a href="#faq" style={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <h2 id="formula" style={styles.sectionTitle}>
          The compound interest formula
        </h2>

        <p style={styles.paragraph}>
          The standard compound interest formula is:
        </p>

        <div style={styles.formulaBox}>
          <code style={styles.formula}>A = P (1 + r / n)^(n × t)</code>
        </div>

        <p style={styles.paragraph}>Where:</p>

        <ul style={styles.list}>
          <li>
            <strong>A</strong> = final amount
          </li>
          <li>
            <strong>P</strong> = principal, or initial investment
          </li>
          <li>
            <strong>r</strong> = annual interest rate in decimal form
          </li>
          <li>
            <strong>n</strong> = number of compounding periods per year
          </li>
          <li>
            <strong>t</strong> = time in years
          </li>
        </ul>

        <p style={styles.paragraph}>
          This formula works best when you are analyzing a single initial
          investment without additional contributions.
        </p>

        <h2 id="simple-vs-compound" style={styles.sectionTitle}>
          Simple interest vs compound interest
        </h2>

        <p style={styles.paragraph}>
          The difference between simple interest and compound interest is not
          minor. It changes how a balance grows over time.
        </p>

        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHead}>Type</th>
                <th style={styles.tableHead}>How it works</th>
                <th style={styles.tableHead}>Typical result over time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCellStrong}>Simple interest</td>
                <td style={styles.tableCell}>
                  Interest is calculated only on the original principal.
                </td>
                <td style={styles.tableCell}>
                  Growth is linear and easier to estimate.
                </td>
              </tr>
              <tr>
                <td style={styles.tableCellStrong}>Compound interest</td>
                <td style={styles.tableCell}>
                  Interest is calculated on principal plus previously earned
                  interest.
                </td>
                <td style={styles.tableCell}>
                  Growth tends to accelerate as the balance gets larger.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={styles.paragraph}>
          For long-term investing, compound interest is usually the more useful
          model because it better reflects how real portfolios and savings
          balances grow.
        </p>

        <h2 id="basic-example" style={styles.sectionTitle}>
          Example without monthly contributions
        </h2>

        <p style={styles.paragraph}>
          Suppose you invest <strong>$1,000</strong> at an annual rate of{" "}
          <strong>6%</strong>, compounded monthly, for <strong>10 years</strong>.
        </p>

        <ul style={styles.list}>
          <li>
            <strong>P</strong> = 1000
          </li>
          <li>
            <strong>r</strong> = 0.06
          </li>
          <li>
            <strong>n</strong> = 12
          </li>
          <li>
            <strong>t</strong> = 10
          </li>
        </ul>

        <p style={styles.paragraph}>
          In that case, the formula estimates the final balance. More important
          than the number itself is the growth pattern: later gains become more
          meaningful because each new return is applied to a larger base.
        </p>

        <div style={styles.tipBox}>
          <p style={styles.tipTitle}>Key takeaway</p>
          <p style={styles.tipText}>
            Compound growth often looks modest at first and much stronger later.
            That is one reason time is such a powerful variable in investing.
          </p>
        </div>

        <h2 id="monthly-contributions" style={styles.sectionTitle}>
          What changes with monthly contributions?
        </h2>

        <p style={styles.paragraph}>
          In practice, most people invest gradually rather than making a single
          deposit. Once you begin adding money each month, the standard formula
          becomes less practical.
        </p>

        <p style={styles.paragraph}>
          Each contribution enters at a different time, which means each one
          compounds over a different number of periods. That is why a
          step-by-step monthly calculation is usually more accurate for
          real-world investing.
        </p>

        <div style={styles.noteBox}>
          <p style={styles.noteTitle}>Important distinction</p>
          <p style={styles.noteText}>
            The classic formula works well for lump sums. Monthly contribution
            plans are usually better handled with an iterative month-by-month
            calculation.
          </p>
        </div>

        <h2 id="practical-method" style={styles.sectionTitle}>
          A practical month-by-month method
        </h2>

        <p style={styles.paragraph}>
          A practical way to estimate growth with recurring deposits looks like
          this:
        </p>

        <div style={styles.formulaBox}>
          <code style={styles.formula}>
            new balance = previous balance × (1 + monthly rate) + monthly
            contribution
          </code>
        </div>

        <p style={styles.paragraph}>
          That calculation is repeated once per month across the full investment
          period. For real-world saving and investing scenarios, this approach
          is often much more useful than trying to force everything into one
          short formula.
        </p>

        <h2 style={styles.sectionTitle}>Worked example with monthly deposits</h2>

        <p style={styles.paragraph}>
          Let’s say you start with <strong>$2,000</strong>, add{" "}
          <strong>$300 per month</strong>, earn <strong>1% per month</strong>,
          and continue for <strong>60 months</strong>.
        </p>

        <p style={styles.paragraph}>
          In that setup, the final balance depends mainly on:
        </p>

        <ul style={styles.list}>
          <li>the starting balance</li>
          <li>the monthly contribution amount</li>
          <li>the time horizon</li>
        </ul>

        <p style={styles.paragraph}>
          That is exactly where a calculator becomes more useful than manual
          math. You can test different scenarios in seconds instead of repeating
          the same steps over and over.
        </p>

        <div style={styles.ctaBox}>
          <h2 style={styles.ctaTitle}>Run your own numbers instantly</h2>
          <p style={styles.ctaText}>
            Use the calculator to test different starting balances,
            contributions, rates, and time horizons without doing each monthly
            step by hand.
          </p>
          <Link href="/" style={styles.ctaButton}>
            See Your Investment Growth →
          </Link>
        </div>

        <h2 style={styles.sectionTitle}>
          Why compound interest matters over the long term
        </h2>

        <p style={styles.paragraph}>
          Time is one of the strongest variables in the equation. A moderate
          return sustained over many years can lead to a result that feels much
          larger than the early phase of the same process would suggest.
        </p>

        <p style={styles.paragraph}>
          Regular contributions amplify that effect because they keep increasing
          the balance that future returns can build on.
        </p>

        <h2 id="mistakes" style={styles.sectionTitle}>
          Common mistakes
        </h2>

        <ul style={styles.list}>
          <li>Using an annual rate as if it were monthly</li>
          <li>Forgetting to convert percentages into decimals</li>
          <li>Ignoring the impact of recurring contributions</li>
          <li>Mixing simple interest assumptions with compound growth</li>
          <li>Expecting short-term results from long-term strategies</li>
        </ul>

        <h2 id="faq" style={styles.sectionTitle}>
          Frequently asked questions
        </h2>

        <h3 style={styles.questionTitle}>What is compound interest?</h3>
        <p style={styles.paragraph}>
          Compound interest is growth earned on both your initial balance and
          the interest already added to it over time.
        </p>

        <h3 style={styles.questionTitle}>
          What is the formula for compound interest?
        </h3>
        <p style={styles.paragraph}>
          The standard formula is <strong>A = P (1 + r / n)^(n × t)</strong>.
        </p>

        <h3 style={styles.questionTitle}>
          Can I use the standard formula with monthly contributions?
        </h3>
        <p style={styles.paragraph}>
          Not cleanly. Once recurring deposits are involved, a month-by-month
          approach is usually more practical.
        </p>

        <h3 style={styles.questionTitle}>
          Why does compound growth accelerate over time?
        </h3>
        <p style={styles.paragraph}>
          Because each new round of growth is applied to a balance that has
          already increased.
        </p>

        <h2 style={styles.sectionTitle}>Related guides</h2>

        <div style={styles.relatedGrid}>
          <Link href="/" style={styles.relatedCard}>
            <span style={styles.relatedTag}>Tool</span>
            <strong style={styles.relatedTitle}>
              Compound Interest Calculator
            </strong>
            <span style={styles.relatedText}>
              Test your assumptions with monthly contributions and time-based
              growth.
            </span>
          </Link>

          <div style={styles.relatedCardStatic}>
            <span style={styles.relatedTag}>Next topic</span>
            <strong style={styles.relatedTitle}>
              How much can you save by investing every month?
            </strong>
            <span style={styles.relatedText}>
              A natural follow-up page for recurring deposit scenarios and
              long-term planning.
            </span>
          </div>

          <div style={styles.relatedCardStatic}>
            <span style={styles.relatedTag}>Next topic</span>
            <strong style={styles.relatedTitle}>
              Compound interest explained for beginners
            </strong>
            <span style={styles.relatedText}>
              A simpler companion page aimed at broader top-of-funnel traffic.
            </span>
          </div>
        </div>

        <h2 style={styles.sectionTitle}>Final takeaway</h2>

        <p style={styles.paragraph}>
          If you are calculating growth on a one-time deposit, the classic
          formula is usually enough. If you are investing every month, a
          dedicated calculator is the better option because it models recurring
          deposits automatically and more realistically.
        </p>

        <p style={styles.paragraph}>
  If you want to see how this plays out in real saving scenarios, explore{" "}
  <Link href="/how-much-will-i-have-if-i-invest-every-month" style={styles.inlineLink}>
    monthly investing outcomes
  </Link>
  . If your main question is about time, read{" "}
  <Link href="/how-long-does-it-take-to-double-your-money" style={styles.inlineLink}>
    how long it takes to double your money
  </Link>
  .
</p>
  .

        <div style={styles.bottomCta}>
          <p style={styles.bottomCtaText}>Want to see how your money could grow over time?</p>
          <Link href="/" style={styles.bottomCtaLink}>
            Try the Compound Interest Calculator →
          </Link>
        </div>
      </article>
    </main>
  );
}

const styles = {
  page: {
    background:
      "linear-gradient(180deg, #eef4ff 0%, #f8fbff 45%, #f3f7fc 100%)",
    minHeight: "100vh",
    padding: "40px 16px 64px",
  },
  article: {
    maxWidth: "860px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "24px",
    padding: "36px",
    boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
    border: "1px solid rgba(37, 99, 235, 0.08)",
    fontFamily:
      'Inter, Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  inlineLink: {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: 600,
},
  eyebrow: {
    display: "inline-block",
    marginBottom: "14px",
    padding: "8px 12px",
    borderRadius: "999px",
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontSize: "12px",
    fontWeight: 800,
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
  },
  title: {
    fontSize: "42px",
    lineHeight: "1.1",
    color: "#0f172a",
    fontWeight: 800,
    margin: "0 0 18px 0",
    letterSpacing: "-0.02em",
  },
  lead: {
    fontSize: "18px",
    lineHeight: "1.75",
    color: "#334155",
    margin: "0 0 18px 0",
  },
  sectionTitle: {
    fontSize: "29px",
    lineHeight: "1.2",
    fontWeight: 800,
    color: "#0f172a",
    margin: "34px 0 14px 0",
  },
  questionTitle: {
    fontSize: "22px",
    lineHeight: "1.35",
    fontWeight: 700,
    color: "#111827",
    margin: "26px 0 10px 0",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#334155",
    margin: "0 0 18px 0",
  },
  list: {
    margin: "0 0 20px 22px",
    padding: 0,
    color: "#334155",
    lineHeight: "1.9",
    fontSize: "16px",
  },
  callout: {
    marginTop: "18px",
    marginBottom: "22px",
    padding: "18px 20px",
    borderRadius: "18px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    color: "#334155",
    fontSize: "15px",
    lineHeight: "1.7",
  },
  heroCtaWrap: {
    marginBottom: "28px",
  },
  heroCta: {
    display: "inline-block",
    padding: "12px 20px",
    background: "#2563eb",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 700,
    boxShadow: "0 10px 24px rgba(37, 99, 235, 0.22)",
  },
  tocBox: {
    marginBottom: "28px",
    padding: "20px",
    borderRadius: "18px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
  },
  tocTitle: {
    margin: "0 0 10px 0",
    fontSize: "14px",
    fontWeight: 800,
    color: "#0f172a",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  },
  tocList: {
    margin: 0,
    paddingLeft: "18px",
    lineHeight: "1.9",
  },
  tocLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: 600,
  },
  tableWrap: {
    margin: "16px 0 20px 0",
    overflowX: "auto" as const,
    borderRadius: "18px",
    border: "1px solid #e2e8f0",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    backgroundColor: "#ffffff",
  },
  tableHead: {
    textAlign: "left" as const,
    padding: "14px 16px",
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontSize: "14px",
    fontWeight: 800,
    borderBottom: "1px solid #e2e8f0",
  },
  tableCell: {
    padding: "14px 16px",
    color: "#475569",
    fontSize: "15px",
    lineHeight: "1.7",
    borderBottom: "1px solid #e2e8f0",
    verticalAlign: "top" as const,
  },
  tableCellStrong: {
    padding: "14px 16px",
    color: "#0f172a",
    fontSize: "15px",
    fontWeight: 800,
    lineHeight: "1.7",
    borderBottom: "1px solid #e2e8f0",
    verticalAlign: "top" as const,
  },
  formulaBox: {
    margin: "14px 0 18px 0",
    padding: "18px 20px",
    borderRadius: "18px",
    backgroundColor: "#0f172a",
    overflowX: "auto" as const,
  },
  formula: {
    color: "#e2e8f0",
    fontSize: "18px",
    fontWeight: 700,
    whiteSpace: "nowrap" as const,
  },
  noteBox: {
    margin: "18px 0 22px 0",
    padding: "20px",
    borderRadius: "18px",
    backgroundColor: "#eff6ff",
    border: "1px solid #bfdbfe",
  },
  noteTitle: {
    margin: "0 0 8px 0",
    fontSize: "15px",
    fontWeight: 800,
    color: "#1d4ed8",
  },
  noteText: {
    margin: 0,
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#1e3a8a",
  },
  tipBox: {
    margin: "18px 0 22px 0",
    padding: "20px",
    borderRadius: "18px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
  },
  tipTitle: {
    margin: "0 0 8px 0",
    fontSize: "15px",
    fontWeight: 800,
    color: "#0f172a",
  },
  tipText: {
    margin: 0,
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#475569",
  },
  ctaBox: {
    margin: "28px 0",
    padding: "24px",
    borderRadius: "22px",
    background: "linear-gradient(180deg, #0f172a 0%, #172554 100%)",
    color: "#ffffff",
    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.16)",
  },
  ctaTitle: {
    margin: "0 0 10px 0",
    fontSize: "24px",
    fontWeight: 800,
    color: "#ffffff",
  },
  ctaText: {
    margin: "0 0 16px 0",
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#cbd5e1",
  },
  ctaButton: {
    display: "inline-block",
    padding: "14px 18px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: "15px",
    boxShadow: "0 12px 24px rgba(59, 130, 246, 0.28)",
  },
  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "8px",
  },
  relatedCard: {
    display: "block",
    padding: "18px",
    borderRadius: "18px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    textDecoration: "none",
  },
  relatedCardStatic: {
    display: "block",
    padding: "18px",
    borderRadius: "18px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
  },
  relatedTag: {
    display: "inline-block",
    marginBottom: "10px",
    padding: "6px 10px",
    borderRadius: "999px",
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontSize: "12px",
    fontWeight: 800,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  },
  relatedTitle: {
    display: "block",
    marginBottom: "8px",
    color: "#0f172a",
    fontSize: "16px",
    fontWeight: 800,
    lineHeight: "1.4",
  },
  relatedText: {
    display: "block",
    color: "#475569",
    fontSize: "14px",
    lineHeight: "1.7",
  },
  bottomCta: {
    marginTop: "30px",
    paddingTop: "22px",
    borderTop: "1px solid #e2e8f0",
  },
  bottomCtaText: {
    margin: "0 0 10px 0",
    fontSize: "16px",
    fontWeight: 700,
    color: "#0f172a",
  },
  bottomCtaLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: 700,
  },
};