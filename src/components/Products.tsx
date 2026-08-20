
import { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const realProducts = [
  {
    id: "kh-interview",
    name: "KH Interview AI",
    tagline: "Automated Candidate Screening & Competency Scoring Platform",
    category: "RECRUITMENT ENGINEERING",
    accentColor: "#02A4EF", // Grevya Blue
    description: "An automated interview assessment ecosystem featuring real-time speech evaluation, structured scoring rubrics, and candidate analytics.",
    capabilities: [
      "AI-driven candidate interview evaluation",
      "Custom rubric creation & domain scoring",
      "Automated transcript & audio summary engine",
      "Recruiter dashboard with multi-candidate rank analytics"
    ],
    features: [
      { name: "Evaluation Engine", detail: "Real-time speech-to-text NLP analysis" },
      { name: "Rubric Tuning", detail: "Role-specific technical competency weights" },
      { name: "Integrations", detail: "ATS webhook & calendar scheduling API" }
    ],
    previewUI: {
      type: "interview",
      title: "Candidate Evaluation Pipeline",
      metrics: [
        { label: "Overall Fit", val: "92%" },
        { label: "Tech Score", val: "8.8 / 10" },
        { label: "Communication", val: "Fluent" }
      ]
    }
  },
  {
    id: "kh-medtriage",
    name: "KH Med-Triage",
    tagline: "DICOM & Patient Triage Workflow Optimization Engine",
    category: "HEALTHCARE LOGISTICS",
    accentColor: "#F25022", // Grevya Red
    description: "Specialized clinical workflow assistant designed to optimize patient intake queues, structure medical records, and parse diagnostic imaging telemetry.",
    capabilities: [
      "Patient triage priority score calculation",
      "DICOM metadata & imaging report formatting",
      "Automated clinical documentation summarization",
      "HIPAA-aligned data isolation protocols"
    ],
    features: [
      { name: "Intake Triage", detail: "Urgency classification algorithm" },
      { name: "DICOM Pipeline", detail: "Automated header extraction & indexing" },
      { name: "Clinical Security", detail: "Air-gapped data retention guardrails" }
    ],
    previewUI: {
      type: "medtriage",
      title: "DICOM Patient Triage Workspace",
      metrics: [
        { label: "Triage Level", val: "Priority 1 (Urgent)" },
        { label: "Scan Status", val: "DICOM Parsed" },
        { label: "Summary", val: "MRI Brain Volumetric" }
      ]
    }
  },
  {
    id: "kh-proposal",
    name: "KH Proposal AI",
    tagline: "Enterprise RFP & Proposal Generation Engine",
    category: "COMMERCIAL AUTOMATION",
    accentColor: "#80BA01", // Grevya Green
    description: "Automated proposal generation platform that ingests client requirement documents and queries internal knowledge bases to draft winning bids.",
    capabilities: [
      "RFP requirement matrix parsing",
      "Knowledge retrieval RAG integration",
      "Automated compliance matrix verification",
      "Exportable formatted PDF/Docx generation"
    ],
    features: [
      { name: "RFP Parsing", detail: "Automatic requirement extraction" },
      { name: "Knowledge Search", detail: "RAG vector lookup across enterprise docs" },
      { name: "Compliance Check", detail: "Automated clause matching" }
    ],
    previewUI: {
      type: "proposal",
      title: "RFP Proposal Automation Studio",
      metrics: [
        { label: "RFP Match Rate", val: "98.4%" },
        { label: "Draft Speed", val: "4.2 mins" },
        { label: "Clauses Verified", val: "42 / 42" }
      ]
    }
  },
  {
    id: "kh-transcript",
    name: "KH Transcript Analyzer",
    tagline: "Multi-Party Audio Intelligence & Decision Extractor",
    category: "SPEECH INTELLIGENCE",
    accentColor: "#FFB902", // Grevya Yellow
    description: "Advanced conversation analysis engine that converts unstructured audio and meeting transcripts into structured action items and sentiment analytics.",
    capabilities: [
      "Speaker diarization & identity mapping",
      "Automated action item & decision extraction",
      "Searchable conversation vector database",
      "Custom vocabulary & domain acronym support"
    ],
    features: [
      { name: "Speaker ID", detail: "Multi-party voice diarization" },
      { name: "Action Extract", detail: "Natural language task mapping" },
      { name: "Search Index", detail: "Semantic transcript vector search" }
    ],
    previewUI: {
      type: "transcript",
      title: "Multi-Party Audio Diarization Engine",
      metrics: [
        { label: "Speakers Identified", val: "4 Speakers" },
        { label: "Action Items", val: "7 Generated" },
        { label: "Word Accuracy", val: "99.1%" }
      ]
    }
  }
];

const Products = () => {
  const [activeProdIdx, setActiveProdIdx] = useState(0);
  const currentProduct = realProducts[activeProdIdx];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-24 sm:py-32 section-dark-obsidian relative overflow-hidden border-t border-white/10">
      {/* Ambient Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#02A4EF] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#02A4EF]" />
            <span>Flagship Proprietary Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Proprietary Products. Proven Functionality.
          </h2>
          <p className="text-[#697078] text-lg leading-relaxed font-normal">
            Explore Grevya's 4 proprietary flagship AI products built to streamline high-complexity operational domain workflows.
          </p>
        </motion.div>

        {/* Chapter Catalogue Nav Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {realProducts.map((prod, idx) => {
            const isSelected = activeProdIdx === idx;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveProdIdx(idx)}
                className={`p-5 rounded-xl text-left border transition-all duration-300 interaction-lift ${
                  isSelected
                    ? "bg-white/10 border-white/20 text-white shadow-xl"
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
                style={{
                  borderColor: isSelected ? prod.accentColor : undefined
                }}
              >
                <div
                  className="text-[10px] font-mono font-bold uppercase tracking-wider mb-1"
                  style={{ color: isSelected ? prod.accentColor : "#697078" }}
                >
                  CHAPTER 0{idx + 1} / PRODUCT
                </div>
                <div className="text-base font-bold truncate">{prod.name}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Product Chapter Showcase */}
        <div className="glass-premium-hero glass-sheen rounded-2xl p-8 sm:p-12 border border-white/12 bg-[#111418]/85 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center"
            >
              
              {/* Product Detail Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-wider"
                    style={{ color: currentProduct.accentColor }}
                  >
                    {currentProduct.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                    {currentProduct.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {currentProduct.tagline}
                  </p>
                </div>

                <p className="text-[#697078] text-sm leading-relaxed">
                  {currentProduct.description}
                </p>

                {/* Core Capabilities Checklist */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono font-bold uppercase text-slate-400">Key Product Capabilities</div>
                  {currentProduct.capabilities.map((cap, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2
                        className="h-4 w-4 mt-0.5 flex-shrink-0"
                        style={{ color: currentProduct.accentColor }}
                      />
                      <span>{cap}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Architecture Features Bar */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                  {currentProduct.features.map((feat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -2 }}
                      className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-0.5 transition-all"
                    >
                      <div
                        className="text-[10px] font-mono uppercase"
                        style={{ color: currentProduct.accentColor }}
                      >
                        {feat.name}
                      </div>
                      <div className="text-[11px] font-medium text-slate-300 truncate">{feat.detail}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    onClick={scrollToContact}
                    className="text-white font-bold text-xs uppercase tracking-wide px-6 py-5 rounded-xl shadow-lg transition-all duration-200 interaction-lift"
                    style={{ backgroundColor: currentProduct.accentColor }}
                  >
                    <span className="flex items-center gap-2">
                      Request Product Demo
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* Product UI Simulation Canvas */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-white/10 bg-[#0B0D10]/95 p-6 space-y-6 shadow-2xl">
                  
                  {/* Simulated App Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-lg bg-white/5"
                        style={{ color: currentProduct.accentColor }}
                      >
                        <Brain className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{currentProduct.previewUI.title}</div>
                        <div className="text-[10px] font-mono text-slate-400">Product Instance Workspace</div>
                      </div>
                    </div>
                    <span
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded border flex items-center gap-1.5"
                      style={{
                        color: currentProduct.accentColor,
                        borderColor: `${currentProduct.accentColor}40`,
                        backgroundColor: `${currentProduct.accentColor}10`
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: currentProduct.accentColor }}
                      ></span>
                      AUTHENTIC WORKFLOW
                    </span>
                  </div>

                  {/* Simulated Metrics Strip */}
                  <div className="grid grid-cols-3 gap-3">
                    {currentProduct.previewUI.metrics.map((m, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1 transition-all"
                      >
                        <div className="text-[10px] font-mono text-slate-400">{m.label}</div>
                        <div className="text-sm font-bold text-white">{m.val}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Simulated UI Content Activity Box */}
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-slate-400 text-[10px]">
                      <span>SYSTEM ARCHITECTURE STREAM</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        LIVE INSTANCE
                      </span>
                    </div>

                    {/* Product-Specific Live Simulation Stream */}
                    {currentProduct.previewUI.type === "interview" && (
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between text-[11px] text-slate-300">
                          <span>Speech Signal Analysis:</span>
                          <div className="flex items-center gap-1 h-3">
                            {[40, 85, 60, 95, 30, 75, 90, 45, 80, 55].map((h, i) => (
                              <motion.span
                                key={i}
                                animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.5}%`] }}
                                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                className="w-1 bg-[#02A4EF] rounded-full inline-block"
                                style={{ height: `${h}%` }}
                              ></motion.span>
                            ))}
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-400">✓ Technical domain competency verified against role rubric</div>
                      </div>
                    )}

                    {currentProduct.previewUI.type === "medtriage" && (
                      <div className="space-y-2 pt-1 relative overflow-hidden">
                        <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-y-0 w-1/3 bg-[#F25022] rounded-full"
                          ></motion.div>
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-300">
                          <span>DICOM Telemetry Scan:</span>
                          <span className="text-[#F25022]">HIPAA Guardrail Active</span>
                        </div>
                      </div>
                    )}

                    {currentProduct.previewUI.type === "proposal" && (
                      <div className="space-y-2 pt-1">
                        <div className="flex justify-between text-[11px] text-slate-300">
                          <span>RAG Vector Search Lookup:</span>
                          <span className="text-[#80BA01]">42 Clauses Verified</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "98.4%" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full bg-[#80BA01] rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    )}

                    {currentProduct.previewUI.type === "transcript" && (
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between text-[11px] text-slate-300">
                          <span>Multi-Speaker Diarization:</span>
                          <span className="text-[#FFB902]">4 Speakers Active</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {["Spk 1", "Spk 2", "Spk 3", "Spk 4"].map((spk, idx) => (
                            <div
                              key={idx}
                              className="p-1.5 rounded bg-white/5 border border-white/10 text-center text-[10px] text-slate-300 flex items-center justify-center gap-1"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB902]"></span>
                              <span>{spk}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-1.5 text-[11px] border-t border-white/5 pt-2">
                      <div className="text-slate-300">✓ System pipeline initialized for {currentProduct.name}</div>
                      <div className="text-slate-400">✓ Role-based access control & isolated environment</div>
                      <div
                        className="font-bold pt-1 flex items-center gap-1.5"
                        style={{ color: currentProduct.accentColor }}
                      >
                        <span>✓ Status: Ready for enterprise integration</span>
                      </div>
                    </div>
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

export default Products;



