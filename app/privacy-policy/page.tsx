import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Get Click Media",
  description:
    "Learn how Get Click Media collects, uses, and protects your personal data. Our privacy policy is compliant with Indian IT Act, GDPR, and global data protection standards.",
  alternates: { canonical: "https://getclickmedia.com/privacy-policy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 1, 2025";
const COMPANY = "Get Click Media Pvt. Ltd.";
const EMAIL = "hello@getclickmedia.com";
const PHONE = "+91 9667694088";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-(--surface-0) min-h-screen">
      {/* Hero */}
      <section
        className="pt-32 sm:pt-40 pb-10 sm:pb-14"
        style={{ background: "var(--surface-hero)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[0.6875rem] font-bold tracking-widest uppercase text-primary mb-4">
            Legal
          </span>
          <h1 className="text-[2rem] sm:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1) mb-3">
            Privacy Policy
          </h1>
          <p className="text-(--ink-3) text-sm">
            Last updated: <time dateTime="2025-06-01">{LAST_UPDATED}</time>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="prose prose-slate max-w-none text-(--ink-2) leading-relaxed space-y-8">

            <p className="text-base">
              {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website{" "}
              <strong>getclickmedia.com</strong> and provides AI-powered customer communication
              services including Bulk SMS, WhatsApp Business API, RCS Messaging, Voice, and Email
              Marketing. This Privacy Policy explains how we collect, use, disclose, and protect
              your information when you use our services.
            </p>

            <PolicySection title="1. Information We Collect">
              <p>We collect the following types of information:</p>
              <ul>
                <li><strong>Account information:</strong> Name, email address, phone number, company name, and billing details when you register or contact us.</li>
                <li><strong>Usage data:</strong> Pages visited, features used, click patterns, session duration, and device/browser information collected automatically.</li>
                <li><strong>Communication data:</strong> SMS content, WhatsApp message templates, contact lists, and campaign data you upload to our platform.</li>
                <li><strong>Payment information:</strong> Processed securely by our payment partners; we do not store full card details.</li>
                <li><strong>Cookies and tracking:</strong> Browser cookies, local storage, and similar technologies for session management and analytics.</li>
              </ul>
            </PolicySection>

            <PolicySection title="2. How We Use Your Information">
              <ul>
                <li>Provide, operate, and improve our communication platform and services.</li>
                <li>Process transactions, send invoices, and manage your account.</li>
                <li>Send service notifications, product updates, and (with your consent) marketing communications.</li>
                <li>Ensure compliance with TRAI regulations, DLT requirements, and applicable law.</li>
                <li>Detect, prevent, and address fraud, abuse, and security incidents.</li>
                <li>Respond to customer support queries and improve user experience.</li>
                <li>Conduct analytics to understand platform usage and improve performance.</li>
              </ul>
            </PolicySection>

            <PolicySection title="3. Legal Basis for Processing (GDPR)">
              <p>For users in the European Economic Area, we process personal data under the following legal bases:</p>
              <ul>
                <li><strong>Contract performance:</strong> To provide the services you have signed up for.</li>
                <li><strong>Legitimate interests:</strong> For analytics, fraud prevention, and service improvement.</li>
                <li><strong>Consent:</strong> For marketing communications and non-essential cookies.</li>
                <li><strong>Legal obligation:</strong> To comply with applicable laws and regulations.</li>
              </ul>
            </PolicySection>

            <PolicySection title="4. Data Sharing and Disclosure">
              <p>We do not sell your personal data. We may share it with:</p>
              <ul>
                <li><strong>Service providers:</strong> Cloud hosting, payment processors, analytics, and email delivery vendors acting as data processors under our instructions.</li>
                <li><strong>Telecom operators:</strong> Delivery of SMS and voice messages requires routing through licensed Indian telecom operators and the TRAI DLT platform.</li>
                <li><strong>Legal authorities:</strong> When required by Indian law, court order, or regulatory authority.</li>
                <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, with notice to you.</li>
              </ul>
            </PolicySection>

            <PolicySection title="5. Data Retention">
              <p>
                We retain your account data for as long as your account is active and for up to 5 years
                thereafter for legal and compliance purposes. Campaign data and message logs are retained
                for 90 days by default, after which they are automatically deleted unless you request
                extended retention. You may request deletion of your data at any time (see Section 7).
              </p>
            </PolicySection>

            <PolicySection title="6. Data Security">
              <p>
                We implement industry-standard security measures including AES-256 encryption at rest,
                TLS 1.3 in transit, role-based access controls, regular penetration testing, and
                SOC 2-aligned security practices. However, no system is completely secure — we encourage
                you to use strong passwords and enable two-factor authentication on your account.
              </p>
            </PolicySection>

            <PolicySection title="7. Your Rights">
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access and receive a copy of the personal data we hold about you.</li>
                <li>Correct inaccurate or incomplete personal data.</li>
                <li>Request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
                <li>Object to or restrict certain processing activities.</li>
                <li>Data portability — receive your data in a structured, machine-readable format.</li>
                <li>Withdraw consent at any time (for consent-based processing).</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>.
                We respond within 30 days.
              </p>
            </PolicySection>

            <PolicySection title="8. Cookies">
              <p>
                We use essential cookies (required for site functionality), analytics cookies (to
                understand usage), and marketing cookies (with your consent). You can manage cookie
                preferences at any time via our Cookie Settings or your browser settings. See our{" "}
                <Link href="/cookie-policy" className="text-primary underline">Cookie Policy</Link> for details.
              </p>
            </PolicySection>

            <PolicySection title="9. International Transfers">
              <p>
                Your data is primarily stored and processed in India. Where data is transferred outside
                India (e.g., to cloud providers with servers in the US or EU), we ensure appropriate
                safeguards are in place including Standard Contractual Clauses (SCCs) under GDPR.
              </p>
            </PolicySection>

            <PolicySection title="10. Children's Privacy">
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly
                collect personal data from children. If you believe we have inadvertently collected
                such data, please contact us immediately.
              </p>
            </PolicySection>

            <PolicySection title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material
                changes by email or a prominent notice on our website at least 14 days before they
                take effect. Continued use of our services after changes become effective constitutes
                your acceptance.
              </p>
            </PolicySection>

            <PolicySection title="12. Contact Us">
              <p>For privacy-related questions or to exercise your rights:</p>
              <address className="not-italic">
                <strong>{COMPANY}</strong><br />
                Mumbai, India<br />
                Email: <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a><br />
                Phone: <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-primary underline">{PHONE}</a>
              </address>
            </PolicySection>

          </div>
        </div>
      </section>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg sm:text-xl [font-family:var(--font-syne)] font-bold text-(--ink-1) mb-3 pb-2 border-b border-(--border-subtle)">
        {title}
      </h2>
      <div className="text-sm sm:text-base text-(--ink-2) leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
