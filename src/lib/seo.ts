import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, getSiteUrl } from "@/lib/site";

export const siteConfig = {
  name: SITE_NAME,
  legalName: SITE_NAME,
  url: getSiteUrl(),
  description: SITE_DESCRIPTION,
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
  const baseUrl = getSiteUrl();
  const pageUrl = new URL(path, baseUrl).toString();

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
      siteName: SITE_NAME,
      url: pageUrl,
    },
  };
};
