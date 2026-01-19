import Image from "next/image";
import BrandCard from "@/components/BrandCard";
import LogoWall from "@/components/LogoWall";
import { brands } from "@/lib/brands";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Portfolio",
  description:
    "An overview of LA CREATIVO GROUP, LLC's operating companies under disciplined governance.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <div className="section">
      <div className="container space-y-10">
        <div className="space-y-4">
          <p className="eyebrow">Portfolio</p>
          <h1 className="h1">Portfolio</h1>
          <p className="lead">
            The portfolio reflects a set of operating companies aligned to shared
            governance standards, measured performance expectations, and
            long-term stewardship.
          </p>
        </div>

        <div className="rule" />

        <div className="chapter space-y-6">
          <figure className="figure">
            <Image
              src="/images/ai/portfolio.jpg"
              alt="Portfolio review"
              width={1120}
              height={520}
              className="h-auto w-full object-cover"
            />
            <figcaption className="caption">
              Portfolio review cadence across operating companies.
            </figcaption>
          </figure>
        </div>

        <section className="chapter space-y-6">
          <div className="panel space-y-3 bg-white">
            <p className="eyebrow">Operating brands</p>
            <h2 className="h2">Focused companies under active governance</h2>
            <p className="prose">
              These five operating companies represent the portfolio currently
              stewarded by LA CREATIVO GROUP, LLC, each aligned to disciplined
              reporting and long-term oversight.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
          <div className="panel">
            <LogoWall brands={brands} />
          </div>
        </section>
      </div>
    </div>
  );
}
