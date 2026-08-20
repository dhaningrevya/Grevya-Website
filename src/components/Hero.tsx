import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Cpu, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const techCategories = [
  "AI SYSTEMS",
  "SOFTWARE ENGINEERING",
  "DATA PIPELINES",
  "ENTERPRISE AUTOMATION"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Subtle scroll parallax transformation
  const heroVisualY = useTransform(scrollY, [0, 500], [0, -40]);
  const heroBackgroundY = useTransform(scrollY, [0, 500], [0, -80]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, -20]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 sm:pt-44 sm:pb-28 bg-[#0B0D10] text-[#FAFAF8] overflow-hidden flex items-center">
      {/* Architectural Background Grid & Ambient Parallax Layer */}
      <motion.div
        style={{ y: heroBackgroundY }}
        className="absolute inset-0 bg-arch-grid opacity-40 pointer-events-none"
      ></motion.div>

      {/* Ambient Floating Depth Geometry (Slow 12s animation loop) */}
      <motion.div
        animate={{
          x: [0, 25, 0, -25, 0],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#02A4EF]/5 rounded-full blur-[140px] pointer-events-none"
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Narrative Column */}
          <motion.div
            style={{ y: heroTextY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-8 text-left"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#02A4EF]"></span>
                <span>ENTERPRISE AI SYSTEMS & SOFTWARE ENGINEERING</span>
              </div>
            </motion.div>

            {/* Headline with Masked Reveal Choreography */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Transforming Businesses Through <span className="text-[#02A4EF]">Intelligent AI Automation</span>
              </h1>
              <p className="text-[#697078] text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
                Grevya delivers production AI/ML platforms, agentic workflow engines, and scalable enterprise software solutions engineered for operational efficiency.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-[#02A4EF] hover:bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wide px-8 py-6 rounded-xl shadow-xl transition-all duration-200 interaction-lift"
              >
                <span className="flex items-center justify-center gap-2">
                  Schedule Technical Review
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>

              <Button
                onClick={() => scrollToSection("products")}
                variant="outline"
                size="lg"
                className="glass-subtle text-slate-200 hover:text-white border-white/15 font-semibold text-xs uppercase tracking-wide px-8 py-6 rounded-xl transition-all duration-200 interaction-lift"
              >
                Explore Real Products
              </Button>
            </motion.div>

            {/* Subtle Core Capability Domains */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-white/10">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Core Capability Domains
              </div>
              <div className="flex flex-wrap gap-2">
                {techCategories.map((cat, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Level 3 Frosted Glass Abstract Product-Oriented Technology Visual */}
          <motion.div
            style={{ y: heroVisualY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="glass-premium-hero glass-sheen rounded-2xl p-6 sm:p-8 border border-white/12 bg-[#111418]/85 shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Top Architectural Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="ml-2 text-slate-300">Grevya Technology Architecture Canvas</span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-[#02A4EF] px-2.5 py-1 rounded bg-[#02A4EF]/10 border border-[#02A4EF]/20">
                  PRODUCTION LAYER
                </span>
              </div>

              {/* Layered Architectural Geometry Blocks */}
              <div className="grid grid-cols-3 gap-3">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2"
                >
                  <div className="p-2 w-8 h-8 rounded-lg bg-[#02A4EF]/10 text-[#02A4EF] flex items-center justify-center">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Model Engine</div>
                  <div className="text-[10px] font-mono text-slate-400">LLM & ML Systems</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-xl bg-[#02A4EF]/10 border border-[#02A4EF]/30 space-y-2"
                >
                  <div className="p-2 w-8 h-8 rounded-lg bg-[#02A4EF] text-white flex items-center justify-center">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Agentic Mesh</div>
                  <div className="text-[10px] font-mono text-[#02A4EF]">Workflow Pipeline</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2"
                >
                  <div className="p-2 w-8 h-8 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Guardrails</div>
                  <div className="text-[10px] font-mono text-emerald-400">Isolated Privacy</div>
                </motion.div>
              </div>

              {/* Central Geometric Canvas Fragment */}
              <div className="p-5 rounded-xl bg-[#0B0D10]/95 border border-white/10 space-y-3 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-white/5 pb-2">
                  <span>ARCHITECTURE PIPELINE</span>
                  <span className="text-[#02A4EF] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#02A4EF] animate-pulse"></span>
                    STATUS: VERIFIED
                  </span>
                </div>
                <div className="space-y-2 text-slate-300 text-[11px] pt-1">
                  <div className="flex justify-between items-center">
                    <span>1. Natural Language Data Ingestion</span>
                    <span className="text-slate-500">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>2. RAG & Vector Index Lookup</span>
                    <span className="text-slate-500">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>3. Multi-Agent Output Validation</span>
                    <span className="text-emerald-400 font-bold">Passed</span>
                  </div>
                </div>
              </div>

              {/* Factual Value Pillars */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center font-mono">
                <div>
                  <div className="text-xs font-bold text-white">Agentic AI</div>
                  <div className="text-[10px] text-slate-400 uppercase">Architecture</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Enterprise</div>
                  <div className="text-[10px] text-slate-400 uppercase">Guardrails</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full-Stack</div>
                  <div className="text-[10px] text-slate-400 uppercase">Engineering</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;



