import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-[#fafafa] px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f97316]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="text-center max-w-xl space-y-6 relative z-10">
        <span className="px-3 py-1 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">
          404 ARCHITECTURE FAULT
        </span>

        <h1 className="font-display text-5xl sm:text-7xl font-extrabold uppercase text-white tracking-tighter">
          Page Not Found
        </h1>

        <p className="font-sans text-base text-[#a1a1a1]">
          The route <code className="bg-[#1a1a1a] border border-white/10 px-2 py-1 rounded font-mono text-xs text-[#f97316]">{location.pathname}</code> does not exist or has been relocated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-accent-glow"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#131313] hover:bg-[#1a1a1a] border border-white/10 text-white font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
