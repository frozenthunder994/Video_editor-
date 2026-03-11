"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  previewVideo: string;
  tools: string[];
  client: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="project-video-container">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="project-thumbnail"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        <video
          ref={videoRef}
          src={project.previewVideo}
          className="project-preview-video"
          muted
          loop
          playsInline
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
      <div className="project-info-overlay">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
