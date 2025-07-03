import React from 'react';

const Guarantees = () => {
  const guarantees = [
    {
      title: '30-Day Money-Back Guarantee',
      description: 'Not satisfied? Get a full refund within 30 days, no questions asked.',
      icon: '💰',
      color: 'from-green-500 to-green-600'
    },
    {
      title: '100% Satisfaction Promise',
      description: 'We work until you\'re completely happy with your website.',
      icon: '⭐',
      color: 'from-[#ffd700] to-[#ff8c00]'
    },
    {
      title: 'Unlimited Revisions',
      description: 'Make as many changes as you need during the development process.',
      icon: '🔄',
      color: 'from-[#00d4ff] to-[#0099cc]'
    },
    {
      title: '6 Months Free Support',
      description: 'Complimentary technical support and maintenance for half a year.',
      icon: '🛡️',
      color: 'from-[#9d4edd] to-[#7c3aed]'
    },
    {
      title: 'Performance Guarantee',
      description: 'Your website will load fast and perform flawlessly across all devices.',
      icon: '⚡',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
            Our Guarantees & Promises
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We stand behind our work with industry-leading guarantees that protect your investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="group relative">
              <div className="relative glass rounded-2xl p-8 border border-gray-800 group-hover:border-[#00d4ff] group-hover:shadow-lg transition-all duration-300 h-full">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#00d4ff] transition-colors">
                  {guarantee.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {guarantee.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge Section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-white">Why These Guarantees Matter</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold text-[#00d4ff] mb-2">Risk-Free Investment</h4>
                <p className="text-gray-300">Your investment is completely protected. We only succeed when you succeed.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#00d4ff] mb-2">Proven Track Record</h4>
                <p className="text-gray-300">Over 500+ successful projects with 98% client satisfaction rate.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#00d4ff] mb-2">Long-term Partnership</h4>
                <p className="text-gray-300">We build lasting relationships, not just websites. Your success is our priority.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#00d4ff] mb-2">Quality Assurance</h4>
                <p className="text-gray-300">Every website undergoes rigorous testing before launch to ensure perfection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
