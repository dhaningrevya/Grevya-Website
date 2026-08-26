import React, { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxDistance?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  maxDistance = 3,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || shouldReduceMotion) return;

    const el = containerRef.current;
    if (!el) return;

    let animId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.12;
      const deltaY = (e.clientY - centerY) * 0.12;

      // Cap displacement at maxDistance (2–3px)
      const distance = Math.hypot(deltaX, deltaY);
      if (distance > maxDistance) {
        const factor = maxDistance / distance;
        targetX = deltaX * factor;
        targetY = deltaY * factor;
      } else {
        targetX = deltaX;
        targetY = deltaY;
      }
    };

    const onMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;

      if (el) {
        el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    el.addEventListener("mousemove", onMouseMove, { passive: true });
    el.addEventListener("mouseleave", onMouseLeave, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [maxDistance, shouldReduceMotion]);

  return (
    <div ref={containerRef} className={`inline-block will-change-transform ${className}`} {...props}>
      {children}
    </div>
  );
};

export default MagneticButton;
