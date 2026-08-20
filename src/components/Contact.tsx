
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, Phone, Clock, Send, Loader2, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Contact = () => {
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
    <section id="contact" className="py-24 sm:py-32 section-dark-obsidian relative overflow-hidden border-t border-white/10">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-40 pointer-events-none"></div>

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
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Architect Your AI Infrastructure With Us
          </h2>
          <p className="text-[#697078] text-lg leading-relaxed font-normal">
            Schedule a technical consultation or submit your project scope to connect directly with Grevya software architects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 glass-dark-architectural rounded-2xl p-8 sm:p-10 border border-white/10 bg-[#111418]/90 shadow-2xl space-y-6"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="p-3 rounded-xl bg-[#02A4EF]/10 border border-[#02A4EF]/20 text-[#02A4EF]">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Send Us a Direct Message</h3>
                <p className="text-xs text-slate-400 font-mono">Direct Engineering Inquiry</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-xs font-mono font-semibold text-slate-300 mb-2 block">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white rounded-xl h-12 text-sm focus:border-[#02A4EF]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs font-mono font-semibold text-slate-300 mb-2 block">Work Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white rounded-xl h-12 text-sm focus:border-[#02A4EF]"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="text-xs font-mono font-semibold text-slate-300 mb-2 block">Company / Organization</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white rounded-xl h-12 text-sm focus:border-[#02A4EF]"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-xs font-mono font-semibold text-slate-300 mb-2 block">Project Details & Scope</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="bg-white/5 border-white/10 text-white rounded-xl text-sm focus:border-[#02A4EF] resize-none p-4"
                  placeholder="Describe your AI software project, pilot scope, or timeline..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#02A4EF] hover:bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wide py-6 rounded-xl shadow-lg transition-all interaction-lift"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Technical Scope
                    </>
                  )}
                </span>
              </Button>
            </form>
          </motion.div>

          {/* Right Direct Info & Consultation */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Consultation Card */}
            <div className="glass-dark-architectural rounded-2xl p-8 border border-white/10 bg-[#111418] shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#02A4EF]/10 border border-[#02A4EF]/20 text-[#02A4EF]">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Book Architecture Consultation</h3>
                  <p className="text-xs font-mono text-slate-400">Engineering Feasibility Audit</p>
                </div>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                Discuss system feasibility, model selection, vector database requirements, and pilot deployment timelines directly with software architects.
              </p>

              <Button
                onClick={() => {
                  const subject = encodeURIComponent("Technical Consultation Request");
                  const body = encodeURIComponent("Hi Grevya engineering team,\n\nI would like to schedule a technical consultation call.\n\nThanks!");
                  window.location.href = `mailto:info@grevya.com?subject=${subject}&body=${body}`;
                }}
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/15 font-bold text-xs uppercase tracking-wide py-5 rounded-xl interaction-lift"
              >
                Schedule Consultation Call
              </Button>

              <div className="space-y-2 pt-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#02A4EF]" />
                  <span>Strict Data Privacy Principles</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#02A4EF]" />
                  <span>Direct Technical Review</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="glass-dark-architectural rounded-2xl p-6 border border-white/10 bg-[#111418] space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#02A4EF]" />
                Direct Corporate Communication
              </h4>

              <div className="space-y-2.5 font-mono text-xs">
                <a
                  href="mailto:info@grevya.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#02A4EF]/40 transition-all text-slate-200"
                >
                  <Mail className="h-4 w-4 text-[#02A4EF]" />
                  <span>info@grevya.com</span>
                </a>
                <a
                  href="tel:+916381734688"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#02A4EF]/40 transition-all text-slate-200"
                >
                  <Phone className="h-4 w-4 text-[#02A4EF]" />
                  <span>+91 6381734688</span>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-slate-400">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span>Direct Engineering Review</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;




