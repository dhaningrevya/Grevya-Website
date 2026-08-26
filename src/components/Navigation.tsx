import React, { useState } from "react";
import ModernHeader from "@/components/layout/ModernHeader";
import FullscreenNavOverlay from "@/components/layout/FullscreenNavOverlay";

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <ModernHeader
        isMenuOpen={isMenuOpen}
        onOpenMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      <FullscreenNavOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Navigation;
