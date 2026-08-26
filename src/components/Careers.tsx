import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Sparkles, 
  Send, 
  Loader2,
  Heart,
  Coffee,
  GraduationCap,
  Zap,
  Rocket,
  Target,
  Code
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import ReusableCard from "@/components/primitives/ReusableCard";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    coverLetter: ''
  });
  const { toast } = useToast();

  const jobs = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI/ML solutions, work with advanced algorithms, and mentor junior engineers in a fast-paced environment.",
      techStack: ["Python", "LLMs", "LangChain", "RAG", "TensorFlow", "PyTorch", "AWS"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications and SaaS platforms using modern technologies. Work on both frontend and backend development with focus on performance.",
      techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
      id: 3,
      title: "AI Product Manager",
      department: "Product",
      location: "Remote / India",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive product strategy and roadmap for AI-powered solutions. Collaborate with engineering, design, and business teams to deliver innovative products.",
      techStack: ["Product Strategy", "AI/ML", "Agile", "Analytics", "Roadmapping"],
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Data Science",
      location: "Remote / India",
      type: "Full-time",
      experience: "3+ years",
      description: "Analyze complex datasets, build predictive models, and provide data-driven insights to drive business decisions and product improvements.",
      techStack: ["Python", "R", "SQL", "MLOps", "TensorFlow", "Pandas", "NumPy"],
    }
  ];

  const whyWorkAtGrevya = [
    {
      icon: Rocket,
      title: "Real AI Systems",
      description: "Work on production AI systems that power real businesses, not demos or prototypes.",
    },
    {
      icon: Code,
      title: "Agentic AI & RAG",
      description: "Build next-generation AI agents and RAG systems. Work with LLMs and vector databases.",
    },
    {
      icon: Target,
      title: "Ownership & Speed",
      description: "Own your projects end-to-end. Move fast, ship often, and see direct client impact.",
    },
    {
      icon: Zap,
      title: "Enterprise Deployments",
      description: "Deploy AI solutions at scale for enterprise clients. Work on systems handling critical operations.",
    }
  ];

  const handleJobClick = (jobId: number) => {
    setSelectedJob(jobId);
    const job = jobs.find(j => j.id === jobId);
    if (job) {
      setApplicationData(prev => ({ ...prev, position: job.title }));
    }
    setTimeout(() => {
      const formElement = document.getElementById('application-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
        const subject = encodeURIComponent(`Job Application: ${applicationData.position}`);
        const body = encodeURIComponent(
          `Name: ${applicationData.name}\nEmail: ${applicationData.email}\nPhone: ${applicationData.phone}\nPosition: ${applicationData.position}\n\nCover Letter:\n${applicationData.coverLetter}\n\nResume Link: ${applicationData.resume}`
        );
        window.location.href = `mailto:careers@grevya.com?subject=${subject}&body=${body}`;
        
        toast({
          title: "Opening email client...",
          description: "Please send your application from your email client.",
        });
        setApplicationData({ name: '', email: '', phone: '', position: '', resume: '', coverLetter: '' });
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: applicationData.name,
          from_email: applicationData.email,
          phone: applicationData.phone,
          position: applicationData.position,
          resume: applicationData.resume,
          cover_letter: applicationData.coverLetter,
          to_email: 'careers@grevya.com',
          subject: `Job Application: ${applicationData.position}`
        },
        publicKey
      );

      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon.",
      });
      setApplicationData({ name: '', email: '', phone: '', position: '', resume: '', coverLetter: '' });
      setSelectedJob(null);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Failed to submit application",
        description: "Please try again or email us directly at careers@grevya.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#f97316]/10 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#131313] border border-white/10 text-xs font-mono font-semibold uppercase tracking-[0.15em] text-[#f97316]">
            <Sparkles className="h-4 w-4" />
            <span>Join the AI Revolution</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase text-white tracking-tight leading-tight">
            Careers at <GradientText className="inline">Grevya</GradientText>
          </h1>
          
          <p className="font-sans text-lg sm:text-2xl text-[#a1a1a1] max-w-3xl mx-auto font-normal leading-relaxed">
            Build production AI systems that power real enterprise operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button 
              onClick={() => {
                const el = document.getElementById('open-positions');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-accent-glow"
            >
              <span>View Open Roles</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Work at Grevya */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <Eyebrow label="WHY JOIN GREVYA" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white">
              Why Work at Grevya?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkAtGrevya.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ReusableCard key={idx} variant="elevated" className="p-6 border-white/10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center text-[#f97316]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-white">{item.title}</h3>
                  <p className="font-sans text-sm text-[#a1a1a1] leading-relaxed">{item.description}</p>
                </ReusableCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-[#131313] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <Eyebrow label="CURRENT OPENINGS" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white">
              Open Positions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {jobs.map((job) => (
              <ReusableCard 
                key={job.id} 
                variant="elevated" 
                hoverable
                className="p-8 border-white/10 space-y-6 cursor-pointer"
                onClick={() => handleJobClick(job.id)}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] font-mono text-xs font-bold uppercase">
                    {job.type}
                  </span>
                  <span className="text-xs font-mono text-[#a1a1a1]">{job.location}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-[#f97316] transition-colors">
                    {job.title}
                  </h3>
                  <p className="font-sans text-sm text-[#a1a1a1] leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {job.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-[#1a1a1a] border border-white/10 text-xs font-mono text-[#a1a1a1]">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 rounded-full bg-[#1a1a1a] hover:bg-[#f97316] text-white font-sans text-xs font-bold uppercase tracking-[0.15em] border border-white/10 hover:border-[#f97316] transition-all">
                  Apply for Role →
                </button>
              </ReusableCard>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-[24px] bg-[#131313] border border-white/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <Send className="h-6 w-6 text-[#f97316]" />
              <h2 className="font-display text-2xl font-bold uppercase text-white">Apply for Position</h2>
            </div>

            <form onSubmit={handleApplicationSubmit} className="space-y-6 font-sans">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-xs font-mono uppercase tracking-[0.15em] text-[#a1a1a1] mb-2 block">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12 bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-[#f97316]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs font-mono uppercase tracking-[0.15em] text-[#a1a1a1] mb-2 block">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-[#f97316]"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-xs font-mono uppercase tracking-[0.15em] text-[#a1a1a1] mb-2 block">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                    className="h-12 bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-[#f97316]"
                    placeholder="+91 95669 66064"
                  />
                </div>
                <div>
                  <Label htmlFor="position" className="text-xs font-mono uppercase tracking-[0.15em] text-[#a1a1a1] mb-2 block">Position Applied For *</Label>
                  <Input
                    id="position"
                    name="position"
                    value={applicationData.position}
                    onChange={handleInputChange}
                    required
                    className="h-12 bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-[#f97316]"
                    placeholder="Senior AI/ML Engineer"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="resume" className="text-xs font-mono uppercase tracking-[0.15em] text-[#a1a1a1] mb-2 block">Resume / Portfolio Link *</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="url"
                  value={applicationData.resume}
                  onChange={handleInputChange}
                  required
                  className="h-12 bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-[#f97316]"
                  placeholder="https://linkedin.com/in/profile or Google Drive link"
                />
              </div>

              <div>
                <Label htmlFor="coverLetter" className="text-xs font-mono uppercase tracking-[0.15em] text-[#a1a1a1] mb-2 block">Cover Note *</Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={applicationData.coverLetter}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="bg-[#1a1a1a] border-white/10 text-white focus-visible:ring-2 focus-visible:ring-[#f97316] resize-none"
                  placeholder="Tell us about your background with production AI systems..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-accent-glow disabled:opacity-50"
              >
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
