import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo and description */}
          <div className="flex-1">
            <div className="flex items-center mb-3 xs:mb-4">
              <span className="text-xl xs:text-2xl font-bold text-white tracking-tight">
                FreeWebWiz
              </span>
            </div>
            <p className="text-sm xs:text-base text-gray-400 max-w-md">
              Better call the best. Every great website starts here.
            </p>
          </div>

          {/* Footer links */}
          <div className="flex flex-wrap gap-4 xs:gap-6 md:gap-8">
            <a href="#features" className="cursor-target text-sm xs:text-base text-gray-400 hover:text-white transition-colors duration-200">
              Features
            </a>
            <a href="#testimonials" className="cursor-target text-sm xs:text-base text-gray-400 hover:text-white transition-colors duration-200">
              Reviews
            </a>
            <a href="#pricing" className="cursor-target text-sm xs:text-base text-gray-400 hover:text-white transition-colors duration-200">
              Pricing
            </a>
            <a href="#contact" className="cursor-target text-sm xs:text-base text-gray-400 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 xs:mt-12 pt-6 xs:pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400 text-xs xs:text-sm">
            © 2025 FreeWebWiz. All rights reserved. Better call the best!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;