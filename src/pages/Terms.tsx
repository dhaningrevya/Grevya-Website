import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navigation />
      <main id="main-content" className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3 border-b border-white/10 pb-8">
            <span className="text-xs font-mono text-[#f97316] uppercase tracking-[0.2em]">LEGAL & COMPLIANCE</span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-white">
              Terms of Service
            </h1>
            <p className="font-mono text-xs text-[#a1a1a1]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="font-sans text-sm text-[#a1a1a1] space-y-8 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase text-white">1. Agreement to Terms</h2>
              <p>
                By accessing or using the services provided by Grevya Technologies Pvt Ltd ("Grevya," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms").
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase text-white">2. Description of Services</h2>
              <p>
                Grevya provides enterprise AI, machine learning, and automation solutions, including agentic AI engines, RAG knowledge systems, data analytics pipelines, and custom software engineering.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase text-white">3. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services, including software code, architecture patterns, logos, and documentation, are owned by Grevya Technologies Pvt Ltd and protected by intellectual property laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase text-white">4. Contact Information</h2>
              <div className="bg-[#131313] p-6 rounded-2xl border border-white/10 space-y-2 font-mono text-xs text-[#a1a1a1]">
                <p className="font-bold text-white font-sans text-sm">Grevya Technologies Pvt Ltd</p>
                <p>4th South Cross St., Kovai Thiru Nagar,</p>
                <p>Kalapatty (E), Coimbatore 641014, India</p>
                <p>Email: <a href="mailto:legal@grevya.com" className="text-[#f97316] hover:underline">legal@grevya.com</a></p>
                <p>Phone: <a href="tel:+916381734688" className="text-[#f97316] hover:underline">+91 6381734688</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
