"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/Container";

const navLinks = [
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/vision-mission-values", label: "Vision" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          {!logoError ? (
            <Image
              src="/brand/group-logo.png"
              alt="LA CREATIVO GROUP, LLC"
              width={44}
              height={44}
              className="h-11 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
              LA CREATIVO GROUP
            </span>
          )}
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-foreground md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Link
            href="/contact"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
