import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import sketchbg from "@assets/sketch.webp";

export default function TransitionStatement() {
  const handleExplore = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      className="transition-statement"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="sketch-bg"
        initial={{ y: 0 }}
        whileInView={{ y: -50 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url(${sketchbg}), linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.9))`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.25,
        }}
      />

      <div className="text-container">
        <motion.h3
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Where Engineering Meets Passion
        </motion.h3>

        <motion.div
          className="divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
        />

        <motion.p
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Every Porsche begins as an impossible idea.
          <br />
          And becomes undeniable.
        </motion.p>

        <motion.button
          className="explore-cta"
          onClick={handleExplore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaArrowUp className="cta-icon" />
          Explore Legacy
          <span className="disclaimer">(Portfolio Demo)</span>
        </motion.button>
      </div>
    </motion.section>
  );
}
