import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      quote: "I couldn't believe it was completely free! The website looks so professional and has helped me book 3x more clients. My photography business has never looked better online.",
      author: "Sarah Chen",
      company: "Portrait Photography",
      avatar: "SC",
    },
    {
      quote: "As a small bakery owner, I needed an online presence but couldn't afford expensive web design. This free service gave me exactly what I needed - beautiful, mobile-friendly, and easy to update!",
      author: "Maria Rodriguez",
      company: "Sweet Dreams Bakery",
      avatar: "MR",
    },
    {
      quote: "My fitness coaching website is stunning! It perfectly showcases my brand and the SEO optimization has brought me so many new clients. Can't believe this level of quality is free.",
      author: "Jake Thompson",
      company: "Fitness Influencer",
      avatar: "JT",
    },
    {
      quote: "The website was delivered in just 24 hours and exceeded all my expectations. Perfect for showcasing my UGC portfolio and landing brand partnerships. Absolutely recommend!",
      author: "Emma Wilson",
      company: "UGC Creator",
      avatar: "EW",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slash-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-slash-gold to-yellow-400 bg-clip-text text-transparent">
              creators & businesses
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what small business owners, creators, and influencers are saying about their free websites
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slash-gold/30 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.1)"
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-slash-gold to-yellow-400 rounded-full flex items-center justify-center text-slash-dark font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                </div>
                <div className="flex-1">
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.author}
                    </div>
                    <div className="text-slash-gold text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company logos section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm mb-8 uppercase tracking-wider">
            Serving 50+ happy clients
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Portrait Photography', 'Sweet Dreams Bakery', 'Fitness Coaching', 'UGC Creators'].map((company, index) => (
              <motion.div
                key={index}
                className="text-gray-400 font-semibold text-lg"
                whileHover={{ 
                  scale: 1.1,
                  color: "#D4AF37",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;