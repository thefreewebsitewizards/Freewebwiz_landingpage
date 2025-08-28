import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Memoize navigation items to prevent recreation
  const navItems = useMemo(() => 
    ['About', 'Services', 'Portfolio', 'Pricing', 'Contact'], []
  );

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 will-change-transform ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'
      }`}
      style={{
        transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.3s ease'
      }}
      initial={{ y: shouldReduceMotion ? 0 : -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: "easeOut"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-black text-white tracking-tight">
              FreeWebWiz
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-semibold relative group will-change-transform"
                  style={{
                    transition: 'color 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {item}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 will-change-transform"
                    style={{
                      transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="relative text-gray-300 hover:text-white px-4 py-2 text-sm font-semibold will-change-transform"
              style={{
                transition: 'color 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              View Portfolio
            </button>
            <button
              className="bg-gradient-to-r from-white to-gray-100 text-slate-900 px-6 py-2 rounded-full text-sm font-bold will-change-transform"
              style={{
                transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                if (!shouldReduceMotion) {
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span className="font-black">Get Free Website</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
            className="text-gray-300 hover:text-white p-2 z-50 relative transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-200 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
              }`} />
              <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block w-6 h-0.5 bg-current mt-1 transform transition-all duration-200 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
            </div>
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
              {['About', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-xl font-semibold text-white hover:text-blue-400 transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              <button
                className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold py-4 px-6 rounded-full hover:shadow-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Website
              </button>
              
              <button
                className="w-full border border-white/20 text-white font-semibold py-4 px-6 rounded-full hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View Portfolio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;