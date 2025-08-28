import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroScrollSection from './components/HeroScrollSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import SectionTransition from './components/SectionTransition';
import ScrollAnimations from './components/ScrollAnimations';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Optimized loading time for better performance
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      // Reduced delay for faster content display
      setTimeout(() => setShowContent(true), shouldReduceMotion ? 50 : 150);
    }, shouldReduceMotion ? 800 : 2000);

    return () => clearTimeout(loadingTimer);
  }, [shouldReduceMotion]);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen 
            isLoading={isLoading} 
            onComplete={() => setShowContent(true)}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <PageTransition isVisible={showContent} delay={0.2}>
        <motion.div 
          className="min-h-screen bg-black relative overflow-hidden"
          style={{
            willChange: shouldReduceMotion ? 'auto' : 'transform'
          }}
        >
          {/* Animated Background Elements */}
          <motion.div
            className="fixed inset-0 pointer-events-none will-change-auto"
            style={{
              background: "radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.03) 0%, transparent 50%)",
              willChange: shouldReduceMotion ? 'auto' : 'background-position'
            }}
            animate={shouldReduceMotion ? {} : {
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 30,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "linear"
            }}
          />
          
          {/* Global Scroll Animations */}
          <ScrollAnimations />
          
          <Navigation />
          
          {/* Hero Section - No transition wrapper needed as it has its own animations */}
          <HeroScrollSection />
          
          {/* Features Section with Optimized Transition */}
          <SectionTransition delay={shouldReduceMotion ? 0 : 0.05}>
            <FeaturesSection />
          </SectionTransition>
          
          {/* Testimonials Section with Optimized Transition */}
          <SectionTransition delay={shouldReduceMotion ? 0 : 0.1}>
            <TestimonialsSection />
          </SectionTransition>
          
          {/* Pricing Section with Optimized Transition */}
          <SectionTransition delay={shouldReduceMotion ? 0 : 0.15}>
            <PricingSection />
          </SectionTransition>
          
          {/* Footer with Optimized Transition */}
          <SectionTransition delay={shouldReduceMotion ? 0 : 0.2}>
            <Footer />
          </SectionTransition>
        </motion.div>
      </PageTransition>
    </>
  );
}

export default App;
