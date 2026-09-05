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
  title: "My Developer Portfolio",
  description:
    "Showcasing my projects, technical skills, and web development journey.",
  openGraph: {
    title: "My Developer Portfolio",
    description:
      "Showcasing my projects, technical skills, and web development journey.",
    url: "https://osward-portfolio.vercel.app",
    siteName: "Portfolio",
    type: "website",
  },
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
