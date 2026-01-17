export const SITE_NAME = "LA CREATIVO GROUP, LLC";
export const SITE_TAGLINE = "A Holding Group of Trusted Companies";
export const SITE_DESCRIPTION =
  "An institutional holding group providing disciplined governance, operational oversight, and long-term stewardship.";

const FALLBACK_URL = "https://lacreativogroup.com";

export const getSiteUrl = (): string => {
  const raw = process.env.SITE_DOMAIN ?? "";
  const normalized = raw.startsWith("http") ? raw : raw ? `https://${raw}` : "";

  try {
    return new URL(normalized || FALLBACK_URL).toString();
  } catch {
    return FALLBACK_URL;
  }
};
