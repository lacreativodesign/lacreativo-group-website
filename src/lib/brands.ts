export interface Brand {
  name: string;
  description: string;
  href: string;
  logoPath: string;
}

export const brands: Brand[] = [
  {
    name: "LA CREATIVO",
    description: "Flagship agency delivering disciplined brand and digital execution.",
    href: "https://lacreativo.com/",
    logoPath: "/logos/la-creativo.png",
  },
  {
    name: "Bizosto",
    description: "ERP and business OS focused on operational clarity and control.",
    href: "https://www.bizosto.com/",
    logoPath: "/logos/bizosto.png",
  },
  {
    name: "Hipster Circles",
    description: "Ecommerce platform with steady merchandising and brand stewardship.",
    href: "https://hipstercircles.com/",
    logoPath: "/logos/hipster-circles.png",
  },
  {
    name: "Brightwood Press",
    description: "Publishing imprint advancing enduring content and editorial rigor.",
    href: "https://brightwoodpress.com/",
    logoPath: "/logos/brightwood-press.png",
  },
  {
    name: "Appostrophy",
    description: "Product and development studio supporting mission-critical platforms.",
    href: "https://appostrophy.com/",
    logoPath: "/logos/appostrophy.png",
  },
];
