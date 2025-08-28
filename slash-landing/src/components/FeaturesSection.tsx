import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ElectricBorder from './ElectricBorder';

const FeaturesSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const businessTypes = [
    {
      title: "Marketing Agencies",
      description: "Streamline client campaigns and track performance metrics with our comprehensive dashboard."
    },
    {
      title: "Wholesalers",
      description: "Manage bulk orders and inventory with real-time tracking and automated workflows."
    },
    {
      title: "E-commerce",
      description: "Optimize your online store with advanced analytics and customer insights."
    },
    {
      title: "Online Travel Agencies",
      description: "Coordinate bookings and manage customer experiences across multiple platforms."
    },
    {
      title: "SaaS Companies",
      description: "Scale your software business with integrated analytics and user management tools."
    },
    {
      title: "Retail Chains",
      description: "Manage multiple locations with centralized inventory and sales tracking."
    },
    {
      title: "Financial Services",
      description: "Secure transaction processing with compliance monitoring and risk assessment."
    },
    {
      title: "Healthcare Providers",
      description: "Streamline patient management and appointment scheduling with HIPAA compliance."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };



  return (
    <section className="pt-0 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-12 sm:mb-16">
          <motion.div
            ref={ref}
            className="text-left mb-6 sm:mb-0"
            initial={{ opacity: 0, y: shouldReduceMotion ? 10 : 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 10 : 30 }}
            transition={{ 
              duration: shouldReduceMotion ? 0.3 : 0.8,
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
              Who we're built for
            </h2>
          </motion.div>
          
          {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
          <motion.div
            className="hidden sm:flex gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ 
              duration: shouldReduceMotion ? 0.2 : 0.6, 
              delay: shouldReduceMotion ? 0.1 : 0.3,
              type: "spring",
              stiffness: 400,
              damping: 35
            }}
          >
            <button className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/50 transition-all duration-300">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/50 transition-all duration-300">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Cards container - responsive layout */}
      <div className="relative">
        {/* Mobile: Grid layout */}
        <div className="block sm:hidden">
          <motion.div
            className="grid grid-cols-1 gap-8 px-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {businessTypes.slice(0, 4).map((business, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group cursor-pointer relative w-full p-4"
                style={{ 
                  transformStyle: shouldReduceMotion ? 'flat' : "preserve-3d",
                  willChange: shouldReduceMotion ? 'auto' : 'transform'
                }}
              >
                <ElectricBorder
                  color="#7df9ff"
                  speed={0.8}
                  chaos={0.3}
                  thickness={1.5}
                  style={{ borderRadius: 16 }}
                  className="h-full"
                >
                  <div className="bg-gradient-to-br from-gray-900/95 to-black/98 backdrop-blur-xl rounded-2xl p-8 h-full relative overflow-hidden">
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-2xl" />
                    
                    <div className="text-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-lg shadow-cyan-500/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                        <span className="text-2xl relative z-10 filter drop-shadow-sm">💼</span>
                      </div>
                      <h3 
                        className="text-xl font-black text-white mb-4 leading-tight"
                        style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
                      >
                        {business.title}
                      </h3>
                      <p 
                        className="text-gray-300 text-base font-medium leading-relaxed"
                        style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
                      >
                        {business.description}
                      </p>
                    </div>
                  </div>
                </ElectricBorder>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Desktop: Horizontal scroll layout */}
        <div className="hidden sm:block relative pl-16">
          <div className="overflow-x-auto scrollbar-hide">
            <motion.div
              className="flex gap-8"
              style={{ width: 'max-content', paddingLeft: '0px', paddingRight: '64px' }}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {businessTypes.map((business, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group cursor-pointer flex-shrink-0 relative p-4"
                  style={{ 
                    width: '360px', 
                    transformStyle: shouldReduceMotion ? 'flat' : "preserve-3d",
                    willChange: shouldReduceMotion ? 'auto' : 'transform'
                  }}
                >
                  <ElectricBorder
                    color="#7df9ff"
                    speed={0.8}
                    chaos={0.3}
                    thickness={1.5}
                    style={{ borderRadius: 16 }}
                    className="h-full"
                  >
                    <div className="bg-gradient-to-br from-gray-900/95 to-black/98 backdrop-blur-xl rounded-2xl p-8 h-full relative overflow-hidden">
                      {/* Subtle background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-2xl" />
                      
                      {/* Enhanced Mockup Visual */}
                      <div className="h-44 mb-8 rounded-xl overflow-hidden relative bg-gradient-to-br from-gray-800/80 to-gray-900/90 shadow-xl border border-gray-700/30">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                        <div className="absolute top-4 left-4 right-4">
                          <div className="h-2 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded mb-3"></div>
                          <div className="h-1.5 bg-white/20 rounded w-2/3"></div>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5">
                          <div className="h-2.5 bg-gradient-to-r from-cyan-400/60 to-blue-500/60 rounded mb-3 shadow-sm"></div>
                          <div className="h-2 bg-white/30 rounded w-3/4"></div>
                        </div>
                        {/* Floating elements */}
                        <div className="absolute top-1/2 right-5 w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="text-center relative z-10">
                        <div className="w-18 h-18 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden shadow-xl shadow-cyan-500/25">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-full" />
                          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-300/20 to-transparent rounded-full" />
                          <span className="text-3xl relative z-10 filter drop-shadow-sm">💼</span>
                        </div>
                        <h3 
                          className="text-2xl font-black text-white mb-4 leading-tight"
                          style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
                        >
                          {business.title}
                        </h3>
                        <p 
                          className="text-gray-300 text-base font-medium leading-relaxed"
                          style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
                        >
                          {business.description}
                        </p>
                      </div>
                    </div>
                  </ElectricBorder>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Section */}
        <motion.div
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: shouldReduceMotion ? 20 : 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 20 : 40 }}
          transition={{ 
            duration: shouldReduceMotion ? 0.3 : 0.6, 
            delay: shouldReduceMotion ? 0.2 : 0.4,
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          {[
            { value: "100+", label: "websites created" },
            { value: "50+", label: "happy clients" },
            { value: "24hrs", label: "average delivery" },
            { value: "100%", label: "satisfaction rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              transition={{ 
                type: "spring" as const, 
                stiffness: shouldReduceMotion ? 500 : 400, 
                damping: shouldReduceMotion ? 40 : 25,
                mass: 0.8
              }}
              style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-xs sm:text-sm font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;