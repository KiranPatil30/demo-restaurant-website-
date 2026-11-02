import React from 'react';
import { Flame, Sparkles, Clock, Utensils } from 'lucide-react';

export default function MenuCard({ item, onSelectDish }) {
  const isVeg = item.category === 'Veg';

  return (
    <article className="ornate-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 hover:border-spice-gold/45 transition-all duration-300 shadow-xl">
      <div>
        {/* Dish Image Container */}
        <div className="relative h-60 overflow-hidden bg-charcoal-950">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

          {/* Top Left: Indian FSSAI-Style Veg / Non-Veg Indicator & Category */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border ${
                isVeg
                  ? 'bg-emerald-950/85 border-emerald-500/50 text-emerald-300'
                  : 'bg-rose-950/85 border-rose-500/50 text-rose-300'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isVeg ? 'bg-emerald-400' : 'bg-rose-500'
                }`}
              />
              {item.category}
            </span>

            {item.isSpeciality && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-charcoal-950/85 border border-spice-gold/50 text-spice-gold backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-spice-amber" />
                Speciality
              </span>
            )}
          </div>

          {/* Top Right: Badge */}
          {item.badge && (
            <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-spice-orange/90 text-white shadow-md">
              {item.badge}
            </span>
          )}

          {/* Bottom Left & Right Overlay Meta */}
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-xs text-cream-200 bg-charcoal-950/80 px-2.5 py-1 rounded-lg border border-white/10">
              <Flame className="w-3.5 h-3.5 text-spice-orange" />
              {item.spiceLevel}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-cream-200 bg-charcoal-950/80 px-2.5 py-1 rounded-lg border border-white/10">
              <Clock className="w-3.5 h-3.5 text-spice-gold" />
              {item.prepTime}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-spice-gold/80 font-semibold block">
                {item.shortName}
              </span>
              <h3 className="font-serif text-2xl font-bold text-cream-50 group-hover:text-spice-gold transition-colors">
                {item.name}
              </h3>
            </div>
            <div className="text-right shrink-0">
              <span className="font-serif text-2xl font-bold text-spice-amber">
                ₹{item.price}
              </span>
              <span className="block text-[10px] text-cream-400">Excl. GST</span>
            </div>
          </div>

          <p className="text-cream-200/80 text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Traditional Pairings Pills */}
          {item.pairings && item.pairings.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-1.5">
              {item.pairings.map((pairing) => (
                <span
                  key={pairing}
                  className="text-[11px] px-2.5 py-0.5 rounded-md bg-charcoal-800 text-cream-200 border border-spice-gold/15"
                >
                  • {pairing}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="px-6 pb-6 pt-2">
        <a
          href="#reservation"
          onClick={() => onSelectDish && onSelectDish(item.name)}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-charcoal-800 hover:bg-gradient-to-r hover:from-spice-orange hover:to-spice-crimson text-cream-100 hover:text-white text-xs sm:text-sm font-semibold tracking-wide border border-spice-gold/25 hover:border-transparent transition-all duration-300"
        >
          <Utensils className="w-4 h-4 text-spice-gold group-hover:text-white" />
          <span>Reserve Table for This Dish</span>
        </a>
      </div>
    </article>
  );
}
