"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/Container";

const navLinks = [
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/vision-mission-values", label: "Vision" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur transition-colors duration-300 ${
        isScrolled ? "border-border/60 bg-white/95" : "border-border/30"
      }`}
    >
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
              className={`relative transition-colors duration-200 ease-out after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-out hover:text-accent hover:after:scale-x-100 motion-reduce:after:transition-none ${
                pathname === link.href
                  ? "text-accent after:scale-x-100"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Link
            href="/contact"
            className="link-underline text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
