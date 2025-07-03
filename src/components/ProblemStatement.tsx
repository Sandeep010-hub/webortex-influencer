import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingDown, Users, Clock, AlertTriangle } from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Lost Revenue',
      description: 'Missing out on monetization opportunities every day'
    },
    {
      icon: Users,
      title: 'Scattered Presence',
      description: 'Your audience is spread across multiple platforms'
    },
    {
      icon: Clock,
      title: 'Time Wasted',
      description: 'Hours spent managing different social media accounts'
    },
    {
      icon: AlertTriangle,
      title: 'No Central Hub',
      description: 'Lack of professional website to showcase your work'
    }
  ];

  const solutions = [
    {
      title: 'Centralized Revenue Hub',
      description: 'All your income streams in one professional platform'
    },
    {
      title: 'Professional Portfolio',
      description: 'Showcase your work and attract premium clients'
    },
    {
      title: 'Automated Systems',
      description: 'Streamlined processes that work 24/7 for you'
    },
    {
      title: 'Brand Authority',
      description: 'Establish credibility and command higher rates'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff8c00] to-[#ffd700] bg-clip-text text-transparent">
            Are You Losing Money Every Day?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Most influencers leave significant revenue on the table due to these common challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Problems */}
          <div>
            <h3 className="text-3xl font-bold text-[#ff8c00] mb-8 text-center">The Problems You Face</h3>
            <div className="space-y-6">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <div key={index} className="glass rounded-xl p-6 card-hover">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-[#ffb347] to-[#ffe082] p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2">{problem.title}</h4>
                        <p className="text-gray-400">{problem.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-3xl font-bold text-[#00d4ff] mb-8 text-center">Our Solutions</h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="glass rounded-xl p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] p-3 w-12 h-12 flex items-center justify-center rounded-lg">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2">{solution.title}</h4>
                      <p className="text-gray-400">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
