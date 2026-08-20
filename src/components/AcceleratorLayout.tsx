import { type LucideIcon, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
  return (
    <div className="relative">
      {/* Hero */}
      <section className={`relative pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br ${copy.gradient}`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/90 backdrop-blur-sm border border-primary-200 shadow-lg">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">{copy.badge}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            {copy.title}{" "}
            <span className="gradient-text-primary">{copy.titleHighlight}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-6 font-semibold">
            {copy.tagline}
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {copy.subhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10">
            <Button
              asChild
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/#contact">
                Book a Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white text-lg px-8 py-6 font-bold"
            >
              <Link to="/#contact">Talk to an Expert</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {copy.heroBullets.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-sm font-semibold text-gray-700"
              >
                <CheckCircle2 className="h-4 w-4 text-primary-600" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              The Enterprise Problem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why most AI initiatives stall before production
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.problems.map((p) => (
              <Card key={p.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-red-50 to-orange-50">
                <CardHeader className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 shadow-md">
                    <p.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary-600 text-white">The Grevya Solution</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {copy.solutionTitle}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.solutionBody}</p>
              <ul className="space-y-3">
                {copy.solutionBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm p-2">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  {copy.features.slice(0, 4).map((f) => (
                    <div key={f.title} className="p-4 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center mb-3">
                        <f.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-sm font-bold text-gray-900">{f.title}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Enterprise-Grade Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a production deployment, out of the box
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.features.map((f) => (
              <Card key={f.title} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                <CardHeader className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <f.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Production deployments across regulated and performance-critical domains
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {copy.useCases.map((u) => (
              <Card key={u.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                <CardHeader className="p-6">
                  <Badge variant="outline" className="mb-3 w-fit">
                    {u.industry}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">{u.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{u.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Grevya
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {copy.differentiators.map((d) => (
              <div key={d.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <d.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{d.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Implementation Roadmap
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              A predictable, phased path from proof-of-concept to production
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {copy.roadmap.map((r, i) => (
              <div key={r.phase} className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-extrabold text-white/30 mb-2">{String(i + 1).padStart(2, "0")}</div>
                <Badge className="bg-white text-primary-700 mb-3">{r.duration}</Badge>
                <h3 className="text-lg font-bold mb-2">{r.title}</h3>
                <p className="text-sm text-primary-100 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Ready to ship a production AI system?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Talk to our team about scoping a pilot. We'll map your workflow, pick the right architecture, and give you a fixed-timeline plan.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/#contact">
                  Book a 30-minute call
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AcceleratorLayout;
