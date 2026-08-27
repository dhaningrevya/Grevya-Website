import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, ArrowUp, FileText, Mail, Phone, MapPin } from "lucide-react";

export const Terms: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] selection:bg-[#f97316]/30 selection:text-white">
      
      {/* Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#f97316] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navigation />

      <main id="main-content" className="pt-32 sm:pt-40 pb-24">
        <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-8 space-y-3">
            <span className="text-xs font-mono text-[#f97316] uppercase tracking-[0.2em] font-bold">
              LEGAL & COMPLIANCE
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="font-mono text-xs text-[#a1a1a1]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Legal Reader Grid (Sticky Table of Contents + Authoritative Legal Content Reader) */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Table of Contents */}
            <div className="hidden lg:block lg:col-span-4 sticky top-36 space-y-2 bg-[#131313]/90 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl">
              <div className="text-[10px] font-mono text-[#6b6b6b] uppercase tracking-[0.2em] mb-2 font-bold">
                Table of Contents
              </div>
              <a
                href="#terms-agree"
                className="block text-xs font-mono py-1.5 px-3 rounded hover:bg-white/5 text-[#a1a1a1] hover:text-white transition-colors"
              >
                1. Agreement to Terms
              </a>
              <a
                href="#services-desc"
                className="block text-xs font-mono py-1.5 px-3 rounded hover:bg-white/5 text-[#a1a1a1] hover:text-white transition-colors"
              >
                2. Description of Services
              </a>
              <a
                href="#intellectual-prop"
                className="block text-xs font-mono py-1.5 px-3 rounded hover:bg-white/5 text-[#a1a1a1] hover:text-white transition-colors"
              >
                3. Intellectual Property
              </a>
              <a
                href="#contact-info"
                className="block text-xs font-mono py-1.5 px-3 rounded hover:bg-white/5 text-[#a1a1a1] hover:text-white transition-colors"
              >
                4. Contact Information
              </a>
            </div>

            {/* Authoritative Content Reader */}
            <div className="lg:col-span-8 font-sans text-sm text-[#a1a1a1] space-y-10 leading-relaxed">
              
              <section id="terms-agree" className="space-y-3 bg-[#131313]/60 p-6 rounded-2xl border border-white/10">
                <h2 className="font-display text-xl font-bold uppercase text-white">1. Agreement to Terms</h2>
                <p>
                  By accessing or using the services provided by Grevya Technologies Pvt Ltd ("Grevya," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms").
                </p>
              </section>

              <section id="services-desc" className="space-y-3 bg-[#131313]/60 p-6 rounded-2xl border border-white/10">
                <h2 className="font-display text-xl font-bold uppercase text-white">2. Description of Services</h2>
                <p>
                  Grevya provides enterprise AI, machine learning, and automation solutions, including agentic AI engines, RAG knowledge systems, data analytics pipelines, and custom software engineering.
                </p>
              </section>

              <section id="intellectual-prop" className="space-y-3 bg-[#131313]/60 p-6 rounded-2xl border border-white/10">
                <h2 className="font-display text-xl font-bold uppercase text-white">3. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services, including software code, architecture patterns, logos, and documentation, are owned by Grevya Technologies Pvt Ltd and protected by intellectual property laws.
                </p>
              </section>

              <section id="contact-info" className="space-y-3 bg-[#131313] p-6 rounded-2xl border border-white/10">
                <h2 className="font-display text-xl font-bold uppercase text-white">4. Contact Information</h2>
                <div className="font-mono text-xs text-[#a1a1a1] space-y-2 pt-2">
                  <p className="font-bold text-white font-sans text-sm">Grevya Technologies Pvt Ltd</p>
                  <p>4th South Cross St., Kovai Thiru Nagar,</p>
                  <p>Kalapatty (E), Coimbatore 641014, India</p>
                  <p>Email: <a href="mailto:legal@grevya.com" className="text-[#f97316] hover:underline">legal@grevya.com</a></p>
                  <p>Phone: <a href="tel:+916381734688" className="text-[#f97316] hover:underline">+91 6381734688</a></p>
                </div>
              </section>

            </div>

          </div>

          {/* Back To Top Floating Action */}
          <div className="flex justify-end pt-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#131313] border border-white/10 text-xs font-mono font-bold text-slate-300 hover:text-white hover:border-white/20 transition-all"
            >
              <ArrowUp className="h-4 w-4" />
              <span>Back to top</span>
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
