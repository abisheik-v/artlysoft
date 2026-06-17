import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';


import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import CoursesPage from './pages/CoursesPage';

import { ThemeProvider } from './context/ThemeContext';


function ScrollToTopWrapper({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
        </ScrollToTopWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;