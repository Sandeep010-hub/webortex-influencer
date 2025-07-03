
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
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
        return;
      }
    }
    
    navigate(href);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#3B2F63]/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-bold bg-gradient-to-r from-[#5C4D9B] to-[#00d4ff] bg-clip-text text-transparent"
            >
              Influfluence
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-300 hover:text-[#5C4D9B] transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => handleNavigation('#demo')}
              className="border-[#5C4D9B] text-[#5C4D9B] hover:bg-[#5C4D9B] hover:text-white transition-all duration-300"
            >
              See Demo
            </Button>
            <Button 
              onClick={() => handleNavigation('#pricing')}
              className="bg-gradient-to-r from-[#5C4D9B] to-[#3B2F63] hover:from-[#4a3f85] hover:to-[#2f2550] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
            >
              Start Free Trial
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-[#5C4D9B] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-lg mt-2 border border-[#3B2F63]/30">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#5C4D9B] transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline"
                  onClick={() => handleNavigation('#demo')}
                  className="w-full border-[#5C4D9B] text-[#5C4D9B] hover:bg-[#5C4D9B] hover:text-white"
                >
                  See Demo
                </Button>
                <Button 
                  onClick={() => handleNavigation('#pricing')}
                  className="w-full bg-gradient-to-r from-[#5C4D9B] to-[#3B2F63] text-white"
                >
                  Start Free Trial
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
