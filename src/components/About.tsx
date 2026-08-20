
import { useState } from "react";
import { ShieldCheck, Cpu, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Rapid Gen AI Pilots",
    desc: "Deploy production-grade AI prototypes and multi-agent workflows engineered for high-impact business execution.",
    icon: Zap,
  },
  {
    title: "Enterprise Guardrails",
    desc: "Strict data privacy isolation, governed access control policies, and schema-enforced AI model outputs.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Stack Engineering",
    desc: "End-to-end software development spanning vector DBs, cloud microservices, APIs, and modern web UIs.",
    icon: Cpu,
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "principles">("mission");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 section-light-editorial relative border-t border-[#ECEEEF]">
      {/* Background Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-arch-grid-light opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#02A4EF] mb-4">
            <span className="w-1.5 h-1.5 bg-[#02A4EF] rounded-full"></span>
            <span>Brand Statement & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191C] tracking-tight leading-[1.15] mb-6">
            Engineering Precision. Built for Enterprise Scale.
          </h2>
          <p className="text-[#697078] text-lg leading-relaxed font-normal">
            Grevya is an AI-first software engineering consultancy and product development studio. We bridge the gap between experimental AI research and mission-critical enterprise software.
          </p>
        </motion.div>

        {/* Interactive Pillar / Vision Switcher */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Tab Switcher */}
          <div className="lg:col-span-4 space-y-2">
            <button
              onClick={() => setActiveTab("mission")}
              className={`w-full text-left p-5 rounded-xl border transition-all ${
                activeTab === "mission"
                  ? "bg-white border-slate-300 shadow-md text-[#17191C] font-bold"
                  : "bg-transparent border-transparent text-[#697078] hover:text-[#17191C]"
              }`}
            >
              <div className="text-xs font-mono uppercase text-[#02A4EF] mb-1">01 / PURPOSE</div>
              <div className="text-base font-bold">Our Engineering Mission</div>
            </button>

            <button
              onClick={() => setActiveTab("vision")}
              className={`w-full text-left p-5 rounded-xl border transition-all ${
                activeTab === "vision"
                  ? "bg-white border-slate-300 shadow-md text-[#17191C] font-bold"
                  : "bg-transparent border-transparent text-[#697078] hover:text-[#17191C]"
              }`}
            >
              <div className="text-xs font-mono uppercase text-[#02A4EF] mb-1">02 / HORIZON</div>
              <div className="text-base font-bold">Long-Term Vision</div>
            </button>

            <button
              onClick={() => setActiveTab("principles")}
              className={`w-full text-left p-5 rounded-xl border transition-all ${
                activeTab === "principles"
                  ? "bg-white border-slate-300 shadow-md text-[#17191C] font-bold"
                  : "bg-transparent border-transparent text-[#697078] hover:text-[#17191C]"
              }`}
            >
              <div className="text-xs font-mono uppercase text-[#02A4EF] mb-1">03 / GUARANTEE</div>
              <div className="text-base font-bold">Core Operating Principles</div>
            </button>
          </div>

          {/* Right Detailed Panel */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 sm:p-10 border border-[#ECEEEF] shadow-sm space-y-6">
            {activeTab === "mission" && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <span className="text-xs font-mono font-bold text-[#02A4EF] uppercase">OUR MISSION</span>
                <h3 className="text-2xl font-bold text-[#17191C]">Demystifying Enterprise AI & Delivering Measurable ROI</h3>
                <p className="text-[#697078] text-base leading-relaxed">
                  We empower organizations by architecting tailored AI software engines, automating manual workflows, and structuring unstructured data assets with robust security guardrails.
                </p>
              </motion.div>
            )}

            {activeTab === "vision" && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <span className="text-xs font-mono font-bold text-[#02A4EF] uppercase">OUR VISION</span>
                <h3 className="text-2xl font-bold text-[#17191C]">Setting the Global Standard for Autonomous AI Systems</h3>
                <p className="text-[#697078] text-base leading-relaxed">
                  To become the trusted software engineering partner for organizations adopting AI agents, domain-tuned LLMs, and cloud-native intelligence frameworks.
                </p>
              </motion.div>
            )}

            {activeTab === "principles" && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <span className="text-xs font-mono font-bold text-[#02A4EF] uppercase">OPERATING PRINCIPLES</span>
                <h3 className="text-2xl font-bold text-[#17191C]">Deterministic Code, Governed Models, Zero Hype</h3>
                <p className="text-[#697078] text-base leading-relaxed">
                  We never ship unvalidated prototypes. Every line of code, prompt pipeline, and database schema is built for production reliability, maintainability, and enterprise data safety.
                </p>
              </motion.div>
            )}
          </div>

        </div>

        {/* Factual Value Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-[#ECEEEF]">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="p-6 rounded-xl bg-white border border-[#ECEEEF] shadow-xs space-y-3 interaction-lift">
                <div className="w-10 h-10 rounded-lg bg-[#02A4EF]/10 text-[#02A4EF] flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-[#17191C]">{p.title}</h4>
                <p className="text-[#697078] text-xs leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className="mt-12 flex items-center justify-between pt-8 border-t border-[#ECEEEF]">
          <div className="text-xs text-[#697078] font-mono">GREVYA TECHNOLOGIES PVT LTD • COIMBATORE, INDIA</div>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="text-xs font-semibold text-[#17191C] border-[#ECEEEF] hover:bg-slate-100"
          >
            <span>Learn More About Our Team</span>
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default About;


