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

      {/* HERO: Full-bleed image with left editorial overlay */}
      <section className="relative overflow-hidden">
        {/* Background image (right stays visible) */}
        <div className="absolute inset-0">
          {/* Use <img> for a simple, dependency-free hero background */}
          <img
            src="/images/ai/hero.jpg"
            alt="Executive boardroom scene"
            className="h-full w-full object-cover object-right"
            loading="eager"
          />
          {/* Soft fade from left to right so text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
        </div>

        <div className="container relative">
          <div className="grid min-h-[480px] items-center py-10 lg:min-h-[540px] lg:py-14">
            <div className="max-w-2xl space-y-4">
              <p className="eyebrow">Holding Company</p>
              <h1 className="h1">
                A Holding Group Built on Trust, Discipline, and Purpose
              </h1>
              <p className="lead max-w-xl">
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
          </div>
        </div>
      </section>

      <section className="section py-8 lg:py-10">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-3">
            <p className="eyebrow">Operating posture</p>
            <h2 className="h2">Dense oversight with clear accountability</h2>
          </div>
          <div className="space-y-4">
            <p className="prose">
              Our model is intentionally lean: centralized governance, consistent
              reporting, and measured decision-making that keeps each operating
              company focused on execution.
            </p>
            <p className="prose">
              We maintain a tight cadence for financial review, operational
              control, and leadership alignment to ensure continuity across the
              portfolio.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="rule" />
      </div>

      <section className="section py-10 lg:py-14">
        <div className="container chapter grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-6">
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

          <div className="space-y-4 lg:col-span-6 lg:pt-4">
            <p className="prose">
              We take a long-view approach to value creation, with measured
              expansion and clear stewardship metrics. Our leaders operate with
              continuity, ensuring each business has the clarity and structure
              needed to endure.
            </p>
            <p className="prose">
              Administrative inquiries are handled with discretion and a measured
              response cadence.
            </p>
          </div>
        </div>
      </section>

      <section className="section py-8 lg:py-10">
        <div className="bleed px-4">
          <div className="mx-auto max-w-[1280px]">
            <Image
              src="/images/ai/governance.jpg"
              alt="Governance review"
              width={1280}
              height={640}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section py-10 lg:py-14">
        <div className="container chapter space-y-8">
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
                className="space-y-3 border-t-2 border-[color:var(--border)] pt-4"
              >
                <h3 className="h3">{pillar.title}</h3>
                <p className="prose">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[color:var(--surface)] py-10 lg:py-14">
        <div className="container chapter space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Portfolio at a Glance</p>
            <h2 className="h2">Operating brands under disciplined oversight</h2>
            <p className="prose">
              The group oversees five operating companies aligned to disciplined
              reporting standards and long-term stewardship.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-y border-[color:var(--border)] py-6 lg:grid-cols-5 lg:py-8">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[72px] items-center justify-center px-4"
              >
                <Image
                  src={brand.logoPath}
                  alt={`${brand.name} logo`}
                  width={140}
                  height={70}
                  className="h-10 w-auto object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-8 lg:py-10">
        <div className="container chapter">
          <div className="space-y-3 border-t border-[color:var(--border)] pt-6">
            <p className="eyebrow">Administrative Notice</p>
            <h2 className="h2">Administrative inquiries only</h2>
            <p className="prose max-w-2xl">
              For administrative matters, contact{" "}
              <span className="font-semibold text-[color:var(--ink)]">
                info@lacreativogroup.com
              </span>
              . Sales outreach is not monitored.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
