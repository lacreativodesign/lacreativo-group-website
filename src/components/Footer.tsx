import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <Container>
        <div className="flex flex-col gap-6 text-sm text-foreground-muted md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-base font-semibold text-foreground">
              LA CREATIVO GROUP, LLC
            </p>
            <p>
              Governance-led stewardship supporting responsible, long-term value
              creation across our portfolio.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
            <Link
              href="/"
              className="transition-colors hover:text-accent"
            >
              Overview
            </Link>
            <Link
              href="/who-we-are"
              className="transition-colors hover:text-accent"
            >
              Who We Are
            </Link>
            <Link
              href="/portfolio"
              className="transition-colors hover:text-accent"
            >
              Portfolio
            </Link>
            <Link
              href="/vision-mission-values"
              className="transition-colors hover:text-accent"
            >
              Vision &amp; Values
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-accent"
            >
              Contact
            </Link>
          </nav>
          <div className="text-sm">
            <p>Administrative inquiries only.</p>
            <p>info@lacreativogroup.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
