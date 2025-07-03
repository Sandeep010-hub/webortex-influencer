import React from 'react';

const SolutionOverview = () => {
  const features = [
    { icon: '💸', title: 'Payment Integration', description: 'Accept payments directly from your website' },
    { icon: '📅', title: 'Event Booking System', description: 'Let clients book sessions with you easily' },
    { icon: '🌐', title: 'Professional Contact Forms', description: 'Streamlined communication with potential clients' },
    { icon: '📢', title: 'Social Media Integration', description: 'Showcase all your social platforms in one place' },
    { icon: '🏆', title: 'Achievement Showcase', description: 'Display your accomplishments and credentials' },
    { icon: '💬', title: 'Testimonial Management', description: 'Build trust with client reviews and feedback' },
    { icon: '🎥', title: 'Content Highlights', description: 'Feature your best work and collaborations' },
    { icon: '🧑‍🎨', title: 'Custom Design', description: 'Unique designs tailored to your brand' }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/10 to-[#9d4edd]/10 blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
              Webortex: Your Digital Business Hub
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your influence into a profitable business, all in one professional website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Removed background/gradient/blur hover effect */}
                <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-[#00d4ff] group-hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#00d4ff] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#9d4edd]/10 backdrop-blur-sm border border-[#00d4ff]/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-[#00d4ff]">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">Join thousands of influencers who've transformed their online presence with Webortex.</p>
              <button
                onClick={() => {
                  const el = document.querySelector('#process');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] hover:from-[#0099cc] hover:to-[#7c3aed] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00d4ff]/50"
              >
                Start Your Transformation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
