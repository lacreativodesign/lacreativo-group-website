"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/vision-mission-values", label: "Vision" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/95 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/group-logo.png"
            alt="LA CREATIVO GROUP, LLC"
            width={48}
            height={48}
            className="h-10 w-auto object-contain"
          />
          <span className="hidden text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)] sm:inline">
            LA CREATIVO GROUP
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[color:var(--ink)] md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={isActive}
                aria-current={isActive ? "page" : undefined}
                className="link-underline inline-flex items-center gap-2 transition-colors duration-200 ease-out hover:text-[color:var(--accent)]"
              >
                <span>{link.label}</span>
                {isActive ? (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="md:hidden text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>
      {isOpen ? (
        <div id="mobile-menu" className="border-t border-[color:var(--border)] bg-white">
          <nav className="container flex flex-col gap-4 py-4 text-sm font-semibold text-[color:var(--ink)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={isActive}
                  aria-current={isActive ? "page" : undefined}
                  className="link-underline inline-flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
