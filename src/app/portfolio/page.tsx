import type { Metadata } from "next";
import BrandCard from "@/components/BrandCard";
import Container from "@/components/Container";
import LogoWall from "@/components/LogoWall";
import { MotionFadeUp } from "@/components/Motion";
import SectionHeading from "@/components/SectionHeading";
import {
  digitalGrowthBrands,
  infrastructureBrands,
  publicBrands,
} from "@/lib/brands";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the operating companies, infrastructure, and digital growth assets within LA CREATIVO GROUP, LLC.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <Container>
        <MotionFadeUp>
          <SectionHeading
            eyebrow="Portfolio"
            title="Operating companies aligned under one governance structure"
            description="Our portfolio includes public-facing brands, infrastructure capabilities, and digital growth assets."
          />
        </MotionFadeUp>
      </Container>

      <section className="mt-12 bg-section py-12">
        <Container>
          <MotionFadeUp>
            <SectionHeading
              eyebrow="Public Brands"
              title="Flagship companies"
              description="Operating brands that represent our most visible market-facing businesses."
            />
          </MotionFadeUp>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publicBrands.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
          <div className="mt-10">
            {/* Preferred logo size: 512x256 (2:1), SVG or transparent PNG */}
            <LogoWall brands={publicBrands} />
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <MotionFadeUp>
            <SectionHeading
              eyebrow="Infrastructure"
              title="Shared systems and operational backbone"
              description="Core infrastructure ensures resilience, security, and continuity across the group."
            />
          </MotionFadeUp>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {infrastructureBrands.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
          <div className="mt-10">
            <LogoWall brands={infrastructureBrands} />
          </div>
        </Container>
      </section>

      <section className="bg-section py-12">
        <Container>
          <MotionFadeUp>
            <SectionHeading
              eyebrow="Digital Growth Assets"
              title="Specialized platforms supporting the portfolio"
              description="Dedicated assets that provide scalable digital services, growth capabilities, and operational reach."
            />
          </MotionFadeUp>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {digitalGrowthBrands.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
          <div className="mt-10">
            <LogoWall brands={digitalGrowthBrands} />
          </div>
        </Container>
      </section>
    </div>
  );
}
