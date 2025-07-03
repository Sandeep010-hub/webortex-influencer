
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const packages = [
    {
      name: 'Foundation',
      price: '₹10,000 - ₹40,000',
      description: 'Perfect for emerging influencers',
      features: [
        '5 Professional Pages',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        'Contact Forms',
        'Social Media Integration',
        'Gallery/Portfolio Section',
        '3 Months Support',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '₹25,000 - ₹1,50,000',
      description: 'Most popular for established influencers',
      features: [
        '6-15 Interactive Pages',
        'Payment Gateway Integration',
        'Booking System',
        'Advanced SEO',
        'Email Marketing Setup',
        'Performance Analytics',
        '6 Months Support',
        'Content Management System',
        'Custom Features'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹1,50,000 - ₹5,00,000+',
      description: 'For celebrity influencers and brands',
      features: [
        '50+ Custom Pages',
        'Advanced E-commerce',
        'Multi-language Support',
        'Custom Integrations',
        'Dedicated Account Manager',
        '12 Months Premium Support',
        'Priority Development',
        'Advanced Analytics Dashboard',
        'Unlimited Revisions'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
              Choose Your Package
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to match your influence level and business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative glass rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                pkg.popular 
                  ? 'border-[#00d4ff] bg-gradient-to-b from-[#00d4ff]/5 to-transparent' 
                  : 'border-gray-800 hover:border-[#00d4ff]/50'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-[#00d4ff] mb-2">{pkg.price}</p>
                  <p className="text-gray-400">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="text-[#00d4ff] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] text-white hover:shadow-2xl'
                    : 'border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-white'
                }`}>
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
