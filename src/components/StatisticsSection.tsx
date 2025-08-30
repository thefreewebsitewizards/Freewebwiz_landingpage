import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatisticProps {
  number: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<StatisticProps> = ({ number, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const startCount = 0;
      const endCount = number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startCount + (endCount - startCount) * easeOutQuart);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [inView, number, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 xs:mb-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-300 text-base xs:text-lg font-medium tracking-wide">
        {label}
      </div>
    </motion.div>
  );
};

const StatisticsSection: React.FC = () => {
  const statistics = [
    {
      number: 200,
      suffix: '+',
      label: 'Websites Built',
    },
    {
      number: 24,
      label: 'Hour Delivery',
    },
    {
      number: 100,
      suffix: '%',
      label: 'Client Satisfaction',
    },
    {
      number: 0,
      suffix: '$',
      label: 'Upfront Cost',
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-slate-900 to-gray-900 overflow-hidden">
      {/* Background Effects to complement Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Decorative top border to connect with hero */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
            The Numbers Don't Lie
          </h2>
          <p className="text-lg xs:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Real results from real businesses who chose the smart way to get online.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300 p-4 rounded-xl hover:bg-white/5 backdrop-blur-sm">
              <AnimatedCounter
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                duration={2000 + index * 200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;