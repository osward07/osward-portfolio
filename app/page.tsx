import Hero from "@/components/Hero";
import AboutSkills from "@/components/AboutSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSkills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
