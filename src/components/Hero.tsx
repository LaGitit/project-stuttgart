import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import carrera from "@assets/carrera.webp";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  heroImageRef: React.RefObject<HTMLDivElement | null>;
  stickyNavRef: React.RefObject<HTMLElement | null>;
}

export default function Hero({ heroImageRef, stickyNavRef }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const hero = heroRef.current;
    const heroImage = heroImageRef?.current;

    if (!hero || !heroImage) return;

    ScrollTrigger.create({
      trigger: hero,
      start: "bottom 60%",
      end: "bottom 40%",
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
      markers: false,
    });

    gsap.to(heroImage, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [heroImageRef, stickyNavRef]);

  return (
    <div className="hero-section">
      {/* Hero Image */}
      <div
        ref={(el) => {
          heroRef.current = el;
          if (heroImageRef) heroImageRef.current = el;
        }}
        className="hero-image"
        style={{ backgroundImage: `url(${carrera})` }}
      >
        <div ref={contentRef} className="hero-content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img src="/PSLegacy.svg" alt="PS logo" className="nav-svg" />
          </motion.div>
          <h1>Legacy of Speed</h1>
          <p>From the first dream to the next revolution.</p>
        </div>
      </div>

      {/* Sticky Nav */}
      <nav
        ref={(el) => {
          if (stickyNavRef) stickyNavRef.current = el;
        }}
        className={`sticky-nav ${isScrolled ? "visible" : ""}`}
      >
        <div className="nav-container">
          <div className="nav-content">
            <a
              href="#"
              className="logo-group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src="/Tab-icon.svg"
                alt="Project Stuttgart"
                className="nav-logo"
                draggable="false"
              />
              <span className="logo-text">PROJECT STUTTGART</span>
            </a>

            {/* Center: Links - Hidden on mobile */}
            <div className="nav-links">
              <a href="#origin" className="nav-link" onClick={smoothScroll}>
                ORIGIN
              </a>
              <a href="#golden-era" className="nav-link" onClick={smoothScroll}>
                GOLDEN ERA
              </a>
              <a href="#modern" className="nav-link" onClick={smoothScroll}>
                MODERN ICONS
              </a>
              <a href="#future" className="nav-link" onClick={smoothScroll}>
                FUTURE
              </a>
              <a
                href="#lifestyle-gallery"
                className="nav-link"
                onClick={smoothScroll}
              >
                GALLERY
              </a>
            </div>

            {/* Mobile Navigation Container */}
            <div className="mobile-nav-container">
              {/* Mobile menu button */}
              <button
                className="mobile-menu-button"
                aria-label="Navigation menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="button-text">
                  {isMobileMenuOpen ? "CLOSE" : "MENU"}
                </span>
                <svg
                  className={`button-icon ${isMobileMenuOpen ? "open" : ""}`}
                  viewBox="0 0 24 24"
                >
                  <path
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Mobile dropdown menu */}
              {isMobileMenuOpen && (
                <div className="mobile-dropdown">
                  <a
                    href="#origin"
                    className="mobile-nav-link"
                    onClick={smoothScroll}
                  >
                    ORIGIN
                  </a>
                  <a
                    href="#golden-era"
                    className="mobile-nav-link"
                    onClick={smoothScroll}
                  >
                    GOLDEN ERA
                  </a>
                  <a
                    href="#modern"
                    className="mobile-nav-link"
                    onClick={smoothScroll}
                  >
                    MODERN ICONS
                  </a>
                  <a
                    href="#future"
                    className="mobile-nav-link"
                    onClick={smoothScroll}
                  >
                    FUTURE
                  </a>
                  <a
                    href="#lifestyle-gallery"
                    className="mobile-nav-link"
                    onClick={smoothScroll}
                  >
                    GALLERY
                  </a>
                  <a href="#configure" className="mobile-nav-link config-link">
                    CONFIGURE
                  </a>
                </div>
              )}
            </div>

            {/* Original Config Button - Desktop Only */}
            <button
              className="config-button desktop-only"
              aria-label="Configure your Porsche"
            >
              <span className="button-text">CONFIGURE</span>
              <svg className="button-icon" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
