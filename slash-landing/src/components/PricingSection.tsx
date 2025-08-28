import React from 'react';

const PricingSection: React.FC = () => {

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

  // Plans data

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Free websites with{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              professional quality
            </span>
            <br />
            for everyone
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-semibold px-4 sm:px-0">
            Choose your service level. Everything starts completely free with optional premium support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {/* Trust Badge - Outside the card */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold relative overflow-hidden hover:scale-105 transition-transform duration-200">
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
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 hover:text-blue-400 transition-colors duration-200">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2 text-sm sm:text-base hover:text-gray-300 transition-colors duration-200">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-300 font-bold text-sm sm:text-base hover:text-gray-100 transition-colors duration-200">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-start group/item hover:translate-x-1 transition-transform duration-200"
                  >
                    <svg 
                      className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 mt-0.5 mr-2 sm:mr-3 flex-shrink-0 hover:text-blue-300 hover:scale-110 transition-all duration-200" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200 font-bold text-sm sm:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`relative w-full py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-200 overflow-hidden group/btn z-10 hover:scale-102 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
                    : 'bg-white text-slate-900 hover:shadow-lg hover:shadow-black/20'
                }`}
              >
                <span className="relative z-10 font-black">{plan.cta}</span>
              </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4 px-4 sm:px-0">
            Get your free website in 24 hours
          </h3>
          <p className="text-gray-300 mb-6 sm:mb-8 font-semibold px-4 sm:px-0">
            Join 50+ happy clients who already have their professional websites.
          </p>
          <button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-200">
            Claim My Free Website
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;