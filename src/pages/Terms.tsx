import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main-content" className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using the services provided by Grevya Technologies Pvt Ltd ("Grevya," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Grevya provides enterprise AI and automation services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>AI Agents and Automation Solutions</li>
                <li>Generative AI Integration Services</li>
                <li>AI Chatbot Development</li>
                <li>RAG (Retrieval-Augmented Generation) Applications</li>
                <li>Website Development Services</li>
                <li>Social Media Automation</li>
                <li>Virtual Assistance Solutions</li>
                <li>Custom AI/ML Platform Development</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Services</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Eligibility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Acceptable Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use our services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>For any unlawful purpose or in violation of any laws</li>
                <li>To transmit any malicious code, viruses, or harmful data</li>
                <li>To interfere with or disrupt our services or servers</li>
                <li>To attempt to gain unauthorized access to our systems</li>
                <li>To impersonate any person or entity</li>
                <li>To collect or store personal data about other users without consent</li>
                <li>For any purpose that could damage, disable, or impair our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, software, and code, are owned by Grevya or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use our intellectual property without our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of any content you submit, post, or display through our services ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your User Content solely for the purpose of providing and improving our services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are solely responsible for your User Content and warrant that you have all necessary rights to grant us the license described above.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you purchase our services, you agree to pay all fees as described in your service agreement or invoice. Payment terms, pricing, and billing cycles will be specified in your individual service contract.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>All fees are non-refundable unless otherwise stated in your service agreement</li>
                <li>We reserve the right to change our pricing with reasonable notice</li>
                <li>Late payments may result in suspension or termination of services</li>
                <li>You are responsible for any taxes applicable to your use of our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to provide reliable and continuous service, but we do not guarantee that our services will be available at all times. We may experience downtime due to maintenance, updates, or unforeseen circumstances. We are not liable for any loss or damage resulting from service unavailability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, GREVYA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OUR SERVICES.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our total liability for any claims arising from or related to our services shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless Grevya, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use our services will cease immediately.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may terminate your use of our services at any time by discontinuing use and notifying us in writing, subject to any contractual obligations in your service agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Severability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Grevya Technologies Pvt Ltd</strong></p>
                <p className="text-gray-700 mb-2">4th South Cross St., Kovai Thiru Nagar,</p>
                <p className="text-gray-700 mb-2">Kalapatty (E), Coimbatore 641014, India</p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:legal@grevya.com" className="text-primary-600 hover:underline">legal@grevya.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+916381734688" className="text-primary-600 hover:underline">+91 6381734688</a></p>
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

