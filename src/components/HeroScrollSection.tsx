import React from 'react';
import LightRays from './LightRays';

const HeroScrollSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden pt-20 sm:pt-4">
      {/* Light Rays Background Effect */}
      <div className="absolute inset-0 w-full h-full">
        <LightRays 
          raysOrigin="top-center" 
          raysColor="#00ffff" 
          raysSpeed={1.5} 
          lightSpread={0.8} 
          rayLength={1.2} 
          followMouse={true} 
          mouseInfluence={0.1} 
          noiseAmount={0.1} 
          distortion={0.05} 
          className="custom-rays" 
        />
      </div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Main Content Container */}
      <div className="flex items-center justify-center min-h-screen relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile Layout: Stack vertically */}
          <div className="lg:hidden flex flex-col items-center space-y-8 sm:space-y-12">
            {/* Left Side Content - Top on mobile */}
            <div className="text-center space-y-4 sm:space-y-6 w-full">
              <h2 className="text-[40px] xs:text-[44px] sm:text-[48px] font-black text-white leading-tight transition-all duration-1000 hover:scale-105" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-2xl transition-all duration-700 hover:from-gray-50 hover:via-white hover:to-gray-50" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.5)', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>FREE</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white transition-all duration-700 hover:from-gray-100 hover:via-white hover:to-gray-100" style={{ textShadow: '0 0 25px rgba(255,255,255,0.9), 0 0 50px rgba(255,255,255,0.5), inset 0 1px 0 rgba(255,255,255,0.6)', filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.4))' }}>WEBSITES</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-2xl transition-all duration-700 hover:from-gray-50 hover:via-white hover:to-gray-50" style={{ textShadow: '0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.6), inset 0 1px 0 rgba(255,255,255,0.7)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}>THAT WIN!</span>
              </h2>
              <p className="text-[16px] xs:text-[18px] sm:text-[20px] font-medium leading-relaxed max-w-md mx-auto transition-all duration-500" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.01em', color: 'rgba(255, 255, 255, 0.85)' }}>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>Professional</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>websites.</span>
                <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>Zero cost</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>.</span>
                <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white font-semibold transition-all duration-500 hover:from-gray-100 hover:to-gray-100" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}>Maximum impact</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white font-semibold transition-all duration-500 hover:from-gray-100 hover:to-gray-100" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}>.</span>
              </p>
              <button 
                onClick={() => {
                  const processSection = document.getElementById('process');
                  processSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-target group bg-gradient-to-r from-red-600 to-red-500 border-2 border-white text-white px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black text-sm xs:text-base sm:text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 hover:border-yellow-400 w-full sm:w-auto max-w-xs xs:max-w-sm sm:max-w-none mx-auto sm:mx-0"
              >
                <span className="flex items-center gap-2 justify-center">
                  SEE HOW
                  <span className="group-hover:translate-y-[-2px] transition-transform duration-200 text-xl">⚡</span>
                </span>
              </button>
            </div>

            {/* Phone Frame - Center on mobile */}
            <div className="flex justify-center">
              <div className="relative animate-float group">
                <div className="relative w-[200px] h-[400px] xs:w-[220px] xs:h-[440px] sm:w-[240px] sm:h-[480px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[1.5rem] xs:rounded-[2rem] p-2 shadow-2xl transition-all duration-500 hover:scale-105 group-hover:shadow-purple-500/25">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-white rounded-[1.5rem] xs:rounded-[2rem] overflow-hidden relative">
                    {/* Browser Header */}
                    <div className="absolute top-0 left-0 right-0 h-8 xs:h-9 sm:h-10 bg-gray-100 z-20 flex items-center px-2 xs:px-3">
                      <div className="flex gap-1 xs:gap-1.5 mr-2 xs:mr-3">
                        <div className="w-2 xs:w-2.5 h-2 xs:h-2.5 bg-red-400 rounded-full"></div>
                        <div className="w-2 xs:w-2.5 h-2 xs:h-2.5 bg-blue-400 rounded-full"></div>
                        <div className="w-2 xs:w-2.5 h-2 xs:h-2.5 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-lg px-2 xs:px-3 py-0.5 xs:py-1 text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 animate-pulse overflow-hidden">
                        <span className="block truncate">https://yourweb...</span>
                      </div>
                    </div>
                    
                    {/* Website Template Preview */}
                    <div className="absolute inset-0 pt-10 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                      {/* Hero Section Mockup */}
                      <div className="p-3 space-y-3">
                        {/* Navigation */}
                        <div className="flex justify-between items-center">
                          <div className="w-14 h-3.5 bg-gray-800 rounded"></div>
                          <div className="flex gap-1.5">
                            <div className="w-7 h-1.5 bg-gray-400 rounded"></div>
                            <div className="w-7 h-1.5 bg-gray-400 rounded"></div>
                            <div className="w-7 h-1.5 bg-gray-400 rounded"></div>
                          </div>
                        </div>
                        
                        {/* Hero Content - Emphasized "YOUR OWN WEBSITE" */}
                        <div className="text-center space-y-2 xs:space-y-3 mt-2 xs:mt-3">
                          {/* Main Emphasis Text - Larger */}
                          <div className="px-1 xs:px-2">
                            <div className="text-2xl xs:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 leading-tight animate-pulse" style={{textShadow: '0 2px 10px rgba(147,51,234,0.3)'}}>
                              YOUR OWN
                            </div>
                            <div className="text-3xl xs:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 leading-tight animate-gradient-x" style={{textShadow: '0 3px 15px rgba(6,182,212,0.4)'}}>
                              WEBSITE
                            </div>
                            <div className="text-xs xs:text-sm font-bold text-gray-600 mt-1 xs:mt-2">
                              Professional • Fast • Free
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex gap-1 xs:gap-2 justify-center mt-3 xs:mt-4">
                            <div className="w-14 xs:w-16 h-4 xs:h-5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:scale-110 transition-transform duration-200 animate-pulse flex items-center justify-center">
                              <span className="text-xs text-white font-bold">START</span>
                            </div>
                            <div className="w-12 xs:w-14 h-4 xs:h-5 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-200 flex items-center justify-center">
                              <span className="text-xs text-gray-700 font-bold">DEMO</span>
                            </div>
                          </div>
                          
                          {/* Additional Content to Fill Bottom Space */}
                          <div className="mt-6 space-y-3">
                            {/* Success Indicators */}
                            <div className="flex justify-center items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs font-semibold text-green-600">Live in 24 Hours</span>
                            </div>
                            
                            {/* Feature Highlights */}
                            <div className="grid grid-cols-2 gap-1 px-4">
                              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-1 text-center flex flex-col items-center justify-center min-h-[50px] xs:min-h-[60px]">
                                <div className="text-xs mb-0.5">🚀</div>
                                <div className="text-xs font-bold text-purple-700 leading-tight">Fast Setup</div>
                              </div>
                              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-1 text-center flex flex-col items-center justify-center min-h-[50px] xs:min-h-[60px]">
                                <div className="text-xs mb-0.5">📱</div>
                                <div className="text-xs font-bold text-blue-700 leading-tight">Mobile Ready</div>
                              </div>
                              <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg p-1 text-center flex flex-col items-center justify-center min-h-[50px] xs:min-h-[60px]">
                                <div className="text-xs mb-0.5">⚡</div>
                                <div className="text-xs font-bold text-cyan-700 leading-tight">Lightning Fast</div>
                              </div>
                              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-1 text-center flex flex-col items-center justify-center min-h-[50px] xs:min-h-[60px]">
                                <div className="text-xs mb-0.5">🎨</div>
                                <div className="text-xs font-bold text-pink-700 leading-tight">Beautiful Design</div>
                              </div>
                            </div>
                            
                            {/* Bottom CTA */}
                            <div className="mt-4 px-3">
                              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full py-2 px-4 text-center">
                                <span className="text-sm font-black text-white">GET STARTED FREE</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Feature Cards */}
                        <div className="grid grid-cols-2 gap-1.5 mt-4">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white rounded-lg p-1.5 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                              <div className={`w-full h-7 rounded mb-0.5 ${
                                i === 1 ? 'bg-gradient-to-br from-purple-100 to-purple-200' :
                                i === 2 ? 'bg-gradient-to-br from-blue-100 to-blue-200' :
                                i === 3 ? 'bg-gradient-to-br from-cyan-100 to-cyan-200' :
                                'bg-gradient-to-br from-pink-100 to-pink-200'
                              }`}></div>
                              <div className="w-3/4 h-0.5 bg-gray-300 rounded mb-0.5"></div>
                              <div className="w-1/2 h-0.5 bg-gray-200 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Animated Elements */}
                      <div className="absolute top-20 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-20 left-4 w-1 h-1 bg-purple-500 rounded-full animate-bounce"></div>
                      <div className="absolute top-32 left-6 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-32 right-6 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                    
                  {/* Enhanced Glow Effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-[3rem] blur-2xl opacity-60 animate-pulse-glow group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/15 via-purple-400/15 to-pink-400/15 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-transparent rounded-[2.3rem] opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Right Side Content - Bottom on mobile */}
            <div className="text-center space-y-4 sm:space-y-6 w-full">
              <h2 className="text-[40px] xs:text-[44px] sm:text-[48px] font-black text-white leading-tight transition-all duration-1000 hover:scale-105" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-2xl transition-all duration-700 hover:from-gray-50 hover:via-white hover:to-gray-50" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.5)', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>READY TO</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white transition-all duration-700 hover:from-gray-100 hover:via-white hover:to-gray-100" style={{ textShadow: '0 0 25px rgba(255,255,255,0.9), 0 0 50px rgba(255,255,255,0.5), inset 0 1px 0 rgba(255,255,255,0.6)', filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.4))' }}>DOMINATE?</span>
              </h2>
              <p className="text-[16px] xs:text-[18px] sm:text-[20px] font-medium leading-relaxed max-w-md mx-auto transition-all duration-500" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.01em', color: 'rgba(255, 255, 255, 0.85)' }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>Join</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white font-semibold transition-all duration-500 hover:from-gray-100 hover:to-gray-100" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}>500+</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>winners.</span>
                <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white font-semibold transition-all duration-500 hover:from-gray-100 hover:to-gray-100" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}>Start today!</span>
              </p>
              <button 
                onClick={() => {
                  const ctaSection = document.querySelector('[id*="ready"], [id*="cta"], .final-cta');
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    // Fallback to scroll to bottom if specific section not found
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }
                }}
                className="cursor-target group bg-gradient-to-r from-red-600 to-red-500 text-white px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black text-sm xs:text-base sm:text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 border-2 border-white hover:border-yellow-300 overflow-hidden relative w-full sm:w-auto max-w-xs xs:max-w-sm sm:max-w-none mx-auto sm:mx-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  GET YOURS NOW
                  <span className="group-hover:translate-x-1 transition-transform duration-200 text-xl">🚀</span>
                </span>
              </button>
            </div>
          </div>

          {/* Desktop Layout: Original 3-column grid */}
          <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            {/* Left Side Content */}
            <div className="text-center lg:text-right space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-[40px] xs:text-[44px] sm:text-[48px] lg:text-[52px] xl:text-[56px] font-black text-white leading-tight transition-all duration-1000 hover:scale-105" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-2xl transition-all duration-700 hover:from-gray-50 hover:via-white hover:to-gray-50" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.5)', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>FREE</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white transition-all duration-700 hover:from-gray-100 hover:via-white hover:to-gray-100" style={{ textShadow: '0 0 25px rgba(255,255,255,0.9), 0 0 50px rgba(255,255,255,0.5), inset 0 1px 0 rgba(255,255,255,0.6)', filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.4))' }}>WEBSITES</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-2xl transition-all duration-700 hover:from-gray-50 hover:via-white hover:to-gray-50" style={{ textShadow: '0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.6), inset 0 1px 0 rgba(255,255,255,0.7)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}>THAT WIN!</span>
              </h2>
              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[22px] font-medium leading-relaxed max-w-md mx-auto lg:mx-0 lg:ml-auto transition-all duration-500" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.01em', color: 'rgba(255, 255, 255, 0.85)' }}>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>Professional</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>websites.</span>
                <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>Zero cost</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 8px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.2)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>.</span>
                <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white font-semibold transition-all duration-500 hover:from-gray-100 hover:to-gray-100" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}>Maximum impact</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white font-semibold transition-all duration-500 hover:from-gray-100 hover:to-gray-100" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}>.</span>
              </p>
              <div className="flex justify-center lg:justify-end">
                <button 
                  onClick={() => {
                    const processSection = document.getElementById('process');
                    processSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cursor-target group bg-gradient-to-r from-red-600 to-red-500 border-2 border-white text-white px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black text-sm xs:text-base sm:text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 hover:border-yellow-400"
                >
                  <span className="flex items-center gap-2">
                    SEE HOW
                    <span className="group-hover:translate-y-[-2px] transition-transform duration-200 text-xl">⚡</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Phone Frame - Center */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative animate-float group">
                <div className="relative w-[240px] h-[480px] xl:w-[280px] xl:h-[560px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.5rem] xl:rounded-[3rem] p-3 shadow-2xl transition-all duration-500 hover:scale-105 group-hover:shadow-purple-500/25">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-white rounded-[2.5rem] xl:rounded-[3rem] overflow-hidden relative">
                    {/* Browser Header */}
                    <div className="absolute top-0 left-0 right-0 h-12 xl:h-14 bg-gray-100 z-20 flex items-center px-4 xl:px-5">
                      <div className="flex gap-2 mr-4">
                        <div className="w-3 xl:w-4 h-3 xl:h-4 bg-red-400 rounded-full"></div>
                        <div className="w-3 xl:w-4 h-3 xl:h-4 bg-blue-400 rounded-full"></div>
                        <div className="w-3 xl:w-4 h-3 xl:h-4 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-lg px-4 py-2 text-sm xl:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white animate-pulse overflow-hidden" style={{ textShadow: '0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.3)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}>
                        <span className="block truncate">https://yourweb...</span>
                      </div>
                    </div>
                    
                    {/* Website Template Preview */}
                    <div className="absolute inset-0 pt-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
                      {/* Hero Section Mockup */}
                      <div className="p-3 space-y-3 h-full flex flex-col">
                        {/* Navigation */}
                        <div className="flex justify-between items-center flex-shrink-0">
                          <div className="w-16 h-4 bg-gray-800 rounded"></div>
                          <div className="flex gap-1.5">
                            <div className="w-8 h-2 bg-gray-400 rounded"></div>
                            <div className="w-8 h-2 bg-gray-400 rounded"></div>
                            <div className="w-8 h-2 bg-gray-400 rounded"></div>
                          </div>
                        </div>
                        
                        {/* Hero Content - Emphasized "YOUR OWN WEBSITE" */}
                        <div className="text-center space-y-2 flex-shrink-0">
                          {/* Main Emphasis Text */}
                          <div className="px-2">
                            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 leading-tight animate-pulse" style={{textShadow: '0 2px 10px rgba(147,51,234,0.3)'}}>
                              YOUR OWN
                            </div>
                            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 leading-tight animate-gradient-x" style={{textShadow: '0 3px 15px rgba(6,182,212,0.4)'}}>
                              WEBSITE
                            </div>
                            <div className="text-xs font-bold text-gray-600 mt-1">
                              Professional • Fast • Free
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex gap-2 justify-center mt-3">
                            <div className="w-16 h-5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:scale-110 transition-transform duration-200 animate-pulse flex items-center justify-center">
                              <span className="text-xs text-white font-bold">START</span>
                            </div>
                            <div className="w-14 h-5 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-200 flex items-center justify-center">
                              <span className="text-xs text-gray-700 font-bold">DEMO</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Success Indicators */}
                        <div className="flex justify-center items-center gap-2 flex-shrink-0">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-semibold text-green-600">Live in 24 Hours</span>
                        </div>
                        
                        {/* Feature Highlights - Responsive Grid */}
                        <div className="grid grid-cols-2 gap-1 px-3 flex-1">
                          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-1 text-center flex flex-col items-center justify-center min-h-[60px]">
                            <div className="text-xs mb-0.5">🚀</div>
                            <div className="text-xs font-bold text-purple-700 leading-tight">Fast Setup</div>
                          </div>
                          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-1 text-center flex flex-col items-center justify-center min-h-[60px]">
                            <div className="text-xs mb-0.5">📱</div>
                            <div className="text-xs font-bold text-blue-700 leading-tight">Mobile Ready</div>
                          </div>
                          <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg p-1 text-center flex flex-col items-center justify-center min-h-[60px]">
                            <div className="text-xs mb-0.5">⚡</div>
                            <div className="text-xs font-bold text-cyan-700 leading-tight">Lightning Fast</div>
                          </div>
                          <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-1 text-center flex flex-col items-center justify-center min-h-[60px]">
                            <div className="text-xs mb-0.5">🎨</div>
                            <div className="text-xs font-bold text-pink-700 leading-tight">Beautiful Design</div>
                          </div>
                        </div>
                        
                        {/* Bottom CTA */}
                        <div className="px-3 flex-shrink-0">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full py-2 px-4 text-center">
                            <span className="text-xs font-black text-white">GET STARTED FREE</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated Elements */}
                      <div className="absolute top-24 right-6 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-24 left-6 w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                      <div className="absolute top-40 left-8 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-40 right-8 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                    
                  {/* Enhanced Glow Effect */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-[4rem] blur-3xl opacity-60 animate-pulse-glow group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/15 via-purple-400/15 to-pink-400/15 rounded-[3rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-transparent rounded-[2.8rem] opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-3">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight transition-all duration-1000 hover:scale-105" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-2xl transition-all duration-700 hover:from-gray-50 hover:via-white hover:to-gray-50" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.5)', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>READY TO</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white transition-all duration-700 hover:from-gray-100 hover:via-white hover:to-gray-100" style={{ textShadow: '0 0 25px rgba(255,255,255,0.9), 0 0 50px rgba(255,255,255,0.5), inset 0 1px 0 rgba(255,255,255,0.6)', filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.4))' }}>DOMINATE?</span>
              </h2>
              <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl text-gray-200 font-bold leading-relaxed max-w-md mx-auto lg:mx-0 transition-all duration-500 hover:text-gray-100">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 15px rgba(255,255,255,0.7), 0 0 30px rgba(255,255,255,0.4)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}>Join</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white font-black transition-all duration-500 hover:from-gray-100 hover:to-gray-100" style={{ textShadow: '0 0 18px rgba(255,255,255,0.8), 0 0 36px rgba(255,255,255,0.5)', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}>500+</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white transition-all duration-500 hover:from-gray-50 hover:to-gray-50" style={{ textShadow: '0 0 15px rgba(255,255,255,0.7), 0 0 30px rgba(255,255,255,0.4)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}>winners.</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-50 to-white font-black transition-all duration-500 hover:from-gray-100 hover:to-gray-100" style={{ textShadow: '0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.6)', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>Start today!</span>
              </p>
              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={() => {
                    const ctaSection = document.querySelector('[id*="ready"], [id*="cta"], .final-cta');
                    if (ctaSection) {
                      ctaSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // Fallback to scroll to bottom if specific section not found
                      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }
                  }}
                  className="cursor-target group bg-gradient-to-r from-red-600 to-red-500 text-white px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black text-sm xs:text-base sm:text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 border-2 border-white hover:border-yellow-300 overflow-hidden relative"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    GET YOURS NOW
                    <span className="group-hover:translate-x-1 transition-transform duration-200 text-xl">🚀</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Smooth Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/50 to-slate-900 pointer-events-none"></div>
      
      {/* Animated Transition Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-purple-400/15 to-transparent rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
    </section>
  );
};

export default HeroScrollSection;