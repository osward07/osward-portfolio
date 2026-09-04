"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

const particlesLoaded = async (): Promise<void> => {};

const particleOptions: ISourceOptions = {
  fullScreen: {
    enable: false,
  },
  detectRetina: true,
  fpsLimit: 60,
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        width: 800,
        height: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    links: {
      enable: false,
      color: "#ffffff",
    },
    opacity: {
      value: {
        min: 0.2,
        max: 0.7,
      },
      animation: {
        enable: true,
        speed: 0.4,
        sync: false,
      },
    },
    size: {
      value: {
        min: 1,
        max: 2.5,
      },
    },
    move: {
      enable: true,
      speed: 0.35,
      direction: "none",
      outModes: {
        default: "out",
      },
      random: true,
      straight: false,
    },
    shadow: {
      enable: true,
      color: "#ffffff",
      blur: 8,
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 2,
        speed: 3,
      },
    },
  },
};

export default function ParticleBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <ParticlesProvider init={particlesInit}>
        <Particles
          id="particle-background"
          className="h-full w-full"
          options={particleOptions}
          particlesLoaded={particlesLoaded}
        />
      </ParticlesProvider>
    </div>
  );
}
