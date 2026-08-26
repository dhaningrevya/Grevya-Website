import React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: string[];
  children?: React.ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "medium" | "fast";
  separator?: React.ReactNode;
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  children,
  direction = "left",
  speed = "medium",
  separator = <span className="mx-6 text-[#f97316]/60">•</span>,
  pauseOnHover = true,
  className,
  ...props
}) => {
  const isReverse = direction === "right";

  const renderContent = () => {
    if (children) return children;
    if (!items || items.length === 0) return null;

    return (
      <div className="flex items-center whitespace-nowrap">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="font-display font-bold text-sm sm:text-base uppercase tracking-[0.2em] text-[#6b6b6b] hover:text-[#fafafa] transition-colors duration-200">
              {item}
            </span>
            {idx < items.length - 1 && separator}
          </React.Fragment>
        ))}
        {separator}
      </div>
    );
  };

  const animClass = isReverse ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-4 border-y border-white/10 bg-[#0a0a0a] select-none",
        pauseOnHover && "group",
        className
      )}
      {...props}
    >
      <div className="flex w-max">
        <div className={cn(animClass, pauseOnHover && "group-hover:[animation-play-state:paused]")}>
          {renderContent()}
        </div>
        <div
          aria-hidden="true"
          className={cn(animClass, pauseOnHover && "group-hover:[animation-play-state:paused]")}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
