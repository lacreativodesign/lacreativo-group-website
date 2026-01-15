"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const viewport = { once: true, amount: 0.3 };

export function MotionStagger({
  children,
  ...props
}: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={staggerContainer}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={staggerItem}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionFadeUp({ children, ...props }: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionFadeIn({ children, ...props }: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeIn}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}
