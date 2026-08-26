import React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: string | number;
  label: string;
  accentIndex?: boolean;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  index,
  label,
  accentIndex = true,
  className,
  ...props
}) => {
  const formattedIndex =
    typeof index === "number"
      ? `[${String(index).padStart(3, "0")}]`
      : index && !index.startsWith("[")
      ? `[${index}]`
      : index;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-sans font-medium uppercase tracking-[0.2em] select-none",
        className
      )}
      {...props}
    >
      {formattedIndex && (
        <span
          className={cn(
            "font-mono font-semibold",
            accentIndex ? "text-[#f97316]" : "text-[#a1a1a1]"
          )}
        >
          {formattedIndex}
        </span>
      )}
      <span className="text-[#a1a1a1]">{label}</span>
    </div>
  );
};

export default Eyebrow;
