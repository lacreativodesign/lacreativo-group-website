import type { Metadata } from "next";
import Container from "@/components/Container";
import ImageWithFallback from "@/components/ImageWithFallback";
import { MotionItem, MotionStagger } from "@/components/Motion";
import ParallaxImage from "@/components/ParallaxImage";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Learn about LA CREATIVO GROUP, LLC and the governance-first mandate that guides our holding group.",
};

export default function WhoWeArePage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <MotionStagger className="space-y-6">
            <MotionItem>
              <SectionHeading
                eyebrow="Who We Are"
                title="A disciplined holding group for enduring enterprises"
                description="LA CREATIVO GROUP, LLC exists to govern, steward, and strengthen a focused set of operating brands."
              />
            </MotionItem>
            <MotionItem>
              <p className="text-sm text-foreground-muted">
                We operate as an umbrella organization with a clear mandate:
                establish governance frameworks, align operating standards, and
                safeguard long-term value across our portfolio. Each company
                retains its market focus while benefiting from shared oversight,
                reporting cadence, and capital discipline.
              </p>
            </MotionItem>
            <MotionItem>
              <p className="text-sm text-foreground-muted">
                Our leadership approach emphasizes clarity, accountability, and
                steady execution. We are not a passive holding company; we provide
                active governance and set the expectations that preserve brand
                integrity and operational resilience.
              </p>
            </MotionItem>
            <MotionItem className="rounded-2xl border border-border bg-section p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Governance mindset
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
                <li>• Portfolio-wide standards for reporting and controls.</li>
                <li>• Measured capital allocation and risk management.</li>
                <li>• Board-level stewardship focused on continuity.</li>
              </ul>
            </MotionItem>
          </MotionStagger>
          <ParallaxImage className="relative h-[320px] w-full sm:h-[380px]">
            <ImageWithFallback
              src="/images/ai/governance.jpg"
              alt="Governance meeting"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="rounded-2xl object-cover shadow-sm"
              fallbackText="Governance review"
            />
          </ParallaxImage>
        </div>
      </Container>
    </section>
  );
}
