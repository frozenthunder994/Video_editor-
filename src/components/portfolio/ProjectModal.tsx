"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
          
          <div className="modal-video-box">
            {/* Using controlled video here, can be replaced with YouTube/Vimeo embed */}
            <video
              src={project.previewVideo}
              controls
              autoPlay
              className="project-preview-video"
              style={{ opacity: 1, position: 'relative' }}
            />
          </div>

          <div className="modal-details">
            <div className="modal-info">
              <span className="project-category">{project.category}</span>
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-desc">{project.description}</p>
            </div>
            <div className="modal-meta">
              <div className="meta-item">
                <span className="modal-meta-label">Client</span>
                <p className="modal-meta-value">{project.client}</p>
              </div>
              <div className="meta-item">
                <span className="modal-meta-label">Tools Used</span>
                <p className="modal-meta-value">{project.tools.join(", ")}</p>
              </div>
              <div className="meta-item">
                <span className="modal-meta-label">Category</span>
                <p className="modal-meta-value">{project.category}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
