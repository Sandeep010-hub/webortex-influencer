
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] to-[#9d4edd] bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-gray-400">Last updated: December 2024</p>
          </div>

          <div className="glass rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">What Are Cookies</h2>
              <p className="text-gray-300">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-400">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p className="text-gray-400">
                    Help us understand how visitors interact with our website by collecting anonymous information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Cookies</h3>
                  <p className="text-gray-400">
                    Allow us to improve website performance by understanding which pages are most popular.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Managing Cookies</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies in your browser settings. Please note that removing or blocking 
                cookies may impact your user experience and some functionality may not work as intended.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Chrome: Settings {'->'} Privacy and Security {'->'} Cookies</li>
                <li>Firefox: Options {'->'} Privacy & Security {'->'} Cookies</li>
                <li>Safari: Preferences {'->'} Privacy {'->'} Cookies</li>
                <li>Edge: Settings {'->'} Privacy, Search, and Services {'->'} Cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <p className="text-gray-400 mt-2">
                Email: privacy@webortex.com<br />
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

export default Cookies;
