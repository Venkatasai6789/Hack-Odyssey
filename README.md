# 🚀 Hack Odyssey 4.0 — 24-Hour National Hackathon

<div align="center">

![Hack Odyssey 4.0 Banner](https://raw.githubusercontent.com/Venkatasai6789/Hack-Odyssey/main/frontend/src/assets/hero_section.png)

**KARE ACM Student Chapter Presents**  
### *Enter the Code Dimension · Innovate · Collaborate · Build*

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[**Explore Live Demo**](https://hack-odyssey.vercel.app/) · [**Report Bug**](https://github.com/Venkatasai6789/Hack-Odyssey/issues) · [**Request Feature**](https://github.com/Venkatasai6789/Hack-Odyssey/issues)

</div>

---

## 📖 About Hack Odyssey 4.0

**Hack Odyssey 4.0** is the flagship 24-hour national hackathon hosted by the **KARE ACM Student Chapter** at Kalasalingam Academy of Research and Education (KARE). 

This platform brings together brilliant student developers, designers, and innovators from across the country to transform visionary ideas into production-ready solutions, collaborate beyond boundaries, and engineer the future.

This website delivers an **Awwwards-level interactive web experience**, blending cutting-edge frontend engineering, physics-driven particle animations, custom kinetic typography, and smooth page transitions.

---

## ✨ Key Features & Highlights

- 🎬 **7-Phase Master Cinematic Preloader**:
  - Phase 1: Dormant atmospheric space & ambient starlight particles.
  - Phase 2: Curved trajectory organic hand discovery animation.
  - Phase 3: Deceleration tension & fingertip anticipation glow.
  - Phase 4: Exact contact flash, radial energy ignition, and localized dispersion particles.
  - Phase 5: Inward converging particle matrix & radial KARE ACM identity formation.
  - Phase 6: Masked typographic reveal of "PRESENTS HACK ODYSSEY" with animated exponential `4.0` badge.
  - Phase 7: Smooth seamless transition gliding the ACM crest into the live Navbar.

- 🌌 **Editorial Visual Design & Typography**:
  - Dark-mode luxury aesthetics with deep blacks (`#030206`), violet radiance (`#a855f7`), and soft porcelain typography (`#f4efe7`).
  - Custom exponential circled badges and halftone mesh effects.

- 🎞️ **Moments Defining Odyssey (Interactive Gallery)**:
  - Fanned multi-card ribbon with interactive 3D cursor-tracking parallax.
  - Background typography kinetic scroll-split animations.

- 👥 **Dynamic Coordinators & Faculty Spotlight**:
  - Interactive magnetic cards with secondary studio wavy artwork overlays.
  - Custom cursor magnetic pull and interactive hover states.

- ⚡ **High-Performance Smooth Scrolling**:
  - Integrated with **GSAP ScrollTrigger**, **ScrollSmoother**, and **Lenis** for silky-smooth physics-based scrolling.

- 📱 **Cross-Platform & Responsive**:
  - Meticulously optimized for ultra-wide monitors, laptops, tablets, and mobile smartphones.
  - Built-in `prefers-reduced-motion` accessibility support.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Core Framework** | [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) + Modern CSS Custom Properties |
| **Animation Engine** | [GSAP](https://gsap.com/) (`ScrollTrigger`, `ScrollSmoother`, `MotionPath`, `@gsap/react`) |
| **Smooth Scroll** | [@studio-freight/lenis](https://github.com/darkroomengineering/lenis) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Icons & Media** | [React Icons](https://react-icons.github.io/react-icons/) + Three.js |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
Hack-Odyssey/
├── frontend/
│   ├── public/                 # Static assets, favicon, fonts, icons
│   ├── src/
│   │   ├── assets/             # Images, videos, preloader assets, cursor art
│   │   ├── components/
│   │   │   ├── Activities/     # Hackathon tracks & activities
│   │   │   ├── BenefitVideo/   # Video highlight player
│   │   │   ├── Buttons/        # Animated magnetic buttons & CTA
│   │   │   ├── Choose/         # Interactive track selector
│   │   │   ├── Coordinators/   # Faculty & student team showcase
│   │   │   ├── Cursor/         # Custom kinetic cursor
│   │   │   ├── Feedback/       # Testimonials & reviews carousel
│   │   │   ├── Footer/         # Footer & quick links
│   │   │   ├── Gallery/        # Pinned moments photo gallery
│   │   │   ├── Hero/           # Hero landing section
│   │   │   ├── Navbar/         # Fixed responsive navigation
│   │   │   ├── Preloader/      # Master Hack Odyssey 4.0 Preloader
│   │   │   ├── Welcome/        # The Odyssey statement & pill imagery
│   │   │   └── Winners/        # Past winners spotlight
│   │   ├── constants/          # Copy, telemetry data & content constants
│   │   ├── layouts/            # MainLayout wrapper & smooth container
│   │   ├── pages/              # Home and route views
│   │   ├── Router/             # React Router route definitions
│   │   ├── index.css           # Global stylesheet & Tailwind directives
│   │   ├── main.jsx            # React root mount
│   │   └── App.jsx
│   ├── package.json
│   ├── vercel.json             # Sub-directory Vercel config
│   └── vite.config.js
├── vercel.json                 # Root Vercel SPA deployment config
├── package.json                # Root package scripts
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Venkatasai6789/Hack-Odyssey.git
   cd Hack-Odyssey
   ```

2. **Install dependencies:**
   ```bash
   npm --prefix frontend install
   ```

3. **Start the development server:**
   ```bash
   npm --prefix frontend run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm --prefix frontend run build
   ```

5. **Preview production build:**
   ```bash
   npm --prefix frontend run preview
   ```

---

## ☁️ Deployment on Vercel

This repository is pre-configured with zero-configuration deployment for [Vercel](https://vercel.com/).

### Method 1: Git Integration (Recommended)
1. Push your changes to GitHub:
   ```bash
   git push origin main
   ```
2. In the **Vercel Dashboard**, click **"New Project"** and import the `Hack-Odyssey` repository.
3. Keep the default settings (Framework Preset: **Vite**, Root Directory: `./`).
4. Click **Deploy**.

### Method 2: Vercel CLI
```bash
npx vercel --prod
```

---

## 👥 Organization & Credits

- **Host**: **KARE ACM Student Chapter**
- **Institution**: Kalasalingam Academy of Research and Education (KARE), Tamil Nadu, India
- **Event**: Hack Odyssey 4.0

---

<div align="center">

Made with ❤️ by the **KARE ACM Student Chapter** Team

</div>
