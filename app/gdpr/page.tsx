export const metadata = {
  title: "GDPR Compliance | Get Click Media",
  description:
    "Learn about Get Click Media's commitment to GDPR compliance. Understand how we handle EU/EEA personal data, your rights, and our data protection measures.",
  alternates: { canonical: "https://getclickmedia.com/gdpr" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 1, 2025";
const EMAIL = "hello@getclickmedia.com";

export default function GDPRPage() {
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
            GDPR Compliance
          </h1>
          <p className="text-(--ink-3) text-sm">
            Last updated: <time dateTime="2025-06-01">{LAST_UPDATED}</time>
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-8">

          <p className="text-sm sm:text-base text-(--ink-2) leading-relaxed">
            The General Data Protection Regulation (GDPR) is a European Union regulation (EU 2016/679)
            that governs the collection, processing, and transfer of personal data of individuals in
            the EU/EEA. <strong>Get Click Media Pvt. Ltd.</strong> is committed to handling all personal
            data in accordance with GDPR requirements.
          </p>

          <GDPRSection title="Our Role Under GDPR">
            <p>
              Depending on the context, Get Click Media acts as:
            </p>
            <ul>
              <li><strong>Data Controller:</strong> When we collect and use your personal data to provide our services (e.g., account management, billing, support).</li>
              <li><strong>Data Processor:</strong> When we process personal data on your behalf as part of our communication platform (e.g., sending messages to your customers&apos; phone numbers).</li>
            </ul>
            <p>
              Where we act as a Data Processor, our obligations are governed by a Data Processing
              Agreement (DPA) which is available on request.
            </p>
          </GDPRSection>

          <GDPRSection title="Lawful Bases for Processing">
            <p>We process personal data under the following lawful bases:</p>
            <ul>
              <li><strong>Contract (Art. 6(1)(b)):</strong> Processing necessary to perform the services you have contracted with us.</li>
              <li><strong>Legitimate Interests (Art. 6(1)(f)):</strong> Analytics, fraud prevention, platform security, and service improvement.</li>
              <li><strong>Consent (Art. 6(1)(a)):</strong> Marketing communications and non-essential cookies.</li>
              <li><strong>Legal Obligation (Art. 6(1)(c)):</strong> Compliance with applicable Indian and international law.</li>
            </ul>
          </GDPRSection>

          <GDPRSection title="Your Rights Under GDPR">
            <p>If you are located in the EU/EEA, you have the following rights:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {[
                { right: "Right of Access", desc: "Obtain a copy of your personal data we process." },
                { right: "Right to Rectification", desc: "Correct inaccurate or incomplete data." },
                { right: "Right to Erasure", desc: "Request deletion of your personal data ('right to be forgotten')." },
                { right: "Right to Restrict Processing", desc: "Ask us to limit how we use your data." },
                { right: "Right to Data Portability", desc: "Receive your data in a structured, machine-readable format." },
                { right: "Right to Object", desc: "Object to processing based on legitimate interests." },
                { right: "Right to Withdraw Consent", desc: "Withdraw consent at any time without affecting prior processing." },
                { right: "Right to Lodge a Complaint", desc: "File a complaint with your local supervisory authority." },
              ].map(({ right, desc }) => (
                <div key={right} className="rounded-xl bg-(--surface-1) border border-(--border-subtle) p-4">
                  <p className="text-sm font-bold text-(--ink-1) mb-1">{right}</p>
                  <p className="text-xs text-(--ink-3) leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              To exercise any of these rights, contact our Data Protection Officer at{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>.
              We respond within 30 days.
            </p>
          </GDPRSection>

          <GDPRSection title="International Data Transfers">
            <p>
              Get Click Media is headquartered in India. When we transfer personal data of EU/EEA
              residents outside the EEA, we ensure appropriate safeguards are in place, including:
            </p>
            <ul>
              <li>Standard Contractual Clauses (SCCs) as adopted by the European Commission.</li>
              <li>Binding Corporate Rules where applicable.</li>
              <li>Adequacy decisions for countries recognised by the European Commission.</li>
            </ul>
          </GDPRSection>

          <GDPRSection title="Data Processing Agreement (DPA)">
            <p>
              As a Data Processor for our customers, we offer a Data Processing Agreement (DPA) that
              complies with GDPR Article 28 requirements. The DPA covers:
            </p>
            <ul>
              <li>Subject matter, duration, nature, and purpose of processing.</li>
              <li>Type of personal data and categories of data subjects.</li>
              <li>Obligations and rights of the controller.</li>
              <li>Sub-processor agreements and audit rights.</li>
            </ul>
            <p>
              To request a DPA, email{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>{" "}
              with the subject &ldquo;DPA Request&rdquo;.
            </p>
          </GDPRSection>

          <GDPRSection title="Security Measures">
            <p>
              We implement appropriate technical and organisational measures to protect personal data,
              including AES-256 encryption at rest, TLS 1.3 in transit, access controls, regular
              security audits, and incident response procedures aligned with GDPR Article 32. In the
              event of a personal data breach affecting EU/EEA residents, we will notify the relevant
              supervisory authority within 72 hours where required.
            </p>
          </GDPRSection>

          <GDPRSection title="Data Protection Officer">
            <address className="not-italic text-sm text-(--ink-2) space-y-1">
              <p><strong>Data Protection Officer</strong></p>
              <p>Get Click Media Pvt. Ltd., Mumbai, India</p>
              <p>
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>
              </p>
            </address>
          </GDPRSection>

        </div>
      </section>
    </main>
  );
}

function GDPRSection({ title, children }: { title: string; children: React.ReactNode }) {
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
