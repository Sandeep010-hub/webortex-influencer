import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

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
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/webortex/?igsh=bDN2d3hucmxuMjd5#' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/181A4ZPQmc/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/webortex-a08a93359/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refund' }
  ];

  return (
    <footer className="bg-black/95 backdrop-blur-sm border-t-2 border-gray-800 py-3 md:py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8 w-full">
          {/* Brand & Description */}
          <div className="flex flex-col min-w-[200px]">
            <a
              href="/"
              className="mb-2 block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
              aria-label="Go to homepage"
            >
              <img src="/logo.png" alt="Webortex logo" className="h-10 w-auto" />
            </a>
            <p className="text-gray-400 mb-2 max-w-xs text-sm md:text-base">
              Transforming influencer presence into profitable businesses through professional portfolio websites. Your success is our mission.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col min-w-[120px]">
            <h3 className="text-lg font-semibold text-white mb-2">Navigation</h3>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href, link.section)}
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-200 text-sm md:text-base text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col min-w-[140px]">
            <h3 className="text-lg font-semibold text-white mb-2">Legal</h3>
            <ul className="space-y-1">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-200 text-sm md:text-base text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Socials (stacked vertically) */}
          <div className="flex flex-col min-w-[220px] gap-4">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Contact Info</h4>
              <p className="text-gray-400 text-sm">
                Phone: +91 8688221981 / 9502414128<br />
                Email: webortex@gmail.com<br />
                Location: AP, India
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
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
        </div>

        <div className="pt-6 md:pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Webortex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
