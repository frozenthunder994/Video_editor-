"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
}

const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number and suffix (e.g., "4+" -> 4, "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const count = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      count.set(numericValue);
    }
  }, [isInView, count, numericValue]);

  const display = useTransform(count, (latest) => Math.floor(latest));

  return (
    <motion.span ref={ref} className="stat-num">
      {value === "∞" ? "∞" : (
        <>
          <motion.span>{display}</motion.span>
          {suffix}
        </>
      )}
    </motion.span>
  );
};

export default AnimatedCounter;
