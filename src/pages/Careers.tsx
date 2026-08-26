import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

const CareersPage = () => {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Grevya Technologies Pvt Ltd",
        "sameAs": "https://grevya.com"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      },
      "employmentType": "FULL_TIME",
      "workHours": "Full-time",
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navigation />
      <main id="main-content">
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
