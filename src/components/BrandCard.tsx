import Image from "next/image";
import type { Brand } from "@/lib/brands";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="space-y-4">
        <div className="flex h-12 items-center">
          {brand.logoPath ? (
            <Image
              src={brand.logoPath}
              alt={`${brand.name} logo`}
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
            />
          ) : (
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-muted">
              {brand.name}
            </div>
          )}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted">
            {brand.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">
            {brand.name}
          </h3>
        </div>
        <p className="text-sm text-foreground-muted">{brand.description}</p>
      </div>
    </div>
  );
}
