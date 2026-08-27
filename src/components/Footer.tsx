import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUp, Phone, ShieldCheck, Cpu } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] text-[#fafafa] py-12 sm:py-16 border-t border-white/10 overflow-hidden select-none">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-10 sm:space-y-12">
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <img
                  src="/Grevya Logo Presentation.svg"
                  alt="Grevya"
                  className="h-12 sm:h-14 md:h-16 w-auto"
                  style={{ maxWidth: "220px" }}
                />
              </div>
              <div className="text-[10px] font-mono tracking-[0.25em] text-[#f97316] font-bold uppercase">
                PRODUCTION ENTERPRISE AI
              </div>
            </div>
            
            <p className="font-sans text-[#a1a1a1] text-xs sm:text-sm leading-relaxed max-w-sm">
              Grevya Technologies Pvt Ltd — Engineering autonomous AI platforms, agentic workflows, and cloud SaaS infrastructure for enterprise scale.
            </p>

            <div className="space-y-2.5 pt-1 text-xs font-mono text-[#a1a1a1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#f97316] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed text-slate-300">
                  4th South Cross St., Kovai Thiru Nagar,<br />
                  Kalapatty (E), Coimbatore 641014
                </span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#f97316] flex-shrink-0" />
                <a href="mailto:info@grevya.com" className="hover:text-white transition-colors text-slate-300">
                  info@grevya.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#f97316] flex-shrink-0" />
                <a href="tel:+916381734688" className="hover:text-white transition-colors text-slate-300">
                  +91 6381734688
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#f97316] flex items-center gap-2">
              <Cpu className="h-3.5 w-3.5" />
              <span>AI Solutions</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-[#a1a1a1]">
              <li>
                <Link to="/solutions/agentic-ai" className="hover:text-white transition-colors">
                  • Agentic AI Engine
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-analytics" className="hover:text-white transition-colors">
                  • AI Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai-content-generation" className="hover:text-white transition-colors">
                  • AI Content Engine
                </Link>
              </li>
              <li>
                <Link to="/solutions/rag-application" className="hover:text-white transition-colors">
                  • RAG Applications
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai-software-development" className="hover:text-white transition-colors">
                  • Full-Stack AI Software Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#f97316] flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Company & Governance</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-[#a1a1a1]">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  • About Grevya Studio
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  • Engineering Careers
                </Link>
              </li>
              <li>
                <Link to="/early-careers" className="hover:text-white transition-colors">
                  • Elevate Early Career Fellowship
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  • Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  • Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#a1a1a1]">
          <div>
            © {new Date().getFullYear()} Grevya Technologies Pvt Ltd. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#131313] border border-white/10 hover:border-white/20 text-white transition-colors focus:outline-none"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#f97316]" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
