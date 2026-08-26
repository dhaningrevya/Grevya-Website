import { Navigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AcceleratorLayout from "@/components/AcceleratorLayout";
import { servicesCopy } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const copy = slug ? servicesCopy[slug] : undefined;

  if (!copy) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navigation />
      <main id="main-content">
        <AcceleratorLayout copy={copy} />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
