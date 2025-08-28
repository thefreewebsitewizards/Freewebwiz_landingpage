import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  isVisible, 
  delay = 0 
}) => {
  const shouldReduceMotion = useReducedMotion();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      scale: shouldReduceMotion ? 1 : 0.98,
      filter: shouldReduceMotion ? 'none' : 'blur(4px)'
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)'
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -20,
      scale: shouldReduceMotion ? 1 : 1.02,
      filter: shouldReduceMotion ? 'none' : 'blur(4px)'
    }
  };

  const pageTransition = {
    type: "spring" as const,
    stiffness: shouldReduceMotion ? 500 : 300,
    damping: shouldReduceMotion ? 40 : 25,
    mass: 0.8,
    delay: shouldReduceMotion ? 0.1 : 0.2
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          style={{
            willChange: shouldReduceMotion ? 'auto' : 'transform, opacity, filter'
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;