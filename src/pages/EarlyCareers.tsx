import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Target,
  Heart,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";

const whatSetsUsApart = [
  {
    icon: Rocket,
    title: "Hands-on, Production Work",
    body: "You won't be shadowing. Fellows ship real features into real production systems that enterprise clients depend on — from day one.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    body: "One-on-one with senior AI/ML engineers who have built LLM systems at scale. Weekly design reviews, daily pairing.",
  },
  {
    icon: TrendingUp,
    title: "Performance-Based Conversion",
    body: "Strong fellows are converted to full-time roles with a direct, transparent performance rubric. No guessing, no politics.",
  },
  {
    icon: GraduationCap,
    title: "Structured Learning Path",
    body: "Curated curriculum on LLMs, agents, RAG, MLOps, and production ML — paired with a learning budget for books, courses, and conferences.",
  },
];

const testimonials = [
  {
    initials: "SR",
    name: "Fellow, AI Engineering",
    role: "Converted to full-time",
    quote:
      "I expected to watch. Instead, I was shipping production code to a Fortune 500 client in my third week. The mentorship is the real deal — senior engineers actually have time for you.",
  },
  {
    initials: "AK",
    name: "Fellow, Data Science",
    role: "Full-time AI Engineer",
    quote:
      "The RAG system I built as a fellow is still in production. Grevya trusts fellows with real scope — that's rare, and it's the thing that made me stay.",
  },
  {
    initials: "RK",
    name: "Fellow, Full Stack",
    role: "Converted to full-time",
    quote:
      "Six months here taught me more about production AI than the two years before it. No busywork, no demos — just real systems at enterprise scale.",
  },
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

const EarlyCareersPage = () => (
  <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
    <Navigation />
    <main id="main-content">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#f97316]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#131313] border border-white/10 text-xs font-mono font-semibold uppercase tracking-[0.15em] text-[#f97316]">
            <Sparkles className="h-4 w-4" />
            <span>Grevya Elevate Fellowship</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-tight">
            Learn real AI by <GradientText className="inline">shipping real AI</GradientText>
          </h1>
          
          <p className="font-sans text-lg sm:text-xl text-[#a1a1a1] max-w-3xl mx-auto font-normal leading-relaxed">
            A 6-12 month paid fellowship for engineers, designers, and PMs who want to build production AI systems — not slide decks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/careers#application-form"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-accent-glow"
            >
              <span>Apply to the Cohort</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#fellowship-details"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#131313] hover:bg-[#1a1a1a] border border-white/15 text-white font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section id="fellowship-details" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <Eyebrow label="WHY GREVYA ELEVATE" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#fafafa]">
              What Sets This Fellowship Apart
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#a1a1a1] max-w-2xl mx-auto">
              We don't do demo-day internships. You ship real work, with real mentorship, with a real path to full-time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatSetsUsApart.map((item) => (
              <Card
                key={item.title}
                className="bg-[#131313] border-white/10 hover:border-white/20 transition-all text-[#fafafa]"
              >
                <CardHeader className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center mb-4 text-[#f97316]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-display font-bold uppercase text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-[#a1a1a1] text-sm font-sans leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Talent */}
      <section className="py-20 bg-[#131313] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#f97316]">
                Year-Round Cohorts
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#fafafa] leading-tight">
                We invest in talent <GradientText className="inline">year-round</GradientText>
              </h2>
              <p className="font-sans text-base text-[#a1a1a1] leading-relaxed">
                Unlike most companies, we don't run a single intake window. Cohorts start every quarter, because production AI teams need fresh perspective continuously — and the right candidate shouldn't have to wait 9 months for a requisition.
              </p>
              <Link
                to="/careers#application-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f97316] text-white font-sans text-xs font-bold uppercase tracking-[0.15em]"
              >
                <span>Partner with our placement team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-[#1a1a1a] border-white/10 p-6 text-[#fafafa]">
                <Zap className="h-7 w-7 text-[#f97316] mb-3" />
                <div className="text-3xl font-display font-extrabold text-[#f97316] mb-1">4</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#a1a1a1]">Cohorts per year</div>
              </Card>
              <Card className="bg-[#1a1a1a] border-white/10 p-6 text-[#fafafa]">
                <Target className="h-7 w-7 text-[#f97316] mb-3" />
                <div className="text-3xl font-display font-extrabold text-[#f97316] mb-1">5</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#a1a1a1]">Tracks offered</div>
              </Card>
              <Card className="bg-[#1a1a1a] border-white/10 p-6 text-[#fafafa]">
                <Heart className="h-7 w-7 text-[#f97316] mb-3" />
                <div className="text-3xl font-display font-extrabold text-[#f97316] mb-1">Paid</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#a1a1a1]">Every fellowship</div>
              </Card>
              <Card className="bg-[#1a1a1a] border-white/10 p-6 text-[#fafafa]">
                <Briefcase className="h-7 w-7 text-[#f97316] mb-3" />
                <div className="text-3xl font-display font-extrabold text-[#f97316] mb-1">6-12 mo</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#a1a1a1]">Duration</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <Eyebrow label="FELLOW TESTIMONIALS" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#fafafa]">
              Voices of Our Fellows
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.initials} className="bg-[#131313] border-white/10 text-[#fafafa] p-6 space-y-4">
                <CardContent className="p-0 space-y-4">
                  <p className="text-[#a1a1a1] text-sm font-sans italic leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#f97316]/20 border border-[#f97316]/40 flex items-center justify-center text-[#f97316] font-mono text-xs font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm font-sans">{t.name}</div>
                      <div className="text-xs text-[#a1a1a1] font-mono">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#131313] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#fafafa]">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="bg-[#1a1a1a] rounded-2xl border border-white/10 px-6 divide-y divide-white/10">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-b-0 py-2">
                <AccordionTrigger className="text-left text-base sm:text-lg font-display font-semibold text-white hover:text-[#f97316] py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#a1a1a1] font-sans text-sm leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default EarlyCareersPage;
