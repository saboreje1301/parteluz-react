// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import PortfolioGrid from './components/portfolio/PortfolioGrid';
import AboutSection from './components/about/AboutSection';
import ContactForm from './components/contact/ContactForm';
import BlogGrid from './components/blog/BlogGrid';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <div className="container mx-auto px-4">
                  <section className="py-12">
                    <PortfolioGrid featured={false} preview={true} limit={3} />
                  </section>
                  <section className="py-12">
                    <AboutSection preview={true} />
                  </section>
                  <section className="py-12">
                    <BlogGrid preview={true} />
                  </section>
                </div>
              </>
            } />
            <Route path="/portfolio" element={<PortfolioGrid />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/blog" element={<BlogGrid />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;