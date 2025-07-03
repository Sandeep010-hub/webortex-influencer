
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141428] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGQ0ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00d4ff] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9d4edd] rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#ffd700] rounded-full opacity-20 blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] via-[#9d4edd] to-[#ffd700] bg-clip-text text-transparent animate-fade-in">
          Transform Your Influence Into Income
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto animate-fade-in delay-300">
          Professional Portfolio Websites That Convert Followers Into Revenue
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Button className="bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] hover:from-[#0099cc] hover:to-[#7c3aed] text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00d4ff]/50">
            Get Your Free Demo
          </Button>
          
          <Button variant="outline" className="border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
            View Our Portfolio
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-[#00d4ff]" />
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-10 right-10 flex space-x-4 opacity-30">
        <div className="w-8 h-8 bg-[#00d4ff] rounded-full animate-pulse"></div>
        <div className="w-8 h-8 bg-[#9d4edd] rounded-full animate-pulse delay-200"></div>
        <div className="w-8 h-8 bg-[#ffd700] rounded-full animate-pulse delay-400"></div>
      </div>
    </section>
  );
};

export default Hero;
