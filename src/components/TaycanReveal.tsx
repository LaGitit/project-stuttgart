import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion as Motion } from "framer-motion";
import taycanstreet from "@assets/taycan-street.webp";
import taycantrack from "@assets/taycan-track.webp";

gsap.registerPlugin(ScrollTrigger);

export default function TaycanReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lightningRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [trackMode, setTrackMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const lightning = lightningRef.current;
    if (!lightning) return;

    const flashAnimation = gsap.to(lightning, {
      opacity: 1,
      scale: 1.5,
      duration: 0.1,
      paused: true,
      onComplete: () => {
        gsap.to(lightning, {
          opacity: 0,
          duration: 0.3,
          delay: 0.2,
        });
      },
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 30%",
      onEnter: () => flashAnimation.play(),
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const toggleTrackMode = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        setTrackMode(!trackMode);
        setIsAnimating(false);
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`taycan-reveal ${trackMode ? "track-mode" : ""}`}
    >
      <div ref={lightningRef} className="lightning-flash" />

      <div className="taycan-image">
        <img
          src={trackMode ? taycantrack : taycanstreet}
          alt="Porsche Taycan Turbo GT"
          loading="eager"
        />
      </div>

      <div className="model-info">
        <h2>Porsche Taycan</h2>
        <p className="model-variant">Turbo GT</p>
        <p className="model-tagline">
          {trackMode
            ? "Track-optimized performance unleashed"
            : "Electric redefinition of the sports car"}
        </p>
      </div>

      <div className="performance-stats">
        <div className="stat">
          <h3>0–60 MPH</h3>
          <Motion.p
            animate={{
              color: trackMode ? "#FF0000" : "#00FFAA",
              scale: trackMode ? 1.05 : 1,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {trackMode ? "2.1s" : "2.6s"}
          </Motion.p>
        </div>
        <div className="stat">
          <h3>Top Speed</h3>
          <Motion.p
            animate={{
              color: trackMode ? "#FF0000" : "#00FFAA",
            }}
          >
            {trackMode ? "190 MPH" : "175 MPH"}
          </Motion.p>
        </div>
        <div className="stat">
          <h3>Power Output</h3>
          <Motion.p
            animate={{
              color: trackMode ? "#FF0000" : "#00FFAA",
            }}
          >
            {trackMode ? "1,100 HP" : "938 HP"}
          </Motion.p>
        </div>
      </div>

      <Motion.button
        ref={buttonRef}
        className="track-toggle"
        onClick={toggleTrackMode}
        aria-label={
          trackMode ? "Switch to Street Mode" : "Switch to Track Mode"
        }
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="track-mode-text">
          {trackMode ? "Street Mode" : "Track Mode"}
        </span>
        <span className="track-mode-icon">{trackMode ? "🛣️" : "🏁"}</span>
      </Motion.button>

      <div className="charge-bar">
        <Motion.div
          className="charge-level"
          animate={{
            width: trackMode ? "40%" : "80%",
            background: trackMode
              ? "linear-gradient(90deg, #FF0000, #FF4500)"
              : "linear-gradient(90deg, #00FFAA, #00D1FF)",
          }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </section>
  );
}
