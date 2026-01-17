export interface Brand {
  name: string;
  category: string;
  description: string;
  logoPath: string;
}

export const brands: Brand[] = [
  {
    name: "LA CREATIVO",
    category: "Flagship brands",
    description: "Flagship agency delivering disciplined brand and digital execution.",
    logoPath: "/logos/la-creativo.png",
  },
  {
    name: "Bizosto",
    category: "Flagship brands",
    description: "ERP and business OS focused on operational clarity and control.",
    logoPath: "/logos/bizosto.png",
  },
  {
    name: "Hipster Circles",
    category: "Flagship brands",
    description: "Ecommerce platform with steady merchandising and brand stewardship.",
    logoPath: "/logos/hipster-circles.png",
  },
  {
    name: "Brightwood Press",
    category: "Flagship brands",
    description: "Publishing imprint advancing enduring content and editorial rigor.",
    logoPath: "/logos/brightwood-press.png",
  },
  {
    name: "Appostrophy",
    category: "Flagship brands",
    description: "Product and development studio supporting mission-critical platforms.",
    logoPath: "/logos/appostrophy.png",
  },
  {
    name: "WebHostingSync",
    category: "Platform & infrastructure",
    description: "Infrastructure backbone for hosting, security, and continuity.",
    logoPath: "/logos/webhostingsync.png",
  },
  {
    name: "CustomLogoPros",
    category: "Funnel/SEO brands",
    description: "Brand identity platform supporting disciplined funnel execution.",
    logoPath: "/logos/customlogopros.png",
  },
  {
    name: "WebMakerUSA",
    category: "Funnel/SEO brands",
    description: "Website production partner focused on scalable delivery.",
    logoPath: "/logos/webmakerusa.png",
  },
  {
    name: "WebsiteDesignDogs",
    category: "Funnel/SEO brands",
    description: "Creative production capability for portfolio web initiatives.",
    logoPath: "/logos/websitedesigndogs.png",
  },
  {
    name: "WebsiteNationLLC",
    category: "Funnel/SEO brands",
    description: "Digital services asset providing operational coverage.",
    logoPath: "/logos/websitenationllc.png",
  },
];

export const brandCategories = {
  flagship: "Flagship brands",
  platform: "Platform & infrastructure",
  funnel: "Funnel/SEO brands",
} as const;

export const getBrandsByCategory = (category: string) =>
  brands.filter((brand) => brand.category === category);
