import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/about";

export const metadata: Metadata = {
  title: "About ScaleMonthly",
  description:
    "Learn about ScaleMonthly, an independent financial education site focused on retirement income, net worth targets, and compound growth tools.",
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>About ScaleMonthly</p>

          <h1 className={styles.title}>
            Clear financial tools for long-term planning.
          </h1>

          <p className={styles.lead}>
            ScaleMonthly is an independent financial education site built to
            make retirement income, net worth targets, and compound growth
            easier to understand.
          </p>

          <div className={styles.section}>
            <h2>What ScaleMonthly helps you do</h2>
            <p>
              The goal is simple: help readers compare financial scenarios with
              clearer numbers, cleaner explanations, and practical tools.
            </p>
            <p>
              Instead of vague advice, ScaleMonthly focuses on retirement income
              comparisons, investment growth projections, withdrawal-rate
              examples, and net worth planning guides.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Core topics</h2>
            <ul className={styles.list}>
              <li>Compound interest and monthly investing</li>
              <li>Retirement income comparisons</li>
              <li>Net worth targets for retirement</li>
              <li>Withdrawal-rate examples</li>
              <li>Long-term investment growth scenarios</li>
              <li>Simple planning tools for better decisions</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Independent and educational</h2>
            <p>
              ScaleMonthly is built as an educational resource. The content is
              designed to explain financial concepts in plain language, not to
              sell unrealistic outcomes or promise specific investment results.
            </p>
            <p>
              The site may include calculators, comparison pages, informational
              guides, and future monetization through ads or affiliate
              partnerships. Editorial clarity and user trust remain the priority.
            </p>
          </div>

          <div className={styles.notice}>
            <h2>Important note</h2>
            <p>
              ScaleMonthly does not provide personal financial, legal, tax, or
              investment advice. The information on this site is for educational
              purposes only.
            </p>
          </div>

          <div className={styles.links}>
            <Link href="/compound-interest-calculator">Use the calculator</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>
        </article>
      </section>
    </main>
  );
}
