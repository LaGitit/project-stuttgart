import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import circuitBg from "@assets/electric-circuit-texture3.webp";

gsap.registerPlugin(ScrollTrigger);

export default function ElectrificationPrelude() {
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(bgRef.current, {
      y: 100,
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="electrification-prelude" id="future">
      <div
        ref={bgRef}
        className="prelude-bg"
        style={{ backgroundImage: `url(${circuitBg})` }}
      />

      <div ref={textRef} className="prelude-text">
        <h2>A New Current</h2>
        <p>
          From the roar of air-cooled engines
          <br />
          to the hum of electrons—
          <br />
          <span className="highlight">the next chapter begins</span>.
        </p>
      </div>
    </section>
  );
}
