import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const plans = [
    {
      name: "Free Website",
      price: "$0",
      period: "forever",
      description: "Professional website creation at absolutely no cost.",
      features: [
        "Custom responsive design",
        "Mobile-optimized layout",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media links",
        "Fast loading speeds",
        "24-hour delivery",
        "Basic content management",
        "Free hosting setup guidance",
        "Email support",
      ],
      cta: "Get My Free Website",
      popular: true,
    },
    {
      name: "Premium Support",
      price: "$0",
      period: "+ optional tips",
      description: "Enhanced features and ongoing support for growing businesses.",
      features: [
        "Everything in Free Website",
        "Advanced SEO optimization",
        "E-commerce integration",
        "Custom animations",
        "Analytics setup",
        "Priority support",
        "Monthly updates",
        "Performance optimization",
        "Backup & security",
        "Optional tip appreciated",
      ],
      cta: "Request Premium",
      popular: false,
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
    <section className="py-20 bg-gradient-to-b from-slash-dark to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free websites with{' '}
            <span className="bg-gradient-to-r from-slash-gold to-yellow-400 bg-clip-text text-transparent">
              professional quality
            </span>
            <br />
            for everyone
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your service level. Everything starts completely free with optional premium support.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'border-slash-gold/50 shadow-2xl shadow-slash-gold/10'
                  : 'border-slate-700/50 hover:border-slash-gold/30'
              }`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: plan.popular 
                  ? "0 25px 50px rgba(212, 175, 55, 0.2)" 
                  : "0 20px 40px rgba(212, 175, 55, 0.1)"
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-slash-gold to-yellow-400 text-slash-dark px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-slash-gold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-slash-gold mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-slash-gold to-yellow-400 text-slash-dark hover:shadow-lg hover:shadow-slash-gold/25'
                    : 'bg-white text-slash-dark hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Get your free website in 24 hours
          </h3>
          <p className="text-gray-300 mb-8">
            Join 50+ happy clients who already have their professional websites.
          </p>
          <motion.button
            className="bg-gradient-to-r from-slash-gold to-yellow-400 text-slash-dark px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-slash-gold/25 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Claim My Free Website
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;