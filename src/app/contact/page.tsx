import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Administrative Inquiries",
  description:
    "Administrative contact for LA CREATIVO GROUP, LLC regarding governance, compliance, or portfolio operations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="eyebrow">Administrative Inquiries</p>
          <h1 className="h1">Administrative Inquiries</h1>
          <p className="prose">
            This channel is reserved for administrative matters. Sales outreach is
            not monitored.
          </p>
          <div className="border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <p className="text-sm font-semibold text-[color:var(--ink)]">
              Administrative contact
            </p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              info@lacreativogroup.com
            </p>
          </div>
          <p className="prose">
            Please expect a measured response cadence for compliance, governance,
            or operational matters.
          </p>
        </div>
        <div className="border border-[color:var(--border)] bg-white p-8">
          <h2 className="h2">Message (optional)</h2>
          <p className="prose mt-2">
            This form is informational only and does not submit data.
          </p>
          <form className="mt-6 space-y-4">
            <div className="space-y-2">
              <label className="eyebrow">Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-[color:var(--border)] px-4 py-3 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="eyebrow">Email</label>
              <input
                type="email"
                placeholder="name@organization.com"
                className="w-full border border-[color:var(--border)] px-4 py-3 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="eyebrow">Message</label>
              <textarea
                rows={4}
                placeholder="Please provide an administrative summary."
                className="w-full border border-[color:var(--border)] px-4 py-3 text-sm"
              />
            </div>
            <button
              type="button"
              disabled
              className="w-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold text-[color:var(--muted)]"
            >
              Submissions currently closed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
