import type { Metadata } from "next";
import CompoundCalculator from "./components/CompoundCalculator";

export const metadata: Metadata = {
  title: "Compound Interest Calculator (Free & Easy)| Investment Growth Tool",
  description:
    "Use this free compound interest calculator to estimate your investment growth. Calculate returns with monthly contributions and see how your money grows over time.",
};

export default function Home() {
  return (
    <main style={styles.page}>
      <CompoundCalculator />

      <section style={styles.contentWrapper}>
        <article style={styles.articleCard}>
          <div style={styles.introBadge}>Educational finance tool</div>

          <h2 style={styles.sectionTitle}>What is compound interest?</h2>
          <p style={styles.paragraph}>
            Compound interest means you earn returns not only on your original
            investment, but also on the interest that builds up over time. This
            is one of the main reasons long-term investing can grow much faster
            than simple savings.
          </p>

          <h2 style={styles.sectionTitle}>
            How this compound interest calculator works
          </h2>
          <p style={styles.paragraph}>
            This calculator estimates your future balance using four inputs:
            your starting amount, your monthly contribution, your monthly
            interest rate, and the number of months invested. It assumes monthly
            compounding and end-of-month contributions.
          </p>

          <div style={styles.highlightBox}>
            <h3 style={styles.highlightTitle}>Why people use this tool</h3>
            <p style={styles.highlightText}>
              Investors, savers, and beginners use compound interest calculators
              to compare different contribution amounts, test scenarios, and see
              how small monthly habits can grow over time.
            </p>
          </div>

          <h2 style={styles.sectionTitle}>
            Why monthly contributions matter
          </h2>
          <p style={styles.paragraph}>
            Even modest recurring contributions can have a major impact on your
            final balance. The more consistently you add money, the larger your
            base becomes, which gives compounding more power over time.
          </p>

          <h2 style={styles.sectionTitle}>
            When should you use a compound interest calculator?
          </h2>
          <p style={styles.paragraph}>
            A compound interest calculator is useful for retirement planning,
            savings goals, investment forecasting, and comparing different
            monthly contribution strategies. It is especially helpful when you
            want a quick estimate before making financial decisions.
          </p>

          <h2 style={styles.sectionTitle}>Frequently asked questions</h2>

          <div style={styles.faqItem}>
            <h3 style={styles.questionTitle}>Is this calculator free to use?</h3>
            <p style={styles.paragraph}>
              Yes. This compound interest calculator is completely free and can
              be used as many times as you want.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3 style={styles.questionTitle}>
              Does this calculator guarantee investment returns?
            </h3>
            <p style={styles.paragraph}>
              No. It provides estimates based on the numbers you enter. Real
              investment returns may vary depending on market performance, fees,
              taxes, and other factors.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3 style={styles.questionTitle}>
              Does it assume monthly compounding?
            </h3>
            <p style={styles.paragraph}>
              Yes. This version assumes monthly compounding and that
              contributions are added at the end of each month.
            </p>
          </div>

          <div style={styles.faqItem}>
            <h3 style={styles.questionTitle}>
              Can I use it for retirement or savings planning?
            </h3>
            <p style={styles.paragraph}>
              Yes. It is useful for retirement scenarios, long-term investing,
              and general savings projections.
            </p>
          </div>

          <h2 style={styles.sectionTitle}>Related tools</h2>
          <p style={styles.paragraph}>
            As you expand your site, this section can link to related finance
            tools such as a savings calculator, retirement calculator, and loan
            calculator.
          </p>

          <div style={styles.relatedToolsGrid}>
            <div style={styles.relatedCard}>
              <p style={styles.relatedTitle}>Savings Calculator</p>
              <p style={styles.relatedText}>
                Estimate how regular deposits can build your savings over time.
              </p>
            </div>

            <div style={styles.relatedCard}>
              <p style={styles.relatedTitle}>Retirement Calculator</p>
              <p style={styles.relatedText}>
                Test long-term contribution scenarios for retirement planning.
              </p>
            </div>

            <div style={styles.relatedCard}>
              <p style={styles.relatedTitle}>Loan Calculator</p>
              <p style={styles.relatedText}>
                Compare payments, interest costs, and payoff periods.
              </p>
            </div>
          </div>

          <div style={styles.disclaimerBox}>
            <p style={styles.disclaimerTitle}>Important note</p>
            <p style={styles.disclaimerText}>
              This calculator is for educational purposes only and should not be
              considered financial advice.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

const styles = {
  page: {
    background:
      "linear-gradient(180deg, #eef4ff 0%, #f8fbff 45%, #f3f7fc 100%)",
    minHeight: "100vh",
    padding: "24px 16px 60px",
  },
  contentWrapper: {
    maxWidth: "920px",
    margin: "36px auto 0",
  },
  articleCard: {
    backgroundColor: "#ffffff",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
    border: "1px solid rgba(37, 99, 235, 0.08)",
  },
  introBadge: {
    display: "inline-block",
    marginBottom: "16px",
    padding: "8px 12px",
    borderRadius: "999px",
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontSize: "12px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  sectionTitle: {
    fontSize: "30px",
    lineHeight: "1.2",
    fontWeight: 800,
    color: "#0f172a",
    margin: "0 0 14px 0",
  },
  questionTitle: {
    fontSize: "20px",
    lineHeight: "1.35",
    fontWeight: 700,
    color: "#111827",
    margin: "0 0 10px 0",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.75",
    color: "#475569",
    margin: "0 0 24px 0",
  },
  highlightBox: {
    margin: "8px 0 28px 0",
    padding: "20px",
    borderRadius: "18px",
    backgroundColor: "#eff6ff",
    border: "1px solid #bfdbfe",
  },
  highlightTitle: {
    margin: "0 0 8px 0",
    fontSize: "16px",
    fontWeight: 800,
    color: "#1d4ed8",
  },
  highlightText: {
    margin: 0,
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#1e3a8a",
  },
  faqItem: {
    marginBottom: "8px",
  },
  relatedToolsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "28px",
  },
  relatedCard: {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "18px",
    padding: "18px",
  },
  relatedTitle: {
    margin: "0 0 8px 0",
    fontSize: "16px",
    fontWeight: 800,
    color: "#0f172a",
  },
  relatedText: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#475569",
  },
  disclaimerBox: {
    marginTop: "28px",
    padding: "18px",
    borderRadius: "18px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
  },
  disclaimerTitle: {
    margin: "0 0 8px 0",
    fontSize: "14px",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    color: "#334155",
  },
  disclaimerText: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#475569",
  },
};