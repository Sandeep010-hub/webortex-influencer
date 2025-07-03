
import React, { useState, useEffect } from 'react';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Fashion Influencer',
      followers: '750K',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      quote: 'My revenue increased by 300% within 3 months of launching my Webortex portfolio. The payment integration made everything seamless!',
      results: 'Revenue: ₹2L → ₹8L/month'
    },
    {
      name: 'Arjun Patel',
      role: 'Tech Reviewer',
      followers: '1.2M',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'The professional website gave me credibility with brands. I went from struggling freelancer to in-demand tech consultant.',
      results: 'Collaborations: 2 → 15/month'
    },
    {
      name: 'Meera Singh',
      role: 'Lifestyle Blogger',
      followers: '500K',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'Webortex transformed my scattered online presence into a professional business hub. My booking rate doubled overnight!',
      results: 'Bookings: 5 → 12/week'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real influencers sharing their transformation stories and results with Webortex.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <blockquote className="text-lg text-gray-300 mb-4">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-white">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].followers} followers
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#00d4ff] font-semibold">{testimonials[currentTestimonial].results}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#00d4ff]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#9d4edd]/10 backdrop-blur-sm border border-[#00d4ff]/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Join Them?</h3>
            <p className="text-gray-300 mb-6">
              Transform your influence into a thriving digital business with our proven strategies.
            </p>
            <button className="bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] hover:from-[#0099cc] hover:to-[#7c3aed] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Get My Free Revenue Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
