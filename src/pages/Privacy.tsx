import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navigation />
      <main id="main-content" className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3 border-b border-white/10 pb-8">
            <span className="text-xs font-mono text-[#f97316] uppercase tracking-[0.2em]">LEGAL & COMPLIANCE</span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-white">
              Privacy Policy
            </h1>
            <p className="font-mono text-xs text-[#a1a1a1]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="font-sans text-sm text-[#a1a1a1] space-y-8 leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase text-white">1. Introduction</h2>
              <p>
                Grevya Technologies Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our enterprise AI services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase text-white">2. Information We Collect</h2>
              <h3 className="font-display text-base font-semibold text-slate-200">2.1 Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#a1a1a1]">
                <li>Register for an account or use our services</li>
                <li>Contact us through our website or email</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Apply for a job or submit a resume</li>
                <li>Request a demo or consultation</li>
              </ul>

              <h3 className="font-display text-base font-semibold text-slate-200 pt-2">2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device, including IP address, browser type, operating system, and usage telemetry.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase text-white">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#a1a1a1]">
                <li>Provide, maintain, and improve our AI services</li>
                <li>Process your requests and transactions</li>
                <li>Send technical notices, updates, and security alerts</li>
                <li>Respond to support inquiries and comments</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase text-white">4. Contact Us</h2>
              <div className="bg-[#131313] p-6 rounded-2xl border border-white/10 space-y-2 font-mono text-xs text-[#a1a1a1]">
                <p className="font-bold text-white font-sans text-sm">Grevya Technologies Pvt Ltd</p>
                <p>4th South Cross St., Kovai Thiru Nagar,</p>
                <p>Kalapatty (E), Coimbatore 641014, India</p>
                <p>Email: <a href="mailto:privacy@grevya.com" className="text-[#f97316] hover:underline">privacy@grevya.com</a></p>
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

export default Privacy;
