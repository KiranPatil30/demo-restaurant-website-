import React from 'react';
import { Star, Quote, Info } from 'lucide-react';
import { sampleTestimonials } from '../data/menuData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-950 border border-spice-gold/30 text-spice-gold text-xs uppercase tracking-[0.2em] font-semibold">
            <Star className="w-3.5 h-3.5 text-spice-amber fill-spice-amber" />
            <span>Guest Impressions (Sample Portfolio Reviews)</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50">
            Praised by <span className="text-spice-gold italic font-normal">Connoisseurs of Spice</span>
          </h2>

          <p className="text-cream-400 text-sm sm:text-base">
            Below are clearly identified fictional sample testimonials illustrating how guest
            reviews and social proof are showcased on this restaurant portfolio concept.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleTestimonials.map((item) => (
            <article
              key={item.id}
              className="ornate-card rounded-3xl p-8 flex flex-col justify-between relative group hover:border-spice-gold/45 transition-all duration-300 shadow-xl"
            >
              <Quote className="w-10 h-10 text-spice-gold/20 absolute top-6 right-6" />

              <div className="space-y-5">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-spice-amber fill-spice-amber"
                    />
                  ))}
                  <span className="ml-2 text-xs text-spice-gold font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-cream-100/90 text-sm sm:text-base leading-relaxed italic font-serif text-lg">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-spice-gold/15 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-cream-50">
                    {item.name}
                  </h3>
                  <p className="text-cream-400 text-xs">{item.role}</p>
                  <span className="inline-block mt-2 text-[11px] px-2.5 py-0.5 rounded-full bg-spice-orange/15 text-spice-amber border border-spice-orange/30">
                    Ordered: {item.dishOrdered}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Transparent Demo Notice */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-cream-400/80">
          <Info className="w-4 h-4 text-spice-gold shrink-0" />
          <span>
            Note: Testimonials above are fictional sample reviews created for this freelance
            restaurant portfolio demonstration.
          </span>
        </div>
      </div>
    </section>
  );
}
