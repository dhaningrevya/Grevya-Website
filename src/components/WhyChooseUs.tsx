
import { ShieldCheck, Cpu, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const accelerators = [
  {
    title: "Agentic AI Accelerator",
    timeline: "Rapid Pilot Scope",
    desc: "Production multi-agent execution pipeline with role-based agent tasks, structured tools, and output validation.",
    capabilities: ["Multi-Agent Orchestration", "Schema Validation", "Human-in-the-loop Protocol"]
  },
  {
    title: "AI Data Analytics & NL2SQL",
    timeline: "Structured Deployment",
    desc: "Natural-language query engine that translates enterprise prompts into optimized, secure SQL queries over SQL/NoSQL databases.",
    capabilities: ["Natural Language SQL Translation", "Role-Based Data Isolation", "Automated Query Optimization"]
  },
  {
    title: "RAG & Vector Knowledge Systems",
    timeline: "Enterprise Integration",
    desc: "Domain knowledge retrieval engine indexing enterprise documents and databases with hybrid dense-sparse vector search.",
    capabilities: ["Vector Indexing & Chunking", "Hybrid Dense-Sparse Retrieval", "Re-ranking Models"]
  }
];

const WhyChooseUs = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 section-graphite relative border-t border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#02A4EF] mb-4">
            <Clock className="h-3.5 w-3.5" />
            <span>Accelerators & Deployment Frameworks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Proven AI Architecture Patterns. Scoped Execution.
          </h2>
          <p className="text-[#697078] text-lg leading-relaxed font-normal">
            We leverage modular, pre-tested architecture blueprints to deliver enterprise AI capabilities with clarity and speed.
          </p>
        </motion.div>

        {/* Accelerators Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {accelerators.map((acc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-dark-architectural rounded-2xl p-8 border border-white/10 bg-[#171A1F]/90 space-y-6 flex flex-col justify-between interaction-lift"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#02A4EF] px-2.5 py-1 rounded bg-[#02A4EF]/10 border border-[#02A4EF]/20 uppercase">
                    {acc.timeline}
                  </span>
                  <Cpu className="h-5 w-5 text-slate-400" />
                </div>

                <h3 className="text-xl font-bold text-white">{acc.title}</h3>
                <p className="text-[#697078] text-xs leading-relaxed">{acc.desc}</p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2">
                <div className="text-[10px] font-mono font-bold uppercase text-slate-400">Technical Scope</div>
                {acc.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#02A4EF] flex-shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Governance Architecture */}
        <div className="glass-dark-architectural rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 bg-[#0B0D10]/95 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#02A4EF] uppercase">
              <ShieldCheck className="h-4 w-4" />
              <span>Enterprise Security & Privacy Architecture</span>
            </div>
            <h4 className="text-2xl font-bold text-white">Strict Data Isolation & Deterministic Execution</h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Every accelerator deployment includes data isolation protocols, security guardrails, and complete client ownership of custom IP and source code.
            </p>
          </div>

          <Button
            onClick={scrollToContact}
            className="bg-[#02A4EF] hover:bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wide px-8 py-5 rounded-xl whitespace-nowrap interaction-lift"
          >
            <span>Request Architecture Review</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;



