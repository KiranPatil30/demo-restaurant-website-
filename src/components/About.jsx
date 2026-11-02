import React from 'react';
import { Flame, ShieldCheck, Sprout, Utensils } from 'lucide-react';

const pillars = [
  {
    icon: Flame,
    title: 'Stone-Pounded Kanda Lasun Masala',
    description:
      'We reject industrial grinders. Our master spice artisans hand-pound sun-dried Kolhapuri Lavangi chillies, roasted dry copra, dagad phool, and heirloom garlic in traditional black stone khalbhattas.',
  },
  {
    icon: Sprout,
    title: 'Local Farm & Sahyadri Sourcing',
    description:
      'From fragrant Indrayani rice cultivated in the Panchganga river basin to cold-pressed groundnut oil, organic jowar millet, and Ratnagiri kokum petals, every ingredient honours Western Maharashtra.',
  },
  {
    icon: Utensils,
    title: 'Slow-Simmered Brass & Iron Cookery',
    description:
      'Our iconic Tambda and Pandhra Rassa broths simmer for over six hours in heavy tin-lined brass lagans, unlocking deep marrow richness and delicate aromatic layers.',
  },
  {
    icon: ShieldCheck,
    title: 'Royal Wada Hospitality',
    description:
      'Inspired by the culinary courts of Chhatrapati Shahu Maharaj’s era, we serve every guest on gleaming kansya (bell-metal brass) thalis with warmth, generosity, and pride.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal-900 relative overflow-hidden">
      {/* Subtle Top & Bottom Ornate Dividers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left Column: Dual Photographic Composition */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7">
                <div className="rounded-2xl overflow-hidden border border-spice-gold/30 shadow-2xl">
                  <img
                    src="/images/about-spices.png"
                    alt="Stone mortar khalbhatta with hand-pounded Kolhapuri Lavangi chillies and spices"
                    className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-spice-gold/30 shadow-xl">
                  <img
                    src="/images/dining-ambiance.png"
                    alt="Luxury Kolhapur Wada inspired dining interior"
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl p-5 bg-charcoal-800/95 border border-spice-gold/30 text-center space-y-1">
                  <span className="block font-serif text-4xl font-bold text-spice-gold">28+</span>
                  <span className="block text-xs uppercase tracking-widest text-cream-200 font-semibold">
                    Years of Royal Culinary Legacy
                  </span>
                  <span className="block text-[11px] text-cream-400">
                    21 Roasted Whole Spices in Every Batch
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Culinary Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-spice-orange/15 border border-spice-orange/35 text-spice-orange text-xs uppercase tracking-[0.2em] font-semibold">
              <span>Our Culinary Heritage</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 leading-tight">
              Where Fiery Tradition Meets{' '}
              <span className="text-spice-gold italic font-normal">Timeless Luxury</span>
            </h2>

            <p className="text-cream-200/85 text-base leading-relaxed">
              True Kolhapuri cuisine is often misunderstood as merely fiery—yet to those raised in
              the shadow of Mahalaxmi Temple and Rankala Lake, its true magic lies in the symphony
              of <span className="text-cream-50 font-medium">roasted dry coconut (khobra)</span>,
              white sesame, poppy seeds, aromatic black stone flower, and sun-ripened Lavangi
              chillies.
            </p>

            <p className="text-cream-200/80 text-base leading-relaxed">
              At <strong className="text-cream-50">Kolhapur Spice House</strong>, our kitchen begins
              its ritual before sunrise. Whole spices are slow-roasted over wood-fired iron tawas
              and pounded by hand, ensuring that every bowl of crimson{' '}
              <em className="text-spice-amber not-italic">Tambda Rassa</em> and ivory{' '}
              <em className="text-spice-gold not-italic">Pandhra Rassa</em> carries the unmistakable
              soul of royal Maratha kitchens.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl ornate-card hover:border-spice-gold/45 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-spice-orange/15 border border-spice-orange/30 flex items-center justify-center text-spice-orange group-hover:bg-spice-orange group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-cream-50">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-cream-400 text-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
