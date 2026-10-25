import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import MinimalHeader from './components/MinimalHeader.jsx';
import Footer from './components/Footer.jsx';
import MobileCallBar from './components/MobileCallBar.jsx';
import JsonLd from './components/JsonLd.jsx';
import Home from './pages/Home.jsx';
import Estimate from './pages/Estimate.jsx';

export default function App() {
  const { pathname } = useLocation();
  const isEstimate = pathname === '/get-estimate';

  useEffect(() => {
    document.body.classList.toggle('noCallBar', isEstimate);
  }, [isEstimate]);

  return (
    <>
      <JsonLd />
      {isEstimate ? <MinimalHeader /> : <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-estimate" element={<Estimate />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isEstimate && <Footer />}
      {!isEstimate && <MobileCallBar />}
    </>
  );
}
