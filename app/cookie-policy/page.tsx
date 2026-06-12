export const metadata = {
  title: "Cookie Policy | Get Click Media",
  description:
    "Learn how Get Click Media uses cookies and similar technologies on its website and platform. Understand your choices for managing cookie preferences.",
  alternates: { canonical: "https://getclickmedia.com/cookie-policy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 1, 2025";
const EMAIL = "hello@getclickmedia.com";

const COOKIE_TYPES = [
  {
    name: "Strictly Necessary",
    required: true,
    description:
      "Essential for the website to function. They enable core features like user authentication, session management, and security. These cannot be disabled.",
    examples: "Session token, CSRF token, auth_state",
    retention: "Session / up to 1 year",
  },
  {
    name: "Performance & Analytics",
    required: false,
    description:
      "Help us understand how visitors interact with our website by collecting and reporting information anonymously. Used to improve page load times and user flows.",
    examples: "Google Analytics (_ga, _gid), Hotjar",
    retention: "Up to 2 years",
  },
  {
    name: "Functional",
    required: false,
    description:
      "Enable enhanced functionality such as remembering your language preference, region, and UI customisation settings.",
    examples: "locale, theme_pref, onboarding_step",
    retention: "Up to 1 year",
  },
  {
    name: "Marketing & Targeting",
    required: false,
    description:
      "Used to deliver relevant advertisements and track campaign effectiveness across websites. Set by us and our advertising partners.",
    examples: "Google Ads (_gcl_au), LinkedIn Insight Tag, Meta Pixel",
    retention: "Up to 2 years",
  },
];

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>
          <p className="text-(--ink-3) text-sm">
            Last updated: <time dateTime="2025-06-01">{LAST_UPDATED}</time>
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-10">

          <p className="text-sm sm:text-base text-(--ink-2) leading-relaxed">
            This Cookie Policy explains how <strong>Get Click Media Pvt. Ltd.</strong> uses cookies
            and similar technologies when you visit getclickmedia.com or use our platform. It
            supplements our <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a>.
          </p>

          <section>
            <h2 className="text-lg sm:text-xl [font-family:var(--font-syne)] font-bold text-(--ink-1) mb-3 pb-2 border-b border-(--border-subtle)">
              What Are Cookies?
            </h2>
            <p className="text-sm sm:text-base text-(--ink-2) leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. They are
              widely used to make websites work efficiently, remember your preferences, and provide
              information to website owners. We also use similar technologies like localStorage,
              sessionStorage, and tracking pixels.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl [font-family:var(--font-syne)] font-bold text-(--ink-1) mb-5 pb-2 border-b border-(--border-subtle)">
              Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              {COOKIE_TYPES.map((type) => (
                <div
                  key={type.name}
                  className="rounded-xl border border-(--border-subtle) p-5 sm:p-6 bg-white"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-base font-bold text-(--ink-1) [font-family:var(--font-syne)]">
                      {type.name}
                    </h3>
                    <span
                      className={`text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${
                        type.required
                          ? "bg-blue-50 text-blue-700 border-blue-100"
                          : "bg-gray-50 text-gray-600 border-gray-200"
                      }`}
                    >
                      {type.required ? "Always Active" : "Optional"}
                    </span>
                  </div>
                  <p className="text-sm text-(--ink-2) leading-relaxed mb-3">{type.description}</p>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-(--ink-3)">
                    <div>
                      <dt className="font-semibold text-(--ink-2) mb-0.5">Examples</dt>
                      <dd>{type.examples}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-(--ink-2) mb-0.5">Retention</dt>
                      <dd>{type.retention}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl [font-family:var(--font-syne)] font-bold text-(--ink-1) mb-3 pb-2 border-b border-(--border-subtle)">
              Managing Your Cookie Preferences
            </h2>
            <div className="text-sm sm:text-base text-(--ink-2) leading-relaxed space-y-3">
              <p>You can control and manage cookies in several ways:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Browser settings:</strong> Most browsers allow you to block or delete cookies via their settings menu. Note that disabling essential cookies may affect site functionality.</li>
                <li><strong>Opt-out tools:</strong> For Google Analytics, visit <span className="text-primary">tools.google.com/dlpage/gaoptout</span>. For advertising cookies, visit <span className="text-primary">youronlinechoices.com</span> or <span className="text-primary">aboutads.info/choices</span>.</li>
                <li><strong>Cookie Settings:</strong> Use the &ldquo;Cookie Settings&rdquo; link in our website footer to update your preferences at any time.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl [font-family:var(--font-syne)] font-bold text-(--ink-1) mb-3 pb-2 border-b border-(--border-subtle)">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base text-(--ink-2)">
              Questions about our use of cookies? Email us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary underline">{EMAIL}</a>.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}
