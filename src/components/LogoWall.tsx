import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/lib/brands";

interface LogoWallProps {
  brands: Brand[];
}

export default function LogoWall({ brands }: LogoWallProps) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="flex h-20 items-center justify-center rounded-lg border border-[color:var(--border)] bg-white px-4"
        >
          <Link
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src={brand.logoPath}
              alt={`${brand.name} logo`}
              width={140}
              height={70}
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
