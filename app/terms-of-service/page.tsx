export const metadata = {
  title: "Terms of Service | Get Click Media",
  description:
    "Read the Terms of Service for Get Click Media's AI-powered communication platform. Understand your rights, responsibilities, and acceptable use of our services.",
  alternates: { canonical: "https://getclickmedia.com/terms-of-service" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 1, 2025";
const COMPANY = "Get Click Media Pvt. Ltd.";
const EMAIL = "hello@getclickmedia.com";

export default function TermsOfServicePage() {
  return (
    <main className="bg-(--surface-0) min-h-screen">
      <section
        className="pt-32 sm:pt-40 pb-10 sm:pb-14"
        style={{ background: "var(--surface-hero)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[0.6875rem] font-bold tracking-widest uppercase text-primary mb-4">
            Legal
          </span>
          <h1 className="text-[2rem] sm:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1) mb-3">
            Terms of Service
          </h1>
          <p className="text-(--ink-3) text-sm">
            Last updated: <time dateTime="2025-06-01">{LAST_UPDATED}</time>
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="space-y-8">

            <p className="text-sm sm:text-base text-(--ink-2) leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the services
              provided by <strong>{COMPANY}</strong> (&ldquo;Get Click Media&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) through
              getclickmedia.com. By accessing or using our platform, you agree to be bound by these Terms.
              If you do not agree, do not use our services.
            </p>

            <TermsSection title="1. Definitions">
              <ul>
                <li><strong>&ldquo;Services&rdquo;</strong> means the Bulk SMS, WhatsApp Business API, RCS Messaging, Voice, Email Marketing, and AI Chatbot platform offered by Get Click Media.</li>
                <li><strong>&ldquo;Customer&rdquo; / &ldquo;you&rdquo;</strong> means the individual or entity registering for or using our Services.</li>
                <li><strong>&ldquo;Content&rdquo;</strong> means any messages, data, images, or other material you transmit through our Services.</li>
              </ul>
            </TermsSection>

            <TermsSection title="2. Account Registration">
              <ul>
                <li>You must provide accurate, current, and complete information during registration.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You must be at least 18 years old and legally authorized to enter into contracts under Indian law.</li>
                <li>You are responsible for all activities that occur under your account.</li>
                <li>Notify us immediately at <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a> if you suspect unauthorized access.</li>
              </ul>
            </TermsSection>

            <TermsSection title="3. Acceptable Use Policy">
              <p>You agree NOT to use our Services to:</p>
              <ul>
                <li>Send unsolicited messages (spam) or violate TRAI DLT regulations.</li>
                <li>Transmit illegal, harmful, threatening, abusive, defamatory, or fraudulent content.</li>
                <li>Impersonate any person, brand, or organization.</li>
                <li>Harvest phone numbers or contact data without recipient consent.</li>
                <li>Violate any applicable law, regulation, or third-party rights.</li>
                <li>Attempt to reverse-engineer, decompile, or interfere with the platform.</li>
                <li>Use the platform for political campaigning without express written consent from us.</li>
              </ul>
            </TermsSection>

            <TermsSection title="4. TRAI DLT Compliance">
              <p>
                You are solely responsible for ensuring all bulk SMS campaigns comply with TRAI
                (Telecom Regulatory Authority of India) DLT (Distributed Ledger Technology) regulations.
                This includes maintaining valid entity registration, sender ID approval, and pre-approved
                message templates. Get Click Media provides DLT assistance but is not liable for
                messages blocked or penalised due to non-compliance on your part.
              </p>
            </TermsSection>

            <TermsSection title="5. Service Availability and SLA">
              <p>
                We target 99.9% platform uptime, excluding scheduled maintenance (notified 48 hours
                in advance) and events beyond our reasonable control. Service credits may be provided
                for outages exceeding our SLA thresholds as specified in your service agreement.
                We do not guarantee delivery of messages, as delivery depends on telecom operators
                and recipient device availability.
              </p>
            </TermsSection>

            <TermsSection title="6. Fees and Payment">
              <ul>
                <li>Services are billed as per the plan you select or as agreed in a custom contract.</li>
                <li>All fees are in Indian Rupees (INR) and exclusive of applicable GST unless stated otherwise.</li>
                <li>Pre-paid credits are non-transferable and subject to the expiry terms on your plan.</li>
                <li>We reserve the right to suspend services for overdue payments after a 7-day notice.</li>
                <li>Disputed charges must be reported within 30 days of the invoice date.</li>
              </ul>
            </TermsSection>

            <TermsSection title="7. Intellectual Property">
              <p>
                Get Click Media and its licensors own all intellectual property rights in the platform,
                software, documentation, and branding. You retain ownership of your Content but grant
                us a limited, worldwide licence to process and transmit it solely to provide the Services.
                You may not use our trademarks, logos, or brand assets without prior written consent.
              </p>
            </TermsSection>

            <TermsSection title="8. Confidentiality">
              <p>
                Each party agrees to keep the other&apos;s confidential information (including pricing,
                APIs, and business data) strictly confidential and to use it only for the purpose of
                the Services. This obligation survives termination of these Terms for 3 years.
              </p>
            </TermsSection>

            <TermsSection title="9. Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, Get Click Media&apos;s total
                liability for any claim arising out of or relating to these Terms shall not exceed
                the total fees paid by you in the 3 months preceding the claim. We are not liable
                for indirect, incidental, special, consequential, or punitive damages including
                loss of profits, data, or goodwill.
              </p>
            </TermsSection>

            <TermsSection title="10. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless Get Click Media, its officers,
                directors, and employees from any claims, damages, or expenses (including legal fees)
                arising from: (a) your use of the Services; (b) your Content; (c) your violation of
                these Terms; or (d) your violation of applicable law or third-party rights.
              </p>
            </TermsSection>

            <TermsSection title="11. Termination">
              <p>
                Either party may terminate these Terms with 30 days&apos; written notice. We may
                suspend or terminate your account immediately for material breach of these Terms,
                non-payment, or actions that put the platform or other users at risk. Upon termination,
                your right to use the Services ceases and unused credits are subject to our Refund Policy.
              </p>
            </TermsSection>

            <TermsSection title="12. Governing Law and Disputes">
              <p>
                These Terms are governed by the laws of India. Any disputes shall first be resolved
                through good-faith negotiation. If unresolved within 30 days, disputes shall be
                submitted to binding arbitration in Mumbai, India under the Arbitration and Conciliation
                Act, 1996. The language of arbitration shall be English.
              </p>
            </TermsSection>

            <TermsSection title="13. Changes to Terms">
              <p>
                We may modify these Terms at any time. Material changes will be notified by email or
                via the platform at least 14 days before they take effect. Continued use after the
                effective date constitutes acceptance of the updated Terms.
              </p>
            </TermsSection>

            <TermsSection title="14. Contact">
              <address className="not-italic text-sm text-(--ink-2)">
                <strong>{COMPANY}</strong><br />
                Mumbai, India<br />
                Email: <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>
              </address>
            </TermsSection>

          </div>
        </div>
      </section>
    </main>
  );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
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
