import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osward Puriran | IT Professional & Developer",
  description:
    "Portfolio of Osward Puriran, a passionate Information Technology student and developer based in Quezon City, specializing in web development, AI integration, and digital media.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} min-h-full antialiased`}>
      <body className="relative min-h-screen bg-background font-sans text-foreground">
        <ParticleBackground />
        <Navbar />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
