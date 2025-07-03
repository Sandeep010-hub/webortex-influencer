
import React from 'react';
import { Search, BarChart3, Users } from 'lucide-react';

const KeyFeatures = () => {
  const features = [
    {
      icon: Search,
      title: 'Discover Top Influencers',
      description: 'Find the perfect influencers for your brand with advanced filtering and AI-powered matching.',
      gradient: 'from-[#5C4D9B] to-[#3B2F63]'
    },
    {
      icon: BarChart3,
      title: 'Track Real ROI',
      description: 'Monitor campaign performance with detailed analytics and conversion tracking.',
      gradient: 'from-[#00d4ff] to-[#0099cc]'
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Deep demographic analysis and engagement patterns to optimize your campaigns.',
      gradient: 'from-[#5C4D9B] to-[#00d4ff]'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#5C4D9B] to-[#00d4ff] bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful tools to transform your influencer marketing strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="glass rounded-2xl p-8 hover:border-[#5C4D9B]/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
