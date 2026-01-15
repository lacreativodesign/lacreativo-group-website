"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
  fallbackText?: string;
  wrapperClassName?: string;
}

export default function ImageWithFallback({
  fallbackText,
  wrapperClassName,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center rounded-2xl bg-section text-xs font-semibold uppercase tracking-[0.3em] text-foreground-muted ${wrapperClassName ?? ""}`}
      >
        {fallbackText ?? "Image unavailable"}
      </div>
    );
  }

  return (
    <Image
      {...props}
      onError={() => setHasError(true)}
      className={`${props.className ?? ""}`}
    />
  );
}
