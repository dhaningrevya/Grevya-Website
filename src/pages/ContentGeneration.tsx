import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AcceleratorLayout, { type AcceleratorCopy } from "@/components/AcceleratorLayout";
import { Layers, Shield, Cpu, Activity, Rocket } from "lucide-react";

const copy: AcceleratorCopy = {
  badge: "AI Content Engine Accelerator",
  title: "Automate complex RFP & Commercial",
  titleHighlight: "Proposal Generation",
  tagline: "Ingest client requirements and query internal knowledge bases to draft winning proposals.",
  subhead: "Grevya's Content Engine extracts requirements from multi-page RFPs, retrieves verified technical specs, and drafts compliant proposals in minutes.",
  heroBullets: ["RFP Matrix Parsing", "RAG Knowledge Retrieval", "Compliance Verification", "Multi-Format Export"],
  problems: [
    { icon: Layers, title: "Manual RFP Drafting", body: "Engineering and sales teams spend 30+ hours per bid copy-pasting technical specs." }
  ],
  solutionTitle: "Automated RFP & Document Generation Engine",
  solutionBody: "Combine vector search, structured document templates, and LLM drafting to produce tailored proposals fast.",
  solutionBullets: ["Automatic RFP requirement extraction", "Knowledge retrieval integration", "Human approval workflows"],
  features: [
    { icon: Cpu, title: "RAG Retrieval", body: "Retrieve technical specs and pricing matrices from your internal vector database." }
  ],
  useCases: [
    { industry: "Commercial Automation", title: "Enterprise RFP Bidding", body: "Cut proposal turnaround time from 2 weeks to 2 hours." }
  ],
  differentiators: [
    { icon: Rocket, title: "Turnkey Integration", body: "Connects to Notion, Confluence, SharePoint, and Google Drive." }
  ],
  roadmap: [
    { phase: "Phase 1", duration: "Week 1", title: "Knowledge Base Indexing", body: "Vectorize past proposals, product specs, and pricing guidelines." }
  ],
  gradient: "from-amber-50 via-orange-50 to-red-100"
};

const ContentGenerationPage = () => (
  <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
    <Navigation />
    <main id="main-content">
      <AcceleratorLayout copy={copy} />
    </main>
    <Footer />
  </div>
);

export default ContentGenerationPage;
