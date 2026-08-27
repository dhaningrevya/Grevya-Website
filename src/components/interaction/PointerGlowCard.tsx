import React, { useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export interface PointerGlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const PointerGlowCard: React.FC<PointerGlowCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(249, 115, 22, 0.12)", // Low opacity accent theme color
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if device supports hover/fine pointer and reduced motion is disabled
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || shouldReduceMotion) return;

    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={cardRef}
      className={`relative rounded-[14px] bg-[#131313] border border-white/10 overflow-hidden group/glow transition-all duration-300 ${
        shouldReduceMotion ? "" : "hover:border-[#f97316]/30 hover:-translate-y-1"
      } ${className}`}
      style={{
        // Define default coordinates to hide glow when mouse is outside
        ["--mouse-x" as any]: "-999px",
        ["--mouse-y" as any]: "-999px",
      }}
      {...props}
    >
      {/* Glow Layer Overlay */}
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover/glow:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${glowColor} 0%, transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default PointerGlowCard;
