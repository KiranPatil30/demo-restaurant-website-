import React from 'react';
import { Crown, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { specialOffers } from '../data/menuData';

export default function Specials({ onSelectDish }) {
  return (
    <section id="specials" className="py-24 bg-charcoal-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-spice-gold/15 border border-spice-gold/35 text-spice-gold text-xs uppercase tracking-[0.2em] font-semibold">
              <Crown className="w-3.5 h-3.5 text-spice-amber" />
              <span>Chef’s Royal Table & Curated Offers</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50">
              Exclusive <span className="text-spice-gold italic font-normal">Feasts & Privileges</span>
            </h2>
          </div>
          <p className="text-cream-400 text-sm max-w-md">
            Designed for celebratory family gatherings, heritage tastings, and unforgettable evenings
            in the heart of Kolhapur.
          </p>
        </div>

        {/* Promotional Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer, idx) => (
            <div
              key={offer.id}
              className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl ${
                idx === 0
                  ? 'bg-gradient-to-b from-charcoal-800 via-charcoal-900 to-charcoal-950 border-2 border-spice-gold/50'
                  : 'ornate-card hover:border-spice-gold/40'
              }`}
            >
              <div>
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-charcoal-950/90 text-spice-gold border border-spice-gold/40">
                      <Sparkles className="w-3 h-3 text-spice-orange" />
                      {offer.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-spice-orange text-white shadow-md">
                      {offer.savings}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between">
                    <span className="text-xs text-cream-200 font-medium bg-charcoal-950/80 px-2.5 py-1 rounded-md">
                      {offer.subtitle}
                    </span>
                  </div>
                </div>

                {/* Offer Content */}
                <div className="p-7 space-y-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-2xl font-bold text-cream-50 leading-snug">
                      {offer.title}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-3">
                    {offer.offerPrice > 0 ? (
                      <>
                        <span className="font-serif text-3xl font-bold text-spice-gold">
                          ₹{offer.offerPrice}
                        </span>
                        <span className="text-sm text-cream-400 line-through">
                          ₹{offer.originalPrice}
                        </span>
                      </>
                    ) : (
                      <span className="font-serif text-2xl font-bold text-spice-amber">
                        Complimentary on 4+ Guest Booking
                      </span>
                    )}
                  </div>

                  <p className="text-cream-200/80 text-sm leading-relaxed">
                    {offer.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-spice-gold/15">
                    {offer.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-cream-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-spice-orange shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-7 pb-7 pt-2">
                <a
                  href="#reservation"
                  onClick={() => onSelectDish && onSelectDish(offer.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    idx === 0
                      ? 'bg-gradient-to-r from-spice-orange to-spice-crimson text-white shadow-glow hover:scale-[1.01]'
                      : 'bg-charcoal-800 hover:bg-spice-gold hover:text-charcoal-950 text-spice-gold border border-spice-gold/35'
                  }`}
                >
                  <span>Claim Offer & Reserve Table</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
