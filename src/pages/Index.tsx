
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import SolutionOverview from '@/components/SolutionOverview';
import ServicePackages from '@/components/ServicePackages';
import ROICalculator from '@/components/ROICalculator';
import SuccessStories from '@/components/SuccessStories';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessTimeline from '@/components/ProcessTimeline';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import Guarantees from '@/components/Guarantees';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <div id="problem">
        <ProblemStatement />
      </div>
      <div id="solutions">
        <SolutionOverview />
      </div>
      <div id="pricing">
        <ServicePackages />
      </div>
      <ROICalculator />
      <SuccessStories />
      <WhyChooseUs />
      <div id="process">
        <ProcessTimeline />
      </div>
      <div id="portfolio">
        <PortfolioShowcase />
      </div>
      <Guarantees />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
