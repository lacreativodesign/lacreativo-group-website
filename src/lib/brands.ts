export interface Brand {
  name: string;
  category: string;
  description: string;
  logoPath?: string;
}

export const publicBrands: Brand[] = [
  {
    name: "LA CREATIVO",
    category: "Public Brand",
    description:
      "Flagship digital agency delivering disciplined, full-service brand and digital engagement for enterprise-level partners.",
    logoPath: "/logos/la-creativo.png",
  },
  {
    name: "Bizosto",
    category: "Public Brand",
    description:
      "ERP and business operating system focused on operational clarity, data integrity, and scalable management.",
    logoPath: "/logos/bizosto.png",
  },
  {
    name: "Hipster Circles",
    category: "Public Brand",
    description:
      "Ecommerce and apparel platform guided by disciplined merchandising and long-term brand equity.",
    logoPath: "/logos/hipster-circles.png",
  },
  {
    name: "Brightwood Press",
    category: "Public Brand",
    description:
      "Publishing arm advancing thoughtful, enduring content with a governance-first approach to quality.",
    logoPath: "/logos/brightwood-press.png",
  },
  {
    name: "Appostrophy",
    category: "Public Brand",
    description:
      "Mobile and product development studio supporting mission-critical digital platforms.",
    logoPath: "/logos/appostrophy.png",
  },
];

export const infrastructureBrands: Brand[] = [
  {
    name: "WebHostingSync",
    category: "Infrastructure",
    description:
      "Infrastructure and systems backbone providing stable hosting, security, and operational continuity.",
    logoPath: "/logos/webhostingsync.png",
  },
];

export const digitalGrowthBrands: Brand[] = [
  {
    name: "CustomLogoPros",
    category: "Digital Growth Asset",
    description:
      "Brand identity platform supporting disciplined design execution across portfolio businesses.",
    logoPath: "/logos/customlogopros.png",
  },
  {
    name: "WebMakerUSA",
    category: "Digital Growth Asset",
    description:
      "Digital build partner focused on high-quality, scalable web execution.",
    logoPath: "/logos/webmakerusa.png",
  },
  {
    name: "WebsiteDesignDogs",
    category: "Digital Growth Asset",
    description:
      "Creative production capability supporting portfolio design needs with consistency.",
    logoPath: "/logos/websitedesigndogs.png",
  },
  {
    name: "WebsiteNationLLC",
    category: "Digital Growth Asset",
    description:
      "Platform asset providing strategic digital services and operational coverage.",
    logoPath: "/logos/websitenationllc.png",
  },
];
