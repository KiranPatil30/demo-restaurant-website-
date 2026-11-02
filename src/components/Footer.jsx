import React from 'react';
import { Flame, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import emblem from '../assets/kolhapuriEmblem.svg';
import { restaurantInfo } from '../data/menuData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-spice-gold/25 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-spice-gold/15">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-charcoal-800 border border-spice-gold/40 flex items-center justify-center">
                <img
                  src={emblem}
                  alt="Kolhapur Spice House Emblem"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-cream-50">
                  {restaurantInfo.name}
                </span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-spice-gold">
                  Kolhapur • Maharashtra
                </span>
              </div>
            </a>

            <p className="text-sm text-cream-400 leading-relaxed">
              Celebrating the bold culinary heritage of Kolhapur with stone-pounded Lavangi spices,
              slow-simmered Tambda & Pandhra Rassa, and royal Wada hospitality.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { label: 'Instagram', href: '#home', text: 'IG' },
                { label: 'Facebook', href: '#home', text: 'FB' },
                { label: 'YouTube Culinary Channel', href: '#home', text: 'YT' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-charcoal-900 border border-spice-gold/30 hover:border-spice-orange hover:bg-spice-orange text-spice-gold hover:text-white flex items-center justify-center text-xs font-bold transition-all duration-300"
                >
                  {social.text}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-lg font-bold text-spice-gold uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Our Story', href: '#about' },
                { label: 'Royal Menu', href: '#menu' },
                { label: 'Chef Specials', href: '#specials' },
                { label: 'Photo Gallery', href: '#gallery' },
                { label: 'Book a Table', href: '#reservation' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream-400 hover:text-spice-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Signature Dishes */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-bold text-spice-gold uppercase tracking-wider">
              Signature Dishes
            </h3>
            <ul className="space-y-2 text-sm text-cream-400">
              <li className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-spice-orange" />
                <span>Shahi Kolhapuri Mutton Thali</span>
              </li>
              <li className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-spice-orange" />
                <span>Authentic Tambda & Pandhra Rassa</span>
              </li>
              <li className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-spice-orange" />
                <span>Gavran Kolhapuri Chicken Sukka</span>
              </li>
              <li className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-spice-orange" />
                <span>Khasbag Tarri Misal Pav</span>
              </li>
              <li className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-spice-orange" />
                <span>Chulha Jowar Bhakri & Solkadhi</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-bold text-spice-gold uppercase tracking-wider">
              Contact (Demo)
            </h3>
            <div className="space-y-2.5 text-xs text-cream-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-spice-orange shrink-0 mt-0.5" />
                <span>{restaurantInfo.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-spice-orange shrink-0" />
                <span>{restaurantInfo.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-spice-orange shrink-0" />
                <span>{restaurantInfo.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Portfolio Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>
            © {currentYear} {restaurantInfo.name}. Fictional Portfolio Showcase Concept crafted for
            Kolhapur Hospitality Clients.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-spice-gold border border-spice-gold/30 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
