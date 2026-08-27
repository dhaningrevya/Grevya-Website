import React from "react";
import { ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "919566966064";
const WHATSAPP_DISPLAY = "+91 95669 66064";
const DEFAULT_MESSAGE = "Hi Grevya team, I'd like to talk about an AI project.";

export const WhatsAppButton: React.FC = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Grevya engineering on WhatsApp at ${WHATSAPP_DISPLAY}`}
      title={`Chat on WhatsApp — ${WHATSAPP_DISPLAY}`}
      data-cursor="hover"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
      className="fixed right-4 sm:right-6 z-40 group inline-flex items-center gap-2.5 p-3 sm:p-3.5 rounded-full bg-[#131313]/95 hover:bg-[#1a1a1a] backdrop-blur-2xl border border-white/12 hover:border-[#25D366]/50 text-white shadow-2xl transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:border-[#25D366]"
    >
      {/* Live Status Indicator Dot */}
      <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
      </span>

      {/* WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 32 32"
        className="h-5 w-5 fill-[#25D366] flex-shrink-0 transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
        aria-hidden="true"
      >
        <path d="M19.11 17.24c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.63-.92-2.23-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.11 3.23 5.11 4.53.71.31 1.27.5 1.71.64.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
        <path d="M26.58 5.42A14.95 14.95 0 0 0 16 1.07C7.73 1.07 1 7.8 1 16.07c0 2.63.69 5.21 2 7.48L1 31l7.63-2c2.2 1.2 4.68 1.83 7.21 1.83h.01c8.27 0 15-6.73 15-15 0-4-1.56-7.76-4.27-10.41zM16 28.36h-.01a12.3 12.3 0 0 1-6.27-1.72l-.45-.27-4.52 1.18 1.2-4.41-.29-.46A12.3 12.3 0 0 1 3.72 16c0-6.76 5.51-12.26 12.28-12.26 3.28 0 6.36 1.28 8.68 3.6a12.19 12.19 0 0 1 3.6 8.66c0 6.76-5.52 12.27-12.28 12.27z" />
      </svg>

      {/* Smooth Expandable Text Label (Desktop Hover & Focus-Visible) */}
      <span className="max-w-0 group-hover:max-w-[120px] group-focus-visible:max-w-[120px] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-300 ease-out overflow-hidden inline-flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-[0.18em] text-white whitespace-nowrap">
        <span>LET'S TALK</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-[#25D366]" />
      </span>
    </a>
  );
};

export default WhatsAppButton;
