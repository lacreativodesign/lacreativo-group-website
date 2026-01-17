import Image from "next/image";
import BrandCard from "@/components/BrandCard";
import LogoWall from "@/components/LogoWall";
import { brandCategories, getBrandsByCategory } from "@/lib/brands";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Portfolio",
  description:
    "An overview of LA CREATIVO GROUP, LLC's operating companies and supporting platforms organized by governance category.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const flagship = getBrandsByCategory(brandCategories.flagship);
  const platform = getBrandsByCategory(brandCategories.platform);
  const funnel = getBrandsByCategory(brandCategories.funnel);

  return (
    <div className="section">
      <div className="container space-y-12">
        <div className="space-y-4">
          <p className="eyebrow">Portfolio</p>
          <h1 className="h1">Portfolio</h1>
          <p className="prose">
            The portfolio reflects a set of operating companies aligned to shared
            governance standards, measured performance expectations, and
            long-term stewardship.
          </p>
        </div>

        <Image
          src="/images/ai/portfolio.jpg"
          alt="Portfolio review"
          width={1120}
          height={480}
          className="h-auto w-full object-cover"
        />

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">Flagship brands</p>
            <h2 className="h2">Market-facing operating companies</h2>
            <p className="prose">
              Flagship brands represent the core operating entities stewarded by
              the group.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {flagship.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
          <LogoWall brands={flagship} />
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">Platform &amp; Infrastructure</p>
            <h2 className="h2">Shared systems and operational backbone</h2>
            <p className="prose">
              These platforms ensure resilience, security, and continuity across
              the group.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {platform.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
          <LogoWall brands={platform} />
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">Funnel/SEO brands</p>
            <h2 className="h2">Specialized digital acquisition assets</h2>
            <p className="prose">
              Focused brands supporting acquisition and conversion programs under
              shared governance standards.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {funnel.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
          <LogoWall brands={funnel} />
        </section>
      </div>
    </div>
  );
}
