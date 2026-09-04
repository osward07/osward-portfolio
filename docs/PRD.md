# Product Requirements Document (PRD): IT Portfolio

## 1. Project Overview
**Name:** Osward's IT Portfolio
**Description:** A modern, highly interactive single-page portfolio website for a sophomore Information Technology student at Quezon City University. It showcases full-stack development, cybersecurity, and hardware/AI integration skills.
**Architecture:** Single-Page Application (SPA). All content exists on one page. The navigation bar uses anchor links to smoothly scroll down to specific sections.
**Vibe/Aesthetic:** Futuristic, immersive, and sleek. Dark mode by default, featuring dynamic, dense backgrounds with floating particles that rapidly dodge/repulse the user's cursor.

## 2. Core Sections & User Flow

### A. Navigation Bar (Navbar)
* **Design:** Fixed/sticky to the top of the viewport with a frosted-glass (backdrop-blur) effect.
* **Functionality:** Contains links to "About", "Skills", "Projects", and "Contact". Clicking these links triggers a smooth scroll to the corresponding section ID on the single page.

### B. Hero Section
* **Design:** High-impact, immersive landing area centered over the dense particle background.
* **Content Stack (Top to Bottom):** 
  * "Hello, I am" (Subtle, clean font).
  * "Osward!!" (Massive, bold, gradient/glowing centerpiece).
  * "Providing a complete digital solutions through web development and virtual support." (Subtitle).
* **Interactivity:** Dense particle background (tsParticles) configured to rapidly repulse away from the mouse.
* **Call to Action:** "View Projects" and "Contact Me" buttons that smooth-scroll to their respective sections, featuring glowing/neon hover effects and Framer Motion scaling.

### C. About Me & Skills
* **Profile:** (Use the exact provided script regarding Osward Jr. N. Puriran, background, and multimedia ministry).
* **Skills Grid (Categorized strictly to provided assets):**
  * *Frontend Development:* HTML, CSS, JavaScript, React, Bootstrap, Tailwind, Vite, Hero.
  * *Backend & Databases:* Java, JavaFX, PHP, Python, Express, MongoDB, MySQL.
  * *Design & Media:* Figma, Photoshop, Canva, CapCut.
  * *Productivity & Office:* Google Docs, Excel.

### D. Projects Section
* **Display:** A responsive grid of interactive project showcase cards with neon glow borders on hover.
* **Card Anatomy:**
  * **Preview Image:** Crisp thumbnail/screenshot of the user interface with a subtle zoom/hover animation.
  * **Project Info:** Title, category badge, and concise project summary.
  * **Tech Stack Badges:** Pill tags highlighting technologies used.
  * **Action Links:** Live Demo Link and Source Code Link.

### E. Contact Section
* **Form:** Name, Email, Subject, Message inputs. 
* **Backend:** Form submissions will be securely routed and stored using a Supabase database table.