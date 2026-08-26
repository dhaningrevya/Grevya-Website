import React from "react";
import { type LucideIcon, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import Pill from "@/components/primitives/Pill";
import ReusableCard from "@/components/primitives/ReusableCard";

export type AcceleratorCopy = {
  badge: string;
  title: string;
  titleHighlight: string;
  tagline: string;
  subhead: string;
  heroBullets: string[];
  problems: { icon: LucideIcon; title: string; body: string }[];
  solutionTitle: string;
  solutionBody: string;
  solutionBullets: string[];
  features: { icon: LucideIcon; title: string; body: string }[];
  useCases: { industry: string; title: string; body: string }[];
  differentiators: { icon: LucideIcon; title: string; body: string }[];
  roadmap: { phase: string; duration: string; title: string; body: string }[];
  gradient: string;
};

const AcceleratorLayout = ({ copy }: { copy: AcceleratorCopy }) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#f97316]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#131313] border border-white/10 text-xs font-mono font-semibold uppercase tracking-[0.15em] text-[#f97316]">
            <Sparkles className="h-4 w-4 text-[#f97316]" />
            <span>{copy.badge}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase text-white tracking-tight leading-tight">
            {copy.title}{" "}
            <GradientText className="inline">{copy.titleHighlight}</GradientText>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[#a1a1a1] max-w-3xl mx-auto font-normal leading-relaxed">
            {copy.tagline}
          </p>

          <p className="font-sans text-sm sm:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
            {copy.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-accent-glow"
            >
              <span>Book Technical Review</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto pt-4">
            {copy.heroBullets.map((b) => (
              <Pill key={b} variant="default" size="sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#f97316] inline mr-1.5" />
                {b}
              </Pill>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Problem */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <Eyebrow label="CHALLENGES & BOTTLENECKS" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white">
              The Enterprise Problem
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#a1a1a1] max-w-2xl mx-auto">
              Why most AI initiatives stall before reaching production
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.problems.map((p) => {
              const Icon = p.icon;
              return (
                <ReusableCard
                  key={p.title}
                  variant="elevated"
                  className="p-6 border-white/10 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 flex items-center justify-center text-[#ef4444]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-white">{p.title}</h3>
                  <p className="font-sans text-sm text-[#a1a1a1] leading-relaxed">{p.body}</p>
                </ReusableCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-[#131313] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#f97316]">
                THE GREVYA ARCHITECTURE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white leading-tight">
                {copy.solutionTitle}
              </h2>
              <p className="font-sans text-base text-[#a1a1a1] leading-relaxed">{copy.solutionBody}</p>
              <ul className="space-y-3 font-sans text-sm text-slate-300">
                {copy.solutionBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-[24px] bg-[#1a1a1a] border border-white/10 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#f97316] border-b border-white/10 pb-3">
                CORE SYSTEM MODULES
              </div>
              <div className="grid grid-cols-2 gap-4">
                {copy.features.slice(0, 4).map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="p-4 rounded-xl bg-[#131313] border border-white/10 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-[#f97316]/10 text-[#f97316] flex items-center justify-center">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="text-xs font-bold font-display uppercase text-white">{f.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <Eyebrow label="PLATFORM CAPABILITIES" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white">
              Enterprise-Grade Capabilities
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#a1a1a1] max-w-2xl mx-auto">
              Production modules engineered for deterministic performance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.features.map((f) => {
              const Icon = f.icon;
              return (
                <ReusableCard
                  key={f.title}
                  variant="elevated"
                  className="p-6 border-white/10 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center text-[#f97316]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-white">{f.title}</h3>
                  <p className="font-sans text-sm text-[#a1a1a1] leading-relaxed">{f.body}</p>
                </ReusableCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[#131313] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <Eyebrow label="PRODUCTION DEPLOYMENTS" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white">
              Target Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {copy.useCases.map((u) => (
              <ReusableCard key={u.title} variant="elevated" className="p-6 border-white/10 space-y-4">
                <Pill variant="accent" size="sm">{u.industry}</Pill>
                <h3 className="font-display text-xl font-bold uppercase text-white">{u.title}</h3>
                <p className="font-sans text-sm text-[#a1a1a1] leading-relaxed">{u.body}</p>
              </ReusableCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Callout */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 rounded-[24px] bg-[#131313] border border-white/10 text-center space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
              Ready to ship a production AI system?
            </h2>
            <p className="font-sans text-base text-[#a1a1a1] max-w-2xl mx-auto">
              Consult directly with Grevya software architects to evaluate stack feasibility and ROI.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-accent-glow"
            >
              <span>Book Technical Review</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcceleratorLayout;
