import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Specials from './components/Specials';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [preselectedDish, setPreselectedDish] = useState('');

  return (
    <div className="min-h-screen bg-charcoal-950 text-cream-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu onSelectDish={setPreselectedDish} />
        <Specials onSelectDish={setPreselectedDish} />
        <Gallery />
        <Testimonials />
        <Reservation preselectedDish={preselectedDish} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
