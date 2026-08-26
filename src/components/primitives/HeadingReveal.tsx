import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HeadingRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "div";
}

export const HeadingReveal: React.FC<HeadingRevealProps> = ({
  children,
  delay = 0.1,
  duration = 0.5,
  className = "",
  as = "h2",
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Tag = as as any;

  if (shouldReduceMotion) {
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Tag className={cn(className)} {...props}>
          {children}
        </Tag>
      </motion.div>
    </div>
  );
};

export default HeadingReveal;
