import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
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

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to format numbers with fixed width
  const formatNumber = (value: number, max: number) => {
    const str = value.toString();
    return str.padStart(max.toString().length, '0');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: '100% 50%' }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0a0a0a] via-[#9d4edd] to-[#00d4ff] opacity-25 blur-2xl bg-[length:200%_200%]"
          style={{ zIndex: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGQ0ZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"
          style={{ zIndex: 2 }}
        ></motion.div>
      </motion.div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="h-24 mb-6 flex items-center justify-center overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#9d4edd] to-[#ffd700] bg-clip-text text-transparent">
              {currentText}
            </h1>
          </motion.div>
        </div>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Professional Portfolio Websites That Convert Followers Into Revenue
        </motion.p>

        <div className="flex justify-center w-full">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div
              className="glass rounded-2xl p-6 card-hover w-[220px] h-[120px] flex flex-col justify-center items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-3xl font-bold text-[#00d4ff] mb-2 relative font-mono min-w-[80px] flex justify-center">
                <span aria-hidden="true" className="invisible select-none absolute">500+</span>
                <span>{counters.websites === 500 ? '500+' : counters.websites + '+'}</span>
              </div>
              <p className="text-gray-300">Websites Built</p>
            </motion.div>
            
            <motion.div
              className="glass rounded-2xl p-6 card-hover w-[220px] h-[120px] flex flex-col justify-center items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-[#ffd700] mb-2 relative font-mono min-w-[80px] flex justify-center">
                <span aria-hidden="true" className="invisible select-none absolute">₹2Cr+</span>
                <span>{counters.revenue === 2 ? '₹2Cr+' : `₹${counters.revenue}Cr+`}</span>
              </div>
              <p className="text-gray-300">Revenue Generated</p>
            </motion.div>
            
            <motion.div
              className="glass rounded-2xl p-6 card-hover w-[220px] h-[120px] flex flex-col justify-center items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-[#9d4edd] mb-2 relative font-mono min-w-[80px] flex justify-center">
                <span aria-hidden="true" className="invisible select-none absolute">1200+</span>
                <span>{counters.clients === 1200 ? '1200+' : counters.clients + '+'}</span>
              </div>
              <p className="text-gray-300">Happy Clients</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00a8d4] hover:to-[#007aa3] text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 border border-[#00d4ff]/40 shadow-lg drop-shadow-lg"
          >
            Get Your Free Demo
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('#process')}
            className="border-2 border-[#9d4edd] text-[#9d4edd] bg-white/10 hover:bg-[#9d4edd]/10 hover:text-white hover:border-[#9d4edd] font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow"
          >
            View Our Process
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
