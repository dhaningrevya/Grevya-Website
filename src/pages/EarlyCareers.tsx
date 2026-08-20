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

const whatSetsUsApart = [
  {
    icon: Rocket,
    title: "Hands-on, Production Work",
    body: "You won't be shadowing. Fellows ship real features into real production systems that enterprise clients depend on — from day one.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    body: "One-on-one with senior AI/ML engineers who have built LLM systems at scale. Weekly design reviews, daily pairing.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Performance-Based Conversion",
    body: "Strong fellows are converted to full-time roles with a direct, transparent performance rubric. No guessing, no politics.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: GraduationCap,
    title: "Structured Learning Path",
    body: "Curated curriculum on LLMs, agents, RAG, MLOps, and production ML — paired with a learning budget for books, courses, and conferences.",
    gradient: "from-orange-500 to-amber-500",
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
  <div className="min-h-screen bg-white">
    <Navigation />
    <main id="main-content">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/90 backdrop-blur-sm border border-primary-200 shadow-lg">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Grevya Elevate Fellowship</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Learn real AI by <span className="gradient-text-primary">shipping real AI</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 font-semibold">
            A 6-12 month paid fellowship for engineers, designers, and PMs who want to build production AI systems — not slide decks.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              asChild
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/careers#application-form">
                Apply to the Cohort
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white text-lg px-8 py-6 font-bold"
            >
              <a href="#fellowship-details">See how it works</a>
            </Button>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section id="fellowship-details" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What Sets This Fellowship Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't do demo-day internships. You ship real work, with real mentorship, with a real path to full-time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatSetsUsApart.map((item) => (
              <Card
                key={item.title}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <CardHeader className="p-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Talent */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4 bg-primary-600 text-white">Always Hiring</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                We invest in talent <span className="gradient-text-primary">year-round</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Unlike most companies, we don't run a single intake window. Cohorts start every quarter, because production AI teams need fresh perspective continuously — and the right candidate shouldn't have to wait 9 months for a requisition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you're a university placement officer, bootcamp, or community group — we partner with you directly. Let's talk about setting up a pipeline.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-5 font-semibold"
              >
                <Link to="/careers#application-form">
                  Partner with our placement team
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg bg-white p-6">
                <Zap className="h-8 w-8 text-primary-600 mb-3" />
                <div className="text-3xl font-extrabold gradient-text-primary mb-1">4</div>
                <div className="text-sm font-semibold text-gray-700">Cohorts per year</div>
              </Card>
              <Card className="border-0 shadow-lg bg-white p-6">
                <Target className="h-8 w-8 text-primary-600 mb-3" />
                <div className="text-3xl font-extrabold gradient-text-primary mb-1">5</div>
                <div className="text-sm font-semibold text-gray-700">Tracks offered</div>
              </Card>
              <Card className="border-0 shadow-lg bg-white p-6">
                <Heart className="h-8 w-8 text-primary-600 mb-3" />
                <div className="text-3xl font-extrabold gradient-text-primary mb-1">Paid</div>
                <div className="text-sm font-semibold text-gray-700">Every fellowship</div>
              </Card>
              <Card className="border-0 shadow-lg bg-white p-6">
                <Briefcase className="h-8 w-8 text-primary-600 mb-3" />
                <div className="text-3xl font-extrabold gradient-text-primary mb-1">6-12 mo</div>
                <div className="text-sm font-semibold text-gray-700">Duration</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Voices of Our Fellows
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From their first week to their conversion offer
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.initials} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-blue-50">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Anonymized quotes from recent fellows. Named references available on request.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked
            </h2>
          </div>
          <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-b last:border-b-0">
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900 hover:text-primary-600 py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-600 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <CardContent className="p-10 sm:p-14 text-center relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Ready for AI mastery?
              </h2>
              <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                Join the next Grevya Elevate cohort. Applications open year-round.
              </p>
              <Button
                asChild
                className="bg-white text-primary-700 hover:bg-gray-50 text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/careers#application-form">
                  Join the Elevate Cohort
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default EarlyCareersPage;
