import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, ArrowUp, Lock, FileText, Mail, Phone, MapPin } from "lucide-react";

export const Privacy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
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
      
      {/* Top Reading Progress Bar */}
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
              Privacy Policy
            </h1>
            <p className="font-mono text-xs text-[#a1a1a1]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Legal Reader Grid (Sticky Table of Contents + Legal Reader) */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Sticky Table of Contents Sidebar */}
            <div className="hidden lg:block lg:col-span-4 sticky top-36 space-y-2 bg-[#131313]/90 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl">
              <div className="text-[10px] font-mono text-[#6b6b6b] uppercase tracking-[0.2em] mb-2 font-bold">
                Table of Contents
              </div>
              <a
                href="#intro"
                className="block text-xs font-mono py-1.5 px-3 rounded hover:bg-white/5 text-[#a1a1a1] hover:text-white transition-colors"
              >
                1. Introduction
              </a>
              <a
                href="#collect"
                className="block text-xs font-mono py-1.5 px-3 rounded hover:bg-white/5 text-[#a1a1a1] hover:text-white transition-colors"
              >
                2. Information We Collect
              </a>
              <a
                href="#use"
                className="block text-xs font-mono py-1.5 px-3 rounded hover:bg-white/5 text-[#a1a1a1] hover:text-white transition-colors"
              >
                3. How We Use Information
              </a>
              <a
                href="#contact-info"
                className="block text-xs font-mono py-1.5 px-3 rounded hover:bg-white/5 text-[#a1a1a1] hover:text-white transition-colors"
              >
                4. Contact Information
              </a>
            </div>

            {/* Authoritative Legal Content Reader */}
            <div className="lg:col-span-8 font-sans text-sm text-[#a1a1a1] space-y-10 leading-relaxed">
              
              <section id="intro" className="space-y-3 bg-[#131313]/60 p-6 rounded-2xl border border-white/10">
                <h2 className="font-display text-xl font-bold uppercase text-white">1. Introduction</h2>
                <p>
                  Grevya Technologies Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our enterprise AI services.
                </p>
              </section>

              <section id="collect" className="space-y-4 bg-[#131313]/60 p-6 rounded-2xl border border-white/10">
                <h2 className="font-display text-xl font-bold uppercase text-white">2. Information We Collect</h2>
                
                <div className="space-y-2">
                  <h3 className="font-display text-base font-semibold text-slate-200">2.1 Personal Information</h3>
                  <p>
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#a1a1a1]">
                    <li>Register for an account or use our services</li>
                    <li>Contact us through our website or email</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Apply for a job or submit a resume</li>
                    <li>Request a demo or technical consultation</li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-display text-base font-semibold text-slate-200">2.2 Automatically Collected Information</h3>
                  <p>
                    When you visit our website, we may automatically collect certain information about your device, including IP address, browser type, operating system, and usage telemetry.
                  </p>
                </div>
              </section>

              <section id="use" className="space-y-3 bg-[#131313]/60 p-6 rounded-2xl border border-white/10">
                <h2 className="font-display text-xl font-bold uppercase text-white">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#a1a1a1]">
                  <li>Provide, maintain, and improve our enterprise AI services</li>
                  <li>Process your technical inquiries and solution requests</li>
                  <li>Send administrative notices, updates, and security alerts</li>
                  <li>Respond to support inquiries and career applications</li>
                </ul>
              </section>

              <section id="contact-info" className="space-y-3 bg-[#131313] p-6 rounded-2xl border border-white/10">
                <h2 className="font-display text-xl font-bold uppercase text-white">4. Contact Us</h2>
                <div className="font-mono text-xs text-[#a1a1a1] space-y-2 pt-2">
                  <p className="font-bold text-white font-sans text-sm">Grevya Technologies Pvt Ltd</p>
                  <p>4th South Cross St., Kovai Thiru Nagar,</p>
                  <p>Kalapatty (E), Coimbatore 641014, India</p>
                  <p>Email: <a href="mailto:privacy@grevya.com" className="text-[#f97316] hover:underline">privacy@grevya.com</a></p>
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

export default Privacy;
