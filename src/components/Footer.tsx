import { FaGithub, FaStackOverflow, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import LegacyLogo from "@assets/PSLegacy.svg";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="logo-container"
        >
          <img
            src={LegacyLogo}
            alt="Project Stuttgart"
            className="footer-logo"
            draggable="false"
          />
        </motion.div>

        <motion.p
          className="legal-disclaimer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          This is a personal portfolio project. All assets belong to Porsche AG.
        </motion.p>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://github.com/LaGitit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="github-link"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="mailto:richardlawal2001@gmail.com"
            aria-label="Email"
            className="email-link"
          >
            <FaEnvelope className="social-icon" />
          </a>
          <a
            href="https://stackoverflow.com/users/zendev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stack Overflow"
            className="stackoverflow-link"
          >
            <FaStackOverflow className="social-icon" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
