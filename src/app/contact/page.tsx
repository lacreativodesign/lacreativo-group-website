import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Administrative contact information for LA CREATIVO GROUP, LLC.",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Administrative inquiries only"
              description="We only review messages related to governance, compliance, or portfolio operations. Sales outreach is not accepted."
            />
            <div className="rounded-2xl border border-border bg-section p-6">
              <p className="text-sm font-semibold text-foreground">
                Administrative contact
              </p>
              <p className="mt-2 text-sm text-foreground-muted">
                info@lacreativogroup.com
              </p>
            </div>
            <p className="text-sm text-foreground-muted">
              Please expect a measured response cadence. We do not engage in
              promotional partnerships or unsolicited proposals.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">
              Administrative message
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Form submissions are currently disabled.
            </p>
            <form className="mt-6 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@organization.com"
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Please provide an administrative summary."
                  className="w-full rounded-xl border border-border px-4 py-3 text-sm"
                />
              </div>
              <button
                type="button"
                disabled
                className="w-full rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground-muted"
              >
                Submissions currently closed
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
