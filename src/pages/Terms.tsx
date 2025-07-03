
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-gray-400">Last updated: December 2024</p>
          </div>

          <div className="glass rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing and using Webortex services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Services Description</h2>
              <p className="text-gray-300 mb-4">
                Webortex provides professional website design and development services specifically 
                for influencers and content creators.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Custom website design and development</li>
                <li>Payment integration services</li>
                <li>Content management systems</li>
                <li>Analytics and optimization tools</li>
                <li>Ongoing support and maintenance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Payment Terms</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Payment terms vary by service package</li>
                <li>Refunds are subject to our refund policy</li>
                <li>All fees are non-transferable</li>
                <li>Price changes will be communicated in advance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Limitation of Liability</h2>
              <p className="text-gray-300">
                Webortex shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Contact Information</h2>
              <p className="text-gray-300">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-400 mt-2">
                Email: legal@webortex.com<br />
                Phone: +91 98765 43210
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
