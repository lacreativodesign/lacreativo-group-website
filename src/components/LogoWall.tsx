"use client";

import Image from "next/image";
import { useState } from "react";
import type { Brand } from "@/lib/brands";

interface LogoWallProps {
  brands: Brand[];
}

export default function LogoWall({ brands }: LogoWallProps) {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {brands.map((brand) => {
        const hasError = failedLogos[brand.name];

        return (
          <div
            key={brand.name}
            className="flex h-24 items-center justify-center rounded-xl border border-dashed border-border bg-white px-4"
          >
            {brand.logoPath && !hasError ? (
              <Image
                src={brand.logoPath}
                alt={`${brand.name} logo`}
                width={140}
                height={64}
                className="h-12 w-auto object-contain"
                onError={() =>
                  setFailedLogos((prev) => ({
                    ...prev,
                    [brand.name]: true,
                  }))
                }
              />
            ) : (
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-muted">
                {brand.name}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
