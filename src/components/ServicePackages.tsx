
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ServicePackages = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const packages = [
    {
      name: 'Foundation Package',
      type: 'Static',
      price: '₹10,000 - ₹40,000',
      pages: '5 professional pages',
      features: [
        'Custom Design & Branding',
        'Mobile Responsive Layout',
        'Contact Form Integration',
        'Social Media Links',
        'SEO Optimization',
        'Basic Analytics Setup',
        'Content Management',
        'Launch Support'
      ],
      bestFor: 'Emerging influencers (10K-100K)',
      cta: 'Start Your Journey',
      color: 'from-blue-500 to-cyan-500',
      badge: null
    },
    {
      name: 'Growth Package',
      type: 'Dynamic',
      price: '₹25,000 - ₹1,50,000',
      pages: '6-15 interactive pages',
      features: [
        'Everything in Foundation',
        'Payment Gateway Integration',
        'Event Booking System',
        'Client Portal Access',
        'Advanced SEO Features',
        'Email Marketing Integration',
        'Custom Forms & Surveys',
        'Blog/Content Management',
        'Social Media Feeds',
        'Performance Analytics',
        'Live Chat Support',
        'Monthly Maintenance',
        'Content Updates',
        'Security Monitoring',
        'Backup & Recovery'
      ],
      bestFor: 'Established influencers (100K-1M)',
      cta: 'Scale Your Business',
      color: 'from-[#00d4ff] to-[#9d4edd]',
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise Package',
      type: 'Premium',
      price: '₹1,50,000 - ₹5,00,000+',
      pages: '50+ custom pages',
      features: [
        'Everything in Growth',
        'Custom Web Applications',
        'Advanced E-commerce Features',
        'Multi-language Support',
        'Custom API Integrations',
        'Advanced User Management',
        'Workflow Automation',
        'Custom Dashboard',
        'Priority Support',
        'Dedicated Account Manager',
        'Custom Training Sessions',
        'White-label Solutions',
        'Advanced Security Features',
        'Custom Reporting',
        'Unlimited Revisions'
      ],
      bestFor: 'Celebrity influencers (1M+)',
      cta: 'Go Premium',
      color: 'from-[#ffd700] to-[#ff8c00]',
      badge: null
    }
  ];

  const handlePackageSelect = () => {
    navigate('/contact');
  };

  return (
    <section className="py-12 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
            Choose Your Growth Plan
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Tailored packages designed to match your influence level and business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

              <div className={`relative bg-black/80 backdrop-blur-sm border-2 border-gray-800 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:border-[#00d4ff]/50 ${
                hoveredCard === index ? 'transform scale-105 border-[#00d4ff]/50' : ''
              }`}>
                <div className="text-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <span className="text-xs md:text-sm font-medium text-gray-400 bg-gray-800 px-2 md:px-3 py-1 rounded-full">
                    {pkg.type}
                  </span>
                </div>

                <div className="text-center mb-4 md:mb-6">
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}>
                    {pkg.price}
                  </div>
                  <p className="text-sm md:text-base text-gray-400">{pkg.pages}</p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Features:</h4>
                  <ul className="space-y-1 md:space-y-2 max-h-64 overflow-y-auto">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="text-green-400 mr-2 mt-1 text-xs md:text-sm">✓</span>
                        <span className="text-xs md:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 md:mb-6">
                  <p className="text-xs md:text-sm text-gray-400 text-center">
                    <span className="font-semibold">Best For:</span> {pkg.bestFor}
                  </p>
                </div>

                <Button 
                  onClick={handlePackageSelect}
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-2 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-white/20`}
                >
                  {pkg.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#9d4edd]/10 backdrop-blur-sm border-2 border-[#00d4ff]/30 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold mb-3 text-[#00d4ff]">30-Day Money-Back Guarantee</h3>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Not satisfied with your website? Get a full refund within 30 days, no questions asked.
            </p>
            <p className="text-xs md:text-sm text-gray-400">
              All packages include free consultation, design mockups, and post-launch support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
