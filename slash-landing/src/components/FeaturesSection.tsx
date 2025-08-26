import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturesSection: React.FC = () => {
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
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-16">
          <motion.div
            ref={ref}
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 300 }}>
              Who we're built for
            </h2>
          </motion.div>
          
          {/* Navigation Arrows - Top Right */}
          <motion.div
            className="flex gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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

      {/* Overflow container for cards */}
      <div className="relative pl-16">
        <div className="overflow-x-auto scrollbar-hide">
          <motion.div
            className="flex gap-6"
            style={{ width: 'max-content', paddingLeft: '0px', paddingRight: '64px' }}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
          {businessTypes.map((business, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
              }}
              className="group cursor-pointer flex-shrink-0"
              style={{ width: '320px' }}
            >
                 <div className="bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-lg rounded-xl p-6 transition-all duration-500 h-full border border-gray-800/50 hover:border-gray-700/70">
                   {/* Mockup Visual */}
                   <div className="h-40 mb-6 rounded-lg overflow-hidden relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 shadow-lg">
                     {/* Simple visual representation */}
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                     <div className="absolute bottom-4 left-4 right-4">
                       <div className="h-2 bg-white/30 rounded mb-2"></div>
                       <div className="h-2 bg-white/20 rounded w-3/4"></div>
                     </div>
                   </div>
                   
                   <h3 className="text-lg font-medium text-white mb-3 group-hover:text-gray-200 transition-colors duration-300" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                     {business.title}
                   </h3>
                   <p className="text-gray-400 leading-relaxed text-sm" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                     {business.description}
                   </p>
                 </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-slash-gold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">
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