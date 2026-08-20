import { Layers, Users, TrendingUp, ShoppingCart, FileText, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const capabilityDemos = [
  {
    title: "AI-Powered Supply Chain Architecture",
    description: "Intelligent supply chain architecture utilizing machine learning algorithms for demand forecasting, inventory balancing, and logistics tracking.",
    icon: Layers,
    technologies: ["Machine Learning", "Python", "FastAPI", "React", "Cloud Pipelines"],
    focus: "Supply Chain & Logistics"
  },
  {
    title: "HR Recruitment Automation Workflows",
    description: "Recruitment ecosystem featuring automated candidate evaluation pipelines, structured interview scheduling, and talent analytics.",
    icon: Users,
    technologies: ["NLP", "Audio Processing", "Multi-Agent Evaluation", "Node.js"],
    focus: "Talent & HR Engineering"
  },
  {
    title: "Enterprise SaaS Analytics Engines",
    description: "Business intelligence platform with real-time analytics pipelines, predictive modeling, and governed natural-language query interfaces.",
    icon: TrendingUp,
    technologies: ["Data Science", "Python", "React", "PostgreSQL", "Kubernetes"],
    focus: "Business Intelligence"
  },
  {
    title: "E-Commerce AI Assistant Architectures",
    description: "Intelligent commerce conversational engines with recommendation models and automated customer support integrations.",
    icon: ShoppingCart,
    technologies: ["LLM APIs", "React", "Node.js", "Redis", "Microservices"],
    focus: "Conversational AI"
  },
  {
    title: "Document Intelligence & OCR Systems",
    description: "Enterprise document processing platform using computer vision and optical character recognition for automated document classification.",
    icon: FileText,
    technologies: ["Computer Vision", "OCR", "Python", "FastAPI", "PostgreSQL"],
    focus: "Computer Vision"
  },
  {
    title: "Intelligent Workflow Engines",
    description: "Advanced AI workflow orchestration engine that automates complex multi-step business decisions and operational procedures.",
    icon: Brain,
    technologies: ["Agentic AI", "Automation", "TypeScript", "GraphQL", "gRPC"],
    focus: "Workflow Engineering"
  }
];

const Portfolio = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 section-light-editorial relative border-t border-[#ECEEEF]">
      {/* Architectural Grid */}
      <div className="absolute inset-0 bg-arch-grid-light opacity-50 pointer-events-none"></div>

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
            <span>Architecture Patterns & Technical Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17191C] tracking-tight leading-[1.15] mb-6">
            Representative Capabilities & Solution Blueprints
          </h2>
          <p className="text-[#697078] text-lg leading-relaxed font-normal">
            Explore example solution blueprints and custom AI platform capabilities engineered by Grevya.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilityDemos.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-[#ECEEEF] shadow-xs flex flex-col justify-between hover:border-[#02A4EF] transition-all duration-300 interaction-lift"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-[#02A4EF]/10 text-[#02A4EF] border border-[#02A4EF]/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#697078] uppercase px-2.5 py-1 rounded bg-[#ECEEEF] border border-slate-200">
                      {cap.focus}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#17191C]">
                    {cap.title}
                  </h3>

                  <p className="text-[#697078] text-xs leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#ECEEEF] space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-[#17191C] border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full text-xs font-semibold text-[#17191C] border-[#ECEEEF] hover:bg-slate-100 py-4 rounded-xl interaction-lift"
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      Request Solution Architecture
                      <ArrowRight className="h-3.5 w-3.5 text-[#02A4EF]" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;



