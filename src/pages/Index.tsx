import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/motion/Marquee";

const trustTickerItems1 = [
  "AGENTIC AI WORKFLOWS",
  "ENTERPRISE LLM GUARDRAILS",
  "DETERMINISTIC CODE ROI",
  "RAG KNOWLEDGE ENGINES",
  "SCALABLE CLOUD INFRASTRUCTURE",
];

const trustTickerItems2 = [
  "DATA ANALYTICS ENGINES",
  "PREDICTIVE ML PIPELINES",
  "ENTERPRISE LLM GUARDRAILS",
  "CLOUD MICROSERVICES",
  "AUTOMATED DICOM TRIAGE",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] selection:bg-[#f97316]/30 selection:text-white font-sans antialiased">
      <Navigation />
      <main id="main-content" className="relative z-10">
        <Hero />
        <Marquee items={trustTickerItems1} direction="left" speed="medium" />
        <About />
        <Marquee items={trustTickerItems2} direction="right" speed="medium" />
        <Products />
        <WhyChooseUs />
        <Industries />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
