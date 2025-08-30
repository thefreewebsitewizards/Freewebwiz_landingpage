import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FinalCTASection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="ready" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4 sm:px-0" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
            <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              Ready to Win Online?
            </span>
          </h2>
          <p className="text-lg xs:text-xl sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed px-4 sm:px-0">
            Stop losing customers to competitors with better websites.
            <br className="hidden md:block" />
            Get your professional website in 24 hours. Completely free.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center md:items-center"
          >
            <button className="w-full md:w-auto bg-gradient-to-r from-white via-cyan-50 to-white text-purple-900 px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-full font-black text-sm xs:text-base sm:text-lg hover:from-cyan-50 hover:via-white hover:to-cyan-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl max-w-xs xs:max-w-sm sm:max-w-md mx-auto sm:mx-0">
              Get My Free Website Now 🚀
            </button>
            <button className="w-full md:w-auto border-2 border-gradient-to-r border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-white/10 hover:to-cyan-100/10 hover:scale-105 transition-all duration-300">
              See Examples
            </button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 mt-6 text-sm"
          >
            ✓ No credit card required  ✓ 24-hour delivery  ✓ 100% satisfaction guarantee
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;