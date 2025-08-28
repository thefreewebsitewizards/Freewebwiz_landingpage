import React, { useMemo } from 'react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';

const ScrollAnimations: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // Optimized scroll transforms with memoization
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.3, 0]);
  
  // Memoize particle array to prevent recreation on every render
  const particles = useMemo(() => 
    [...Array(shouldReduceMotion ? 3 : 6)].map((_, i) => ({
      id: i,
      left: `${20 + (i * 15)}%`,
      top: `${20 + (i * 10)}%`,
      delay: `${i * 0.5}s`
    })), [shouldReduceMotion]
  );

  return (
    <>
      {/* Optimized Floating Particles */}
      <div
        className="fixed inset-0 pointer-events-none z-0 will-change-opacity"
        style={{ 
          opacity: shouldReduceMotion ? 0.3 : 0.6,
          transition: 'opacity 0.3s ease'
        }}
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-slash-gold/20 rounded-full will-change-transform"
            style={{
              left: particle.left,
              top: particle.top,
              animation: shouldReduceMotion ? 'none' : `pulse 3s ease-in-out infinite ${particle.delay}`
            }}
          />
        ))}
      </div>

      {/* Optimized Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-slash-gold via-purple-500 to-slash-gold z-50 origin-left will-change-transform"
        style={{ 
          scaleX: scrollYProgress,
          transformOrigin: 'left center'
        }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: shouldReduceMotion ? 0.1 : 0.3, 
          ease: "easeOut"
        }}
      />

      {/* Optimized Background Elements */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 will-change-opacity" 
        style={{ 
          opacity: shouldReduceMotion ? 0.2 : 0.4,
          transition: 'opacity 0.3s ease'
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-slash-gold/5 will-change-transform" style={{ transform: 'rotate(45deg)' }} />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-500/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-slash-gold/3 to-purple-500/3 rounded-full" />
      </div>
    </>
  );
};

export default ScrollAnimations;