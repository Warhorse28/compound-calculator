import Link from "next/link";
import styles from "./InvestmentPage.module.css";

type Scenario = {
  years: number;
  value: string;
  invested: string;
};

type RelatedLink = {
  href: string;
  label: string;
};

type InvestmentPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  intro: string;
  takeaway: string;
  ctaHref: string;
  ctaLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  sectionTitle: string;
  assumption: string;
  scenarios: Scenario[];
  differenceTitle: string;
  differenceText1: string;
  bullets: string[];
  differenceText2: string;
  numbersTitle: string;
  numbersText1: string;
  numbersText2: string;
  relatedLinks: RelatedLink[];
};

export default function InvestmentPage({
  eyebrow,
  title,
  lead,
  intro,
  takeaway,
  ctaHref,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
  sectionTitle,
  assumption,
  scenarios,
  differenceTitle,
  differenceText1,
  bullets,
  differenceText2,
  numbersTitle,
  numbersText1,
  numbersText2,
  relatedLinks,
}: InvestmentPageProps) {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.lead}>{lead}</p>
            <p className={styles.intro}>{intro}</p>

            <div className={styles.highlight} role="note" aria-label="Key takeaway">
              <p className={styles.highlightLabel}>Key takeaway</p>
              <p className={styles.highlightText}>{takeaway}</p>
            </div>

            <div className={styles.heroActions}>
              <Link href={ctaHref} className={styles.cta}>
                {ctaLabel}
              </Link>

              {secondaryHref && secondaryLabel ? (
                <Link href={secondaryHref} className={styles.secondaryLink}>
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="growth-outcomes-title">
          <div className={styles.sectionHeader}>
            <h2 id="growth-outcomes-title" className={styles.sectionTitle}>
              {sectionTitle}
            </h2>
            <p className={styles.assumption}>{assumption}</p>
          </div>

          <div className={styles.cardGrid}>
            {scenarios.map((scenario, index) => {
              const isFeatured = index === scenarios.length - 1;

              return (
                <article
                  key={scenario.years}
                  className={`${styles.card} ${isFeatured ? styles.featuredCard : ""}`}
                  aria-label={`${scenario.years} year investing scenario`}
                >
                  <p className={styles.cardEyebrow}>{scenario.years} Years</p>
                  <p className={styles.cardValue}>{scenario.value}</p>
                  <p className={styles.cardMeta}>
                    Total contributed: <strong>{scenario.invested}</strong>
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="difference-title">
          <h2 id="difference-title" className={styles.sectionTitle}>
            {differenceTitle}
          </h2>
          <p className={styles.bodyText}>{differenceText1}</p>

          <ul className={styles.list}>
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <p className={styles.bodyText}>{differenceText2}</p>
        </section>

        <section className={styles.section} aria-labelledby="numbers-title">
          <h2 id="numbers-title" className={styles.sectionTitle}>
            {numbersTitle}
          </h2>
          <p className={styles.bodyText}>{numbersText1}</p>
          <p className={styles.bodyText}>{numbersText2}</p>
        </section>

        <section className={styles.section} aria-labelledby="related-guides-title">
          <div className={styles.sectionHeader}>
            <h2 id="related-guides-title" className={styles.sectionTitle}>
              Related Investing Guides
            </h2>
            <p className={styles.relatedIntro}>
              Explore nearby comparisons and next-step investing questions.
            </p>
          </div>

          <nav aria-label="Related investing pages" className={styles.relatedGrid}>
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.relatedCard}>
                <span className={styles.relatedCardLabel}>{link.label}</span>
                <span className={styles.relatedCardArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </nav>
        </section>
      </article>
    </main>
  );
}