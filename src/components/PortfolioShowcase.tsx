
import React, { useState } from 'react';

const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = ['All', 'Fashion', 'Tech', 'Lifestyle', 'Food', 'Travel', 'Fitness'];

  const portfolioItems = [
    {
      id: 1,
      title: 'FashionForward Studio',
      category: 'Fashion',
      influencer: 'Priya Sharma',
      followers: '750K',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop',
      description: 'Elegant fashion portfolio with integrated booking system',
      features: ['Payment Gateway', 'Booking System', 'Gallery Showcase'],
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'TechReview Pro',
      category: 'Tech',
      influencer: 'Arjun Patel',
      followers: '1.2M',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      description: 'Professional tech review platform with affiliate integration',
      features: ['Affiliate Links', 'Review System', 'Product Database'],
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'LifestyleLuxe',
      category: 'Lifestyle',
      influencer: 'Meera Singh',
      followers: '500K',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
      description: 'Luxury lifestyle brand with premium aesthetic',
      features: ['Brand Showcase', 'Event Calendar', 'Newsletter Signup'],
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'FoodieFusion',
      category: 'Food',
      influencer: 'Ravi Kumar',
      followers: '300K',
      image: 'https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?w=400&h=300&fit=crop',
      description: 'Food blog with recipe sharing and cooking classes',
      features: ['Recipe Database', 'Cooking Classes', 'Restaurant Reviews'],
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'WanderlustWings',
      category: 'Travel',
      influencer: 'Ananya Das',
      followers: '900K',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      description: 'Travel photography portfolio with tour booking',
      features: ['Photo Gallery', 'Tour Booking', 'Travel Blog'],
      liveUrl: '#'
    },
    {
      id: 6,
      title: 'FitnessFlex',
      category: 'Fitness',
      influencer: 'Rohit Sharma',
      followers: '600K',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      description: 'Personal training platform with workout programs',
      features: ['Workout Plans', 'Nutrition Guides', 'Progress Tracking'],
      liveUrl: '#'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse portfolio of influencer websites across different niches and industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] text-white'
                  : 'bg-black/40 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#9d4edd]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-[#00d4ff]/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
                    hoveredItem === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2 mb-3">
                        {item.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-[#00d4ff] text-white px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                        View Live Site
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{item.influencer}</span>
                    <span className="mx-2">•</span>
                    <span>{item.followers} followers</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#9d4edd]/10 backdrop-blur-sm border border-[#00d4ff]/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Like What You See?</h3>
            <p className="text-gray-300 mb-6">
              These are just a few examples of our work. Each website is custom-designed to match the influencer's brand and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] hover:from-[#0099cc] hover:to-[#7c3aed] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Start Your Project
              </button>
              <button className="border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
