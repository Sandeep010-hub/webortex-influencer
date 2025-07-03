
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [counters, setCounters] = useState({
    websites: 0,
    revenue: 0,
    clients: 0
  });

  const texts = [
    'Transform Your Influence Into Income',
    'Convert Followers Into Revenue',
    'Build Your Digital Empire'
  ];

  // Fixed typewriter effect without cursor
  useEffect(() => {
    const typeInterval = setInterval(() => {
      const currentFullText = texts[currentIndex];
      
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [currentText, currentIndex, isDeleting]);

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = { websites: 500, revenue: 2, clients: 1200 };
      const duration = 3000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          websites: Math.floor(targets.websites * progress),
          revenue: Math.floor(targets.revenue * progress * 100) / 100,
          clients: Math.floor(targets.clients * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d15] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGQ0ZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Main Headline with Typewriter Effect */}
        <div className="h-24 mb-6 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#9d4edd] to-[#ffd700] bg-clip-text text-transparent">
            {currentText}
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto animate-fade-in delay-500">
          Professional Portfolio Websites That Convert Followers Into Revenue
        </p>

        {/* Statistics Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in delay-700">
          <div className="glass rounded-2xl p-6 card-hover">
            <div className="text-3xl font-bold text-[#00d4ff] mb-2">
              {counters.websites}+
            </div>
            <p className="text-gray-300">Websites Built</p>
          </div>
          
          <div className="glass rounded-2xl p-6 card-hover">
            <div className="text-3xl font-bold text-[#ffd700] mb-2">
              ₹{counters.revenue}Cr+
            </div>
            <p className="text-gray-300">Revenue Generated</p>
          </div>
          
          <div className="glass rounded-2xl p-6 card-hover">
            <div className="text-3xl font-bold text-[#9d4edd] mb-2">
              {counters.clients}+
            </div>
            <p className="text-gray-300">Happy Clients</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-1000">
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="bg-[#00d4ff] hover:bg-[#0099cc] text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Your Free Demo
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('#process')}
            className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            View Our Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
