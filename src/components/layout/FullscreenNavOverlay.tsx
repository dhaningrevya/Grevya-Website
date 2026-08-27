import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ArrowUpRight, Cpu, Database, Layers, Search, ChevronDown } from "lucide-react";
import Eyebrow from "@/components/primitives/Eyebrow";
import { pauseSmoothScroll, resumeSmoothScroll } from "@/components/motion/SmoothScrollProvider";

export interface FullscreenNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement>;
}

const primaryLinks = [
  { id: "home", label: "Home", to: "/" },
  { id: "products", label: "Products & Systems", sectionId: "products" },
  { id: "about", label: "About Grevya", sectionId: "about" },
  { id: "industries", label: "Target Industries", sectionId: "industries" },
  { id: "contact", label: "Initiate Contact", sectionId: "contact" },
];

const solutionLinks = [
  { to: "/solutions/agentic-ai", label: "Agentic AI Engine", desc: "Multi-agent autonomous system architecture", icon: Cpu },
  { to: "/solutions/data-analytics", label: "AI Data Analytics", desc: "Structured analytical decision pipeline", icon: Database },
  { to: "/solutions/ai-content-generation", label: "AI Content Engine", desc: "Grounded commercial proposal studio", icon: Layers },
  { to: "/solutions/rag-application", label: "RAG Knowledge Systems", desc: "Production retrieval augmented generation", icon: Search },
];

const companyLinks = [
  { to: "/careers", label: "Careers", desc: "Open Engineering Positions" },
  { to: "/early-careers", label: "Early Hires", desc: "Elevate Fellowship Program" },
];

const utilityLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
];

export const FullscreenNavOverlay: React.FC<FullscreenNavOverlayProps> = ({
  isOpen,
  onClose,
  triggerRef,
}) => {
  const [isSolutionsAccordionOpen, setIsSolutionsAccordionOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollPosRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();
  const isHomePage = location.pathname === "/";

  // Lock document scroll while overlay is open
  useEffect(() => {
    if (isOpen) {
      pauseSmoothScroll();
      window.dispatchEvent(new CustomEvent("grevya:pause-scroll"));

      scrollPosRef.current = window.scrollY;

      const origDocOverflow = document.documentElement.style.overflow;
      const origDocHeight = document.documentElement.style.height;
      const origBodyOverflow = document.body.style.overflow;
      const origBodyHeight = document.body.style.height;
      const origBodyPosition = document.body.style.position;
      const origBodyWidth = document.body.style.width;
      const origBodyTop = document.body.style.top;

      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollPosRef.current}px`;

      closeButtonRef.current?.focus();

      return () => {
        resumeSmoothScroll();
        window.dispatchEvent(new CustomEvent("grevya:resume-scroll"));

        document.documentElement.style.overflow = origDocOverflow;
        document.documentElement.style.height = origDocHeight;
        document.body.style.overflow = origBodyOverflow;
        document.body.style.height = origBodyHeight;
        document.body.style.position = origBodyPosition;
        document.body.style.width = origBodyWidth;
        document.body.style.top = origBodyTop;

        window.scrollTo(0, scrollPosRef.current);
        triggerRef?.current?.focus();
      };
    }
  }, [isOpen, triggerRef]);

  // Handle Escape Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSectionNavigate = (sectionId?: string, to?: string) => {
    onClose();
    if (to && to !== "/") {
      navigate(to);
      return;
    }
    if (sectionId) {
      if (!isHomePage) {
        navigate(`/#${sectionId}`);
        return;
      }
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="fullscreen-nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100dvh",
            maxHeight: "100dvh",
            width: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
            zIndex: 9999,
            paddingTop: "calc(1.25rem + env(safe-area-inset-top, 0px))",
            paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
          }}
          className="bg-[#0a0a0a] text-[#fafafa] flex flex-col justify-between px-4 sm:px-8 select-none"
        >
          {/* Header Bar inside Overlay */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 max-w-7xl mx-auto w-full flex-shrink-0">
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            >
              <img
                src="/Grevya Logo Presentation.svg"
                alt="Grevya Logo"
                className="h-8 w-auto"
                style={{ maxWidth: "150px" }}
              />
            </Link>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close navigation overlay"
              className="w-11 h-11 rounded-full bg-[#131313] hover:bg-[#1a1a1a] border border-white/10 text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Structured Mobile Wayfinding Body */}
          <div className="max-w-7xl mx-auto w-full py-6 my-auto space-y-8 font-sans">
            
            {/* PRIMARY INDEX */}
            <div className="space-y-3">
              <Eyebrow index="001" label="PRIMARY NAVIGATION" />
              <nav className="space-y-1 font-display">
                {primaryLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSectionNavigate(item.sectionId, item.to)}
                    className="w-full min-h-[48px] py-2 px-3 rounded-xl flex items-center justify-between text-2xl font-extrabold uppercase text-[#fafafa] hover:text-[#f97316] hover:bg-white/5 transition-all text-left focus:outline-none"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-5 w-5 text-[#f97316]" />
                  </button>
                ))}
              </nav>
            </div>

            {/* AI SOLUTION PLATFORMS (ACCORDION) */}
            <div className="space-y-3 border-t border-white/10 pt-6">
              <button
                onClick={() => setIsSolutionsAccordionOpen(!isSolutionsAccordionOpen)}
                className="w-full flex items-center justify-between min-h-[44px] focus:outline-none"
              >
                <Eyebrow index="002" label="AI SOLUTION PLATFORMS" />
                <ChevronDown className={`h-4 w-4 text-[#f97316] transition-transform duration-200 ${isSolutionsAccordionOpen ? "rotate-180" : ""}`} />
              </button>

              {isSolutionsAccordionOpen && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {solutionLinks.map((sol) => {
                    const Icon = sol.icon;
                    return (
                      <Link
                        key={sol.to}
                        to={sol.to}
                        onClick={onClose}
                        className="min-h-[52px] p-3 rounded-xl bg-[#131313] hover:bg-[#1a1a1a] border border-white/10 flex items-start gap-3 group focus:outline-none"
                      >
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#f97316]/10 text-[#f97316] flex-shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold font-display uppercase text-white group-hover:text-[#f97316] transition-colors">
                            {sol.label}
                          </div>
                          <div className="text-[10px] text-[#a1a1a1] leading-tight mt-0.5">
                            {sol.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* COMPANY & UTILITY LINKS */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <Eyebrow index="003" label="COMPANY & UTILITY" />
              <div className="flex flex-wrap gap-2 text-xs font-sans">
                {companyLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#131313] border border-white/10 text-white font-bold uppercase text-[11px] font-display hover:text-[#f97316] transition-colors flex items-center"
                  >
                    {item.label}
                  </Link>
                ))}
                {utilityLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#131313]/60 border border-white/5 text-[#a1a1a1] hover:text-white font-mono text-[10px] uppercase flex items-center"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar inside Overlay */}
          <div className="pt-4 border-t border-white/10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] text-[#a1a1a1] flex-shrink-0">
            <div className="flex flex-wrap gap-2 text-center sm:text-left">
              <span>HQ: Coimbatore, India</span>
              <span>•</span>
              <a href="mailto:info@grevya.com" className="hover:text-white">info@grevya.com</a>
            </div>
            <div>© {new Date().getFullYear()} Grevya Technologies Pvt Ltd.</div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullscreenNavOverlay;
