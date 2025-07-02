
import React from 'react';

const ProcessTimeline = () => {
  const steps = [
    {
      week: 'Week 1',
      title: 'Free Consultation',
      description: 'We analyze your current online presence and discuss your goals',
      icon: '💬',
      details: [
        'Brand analysis and competitor research',
        'Revenue goal setting and strategy planning',
        'Feature requirements discussion',
        'Timeline and budget finalization'
      ],
      color: 'from-[#00d4ff] to-[#0099cc]'
    },
    {
      week: 'Weeks 2-4',
      title: 'Design & Development',
      description: 'Custom design creation and website development with regular updates',
      icon: '🎨',
      details: [
        'Custom design mockups and revisions',
        'Mobile-responsive development',
        'Payment gateway integration',
        'Content management system setup'
      ],
      color: 'from-[#9d4edd] to-[#7c3aed]'
    },
    {
      week: 'Week 5',
      title: 'Launch & Optimization',
      description: 'Website launch, testing, and initial optimization for best performance',
      icon: '🚀',
      details: [
        'Final testing and bug fixes',
        'SEO optimization and setup',
        'Analytics and tracking implementation',
        'Live launch and domain setup'
      ],
      color: 'from-[#ffd700] to-[#ff8c00]'
    },
    {
      week: 'Month 2+',
      title: 'Ongoing Support',
      description: 'Continuous support, updates, and optimization for maximum results',
      icon: '🛡️',
      details: [
        '24/7 technical support',
        'Regular performance monitoring',
        'Content updates and maintenance',
        'Feature enhancements and upgrades'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From consultation to launch and beyond - here's how we transform your online presence step by step.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00d4ff] via-[#9d4edd] via-[#ffd700] to-green-500 rounded-full hidden lg:block"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-12 space-y-8 lg:space-y-0`}>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 group">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <span className={`text-4xl mr-4 transform group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </span>
                      <div>
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                          {step.week}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-500 flex items-center text-sm">
                          <span className="text-[#00d4ff] mr-2">▶</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden lg:block">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl border-4 border-black`}>
                    {index + 1}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#9d4edd]/10 backdrop-blur-sm border border-[#00d4ff]/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Journey?</h3>
            <p className="text-gray-300 mb-6">
              Our streamlined process ensures you get a professional website that drives results, delivered on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] hover:from-[#0099cc] hover:to-[#7c3aed] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Schedule Free Consultation
              </button>
              <button className="border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                View Sample Timeline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
