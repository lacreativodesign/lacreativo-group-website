import type { Metadata } from "next";
import Container from "@/components/Container";
import { MotionFadeUp, MotionItem, MotionStagger } from "@/components/Motion";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Vision, Mission & Values",
  description:
    "Read the vision, mission, and values that guide LA CREATIVO GROUP, LLC.",
};

export default function VisionMissionValuesPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <MotionFadeUp>
          <SectionHeading
            eyebrow="Vision & Mission"
            title="Board-level clarity for long-term stewardship"
            description="Clear statements define how we govern, operate, and grow."
          />
        </MotionFadeUp>

        <MotionStagger className="mt-12 grid gap-8 lg:grid-cols-2">
          <MotionItem className="rounded-2xl border border-border bg-section p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted">
              Vision
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
              Build enduring enterprises through disciplined oversight and
              trusted stewardship.
            </h2>
            <p className="mt-4 text-sm text-foreground-muted">
              We envision a holding group known for stable governance, measured
              growth, and portfolio resilience across generations.
            </p>
          </MotionItem>
          <MotionItem className="rounded-2xl border border-border bg-section p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted">
              Mission
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
              Provide governance frameworks, shared standards, and long-term
              capital stewardship for our operating companies.
            </h2>
            <p className="mt-4 text-sm text-foreground-muted">
              We partner with leadership teams to uphold accountability, manage
              risk, and deliver sustainable value creation.
            </p>
          </MotionItem>
        </MotionStagger>

        <div className="mt-16">
          <MotionFadeUp>
            <SectionHeading
              eyebrow="Values"
              title="Principles that guide every decision"
              description="Our values are fixed points for governance, culture, and long-term responsibility."
            />
          </MotionFadeUp>
          <MotionStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Integrity",
                copy: "Transparent governance and consistent ethical conduct.",
              },
              {
                title: "Accountability",
                copy: "Clear ownership, measurable performance, and oversight.",
              },
              {
                title: "Stewardship",
                copy: "Responsible management of people, capital, and brands.",
              },
              {
                title: "Excellence",
                copy: "High standards applied across every operating company.",
              },
              {
                title: "Responsible Growth",
                copy: "Disciplined expansion aligned to long-term stability.",
              },
            ].map((value) => (
              <MotionItem
                key={value.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-foreground-muted">
                  {value.copy}
                </p>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </Container>
    </section>
  );
}
