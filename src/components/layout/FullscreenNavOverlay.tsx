import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ArrowUpRight, Mail, Phone, MapPin, Cpu, Database, Layers, Shield, FileCode } from "lucide-react";
import Eyebrow from "@/components/primitives/Eyebrow";
import Pill from "@/components/primitives/Pill";
import GradientText from "@/components/primitives/GradientText";

export interface FullscreenNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const solutionLinks = [
  { to: "/solutions/agentic-ai", label: "Agentic AI Engine", desc: "Multi-agent autonomous system architecture", icon: Cpu },
  { to: "/solutions/data-analytics", label: "AI Data Analytics", desc: "Natural language to SQL data pipeline", icon: Database },
  { to: "/solutions/ai-content-generation", label: "AI Content Engine", desc: "Multi-modal structured generation", icon: Layers },
  { to: "/solutions/ai-consulting", label: "AI Strategy & Audit", desc: "Technical feasibility & architecture review", icon: Shield },
  { to: "/solutions/ai-software-development", label: "AI Software Engineering", desc: "Full-stack enterprise AI engineering", icon: FileCode },
  { to: "/solutions/rag-application", label: "RAG Knowledge Systems", desc: "Production retrieval augmented generation", icon: Cpu },
  { to: "/solutions/erp", label: "ERP & Custom Modules", desc: "Enterprise system automation", icon: Layers },
];

const companyLinks = [
  { to: "/about", label: "About Grevya", desc: "Engineering Studio & Principles" },
  { to: "/careers", label: "Careers", desc: "Open Engineering Positions" },
  { to: "/early-careers", label: "Early Hires", desc: "Elevate Fellowship Program" },
];

export const FullscreenNavOverlay: React.FC<FullscreenNavOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isHomePage = location.pathname === "/";

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

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

  const handleSectionNavigate = (sectionId: string) => {
    onClose();
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="fullscreen-nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          className="fixed inset-0 z-50 bg-[#0a0a0a]/98 backdrop-blur-2xl overflow-y-auto flex flex-col justify-between p-6 sm:p-10 lg:p-14"
        >
          {/* Header Bar inside Overlay */}
          <div className="flex items-center justify-between pb-8 border-b border-white/10 max-w-7xl mx-auto w-full">
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            >
              <img
                src="/Grevya Logo.svg"
                alt="Grevya Logo"
                className="h-8 sm:h-9 w-auto"
                style={{ maxWidth: "160px" }}
              />
            </Link>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close navigation overlay"
              className="p-3 rounded-full bg-[#131313] hover:bg-[#1a1a1a] border border-white/10 text-white transition-all duration-200 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Main Grid Content */}
          <motion.div
            variants={containerVariants}
            className="max-w-7xl mx-auto w-full my-auto py-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start"
          >
            {/* Primary Wayfinding Links (Left Column) */}
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
              <Eyebrow index="001" label="NAVIGATION INDEX" />

              <nav className="space-y-4 font-display">
                <div>
                  <Link
                    to="/"
                    onClick={onClose}
                    className="group inline-flex items-center gap-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#fafafa] hover:text-[#f97316] transition-colors"
                  >
                    <span>Home</span>
                    <ArrowUpRight className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-[#f97316]" />
                  </Link>
                </div>

                <div>
                  <button
                    onClick={() => handleSectionNavigate("products")}
                    className="group inline-flex items-center gap-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#fafafa] hover:text-[#f97316] transition-colors text-left"
                  >
                    <span>Products & Systems</span>
                    <ArrowUpRight className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-[#f97316]" />
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => handleSectionNavigate("about")}
                    className="group inline-flex items-center gap-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#fafafa] hover:text-[#f97316] transition-colors text-left"
                  >
                    <span>About Grevya</span>
                    <ArrowUpRight className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-[#f97316]" />
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => handleSectionNavigate("contact")}
                    className="group inline-flex items-center gap-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#fafafa] hover:text-[#f97316] transition-colors text-left"
                  >
                    <GradientText>Contact Us</GradientText>
                    <ArrowUpRight className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-[#f97316]" />
                  </button>
                </div>
              </nav>
            </motion.div>

            {/* Solutions & Accelerators Sub-Grid (Middle Column) */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-4">
              <Eyebrow label="AI SOLUTIONS" />
              <div className="space-y-3 font-sans text-xs">
                {solutionLinks.map((sol) => (
                  <Link
                    key={sol.to}
                    to={sol.to}
                    onClick={onClose}
                    className="block p-3 rounded-[14px] bg-[#131313] border border-white/10 hover:border-white/20 hover:bg-[#1a1a1a] transition-all group"
                  >
                    <div className="font-semibold text-white text-sm flex items-center justify-between mb-0.5">
                      <span>{sol.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-slate-400 text-xs font-normal">{sol.desc}</div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Company & Contact Direct Info (Right Column) */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <div className="space-y-4">
                <Eyebrow label="COMPANY" />
                <div className="space-y-2.5">
                  {companyLinks.map((comp) => (
                    <Link
                      key={comp.to}
                      to={comp.to}
                      onClick={onClose}
                      className="block p-3 rounded-[14px] bg-[#131313] border border-white/10 hover:border-white/20 hover:bg-[#1a1a1a] transition-all"
                    >
                      <div className="font-semibold text-white text-sm">{comp.label}</div>
                      <div className="text-slate-400 text-xs">{comp.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Direct Communication Details */}
              <div className="p-4 rounded-[14px] bg-[#131313] border border-white/10 space-y-3 text-xs font-sans">
                <div className="text-xs uppercase tracking-[0.15em] font-semibold text-[#f97316]">
                  Direct Channels
                </div>
                <a
                  href="mailto:info@grevya.com"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#f97316]" />
                  <span>info@grevya.com</span>
                </a>
                <a
                  href="tel:+916381734688"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#f97316]" />
                  <span>+91 6381734688</span>
                </a>
                <div className="flex items-center gap-2.5 text-slate-400">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Bar inside Overlay */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a1a1a1] max-w-7xl mx-auto w-full gap-4">
            <div>GREVYA TECHNOLOGIES PVT LTD • ALL RIGHTS RESERVED</div>
            <div className="flex items-center gap-4">
              <Link to="/privacy" onClick={onClose} className="hover:text-white">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" onClick={onClose} className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullscreenNavOverlay;
