import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Who We Are",
  description:
    "Learn how LA CREATIVO GROUP, LLC governs, supports, and stewards a focused portfolio of operating companies.",
  path: "/who-we-are",
});

export default function WhoWeArePage() {
  return (
    <div className="section">
      <div className="container space-y-10">
        <div className="space-y-4">
          <p className="eyebrow">Who We Are</p>
          <h1 className="h1">Who We Are</h1>
          <p className="lead">
            LA CREATIVO GROUP, LLC is a governance-led holding group responsible
            for stewardship, oversight, and continuity across its operating
            portfolio. We provide disciplined structure while preserving each
            company’s market focus.
          </p>
        </div>

        <div className="rule" />

        <div className="chapter grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div className="panel space-y-3 bg-white">
              <h2 className="h2">Purpose &amp; Mandate</h2>
              <p className="prose">
                Our mandate is to maintain standards for governance, financial
                integrity, and operational discipline. We ensure portfolio
                leadership teams operate with clarity, accountability, and a
                long-term horizon.
              </p>
            </div>
            <div className="panel space-y-3 bg-white">
              <h2 className="h2">Governance Philosophy</h2>
              <p className="prose">
                We prioritize clear reporting, measured capital allocation, and
                board-level accountability. Governance is not symbolic; it is the
                operational foundation for stability and trust.
              </p>
            </div>
            <div className="panel space-y-3 bg-white">
              <h2 className="h2">Operating Discipline</h2>
              <p className="prose">
                Shared standards for risk management, compliance, and performance
                reviews allow each business to execute consistently while
                remaining agile in its market.
              </p>
            </div>
            <div className="panel space-y-3 bg-white">
              <h2 className="h2">Long-Term Outlook</h2>
              <p className="prose">
                We take a multi-year view of value creation, emphasizing
                resilience, continuity, and responsible growth in every decision.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <figure className="figure">
              <Image
                src="/images/ai/operations.jpg"
                alt="Operational review"
                width={480}
                height={560}
                className="h-auto w-full object-cover"
              />
              <figcaption className="caption">
                Operational review and portfolio oversight.
              </figcaption>
            </figure>
            <div className="panel space-y-3 bg-white">
              <p className="prose">
                Our operating cadence includes periodic governance reviews, shared
                performance metrics, and portfolio-wide risk oversight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
