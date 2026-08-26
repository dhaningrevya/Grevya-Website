import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface HorizontalScrollContainerProps {
  children: React.ReactNode;
  className?: string;
  totalCards?: number;
}

export const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({
  children,
  className = "",
  totalCards = 4,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate transform percentage based on total cards to prevent clipping
  const endTransform = `-${Math.min((totalCards - 1) * 22, 60)}%`;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", endTransform]);

  // Mobile / Reduced Motion: Render native horizontal touch scroll track
  if (!isDesktop || shouldReduceMotion) {
    return (
      <div className="space-y-4">
        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-between text-xs font-mono text-[#a1a1a1] px-1 lg:hidden">
          <span className="uppercase tracking-[0.15em]">Swipe catalogue</span>
          <span className="flex items-center gap-1 text-[#f97316]">
            <span>Scroll Horizontally</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6">
          {React.Children.map(children, (child, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[85vw] sm:w-[420px]">
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop Pinned Horizontal Scroll (Tuned height h-[180vh])
  return (
    <div ref={targetRef} className="relative h-[180vh] w-full">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-start">
        {/* Progress Rail Bar */}
        <div className="absolute top-8 right-12 z-20 flex items-center gap-3 bg-[#131313]/90 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#f97316]">
            Catalogue Track
          </span>
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-gradient-to-r from-[#fb923c] to-[#f97316] origin-left"
            />
          </div>
        </div>

        <motion.div
          style={{ x }}
          className={`flex gap-8 px-6 sm:px-12 lg:px-16 will-change-transform ${className}`}
        >
          {React.Children.map(children, (child, idx) => (
            <div key={idx} className="shrink-0 w-[480px] lg:w-[540px]">
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;
