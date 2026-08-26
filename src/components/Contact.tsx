import React, { useState } from "react";
import { Mail, Phone, Clock, Send, Loader2, ShieldCheck, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import GhostNumeral from "@/components/primitives/GhostNumeral";
import ReusableCard from "@/components/primitives/ReusableCard";
import Pill from "@/components/primitives/Pill";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
        const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:info@grevya.com?subject=${subject}&body=${body}`;
        
        toast({
          title: "Opening email client...",
          description: "Please send the pre-filled message from your email client.",
        });
        setFormData({ name: '', email: '', company: '', message: '' });
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
          message: formData.message,
          to_email: 'info@grevya.com',
        },
        publicKey
      );

      toast({
        title: "Message sent successfully!",
        description: "Our engineering team will review your inquiry promptly.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly at info@grevya.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative overflow-hidden border-t border-white/10">
      {/* Background Atmosphere Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-[#f97316]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 z-10 w-full space-y-16">
        
        {/* Wayfinding Header */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="max-w-3xl space-y-4">
            <Eyebrow index="006" label="INITIATE TECHNICAL CONSULTATION & PILOT SCOPE" />
            <h2 className="font-display text-4xl sm:text-6xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95]">
              LET'S BUILD YOUR <br />
              <GradientText className="inline">AI ARCHITECTURE</GradientText>
            </h2>
            <p className="font-sans text-[#a1a1a1] text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
              Schedule a technical consultation or submit your project scope to connect directly with Grevya software architects.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Form Column */}
          <RevealOnScroll delay={0.2} direction="up" className="lg:col-span-7">
            <ReusableCard
              variant="elevated"
              className="p-8 sm:p-10 border-white/10 bg-[#131313]/90 shadow-2xl space-y-8 relative overflow-hidden"
            >
              <GhostNumeral
                numeral="06"
                className="absolute -right-4 -top-8 text-white/[0.04] pointer-events-none"
              />

              <div className="flex items-center gap-3.5 pb-6 border-b border-white/10 relative z-10">
                <div className="p-3 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold uppercase text-white tracking-wide">
                    Direct Technical Inquiry
                  </h3>
                  <p className="text-xs font-mono text-[#a1a1a1]">
                    Submit your project parameters for review
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#a1a1a1] block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#1a1a1a] border-white/10 text-white rounded-xl h-12 text-sm focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#a1a1a1] block">
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#1a1a1a] border-white/10 text-white rounded-xl h-12 text-sm focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#a1a1a1] block">
                    Company / Organization
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-white/10 text-white rounded-xl h-12 text-sm focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]"
                    placeholder="Enterprise Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-[#a1a1a1] block">
                    Project Details & Technical Scope *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-[#1a1a1a] border-white/10 text-white rounded-xl text-sm focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] resize-none p-4"
                    placeholder="Describe your AI software requirements, data sources, vector DB preferences, or deployment timelines..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-sans font-bold uppercase tracking-[0.2em] shadow-lg transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Technical Scope</span>
                    </>
                  )}
                </button>
              </form>
            </ReusableCard>
          </RevealOnScroll>

          {/* Right Direct Communication & Callout */}
          <RevealOnScroll delay={0.3} direction="up" className="lg:col-span-5 space-y-6">
            
            {/* Consultation Card */}
            <ReusableCard
              variant="elevated"
              className="p-8 border-white/10 bg-[#131313]/90 shadow-2xl space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316]">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold uppercase text-white tracking-wide">
                    Schedule Architecture Call
                  </h3>
                  <p className="text-xs font-mono text-[#a1a1a1]">
                    1-on-1 Feasibility Review
                  </p>
                </div>
              </div>

              <p className="font-sans text-[#a1a1a1] text-xs leading-relaxed">
                Discuss system feasibility, model selection, vector database requirements, and pilot deployment timelines directly with Grevya software architects.
              </p>

              <button
                onClick={() => {
                  const subject = encodeURIComponent("Technical Consultation Request");
                  const body = encodeURIComponent("Hi Grevya engineering team,\n\nI would like to schedule a technical consultation call.\n\nThanks!");
                  window.location.href = `mailto:info@grevya.com?subject=${subject}&body=${body}`;
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#1a1a1a] hover:bg-[#222] border border-white/15 text-xs font-sans font-bold uppercase tracking-[0.15em] text-white hover:text-[#f97316] transition-colors"
              >
                <span>Schedule Consultation Call</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#f97316]" />
                  <span>Strict Data Privacy Principles</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#f97316]" />
                  <span>Direct Engineering Review</span>
                </div>
              </div>
            </ReusableCard>

            {/* Direct Communication Channels */}
            <ReusableCard
              variant="elevated"
              className="p-6 border-white/10 bg-[#131313]/90 space-y-4"
            >
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#f97316]" />
                Direct Channels
              </h4>

              <div className="space-y-2.5 font-mono text-xs">
                <a
                  href="mailto:info@grevya.com"
                  className="flex items-center gap-3 p-3.5 rounded-[10px] bg-[#1a1a1a] border border-white/10 hover:border-[#f97316]/50 transition-colors text-slate-200"
                >
                  <Mail className="h-4 w-4 text-[#f97316]" />
                  <span>info@grevya.com</span>
                </a>
                <a
                  href="tel:+916381734688"
                  className="flex items-center gap-3 p-3.5 rounded-[10px] bg-[#1a1a1a] border border-white/10 hover:border-[#f97316]/50 transition-colors text-slate-200"
                >
                  <Phone className="h-4 w-4 text-[#f97316]" />
                  <span>+91 6381734688</span>
                </a>
                <div className="flex items-start gap-3 p-3.5 rounded-[10px] bg-[#1a1a1a] border border-white/10 text-slate-400">
                  <MapPin className="h-4 w-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">
                    4th South Cross St., Kovai Thiru Nagar, Kalapatty (E), Coimbatore 641014
                  </span>
                </div>
              </div>
            </ReusableCard>

          </RevealOnScroll>

        </div>

      </div>
    </section>
  );
};

export default Contact;
