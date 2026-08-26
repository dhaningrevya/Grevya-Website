import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUp, Phone, ShieldCheck, Cpu } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] text-[#fafafa] py-16 border-t border-white/10 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 z-10 w-full space-y-12">
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Grevya Logo.svg"
                alt="Grevya"
                className="h-12 sm:h-14 w-auto filter drop-shadow"
                style={{ maxWidth: "210px" }}
              />
              <div className="flex items-center gap-1.5 ml-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f97316]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fb923c]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              </div>
            </div>
            
            <p className="font-sans text-[#a1a1a1] text-sm leading-relaxed max-w-sm">
              Grevya Technologies Pvt Ltd — Engineering autonomous AI platforms, agentic workflows, and cloud SaaS infrastructure for enterprise scale.
            </p>

            <div className="space-y-2.5 pt-2 text-xs font-mono text-[#a1a1a1]">
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
                  • Agentic AI Accelerator
                </Link>
              </li>
              <li>
                <Link to="/solutions/data-analytics" className="hover:text-white transition-colors">
                  • AI Data Analytics & NL2SQL
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai-content-generation" className="hover:text-white transition-colors">
                  • AI Content Generation Engine
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
              <span>Company & Platform</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-[#a1a1a1]">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  • About Grevya Technologies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  • Careers & Open Engineering Roles
                </Link>
              </li>
              <li>
                <Link to="/early-careers" className="hover:text-white transition-colors">
                  • Elevate Fellowship (Early Hires)
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

        {/* Factual Trust Signal Strip */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-[#a1a1a1]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
              <span>Enterprise Guardrails & Data Privacy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fb923c]" />
              <span>Built in India • Serving Enterprises Globally</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" />
              <span>Modular & Scalable AI Software Systems</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#a1a1a1] text-xs text-center sm:text-left font-mono">
            &copy; {new Date().getFullYear()} Grevya Technologies Pvt Ltd. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a1a1a1] hover:text-white transition-colors"
          >
            <ArrowUp className="h-3.5 w-3.5 text-[#f97316]" />
            <span>Back to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
