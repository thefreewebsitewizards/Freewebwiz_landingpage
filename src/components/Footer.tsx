import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    Services: ['Free Websites', 'Custom Design', 'SEO Optimization', 'Mobile Responsive'],
    Industries: ['Small Business', 'Creators', 'Influencers', 'UGC Creators'],
    Resources: ['Portfolio', 'Blog', 'Tips', 'Guides'],
    Support: ['Contact', 'FAQ', 'Help Center', 'Request Website'],
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 hover:scale-105 transition-transform duration-200">
              <span className="text-2xl font-bold text-white tracking-tight">
                FreeWebWiz
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              FreeWebWiz creates professional, responsive websites for small businesses, creators, and influencers at absolutely no cost. Building your digital presence, one free website at a time.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <button
                  key={social}
                  type="button"
                  className="text-gray-400 hover:text-slash-gold hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-200 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 FreeWebWiz. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <button
                  key={link}
                  type="button"
                  className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-xs text-center">
            FreeWebWiz provides professional website creation services at no cost. All websites are created with care and attention to detail. Results may vary based on individual requirements and content provided.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;