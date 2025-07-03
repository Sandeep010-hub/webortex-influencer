
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ROICalculator = () => {
  const [followers, setFollowers] = useState(100000);
  const [collabRate, setCollabRate] = useState(5000);
  const [results, setResults] = useState({
    currentMonthly: 0,
    projectedMonthly: 0,
    increase: 0,
    yearlyGain: 0
  });
  const navigate = useNavigate();

  const calculateROI = () => {
    const currentMonthly = collabRate * 2;
    const projectedMonthly = currentMonthly * 2.5;
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

  const handleGetAnalysis = () => {
    navigate('/contact');
  };

  return (
    <section className="py-12 md:py-16 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#ffd700] to-[#00d4ff] bg-clip-text text-transparent">
            Revenue Calculator
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Calculate your potential revenue increase with a professional portfolio website.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="bg-black/60 backdrop-blur-sm border-2 border-gray-800 rounded-2xl p-6 md:p-8 hover:border-[#00d4ff]/50 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Your Current Stats</h3>
            
            <div className="space-y-4 md:space-y-6">
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

          <div className="space-y-4 md:space-y-6">
            <div className="bg-black/60 backdrop-blur-sm border-2 border-orange-500/30 rounded-2xl p-4 md:p-6 hover:border-orange-400/50 transition-all duration-300">
              <h4 className="text-base md:text-lg font-semibold text-orange-300 mb-2">Current Monthly Revenue</h4>
              <p className="text-2xl md:text-3xl font-bold text-orange-400">₹{results.currentMonthly.toLocaleString()}</p>
            </div>

            <div className="bg-black/60 backdrop-blur-sm border-2 border-[#00d4ff]/30 rounded-2xl p-4 md:p-6 hover:border-[#00d4ff]/50 transition-all duration-300">
              <h4 className="text-base md:text-lg font-semibold text-[#00d4ff] mb-2">Projected Monthly Revenue</h4>
              <p className="text-2xl md:text-3xl font-bold text-[#00d4ff]">₹{results.projectedMonthly.toLocaleString()}</p>
            </div>

            <div className="bg-black/60 backdrop-blur-sm border-2 border-[#ffd700]/30 rounded-2xl p-4 md:p-6 hover:border-[#ffd700]/50 transition-all duration-300">
              <h4 className="text-base md:text-lg font-semibold text-[#ffd700] mb-2">Additional Yearly Revenue</h4>
              <p className="text-3xl md:text-4xl font-bold text-[#ffd700]">₹{results.yearlyGain.toLocaleString()}</p>
              <p className="text-sm text-gray-300 mt-2">
                That's ₹{results.increase.toLocaleString()} extra per month!
              </p>
            </div>

            <Button 
              onClick={handleGetAnalysis}
              className="w-full bg-gradient-to-r from-[#ffd700] to-[#00d4ff] hover:from-[#e6c200] hover:to-[#0099cc] text-black font-semibold py-2 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-white/20"
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
