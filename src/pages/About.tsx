import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navigation />
      <main id="main-content">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
