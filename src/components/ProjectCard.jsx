import { motion } from "motion/react";

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
    >
      <span className="project-tag">{project.tag}</span>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </motion.article>
  );
}

export default ProjectCard;
