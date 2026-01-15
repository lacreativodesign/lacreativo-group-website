import Link from "next/link";
import { Landmark, LineChart, Scale } from "lucide-react";
import BrandCard from "@/components/BrandCard";
import { ButtonLink } from "@/components/Button";
import Container from "@/components/Container";
import ImageWithFallback from "@/components/ImageWithFallback";
import { MotionFadeIn, MotionFadeUp, MotionItem, MotionStagger } from "@/components/Motion";
import ParallaxImage from "@/components/ParallaxImage";
import SectionHeading from "@/components/SectionHeading";
import { publicBrands } from "@/lib/brands";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "LA CREATIVO GROUP, LLC — Holding Group Overview",
  description:
    "LA CREATIVO GROUP, LLC is a governance-led holding group providing disciplined oversight, shared standards, and long-term portfolio stewardship.",
  path: "/",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: new URL("/brand/group-logo.png", siteConfig.url).toString(),
  description:
    "A holding group built on trust, discipline, and purpose with a focus on long-term stewardship.",
  // TODO: Add official social profiles when available.
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "administrative",
    email: "info@lacreativogroup.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <MotionStagger className="space-y-8">
              <MotionItem>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted">
                  LA CREATIVO GROUP, LLC
                </p>
              </MotionItem>
              <MotionItem>
                <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
                  A Holding Group Built on Trust, Discipline, and Purpose
                </h1>
              </MotionItem>
              <MotionItem>
                <p className="text-base text-foreground-muted sm:text-lg">
                  We provide governance, shared standards, and long-term oversight
                  for a focused portfolio of operating brands. Our mandate is
                  stewardship, continuity, and accountable value creation.
                </p>
              </MotionItem>
              <MotionItem>
                <div className="flex flex-wrap items-center gap-4">
                  <ButtonLink href="/portfolio">Explore the Portfolio</ButtonLink>
                  <Link
                    href="/who-we-are"
                    className="link-underline text-sm font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/vision-mission-values"
                    className="link-underline text-sm font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    Vision &amp; Values
                  </Link>
                </div>
              </MotionItem>
            </MotionStagger>
            <ParallaxImage className="relative h-[320px] w-full sm:h-[380px]">
              <ImageWithFallback
                src="/images/ai/hero.jpg"
                alt="Executive boardroom"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="rounded-2xl object-cover shadow-sm"
                fallbackText="Strategic overview"
              />
            </ParallaxImage>
          </div>
        </Container>
      </section>

      <section className="bg-section py-16 sm:py-20">
        <Container>
          <MotionFadeUp>
            <SectionHeading
              eyebrow="Operating Pillars"
              title="Governance-led structure with disciplined execution"
              description="Three commitments guide every decision and ensure the longevity of our portfolio."
            />
          </MotionFadeUp>
          <MotionStagger className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Landmark,
                title: "Governance & Oversight",
                copy:
                  "Board-level accountability, clear reporting, and disciplined stewardship across all operating entities.",
              },
              {
                icon: Scale,
                title: "Operational Discipline",
                copy:
                  "Shared standards for risk management, financial control, and performance clarity.",
              },
              {
                icon: LineChart,
                title: "Long-Term Value Creation",
                copy:
                  "Measured growth strategies that prioritize durability, stability, and sustainable outcomes.",
              },
            ].map((pillar) => (
              <MotionItem
                key={pillar.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <pillar.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-foreground-muted">
                  {pillar.copy}
                </p>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <MotionFadeUp>
            <SectionHeading
              eyebrow="Portfolio"
              title="Public brands under disciplined oversight"
              description="Flagship operating companies aligned to shared governance and enterprise standards."
            />
          </MotionFadeUp>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publicBrands.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-section py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <MotionFadeIn className="relative h-[280px] w-full sm:h-[320px]">
              <ImageWithFallback
                src="/images/ai/operations.jpg"
                alt="Operational review"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="rounded-2xl object-cover shadow-sm"
                fallbackText="Operating philosophy"
              />
            </MotionFadeIn>
            <MotionStagger className="space-y-6">
              <MotionItem>
                <SectionHeading
                  eyebrow="Operating Philosophy"
                  title="Governance-backed execution across every business"
                  description="Our holding structure reinforces consistency while allowing each operating brand to deliver in its market."
                />
              </MotionItem>
              <MotionItem>
                <p className="text-sm text-foreground-muted">
                  We align leadership teams, establish portfolio-wide policies, and
                  maintain a measured cadence of reviews to ensure clarity and
                  accountability.
                </p>
              </MotionItem>
              <MotionItem>
                <ul className="space-y-3 text-sm text-foreground-muted">
                  <li>• Quarterly operating reviews with standardized reporting.</li>
                  <li>• Shared risk, compliance, and capital allocation oversight.</li>
                  <li>• Balanced growth targets with clear stewardship metrics.</li>
                </ul>
              </MotionItem>
            </MotionStagger>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <MotionFadeUp>
            <SectionHeading
              eyebrow="Values"
              title="Principled stewardship at every level"
              description="Values guide our governance, shape our partnerships, and reinforce trust."
            />
          </MotionFadeUp>
          <MotionStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Integrity",
              "Accountability",
              "Stewardship",
              "Excellence",
              "Responsible Growth",
            ].map((value) => (
              <MotionItem
                key={value}
                className="rounded-2xl border border-border bg-section px-6 py-8 text-center text-sm font-semibold text-foreground"
              >
                {value}
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </section>
    </>
  );
}
