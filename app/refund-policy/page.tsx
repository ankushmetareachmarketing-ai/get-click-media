export const metadata = {
  title: "Refund Policy | Get Click Media",
  description:
    "Get Click Media's refund and cancellation policy for bulk SMS, WhatsApp API, and communication platform services.",
  alternates: { canonical: "https://getclickmedia.com/refund-policy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 1, 2025";
const COMPANY = "Get Click Media Pvt. Ltd.";
const EMAIL = "hello@getclickmedia.com";
const PHONE = "+91 7669999219";

export default function RefundPolicyPage() {
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
            Refund Policy
          </h1>
          <p className="text-(--ink-3) text-sm">
            Last updated: <time dateTime="2025-06-01">{LAST_UPDATED}</time>
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-8">

          <p className="text-sm sm:text-base text-(--ink-2) leading-relaxed">
            This Refund Policy applies to all services purchased from <strong>{COMPANY}</strong>.
            We want you to be completely satisfied with our services. Please read this policy
            carefully before making a purchase.
          </p>

          <RefundSection title="1. Pre-paid SMS Credits">
            <ul>
              <li><strong>Unused credits:</strong> Refunds for unused pre-paid SMS credits are available within 7 days of purchase, provided no credits have been consumed.</li>
              <li><strong>Partially used credits:</strong> If you have consumed any credits, a pro-rata refund for the remaining unused credits may be issued at our discretion.</li>
              <li><strong>Expired credits:</strong> Credits that have expired as per your plan&apos;s validity terms are not eligible for refund.</li>
              <li><strong>Top-up purchases:</strong> Top-up credit purchases of ₹500 or less are non-refundable once processed.</li>
            </ul>
          </RefundSection>

          <RefundSection title="2. Monthly / Annual Subscriptions">
            <ul>
              <li><strong>Annual plans:</strong> Cancellations within 14 days of the initial purchase date are eligible for a full refund, minus any SMS credits consumed.</li>
              <li><strong>Monthly plans:</strong> Monthly subscription fees are non-refundable once the billing cycle has started. You may cancel at any time to prevent future charges.</li>
              <li><strong>Downgrade:</strong> Downgrading your plan mid-cycle does not entitle you to a refund for the difference; the new plan applies from the next billing cycle.</li>
            </ul>
          </RefundSection>

          <RefundSection title="3. DLT Registration Services">
            <p>
              DLT registration and compliance assistance services involve manual work by our team.
              Refunds for DLT service fees are not available once the registration process has been
              initiated. If registration fails due to reasons attributable solely to us, we will
              re-attempt the registration at no additional cost or issue a full refund.
            </p>
          </RefundSection>

          <RefundSection title="4. WhatsApp Business API Onboarding">
            <p>
              WhatsApp API onboarding fees are non-refundable once Meta&apos;s verification process
              has been initiated, as these fees are partially passed through to Meta. If onboarding
              fails due to errors on our part, we will re-attempt or issue a credit to your account.
            </p>
          </RefundSection>

          <RefundSection title="5. Service Disruptions">
            <p>
              If our platform experiences an unplanned outage exceeding 4 consecutive hours within a
              30-day period, we will issue account credits equivalent to the pro-rata daily cost of
              the downtime period. Credits are applied to your next invoice and are not cashable.
            </p>
          </RefundSection>

          <RefundSection title="6. Non-Refundable Items">
            <ul>
              <li>SMS messages that have already been submitted to telecom gateways for delivery.</li>
              <li>Setup fees, custom integration fees, and professional services.</li>
              <li>Charges incurred due to misuse, violation of our Terms of Service, or TRAI non-compliance.</li>
              <li>Any charges that have been disputed through a bank chargeback without first contacting us.</li>
            </ul>
          </RefundSection>

          <RefundSection title="7. How to Request a Refund">
            <p>To request a refund, email us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>{" "}
              with the subject line &ldquo;Refund Request — [Your Account Email]&rdquo; and include:
            </p>
            <ul>
              <li>Your registered account email and name.</li>
              <li>Order / invoice number.</li>
              <li>Reason for the refund request.</li>
            </ul>
            <p>We process refund requests within <strong>5–7 business days</strong>. Approved refunds are credited to the original payment method within 7–10 business days depending on your bank.</p>
          </RefundSection>

          <RefundSection title="8. Contact">
            <address className="not-italic text-sm text-(--ink-2)">
              <strong>{COMPANY}</strong><br />
              Mumbai, India<br />
              Email: <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a><br />
              Phone: <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-primary underline">{PHONE}</a>
            </address>
          </RefundSection>

        </div>
      </section>
    </main>
  );
}

function RefundSection({ title, children }: { title: string; children: React.ReactNode }) {
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
