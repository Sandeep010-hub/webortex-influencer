import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    followers: '',
    niche: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
              Get Your Free Demo
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your influence into income? Let's discuss your project and show you how we can help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-white">Tell Us About Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:border-2 hover:bg-black/60 hover:shadow-lg hover:scale-105"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:border-2 hover:bg-black/60 hover:shadow-lg hover:scale-105"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:border-2 hover:bg-black/60 hover:shadow-lg hover:scale-105"
                  />
                </div>
                
                <div>
                  <label htmlFor="followers" className="block text-sm font-medium text-gray-400 mb-2">Follower Count</label>
                  <select
                    id="followers"
                    name="followers"
                    value={formData.followers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:border-2 hover:bg-black/60 hover:shadow-lg hover:scale-105"
                  >
                    <option value="">Select Range</option>
                    <option value="1k-10k">1K - 10K</option>
                    <option value="10k-50k">10K - 50K</option>
                    <option value="50k-100k">50K - 100K</option>
                    <option value="100k-500k">100K - 500K</option>
                    <option value="500k-1m">500K - 1M</option>
                    <option value="1m+">1M+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="niche" className="block text-sm font-medium text-gray-400 mb-2">Your Niche</label>
                  <input
                    type="text"
                    id="niche"
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    placeholder="e.g., Fashion, Tech, Lifestyle, Food..."
                    className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:border-2 hover:bg-black/60 hover:shadow-lg hover:scale-105"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Tell us about your goals</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white focus:border-[#00d4ff] focus:outline-none transition-all duration-200 hover:border-[#00d4ff] hover:border-2 hover:bg-black/60 hover:shadow-lg hover:scale-105"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] hover:from-[#0099cc] hover:to-[#7c3aed] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Get My Free Revenue Analysis
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-[#00d4ff]">📞</span>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-400">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#00d4ff]">📧</span>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">hello@webortex.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#00d4ff]">📍</span>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="text-[#00d4ff] mr-2">✓</span>
                    Free consultation & revenue analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-[#00d4ff] mr-2">✓</span>
                    30-day money-back guarantee
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-[#00d4ff] mr-2">✓</span>
                    Ongoing support & optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-[#00d4ff] mr-2">✓</span>
                    Proven track record with 500+ websites
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
