
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
      description: "Lead the development of cutting-edge AI/ML solutions, work with advanced algorithms, and mentor junior engineers in a fast-paced, innovative environment.",
      techStack: ["Python", "LLMs", "LangChain", "RAG", "TensorFlow", "PyTorch", "AWS"],
      requirements: [
        "Master's or PhD in Computer Science, AI, or related field",
        "5+ years of experience in ML/AI development",
        "Strong proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Published research papers or open-source contributions"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications and SaaS platforms using modern technologies. Work on both frontend and backend development with a focus on performance and user experience.",
      techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS"],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud services and DevOps practices"
      ],
      gradient: "from-green-500 to-emerald-500"
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
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "4+ years of product management experience",
        "Experience with AI/ML products",
        "Strong analytical and communication skills",
        "MBA or technical background preferred"
      ],
      gradient: "from-purple-500 to-indigo-500"
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
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years of experience in data science",
        "Proficiency in Python, R, SQL",
        "Experience with machine learning frameworks",
        "Strong statistical analysis skills"
      ],
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and maintain cloud infrastructure, implement CI/CD pipelines, and ensure high availability and scalability of our AI platforms.",
      techStack: ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD", "Python", "Bash"],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of DevOps experience",
        "Experience with Kubernetes, Docker, Terraform",
        "Knowledge of AWS/GCP/Azure",
        "Strong scripting skills (Bash, Python)"
      ],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / India",
      type: "Full-time",
      experience: "2+ years",
      description: "Create intuitive and beautiful user interfaces for AI-powered applications. Work closely with product and engineering teams to deliver exceptional user experiences.",
      techStack: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "User Research"],
      requirements: [
        "Bachelor's degree in Design or related field",
        "2+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Portfolio demonstrating strong design skills",
        "Experience with design systems"
      ],
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Attractive compensation packages with performance bonuses",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Remote work options and flexible hours",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Training budgets, conferences, and career development",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "Work with the latest AI/ML technologies and tools",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with talented, passionate professionals",
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  const whyWorkAtGrevya = [
    {
      icon: Rocket,
      title: "Real AI Systems",
      description: "Work on production AI systems that power real businesses, not demos or prototypes. See your code impact thousands of users.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Agentic AI & RAG",
      description: "Build next-generation AI agents and RAG systems. Work with LLMs, vector databases, and cutting-edge AI architectures.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "Ownership & Speed",
      description: "Own your projects end-to-end. Move fast, ship often, and see direct client impact. No bureaucracy, just results.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Enterprise Deployments",
      description: "Deploy AI solutions at scale for enterprise clients. Work on systems that handle millions of requests and critical business operations.",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const handleJobClick = (jobId: number) => {
    setSelectedJob(jobId);
    const job = jobs.find(j => j.id === jobId);
    if (job) {
      setApplicationData(prev => ({ ...prev, position: job.title }));
    }
    // Scroll to application form
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
        variant: "default",
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
    <div className="relative">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-100 pt-32 sm:pt-40 pb-20 sm:pb-28">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/90 backdrop-blur-sm border border-primary-200 shadow-lg">
              <Sparkles className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-gray-700">Join the AI Revolution</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 sm:mb-8 px-2 tracking-tight leading-tight">
            Careers at <span className="gradient-text-primary">Grevya</span>
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-800 max-w-4xl mx-auto px-2 leading-relaxed font-bold mb-8 sm:mb-10">
            Build AI systems that shape real businesses.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2 mb-10 sm:mb-12 leading-relaxed">
            Join a team of passionate engineers building the future of enterprise AI. Work on cutting-edge projects that impact thousands of users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button 
              onClick={() => {
                const formElement = document.getElementById('open-positions');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-7 font-bold shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View Open Roles
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const subject = encodeURIComponent('General Application - Grevya');
                const body = encodeURIComponent('I am interested in working at Grevya. Please find my resume attached.');
                window.location.href = `mailto:careers@grevya.com?subject=${subject}&body=${body}`;
              }}
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-7 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Send General Application
            </Button>
          </div>
        </div>
      </section>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Why Work at Grevya - AI Specific - Improved */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight">Why Work at Grevya?</h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Join a team that's building the future of enterprise AI
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {whyWorkAtGrevya.map((item, index) => {
                const isHero = index === 1; // Highlight "Agentic AI & RAG" card
                return (
                  <Card 
                    key={index} 
                    className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                      isHero ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200' : 'bg-white'
                    }`}
                  >
                    {isHero ? (
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    )}
                    <CardHeader className="pb-4 p-6 sm:p-8 relative z-10">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                      <CardTitle className={`text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 ${isHero ? 'text-purple-700' : ''}`}>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 sm:p-8 pt-0 relative z-10">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal" style={{ lineHeight: '1.75' }}>
                        {item.description.split('.').slice(0, 2).join('.').trim() + '.'}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Mid-page CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Build the Future?
              </h3>
              <p className="text-primary-100 mb-8 text-lg">
                Explore our open positions and find your perfect fit
              </p>
              <Button 
                onClick={() => {
                  const formElement = document.getElementById('open-positions');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-white text-primary-600 hover:bg-gray-50 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Open Roles
              </Button>
            </div>
          </div>
        </section>

        {/* Culture & Values Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight">Our Engineering Culture</h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
              We believe in building with purpose, shipping fast, and learning continuously
            </p>
            <div className="grid md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ship Fast, Learn Faster</h3>
                <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
                  We move quickly, deploy often, and iterate based on real user feedback. No red tape, just results.
                </p>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Own Your Impact</h3>
                <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
                  Every engineer owns their features end-to-end. From design to deployment, you see your work in production.
                </p>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Growth</h3>
                <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.75' }}>
                  We invest in your growth with learning budgets, conference access, and mentorship from senior engineers.
                </p>
              </Card>
            </div>
          </div>
          
          {/* Founder/Team Quote */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-br from-primary-600 to-primary-700 text-white border-0 shadow-2xl p-8 sm:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-6 italic" style={{ lineHeight: '1.75' }}>
                    "At Grevya, we're not just building AI products—we're building the infrastructure that will power the next generation of enterprise software. Every line of code you write matters, every feature you ship impacts real businesses."
                  </p>
                  <p className="text-lg font-semibold">— The Grevya Team</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight">Benefits & Perks</h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto">
              We take care of our team so you can focus on building amazing things
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardHeader className="pb-4 p-6 sm:p-8 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0 relative z-10">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal" style={{ lineHeight: '1.75' }}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Open Positions - Improved Role Cards */}
        <section id="open-positions" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight">Open Positions</h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto">
              Find your next opportunity to build cutting-edge AI solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {jobs.map((job) => (
              <Card 
                key={job.id} 
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white cursor-pointer"
                onClick={() => handleJobClick(job.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardHeader className="p-6 sm:p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${job.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="bg-primary-100 text-primary-700 border-primary-200 font-semibold">
                      {job.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {job.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Badge variant="outline" className="text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      {job.location}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {job.experience}
                    </Badge>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 font-normal" style={{ lineHeight: '1.75' }}>
                    {job.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Apply for Position
                </CardTitle>
              </div>
              <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you soon</p>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0">
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm sm:text-base font-semibold mb-2 block">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={applicationData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 text-base border-2 focus:border-primary-600 focus:ring-primary-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm sm:text-base font-semibold mb-2 block">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 text-base border-2 focus:border-primary-600 focus:ring-primary-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm sm:text-base font-semibold mb-2 block">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-12 text-base border-2 focus:border-primary-600 focus:ring-primary-600"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <Label htmlFor="position" className="text-sm sm:text-base font-semibold mb-2 block">Position Applied For *</Label>
                    <Input
                      id="position"
                      name="position"
                      value={applicationData.position}
                      onChange={handleInputChange}
                      required
                      className="h-12 text-base border-2 focus:border-primary-600 focus:ring-primary-600"
                      placeholder="e.g., Senior AI/ML Engineer"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="resume" className="text-sm sm:text-base font-semibold mb-2 block">Resume/CV Link *</Label>
                  <Input
                    id="resume"
                    name="resume"
                    type="url"
                    value={applicationData.resume}
                    onChange={handleInputChange}
                    required
                    className="h-12 text-base border-2 focus:border-primary-600 focus:ring-primary-600"
                    placeholder="https://linkedin.com/in/yourprofile or Google Drive link"
                  />
                  <p className="text-xs text-gray-500 mt-1">Share a link to your resume (LinkedIn, Google Drive, etc.)</p>
                </div>
                <div>
                  <Label htmlFor="coverLetter" className="text-sm sm:text-base font-semibold mb-2 block">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    rows={6}
                    className="text-base border-2 focus:border-primary-600 focus:ring-primary-600 resize-none"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-lg py-6 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Submit Application
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>
        </section>

        {/* General Application CTA */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="text-center max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Don't see a position that fits?</h3>
              <p className="text-primary-100 mb-6 text-lg">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-primary-600 hover:bg-gray-50 text-lg py-6 px-8 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const subject = encodeURIComponent('General Application - Grevya');
                  const body = encodeURIComponent('I am interested in working at Grevya. Please find my resume attached.');
                  window.location.href = `mailto:careers@grevya.com?subject=${subject}&body=${body}`;
                }}
              >
                Send General Application
              </Button>
            </CardContent>
          </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
