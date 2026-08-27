import React, { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export interface SmoothScrollProviderProps {
  children: ReactNode;
}

let globalLenisInstance: Lenis | null = null;

export const pauseSmoothScroll = () => {
  if (globalLenisInstance) {
    globalLenisInstance.stop();
  }
};

export const resumeSmoothScroll = () => {
  if (globalLenisInstance) {
    globalLenisInstance.start();
  }
};

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.8,
      });

      globalLenisInstance = lenis;

      const raf = (time: number) => {
        if (lenis) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      };

      rafId = requestAnimationFrame(raf);

      const handlePause = () => {
        globalLenisInstance?.stop();
      };

      const handleResume = () => {
        globalLenisInstance?.start();
      };

      window.addEventListener("grevya:pause-scroll", handlePause);
      window.addEventListener("grevya:resume-scroll", handleResume);

      return () => {
        window.removeEventListener("grevya:pause-scroll", handlePause);
        window.removeEventListener("grevya:resume-scroll", handleResume);
        if (rafId !== null) cancelAnimationFrame(rafId);
        if (lenis) lenis.destroy();
        globalLenisInstance = null;
      };
    } catch (err) {
      console.warn("Lenis smooth scroll initialization skipped:", err);
    }
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
