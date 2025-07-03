
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Refund = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
              Refund Policy
            </h1>
            <p className="text-gray-400">Last updated: December 2024</p>
          </div>

          <div className="glass rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">30-Day Money-Back Guarantee</h2>
              <p className="text-gray-300">
                We stand behind our work with a 30-day money-back guarantee. If you're not completely satisfied 
                with your website within 30 days of delivery, we'll refund your payment in full.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Refund Conditions</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Refund requests must be made within 30 days of project delivery</li>
                <li>The website must not have been launched or made live</li>
                <li>Original design files and code must be returned</li>
                <li>Third-party costs (domains, hosting, licenses) are non-refundable</li>
                <li>Custom development work beyond initial scope may not be eligible</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Refund Process</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Step 1: Request</h3>
                  <p className="text-gray-400">
                    Contact our support team with your refund request and reason.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Step 2: Review</h3>
                  <p className="text-gray-400">
                    We'll review your request within 2-3 business days.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Step 3: Processing</h3>
                  <p className="text-gray-400">
                    Approved refunds are processed within 5-7 business days.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Partial Refunds</h2>
              <p className="text-gray-300">
                In some cases, partial refunds may be offered based on the amount of work completed 
                and delivered. This will be evaluated on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Contact Us</h2>
              <p className="text-gray-300">
                For refund requests or questions about our refund policy, please contact us at:
              </p>
              <p className="text-gray-400 mt-2">
                Email: refunds@webortex.com<br />
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

export default Refund;
