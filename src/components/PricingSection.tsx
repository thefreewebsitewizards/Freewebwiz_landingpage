import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingSection: React.FC = React.memo(() => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const plans = [
    {
      name: "Premium Support",
      price: "$97",
      period: "One-time",
      description: "For businesses that want the VIP treatment.",
      features: [
        "Everything in The Deal",
        "Priority 24/7 Support",
        "Advanced SEO Optimization",
        "E-commerce Integration",
        "Custom Animations & Effects",
        "Advanced Analytics Setup",
        "Social Media Automation",
        "Monthly Performance Reports",
        "Content Updates (3 per month)",
        "Backup & Security Monitoring",
        "Phone Support",
        "1-Hour Strategy Call",
      ],
      cta: "Upgrade to Premium",
      popular: false,
    },
    {
      name: "The Deal",
      price: "FREE",
      period: "Forever",
      description: "Everything you need to get online and start winning.",
      features: [
        "Professional Website Design",
        "Mobile-Perfect Responsive Layout",
        "SEO Optimization (Google-Ready)",
        "Contact Forms That Actually Work",
        "Social Media Integration",
        "Fast Loading (Under 3 Seconds)",
        "24-Hour Delivery Guarantee",
        "Free Hosting Setup Guide",
        "Basic Support (Email)",
        "SSL Security Certificate",
        "Google Analytics Setup",
        "Professional Email Setup Guide",
      ],
      cta: "Get My Free Website",
      popular: true,
    },
    {
      name: "Custom Solutions",
      price: "$297",
      period: "One-time",
      description: "For businesses with specific needs and big goals.",
      features: [
        "Everything in Premium Support",
        "Custom Functionality Development",
        "Advanced E-commerce Features",
        "Multi-page Website (Up to 10 pages)",
        "Custom Integrations (CRM, etc.)",
        "Advanced SEO Strategy",
        "Conversion Optimization",
        "A/B Testing Setup",
        "Unlimited Content Updates",
        "Dedicated Account Manager",
        "Weekly Strategy Calls",
        "6-Month Success Guarantee",
      ],
      cta: "Go Custom",
      popular: false,
    },
  ];

  // Plans data

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-gray-950 to-black" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Start free. Upgrade when you're ready. No surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 xs:p-6 sm:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Trust Badge - Outside the card */}
              {plan.popular && (
                <div className="absolute -top-3 xs:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-bold relative overflow-hidden hover:scale-105 transition-transform duration-200">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Price Card */}
              <div
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border transition-all duration-300 overflow-hidden group hover:scale-102 hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/10 mt-4 sm:mt-5'
                    : 'border-slate-700/50 hover:border-blue-500/30'
                }`}
              >
                {/* Simplified Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Static Elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-blue-500/20 rounded-full opacity-50" />
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-purple-400/30 rounded-full opacity-40" />
              
              <div className="text-center mb-6 sm:mb-8 relative z-10">
                <h3 className="text-xl xs:text-2xl font-black text-white mb-2 hover:text-blue-400 transition-colors duration-200">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl xs:text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2 text-xs xs:text-sm sm:text-base hover:text-gray-300 transition-colors duration-200">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-300 font-bold text-xs xs:text-sm sm:text-base hover:text-gray-100 transition-colors duration-200">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 xs:space-y-4 mb-6 xs:mb-8 relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-start group/item hover:translate-x-1 transition-transform duration-200"
                  >
                    <svg 
                      className="w-4 xs:w-5 h-4 xs:h-5 text-blue-400 mt-0.5 mr-2 xs:mr-3 flex-shrink-0 hover:text-blue-300 hover:scale-110 transition-all duration-200" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200 font-bold text-xs xs:text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`cursor-target relative w-full py-3 xs:py-4 px-4 xs:px-6 rounded-full font-black text-sm xs:text-base sm:text-lg transition-all duration-200 overflow-hidden group/btn z-10 hover:scale-102 hover:-translate-y-1 touch-manipulation max-w-xs xs:max-w-sm sm:max-w-none mx-auto ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
                    : 'bg-white text-slate-900 hover:shadow-lg hover:shadow-black/20'
                }`}
              >
                <span className="relative z-10 font-black">{plan.cta}</span>
              </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-6 sm:mb-8 text-base xs:text-lg">
            Join 200+ businesses that chose the smart way to get online.
          </p>
          <button className="cursor-target bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-full font-black text-sm xs:text-base sm:text-lg hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-200 max-w-xs xs:max-w-sm sm:max-w-none mx-auto">
            Start My Free Website
          </button>
        </div>
      </div>
    </section>
  );
});

export default PricingSection;