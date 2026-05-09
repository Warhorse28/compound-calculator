import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

const siteUrl = "https://scalemonthly.com";
const pagePath = "/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | ScaleMonthly",
  description:
    "Read how ScaleMonthly handles privacy, cookies, analytics, advertising, affiliate links, and third-party services.",
  alternates: {
    canonical: `${siteUrl}${pagePath}`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <article className={styles.article}>
          <span className={styles.eyebrow}>Privacy Policy</span>

          <h1 className={styles.title}>
            How ScaleMonthly handles privacy and data.
          </h1>

          <p className={styles.lead}>
            ScaleMonthly is built as an independent financial education site.
            This policy explains what information may be collected, how it may
            be used, and how third-party services may interact with the site.
          </p>

          <p className={styles.updated}>Last updated: May 2026</p>

          <div className={styles.section}>
            <h2>Information we may collect</h2>

            <p>
              ScaleMonthly may collect basic non-personal information such as
              browser type, device type, general location data, referring pages,
              pages visited, time on page, and anonymous interaction data.
            </p>

            <p>
              This information helps us understand how visitors use financial
              calculators, retirement guides, net worth pages, and other
              educational resources on the site.
            </p>

            <p>
              If a contact form, newsletter, or feedback form is added in the
              future, users may choose to provide information such as a name,
              email address, or message content.
            </p>
          </div>

          <div className={styles.section}>
            <h2>How we use information</h2>

            <p>
              Information may be used to improve site performance, identify
              popular financial topics, fix technical issues, understand user
              behavior, and make ScaleMonthly more useful for readers.
            </p>

            <p>
              We do not sell personal information directly to third parties.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Cookies and analytics</h2>

            <p>
              ScaleMonthly may use cookies and similar technologies to measure
              traffic, understand page performance, remember basic preferences,
              and improve the user experience.
            </p>

            <p>
              Analytics tools may show which pages receive impressions, visits,
              clicks, or engagement. This helps us improve calculators,
              retirement income comparisons, and educational finance content.
            </p>

            <p>
              Visitors can disable cookies in their browser settings. Some site
              features or third-party services may work differently when cookies
              are disabled.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Google AdSense and advertising</h2>

            <p>
              ScaleMonthly may apply to or use Google AdSense or other
              advertising networks. These services may use cookies, web beacons,
              or similar technologies to serve ads, measure ad performance, and
              help deliver relevant advertising.
            </p>

            <p>
              Google and other advertising partners may use information from
              visits to this and other websites to personalize or measure ads,
              depending on user settings and applicable privacy rules.
            </p>

            <p>
              Users can manage ad personalization through their Google account
              settings and browser privacy controls.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Affiliate links and monetization</h2>

            <p>
              ScaleMonthly may include affiliate links in the future. If a user
              clicks an affiliate link and takes an action, the site may earn a
              commission at no additional cost to the user.
            </p>

            <p>
              Monetization does not change the educational purpose of the site.
              ScaleMonthly aims to keep content clear, useful, and separate from
              unrealistic financial promises.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Third-party services</h2>

            <p>
              ScaleMonthly may rely on third-party services for hosting,
              analytics, search visibility, advertising, performance monitoring,
              or future email/contact features.
            </p>

            <p>
              These services may process limited technical data according to
              their own privacy policies. Examples may include hosting
              providers, analytics platforms, advertising networks, and search
              tools.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Educational financial content</h2>

            <p>
              ScaleMonthly provides educational information only. Calculators,
              retirement examples, net worth estimates, and investment growth
              scenarios are not personal financial advice.
            </p>

            <p>
              Users should do their own research and consider speaking with a
              qualified professional before making financial, tax, legal, or
              investment decisions.
            </p>
          </div>

          <div className={styles.notice}>
            <h2>Policy updates</h2>

            <p>
              This privacy policy may be updated as ScaleMonthly adds new
              tools, advertising partners, analytics services, or contact
              features.
            </p>
          </div>

          <div className={styles.links}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/compound-interest-calculator">
              Compound Interest Calculator
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
