import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GhostNumeralProps extends React.HTMLAttributes<HTMLSpanElement> {
  numeral: string | number;
}

export const GhostNumeral: React.FC<GhostNumeralProps> = ({
  numeral,
  className,
  ...props
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const formatted =
    typeof numeral === "number" ? String(numeral).padStart(2, "0") : numeral;

  if (shouldReduceMotion) {
    return (
      <span
        ref={ref}
        aria-hidden="true"
        className={cn(
          "font-display text-[120px] sm:text-[160px] lg:text-[200px] font-extrabold text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter",
          className
        )}
        {...props}
      >
        {formatted}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      style={{ y }}
      aria-hidden="true"
      className={cn(
        "font-display text-[120px] sm:text-[160px] lg:text-[200px] font-extrabold text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter inline-block will-change-transform",
        className
      )}
      {...props}
    >
      {formatted}
    </motion.span>
  );
};

export default GhostNumeral;
