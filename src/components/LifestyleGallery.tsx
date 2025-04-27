import { useState } from "react";
import nurburgring from "@assets/nurburgring.webp";
import taycity from "@assets/taycan-city.webp";
import cayenne from "@assets/cayenne-mountain.webp";

export default function LifestyleGallery() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const lifestyleItems = [
    {
      id: 1,
      title: "Track Mode",
      subtitle: "Engineered for the Apex",
      image: nurburgring,
      alt: "911 GT3 at Nürburgring",
      description:
        "Precision engineering meets uncompromising performance on the world's most demanding circuits.",
    },
    {
      id: 2,
      title: "Urban Luxury",
      subtitle: "Engineered for the Night",
      image: taycity,
      alt: "Taycan in city lights",
      description:
        "Effortless elegance and silent power for the metropolitan landscape.",
    },
    {
      id: 3,
      title: "Adventure",
      subtitle: "Engineered for the Climb",
      image: cayenne,
      alt: "Cayenne on mountain road",
      description:
        "Where capability meets sophistication, conquering any terrain with Porsche refinement.",
    },
  ];

  return (
    <section className="lifestyle-gallery" id="lifestyle-gallery">
      <div className="section-intro">
        <h2>The Porsche Lifestyle</h2>
        <p className="intro-text">
          Beyond transportation—each model embodies a distinct philosophy,
          crafted for those who demand extraordinary experiences. Discover how
          Porsche engineering adapts to your world.
        </p>
        <p className="intro-subtext">
          Hover to explore each dimension of the Porsche lifestyle
        </p>
      </div>

      <div className="gallery-grid">
        {lifestyleItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="image-container">
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div
                className={`overlay ${hoveredItem === item.id ? "active" : ""}`}
              >
                <h3>{item.title}</h3>
                <p className="subtitle">{item.subtitle}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
