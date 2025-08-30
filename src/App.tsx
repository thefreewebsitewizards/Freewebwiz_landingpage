import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import CardNav from './components/CardNav';
import TargetCursor from './components/TargetCursor';
import HeroScrollSection from './components/HeroScrollSection';
import SectionTransition from './components/SectionTransition';
import ScrollAnimations from './components/ScrollAnimations';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';

// Using logo from public folder
const logo = '/freewebwiz-logo.png';

// Lazy load non-critical sections for better performance
const ProcessSection = lazy(() => import('./components/ProcessSection'));
const LogoScrollSection = lazy(() => import('./components/LogoScrollSection'));
const FeaturesSection = lazy(() => import('./components/FeaturesSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const StatisticsSection = lazy(() => import('./components/StatisticsSection'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const FinalCTASection = lazy(() => import('./components/FinalCTASection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Optimized loading time for better performance
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      // Faster content display
      setTimeout(() => setShowContent(true), shouldReduceMotion ? 50 : 100);
    }, shouldReduceMotion ? 500 : 1200);

    return () => clearTimeout(loadingTimer);
  }, [shouldReduceMotion]);

  return (
    <>
      {/* Custom Cursor */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      
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
          className="min-h-screen relative overflow-hidden pt-4"
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
          
          <CardNav 
            logo={logo}
            logoAlt="FreeWebWiz Logo"
            items={[
              {
                label: "Services",
                bgColor: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                textColor: "#ffffff",
                links: [
                  { label: "Web Design", href: "#features", ariaLabel: "Learn about our web design services" },
                  { label: "Development", href: "#process", ariaLabel: "Explore our development process" },
                  { label: "SEO Optimization", href: "#features", ariaLabel: "SEO optimization services" }
                ]
              },
              {
                label: "Portfolio",
                bgColor: "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)",
                textColor: "#ffffff",
                links: [
                  { label: "Recent Projects", href: "#testimonials", ariaLabel: "View our recent projects" },
                  { label: "Case Studies", href: "#testimonials", ariaLabel: "Read our case studies" },
                  { label: "Client Reviews", href: "#testimonials", ariaLabel: "See client testimonials" }
                ]
              },
              {
                label: "Contact",
                bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                textColor: "#ffffff",
                links: [
                  { label: "Get Started", href: "#ready", ariaLabel: "Start your project with us" },
                  { label: "Free Consultation", href: "#ready", ariaLabel: "Book a free consultation" },
                  { label: "Pricing", href: "#pricing", ariaLabel: "View our pricing plans" }
                ]
              }
            ]}
            baseColor="rgba(0, 0, 0, 0.95)"
            menuColor="#ffffff"
            buttonBgColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            buttonTextColor="#ffffff"
            ease="power3.out"
          />
          
          {/* Hero Section - No transition wrapper needed as it has its own animations */}
          <HeroScrollSection />
          
          {/* Lazy-loaded sections with Suspense for better performance */}
          <Suspense fallback={<div className="h-20 bg-black" />}>
            {/* Statistics Section - Moved right after Hero */}
            <SectionTransition delay={shouldReduceMotion ? 0 : 0.05}>
              <StatisticsSection />
            </SectionTransition>
            
            {/* Process Section with Optimized Transition */}
            <SectionTransition delay={shouldReduceMotion ? 0 : 0.1}>
              <ProcessSection />
            </SectionTransition>
            
            {/* Logo Scroll Section with Optimized Transition */}
            <SectionTransition delay={shouldReduceMotion ? 0 : 0.15}>
              <LogoScrollSection />
            </SectionTransition>
            
            {/* Features Section with Optimized Transition */}
            <SectionTransition delay={shouldReduceMotion ? 0 : 0.2}>
              <FeaturesSection />
            </SectionTransition>
            
            {/* Testimonials Section with Optimized Transition */}
            <SectionTransition delay={shouldReduceMotion ? 0 : 0.25}>
              <TestimonialsSection />
            </SectionTransition>
            
            {/* Pricing Section with Optimized Transition */}
            <SectionTransition delay={shouldReduceMotion ? 0 : 0.3}>
              <PricingSection />
            </SectionTransition>
            
            {/* Final CTA Section with Optimized Transition */}
            <SectionTransition delay={shouldReduceMotion ? 0 : 0.35}>
              <FinalCTASection />
            </SectionTransition>
            
            {/* Footer with Optimized Transition */}
            <SectionTransition delay={shouldReduceMotion ? 0 : 0.4}>
              <Footer />
            </SectionTransition>
          </Suspense>
        </motion.div>
      </PageTransition>
    </>
  );
}

export default App;
