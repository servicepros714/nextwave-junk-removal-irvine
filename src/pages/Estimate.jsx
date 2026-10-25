import { useEffect } from 'react';
import EstimateWizard from '../components/EstimateWizard.jsx';
import business from '../data/business.js';

export default function Estimate() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = `Free Junk Removal Estimate | ${business.name}`;
    return () => {
      document.title = prev;
    };
  }, []);

  return <EstimateWizard />;
}
