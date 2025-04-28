# **Project Stuttgart – Porsche Legacy Landing Page**  

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)  
[![GitHub Stars](https://img.shields.io/github/stars/LaGitit/project-stuttgart?style=social)](https://github.com/LaGitit/project-stuttgart)  

**A cinematic, scroll-driven tribute to Porsche’s design legacy** – from the 356 to the 2025 Vision concept. Built with React, GSAP, and meticulous attention to detail.  

![Hero Section Preview](https://via.placeholder.com/1920x1080/000000/FFFFFF/?text=Porsche+Legacy+Landing+Page)  

---

## **📌 Table of Contents**  
- [Disclaimer](#-disclaimer)  
- [Features](#-features)  
- [Tech Stack](#-tech-stack) 
- [Usage](#-usage)  
- [License](#-license)  

---

## **⚠️ Legal Disclaimer**

This project ('Project Stuttgart') is an independent, non-commercial design exercise created solely for educational and portfolio demonstration purposes. It is not affiliated with, endorsed by, or sponsored by Porsche AG, Dr. Ing. h.c. F. Porsche AG, or any subsidiaries. All Porsche-related trademarks, logos, vehicle designs, and imagery are the exclusive property of Porsche AG. This project does not represent an official Porsche product, service, or digital property.


All copyrighted Porsche assets (including but not limited to: vehicle images, the Porsche Crest, and model names like '911' or 'Taycan') are used under fair use principles (for commentary, criticism, and educational purposes). No copyright infringement is intended. This project will never be monetized or publicly hosted outside of GitHub.


*By interacting with this repository or any derived deployments, you acknowledge and agree that:*

- This is a fictional concept, not an official Porsche website.

- Porsche AG owns all rights to its branding and intellectual property.

- You will not redistribute Porsche assets from this project."*


*This repository’s code (excluding Porsche assets) is MIT-licensed, but Porsche-related content remains proprietary. To request removal of any copyrighted material, contact richardlawal2001@gmail.com.*



---

## **✨ Features**  
### **1. Hero → Sticky Nav Transformation**  
- Full-screen vintage Porsche 911 Carrera RS 2.7 hero image.  
- Smooth compression into a fixed navigation bar on scroll.  
- Era-based navigation (1940s–2025) with hover effects.  

### **2. Parallax Era Sections**  
- **1948–1960s**: B&W 356 with parallax + SVG line drawing.  
- **1970s–1980s**: 930 Turbo with dynamic color overlay.  
- **1990s–2000s**: Horizontal-scrolling gallery (GT2, Carrera GT, Taycan).  

### **3. 2025 Vision Model Reveal**   
- Animated spec sheet (0–60 mph, hybrid powertrain).  

### **4. Premium UI/UX**  
- Porsche’s official color palette (`#000000`, `#FF0000`, `#E6E6E6`).  
- **Barlow Condensed** typography with perfect kerning.  
- 60 FPS animations (GSAP + Framer Motion).  

---

## **💻 Tech Stack**  
- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)  
- **Styling**: SCSS + CSS Modules  
- **Animations**: [GSAP](https://greensock.com/gsap/) + [Framer Motion](https://www.framer.com/motion/)  
- **Performance**: Lazy-loaded WebP images, Intersection Observer  
- **Legal Compliance**: Dynamic Disclaimer Modal (blocks interaction until accepted).  

---


## **🎨 Usage**  
- Customize `src/assets/images` with your own Porsche-themed visuals (ensure no copyright violations).  
- Edit the disclaimer text in `src/components/DisclaimerModal.tsx`.  
- Deploy via Vercel/Netlify/GitHub Pages:  
  ```sh
  npm run build && npm run preview
  ```  

---

## **📜 License**  
This project is licensed under the **MIT License** – see [LICENSE](LICENSE) for details.  

**Note**: Porsche branding and assets are excluded from this license and remain property of Porsche AG.  

---

## **🙏 Acknowledgements**  
- Porsche AG for inspiring this design study.  
- GSAP for buttery-smooth scroll animations.  
- [Shields.io](https://shields.io/) for GitHub badges.  

---

**Report Issues**: [GitHub Issues](https://github.com/LaGitit/project-stuttgart/issues)  
