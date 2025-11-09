// src/utils/MotionWrapper.jsx
// Small page transition wrapper using framer-motion.
// - Uses AnimatePresence so exit/enter animations work during route changes.
// - Keep animations simple (opacity + translateY) for smoothness and performance.

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function MotionWrapper({ children }) {
  const location = useLocation();

  // Respect users who prefer reduced motion — do not run animations
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    // If reduced motion is preferred, return children without animation wrapper.
    return <>{children}</>;
  }

  // Simple animation variants (GPU-friendly: opacity + transform)
  const variants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* 
        Use location.pathname as key so AnimatePresence knows when child changed.
        motion.div wraps the page content and animates on mount/unmount.
      */}
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }} // snappy but smooth
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
