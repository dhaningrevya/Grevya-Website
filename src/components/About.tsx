import React, { useState } from "react";
import { ShieldCheck, Cpu, Zap, ArrowRight, Check } from "lucide-react";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import GhostNumeral from "@/components/primitives/GhostNumeral";
import ReusableCard from "@/components/primitives/ReusableCard";
import Pill from "@/components/primitives/Pill";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const pillars = [
  {
    numeral: "01",
    title: "Rapid Gen AI Pilots",
    desc: "Deploy production-grade AI prototypes and multi-agent workflows engineered for high-impact business execution.",
    icon: Zap,
  },
  {
    numeral: "02",
    title: "Enterprise Guardrails",
    desc: "Strict data privacy isolation, governed access control policies, and schema-enforced AI model outputs.",
    icon: ShieldCheck,
  },
  {
    numeral: "03",
    title: "Full-Stack Engineering",
    desc: "End-to-end software development spanning vector DBs, cloud microservices, APIs, and modern web UIs.",
    icon: Cpu,
  },
];

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "principles">("mission");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative overflow-hidden border-t border-white/10">
      {/* Background Atmosphere Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#f97316]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 z-10 w-full space-y-16">
        
        {/* Section Wayfinding Header Block */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="max-w-4xl space-y-6">
            <Eyebrow index="002" label="BRAND STATEMENT & PHILOSOPHY" />
            <h2 className="font-display text-4xl sm:text-6xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95]">
              Engineering Precision.{" "}
              <GradientText className="inline">Built for Enterprise Scale.</GradientText>
            </h2>
            <p className="font-sans text-[#a1a1a1] text-base sm:text-xl font-normal leading-relaxed max-w-3xl">
              Grevya is an AI-first software engineering consultancy and product development studio. We bridge the gap between experimental AI research and mission-critical enterprise software.
            </p>
          </div>
        </RevealOnScroll>

        {/* Asymmetric Interactive Philosophy Switcher */}
        <RevealOnScroll delay={0.2} direction="up">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Tab Switcher Controls */}
            <div className="lg:col-span-4 space-y-3">
              <button
                onClick={() => setActiveTab("mission")}
                className={`w-full text-left p-5 rounded-[14px] border transition-all duration-200 ${
                  activeTab === "mission"
                    ? "bg-[#131313] border-[#f97316]/60 text-white shadow-xl"
                    : "bg-transparent border-white/10 text-[#a1a1a1] hover:border-white/20 hover:text-white"
                }`}
              >
                <div className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#f97316] mb-1">
                  01 / PURPOSE
                </div>
                <div className="text-base font-sans font-bold uppercase tracking-wide">
                  Our Engineering Mission
                </div>
              </button>

              <button
                onClick={() => setActiveTab("vision")}
                className={`w-full text-left p-5 rounded-[14px] border transition-all duration-200 ${
                  activeTab === "vision"
                    ? "bg-[#131313] border-[#f97316]/60 text-white shadow-xl"
                    : "bg-transparent border-white/10 text-[#a1a1a1] hover:border-white/20 hover:text-white"
                }`}
              >
                <div className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#f97316] mb-1">
                  02 / HORIZON
                </div>
                <div className="text-base font-sans font-bold uppercase tracking-wide">
                  Long-Term Vision
                </div>
              </button>

              <button
                onClick={() => setActiveTab("principles")}
                className={`w-full text-left p-5 rounded-[14px] border transition-all duration-200 ${
                  activeTab === "principles"
                    ? "bg-[#131313] border-[#f97316]/60 text-white shadow-xl"
                    : "bg-transparent border-white/10 text-[#a1a1a1] hover:border-white/20 hover:text-white"
                }`}
              >
                <div className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#f97316] mb-1">
                  03 / GUARANTEE
                </div>
                <div className="text-base font-sans font-bold uppercase tracking-wide">
                  Core Operating Principles
                </div>
              </button>
            </div>

            {/* Right Detailed Glass Panel */}
            <div className="lg:col-span-8">
              <ReusableCard variant="elevated" className="p-8 sm:p-10 border-white/12 bg-[#131313]/90 shadow-2xl relative min-h-[220px]">
                {activeTab === "mission" && (
                  <div className="space-y-4">
                    <div className="text-xs font-mono font-bold text-[#f97316] uppercase tracking-[0.2em]">
                      OUR MISSION
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-wide">
                      Demystifying Enterprise AI & Delivering Measurable ROI
                    </h3>
                    <p className="font-sans text-[#a1a1a1] text-base leading-relaxed">
                      We empower organizations by architecting tailored AI software engines, automating manual workflows, and structuring unstructured data assets with robust security guardrails.
                    </p>
                  </div>
                )}

                {activeTab === "vision" && (
                  <div className="space-y-4">
                    <div className="text-xs font-mono font-bold text-[#f97316] uppercase tracking-[0.2em]">
                      OUR VISION
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-wide">
                      Setting the Global Standard for Autonomous AI Systems
                    </h3>
                    <p className="font-sans text-[#a1a1a1] text-base leading-relaxed">
                      To become the trusted software engineering partner for organizations adopting AI agents, domain-tuned LLMs, and cloud-native intelligence frameworks.
                    </p>
                  </div>
                )}

                {activeTab === "principles" && (
                  <div className="space-y-4">
                    <div className="text-xs font-mono font-bold text-[#f97316] uppercase tracking-[0.2em]">
                      OPERATING PRINCIPLES
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-wide">
                      Deterministic Code, Governed Models, Zero Hype
                    </h3>
                    <p className="font-sans text-[#a1a1a1] text-base leading-relaxed">
                      We never ship unvalidated prototypes. Every line of code, prompt pipeline, and database schema is built for production reliability, maintainability, and enterprise data safety.
                    </p>
                  </div>
                )}
              </ReusableCard>
            </div>

          </div>
        </RevealOnScroll>

        {/* Factual Value Pillars Grid with Ghost Numeral Background Texture */}
        <RevealOnScroll delay={0.3} direction="up">
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <ReusableCard
                  key={idx}
                  variant="elevated"
                  hoverable
                  className="p-8 border-white/10 space-y-4 relative overflow-hidden group"
                >
                  <GhostNumeral
                    numeral={p.numeral}
                    className="absolute -right-4 -bottom-6 text-white/[0.04] group-hover:text-white/[0.07] transition-colors"
                  />
                  <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] flex items-center justify-center relative z-10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2 relative z-10">
                    <h4 className="text-xl font-display font-bold uppercase text-white tracking-wide">
                      {p.title}
                    </h4>
                    <p className="font-sans text-[#a1a1a1] text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </ReusableCard>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Section Footer / Action Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#6b6b6b] uppercase tracking-[0.2em]">
            GREVYA TECHNOLOGIES PVT LTD • COIMBATORE, INDIA
          </div>
          <Pill
            asButton
            variant="outline"
            size="md"
            onClick={scrollToContact}
            icon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            Learn More About Our Team
          </Pill>
        </div>

      </div>
    </section>
  );
};

export default About;
