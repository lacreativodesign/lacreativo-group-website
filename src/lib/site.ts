const defaultSiteUrl = "https://lacreativogroup.com";

export function getSiteUrl(): string {
  const rawDomain = process.env.SITE_DOMAIN?.trim() ?? "";
  const normalized = rawDomain.length === 0
    ? defaultSiteUrl
    : rawDomain.startsWith("http://") || rawDomain.startsWith("https://")
      ? rawDomain
      : `https://${rawDomain}`;

  try {
    return new URL(normalized).toString();
  } catch {
    return defaultSiteUrl;
  }
}
