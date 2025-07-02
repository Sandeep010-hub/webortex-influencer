
import React, { useState, useEffect } from 'react';

const SuccessStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    websites: 0,
    revenue: 0,
    clients: 0
  });

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

  const caseStudies = [
    {
      title: 'Fashion Influencer Transformation',
      before: '50K followers, ₹15K/month',
      after: '200K followers, ₹1.2L/month',
      timeframe: '6 months',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=250&fit=crop'
    },
    {
      title: 'Tech Reviewer Success',
      before: '100K followers, irregular income',
      after: '500K followers, ₹3L/month stable',
      timeframe: '8 months',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop'
    },
    {
      title: 'Lifestyle Brand Building',
      before: 'Personal account, no monetization',
      after: 'Professional brand, ₹80K/month',
      timeframe: '4 months',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate counters
  useEffect(() => {
    const animateCounters = () => {
      const targets = { websites: 500, revenue: 50000000, clients: 1200 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          websites: Math.floor(targets.websites * progress),
          revenue: Math.floor(targets.revenue * progress),
          clients: Math.floor(targets.clients * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    animateCounters();
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real influencers, real results. See how Webortex transformed their online presence into profitable businesses.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-gradient-to-br from-[#00d4ff]/20 to-[#9d4edd]/20 backdrop-blur-sm border border-[#00d4ff]/30 rounded-2xl p-8">
            <div className="text-4xl font-bold text-[#00d4ff] mb-2">
              {counters.websites}+
            </div>
            <p className="text-gray-300">Websites Built</p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-[#ffd700]/20 to-[#ff8c00]/20 backdrop-blur-sm border border-[#ffd700]/30 rounded-2xl p-8">
            <div className="text-4xl font-bold text-[#ffd700] mb-2">
              ₹{(counters.revenue / 10000000).toFixed(1)}Cr+
            </div>
            <p className="text-gray-300">Revenue Generated</p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-[#9d4edd]/20 to-[#7c3aed]/20 backdrop-blur-sm border border-[#9d4edd]/30 rounded-2xl p-8">
            <div className="text-4xl font-bold text-[#9d4edd] mb-2">
              {counters.clients}+
            </div>
            <p className="text-gray-300">Happy Clients</p>
          </div>
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

        {/* Case Studies */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Detailed Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#9d4edd]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-[#00d4ff]/50 transition-all duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-3">{study.title}</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-red-400">Before: {study.before}</p>
                      <p className="text-green-400">After: {study.after}</p>
                      <p className="text-[#00d4ff]">Timeline: {study.timeframe}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
