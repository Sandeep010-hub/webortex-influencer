
import React from 'react';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import SolutionOverview from '@/components/SolutionOverview';
import ServicePackages from '@/components/ServicePackages';
import ROICalculator from '@/components/ROICalculator';
import SuccessStories from '@/components/SuccessStories';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessTimeline from '@/components/ProcessTimeline';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <ServicePackages />
      <ROICalculator />
      <SuccessStories />
      <WhyChooseUs />
      <ProcessTimeline />
      <PortfolioShowcase />
      <ContactSection />
    </div>
  );
};

export default Index;
