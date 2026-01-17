import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/brands";
import { SITE_NAME, getSiteUrl } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: SITE_NAME,
  url: getSiteUrl(),
  logo: new URL("/brand/group-logo.png", getSiteUrl()).toString(),
  description:
    "A holding group built on trust, discipline, and purpose with a focus on long-term stewardship.",
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
      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="eyebrow">Holding Company</p>
              <h1 className="h1">
                A Holding Group Built on Trust, Discipline, and Purpose
              </h1>
              <p className="prose">
                LA CREATIVO GROUP, LLC provides governance, operational rigor, and
                long-term stewardship for a focused portfolio of businesses. We
                prioritize continuity, measured growth, and accountable reporting
                across every operating entity.
              </p>
              <Link
                href="/who-we-are"
                className="link-underline text-sm font-semibold text-[color:var(--ink)]"
              >
                Who We Are
              </Link>
            </div>
            <div className="bg-[color:var(--surface)] p-3">
              <Image
                src="/images/ai/hero.jpg"
                alt="Boardroom overview"
                width={520}
                height={420}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--surface)]">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            <p className="eyebrow">What We Are</p>
            <h2 className="h2">Governance-led stewardship for enduring assets</h2>
            <p className="prose">
              We operate as an institutional holding group with an emphasis on
              governance discipline and careful capital allocation. Our mandate is
              to provide consistent oversight, align executive accountability, and
              protect the integrity of each brand we steward.
            </p>
            <p className="prose">
              The group sets standards for financial reporting, operational
              controls, and long-term planning. This allows each operating company
              to remain focused on its market while benefiting from stable
              governance and shared resources.
            </p>
          </div>
          <div className="prose">
            <p>
              We take a long-view approach to value creation, with measured
              expansion and clear stewardship metrics. Our leaders operate with
              continuity, ensuring each business has the clarity and structure
              needed to endure.
            </p>
            <p>
              Administrative inquiries are handled with discretion and a measured
              response cadence.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Image
            src="/images/ai/governance.jpg"
            alt="Governance review"
            width={1120}
            height={520}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <div className="space-y-4">
            <p className="eyebrow">How We Operate</p>
            <h2 className="h2">Disciplined oversight across three pillars</h2>
            <p className="prose">
              Our operating model is deliberately restrained and repeatable,
              focused on governance, operational integrity, and long-term value.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Governance",
                copy:
                  "Board-level accountability, standardized reporting, and clear controls across the portfolio.",
              },
              {
                title: "Operations",
                copy:
                  "Shared standards for risk, compliance, and financial stewardship with a steady cadence.",
              },
              {
                title: "Long-Term Value",
                copy:
                  "Measured growth strategies that prioritize durability, stability, and continuity.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="border-t border-[color:var(--border)] pt-6"
              >
                <h3 className="h3">{pillar.title}</h3>
                <p className="prose mt-3">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--surface)]">
        <div className="container space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Portfolio at a Glance</p>
            <h2 className="h2">Operating brands under disciplined oversight</h2>
            <p className="prose">
              The group oversees a focused set of operating companies across
              flagship, platform, and funnel-focused brands.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex h-20 items-center justify-center border border-dashed border-[color:var(--border)] bg-white"
              >
                <Image
                  src={brand.logoPath}
                  alt={`${brand.name} logo`}
                  width={140}
                  height={70}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-4">
          <p className="eyebrow">Administrative Notice</p>
          <h2 className="h2">Administrative inquiries only</h2>
          <p className="prose">
            For administrative matters, contact
            <span className="font-semibold text-[color:var(--ink)]">
              {" "}info@lacreativogroup.com
            </span>
            . Sales outreach is not monitored.
          </p>
        </div>
      </section>
    </>
  );
}
