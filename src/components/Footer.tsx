
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string, section?: string) => {
    if (location.pathname === '/' && section) {
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    navigate(href);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { name: 'Home', href: '/', section: '#hero' },
    { name: 'Services', href: '/services', section: '#solutions' },
    { name: 'Pricing', href: '/pricing', section: '#pricing' },
    { name: 'Process', href: '/process', section: '#process' },
    { name: 'Contact', href: '/contact', section: '#contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refund' }
  ];

  return (
    <footer className="bg-black/95 backdrop-blur-sm border-t-2 border-gray-800 py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <button
              onClick={() => handleNavigation('/')}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent mb-4 block"
            >
              Webortex
            </button>
            <p className="text-gray-400 mb-6 max-w-md text-sm md:text-base">
              Transforming influencer presence into profitable businesses through professional portfolio websites. 
              Your success is our mission.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/60 backdrop-blur-sm border-2 border-gray-800 rounded-full flex items-center justify-center hover:border-[#00d4ff]/50 transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 hover:text-[#00d4ff] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href, link.section)}
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-200 text-sm md:text-base"
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
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-200 text-sm md:text-base"
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

        <div className="pt-6 md:pt-8 border-t-2 border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Webortex. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Secure
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Fast
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Responsive
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
