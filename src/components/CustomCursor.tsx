"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        border: "1px solid var(--gold)",
        pointerEvents: "none",
        zIndex: 10000,
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
