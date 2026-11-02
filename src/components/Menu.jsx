import React, { useState, useMemo } from 'react';
import { UtensilsCrossed, Flame, Sparkles } from 'lucide-react';
import { menuCategories, menuItems } from '../data/menuData';
import MenuCard from './MenuCard';

export default function Menu({ onSelectDish }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems;
    if (activeCategory === 'Specialities') {
      return menuItems.filter((item) => item.isSpeciality);
    }
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const getCategoryCount = (cat) => {
    if (cat === 'All') return menuItems.length;
    if (cat === 'Specialities') return menuItems.filter((i) => i.isSpeciality).length;
    return menuItems.filter((i) => i.category === cat).length;
  };

  return (
    <section id="menu" className="py-24 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900 border border-spice-gold/30 text-spice-gold text-xs uppercase tracking-[0.2em] font-semibold">
            <UtensilsCrossed className="w-3.5 h-3.5 text-spice-orange" />
            <span>Royal Kolhapuri Menu</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50">
            Heirloom Recipes &{' '}
            <span className="text-spice-gold italic font-normal">Signature Platters</span>
          </h2>

          <p className="text-cream-200/80 text-base leading-relaxed">
            Every dish is prepared fresh to order using stone-pounded masalas, cold-pressed oils,
            and traditional brass & iron cookware. Filter by preference below.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Menu category filter"
        >
          {menuCategories.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-spice-orange to-spice-crimson text-white shadow-glow border border-spice-gold/40 scale-105'
                    : 'bg-charcoal-900 text-cream-200 hover:text-spice-gold border border-spice-gold/20 hover:border-spice-gold/40'
                }`}
              >
                {category === 'Specialities' && <Sparkles className="w-4 h-4" />}
                {category === 'Non-Veg' && <Flame className="w-4 h-4 text-rose-400" />}
                <span>{category}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-black/30 text-white'
                      : 'bg-charcoal-800 text-cream-400'
                  }`}
                >
                  {getCategoryCount(category)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} onSelectDish={onSelectDish} />
          ))}
        </div>

        {/* Bottom Culinary Note */}
        <div className="mt-14 p-6 rounded-2xl bg-charcoal-900/90 border border-spice-gold/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-spice-orange/15 border border-spice-orange/30 flex items-center justify-center text-spice-orange shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-cream-50">
                Custom Spice Calibration Available
              </h3>
              <p className="text-cream-400 text-xs sm:text-sm">
                While our signature recipes honour authentic Kolhapuri heat, our chefs gladly tailor
                spice levels from mild palace-style to traditional Lavangi fire upon request.
              </p>
            </div>
          </div>
          <a
            href="#reservation"
            className="shrink-0 px-6 py-3 rounded-full bg-spice-gold/15 hover:bg-spice-gold/25 text-spice-gold border border-spice-gold/40 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors"
          >
            Book a Tasting Table
          </a>
        </div>
      </div>
    </section>
  );
}
