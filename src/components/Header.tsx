
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', section: '#hero' },
    { name: 'Services', href: '/services', section: '#solutions' },
    { name: 'Pricing', href: '/pricing', section: '#pricing' },
    { name: 'Process', href: '/process', section: '#process' },
    { name: 'Contact', href: '/contact', section: '#contact' }
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (location.pathname === '/' && item.section) {
      const element = document.querySelector(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
        return;
      }
    }
    
    navigate(item.href);
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    if (location.pathname === '/') {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/contact');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent"
            >
              Webortex
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-gray-300 hover:text-[#00d4ff] transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00a8d4] hover:to-[#007aa3] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#00d4ff]/30"
            >
              Get Free Demo
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-[#00d4ff] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-lg rounded-lg mt-2 border border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00d4ff] transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00a8d4] hover:to-[#007aa3] text-white font-semibold py-2 rounded-lg"
                >
                  Get Free Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
