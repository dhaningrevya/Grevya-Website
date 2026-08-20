
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#FAFAF8] selection:bg-[#02A4EF]/30 selection:text-white font-sans antialiased">
      <Navigation />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Industries />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;



