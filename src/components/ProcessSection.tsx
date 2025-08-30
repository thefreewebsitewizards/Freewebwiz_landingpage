import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const processSteps = [
    {
      icon: '💼',
      title: 'Step 1: You Tell Me What You Need',
      description: 'Send me your business info, your vision, your dreams. I\'ll listen to every word.'
    },
    {
      icon: '⚡',
      title: 'Step 2: I Build It For You (For FREE!)',
      description: '24 hours later, you\'ve got a website that\'ll make your competitors weep. No charge.'
    },
    {
      icon: '💰',
      title: 'Step 3: You Get More Customers',
      description: 'Watch your phone ring. Watch orders pour in. Watch your bank account smile. It\'s that simple!'
    }
  ];

  return (
    <section id="process" className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-black" ref={ref}>
      {/* Top Decorative Element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full blur-2xl"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center mb-16 xs:mb-20 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-6 xs:mb-8">
                <div className="w-20 h-20 xs:w-24 xs:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-3xl xs:text-4xl shadow-2xl transform hover:scale-110 transition-all duration-300" style={{ boxShadow: '0 0 40px rgba(255, 193, 7, 0.4)' }}>
                  {step.icon}
                </div>
              </div>
              
              <div className="max-w-2xl px-4 sm:px-0">
                <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 xs:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white transition-all duration-700 hover:from-yellow-100 hover:via-white hover:to-yellow-100" style={{ textShadow: '0 4px 20px rgba(255,255,255,0.3), 0 8px 40px rgba(255,193,7,0.2)', fontFamily: 'Poppins, system-ui, sans-serif' }}>
                  {step.title}
                </h2>
                <p className="text-lg xs:text-xl sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-medium transition-all duration-500 hover:text-gray-200" style={{ textShadow: '0 2px 15px rgba(255,255,255,0.1)' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;