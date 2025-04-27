import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import porsche930Main from "@assets/porsche930-main.webp";
import porsche930Side from "@assets/porsche930-side.webp";
import porsche930Dash from "@assets/porsche930-dash.webp";
import porsche930Rear from "@assets/porsche930-rear.webp";

export default function GoldenEra() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // component's animations context
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false,
          id: "goldenEra-title",
        },
      });

      // Gallery item animations
      const galleryItems =
        galleryRef.current?.querySelectorAll(".gallery-item");
      galleryItems?.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
            id: `goldenEra-item-${index}`,
          },
        });
      });
    }, sectionRef);

    return () => {
      // cleanup
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="golden-era" id="golden-era">
      <div className="container">
        <h2 ref={titleRef} className="section-title">
          The 930 Turbo Legacy
        </h2>
        <p className="section-subtitle">
          The car that defined the turbocharged sports car era
        </p>

        <div ref={galleryRef} className="gallery-grid">
          <div className="gallery-item main-image">
            <img
              src={porsche930Main}
              alt="Porsche 930 Turbo - Front 3/4 view"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="image-caption">
              <span>1975 Porsche 930 Turbo</span>
              <span>3.0L Flat-6 Engine</span>
            </div>
          </div>

          <div className="gallery-item side-view">
            <img
              src={porsche930Side}
              alt="Porsche 930 Turbo - Side view"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="spec-badge">
              <span>260 HP</span>
              <span>0-60 in 5.2s</span>
            </div>
          </div>

          <div className="gallery-item dashboard">
            <img
              src={porsche930Dash}
              alt="Porsche 930 Turbo - Dashboard"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="image-caption">
              <span>Classic Cockpit</span>
              <span>Driver-focused design</span>
            </div>
          </div>

          <div className="gallery-item rear-view">
            <img
              src={porsche930Rear}
              alt="Porsche 930 Turbo - Rear view on road"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="spec-badge">
              <span>Whale Tail Spoiler</span>
              <span>Iconic 1970s Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
