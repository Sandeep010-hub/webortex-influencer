import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    followers: '',
    niche: '',
    package: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactOptions = [
    {
      title: 'WhatsApp Chat',
      description: 'Get instant responses to your queries',
      icon: '💬',
      action: 'Chat Now',
      color: 'from-green-500 to-green-600',
      href: 'https://wa.me/917672024001',
      target: '_blank'
    },
    {
      title: 'Email Support',
      description: 'Detailed inquiries and project discussions',
      icon: '📧',
      action: 'Send Email',
      color: 'from-blue-500 to-blue-600',
      href: 'mailto:webortex@gmail.com',
      target: '_self'
    },
    {
      title: 'Phone Consultation',
      description: 'Direct conversation with our experts',
      icon: '📞',
      action: 'Call Now',
      color: 'from-purple-500 to-purple-600',
      href: 'tel:+917672024001',
      target: '_self'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
            Get Your Free Demo Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your influence into income? Let's discuss your project and show you exactly how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Request Your Free Demo</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:bg-black/60"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:bg-black/60"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:bg-black/60"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Follower Count</label>
                  <select
                    name="followers"
                    value={formData.followers}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:bg-black/60"
                  >
                    <option value="">Select range</option>
                    <option value="10k-50k">10K - 50K</option>
                    <option value="50k-100k">50K - 100K</option>
                    <option value="100k-500k">100K - 500K</option>
                    <option value="500k-1m">500K - 1M</option>
                    <option value="1m+">1M+</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Your Niche</label>
                  <select
                    name="niche"
                    value={formData.niche}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:bg-black/60"
                  >
                    <option value="">Select niche</option>
                    <option value="fashion">Fashion & Beauty</option>
                    <option value="tech">Technology</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="food">Food & Cooking</option>
                    <option value="travel">Travel</option>
                    <option value="fitness">Fitness & Health</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Interested Package</label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:bg-black/60"
                  >
                    <option value="">Select package</option>
                    <option value="foundation">Foundation Package</option>
                    <option value="growth">Growth Package</option>
                    <option value="enterprise">Enterprise Package</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:bg-black/60"
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] hover:from-[#0099cc] hover:to-[#7c3aed] text-white font-semibold py-2 text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00d4ff]/30"
              >
                Get My Free Demo 🚀
              </Button>
              {/* Dummy div for height balancing on desktop */}
              <div className="hidden lg:block" style={{ height: '120px' }} aria-hidden="true"></div>
            </form>
          </div>

          {/* Contact Options */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Multiple Ways to Connect</h3>
              <div className="grid gap-4">
                {contactOptions.map((option, index) => (
                  <div key={index} className="group relative">
                    <div className="relative bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-[#00d4ff] hover:shadow-[0_0_12px_#00d4ff55]">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{option.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">{option.title}</h4>
                          <p className="text-gray-400 text-sm">{option.description}</p>
                        </div>
                        <a
                          href={option.href}
                          target={option.target}
                          rel={option.target === '_blank' ? 'noopener noreferrer' : undefined}
                          className={`bg-gradient-to-r ${option.color} text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                        >
                          {option.action}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Contact Info Card */}
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex flex-col gap-2">
              <h4 className="text-lg font-bold text-white mb-2">Our Location & Contact</h4>
              <div className="w-full h-48 rounded-lg overflow-hidden mb-3">
                <iframe
                  src="https://www.google.com/maps?q=Andhra+Pradesh,+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Webortex Location"
                ></iframe>
              </div>
              <div className="text-gray-300 text-base">
                <div><span className="font-semibold">Location:</span> AP, India</div>
                <div><span className="font-semibold">Phone:</span> +91 8688221981 / 9502414128</div>
                <div><span className="font-semibold">Email:</span> webortex@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
