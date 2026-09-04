"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="top"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="cursor-pointer bg-linear-to-r from-neon-cyan to-violet-400 bg-clip-text text-lg font-bold text-transparent transition-opacity hover:opacity-80"
        >
          Osward Puriran
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5 sm:gap-8">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-neon-cyan sm:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white md:hidden"
        >
          {isOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 top-full z-50 flex w-full flex-col items-center gap-6 overflow-hidden border-b border-white/10 bg-[#0a0a0a]/95 py-6 backdrop-blur-md md:hidden"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-white transition-colors hover:text-neon-cyan"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}