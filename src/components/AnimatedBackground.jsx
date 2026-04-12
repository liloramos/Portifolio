import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particleOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  detectRetina: true,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 0.3,
        },
      },
    },
  },
  particles: {
    color: {
      value: ["#60a5fa", "#93c5fd", "#38bdf8"],
    },
    links: {
      color: "#60a5fa",
      distance: 140,
      enable: true,
      opacity: 0.18,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 0.65,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 900,
      },
      value: 34,
    },
    opacity: {
      value: {
        min: 0.12,
        max: 0.4,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
    },
  },
};

function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="particle-layer"
      id="portfolio-particles"
      init={particlesInit}
      options={particleOptions}
    />
  );
}

export default AnimatedBackground;
