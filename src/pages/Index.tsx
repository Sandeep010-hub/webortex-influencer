
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LiveMetrics from '@/components/LiveMetrics';
import KeyFeatures from '@/components/KeyFeatures';
import PricingCTA from '@/components/PricingCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <LiveMetrics />
      <KeyFeatures />
      <PricingCTA />
      <Footer />
    </div>
  );
};

export default Index;
