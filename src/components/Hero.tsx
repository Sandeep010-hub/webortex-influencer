
import React from 'react';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Users, Eye } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] opacity-90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1QzREOUIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[#5C4D9B] via-[#00d4ff] to-[#3B2F63] bg-clip-text text-transparent animate-fade-in">
          Turn Influence Into Insights
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto animate-fade-in delay-300">
          Advanced analytics to power your campaigns and maximize ROI
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-500">
          <Button 
            onClick={() => scrollToSection('#pricing')}
            className="bg-gradient-to-r from-[#5C4D9B] to-[#3B2F63] hover:from-[#4a3f85] hover:to-[#2f2550] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
          >
            Start Free Trial
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('#metrics')}
            className="border-2 border-[#5C4D9B] text-[#5C4D9B] hover:bg-[#5C4D9B] hover:text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
          >
            See Demo
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in delay-700">
          <div className="glass rounded-xl p-4 hover:border-[#5C4D9B]/50 transition-all duration-300">
            <BarChart3 className="w-8 h-8 text-[#5C4D9B] mx-auto mb-2" />
            <p className="text-sm text-gray-400">Analytics</p>
          </div>
          
          <div className="glass rounded-xl p-4 hover:border-[#5C4D9B]/50 transition-all duration-300">
            <TrendingUp className="w-8 h-8 text-[#00d4ff] mx-auto mb-2" />
            <p className="text-sm text-gray-400">Growth</p>
          </div>
          
          <div className="glass rounded-xl p-4 hover:border-[#5C4D9B]/50 transition-all duration-300">
            <Users className="w-8 h-8 text-[#5C4D9B] mx-auto mb-2" />
            <p className="text-sm text-gray-400">Audience</p>
          </div>
          
          <div className="glass rounded-xl p-4 hover:border-[#5C4D9B]/50 transition-all duration-300">
            <Eye className="w-8 h-8 text-[#00d4ff] mx-auto mb-2" />
            <p className="text-sm text-gray-400">Insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
