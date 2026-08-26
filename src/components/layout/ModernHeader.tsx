import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModernHeaderProps {
  onOpenMenu: () => void;
  isMenuOpen: boolean;
}

const navLinks = [
  { label: "About", id: "about" },
  { label: "Products & Services", id: "products" },
  { label: "Industries", id: "industries" },
  { label: "Process", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

export const ModernHeader: React.FC<ModernHeaderProps> = ({
  onOpenMenu,
  isMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
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
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none",
        isScrolled ? "py-3 sm:py-4" : "py-5 sm:py-6"
      )}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "pointer-events-auto flex items-center justify-between transition-all duration-300 px-4 sm:px-8 py-3 rounded-full border",
            isScrolled
              ? "bg-[#0a0a0a]/85 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-[#0a0a0a]/30 backdrop-blur-md border-white/5"
          )}
        >
          {/* Enlarged Prominent Brand Logo */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-lg py-0.5"
            aria-label="Grevya Home"
          >
            <img
              src="/Grevya Logo.svg"
              alt="Grevya Logo"
              className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow"
              style={{ maxWidth: "220px" }}
            />
          </Link>

          {/* Desktop Primary Inline Navigation Links (>=768px) */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-[0.15em] text-[#a1a1a1] hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Quick Demo Pill CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-200 shadow-accent-glow hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            >
              <span>Book Demo</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            {/* Menu Trigger Button */}
            <button
              onClick={onOpenMenu}
              aria-label={isMenuOpen ? "Close navigation overlay" : "Open navigation overlay"}
              aria-expanded={isMenuOpen}
              aria-controls="fullscreen-nav-overlay"
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#131313] hover:bg-[#1a1a1a] border border-white/10 text-white transition-all duration-200 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            >
              <span className="hidden lg:inline font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#a1a1a1]">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
              {isMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ModernHeader;
