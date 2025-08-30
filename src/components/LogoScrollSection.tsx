import React from 'react';
import { motion } from 'framer-motion';

const LogoScrollSection: React.FC = () => {
  // Professional client logos with realistic branding
  const logos = [
    { name: 'Bella Vista', type: 'Italian Restaurant', icon: '🍝', color: 'from-red-500 to-orange-500' },
    { name: 'Iron Forge', type: 'Fitness Studio', icon: '💪', color: 'from-orange-500 to-red-600' },
    { name: 'Luxe Boutique', type: 'Fashion Store', icon: '👗', color: 'from-pink-500 to-purple-500' },
    { name: 'Apex Construction', type: 'Building Contractor', icon: '🏗️', color: 'from-yellow-500 to-orange-600' },
    { name: 'Quantum Labs', type: 'Tech Startup', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
    { name: 'Roast & Co.', type: 'Coffee Roastery', icon: '☕', color: 'from-amber-600 to-yellow-600' },
    { name: 'MediCare Plus', type: 'Healthcare Clinic', icon: '🏥', color: 'from-green-500 to-emerald-500' },
    { name: 'Elite Motors', type: 'Auto Dealership', icon: '🚗', color: 'from-gray-600 to-slate-700' },
    { name: 'Glow Beauty', type: 'Spa & Wellness', icon: '✨', color: 'from-purple-500 to-pink-500' },
    { name: 'Sterling Law', type: 'Legal Services', icon: '⚖️', color: 'from-blue-700 to-indigo-700' },
    { name: 'Lens Studio', type: 'Photography', icon: '📸', color: 'from-indigo-500 to-purple-600' },
    { name: 'Pure Clean', type: 'Cleaning Services', icon: '🧽', color: 'from-cyan-500 to-blue-500' }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-gray-900 via-slate-800 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
      {/* Subtle animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <motion.h2 
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4" 
          style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">200+</span> Businesses
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From restaurants to tech startups, we've helped businesses across every industry get online and grow.
        </motion.p>
      </div>

      {/* Infinite Scrolling Logo Container */}
      <div className="relative">
        {/* Gradient Overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        {/* Scrolling Container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 sm:gap-12 items-center"
            animate={{
              x: ["-50%", "0%"]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
              >
                {/* Logo Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 min-w-[160px] sm:min-w-[200px] hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
                  {/* Professional Logo Design */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${logo.color} rounded-lg mb-3 sm:mb-4 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <span className="text-white text-lg sm:text-2xl filter drop-shadow-sm">{logo.icon}</span>
                  </div>
                  
                  {/* Logo Text */}
                  <div className="text-center">
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1 group-hover:text-purple-300 transition-colors duration-300">
                      {logo.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {logo.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="mt-8 sm:mt-12 flex justify-center">
        <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
    </section>
  );
};

export default LogoScrollSection;