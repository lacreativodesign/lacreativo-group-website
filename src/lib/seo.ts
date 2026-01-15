import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

export const siteConfig = {
  name: "LA CREATIVO GROUP, LLC",
  legalName: "LA CREATIVO GROUP, LLC",
  url: getSiteUrl(),
  description:
    "A governance-led holding group providing disciplined oversight, shared standards and long-term value creation across its portfolio.",
};

export const buildPageMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => {
  const pageUrl = new URL(path, siteConfig.url).toString();

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: siteConfig.name,
      url: pageUrl,
    },
  };
};
