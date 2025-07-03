
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingCTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass rounded-3xl p-12 hover:border-[#5C4D9B]/50 transition-all duration-300">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#5C4D9B] to-[#00d4ff] bg-clip-text text-transparent">
            Start Analyzing for Free
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get full access to our analytics platform with a 14-day free trial. No credit card required.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-[#5C4D9B]" />
              <span className="text-gray-300">Unlimited campaigns</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-[#5C4D9B]" />
              <span className="text-gray-300">Real-time analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-[#5C4D9B]" />
              <span className="text-gray-300">Advanced insights</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#5C4D9B] to-[#3B2F63] hover:from-[#4a3f85] hover:to-[#2f2550] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
            
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="border-2 border-[#5C4D9B] text-[#5C4D9B] hover:bg-[#5C4D9B] hover:text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              Contact for Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
