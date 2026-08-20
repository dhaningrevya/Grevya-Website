import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles, ArrowRight, Layers, Cpu, Database, FileCode, Shield, ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavLink = { to: string; label: string; desc: string; icon?: any };

const solutionsAccelerators: NavLink[] = [
  { to: "/solutions/agentic-ai", label: "Agentic AI Accelerator", desc: "Multi-agent execution engine", icon: Cpu },
  { to: "/solutions/data-analytics", label: "AI Data Analytics", desc: "Natural-language to SQL, governed", icon: Database },
  { to: "/solutions/ai-content-generation", label: "AI Content Engine", desc: "Structured multi-modal generation", icon: Layers },
];

const solutionsServices: NavLink[] = [
  { to: "/solutions/ai-consulting", label: "AI Strategy & Audit", desc: "Feasibility, roadmap & architecture", icon: Shield },
  { to: "/solutions/ai-software-development", label: "AI Software Engineering", desc: "Full-stack enterprise AI development", icon: FileCode },
  { to: "/solutions/rag-application", label: "RAG Knowledge Systems", desc: "Production retrieval-augmented LLMs", icon: Cpu },
  { to: "/solutions/erp", label: "ERP & Custom Modules", desc: "Enterprise platform implementation", icon: Layers },
];

const companyLinks: NavLink[] = [
  { to: "/about", label: "About Grevya", desc: "Engineering team & principles" },
  { to: "/careers", label: "Careers", desc: "Open engineering positions" },
  { to: "/early-careers", label: "Early Hires", desc: "Elevate Fellowship program" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 30);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <motion.nav
        layout
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto mx-auto transition-all duration-300 ${
          isScrolled
            ? "mt-4 sm:mt-5 w-[92%] sm:w-[90%] max-w-6xl rounded-2xl glass-frosted-nav py-3.5 px-6 sm:px-8 shadow-2xl"
            : "w-full max-w-7xl rounded-none bg-transparent border-b border-white/5 py-5 px-4 sm:px-6"
        }`}
        style={{ minHeight: isScrolled ? '74px' : '82px' }}
      >
        <div className="flex items-center justify-between h-full">

          {/* Prominent Grevya Logo (~160px visual width) */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group flex items-center focus:outline-none">
              <img
                src="/Grevya Logo.svg"
                alt="Grevya Logo"
                className="h-10 sm:h-11 w-auto transition-all duration-300 group-hover:scale-[1.02] filter drop-shadow"
                style={{ maxWidth: '175px' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/5 focus:outline-none">
                  <span>Solutions</span>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[600px] p-5 glass-frosted-nav rounded-2xl shadow-2xl text-slate-200 mt-3 animate-scale-in"
              >
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <div className="px-3 py-1.5 flex items-center gap-2 text-[11px] font-mono font-semibold text-[#02A4EF] tracking-wider uppercase border-b border-white/5 mb-1">
                      <Sparkles className="h-3 w-3" />
                      <span>AI Accelerators</span>
                    </div>
                    {solutionsAccelerators.map((link) => {
                      const Icon = link.icon;
                      return (
                        <DropdownMenuItem key={link.label} asChild className="cursor-pointer focus:bg-white/5 focus:text-white rounded-xl">
                          <Link to={link.to} className="flex items-start gap-3 p-2.5 transition-all group">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#02A4EF] group-hover:bg-[#02A4EF]/20 transition-all">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-semibold text-white text-sm flex items-center gap-1">
                                {link.label}
                                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#02A4EF]" />
                              </div>
                              <div className="text-xs text-slate-400">{link.desc}</div>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </div>
                  <div className="space-y-1">
                    <div className="px-3 py-1.5 flex items-center gap-2 text-[11px] font-mono font-semibold text-slate-400 tracking-wider uppercase border-b border-white/5 mb-1">
                      <Cpu className="h-3 w-3" />
                      <span>Services & Engineering</span>
                    </div>
                    {solutionsServices.map((link) => (
                      <DropdownMenuItem key={link.label} asChild className="cursor-pointer focus:bg-white/5 focus:text-white rounded-xl">
                        <Link to={link.to} className="flex flex-col gap-0.5 p-2 transition-all">
                          <span className="font-medium text-slate-200 text-sm hover:text-white">{link.label}</span>
                          <span className="text-xs text-slate-400">{link.desc}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Agentic Systems Link */}
            <Link
              to="/solutions/agentic-ai"
              className="text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/5"
            >
              Agentic Systems
            </Link>

            {/* Products Anchor Link */}
            <button
              onClick={() => scrollToSection("products")}
              className="text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/5"
            >
              Products
            </button>

            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/5 focus:outline-none">
                  <span>Company</span>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-72 p-2.5 glass-frosted-nav rounded-2xl shadow-2xl text-slate-200 mt-3 animate-scale-in"
              >
                {companyLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild className="cursor-pointer focus:bg-white/5 rounded-xl">
                    <Link to={link.to} className="flex flex-col gap-0.5 p-2.5 transition-all">
                      <span className="font-semibold text-white text-sm">{link.label}</span>
                      <span className="text-xs text-slate-400">{link.desc}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Anchor */}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/5"
            >
              Contact
            </button>
          </div>

          {/* Primary CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="hidden md:inline-flex bg-[#02A4EF] hover:bg-[#0284C7] text-white font-semibold text-xs tracking-wide uppercase px-5 py-2.5 rounded-xl shadow-lg transition-all duration-200 interaction-lift"
            >
              <span>Book Demo</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Responsive Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto fixed inset-0 top-[76px] glass-frosted-nav z-40 md:hidden flex flex-col justify-between p-6 border-t border-white/10 overflow-y-auto"
          >
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between w-full p-3.5 rounded-xl text-base font-semibold text-white bg-white/5 border border-white/10"
                >
                  <span className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-[#02A4EF]" />
                    Solutions
                  </span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="pl-4 pt-2 space-y-2 mt-2 border-l border-white/10">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#02A4EF] px-3">Accelerators</p>
                    {solutionsAccelerators.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="block p-2 text-sm text-slate-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 px-3 pt-2">Services</p>
                    {solutionsServices.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="block p-2 text-sm text-slate-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/solutions/agentic-ai"
                onClick={() => setIsMenuOpen(false)}
                className="block p-3.5 rounded-xl text-base font-semibold text-white bg-white/5 border border-white/10"
              >
                Agentic Systems
              </Link>

              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left p-3.5 rounded-xl text-base font-semibold text-white bg-white/5 border border-white/10"
              >
                Products
              </button>

              <div>
                <button
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="flex items-center justify-between w-full p-3.5 rounded-xl text-base font-semibold text-white bg-white/5 border border-white/10"
                >
                  <span>Company</span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${mobileCompanyOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCompanyOpen && (
                  <div className="pl-4 pt-2 space-y-2 mt-2 border-l border-white/10">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="block p-2 text-sm text-slate-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left p-3.5 rounded-xl text-base font-semibold text-white bg-white/5 border border-white/10"
              >
                Contact
              </button>
            </div>

            <div className="pt-6">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#02A4EF] hover:bg-[#0284C7] text-white font-bold py-4 rounded-xl text-sm shadow-xl"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;

