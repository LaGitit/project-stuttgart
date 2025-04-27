import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import porsche356 from "@assets/porsche-356.webp";

gsap.registerPlugin(ScrollTrigger);

export default function OriginStory() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.to(imageRef.current, {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }

    gsap.from(contentRef.current, {
      y: 20,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    if (svgRef.current) {
      gsap.fromTo(
        svgRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="origin-story" id="origin">
      <div ref={imageRef} className="origin-image">
        <div className="image-overlay" />
        <img
          src={porsche356}
          alt="Porsche 356 (1948)"
          loading="eager"
          className="historical-image"
        />
      </div>

      <div ref={contentRef} className="origin-content">
        <div className="content-inner">
          <span className="year-label">1948</span>
          <h2>Where It Began</h2>
          <p>
            In 1948, Ferry Porsche unveiled the 356, the first car to bear the
            Porsche name. Crafted in a small Austrian workshop, it laid the
            foundation for decades of innovation.
          </p>
          <blockquote>
            <div className="quote-mark">"</div>
            <div className="quote-content">
              In the beginning, I looked around and could not find quite the car
              I dreamed of, so I decided to build it myself.
              <footer>— Ferry Porsche</footer>
            </div>
          </blockquote>

          <div className="silhouette-container">
            <svg
              ref={svgRef}
              viewBox="0 0 500 200"
              className="porsche-silhouette"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M50,100 C150,50 250,150 350,100 S450,50 450,150"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
