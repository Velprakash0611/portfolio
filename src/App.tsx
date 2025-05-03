import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <Navbar />
        <main>
          <section id="home" className="scroll-mt-16">
            <Hero />
          </section>
          <section id="about" className="scroll-mt-16">
            <About />
          </section>
          <section id="portfolio" className="scroll-mt-16">
            <Portfolio />
          </section>
          <section id="services" className="scroll-mt-16">
            <Services />
          </section>
          <section id="contact" className="scroll-mt-16">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;