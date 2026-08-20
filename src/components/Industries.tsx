
import { useState } from "react";
import { Factory, Users, Search, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const industryList = [
  {
    id: "mfg",
    title: "Manufacturing & Supply Chain",
    icon: Factory,
    problem: "Supply chain disruptions, inventory overstocking, and unoptimized logistics scheduling.",
    solution: "AI-driven demand forecasting models, inventory optimization algorithms, and real-time logistics tracking.",
    technologies: ["Machine Learning", "Python", "FastAPI", "React", "Cloud Pipelines"],
    impact: "Inventory cost optimization & operational efficiency"
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    icon: Users,
    problem: "High recruiter screening bandwidth, subjective evaluations, and slow candidate turnaround times.",
    solution: "Automated candidate assessment platforms, real-time AI interview engines, and objective competency analytics.",
    technologies: ["NLP", "Audio Processing", "Multi-Agent Evaluation", "Node.js"],
    impact: "Streamlined evaluation workflows & objective scoring"
  },
  {
    id: "sme",
    title: "SaaS & SME Automation",
    icon: Search,
    problem: "Manual repetitive workflows, fragmented customer insights, and high administrative overhead.",
    solution: "Custom SaaS automation bots, natural-language database query engines, and CRM workflow orchestrations.",
    technologies: ["LangChain", "n8n", "PostgreSQL", "React", "Odoo/Frappe"],
    impact: "Automated business operations & rapid scaling"
  },
  {
    id: "ent",
    title: "Custom Enterprise AI",
    icon: Cpu,
    problem: "Legacy system bottlenecks, strict data compliance requirements, and complex custom integration needs.",
    solution: "Bespoke LLM fine-tuning, RAG application architectures, cloud microservices, and legacy replatforming.",
    technologies: ["RAG Systems", "Vector DBs", "Docker/K8s", "Enterprise Security"],
    impact: "Future-proof cloud infrastructure & governed AI"
  }
];

const Industries = () => {
  const [activeInd, setActiveInd] = useState(0);
  const current = industryList[activeInd];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="industries" className="py-24 sm:py-32 section-dark-obsidian relative border-t border-white/10 overflow-hidden">
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
            <span className="w-1.5 h-1.5 bg-[#02A4EF] rounded-full"></span>
            <span>Vertical Domain Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Industries We Transform
          </h2>
          <p className="text-[#697078] text-lg leading-relaxed font-normal">
            Delivering domain-tuned AI software solutions designed for high-impact operational environments.
          </p>
        </motion.div>

        {/* Interactive Industry Selector */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {industryList.map((ind, idx) => {
            const Icon = ind.icon;
            const isSelected = activeInd === idx;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveInd(idx)}
                className={`p-5 rounded-xl text-left border transition-all duration-300 flex items-center gap-3 interaction-lift ${
                  isSelected
                    ? "bg-white/10 border-[#02A4EF] text-white shadow-xl"
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <div className={`p-2.5 rounded-lg ${isSelected ? "bg-[#02A4EF] text-white" : "bg-white/5 text-[#02A4EF]"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold truncate">{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Transformation Matrix Card */}
        <div className="glass-dark-architectural rounded-2xl p-8 sm:p-10 border border-white/10 bg-[#111418]/90 shadow-2xl space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#02A4EF]/10 border border-[#02A4EF]/20 text-[#02A4EF]">
                    <current.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#02A4EF] uppercase tracking-wider">VERTICAL MATRIX</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{current.title}</h3>
                  </div>
                </div>
                <Button
                  onClick={scrollToContact}
                  className="bg-[#02A4EF] hover:bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wide px-6 py-5 rounded-xl shadow-lg interaction-lift"
                >
                  <span className="flex items-center gap-2">
                    Discuss Use Case
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Problem & Solution */}
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F25022] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F25022]"></span>
                      Industry Challenge:
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{current.problem}</p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#02A4EF]/10 border border-[#02A4EF]/30 space-y-2">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#02A4EF] flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#02A4EF]" />
                      Grevya AI Solution:
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed font-medium">{current.solution}</p>
                  </div>
                </div>

                {/* Technologies & Outcome */}
                <div className="space-y-6 flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Key Technology Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {current.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase">Target Outcome</div>
                    <div className="text-base font-bold text-white">{current.impact}</div>
                  </div>

                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Industries;



