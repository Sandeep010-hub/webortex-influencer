
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ROICalculator = () => {
  const [followers, setFollowers] = useState(100000);
  const [collabRate, setCollabRate] = useState(5000);
  const [results, setResults] = useState({
    currentMonthly: 0,
    projectedMonthly: 0,
    increase: 0,
    yearlyGain: 0
  });

  const calculateROI = () => {
    const currentMonthly = collabRate * 2; // Assuming 2 collabs per month
    const projectedMonthly = currentMonthly * 2.5; // 150% increase with website
    const increase = projectedMonthly - currentMonthly;
    const yearlyGain = increase * 12;

    setResults({
      currentMonthly,
      projectedMonthly,
      increase,
      yearlyGain
    });
  };

  React.useEffect(() => {
    calculateROI();
  }, [followers, collabRate]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#ffd700] to-[#00d4ff] bg-clip-text text-transparent">
            Revenue Calculator
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate your potential revenue increase with a professional portfolio website.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Input */}
          <div className="glass rounded-2xl p-8 card-hover">
            <h3 className="text-2xl font-bold text-white mb-6">Your Current Stats</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Current Followers: {followers.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={followers}
                  onChange={(e) => setFollowers(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>10K</span>
                  <span>10M</span>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Average Collaboration Rate: ₹{collabRate.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="1000"
                  max="500000"
                  step="1000"
                  value={collabRate}
                  onChange={(e) => setCollabRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>₹1K</span>
                  <span>₹5L</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 card-hover border border-orange-500/30">
              <h4 className="text-lg font-semibold text-orange-300 mb-2">Current Monthly Revenue</h4>
              <p className="text-3xl font-bold text-orange-400">₹{results.currentMonthly.toLocaleString()}</p>
            </div>

            <div className="glass rounded-2xl p-6 card-hover border border-[#00d4ff]/30">
              <h4 className="text-lg font-semibold text-[#00d4ff] mb-2">Projected Monthly Revenue</h4>
              <p className="text-3xl font-bold text-[#00d4ff]">₹{results.projectedMonthly.toLocaleString()}</p>
            </div>

            <div className="glass rounded-2xl p-6 card-hover border border-[#ffd700]/30">
              <h4 className="text-lg font-semibold text-[#ffd700] mb-2">Additional Yearly Revenue</h4>
              <p className="text-4xl font-bold text-[#ffd700]">₹{results.yearlyGain.toLocaleString()}</p>
              <p className="text-sm text-gray-300 mt-2">
                That's ₹{results.increase.toLocaleString()} extra per month!
              </p>
            </div>

            <Button 
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-[#ffd700] to-[#00d4ff] hover:from-[#e6c200] hover:to-[#0099cc] text-black font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get My Free Revenue Analysis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
