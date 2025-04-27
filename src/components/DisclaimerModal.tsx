import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function DisclaimerModal({
  onAccept,
}: {
  onAccept: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const ctx = gsap.context(() => {
      if (!modalRef.current || !overlayRef.current) return;

      animationRef.current = gsap
        .timeline()
        .from([overlayRef.current, modalRef.current], {
          duration: 0.4,
          opacity: 0,
          ease: "power2.out",
          stagger: 0.1,
        });

      return () => {
        animationRef.current?.kill();
      };
    });

    return () => ctx.revert();
  }, []);

  const handleAccept = () => {
    const ctx = gsap.context(() => {
      if (!modalRef.current || !overlayRef.current) {
        onAccept();
        return;
      }

      gsap.to([modalRef.current, overlayRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          localStorage.setItem("disclaimerAccepted", "true");
          onAccept();
        },
      });
    });

    return () => ctx.revert();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  if (!isMounted) return null;

  return (
    <div
      ref={overlayRef}
      className="disclaimer-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-heading"
    >
      <div ref={modalRef} className="disclaimer-modal">
        <h2 id="disclaimer-heading" className="disclaimer-heading">
          Legal Disclaimer
        </h2>

        <div className="disclaimer-content">
          <p>
            This website ("Project Stuttgart") is an independent design concept
            created solely for demonstration purposes. It is not affiliated
            with, endorsed by, or sponsored by Dr. Ing. h.c. F. Porsche AG or
            any of its subsidiaries.
          </p>

          <p>
            All Porsche-branded imagery, logos, and model names are registered
            trademarks of Porsche AG. Vehicle renders are used under fair use
            principles for artistic/educational commentary. No commercial
            exploitation is intended or implied.
          </p>

          <p>
            By continuing, you acknowledge this is a non-commercial portfolio
            piece and agree to view it as such. All specifications and
            depictions are fictional unless otherwise noted.
          </p>
        </div>

        <button
          onClick={handleAccept}
          className="disclaimer-button"
          aria-label="I understand and agree to the terms"
        >
          I Understand and Agree
        </button>
      </div>
    </div>
  );
}
