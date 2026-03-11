"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
}

const Marquee = ({ items }: MarqueeProps) => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035], // Adjust based on content width if possible, or use a large enough value
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 25,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <div className="section-divider" style={{ overflow: "hidden" }}>
      <span className="divider-label">Specialties</span>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <motion.div 
          className="marquee-content"
          variants={marqueeVariants}
          animate="animate"
          style={{ display: "flex", gap: "4rem", whiteSpace: "nowrap" }}
        >
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <span key={index} className="marquee-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {item} <span style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
