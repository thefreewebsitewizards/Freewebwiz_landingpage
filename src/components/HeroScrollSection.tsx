import React, { useEffect, useRef, useState } from 'react';
import BlurText from './BlurText';

const HeroScrollSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified animations based on scroll
  const phoneScale = 1 - (scrollProgress * 0.2);
  const phoneOpacity = Math.max(0, 1 - (scrollProgress * 2.86));
  const floatingSquaresOpacity = Math.max(0, Math.min(0.4, (scrollProgress - 0.2) * 4));

  // Sample work images for phone carousel and floating squares
  const sampleWorks = [
    { id: 1, bg: 'from-blue-500 to-purple-600', title: 'E-commerce Store', preview: 'Modern online store with sleek product galleries' },
    { id: 2, bg: 'from-green-500 to-teal-600', title: 'Restaurant Website', preview: 'Elegant dining experience with online reservations' },
    { id: 3, bg: 'from-pink-500 to-red-600', title: 'Portfolio Site', preview: 'Creative showcase for artists and designers' },
    { id: 4, bg: 'from-blue-500 to-purple-600', title: 'Business Landing', preview: 'Professional corporate presence' },
    { id: 5, bg: 'from-indigo-500 to-blue-600', title: 'Agency Website', preview: 'Dynamic marketing agency platform' },
    { id: 6, bg: 'from-purple-500 to-pink-600', title: 'Tech Startup', preview: 'Innovative SaaS product showcase' },
    { id: 7, bg: 'from-teal-500 to-cyan-600', title: 'Health & Wellness', preview: 'Calming wellness center website' },
    { id: 8, bg: 'from-purple-500 to-pink-600', title: 'Fashion Brand', preview: 'Trendy fashion e-commerce platform' }
  ];

  return (
    <section ref={ref} className="relative h-[180vh] bg-black text-white overflow-hidden mb-20">
      {/* Phone Container - First sticky section */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black pt-20">
        {/* Mobile Layout: Centered Phone and Text Below */}
        <div className="block md:hidden flex flex-col items-center justify-center h-full px-4 pt-8">
          <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
            {/* Phone Frame */}
            <div
               className="relative z-10 transition-all duration-500 mb-6 animate-float"
               style={{
                 transform: `scale(${phoneScale})`,
                 opacity: phoneOpacity
               }}
             >
               <div className="relative w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-2 shadow-2xl transition-all duration-500 phone-glow">
            {/* Phone Screen */}
             <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.3rem] md:rounded-[2.5rem] overflow-hidden relative">
              {/* Browser Header */}
              <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 md:h-12 bg-gray-100 z-20 flex items-center px-2 sm:px-3 md:px-4">
                <div className="flex gap-1 sm:gap-1.5 md:gap-2 mr-2 sm:mr-3 md:mr-4">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full"></div>
                </div>
                 <div className="flex-1 bg-white rounded-md sm:rounded-lg px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs text-gray-600">
                   https://yourwebsite.com
                </div>
              </div>
              
              {/* Website Template Preview */}
              <div className="absolute inset-0 pt-8 sm:pt-10 md:pt-12 bg-gradient-to-br from-blue-50 to-purple-50">
                {/* Hero Section Mockup */}
                <div className="p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3 md:space-y-4">
                  {/* Navigation */}
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-3 sm:w-14 sm:h-3.5 md:w-16 md:h-4 bg-gray-800 rounded"></div>
                    <div className="flex gap-1 sm:gap-1.5 md:gap-2">
                      <div className="w-6 h-1.5 sm:w-7 sm:h-1.5 md:w-8 md:h-2 bg-gray-400 rounded"></div>
                      <div className="w-6 h-1.5 sm:w-7 sm:h-1.5 md:w-8 md:h-2 bg-gray-400 rounded"></div>
                      <div className="w-6 h-1.5 sm:w-7 sm:h-1.5 md:w-8 md:h-2 bg-gray-400 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Hero Content */}
                  <div className="text-center space-y-2 sm:space-y-2.5 md:space-y-3 mt-4 sm:mt-6 md:mt-8">
                    <div className="w-24 h-4 sm:w-28 sm:h-5 md:w-32 md:h-6 bg-gray-800 rounded mx-auto"></div>
                    <div className="w-18 h-4 sm:w-20 sm:h-5 md:w-24 md:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded mx-auto"></div>
                    <div className="space-y-0.5 sm:space-y-0.5 md:space-y-1 mt-2 sm:mt-3 md:mt-4">
                      <div className="w-20 h-1.5 sm:w-24 sm:h-1.5 md:w-28 md:h-2 bg-gray-400 rounded mx-auto"></div>
                      <div className="w-16 h-1.5 sm:w-20 sm:h-1.5 md:w-24 md:h-2 bg-gray-400 rounded mx-auto"></div>
                    </div>
                    <div className="flex gap-1 sm:gap-1.5 md:gap-2 justify-center mt-2 sm:mt-3 md:mt-4">
                      <div className="w-8 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6 bg-blue-500 rounded"></div>
                      <div className="w-8 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-1 sm:gap-1.5 md:gap-2 mt-3 sm:mt-4 md:mt-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white rounded-md sm:rounded-lg p-1 sm:p-1.5 md:p-2 shadow-sm">
                        <div className="w-full h-6 sm:h-7 md:h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-0.5 sm:mb-0.5 md:mb-1"></div>
                        <div className="w-3/4 h-0.5 sm:h-0.5 md:h-1 bg-gray-300 rounded mb-0.5 sm:mb-0.5 md:mb-1"></div>
                        <div className="w-1/2 h-0.5 sm:h-0.5 md:h-1 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Animated Elements */}
                <div className="absolute top-20 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-4 w-1 h-1 bg-purple-500 rounded-full animate-bounce"></div>
              </div>
            </div>
              
                {/* Enhanced Glow Effect */}
                 <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[4rem] blur-2xl opacity-60 animate-pulse-glow"></div>
                 <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/15 via-blue-400/15 to-purple-400/15 rounded-[3rem] blur-lg opacity-40"></div>
              </div>
            </div>
            
            {/* Text Content Below Phone - Mobile Only */}
             <div className="text-center w-full px-4">
               <div className="mb-4">
                 <BlurText
                   text="STUNNING PROFESSIONAL WEBSITES"
                   delay={150}
                   animateBy="words"
                   direction="top"
                   className="text-3xl sm:text-4xl font-black text-white leading-tight"
                 />
                 <div className="mt-2">
                   <BlurText
                     text="✨ BUILT FOR SUCCESS ✨"
                     delay={200}
                     animateBy="words"
                     direction="bottom"
                     className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                   />
                 </div>
               </div>
               <div className="space-y-3 mt-6">
                  <p className="text-lg sm:text-xl font-light text-gray-200 leading-relaxed tracking-wide">
                    <span className="text-emerald-300 font-medium">
                      We create stunning, custom websites
                    </span>
                  </p>
                  <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed tracking-wide max-w-md mx-auto">
                    that showcase your business perfectly and convert visitors into customers
                  </p>
                </div>
             </div>
          </div>
        </div>

        {/* Desktop Layout: Original Side-by-Side */}
        <div className="hidden md:flex items-center justify-center h-full">
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Phone Frame - Desktop */}
            <div
               className="relative z-10 transition-all duration-500 animate-float"
               style={{
                 transform: `scale(${phoneScale})`,
                 opacity: phoneOpacity
               }}
             >
               <div className="relative w-[280px] h-[560px] lg:w-[320px] lg:h-[640px] bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-[2.5rem] lg:rounded-[3rem] p-2 lg:p-3 shadow-2xl transition-all duration-500 phone-glow">
                {/* Phone Screen */}
                <div className="w-full h-full bg-white rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden relative">
                  {/* Browser Header */}
                  <div className="absolute top-0 left-0 right-0 h-10 lg:h-12 bg-gray-100 z-20 flex items-center px-3 lg:px-4">
                    <div className="flex gap-1.5 lg:gap-2 mr-3 lg:mr-4">
                      <div className="w-2.5 lg:w-3 h-2.5 lg:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2.5 lg:w-3 h-2.5 lg:h-3 bg-blue-400 rounded-full"></div>
                      <div className="w-2.5 lg:w-3 h-2.5 lg:h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-gray-600">
                      https://yourwebsite.com
                    </div>
                  </div>
                  
                  {/* Website Template Preview */}
                  <div className="absolute inset-0 pt-10 lg:pt-12 bg-gradient-to-br from-blue-50 to-purple-50">
                    {/* Hero Section Mockup */}
                    <div className="p-3 lg:p-4 space-y-3 lg:space-y-4">
                      {/* Navigation */}
                      <div className="flex justify-between items-center">
                        <div className="w-14 lg:w-16 h-3.5 lg:h-4 bg-gray-800 rounded"></div>
                        <div className="flex gap-1.5 lg:gap-2">
                          <div className="w-7 lg:w-8 h-1.5 lg:h-2 bg-gray-400 rounded"></div>
                          <div className="w-7 lg:w-8 h-1.5 lg:h-2 bg-gray-400 rounded"></div>
                          <div className="w-7 lg:w-8 h-1.5 lg:h-2 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Hero Content */}
                      <div className="text-center space-y-2.5 lg:space-y-3 mt-6 lg:mt-8">
                        <div className="w-28 lg:w-32 h-5 lg:h-6 bg-gray-800 rounded mx-auto"></div>
                        <div className="w-20 lg:w-24 h-5 lg:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded mx-auto"></div>
                        <div className="space-y-0.5 lg:space-y-1 mt-3 lg:mt-4">
                          <div className="w-24 lg:w-28 h-1.5 lg:h-2 bg-gray-400 rounded mx-auto"></div>
                          <div className="w-20 lg:w-24 h-1.5 lg:h-2 bg-gray-400 rounded mx-auto"></div>
                        </div>
                        <div className="flex gap-1.5 lg:gap-2 justify-center mt-3 lg:mt-4">
                          <div className="w-10 lg:w-12 h-5 lg:h-6 bg-blue-500 rounded"></div>
                          <div className="w-10 lg:w-12 h-5 lg:h-6 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Feature Cards */}
                      <div className="grid grid-cols-2 gap-1.5 lg:gap-2 mt-4 lg:mt-6">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="bg-white rounded-lg p-1.5 lg:p-2 shadow-sm">
                            <div className="w-full h-7 lg:h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-0.5 lg:mb-1"></div>
                            <div className="w-3/4 h-0.5 lg:h-1 bg-gray-300 rounded mb-0.5 lg:mb-1"></div>
                            <div className="w-1/2 h-0.5 lg:h-1 bg-gray-200 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Animated Elements */}
                    <div className="absolute top-20 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 left-4 w-1 h-1 bg-purple-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
                  
                {/* Enhanced Glow Effect */}
                 <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[5rem] blur-3xl opacity-60 animate-pulse-glow"></div>
                 <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/15 via-blue-400/15 to-purple-400/15 rounded-[4rem] blur-xl opacity-40"></div>
              </div>
            </div>

            {/* Text Content - Desktop */}
             <div className="flex-1 ml-12 lg:ml-16">
               <div className="mb-6 lg:mb-8">
                 <BlurText
                   text="STUNNING PROFESSIONAL WEBSITES"
                   delay={150}
                   animateBy="words"
                   direction="top"
                   className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-tight"
                 />
                 <div className="mt-4">
                   <BlurText
                     text="✨ BUILT FOR SUCCESS ✨"
                     delay={200}
                     animateBy="words"
                     direction="bottom"
                     className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                   />
                 </div>
               </div>
               <div className="space-y-4 max-w-2xl">
                  <p className="text-xl lg:text-2xl xl:text-3xl font-light text-gray-200 leading-relaxed tracking-wide">
                    <span className="text-emerald-300 font-medium">
                      We create stunning, custom websites
                    </span>
                  </p>
                  <p className="text-lg lg:text-xl xl:text-2xl text-gray-400 font-light leading-relaxed tracking-wide">
                    that showcase your business perfectly and convert visitors into customers
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>



      {/* Final Bold Hero Text Section - Seamless transition */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black overflow-hidden pb-48">
        {/* Background Mini Browser Cards */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            style={{
              opacity: floatingSquaresOpacity
            }}
            className="absolute inset-0 z-0 transition-opacity duration-300"
          >
            {sampleWorks.map((work, index) => (
              <div
                key={work.id}
                className="absolute w-24 h-20 sm:w-32 md:w-40 sm:h-24 md:h-32 bg-gray-900/80 rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl overflow-hidden backdrop-blur-sm opacity-60 hover:opacity-80 transition-opacity duration-300"
                style={{
                  top: `${15 + (index * 12)}%`,
                  left: index % 2 === 0 ? `${5 + (index * 8)}%` : `${75 - (index * 8)}%`,
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (5 + index * 2)}deg)`,
                  zIndex: -1
                }}
              >
                {/* Mini Browser Frame */}
                <div className="w-full h-full bg-white/90 rounded-md sm:rounded-lg overflow-hidden">
                  {/* Browser Header */}
                  <div className="h-2 sm:h-3 md:h-4 bg-gray-100 flex items-center px-1 sm:px-2">
                    <div className="flex gap-0.5 sm:gap-1">
                      <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-red-400 rounded-full"></div>
                      <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400 rounded-full"></div>
                      <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Website Preview */}
                  <div className={`flex-1 bg-gradient-to-br ${work.bg} p-1 sm:p-2`}>
                    <div className="bg-white rounded p-0.5 sm:p-1 h-full flex flex-col">
                      <div className="h-0.5 sm:h-1 bg-gray-800 rounded mb-0.5 sm:mb-1"></div>
                      <div className="h-0.5 sm:h-1 bg-blue-500 rounded mb-0.5 sm:mb-1 w-3/4"></div>
                      <div className="flex gap-0.5 sm:gap-1 mb-0.5 sm:mb-1">
                        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-300 rounded"></div>
                        <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Simplified Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-4 sm:px-0">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent block drop-shadow-2xl">
              WE BUILD
            </span>
            <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent block drop-shadow-2xl mt-2">
              FREE WEBSITES!
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-5xl mx-auto leading-relaxed px-4 sm:px-0 font-bold">
            Professional, stunning websites for small businesses, creators, and influencers. 
            <span className="text-green-400 font-semibold">No hidden costs</span>, just beautiful web presence that converts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 px-4 sm:px-0">
            <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-white via-gray-50 to-white text-black font-bold text-sm sm:text-base md:text-lg rounded-full relative overflow-hidden shadow-2xl group hover:scale-105 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
              {/* Simplified Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-green-400/20 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Inner Glow */}
              <div className="absolute inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-full"></div>
              
              <span className="relative z-10 font-black tracking-wide">Get My Free Website</span>
              
              {/* Outer Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-green-400/20 rounded-full blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold text-sm sm:text-base md:text-lg rounded-2xl relative overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm group hover:scale-105 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
              {/* Simplified Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-2xl animate-gradient-x"></div>
              
              {/* Inner Glow */}
              <div className="absolute inset-0.5 bg-gradient-to-r from-white/15 to-white/5 rounded-2xl"></div>
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3 font-black tracking-wide">
                <span className="animate-spin-slow">✨</span>
                View Portfolio
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                </svg>
              </span>
              
              {/* Outer Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-cyan-500/40 rounded-3xl blur-xl -z-10 opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroScrollSection;