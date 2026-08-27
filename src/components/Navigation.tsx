import React, { useState, useRef } from "react";
import ModernHeader from "@/components/layout/ModernHeader";
import FullscreenNavOverlay from "@/components/layout/FullscreenNavOverlay";

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <ModernHeader
        isMenuOpen={isMenuOpen}
        onOpenMenu={() => setIsMenuOpen(!isMenuOpen)}
        triggerRef={triggerRef}
      />
      <FullscreenNavOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        triggerRef={triggerRef}
      />
    </>
  );
};

export default Navigation;
