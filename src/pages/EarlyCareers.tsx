import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  Rocket,
  Users,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";

const fellowshipStages = [
  {
    id: "apply",
    step: "01",
    label: "APPLY",
    title: "Engineering Assessment & Selection",
    desc: "Demonstrate curiosity and CS fundamentals through our practical coding assessment.",
    activity: "Domain alignment & foundational code review",
    skills: ["Data Structures", "Python/TypeScript", "System Logic"]
  },
  {
    id: "learn",
    step: "02",
    label: "LEARN",
    title: "Curated AI Architecture Intensive",
    desc: "1-on-1 mentorship with senior AI engineers covering RAG, multi-agent frameworks, and MLOps.",
    activity: "Weekly architecture reviews & pairing sessions",
    skills: ["Vector DBs", "LLM Orchestration", "API Design"]
  },
  {
    id: "build",
    step: "03",
    label: "BUILD",
    title: "Production System Execution",
    desc: "Ship real feature modules into production software systems under senior guidance.",
    activity: "Production feature ownership from day one",
    skills: ["State Management", "Guardrails", "Observability"]
  },
  {
    id: "ship",
    step: "04",
    label: "SHIP",
    title: "Full-Time Conversion Milestone",
    desc: "Evaluation against transparent performance rubrics for direct full-time engineering conversion.",
    activity: "Final architecture review & full-time offer",
    skills: ["System Ownership", "Client Integration", "Production Scale"]
  }
];

const faqs = [
  {
    q: "What domains do you hire fellows for?",
    a: "AI/ML engineering, data science, full-stack engineering, product design, and AI product management. Each track pairs you with a senior engineer in that domain.",
  },
  {
    q: "What's the duration of the fellowship?",
    a: "6 to 12 months. The length is based on track and prior experience — we'll align on it before you start. Strong performers are converted before the end.",
  },
  {
    q: "Is the fellowship paid?",
    a: "Yes. All fellows receive a competitive monthly stipend, health coverage, a learning budget, and a MacBook / equipment budget.",
  },
  {
    q: "Do fellowships convert to full-time roles?",
    a: "Conversion is performance-based against a transparent rubric shared with you on day one. Historically, the majority of fellows who meet the bar are converted to full-time roles.",
  },
  {
    q: "Where is the fellowship based?",
    a: "Coimbatore, India — onsite. Being in the same room during the first months of ramp accelerates learning dramatically, and most of our client work happens in live collaboration.",
  },
  {
    q: "What are you looking for in candidates?",
    a: "Curiosity, ownership, and strong fundamentals in CS or ML. We value demonstrated projects, open-source contributions, and the ability to learn fast over polished resumes.",
  },
];

export const EarlyCareers: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>("apply");

  const activeStage = fellowshipStages.find((s) => s.id === activeStageId) || fellowshipStages[0];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] selection:bg-[#f97316]/30 selection:text-white select-none">
      <Navigation />
      
      <main id="main-content" className="pt-32 sm:pt-40 pb-24 space-y-20">
        
        {/* Fellowship Hero */}
        <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#131313] border border-white/10 text-xs font-mono font-semibold uppercase tracking-[0.15em] text-[#f97316]">
            <Sparkles className="h-4 w-4 text-[#f97316]" />
            <span>EARLY CAREER FELLOWSHIP</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-white tracking-tight leading-[0.92]">
            Launch Your Career In <br />
            <GradientText className="inline">Production AI Engineering.</GradientText>
          </h1>

          <p className="font-sans text-[#a1a1a1] text-base sm:text-xl max-w-3xl leading-relaxed">
            The Grevya AI Engineering Fellowship is an intensive, mentorship-driven program where early-career engineers ship production AI systems.
          </p>

          <div className="pt-4">
            <Link
              to="/careers#apply-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-accent-glow"
            >
              <span>Apply For Fellowship</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Interactive Fellowship Journey Track (APPLY -> LEARN -> BUILD -> SHIP) */}
        <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          <div className="space-y-2">
            <Eyebrow label="FELLOWSHIP PROGRESSION" />
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
              The 4-Stage Fellowship Journey
            </h2>
          </div>

          {/* Journey Track Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {fellowshipStages.map((stage) => {
              const isSelected = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  onMouseEnter={() => setActiveStageId(stage.id)}
                  onFocus={() => setActiveStageId(stage.id)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? "bg-[#131313] border-[#f97316] shadow-md border-l-4"
                      : "bg-[#131313]/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-[#f97316] uppercase mb-1">
                    STAGE {stage.step}
                  </div>
                  <div className={`text-base font-display font-bold uppercase ${isSelected ? "text-white" : "text-slate-300"}`}>
                    {stage.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspector Panel */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#131313]/90 backdrop-blur-2xl border border-white/12 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-white font-bold uppercase">
                <GraduationCap className="h-4 w-4 text-[#f97316]" />
                <span>STAGE {activeStage.step}: {activeStage.title}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                ACTIVE MILESTONE
              </span>
            </div>

            <p className="font-sans text-sm text-[#a1a1a1] leading-relaxed max-w-3xl">
              {activeStage.desc}
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-2">
                <div className="text-[10px] text-[#6b6b6b] uppercase">Expected Core Activity</div>
                <div className="text-white font-bold">{activeStage.activity}</div>
              </div>

              <div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-2">
                <div className="text-[10px] text-[#6b6b6b] uppercase">Key Skills & Modules</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeStage.skills.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded bg-[#0a0a0a] text-[10px] text-emerald-400 font-bold border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <div className="text-center space-y-2">
            <Eyebrow label="FREQUENTLY ASKED QUESTIONS" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Fellowship FAQs
            </h3>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3 font-sans text-sm">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-[#131313] border border-white/10 rounded-xl px-5 py-1">
                <AccordionTrigger className="font-display font-bold uppercase text-white hover:text-[#f97316] text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#a1a1a1] leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default EarlyCareers;
