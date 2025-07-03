
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Eye } from 'lucide-react';

const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({
    engagement: 0,
    reach: 0,
    roi: 0,
    growth: 0
  });

  useEffect(() => {
    const animateMetrics = () => {
      const targets = { engagement: 8.7, reach: 2.4, roi: 340, growth: 156 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setMetrics({
          engagement: Math.floor(targets.engagement * progress * 10) / 10,
          reach: Math.floor(targets.reach * progress * 10) / 10,
          roi: Math.floor(targets.roi * progress),
          growth: Math.floor(targets.growth * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateMetrics, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="metrics" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#5C4D9B] to-[#00d4ff] bg-clip-text text-transparent">
            Live Metrics Preview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See real-time analytics that drive campaign success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass rounded-2xl p-8 hover:border-[#5C4D9B]/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-[#5C4D9B]" />
              <div className="text-right">
                <div className="text-3xl font-bold text-white">
                  {metrics.engagement}%
                </div>
                <div className="text-sm text-gray-400">Engagement Rate</div>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#5C4D9B] to-[#3B2F63] h-2 rounded-full transition-all duration-2000"
                style={{ width: `${(metrics.engagement / 10) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 hover:border-[#00d4ff]/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-8 h-8 text-[#00d4ff]" />
              <div className="text-right">
                <div className="text-3xl font-bold text-white">
                  {metrics.reach}M
                </div>
                <div className="text-sm text-gray-400">Monthly Reach</div>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] h-2 rounded-full transition-all duration-2000"
                style={{ width: `${(metrics.reach / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 hover:border-[#5C4D9B]/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-[#5C4D9B]" />
              <div className="text-right">
                <div className="text-3xl font-bold text-white">
                  {metrics.roi}%
                </div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#5C4D9B] to-[#3B2F63] h-2 rounded-full transition-all duration-2000"
                style={{ width: `${(metrics.roi / 400) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 hover:border-[#00d4ff]/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-[#00d4ff]" />
              <div className="text-right">
                <div className="text-3xl font-bold text-white">
                  +{metrics.growth}%
                </div>
                <div className="text-sm text-gray-400">Campaign Growth</div>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#00d4ff] to-[#0099cc] h-2 rounded-full transition-all duration-2000"
                style={{ width: `${(metrics.growth / 200) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMetrics;
