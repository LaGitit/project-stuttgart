import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroProps {
  heroImageRef: React.RefObject<HTMLDivElement | null>;
  stickyNavRef: React.RefObject<HTMLElement | null>;
}

export default function HeroTransition({
  heroImageRef,
  stickyNavRef,
}: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !heroImageRef.current || !stickyNavRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const enterAnimation = () => {
        gsap.to(heroImageRef.current, { opacity: 0, duration: 0.4 });
        gsap.to(stickyNavRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
        });
      };

      const leaveBackAnimation = () => {
        gsap.to(heroImageRef.current, { opacity: 1, duration: 0.4 });
        gsap.to(stickyNavRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.4,
        });
      };

      gsap.fromTo(
        section,
        { y: 100 },
        {
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 25%",
            scrub: reduceMotion ? false : 0.4,
            snap: {
              snapTo: 1,
              duration: { min: 0.2, max: 0.6 },
              ease: "power1.inOut",
            },
            onEnter: enterAnimation,
            onLeaveBack: leaveBackAnimation,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [heroImageRef, stickyNavRef]);

  return (
    <section
      ref={sectionRef}
      className="hero-transition"
      aria-label="Porsche Legacy Introduction"
    >
      <div ref={contentRef} className="transition-content">
        <div className="marquee-line" aria-hidden="true">
          <span>SINCE 1948</span>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 0L20 10L10 20L0 10Z" fill="currentColor" />
          </svg>
          <span>ENGINEERING EXCELLENCE</span>
        </div>

        <h2 className="statement">
          <span className="line">The pursuit of perfection</span>
          <span className="line">has no finish line</span>
        </h2>

        <div className="scroll-hint-wrapper">
          <div className="scroll-hint">
            <span>EXPLORE THE LEGACY</span>
            <div className="line" />
          </div>
        </div>
      </div>
    </section>
  );
}
