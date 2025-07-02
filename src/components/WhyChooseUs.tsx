
import React from 'react';

const WhyChooseUs = () => {
  const differentiators = [
    {
      title: 'Influencer-Focused Expertise',
      description: 'We understand the unique needs of content creators and influencers',
      icon: '🎯',
      details: ['Specialized in influencer marketing', 'Industry-specific features', 'Creator-focused design patterns']
    },
    {
      title: 'Revenue-First Design Approach',
      description: 'Every element is optimized to maximize your earning potential',
      icon: '💰',
      details: ['Conversion-optimized layouts', 'Revenue tracking integration', 'Monetization strategy consulting']
    },
    {
      title: 'Ongoing Support & Optimization',
      description: 'Continuous improvements and dedicated support for your success',
      icon: '🚀',
      details: ['24/7 technical support', 'Regular performance optimization', 'Feature updates and enhancements']
    },
    {
      title: 'Local Market Understanding',
      description: 'Deep knowledge of Indian market dynamics and audience behavior',
      icon: '🇮🇳',
      details: ['Regional language support', 'Local payment gateway integration', 'Cultural design considerations']
    }
  ];

  const competitors = [
    { feature: 'Influencer-Specific Features', webortex: true, others: false },
    { feature: '24/7 Support', webortex: true, others: false },
    { feature: 'Revenue Optimization', webortex: true, others: false },
    { feature: 'Local Market Focus', webortex: true, others: false },
    { feature: 'Affordable Pricing', webortex: true, others: false },
    { feature: 'Quick Turnaround', webortex: true, others: false },
    { feature: 'Custom Integrations', webortex: true, others: true },
    { feature: 'Mobile Responsive', webortex: true, others: true }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
            Why Choose Webortex?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another web development agency. We're specialists in transforming influencer presence into profitable businesses.
          </p>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#9d4edd]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-[#00d4ff]/50 transition-all duration-300 h-full">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
                <ul className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="text-[#00d4ff] mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Webortex vs. Generic Web Agencies
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-[#00d4ff] font-semibold">Webortex</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-semibold">Others</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.webortex ? (
                        <span className="text-green-400 text-xl">✓</span>
                      ) : (
                        <span className="text-red-400 text-xl">✕</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.others ? (
                        <span className="text-green-400 text-xl">✓</span>
                      ) : (
                        <span className="text-red-400 text-xl">✕</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#9d4edd]/10 backdrop-blur-sm border border-[#00d4ff]/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-white">Trusted by Leading Influencers</h3>
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00d4ff]">98%</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffd700]">250%</div>
                <p className="text-gray-400">Avg. Revenue Increase</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#9d4edd]">2-4 weeks</div>
                <p className="text-gray-400">Average Delivery</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <p className="text-gray-400">Support Available</p>
              </div>
            </div>
            <p className="text-gray-300">
              Join the growing community of successful influencers who chose Webortex to transform their online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
