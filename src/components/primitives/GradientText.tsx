import React from "react";
import { cn } from "@/lib/utils";

export interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
  children: React.ReactNode;
}

export const GradientText: React.FC<GradientTextProps> = ({
  as: Component = "span",
  children,
  className,
  ...props
}) => {
  return (
    <Component
      className={cn("text-gradient-accent inline-block", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GradientText;
