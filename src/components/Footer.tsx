
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Refund', href: '/refund' }
  ];

  return (
    <footer id="contact" className="bg-[#0a0a0a]/95 backdrop-blur-sm border-t-2 border-[#3B2F63]/30 py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <button
              onClick={() => handleNavigation('/')}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#5C4D9B] to-[#00d4ff] bg-clip-text text-transparent mb-4 block"
            >
              Influfluence
            </button>
            <p className="text-gray-400 mb-6 max-w-md text-sm md:text-base">
              Advanced influencer analytics platform by WEBORTEX. 
              Transform your campaigns with data-driven insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0a0a0a]/60 backdrop-blur-sm border-2 border-[#3B2F63] rounded-full flex items-center justify-center hover:border-[#5C4D9B]/50 transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#5C4D9B] transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0a0a0a]/60 backdrop-blur-sm border-2 border-[#3B2F63] rounded-full flex items-center justify-center hover:border-[#5C4D9B]/50 transition-all duration-300 hover:scale-110"
                title="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-[#5C4D9B] transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-400 hover:text-[#5C4D9B] transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-400 hover:text-[#5C4D9B] transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Contact Info</h4>
              <p className="text-gray-400 text-sm">
                Phone: +91 8688221981 / 9502414128<br />
                Email: webortex@gmail.com<br />
                Location: AP, India
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t-2 border-[#3B2F63]/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Influfluence by WEBORTEX. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-[#5C4D9B] rounded-full mr-2"></span>
              Secure
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full mr-2"></span>
              Fast
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-[#5C4D9B] rounded-full mr-2"></span>
              Analytics
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
