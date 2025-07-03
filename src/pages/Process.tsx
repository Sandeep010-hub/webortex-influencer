
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Process = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      duration: 'Week 1',
      description: 'We analyze your brand, audience, and goals to create a custom strategy.',
      activities: ['Brand Analysis', 'Competitor Research', 'Goal Setting', 'Strategy Planning']
    },
    {
      step: '02',
      title: 'Design & Development',
      duration: 'Week 2-4',
      description: 'Our team creates your custom website with your brand identity in mind.',
      activities: ['UI/UX Design', 'Development', 'Content Integration', 'Testing']
    },
    {
      step: '03',
      title: 'Launch & Testing',
      duration: 'Week 5',
      description: 'We launch your website and ensure everything works perfectly.',
      activities: ['Final Testing', 'Launch Preparation', 'Go Live', 'Initial Monitoring']
    },
    {
      step: '04',
      title: 'Growth & Optimization',
      duration: 'Ongoing',
      description: 'Continuous optimization and support to maximize your results.',
      activities: ['Performance Monitoring', 'Optimization', 'Support', 'Updates']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
              Our Process
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 4-step process that transforms your online presence into a revenue-generating machine.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="glass rounded-2xl p-8 border border-gray-800 hover:border-[#00d4ff]/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-[#00d4ff]">{step.title}</h3>
                      <span className="bg-[#9d4edd] text-white px-3 py-1 rounded-full text-sm">{step.duration}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{step.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {step.activities.map((activity, idx) => (
                        <div key={idx} className="bg-black/40 rounded-lg p-3 text-center">
                          <span className="text-sm text-gray-400">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Process;
