import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import GT2 from "@assets/1995 911 GT2.webp";
import GT04 from "@assets/2004 Carrera GT.webp";
import Taycan from "@assets/2019 Taycan.webp";

export default function ModernIcons() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const cars = [
    {
      id: 1,
      model: "1995 911 GT2",
      nickname: "The Widowmaker",
      image: GT2,
      description: "Track-bred turbocharged monster with rear-wheel drive.",
      era: "90s Turbo Era",
      specs: ["3.6L Flat-6 Turbo", "430 HP", "Top Speed: 301 km/h"],
    },
    {
      id: 2,
      model: "2004 Carrera GT",
      nickname: "V10 Symphony",
      image: GT04,
      description:
        "Carbon-fiber hypercar with a 612HP naturally aspirated V10.",
      era: "2000s Hypercar",
      specs: ["5.7L V10", "612 HP", "0-100 km/h: 3.9s"],
    },
    {
      id: 3,
      model: "2019 Taycan",
      nickname: "Electric Revolution",
      image: Taycan,
      description:
        "Porsche's first all-electric sports car with 800V architecture.",
      era: "Electric Future",
      specs: ["Dual Motor AWD", "761 HP (Turbo S)", "Range: 450 km"],
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollTo({
        left: window.innerWidth * index,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let timeoutId: number;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        const scrollPosition = slider.scrollLeft;
        const slideIndex = Math.round(scrollPosition / window.innerWidth);
        setCurrentIndex(slideIndex);
      }, 100);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="modern-icons" id="modern">
      <div className="section-intro">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Modern Icons
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Porsche's most significant models that defined generations
        </motion.p>
      </div>

      <div className="scroll-container" ref={sliderRef}>
        <div className="car-gallery">
          {cars.map((car) => (
            <div key={car.id} className="car-slide">
              <div className="image-container">
                <motion.img
                  src={car.image}
                  alt={`${car.model} - ${car.nickname}`}
                  loading="lazy"
                  className="car-image"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  decoding="async"
                  draggable="false"
                />
                <div className="gradient-overlay" />
              </div>

              <div className="car-info">
                <motion.div
                  className="era-badge"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {car.era}
                </motion.div>

                <div className="car-label">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {car.model}
                  </motion.h3>
                  <motion.p
                    className="nickname"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {car.nickname}
                  </motion.p>
                  <motion.p
                    className="description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {car.description}
                  </motion.p>

                  <div className="specs-grid">
                    {car.specs.map((spec, i) => (
                      <motion.div
                        key={i}
                        className="spec-item"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {spec}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Pagination */}
      <div className="pagination-container">
        <div className="pagination-track">
          {cars.map((_, idx) => (
            <button
              key={idx}
              className={`pagination-indicator ${
                idx === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="indicator-bar" />
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="nav-arrow prev"
        onClick={() =>
          goToSlide((currentIndex - 1 + cars.length) % cars.length)
        }
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        className="nav-arrow next"
        onClick={() => goToSlide((currentIndex + 1) % cars.length)}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
            fill="currentColor"
          />
        </svg>
      </button>
    </section>
  );
}
