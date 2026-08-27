import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown, Cpu, Database, Layers, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModernHeaderProps {
  onOpenMenu: () => void;
  isMenuOpen: boolean;
  triggerRef?: React.RefObject<HTMLButtonElement>;
}

const solutionsDropdown = [
  { to: "/solutions/agentic-ai", label: "Agentic AI", desc: "Multi-agent autonomous system architecture", icon: Cpu },
  { to: "/solutions/data-analytics", label: "Data Analytics", desc: "Structured analytical decision pipelines", icon: Database },
  { to: "/solutions/ai-content-generation", label: "AI Content Generation", desc: "Grounded commercial proposal studio", icon: Layers },
  { to: "/solutions/rag-application", label: "RAG Applications", desc: "Knowledge search & source attribution", icon: Search },
];

export const ModernHeader: React.FC<ModernHeaderProps> = ({
  onOpenMenu,
  isMenuOpen,
  triggerRef,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsSolutionsOpen(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
        isScrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
      )}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "pointer-events-auto flex items-center justify-between transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full border relative",
            isScrolled
              ? "bg-[#0a0a0a]/85 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-[#0a0a0a]/30 backdrop-blur-md border-white/5"
          )}
        >
          {/* Brand Logo Lockup */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-lg py-0.5"
            aria-label="Grevya Home"
          >
            <img
              src="/Grevya Logo Presentation.svg"
              alt="Grevya Logo"
              className="h-7 sm:h-9 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              style={{ maxWidth: "180px" }}
            />
          </Link>

          {/* Desktop Primary Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/about"
              className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-[0.18em] text-[#a1a1a1] hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              About
            </Link>

            <button
              onClick={() => scrollToSection("products")}
              className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-[0.18em] text-[#a1a1a1] hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Products
            </button>

            {/* Solutions Dropdown Menu */}
            <div
              className="relative group py-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleMouseEnter}
              onBlur={handleMouseLeave}
              onKeyDown={handleKeyDown}
            >
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-[0.18em] text-[#a1a1a1] hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
                aria-expanded={isSolutionsOpen}
                aria-haspopup="true"
              >
                <span>Solutions</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180 text-[#f97316]" : ""}`} />
              </button>

              {/* Dropdown Menu Window */}
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 pt-1.5 w-72 z-50">
                  <div className="p-2 rounded-2xl bg-[#131313]/95 backdrop-blur-2xl border border-white/12 shadow-2xl space-y-1 font-sans text-xs select-none">
                    <div className="text-[9px] font-mono font-bold text-[#6b6b6b] uppercase tracking-wider px-3 py-1">
                      Grevya AI Solutions
                    </div>
                    {solutionsDropdown.map((sol) => {
                      const Icon = sol.icon;
                      return (
                        <Link
                          key={sol.to}
                          to={sol.to}
                          onClick={() => {
                            setIsSolutionsOpen(false);
                            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                          }}
                          className="p-2.5 rounded-xl hover:bg-white/5 transition-colors flex items-start gap-3 group/item focus:outline-none focus:bg-white/5"
                        >
                          <div className="p-2 rounded-lg bg-white/5 group-hover/item:bg-[#f97316]/10 text-slate-300 group-hover/item:text-[#f97316] transition-colors">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-bold text-white font-display uppercase tracking-wider text-xs group-hover/item:text-[#f97316] transition-colors">
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
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("industries")}
              className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-[0.18em] text-[#a1a1a1] hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Industries
            </button>

            <Link
              to="/careers"
              className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-[0.18em] text-[#a1a1a1] hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Careers
            </Link>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-200 shadow-accent-glow hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            >
              <span>Technical Review</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            {/* Mobile Hamburger Trigger with 44px Touch Target */}
            <button
              ref={triggerRef}
              onClick={onOpenMenu}
              className="lg:hidden w-11 h-11 rounded-full bg-[#131313] border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
              aria-label={isMenuOpen ? "Close Menu" : "Open Navigation Menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default ModernHeader;
