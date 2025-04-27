import { useState, useEffect } from "react";
import Preloader from "@components/Preloader";
import DisclaimerModal from "@components/DisclaimerModal";
import App from "./App";
import { StrictMode } from "react";

export function Root() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("disclaimerAccepted") === "true";
    if (!hasAccepted) {
      setShowDisclaimer(true);
      document.body.style.overflow = "hidden"; // Lock scroll immediately
    }
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  const handleAcceptDisclaimer = () => {
    document.body.style.overflow = ""; // Restore scroll
    setShowDisclaimer(false);
  };

  return (
    <StrictMode>
      {isLoading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <>
          <App />
          {showDisclaimer && (
            <DisclaimerModal onAccept={handleAcceptDisclaimer} />
          )}
        </>
      )}
    </StrictMode>
  );
}
