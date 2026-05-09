import { useState } from "react";
import { motion } from "motion/react";
import profilePhoto from "../../minha foto de perfil.jpeg";
import MiniSignalStrip from "./MiniSignalStrip";
import TechCore from "./TechCore";

function Hero({ profile }) {
  const [pointerStyle, setPointerStyle] = useState({
    "--pointer-x": "50%",
    "--pointer-y": "50%",
    "--rotate-x": "0deg",
    "--rotate-y": "0deg",
  });

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;

    setPointerStyle({
      "--pointer-x": `${x}px`,
      "--pointer-y": `${y}px`,
      "--rotate-x": `${rotateX.toFixed(2)}deg`,
      "--rotate-y": `${rotateY.toFixed(2)}deg`,
    });
  }

  function resetPointer() {
    setPointerStyle({
      "--pointer-x": "50%",
      "--pointer-y": "50%",
      "--rotate-x": "0deg",
      "--rotate-y": "0deg",
    });
  }

  return (
    <header
      className="hero"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      style={pointerStyle}
    >
      <div className="hero-copy">
        <p className="hero-kicker">{profile.kicker}</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="hero-text">{profile.summary}</p>

        <div className="hero-badges">
          {profile.skills.map((skill) => (
            <span className="hero-badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <div className="hero-facts">
          {profile.heroFacts.map((fact) => (
            <article className="hero-fact-card" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </article>
          ))}
        </div>

        <MiniSignalStrip />
      </div>

      <div className="hero-side">
        <div className="hero-side-top">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            className="hero-photo-wrap"
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <motion.div
              className="hero-photo-ring"
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              whileHover={{ rotate: -1.5, scale: 1.02 }}
            >
              <img
                className="hero-photo"
                src={profilePhoto}
                alt={`Foto de perfil de ${profile.name}`}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-spotlight"
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <p className="spotlight-label">Localização</p>
            <strong>{profile.location}</strong>
            <p className="spotlight-copy">
              Estudante de Engenharia de Software construindo uma carreira com
              foco em back-end, aprendizado contínuo e entregas consistentes.
            </p>
            <a className="hero-link" href="#projetos">
              Ver projetos em destaque
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <TechCore />
        </motion.div>
      </div>
    </header>
  );
}

export default Hero;
