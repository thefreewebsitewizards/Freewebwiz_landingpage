import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Optimized transform values for scroll animations
  const phoneScale = useTransform(scrollYProgress, [0, 0.3], [1, shouldReduceMotion ? 0.95 : 0.8]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [shouldReduceMotion ? 20 : 100, 0]);

  // Memoize animation variants to prevent recreation
  const animationVariants = useMemo(() => ({
    initial: { y: shouldReduceMotion ? 20 : 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: shouldReduceMotion ? 0.3 : 1, delay: 0.5 }
  }), [shouldReduceMotion]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slash-dark via-slate-900 to-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full will-change-transform"
          animate={shouldReduceMotion ? {} : {
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 3,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full will-change-transform"
          animate={shouldReduceMotion ? {} : {
            y: [0, -15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 4,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay: shouldReduceMotion ? 0 : 1,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Mobile Phone Animation */}
        <motion.div
          className="relative mb-8 will-change-transform"
          style={{
            scale: phoneScale,
            opacity: phoneOpacity,
          }}
          {...animationVariants}
        >
          {/* Phone Frame */}
          <div className="relative w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
            {/* Screen */}
            <div className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-[2.5rem] relative overflow-hidden">
              {/* Website preview mockup */}
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-2xl p-4 flex flex-col">
                <div className="h-8 bg-gray-100 rounded mb-3 flex items-center px-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-1"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-1"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                  <div className="h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded mt-4"></div>
                </div>
              </div>
              
              {/* Card shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent will-change-transform"
                animate={shouldReduceMotion ? {} : {
                  x: [-100, 300],
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 3,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatDelay: shouldReduceMotion ? 0 : 2,
                  ease: "easeInOut",
                }}
              />
            </div>
            
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl" />
          </div>
        </motion.div>

        {/* Text Content with Scroll Animation */}
        <motion.div
          className="text-center max-w-4xl will-change-transform"
          style={{
            opacity: textOpacity,
            y: textY,
          }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Free{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Professional
            </span>
            <br />
            Websites for Everyone
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            I create stunning, professional websites for small businesses, creators, influencers, and UGC creators – completely free. No hidden costs, just beautiful web presence.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <motion.button
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get My Free Website
            </motion.button>
            
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;