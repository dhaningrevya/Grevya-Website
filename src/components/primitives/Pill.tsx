import React from "react";
import { cn } from "@/lib/utils";

export interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
  asButton?: boolean;
}

export const Pill: React.FC<PillProps> = ({
  variant = "default",
  size = "md",
  icon,
  children,
  className,
  asButton = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full font-sans font-medium uppercase tracking-[0.2em] transition-all duration-200 select-none";

  const sizeStyles = {
    sm: "px-3 py-1 text-[10px]",
    md: "px-4 py-1.5 text-xs",
    lg: "px-5 py-2 text-xs",
  };

  const variantStyles = {
    default:
      "bg-[#131313] border border-white/10 text-[#a1a1a1] hover:border-white/20 hover:text-white",
    accent:
      "bg-[#131313] border border-[#f97316]/30 text-[#fb923c] hover:border-[#f97316]/60 hover:bg-[#1a1a1a]",
    outline:
      "bg-transparent border border-white/15 text-[#a1a1a1] hover:border-white/30 hover:text-white",
    ghost:
      "bg-transparent border border-transparent text-[#a1a1a1] hover:bg-white/5 hover:text-white",
  };

  const Component = asButton ? "button" : "div";

  return (
    <Component
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {icon && <span className="flex-shrink-0 flex items-center">{icon}</span>}
      <span>{children}</span>
    </Component>
  );
};

export default Pill;
