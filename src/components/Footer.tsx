import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Overview" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/vision-mission-values", label: "Vision & Values" },
  { href: "/contact", label: "Contact" },
];

const portfolioLinks = [
  "LA CREATIVO",
  "Bizosto",
  "Hipster Circles",
  "Brightwood Press",
  "Appostrophy",
  "WebHostingSync",
  "CustomLogoPros",
  "WebMakerUSA",
  "WebsiteDesignDogs",
  "WebsiteNationLLC",
];

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-white">
      <div className="container section">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-3">
            <p className="text-base font-semibold text-[color:var(--ink)]">
              {SITE_NAME}
            </p>
            <p className="text-sm text-[color:var(--muted)]">{SITE_TAGLINE}</p>
            <p className="text-sm text-[color:var(--muted)]">
              Administrative inquiries only.
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              info@lacreativogroup.com
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline transition-colors hover:text-[color:var(--ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Portfolio
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-[color:var(--muted)] sm:grid-cols-2">
              {portfolioLinks.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-[color:var(--border)] pt-6 text-xs text-[color:var(--muted)]">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
