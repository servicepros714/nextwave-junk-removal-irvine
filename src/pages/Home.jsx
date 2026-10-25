import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Pricing from '../components/Pricing.jsx';
import BeforeAfter from '../components/BeforeAfter.jsx';
import Reviews from '../components/Reviews.jsx';
import About from '../components/About.jsx';
import ServiceArea from '../components/ServiceArea.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const el = document.getElementById(hash.slice(1));
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <BeforeAfter />
      <Reviews />
      <About />
      <ServiceArea />
      <Faq />
      <CtaBand />
    </>
  );
}
