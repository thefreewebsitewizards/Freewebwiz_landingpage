import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      className={`relative ${className} will-change-transform will-change-opacity`}
      initial={{ 
        opacity: 0, 
        y: shouldReduceMotion ? 10 : 50,
        scale: shouldReduceMotion ? 0.98 : 0.95
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      viewport={{ 
        once: true, 
        amount: shouldReduceMotion ? 0.3 : 0.1,
        margin: "-50px"
      }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.8,
        delay: shouldReduceMotion ? 0 : delay,
        type: "spring",
        stiffness: shouldReduceMotion ? 200 : 120,
        damping: shouldReduceMotion ? 25 : 22,
        mass: 0.8
      }}
    >
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-slash-gold/20 to-transparent h-px top-0 will-change-transform"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ 
          duration: shouldReduceMotion ? 0.3 : 1.2, 
          delay: shouldReduceMotion ? 0 : delay + 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      />
      
      {/* Content */}
      <motion.div
        initial={{ 
          filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
          opacity: shouldReduceMotion ? 1 : 0.8
        }}
        whileInView={{ 
          filter: "blur(0px)",
          opacity: 1
        }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ 
          duration: shouldReduceMotion ? 0.2 : 0.5, 
          delay: shouldReduceMotion ? 0 : delay + 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
      
      {/* Bottom Border */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-slash-gold/10 to-transparent h-px bottom-0 will-change-transform"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ 
          duration: shouldReduceMotion ? 0.3 : 1.0, 
          delay: shouldReduceMotion ? 0 : delay + 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      />
    </motion.div>
  );
};

export default SectionTransition;