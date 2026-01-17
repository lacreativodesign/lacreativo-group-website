import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Vision, Mission & Values",
  description:
    "Review the vision, mission, and values guiding LA CREATIVO GROUP, LLC with principles focused on stewardship and long-term responsibility.",
  path: "/vision-mission-values",
});

const values = [
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
    title: "Operational Rigor",
    copy: "Disciplined execution supported by defined standards.",
  },
  {
    title: "Continuity",
    copy: "Long-term planning that protects enterprise resilience.",
  },
  {
    title: "Measured Growth",
    copy: "Expansion aligned to stability and responsible returns.",
  },
];

export default function VisionMissionValuesPage() {
  return (
    <div className="section">
      <div className="container space-y-12">
        <div className="space-y-4">
          <p className="eyebrow">Vision, Mission &amp; Values</p>
          <h1 className="h1">Vision, Mission &amp; Values</h1>
          <p className="prose">
            We articulate clear expectations for how we govern, operate, and
            support the companies entrusted to our stewardship.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 border border-[color:var(--border)] bg-[color:var(--surface)] p-8">
            <p className="eyebrow">Vision</p>
            <h2 className="h2">
              Build enduring enterprises through disciplined oversight and
              trusted stewardship.
            </h2>
            <p className="prose">
              We seek to be recognized for stable governance, consistent
              execution, and portfolio resilience across generations.
            </p>
          </div>
          <div className="space-y-4 border border-[color:var(--border)] bg-[color:var(--surface)] p-8">
            <p className="eyebrow">Mission</p>
            <h2 className="h2">
              Provide governance frameworks, shared standards, and long-term
              capital stewardship for our operating companies.
            </h2>
            <p className="prose">
              We partner with leadership teams to uphold accountability, manage
              risk, and deliver sustainable value creation.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <Image
            src="/images/ai/values.jpg"
            alt="Values review"
            width={1120}
            height={480}
            className="h-auto w-full object-cover"
          />
          <div className="space-y-4">
            <p className="eyebrow">Values</p>
            <h2 className="h2">Principles that guide every decision</h2>
            <p className="prose">
              Our values are the fixed points for governance, culture, and
              long-term responsibility.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="border border-[color:var(--border)] bg-white p-6"
              >
                <h3 className="h3">{value.title}</h3>
                <p className="prose mt-3">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
