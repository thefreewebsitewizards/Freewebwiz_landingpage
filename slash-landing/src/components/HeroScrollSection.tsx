import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroScrollSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Phone animations
  const phoneScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const phoneY = useTransform(scrollYProgress, [0, 0.4], [0, -150]);

  // Dollar icon animations - moves from phone center outward and scales up
  const dollarScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 8]);
  const dollarY = useTransform(scrollYProgress, [0.3, 0.7], [0, -100]);
  const dollarOpacity = useTransform(scrollYProgress, [0.3, 0.6, 0.8], [1, 1, 0]);

  // Background sample work images
  const backgroundOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 0.6]);
  const backgroundScale = useTransform(scrollYProgress, [0.5, 0.8], [0.8, 1]);

  // Final hero text
  const heroTextOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const heroTextY = useTransform(scrollYProgress, [0.6, 0.9], [50, 0]);

  // Sample work images for phone carousel
  const sampleWorks = [
    { id: 1, bg: 'from-blue-500 to-purple-600', title: 'E-commerce Store' },
    { id: 2, bg: 'from-green-500 to-teal-600', title: 'Restaurant Website' },
    { id: 3, bg: 'from-pink-500 to-red-600', title: 'Portfolio Site' },
    { id: 4, bg: 'from-yellow-500 to-orange-600', title: 'Business Landing' },
    { id: 5, bg: 'from-indigo-500 to-blue-600', title: 'Agency Website' }
  ];

  // Dollar SVG Icon Component
  const DollarIcon = ({ className = "" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91 2.28.6 4.18 1.58 4.18 3.91 0 1.82-1.33 2.96-3.12 3.16z"/>
    </svg>
  );

  return (
    <section ref={ref} className="relative h-[400vh] bg-black text-white overflow-hidden">
      {/* Phone Container with Sample Work Images */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ 
            scale: phoneScale, 
            opacity: phoneOpacity,
            y: phoneY
          }}
          className="relative z-10"
        >
          {/* Phone Frame */}
          <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
            {/* Phone Screen */}
            <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-black z-20 flex items-center justify-between px-6 text-white text-xs">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                  </div>
                </div>
              </div>
              
              {/* Sample Work Carousel */}
              <div className="absolute inset-0 pt-8 pb-4">
                <div className="h-full flex flex-col gap-4 p-4 overflow-hidden">
                  {sampleWorks.map((work, index) => (
                    <motion.div
                      key={work.id}
                      className={`w-full h-24 bg-gradient-to-br ${work.bg} rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      {/* Website mockup content */}
                      <div className="absolute inset-2 bg-white rounded-lg p-2 flex flex-col">
                        <div className="h-2 bg-gray-200 rounded mb-1"></div>
                        <div className="h-1 bg-gray-100 rounded mb-1 w-3/4"></div>
                        <div className="h-1 bg-gray-100 rounded mb-2 w-1/2"></div>
                        <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded"></div>
                      </div>
                      
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: [-100, 300],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
            </div>
          </div>
          
          {/* Dollar Icon in Phone Center */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
              <DollarIcon className="w-8 h-8 text-green-600" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Dollar Icon - Transforms and Moves Outward */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
        <motion.div
          style={{ 
            scale: dollarScale, 
            y: dollarY,
            opacity: dollarOpacity
          }}
          className="absolute z-30"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <DollarIcon className="w-8 h-8 text-green-600" />
          </div>
        </motion.div>
      </div>

      {/* Background Sample Work Images */}
      <div className="sticky top-0 h-screen pointer-events-none">
        <motion.div
          style={{ opacity: backgroundOpacity, scale: backgroundScale }}
          className="absolute inset-0 z-0"
        >
          {/* Floating sample work cards */}
          {sampleWorks.map((work, index) => (
            <motion.div
              key={`bg-${work.id}`}
              className={`absolute w-40 h-32 bg-gradient-to-br ${work.bg} rounded-xl shadow-2xl opacity-40`}
              style={{
                top: `${20 + (index * 15)}%`,
                left: index % 2 === 0 ? `${10 + (index * 5)}%` : `${70 - (index * 5)}%`,
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (10 + index * 3)}deg)`
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [(index % 2 === 0 ? 1 : -1) * (10 + index * 3), (index % 2 === 0 ? 1 : -1) * (15 + index * 3), (index % 2 === 0 ? 1 : -1) * (10 + index * 3)]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              {/* Website preview content */}
              <div className="absolute inset-3 bg-white rounded-lg p-2 flex flex-col">
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 bg-gray-100 rounded mb-1 w-3/4"></div>
                <div className="h-2 bg-gray-100 rounded mb-2 w-1/2"></div>
                <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Final Bold Hero Text */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        <motion.div
          style={{
            opacity: heroTextOpacity,
            y: heroTextY
          }}
          className="text-center max-w-5xl px-4 relative"
        >
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              WE BUILD
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
              FREE WEBSITES!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional, stunning websites for small businesses, creators, and influencers. 
            No hidden costs, just beautiful web presence that converts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button 
              className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get My Free Website
            </motion.button>
            
            <motion.button 
              className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroScrollSection;