import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "What Interest Rate Do I Need to Reach My Investment Goal? Real Examples + Calculator",
  description:
    "Estimate the return you may need to reach your investment goal. See real examples, compare scenarios, and test your plan with a calculator.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What interest rate do I need to reach my investment goal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your target amount, contribution size, and timeline. A calculator is the fastest way to estimate what kind of return may be required.",
      },
    },
    {
      "@type": "Question",
      name: "Is a higher return always the best solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. In many cases, increasing your monthly contribution or extending your timeline is more realistic than assuming much higher returns.",
      },
    },
    {
      "@type": "Question",
      name: "Can I reach my goal with a lower return if I invest more?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A larger contribution can reduce the return required to reach the same target.",
      },
    },
    {
      "@type": "Question",
      name: "How do I estimate the return I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest way is to test different combinations of time, contributions, and return assumptions in a calculator.",
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
        <div style={styles.eyebrow}>Investment planning guide</div>

        <h1 style={styles.title}>
          What Interest Rate Do I Need to Reach My Investment Goal?
        </h1>

        <p style={styles.lead}>
          If you have a specific financial goal in mind, the real question is
          not just how to invest — it is what kind of return you actually need
          to get there.
        </p>

        <p style={styles.lead}>
          The answer is rarely just about chasing a higher return. In many
          cases, the real lever is a better mix of contribution size, time, and
          return expectations.
        </p>

        <div style={styles.callout}>
          <strong>Important insight:</strong> if the required return looks too
          high, the problem may not be your strategy — it may be your timeline
          or contribution level.
        </div>

        <div style={styles.heroCtaWrap}>
          <Link href="/" style={styles.heroCta}>
            Test Your Numbers in the Calculator →
          </Link>
        </div>

        <nav style={styles.tocBox} aria-label="Table of contents">
          <p style={styles.tocTitle}>On this page</p>
          <ul style={styles.tocList}>
            <li>
              <a href="#what-determines-return" style={styles.tocLink}>
                What determines the return you need
              </a>
            </li>
            <li>
              <a href="#examples" style={styles.tocLink}>
                Real examples with different goals
              </a>
            </li>
            <li>
              <a href="#higher-return" style={styles.tocLink}>
                When a higher return is not the real answer
              </a>
            </li>
            <li>
              <a href="#how-to-think" style={styles.tocLink}>
                How to think about your goal more realistically
              </a>
            </li>
            <li>
              <a href="#faq" style={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <h2 id="what-determines-return" style={styles.sectionTitle}>
          What determines the return you need?
        </h2>

        <p style={styles.paragraph}>
          The return required to reach your goal depends on four core
          variables:
        </p>

        <ul style={styles.list}>
          <li>your target amount</li>
          <li>your starting amount</li>
          <li>how much you contribute regularly</li>
          <li>how long your money has to grow</li>
        </ul>

        <p style={styles.paragraph}>
          Most people focus only on return. In reality, contribution and time
          are often just as important — and easier to control.
        </p>

        <h2 id="examples" style={styles.sectionTitle}>
          Real examples with different goals
        </h2>

        <p style={styles.paragraph}>
          Imagine you want to reach $100,000.
        </p>

        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHead}>Monthly contribution</th>
                <th style={styles.tableHead}>Time horizon</th>
                <th style={styles.tableHead}>Required return</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}>$300</td>
                <td style={styles.tableCell}>10 years</td>
                <td style={styles.tableCell}>high</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>$500</td>
                <td style={styles.tableCell}>10 years</td>
                <td style={styles.tableCell}>moderate</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>$500</td>
                <td style={styles.tableCell}>15 years</td>
                <td style={styles.tableCell}>much lower</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={styles.paragraph}>
          The point is not the exact percentage. The point is that the required
          return changes a lot when you change only one other variable.
        </p>

        <div style={styles.noteBox}>
          <p style={styles.noteTitle}>What this usually means</p>
          <p style={styles.noteText}>
            If your estimated required return feels too aggressive, your goal
            may still be realistic — but the plan probably needs more time,
            higher contributions, or a lower target.
          </p>
        </div>

        <h2 id="higher-return" style={styles.sectionTitle}>
          When a higher return is not the real answer
        </h2>

        <p style={styles.paragraph}>
          A lot of people assume the solution is to find a better investment.
          Sometimes that is true. Often it is not.
        </p>

        <p style={styles.paragraph}>
          If your target is close and your monthly contribution is small, asking
          for a much higher return may push you into unrealistic assumptions or
          unnecessary risk.
        </p>

        <p style={styles.paragraph}>
          In many cases, the more realistic move is simpler:
        </p>

        <ul style={styles.list}>
          <li>invest a bit more each month</li>
          <li>give the money more time</li>
          <li>adjust the target to something more practical</li>
        </ul>

        <h2 id="how-to-think" style={styles.sectionTitle}>
          How to think about your goal more realistically
        </h2>

        <p style={styles.paragraph}>
          A good plan is not just “what return do I need?” It is “what
          combination of time, contribution, and return gives me the best
          chance?”
        </p>

        <p style={styles.paragraph}>
          That is why calculators are useful. They let you compare multiple
          paths instead of getting stuck on one single return number.
        </p>

        <div style={styles.relatedBox}>
          <h2 style={styles.relatedHeading}>Related guides</h2>

          <div style={styles.relatedGrid}>
            <Link href="/how-to-calculate-compound-interest" style={styles.relatedCard}>
              <span style={styles.relatedLabel}>Guide</span>
              <strong style={styles.relatedTitle}>
                How to Calculate Compound Interest
              </strong>
              <span style={styles.relatedText}>
                Understand the formula, the core variables, and how growth
                builds over time.
              </span>
            </Link>

            <Link
              href="/how-much-will-i-have-if-i-invest-every-month"
              style={styles.relatedCard}
            >
              <span style={styles.relatedLabel}>Scenario</span>
              <strong style={styles.relatedTitle}>
                How Much Will I Have If I Invest Every Month?
              </strong>
              <span style={styles.relatedText}>
                Compare recurring deposit outcomes and see how consistency
                changes the result.
              </span>
            </Link>

            <Link
              href="/how-long-does-it-take-to-double-your-money"
              style={styles.relatedCard}
            >
              <span style={styles.relatedLabel}>Time</span>
              <strong style={styles.relatedTitle}>
                How Long Does It Take to Double Your Money?
              </strong>
              <span style={styles.relatedText}>
                Use the Rule of 72 to turn return assumptions into a time-based
                estimate.
              </span>
            </Link>
          </div>
        </div>

        <h2 id="faq" style={styles.sectionTitle}>
          Frequently asked questions
        </h2>

        <h3 style={styles.questionTitle}>
          What interest rate do I need to reach my investment goal?
        </h3>
        <p style={styles.paragraph}>
          It depends on your target amount, contribution size, and timeline. A
          calculator is the fastest way to estimate what kind of return may be
          required.
        </p>

        <h3 style={styles.questionTitle}>
          Is a higher return always the best solution?
        </h3>
        <p style={styles.paragraph}>
          No. In many cases, increasing your monthly contribution or extending
          your timeline is more realistic than assuming much higher returns.
        </p>

        <h3 style={styles.questionTitle}>
          Can I reach my goal with a lower return if I invest more?
        </h3>
        <p style={styles.paragraph}>
          Yes. A larger contribution can reduce the return required to reach the
          same target.
        </p>

        <h3 style={styles.questionTitle}>How do I estimate the return I need?</h3>
        <p style={styles.paragraph}>
          The easiest way is to test different combinations of time,
          contributions, and return assumptions in a calculator.
        </p>

        <h2 style={styles.sectionTitle}>Final takeaway</h2>

        <p style={styles.paragraph}>
          The return you need is only one piece of the puzzle. If the number
          looks unrealistic, that does not automatically mean your goal is
          impossible. It may simply mean the plan needs a better balance of
          time, contribution, and expectations.
        </p>

        <p style={styles.paragraph}>
          A calculator turns that from guesswork into something far more useful
          — a real scenario you can test and improve.
        </p>

        <p style={styles.paragraph}>
          If you want to understand how compounding works, read our{" "}
          <Link href="/how-to-calculate-compound-interest">
            <span style={styles.inlineLink}>compound interest guide</span>
          </Link>
          . If you are planning your timeline, explore{" "}
          <Link href="/how-long-does-it-take-to-double-your-money">
            <span style={styles.inlineLink}>
              how long it takes to double your money
            </span>
          </Link>
          .
        </p>

        <p style={styles.paragraph}>
          Want to estimate the return your goal may require?{" "}
          <Link href="/">
            <span style={styles.inlineLink}>Open the calculator</span>
          </Link>
        </p>

        <div style={styles.bottomCta}>
          <p style={styles.bottomCtaText}>
            Need to compare different timelines and contribution levels?
          </p>
          <Link href="/" style={styles.bottomCtaLink}>
            Test your numbers in the calculator →
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
  eyebrow: {
    display: "inline-block",
    marginBottom: "14px",
    padding: "8px 12px",
    borderRadius: "999px",
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontSize: "12px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  title: {
    fontSize: "38px",
    lineHeight: "1.15",
    fontWeight: 800,
    color: "#0f172a",
    margin: "0 0 18px 0",
    letterSpacing: "-0.02em",
  },
  lead: {
    fontSize: "18px",
    lineHeight: "1.75",
    color: "#334155",
    margin: "0 0 18px 0",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#334155",
    margin: "0 0 18px 0",
  },
  sectionTitle: {
    fontSize: "28px",
    fontWeight: 800,
    color: "#0f172a",
    margin: "30px 0 12px 0",
    lineHeight: "1.25",
  },
  questionTitle: {
    fontSize: "22px",
    lineHeight: "1.35",
    fontWeight: 700,
    color: "#111827",
    margin: "26px 0 10px 0",
  },
  callout: {
    backgroundColor: "#f8fafc",
    padding: "18px 20px",
    borderRadius: "16px",
    margin: "22px 0",
    color: "#334155",
    border: "1px solid #e2e8f0",
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
    textTransform: "uppercase",
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
  list: {
    margin: "0 0 20px 22px",
    padding: 0,
    color: "#334155",
    lineHeight: "1.9",
    fontSize: "16px",
  },
  tableWrap: {
    margin: "16px 0 20px 0",
    overflowX: "auto",
    borderRadius: "18px",
    border: "1px solid #e2e8f0",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
  },
  tableHead: {
    textAlign: "left",
    padding: "14px 16px",
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontSize: "14px",
    fontWeight: 800,
    borderBottom: "1px solid #e2e8f0",
  },
  tableCell: {
    padding: "14px 16px",
    color: "#334155",
    fontSize: "15px",
    lineHeight: "1.7",
    borderBottom: "1px solid #e2e8f0",
    verticalAlign: "top",
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
  relatedBox: {
    margin: "28px 0 10px 0",
  },
  relatedHeading: {
    margin: "0 0 18px 0",
    fontSize: "22px",
    fontWeight: 800,
    color: "#0f172a",
  },
  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
  },
  relatedCard: {
    display: "block",
    padding: "18px",
    borderRadius: "18px",
    border: "1px solid #e2e8f0",
    backgroundColor: "#f8fafc",
    textDecoration: "none",
  },
  relatedLabel: {
    display: "inline-block",
    marginBottom: "12px",
    padding: "6px 10px",
    borderRadius: "999px",
    backgroundColor: "#e0f2fe",
    color: "#0369a1",
    fontSize: "12px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  relatedTitle: {
    display: "block",
    marginBottom: "10px",
    color: "#0f172a",
    fontSize: "16px",
    lineHeight: "1.45",
  },
  relatedText: {
    display: "block",
    color: "#64748b",
    fontSize: "15px",
    lineHeight: "1.7",
  },
  inlineLink: {
    color: "#1d4ed8",
    textDecoration: "underline",
    fontWeight: 700,
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
    textDecoration: "underline",
    fontWeight: 700,
  },
};