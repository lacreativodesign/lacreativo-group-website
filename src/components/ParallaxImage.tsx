"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { fadeIn } from "@/lib/motion";

interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
}

export default function ParallaxImage({
  children,
  className,
  yOffset = 20,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : yOffset]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
      variants={fadeIn}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
