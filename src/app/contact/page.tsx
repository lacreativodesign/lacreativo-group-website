import Container from "@/components/Container";
import { MotionFadeUp, MotionItem, MotionStagger } from "@/components/Motion";
import SectionHeading from "@/components/SectionHeading";
import { buildPageMetadata } from "@/lib/seo";
import ContactForm from "@/app/contact/ContactForm";

export const metadata = buildPageMetadata({
  title: "LA CREATIVO GROUP, LLC — Administrative Inquiries",
  description:
    "Administrative inquiries for LA CREATIVO GROUP, LLC. Sales outreach is not monitored.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h1 className="sr-only">Administrative Inquiries</h1>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionStagger className="space-y-6">
            <MotionItem>
              <SectionHeading
                eyebrow="Contact"
                title="Administrative Inquiries"
                description="This channel is reserved for administrative matters. Sales outreach is not monitored."
              />
            </MotionItem>
            <MotionItem className="rounded-2xl border border-border bg-section p-6">
              <p className="text-sm font-semibold text-foreground">
                Administrative contact
              </p>
              <p className="mt-2 text-sm text-foreground-muted">
                info@lacreativogroup.com
              </p>
            </MotionItem>
            <MotionItem>
              <p className="text-sm text-foreground-muted">
                Please allow for a measured response cadence. We do not engage in
                promotional partnerships or unsolicited proposals.
              </p>
            </MotionItem>
          </MotionStagger>
          <MotionFadeUp className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">
              Administrative message
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Use the form below for administrative requests only.
            </p>
            <ContactForm />
          </MotionFadeUp>
        </div>
      </Container>
    </section>
  );
}
