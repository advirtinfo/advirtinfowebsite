import React from 'react';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import About from '../components/sections/About';
import ServicesPreview from '../components/sections/ServicesPreview';
import Testimonials from '../components/sections/Testimonials';
import Clients from '../components/sections/Clients';
import CaseStudies from '../components/sections/CaseStudies';
import TechPartners from '../components/sections/TechPartners';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <About />
      <ServicesPreview />
      <Testimonials />
      <Clients />
      <CaseStudies />
      <TechPartners />
      <ContactCTA />
    </main>
  );
}
