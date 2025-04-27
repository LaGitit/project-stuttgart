import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete,
    });

    // 1. Line grows horizontally
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.8 }
    );

    // 2. Text fades in with slight vertical motion
    tl.fromTo(
      textRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    );

    // 3. Brief hold before fade out
    tl.to({}, { duration: 0.3 }).to([lineRef.current, textRef.current], {
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
    });

    // cleanup refactored
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="preloader" aria-label="Loading">
      <div className="preloader-content">
        <div ref={lineRef} className="preloader-line" aria-hidden="true" />
        <div ref={textRef} className="preloader-text">
          PROJECT STUTTGART
        </div>
      </div>
    </div>
  );
}
