import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, CalendarCheck, PhoneCall } from 'lucide-react';
import emblem from '../assets/kolhapuriEmblem.svg';
import { restaurantInfo } from '../data/menuData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Specials', href: '#specials' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);

      const sections = ['home', 'about', 'menu', 'specials', 'gallery', 'reservation', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md border-b border-spice-gold/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Kolhapur Spice House Home"
          >
            <div className="relative w-11 h-11 flex items-center justify-center rounded-full bg-charcoal-800 border border-spice-gold/40 group-hover:border-spice-orange transition-colors">
              <img
                src={emblem}
                alt="Kolhapur Spice House Royal Crest"
                className="w-9 h-9 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wide text-cream-50 group-hover:text-spice-gold transition-colors">
                Kolhapur Spice House
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-spice-gold/90">
                Royal Heritage Dining
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionKey = link.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wider uppercase transition-colors duration-300 py-1 ${
                    isActive
                      ? 'text-spice-gold'
                      : 'text-cream-200 hover:text-spice-orange'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-spice-orange to-spice-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-spice-orange to-spice-crimson text-white text-sm font-semibold tracking-wide shadow-glow hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-spice-gold/30"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book a Table</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl bg-charcoal-800/90 border border-spice-gold/30 text-cream-100 hover:text-spice-gold focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[520px] opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 rounded-2xl bg-charcoal-900/98 backdrop-blur-xl border border-spice-gold/25 p-6 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-cream-100 hover:bg-charcoal-800 hover:text-spice-gold transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Flame className="w-4 h-4 text-spice-orange/60" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-spice-gold/15 flex flex-col sm:flex-row gap-3">
            <a
              href="#reservation"
              onClick={handleNavClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-spice-orange to-spice-crimson text-white font-semibold text-sm shadow-glow"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book a Table</span>
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-charcoal-800 border border-spice-gold/30 text-spice-gold font-medium text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{restaurantInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
