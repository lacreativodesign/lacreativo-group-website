import type { Metadata } from "next";

const defaultSiteUrl = "https://www.lacreativogroup.com";

export const siteConfig = {
  name: "LA CREATIVO GROUP, LLC",
  legalName: "LA CREATIVO GROUP, LLC",
  url:
    process.env.SITE_DOMAIN ??
    process.env.NEXT_PUBLIC_SITE_DOMAIN ??
    defaultSiteUrl,
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
