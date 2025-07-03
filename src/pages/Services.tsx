import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Website Design & Development',
      description: 'Custom-designed websites that reflect your brand and convert visitors into customers.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Mobile-First Approach']
    },
    {
      title: 'Payment Integration',
      description: 'Seamless payment systems to monetize your services and products directly.',
      features: ['Multiple Payment Gateways', 'Subscription Management', 'Invoicing System', 'Revenue Analytics']
    },
    {
      title: 'Content Management',
      description: 'Easy-to-use systems for managing your portfolio, blog, and media content.',
      features: ['User-Friendly CMS', 'Media Library', 'Blog Management', 'SEO Tools']
    },
    {
      title: 'Analytics & Optimization',
      description: 'Track performance and optimize your website for better conversions.',
      features: ['Traffic Analytics', 'Conversion Tracking', 'A/B Testing', 'Performance Reports']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to transform your online presence into a revenue-generating business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass rounded-2xl p-8 border border-gray-800 hover:border-[#00d4ff]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#00d4ff]">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="text-[#00d4ff] mr-2"><Check size={20} /></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
