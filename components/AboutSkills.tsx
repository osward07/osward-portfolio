"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: SkillCategory;
  imagePath: string;
}

type SkillCategory =
  | "Frontend Development"
  | "Backend & Databases"
  | "Design & Media"
  | "Productivity";

const skillCategories: SkillCategory[] = [
  "Frontend Development",
  "Backend & Databases",
  "Design & Media",
  "Productivity",
];

const skills: Skill[] = [
  { name: "HTML", category: "Frontend Development", imagePath: "/skills/html.png" },
  { name: "CSS", category: "Frontend Development", imagePath: "/skills/css.png" },
  { name: "JavaScript", category: "Frontend Development", imagePath: "/skills/javascript.png" },
  { name: "React", category: "Frontend Development", imagePath: "/skills/react.png" },
  { name: "Bootstrap", category: "Frontend Development", imagePath: "/skills/bootstrap.png" },
  { name: "Tailwind", category: "Frontend Development", imagePath: "/skills/tailwind.png" },
  { name: "Vite", category: "Frontend Development", imagePath: "/skills/vite.png" },
  { name: "Hero", category: "Frontend Development", imagePath: "/skills/hero.png" },
  { name: "Java", category: "Backend & Databases", imagePath: "/skills/java.png" },
  { name: "JavaFX", category: "Backend & Databases", imagePath: "/skills/javafx.png" },
  { name: "PHP", category: "Backend & Databases", imagePath: "/skills/php.png" },
  { name: "Python", category: "Backend & Databases", imagePath: "/skills/python.png" },
  { name: "Express", category: "Backend & Databases", imagePath: "/skills/express.png" },
  { name: "MongoDB", category: "Backend & Databases", imagePath: "/skills/mongoDB.png" },
  { name: "MySQL", category: "Backend & Databases", imagePath: "/skills/mysql.png" },
  { name: "Figma", category: "Design & Media", imagePath: "/skills/figma.png" },
  { name: "Photoshop", category: "Design & Media", imagePath: "/skills/photoshop.png" },
  { name: "Canva", category: "Design & Media", imagePath: "/skills/canva.png" },
  { name: "CapCut", category: "Design & Media", imagePath: "/skills/capcut.png" },
  { name: "Google Docs", category: "Productivity", imagePath: "/skills/docs.png" },
  { name: "Excel", category: "Productivity", imagePath: "/skills/exel.png" },
];

const skillRows: Record<string, number> = {
  HTML: 0,
  Java: 0,
  Figma: 0,
  "Google Docs": 0,
  CSS: 1,
  JavaFX: 1,
  Photoshop: 1,
  Excel: 1,
  JavaScript: 2,
  PHP: 2,
  Canva: 2,
  React: 3,
  Python: 3,
  CapCut: 3,
  Bootstrap: 4,
  Express: 4,
  Tailwind: 5,
  MongoDB: 5,
  Vite: 6,
  MySQL: 6,
  Hero: 7,
};

const skillVariant: any = {
  hidden: { opacity: 0, y: 20 },
  visible: (rowIndex: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: rowIndex * 0.15, duration: 0.4, ease: "easeOut" },
  }),
};

export default function AboutSkills() {
  return (
    <div className="w-full max-w-none pb-24 pl-6 pr-0 lg:pl-16">
      <motion.section
        id="about"
        className="min-h-screen scroll-mt-24 pb-24 pt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="grid min-h-screen grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
          <motion.div
            className="flex h-full max-w-none flex-col justify-center pl-8 pr-8 lg:pl-16 lg:pr-20"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="mb-6 h-1 w-24 bg-neon-cyan shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
            <h2 className="text-6xl font-black leading-none tracking-tight text-foreground sm:text-7xl">
              ABOUT.
            </h2>
            <p className="mt-8 max-w-none text-xl font-semibold leading-8 text-foreground sm:text-2xl">
              Hello, I’m Osward Jr. N. Puriran, a man of God and a passionate student of life based in Quezon City, Philippines.
            </p>
            <div className="mt-6 max-w-none space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                Aspiring to become a reputable professional in the field of Information Technology. My interest in building practical and meaningful applications, even for everyday use or simple enjoyment, began during my high school years where I first explored web development.
              </p>
              <p>
                Growing up surrounded by technology, especially computers, shaped my curiosity and gradually developed my passion for this field. This led me to pursue my course, Bachelor of Science in Information Technology (BSIT), where I continue to grow my skills and knowledge.
              </p>
              <p>
                Aside from these, I also serve in our church as part of the multimedia ministry, contributing to various media-related tasks. In my free time, I enjoy playing online games, reading, working out, jogging, and playing sports. I’m always eager to learn, improve, and create solutions that can make a difference.
              </p>git add .
            </div>
          </motion.div>
          <motion.div
            className="relative m-0 h-full min-h-125 w-full overflow-hidden rounded-none border border-neon-cyan/30 p-0 shadow-[0_0_36px_rgba(34,211,238,0.14)]"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              src="/me.jpg"
              alt="Portrait of Osward Jr. N. Puriran"
              fill
              className="rounded-none object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-background/10" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="mx-auto flex max-w-5xl flex-col items-center scroll-mt-24 pb-24 pt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="w-full">
          <div className="mx-auto w-full max-w-lg rounded border border-neon-cyan px-12 py-5 text-center text-xl uppercase tracking-widest text-neon-cyan shadow-[0_0_24px_rgba(34,211,238,0.24)] lg:text-2xl">
            Technical Skills
          </div>
          <div className="mx-auto hidden h-12 w-px bg-neon-cyan lg:block" />
          <div className="relative mx-auto hidden h-px w-3/4 max-w-6xl bg-neon-cyan lg:block">
            <div className="absolute left-0 top-0 h-12 w-px bg-neon-cyan" />
            <div className="absolute left-[33.33%] top-0 h-12 w-px bg-neon-cyan" />
            <div className="absolute right-[33.33%] top-0 h-12 w-px bg-neon-cyan" />
            <div className="absolute right-0 top-0 h-12 w-px bg-neon-cyan" />
          </div>
          <motion.div
            className="mx-auto mt-0 grid w-full max-w-7xl grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {skillCategories.map((category) => (
              <div key={category} className="relative h-fit">
                <h3 className="mb-8 w-full text-center text-lg font-bold leading-tight text-foreground lg:text-xl">{category}</h3>
                <div className="absolute bottom-0 left-1/2 top-16 z-0 w-px -translate-x-1/2 bg-neon-cyan/70" />
                <div className="relative z-10 flex flex-wrap justify-center gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="group flex w-full max-w-50 items-center justify-start gap-3 rounded-md border border-white/10 bg-[#0a0a0a] px-6 py-4 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-neon-cyan/70 hover:bg-neon-cyan/8 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                        custom={skillRows[skill.name]}
                        variants={skillVariant}
                      >
                        <Image
                          src={skill.imagePath}
                          alt={`${skill.name} logo`}
                          width={40}
                          height={40}
                          className="h-10 w-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-base font-medium leading-tight text-foreground lg:text-lg">{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}