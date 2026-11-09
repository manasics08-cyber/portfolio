# Manasi CS - Personal Portfolio Website

A modern, high-performance, single-page personal portfolio for **Manasi CS**, a Computer Science & Engineering student at **Thejus Engineering College**. 

Engineered with a dark, premium aesthetic matching modern high-tech developer landing pages: pure black background (`#000000`), deep surface cards (`#050A06`), vibrant green accents (`#3DAA5C` and `#4ADE80`), and an interactive glossy 3D green abstract sculpture.

---

## ✨ Highlights & Features

- **Fluid Dark Design System**: Pure `#000000` canvas, `#050A06` glass cards with 1px subtle borders, vivid `#3DAA5C` primary accents with `#4ADE80` neon glow.
- **Interactive 3D WebGL Hero**: Real-time 3D Torus Knot parametric sculpture built with **Three.js** featuring physical materials, clearcoat sheen, responsive cursor tilt, and floating physics.
- **Transforming Ideas Into Impact Stats Strip**: Animated count-up numbers triggered on scroll with clean divider rule.
- **Discover More About Me**: Two-column layout detailing academic milestones at Thejus Engineering College, engineering specializations, and personal values.
- **Technical Arsenal**: Categorized skills (Frontend, Backend, Core Languages, Tools) with proficiency indicators and an infinite logo marquee strip.
- **Featured Projects**: 3D tilt cards with hover zoom preview, live demo & GitHub repository links.
- **Vertical Experience & Education Timeline**: Self-drawing animated green line synchronized with scroll progress and alternating cards.
- **Interactive Contact Suite**: Name, email, subject, and message fields with green focus glow, instant confetti celebration, and direct social channel shortcuts.
- **Lenis Smooth Scrolling**: Buttery 60/120 FPS inertial scrolling synchronized with GSAP ScrollTrigger.
- **Custom Adaptive Cursor**: Precision neon green dot with spring trailing ring (automatically disabled on touch devices).
- **Floating Scroll to Top**: Quick-jump green button matching the design system.
- **Single-File Content Architecture**: All portfolio data, projects, stats, and milestones are managed centrally in `src/data/portfolioData.ts`.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Design System Tokens
- **Typography**: Google Fonts — Manrope
- **3D Graphics**: Three.js (WebGL Canvas)
- **Animations**: Framer Motion + GSAP + ScrollTrigger
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React + Custom SVG Brand Badges
- **Micro-effects**: Canvas Confetti

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher (tested on Node v22)
- npm or pnpm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/manasics/portfolio.git

# Navigate into the project directory
cd portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Production Build

```bash
npm run build
```

This compiles optimized assets to the `dist/` directory. You can preview the production build with:

```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your repository to **GitHub**.
2. Visit [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio is live in under 60 seconds!

### Deploy to Netlify

1. Push your repository to **GitHub**.
2. Visit [Netlify](https://netlify.com) and select **"Add new site" -> "Import an existing project"**.
3. Connect your GitHub repository.
4. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

---

## 📁 Project Architecture

```
manasi/
├── public/
│   ├── images/
│   │   └── shape-ref.jpg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx     # Adaptive spring trailing ring cursor
│   │   ├── Navbar.tsx           # Sticky glassmorphic nav & mobile drawer
│   │   ├── Preloader.tsx        # High-tech loading countdown & mask reveal
│   │   ├── ScrollProgress.tsx   # Pinned top green progress bar
│   │   ├── ScrollToTop.tsx      # Floating rounded-square scroll button
│   │   ├── SocialIcons.tsx      # Crisp SVGs for GitHub, LinkedIn, Figma, etc.
│   │   └── ThreeHeroShape.tsx   # Interactive WebGL 3D glossy green mesh
│   ├── data/
│   │   └── portfolioData.ts     # Single source of truth for all content
│   ├── hooks/
│   │   ├── useLenis.ts          # Smooth scrolling configuration
│   │   └── useScrollSpy.ts      # Active section observer
│   ├── sections/
│   │   ├── Hero.tsx             # Large headline, rotating badge, CTAs, 3D
│   │   ├── StatsStrip.tsx       # "Transforming Ideas Into Impact" count-up
│   │   ├── About.tsx            # Thejus Engg story & rounded green card
│   │   ├── Skills.tsx           # Categorized cards, progress, infinite marquee
│   │   ├── Projects.tsx         # 3D tilt cards with live preview & repo links
│   │   ├── Experience.tsx       # Vertical timeline with drawing green line
│   │   ├── Contact.tsx          # Focus-glow form & celebration confetti
│   │   └── Footer.tsx           # Minimalist brand footer & back-to-top
│   ├── App.tsx                  # Root layout orchestration
│   ├── index.css                # Tailwind directives & design tokens
│   ├── main.tsx                 # React DOM mount point
│   └── vite-env.d.ts            # TypeScript environment definitions
├── index.html                   # HTML entry with Manrope font preconnect
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Design tokens, palette, and animations
└── vite.config.ts               # Vite build and server options
```

---

## 🎨 Design Tokens

| Token | Hex / Value | Purpose |
| :--- | :--- | :--- |
| **Canvas Background** | `#000000` | Pure deep black background |
| **Surface Deep** | `#050A06` | Section and card background |
| **Surface Card** | `#080E09` | Hover card background |
| **Primary Green** | `#3DAA5C` | Primary accent, pills, buttons |
| **Glow Neon** | `#4ADE80` | Highlights, active indicators, rim light |
| **Border Subtle** | `rgba(255,255,255,0.08)` | Dividers, card boundaries |
| **Body Copy** | `#B5B5B5` | Readable muted body text |
| **Headings** | `#FFFFFF` | Bold white titles (weights 700-800) |
| **Font Family** | `'Manrope', sans-serif` | Clean, geometric, fluid typography |

---

## 👩‍💻 Author

**Manasi CS**  
Student at *Thejus Engineering College*  
Computer Science & Engineering  
[GitHub Profile](https://github.com/manasics) • [LinkedIn](https://linkedin.com/in/manasi-cs) • [Email](mailto:manasics.dev@gmail.com)

