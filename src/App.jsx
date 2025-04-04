import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Features, Reviews, NavBar, Pricing, Footer, Contacts, About, ExploreFeature } from './components';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <section id='home'><Home /></section>
            <section id='features'><Features /></section>
            <section id='pricing'><Pricing /></section>
            <section id='reviews'><Reviews /></section>
            <section id='about'><About /></section>
            <section id='contacts'><Contacts /></section>
          </>
        } />
        <Route path="/coming-soon" element={<ExploreFeature />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;