import React, { useEffect } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onComplete }) => {
  useEffect(() => {
    if (!isLoading && onComplete) {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500"
      style={{ opacity: isLoading ? 1 : 0 }}
    >
      {/* Simplified Background */}
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, rgba(0, 0, 0, 1) 70%)",
          animationDuration: '3s'
        }}
      />

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <h1 
            className="text-4xl md:text-5xl font-black text-white mb-2 animate-pulse"
            style={{
              textShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
              animationDuration: '2s'
            }}
          >
            FreeWebWiz
          </h1>
          <p className="text-gray-400 text-lg">
            Building your digital presence
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center items-center space-x-2 mb-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-full animate-progress"
            style={{
              animation: 'progress 2.5s ease-out forwards'
            }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-gray-500 text-sm mt-4">
          Preparing your experience...
        </p>
      </div>

      {/* Simplified Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-float"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;