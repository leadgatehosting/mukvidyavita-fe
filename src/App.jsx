import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import WhyUs from './pages/WhyUs';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Contact from './pages/Contact';
import { initLegacyScripts } from './utils/legacyScripts';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      initLegacyScripts();
    }, 100);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
