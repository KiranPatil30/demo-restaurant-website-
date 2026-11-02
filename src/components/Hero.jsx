import React from 'react';
import { Flame, UtensilsCrossed, CalendarCheck, Award, Sparkles, MapPin } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:py-28 overflow-hidden"
    >
      {/* Background Cinematic Food Image with Multi-Layer Luxury Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-thali.png"
          alt="Royal Kolhapuri Mutton Thali with Tambda and Pandhra Rassa"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/88 to-charcoal-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/75" />
      </div>

      {/* Subtle Ambient Spice Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-spice-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-spice-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            {/* Heritage Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-spice-gold/35 text-spice-gold text-xs uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-spice-orange" />
              <span>{restaurantInfo.established}</span>
            </div>

            {/* Marathi Cultural Subtitle */}
            <p className="text-spice-gold/90 text-sm sm:text-base font-medium tracking-wider">
              {restaurantInfo.marathiSubtitle}
            </p>

            {/* Restaurant Name & Tagline */}
            <div className="space-y-3">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-cream-50 leading-[1.08] tracking-tight">
                Kolhapur{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-spice-gold via-spice-amber to-spice-orange">
                  Spice House
                </span>
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl text-cream-200/95">
                “{restaurantInfo.tagline}”
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-cream-200/80 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Step into the culinary grandeur of royal Kolhapur. From fiery crimson{' '}
              <span className="text-cream-50 font-medium">Tambda Rassa</span> and soothing{' '}
              <span className="text-cream-50 font-medium">Pandhra Rassa</span> to stone-pounded
              Lavangi chilli masalas and hand-patted chulha Jowar Bhakri, every platter celebrates
              generations of authentic Maharashtrian craftsmanship.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-spice-orange to-spice-crimson text-white font-semibold text-sm sm:text-base tracking-wide shadow-glow hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 border border-spice-gold/30"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Explore Menu</span>
              </a>
              <a
                href="#reservation"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-charcoal-900/85 hover:bg-charcoal-800 text-cream-50 hover:text-spice-gold font-semibold text-sm sm:text-base tracking-wide border border-spice-gold/40 transition-all duration-300"
              >
                <CalendarCheck className="w-4 h-4 text-spice-gold" />
                <span>Reserve a Table</span>
              </a>
            </div>

            {/* Trust & Heritage Highlights Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-spice-gold/20 max-w-xl">
              <div className="flex items-start gap-2.5">
                <Flame className="w-5 h-5 text-spice-orange shrink-0 mt-0.5" />
                <div>
                  <p className="text-cream-50 font-semibold text-sm">Khalbhatta Spices</p>
                  <p className="text-cream-400 text-xs">100% Hand-Pounded</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-5 h-5 text-spice-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-cream-50 font-semibold text-sm">Kansya Thali</p>
                  <p className="text-cream-400 text-xs">Royal Brass Service</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-spice-amber shrink-0 mt-0.5" />
                <div>
                  <p className="text-cream-50 font-semibold text-sm">Tarabai Park</p>
                  <p className="text-cream-400 text-xs">Kolhapur, MH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Platter Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ornate Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-spice-gold/35 shadow-2xl bg-charcoal-900/90 group">
                <div className="aspect-[4/4] overflow-hidden">
                  <img
                    src="/images/hero-thali.png"
                    alt="Shahi Kolhapuri Mutton Thali close-up"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-gradient-to-t from-charcoal-950 via-charcoal-900/95 to-charcoal-900/80 border-t border-spice-gold/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-widest text-spice-gold font-semibold">
                      Crown Jewel Experience
                    </span>
                    <span className="px-3 py-1 rounded-full bg-spice-orange/20 border border-spice-orange/40 text-spice-amber text-xs font-bold">
                      ₹680 • Unlimited Rassa
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-cream-50">
                    Shahi Kolhapuri Mutton Thali
                  </h2>
                  <p className="text-cream-400 text-xs sm:text-sm mt-1">
                    Served with Sukka Mutton, Tambda Rassa, Pandhra Rassa, Jowar Bhakri, Indrayani Rice & Kokum Solkadhi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
