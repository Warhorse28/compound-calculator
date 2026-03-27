import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Does It Take to Double Your Money? (Rule of 72 Explained)",
  description:
    "Learn how long it takes to double your money using the Rule of 72, see real examples at different interest rates, and compare it with a calculator.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to double your money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quick estimate comes from the Rule of 72. Divide 72 by your annual return rate to estimate how many years it may take for your money to double.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Rule of 72?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Rule of 72 is a shortcut used to estimate how long it takes for money to double at a fixed annual return rate.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Rule of 72 work for investing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, as a rough estimate. It is especially useful for quick comparisons and planning, but a calculator gives a more exact result.",
      },
    },
    {
      "@type": "Question",
      name: "What matters more: time or return rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both matter, but time is often more powerful than people expect. Longer holding periods can make a major difference even when the return rate is not extreme.",
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
        <div style={styles.eyebrow}>Rule of 72 guide</div>

        <h1 style={styles.title}>
          How Long Does It Take to Double Your Money? (Rule of 72 Explained)
        </h1>

        <p style={styles.lead}>
          The Rule of 72 is one of the fastest ways to estimate how long it may
          take for an investment to double. It turns a return percentage into a
          time estimate you can understand immediately.
        </p>

        <p style={styles.lead}>
          That makes it useful for planning, comparing scenarios, and seeing how
          even modest differences in return can change long-term results.
        </p>

        <div style={styles.callout}>
          <strong>Quick answer:</strong> divide 72 by your annual return rate.
          At 8% per year, your money may take about 9 years to double.
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
              <a href="#what-rule-72-means" style={styles.tocLink}>
                What the Rule of 72 means
              </a>
            </li>
            <li>
              <a href="#examples" style={styles.tocLink}>
                Real doubling-time examples
              </a>
            </li>
            <li>
              <a href="#why-it-matters" style={styles.tocLink}>
                Why doubling time matters
              </a>
            </li>
            <li>
              <a href="#where-it-works" style={styles.tocLink}>
                Where the rule is useful — and where it is not
              </a>
            </li>
            <li>
              <a href="#faq" style={styles.tocLink}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <h2 id="what-rule-72-means" style={styles.sectionTitle}>
          What the Rule of 72 actually means
        </h2>

        <p style={styles.paragraph}>
          The Rule of 72 gives you a rough estimate of how many years it may
          take for your money to double at a fixed annual return rate.
        </p>

        <div style={styles.formulaBox}>
          <code style={styles.formula}>72 ÷ annual return rate = years to double</code>
        </div>

        <p style={styles.paragraph}>That means:</p>

        <ul style={styles.list}>
          <li>6% return → about 12 years</li>
          <li>8% return → about 9 years</li>
          <li>12% return → about 6 years</li>
        </ul>

        <p style={styles.paragraph}>
          It is not exact math. It is a fast planning shortcut. That is why it
          is useful: it helps you think in time, not just percentages.
        </p>

        <h2 id="examples" style={styles.sectionTitle}>
          Real doubling-time examples
        </h2>

        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHead}>Annual return</th>
                <th style={styles.tableHead}>Estimated years to double</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}>4%</td>
                <td style={styles.tableCell}>18 years</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>6%</td>
                <td style={styles.tableCell}>12 years</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>8%</td>
                <td style={styles.tableCell}>9 years</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>10%</td>
                <td style={styles.tableCell}>7.2 years</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>12%</td>
                <td style={styles.tableCell}>6 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={styles.paragraph}>
          These examples show why return rate matters, but they also show
          something deeper: time compounds your advantage. A slightly better
          return can shorten the path more than most people expect.
        </p>

        <h2 id="why-it-matters" style={styles.sectionTitle}>
          Why doubling time matters
        </h2>

        <p style={styles.paragraph}>
          A lot of investing advice talks in percentages. The Rule of 72 turns
          that into something easier to feel. Instead of hearing “8% annually,”
          you start thinking, “my money may double in about 9 years.”
        </p>

        <p style={styles.paragraph}>
          That shift matters because it makes long-term growth easier to judge.
          Patience stops feeling passive. It becomes measurable.
        </p>

        <div style={styles.noteBox}>
          <p style={styles.noteTitle}>Why this is useful</p>
          <p style={styles.noteText}>
            The Rule of 72 helps you compare opportunities quickly, but it also
            helps you notice how powerful time can be even when returns are only
            moderate.
          </p>
        </div>

        <h2 id="where-it-works" style={styles.sectionTitle}>
          Where the rule is useful — and where it is not
        </h2>

        <p style={styles.paragraph}>
          The Rule of 72 works best as a quick estimate. It is useful when you
          want to compare different annual return assumptions fast.
        </p>

        <ul style={styles.list}>
          <li>good for rough comparisons</li>
          <li>good for planning conversations</li>
          <li>good for long-term investing intuition</li>
        </ul>

        <p style={styles.paragraph}>
          It becomes less useful when contributions change every month, when
          returns are irregular, or when you need a more exact projection.
        </p>

        <p style={styles.paragraph}>
          That is where a calculator helps. The Rule of 72 gives intuition. The
          calculator gives a more practical estimate for your own situation.
        </p>

        <h2 id="faq" style={styles.sectionTitle}>
          Frequently asked questions
        </h2>

        <h3 style={styles.questionTitle}>How long does it take to double your money?</h3>
        <p style={styles.paragraph}>
          A quick estimate comes from the Rule of 72. Divide 72 by your annual
          return rate to estimate how many years it may take for your money to
          double.
        </p>

        <h3 style={styles.questionTitle}>What is the Rule of 72?</h3>
        <p style={styles.paragraph}>
          It is a shortcut used to estimate how long it takes for money to
          double at a fixed annual return rate.
        </p>

        <h3 style={styles.questionTitle}>Does the Rule of 72 work for investing?</h3>
        <p style={styles.paragraph}>
          Yes, as a rough estimate. It is especially useful for quick
          comparisons and planning.
        </p>

        <h3 style={styles.questionTitle}>What matters more: time or return rate?</h3>
        <p style={styles.paragraph}>
          Both matter, but time is often more powerful than people expect.
          Longer holding periods can make a major difference even when the
          return rate is not extreme.
        </p>

        <div style={styles.relatedBox}>
          <h2 style={styles.relatedHeading}>Related guides</h2>

          <div style={styles.relatedGrid}>
            <Link href="/how-to-calculate-compound-interest" style={styles.relatedCard}>
              <span style={styles.relatedLabel}>Guide</span>
              <strong style={styles.relatedTitle}>How to Calculate Compound Interest</strong>
              <span style={styles.relatedText}>
                Learn the formula, understand the math, and see how compounding
                works step by step.
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
                Explore monthly investing examples and see how consistency
                changes long-term results.
              </span>
            </Link>
          </div>
        </div>

        <h2 style={styles.sectionTitle}>Final takeaway</h2>

        <p style={styles.paragraph}>
          The Rule of 72 is useful because it turns percentages into time. That
          alone makes it easier to think clearly about long-term investing.
        </p>

        <p style={styles.paragraph}>
          If you want the fastest shortcut, use the Rule of 72. If you want a
          more realistic estimate for your own situation, test the numbers in a
          calculator.
        </p>

        <p style={styles.paragraph}>
          If you want a deeper explanation of how compounding works, read our{" "}
          <Link href="/how-to-calculate-compound-interest">
            <span style={styles.inlineLink}>compound interest guide</span>
          </Link>
          . If you are investing steadily over time, explore{" "}
          <Link href="/how-much-will-i-have-if-i-invest-every-month">
            <span style={styles.inlineLink}>monthly investing scenarios</span>
          </Link>
          . If your focus is planning around a target, see{" "}
          <Link href="/what-interest-rate-do-i-need-to-reach-my-investment-goal">
            <span style={styles.inlineLink}>
              what return you may need to reach your goal
            </span>
          </Link>
          .
        </p>

        <div style={styles.bottomCta}>
          <p style={styles.bottomCtaText}>
            Want to estimate your own timeline and growth?
          </p>
          <Link href="/" style={styles.bottomCtaLink}>
            Try the calculator →
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
  formulaBox: {
    margin: "16px 0 20px 0",
    padding: "18px 20px",
    borderRadius: "18px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
  },
  formula: {
    fontSize: "18px",
    fontWeight: 800,
    color: "#0f172a",
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
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
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
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