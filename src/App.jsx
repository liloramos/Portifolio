import { useEffect } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import ContactList from "./components/ContactList";
import Hero from "./components/Hero";
import MotionSection from "./components/MotionSection";
import ProjectCard from "./components/ProjectCard";
import SignalWave from "./components/SignalWave";
import SectionTitle from "./components/SectionTitle";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import "./styles/app.css";

function App() {
  useEffect(() => {
    function updateScrollDepth() {
      const scrollTop = window.scrollY;
      document.documentElement.style.setProperty(
        "--scroll-depth",
        `${Math.min(scrollTop * 0.35, 180)}px`
      );
    }

    updateScrollDepth();
    window.addEventListener("scroll", updateScrollDepth, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollDepth);
    };
  }, []);

  return (
    <div className="app-page">
      <AnimatedBackground />

      <div className="app-shell">
        <Hero profile={profile} />

        <main className="content">
          <MotionSection className="panel panel-highlight" id="sobre">
            <SectionTitle
              eyebrow="Objetivo"
              title="Projetos civis com clareza, cuidado e metodo"
            />
            <p>{profile.objective}</p>
            <p>{profile.about}</p>
            <ContactList contacts={profile.contacts} />
          </MotionSection>

          <MotionSection className="panel">
            <SectionTitle
              eyebrow="Diferenciais"
              title="Uma projetista em formacao com repertorio para crescer"
            />

            <div className="highlight-grid">
              {profile.highlights.map((item) => (
                <article className="highlight-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </MotionSection>

          <MotionSection className="panel panel-grid">
            <div className="info-block">
              <SectionTitle
                eyebrow="Trajetoria"
                title="Experiencias e frentes de projeto"
              />

              <div className="timeline">
                {profile.experience.map((job) => (
                  <article className="timeline-card" key={job.company + job.period}>
                    <div className="timeline-heading">
                      <h3>{job.role}</h3>
                      <span>{job.period}</span>
                    </div>
                    <p className="timeline-company">
                      {job.company} | {job.location}
                    </p>
                    <p>{job.description}</p>
                    <ul className="bullet-list">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="info-block">
              <SectionTitle eyebrow="Formacao" title="Base academica" />
              <article className="education-card">
                <h3>{profile.education.course}</h3>
                <p>{profile.education.institution}</p>
                <p>
                  {profile.education.period} | {profile.education.status}
                </p>
              </article>

              <SectionTitle eyebrow="Idiomas" title="Comunicacao" />
              <div className="language-list">
                {profile.languages.map((language) => (
                  <span className="info-chip language-chip" key={language}>
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </MotionSection>

          <MotionSection className="panel" id="habilidades">
            <SectionTitle
              eyebrow="Habilidades"
              title="Ferramentas e competencias para projetos BIM"
            />

            <div className="skills-layout">
              {profile.skillGroups.map((group) => (
                <article className="skill-group-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chip-list">
                    {group.items.map((item) => (
                      <span className="info-chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </MotionSection>

          <MotionSection className="panel" id="projetos">
            <SectionTitle
              eyebrow="Projetos"
              title="Estrutura pronta para receber os cases do portfolio"
            />

            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.name} />
              ))}
            </div>
          </MotionSection>

          <MotionSection className="panel">
            <SectionTitle
              eyebrow="Processo BIM"
              title="Do modelo ao desenho tecnico"
            />
            <SignalWave />
          </MotionSection>
        </main>
      </div>
    </div>
  );
}

export default App;
