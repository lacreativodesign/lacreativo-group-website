import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/lib/brands";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="panel flex h-full flex-col justify-between gap-4 bg-white">
      <div className="space-y-4">
        <Link
          href={brand.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center"
        >
          <Image
            src={brand.logoPath}
            alt={`${brand.name} logo`}
            width={140}
            height={70}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div>
          <Link
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-lg font-semibold text-[color:var(--ink)]"
          >
            {brand.name}
          </Link>
        </div>
        <p className="text-sm text-[color:var(--muted)]">{brand.description}</p>
      </div>
    </div>
  );
}
