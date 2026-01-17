import Image from "next/image";
import type { Brand } from "@/lib/brands";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="panel flex h-full flex-col justify-between gap-4 bg-white">
      <div className="space-y-4">
        <div className="flex h-12 items-center">
          <Image
            src={brand.logoPath}
            alt={`${brand.name} logo`}
            width={140}
            height={70}
            className="h-10 w-auto object-contain"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
            {brand.category}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[color:var(--ink)]">
            {brand.name}
          </h3>
        </div>
        <p className="text-sm text-[color:var(--muted)]">{brand.description}</p>
      </div>
    </div>
  );
}
