import Image from "next/image";
import type { Brand } from "@/lib/brands";

interface LogoWallProps {
  brands: Brand[];
}

export default function LogoWall({ brands }: LogoWallProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="flex h-20 items-center justify-center border border-dashed border-[color:var(--border)] bg-[color:var(--surface)] px-4"
        >
          <Image
            src={brand.logoPath}
            alt={`${brand.name} logo`}
            width={140}
            height={70}
            className="h-10 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
