"use client";

import { motion, type Variants } from "framer-motion";

const ctaTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 20,
};

export default function Hero() {
  const focusVariant: Variants = {
    hidden: { opacity: 0, scale: 1.1, y: 30, filter: "blur(15px)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-20 text-center">
      <motion.div
        className="flex max-w-5xl flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
        }}
      >
        <motion.p
          className="text-base font-medium tracking-[0.2em] text-muted-foreground sm:text-lg"
          variants={focusVariant}
        >
          Hello, I am
        </motion.p>
        <motion.h1
          className="mt-3 bg-gradient-to-r from-neon-cyan via-white to-violet-400 bg-clip-text text-7xl font-bold leading-none text-transparent sm:text-8xl md:text-9xl"
          variants={focusVariant}
        >
          Osward!
        </motion.h1>
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
          variants={focusVariant}
        >
          Providing a complete digital solutions through web development and virtual support.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={focusVariant}
        >
          <motion.a
            href="#projects"
            className="w-full border border-neon-cyan px-7 py-3 font-bold text-neon-cyan transition-colors hover:bg-neon-cyan hover:text-background sm:w-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(34, 211, 238, 0.65)" }}
            whileTap={{ scale: 0.98 }}
            transition={ctaTransition}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="w-full border border-violet-400 px-7 py-3 font-bold text-violet-300 transition-colors hover:bg-violet-400 hover:text-background sm:w-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(167, 139, 250, 0.65)" }}
            whileTap={{ scale: 0.98 }}
            transition={ctaTransition}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}