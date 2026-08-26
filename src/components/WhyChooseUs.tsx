import React from "react";
import { ShieldCheck, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import ReusableCard from "@/components/primitives/ReusableCard";
import Pill from "@/components/primitives/Pill";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const accelerators = [
  {
    title: "Agentic AI Accelerator",
    timeline: "Rapid Pilot Scope",
    desc: "Production multi-agent execution pipeline with role-based agent tasks, structured tools, and output validation.",
    capabilities: ["Multi-Agent Orchestration", "Schema Validation", "Human-in-the-loop Protocol"],
  },
  {
    title: "AI Data Analytics & NL2SQL",
    timeline: "Structured Deployment",
    desc: "Natural-language query engine that translates enterprise prompts into optimized, secure SQL queries over SQL/NoSQL databases.",
    capabilities: ["Natural Language SQL Translation", "Role-Based Data Isolation", "Automated Query Optimization"],
  },
  {
    title: "RAG & Vector Knowledge Systems",
    timeline: "Enterprise Integration",
    desc: "Domain knowledge retrieval engine indexing enterprise documents and databases with hybrid dense-sparse vector search.",
    capabilities: ["Vector Indexing & Chunking", "Hybrid Dense-Sparse Retrieval", "Re-ranking Models"],
  },
];

export const WhyChooseUs: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative border-t border-white/10 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#f97316]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 z-10 w-full space-y-16">
        
        {/* Section Header */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="max-w-3xl space-y-4">
            <Eyebrow label="DEPLOYMENT FRAMEWORKS & ACCELERATORS" />
            <h2 className="font-display text-4xl sm:text-6xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95]">
              PROVEN ARCHITECTURE PATTERNS.{" "}
              <GradientText className="inline">SCOPED EXECUTION.</GradientText>
            </h2>
            <p className="font-sans text-[#a1a1a1] text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
              We leverage modular, pre-tested architecture blueprints to deliver enterprise AI capabilities with clarity and speed.
            </p>
          </div>
        </RevealOnScroll>

        {/* Accelerators Grid */}
        <RevealOnScroll delay={0.2} direction="up">
          <div className="grid md:grid-cols-3 gap-8">
            {accelerators.map((acc, idx) => (
              <ReusableCard
                key={idx}
                variant="elevated"
                hoverable
                className="p-8 border-white/10 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Pill variant="accent" size="sm">
                      {acc.timeline}
                    </Pill>
                    <Cpu className="h-5 w-5 text-[#a1a1a1]" />
                  </div>

                  <h3 className="text-xl font-display font-bold uppercase text-white tracking-wide">
                    {acc.title}
                  </h3>
                  <p className="font-sans text-[#a1a1a1] text-sm leading-relaxed">
                    {acc.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-2.5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#a1a1a1]">
                    Technical Scope
                  </div>
                  {acc.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs font-sans text-slate-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#f97316] flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </ReusableCard>
            ))}
          </div>
        </RevealOnScroll>

        {/* Enterprise Security Architecture Callout */}
        <RevealOnScroll delay={0.3} direction="up">
          <div className="p-8 sm:p-10 rounded-[14px] bg-[#131313] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#f97316] uppercase tracking-[0.2em]">
                <ShieldCheck className="h-4 w-4" />
                <span>Enterprise Security & Privacy Architecture</span>
              </div>
              <h4 className="text-2xl font-display font-bold uppercase text-white tracking-wide">
                Strict Data Isolation & Deterministic Execution
              </h4>
              <p className="font-sans text-[#a1a1a1] text-sm leading-relaxed">
                Every accelerator deployment includes data isolation protocols, security guardrails, and complete client ownership of custom IP and source code.
              </p>
            </div>

            <Pill
              asButton
              variant="accent"
              size="lg"
              onClick={scrollToContact}
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Request Architecture Review
            </Pill>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default WhyChooseUs;
