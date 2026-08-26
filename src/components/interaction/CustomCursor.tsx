import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if device uses fine pointer and reduced motion is NOT requested
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animFrameId: number;
    let isHovered = false;
    let isDragHovered = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'
        );
        const dragTarget = target.closest('[data-cursor="drag"]');

        isHovered = !!interactive;
        isDragHovered = !!dragTarget;
      }
    };

    const render = () => {
      // Smooth interpolation for trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        const scale = isDragHovered ? 2.2 : isHovered ? 1.6 : 1;
        const opacity = isHovered || isDragHovered ? 0.9 : 0.4;
        const borderColor = isHovered || isDragHovered ? "rgba(249, 115, 22, 0.8)" : "rgba(255, 255, 255, 0.3)";
        const bg = isHovered ? "rgba(249, 115, 22, 0.1)" : "transparent";

        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
        ringRef.current.style.opacity = `${opacity}`;
        ringRef.current.style.borderColor = borderColor;
        ringRef.current.style.backgroundColor = bg;
      }

      animFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Center Compact Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.8)] will-change-transform"
      />
      {/* Smooth Trailing Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 h-8 w-8 rounded-full border border-white/30 transition-colors duration-200 will-change-transform"
      />
    </div>
  );
};

export default CustomCursor;
