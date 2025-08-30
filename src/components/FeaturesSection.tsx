import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturesSection: React.FC = React.memo(() => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: '🎨',
      title: 'Professional Design That Works',
      description: 'Forget amateur hour. You get a website that looks like you paid thousands. Because you deserve better.'
    },
    {
      icon: '📱',
      title: 'Mobile Perfect (Obviously)',
      description: 'Every screen, every device, every customer. Your website looks perfect everywhere. Non-negotiable.'
    },
    {
      icon: '🚀',
      title: 'Google Loves It (So Will You)',
      description: 'SEO built right in. Your customers will find you before they find your competition. That\'s the point.'
    },
    {
      icon: '⏰',
      title: '24-Hour Delivery (I\'m Not Kidding)',
      description: 'You call today, you\'re online tomorrow. No excuses, no delays, no nonsense. Just results.'
    },
    {
      icon: '💪',
      title: 'Support When You Need It',
      description: 'Questions? Problems? Changes? I\'m here. Your success is my success. Period.'
    },
    {
      icon: '🌐',
      title: 'Free Hosting Setup Guide',
      description: 'I don\'t just build it and walk away. You get everything you need to go live. Everything.'
    }
  ];



  return (
    <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 10 : 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 10 : 30 }}
          transition={{ 
            duration: shouldReduceMotion ? 0.3 : 0.8,
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
            What You Get
          </h2>
          <p className="text-lg xs:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            No fluff. No filler. Just the essentials that make your business look professional and get results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 xs:p-6 sm:p-8 hover:bg-gray-900/70 transition-all duration-300 touch-manipulation"
              initial={{ opacity: 0, y: shouldReduceMotion ? 10 : 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 10 : 30 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.3 : 0.6,
                delay: shouldReduceMotion ? 0.05 * index : 0.1 * index,
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <div className="text-3xl xs:text-4xl mb-3 xs:mb-4">{feature.icon}</div>
              <h3 className="text-lg xs:text-xl font-bold text-white mb-3 xs:mb-4" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-sm xs:text-base text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeaturesSection;