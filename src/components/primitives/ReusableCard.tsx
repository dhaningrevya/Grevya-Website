import React from "react";
import { cn } from "@/lib/utils";

export interface ReusableCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "nested" | "glass";
  hoverable?: boolean;
  children: React.ReactNode;
  as?: React.ElementType;
}

export const ReusableCard: React.FC<ReusableCardProps> = ({
  variant = "elevated",
  hoverable = false,
  children,
  className,
  as: Component = "div",
  ...props
}) => {
  const baseStyles = "rounded-[14px] p-6 sm:p-8 transition-all duration-300 relative overflow-hidden";

  const variantStyles = {
    elevated: "bg-[#131313] border border-white/10 text-[#fafafa]",
    nested: "bg-[#1a1a1a] border border-white/10 text-[#fafafa]",
    glass: "bg-[#131313]/80 backdrop-blur-md border border-white/10 text-[#fafafa]",
  };

  const hoverStyles = hoverable
    ? "hover:border-white/20 hover:bg-[#181818] hover:-translate-y-1 hover:shadow-2xl"
    : "";

  return (
    <Component
      className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ReusableCard;
