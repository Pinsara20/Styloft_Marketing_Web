import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Features, Reviews, NavBar, Pricing, Footer, Contacts } from './components';

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <Features />
      <Reviews />
      <Pricing />
      <Contacts />
      <Footer />
    </Router>
  );
}

export default App;