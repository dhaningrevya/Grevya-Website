import React, { useState } from "react";
import { Mail, Phone, Clock, Send, Loader2, ShieldCheck, MapPin, Calendar, ArrowRight, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import ReusableCard from "@/components/primitives/ReusableCard";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const projectTypes = [
  "Agentic AI",
  "RAG / Knowledge Systems",
  "Data Intelligence",
  "AI Content Systems",
  "AI Automation",
  "Custom AI Product",
];

const engagementModels = [
  "Discovery",
  "Technical Consultation",
  "Pilot",
  "Full Product Development",
];

export const Contact: React.FC = () => {
  const [selectedProjectType, setSelectedProjectType] = useState<string>("Agentic AI");
  const [selectedEngagement, setSelectedEngagement] = useState<string>("Technical Consultation");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<"idle" | "transmitting" | "success" | "error">("idle");
  const [referenceId, setReferenceId] = useState<string>("");
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionState("transmitting");

    const generatedRefId = `GREVYA-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
        const subject = encodeURIComponent(`Technical Consultation Request (${selectedProjectType}) from ${formData.name}`);
        const body = encodeURIComponent(
          `Reference ID: ${generatedRefId}\nProject Type: ${selectedProjectType}\nEngagement Model: ${selectedEngagement}\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\n\nProject Scope:\n${formData.message}`
        );
        window.location.href = `mailto:info@grevya.com?subject=${subject}&body=${body}`;
        
        setReferenceId(generatedRefId);
        setSubmissionState("success");
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          project_type: selectedProjectType,
          engagement_model: selectedEngagement,
          message: formData.message,
          ref_id: generatedRefId,
          to_email: 'info@grevya.com',
        },
        publicKey
      );

      setReferenceId(generatedRefId);
      setSubmissionState("success");
      toast({
        title: "Technical Consultation Queued",
        description: `Reference ID: ${generatedRefId}. Our engineering leads will reach out within 24 hours.`,
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmissionState("error");
      toast({
        title: "Submission Error",
        description: "Failed to queue request via automated email. Please try again or email info@grevya.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative overflow-hidden select-none border-t border-white/10">
      {/* Background Atmosphere Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-[#f97316]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-12 sm:space-y-16">
        
        {/* Header */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <Eyebrow index="009" label="INITIATE TECHNICAL CONSULTATION & PILOT SCOPE" />
            <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95] break-words">
              LET'S BUILD YOUR <br />
              <GradientText className="inline">AI ARCHITECTURE</GradientText>
            </h2>
            <p className="font-sans text-[#a1a1a1] text-sm sm:text-xl font-normal leading-relaxed max-w-2xl">
              Configure your technical scope below to connect directly with Grevya software architects.
            </p>
          </div>
        </RevealOnScroll>

        {/* Technical Consultation Intake Workspace */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Intake Workspace Form Column */}
          <RevealOnScroll delay={0.2} direction="up" className="lg:col-span-8">
            <ReusableCard
              variant="elevated"
              className="p-5 sm:p-10 border-white/10 bg-[#131313]/95 shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden"
            >
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316]">
                    <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-bold uppercase text-white tracking-wide">
                      Technical Intake Console
                    </h3>
                    <p className="text-[10px] sm:text-xs font-mono text-[#a1a1a1]">
                      Direct Architect Queue
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] text-emerald-400 font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  READY
                </div>
              </div>

              {/* In-Page Success State */}
              {submissionState === "success" ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#1a1a1a] border border-emerald-500/30 text-center space-y-4 font-mono">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] sm:text-xs text-emerald-400 font-bold uppercase tracking-widest">
                      REQUEST RECEIVED — TECHNICAL REVIEW QUEUED
                    </div>
                    <h4 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                      Reference ID: {referenceId}
                    </h4>
                    <p className="font-sans text-xs text-[#a1a1a1] max-w-lg mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your technical scope for <strong className="text-[#f97316]">{selectedProjectType}</strong> ({selectedEngagement}) has been queued. A Grevya software architect will review your parameters within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmissionState("idle");
                      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#131313] border border-white/10 text-xs text-slate-300 hover:text-white hover:border-white/20 transition-all"
                  >
                    <span>Configure Another Scope</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 relative z-10 font-sans text-xs">
                  
                  {/* STEP 01: WHAT ARE YOU BUILDING? */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-[11px] sm:text-xs font-bold text-[#f97316] uppercase tracking-[0.15em]">
                        STEP 01 / WHAT ARE YOU BUILDING?
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = selectedProjectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setSelectedProjectType(type)}
                            className={`px-3 py-2 rounded-xl text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider border transition-all duration-200 focus:outline-none ${
                              isSelected
                                ? "bg-[#f97316] border-[#f97316] text-white shadow-md"
                                : "bg-[#1a1a1a] border-white/10 text-[#a1a1a1] hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 02: WHAT ARE YOU TRYING TO SOLVE? */}
                  <div className="space-y-2 text-left">
                    <div className="flex items-center justify-between font-mono">
                      <label htmlFor="message" className="text-[11px] sm:text-xs font-bold text-[#f97316] uppercase tracking-[0.15em]">
                        STEP 02 / PROJECT DETAILS & TECHNICAL SCOPE *
                      </label>
                      <span className="text-[9px] text-[#6b6b6b]">
                        {formData.message.length} CHARS
                      </span>
                    </div>

                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] resize-none transition-all"
                        placeholder="Describe your AI software requirements, data sources, model latency preferences, or deployment timelines..."
                      />
                    </div>
                  </div>

                  {/* STEP 03: ABOUT YOU */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-[#f97316] uppercase tracking-[0.15em]">
                      STEP 03 / ABOUT YOU
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1 text-left">
                        <label htmlFor="name" className="font-mono text-[9px] sm:text-[10px] text-[#a1a1a1] uppercase">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                        />
                      </div>

                      <div className="space-y-1 text-left">
                        <label htmlFor="email" className="font-mono text-[9px] sm:text-[10px] text-[#a1a1a1] uppercase">Work Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1 text-left">
                        <label htmlFor="company" className="font-mono text-[9px] sm:text-[10px] text-[#a1a1a1] uppercase">Company / Organization</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enterprise Name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                        />
                      </div>

                      <div className="space-y-1 text-left">
                        <label htmlFor="phone" className="font-mono text-[9px] sm:text-[10px] text-[#a1a1a1] uppercase">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-xs focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* STEP 04: ENGAGEMENT MODEL */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-[#f97316] uppercase tracking-[0.15em]">
                      STEP 04 / ENGAGEMENT MODEL
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {engagementModels.map((model) => {
                        const isSelected = selectedEngagement === model;
                        return (
                          <button
                            type="button"
                            key={model}
                            onClick={() => setSelectedEngagement(model)}
                            className={`px-3 py-2 rounded-xl text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider border transition-all duration-200 focus:outline-none ${
                              isSelected
                                ? "bg-[#f97316] border-[#f97316] text-white shadow-md"
                                : "bg-[#1a1a1a] border-white/10 text-[#a1a1a1] hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {model}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] shadow-accent-glow transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Transmitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Initiate Technical Review</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </ReusableCard>
          </RevealOnScroll>

          {/* Right Direct Communication Column */}
          <RevealOnScroll delay={0.3} direction="up" className="lg:col-span-4 space-y-6">
            <ReusableCard variant="elevated" className="p-5 sm:p-8 border-white/10 bg-[#131313]/95 shadow-2xl space-y-5">
              <div className="space-y-1 border-b border-white/10 pb-3.5">
                <span className="text-[10px] font-mono text-[#f97316] font-bold uppercase tracking-wider">DIRECT CONTACT</span>
                <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-white">Engineering HQ</h4>
              </div>

              <div className="space-y-3.5 font-mono text-xs text-[#a1a1a1]">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-bold font-sans text-xs">Grevya Technologies Pvt Ltd</div>
                    <div className="text-[11px] leading-tight mt-0.5">4th South Cross St., Kovai Thiru Nagar, Kalapatty (E), Coimbatore 641014, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#f97316] flex-shrink-0" />
                  <a href="mailto:info@grevya.com" className="text-white hover:text-[#f97316] transition-colors text-xs">
                    info@grevya.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#f97316] flex-shrink-0" />
                  <a href="tel:+916381734688" className="text-white hover:text-[#f97316] transition-colors text-xs">
                    +91 6381734688
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-1 font-mono text-[10px]">
                <div className="text-[#6b6b6b] uppercase">Guaranteed Review SLA</div>
                <div className="text-emerald-400 font-bold">24-Hour Architect Response</div>
              </div>
            </ReusableCard>
          </RevealOnScroll>

        </div>

      </div>
    </section>
  );
};

export default Contact;
