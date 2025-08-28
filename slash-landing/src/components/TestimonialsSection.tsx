import React from 'react';

const TestimonialsSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

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



  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 px-4 sm:px-0">
            Loved by{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              creators & businesses
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-semibold px-4 sm:px-0">
            See what small business owners, creators, and influencers are saying about their free websites
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Simplified Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 relative">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-black text-xs sm:text-sm relative z-10 hover:scale-105 transition-transform duration-200">
                    {testimonial.avatar}
                  </div>
                </div>
                <div className="flex-1">
                  <blockquote className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 relative z-10 font-bold">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="relative z-10">
                    <div className="text-white font-bold text-sm sm:text-base hover:text-blue-400 transition-colors duration-200">
                      {testimonial.author}
                    </div>
                    <div className="text-blue-400 text-xs sm:text-sm font-semibold">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company logos section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4 sm:px-0">
          <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8 uppercase tracking-wider">
            Serving 50+ happy clients
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-60">
            {['Portrait Photography', 'Sweet Dreams Bakery', 'Fitness Coaching', 'UGC Creators'].map((company, index) => (
              <div
                key={index}
                className="text-gray-400 font-bold text-sm sm:text-base md:text-lg hover:text-blue-400 hover:scale-105 transition-all duration-200"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;