import React from 'react';
import { Target, DollarSign, Rocket, MapPin, CheckCircle, XCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const differentiators = [
    {
      title: 'Influencer-Focused Expertise',
      description: 'We understand the unique needs of content creators and influencers',
      icon: Target,
      details: ['Specialized in influencer marketing', 'Industry-specific features', 'Creator-focused design patterns']
    },
    {
      title: 'Revenue-First Design Approach',
      description: 'Every element is optimized to maximize your earning potential',
      icon: DollarSign,
      details: ['Conversion-optimized layouts', 'Revenue tracking integration', 'Monetization strategy consulting']
    },
    {
      title: 'Ongoing Support & Optimization',
      description: 'Continuous improvements and dedicated support for your success',
      icon: Rocket,
      details: ['24/7 technical support', 'Regular performance optimization', 'Feature updates and enhancements']
    },
    {
      title: 'Local Market Understanding',
      description: 'Deep knowledge of Indian market dynamics and audience behavior',
      icon: MapPin,
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
    <section className="py-12 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
            Why Choose Webortex?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another web development agency. We're specialists in transforming influencer presence into profitable businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="group relative">
                <div className="relative bg-black/60 backdrop-blur-sm border-2 border-gray-800 rounded-2xl p-4 md:p-6 group-hover:border-[#00d4ff] group-hover:shadow-lg transition-all duration-300 h-full">
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-[#00d4ff]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                  <ul className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-gray-500 flex items-center">
                        <span className="text-[#00d4ff] mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-black/60 backdrop-blur-sm border-2 border-gray-800 rounded-2xl p-6 md:p-8 hover:border-[#00d4ff]/30 transition-all duration-300">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-white">
            Webortex vs. Generic Web Agencies
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="text-left py-3 md:py-4 px-2 md:px-4 text-white font-semibold text-sm md:text-base">Feature</th>
                  <th className="text-center py-3 md:py-4 px-2 md:px-4 text-[#00d4ff] font-semibold text-sm md:text-base">Webortex</th>
                  <th className="text-center py-3 md:py-4 px-2 md:px-4 text-gray-400 font-semibold text-sm md:text-base">Others</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="py-3 md:py-4 px-2 md:px-4 text-gray-300 text-sm md:text-base">{row.feature}</td>
                    <td className="py-3 md:py-4 px-2 md:px-4 text-center">
                      {row.webortex ? (
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-400 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 md:py-4 px-2 md:px-4 text-center">
                      {row.others ? (
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-400 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#9d4edd]/10 backdrop-blur-sm border-2 border-[#00d4ff]/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto hover:border-[#00d4ff]/50 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#00d4ff]">Trusted by Leading Influencers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-[#00d4ff]">98%</div>
                <p className="text-sm md:text-base text-gray-400">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-[#ffd700]">250%</div>
                <p className="text-sm md:text-base text-gray-400">Avg. Revenue Increase</p>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-[#9d4edd]">2-4 weeks</div>
                <p className="text-sm md:text-base text-gray-400">Average Delivery</p>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-green-400">24/7</div>
                <p className="text-sm md:text-base text-gray-400">Support Available</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-300">
              Join the growing community of successful influencers who chose Webortex to transform their online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
