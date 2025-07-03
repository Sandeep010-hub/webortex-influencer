
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart3, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#5C4D9B] to-[#00d4ff] bg-clip-text text-transparent">
              About Influfluence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing influencer marketing with advanced analytics and data-driven insights.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Influfluence, we believe that successful influencer marketing campaigns are built on data, not guesswork. 
              Our platform empowers brands and agencies to make informed decisions through comprehensive analytics and 
              real-time insights.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded by the team at WEBORTEX, we combine years of digital marketing expertise with cutting-edge 
              technology to deliver results that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass rounded-xl p-6 text-center hover:border-[#5C4D9B]/50 transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-[#5C4D9B] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Advanced Analytics</h3>
              <p className="text-gray-400">Deep insights into campaign performance and audience behavior</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center hover:border-[#00d4ff]/50 transition-all duration-300">
              <Users className="w-12 h-12 text-[#00d4ff] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Audience Intelligence</h3>
              <p className="text-gray-400">Understand demographics and engagement patterns</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center hover:border-[#5C4D9B]/50 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-[#5C4D9B] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">ROI Optimization</h3>
              <p className="text-gray-400">Maximize return on investment with data-driven strategies</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Influfluence?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#5C4D9B] rounded-full mt-2"></div>
                <p className="text-gray-300">Real-time analytics and performance tracking</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2"></div>
                <p className="text-gray-300">AI-powered influencer discovery and matching</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#5C4D9B] rounded-full mt-2"></div>
                <p className="text-gray-300">Comprehensive audience demographic analysis</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2"></div>
                <p className="text-gray-300">Campaign ROI optimization tools</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
