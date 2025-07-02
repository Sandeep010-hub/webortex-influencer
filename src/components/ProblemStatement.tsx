
import React from 'react';

const ProblemStatement = () => {
  const problems = [
    { title: 'Lost Opportunities in DMs', description: 'Missing potential collaborations and revenue streams' },
    { title: 'Unprofessional Image', description: 'Scattered online presence hurts credibility' },
    { title: 'No Direct Payment System', description: 'Complicated payment processes lose customers' },
    { title: 'Scattered Online Presence', description: 'Followers can\'t find all your content easily' }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20 blur-3xl opacity-30"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-red-400">
              Are You Losing Money Every Day?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every day without a professional website costs you potential revenue, collaborations, and growth opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-red-300">{problem.title}</h3>
                  <p className="text-gray-400">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Before/After Visual */}
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 mb-4">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Without Webortex</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>❌ Missed collaborations</li>
                  <li>❌ Unprofessional appearance</li>
                  <li>❌ Lost revenue opportunities</li>
                  <li>❌ Scattered online presence</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00d4ff]/20 to-[#9d4edd]/20 border border-[#00d4ff]/30 rounded-2xl p-8 mb-4">
                <h3 className="text-2xl font-bold text-[#00d4ff] mb-4">With Webortex</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ Professional portfolio</li>
                  <li>✅ Direct payment integration</li>
                  <li>✅ Increased revenue streams</li>
                  <li>✅ Unified brand presence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
