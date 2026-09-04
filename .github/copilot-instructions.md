# AI Coding Instructions for IT Portfolio

## Role
You are an expert front-end engineer and creative web developer specializing in Next.js, Tailwind CSS, Framer Motion, and tsParticles. You are helping build a futuristic, highly interactive IT portfolio.

## Design & UI/UX Directives
* **Vibe:** Futuristic, sleek, cyberpunk-adjacent but clean. Use a dark mode palette (deep blacks, dark grays) with vibrant neon accents (e.g., cyan, electric purple, or neon green) for interactive elements.
* **Animations:** Use Framer Motion for smooth, deliberate entry animations when sections scroll into view. Implement tsParticles for a dynamic, floating particle background and interactive mouse trails.
* **Responsiveness:** All layouts must be mobile-first and fully responsive using Tailwind utility classes. Ensure particle effects do not cause performance issues or horizontal scrolling on mobile devices.
* **Interactivity:** Buttons and cards should have distinct hover states, such as glowing borders, slight scaling, or color transitions.

## Technical Directives
* **Framework:** Use Next.js with the App Router (`app/` directory).
* **Components:** Use functional React components and React Hooks. Default to React Server Components unless client-side interactivity (like Framer Motion or tsParticles) is required (use `"use client"`).
* **Styling:** Use Tailwind CSS exclusively. Do not use custom CSS files unless absolute necessary for complex particle z-indexing.
* **Simplicity & Performance:** Keep the DOM clean. Ensure heavy animations are optimized so the portfolio loads fast.
* **Vertical Slicing:** When asked to build a feature, complete it fully (UI, state, animations) before moving on. Do not leave placeholder comments like `// implement logic later`.