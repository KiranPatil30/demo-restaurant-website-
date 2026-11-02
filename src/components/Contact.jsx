import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Compass } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${restaurantInfo.phoneRaw}?text=${encodeURIComponent(
    'Namaskar Kolhapur Spice House (Portfolio Demo)! I would like to inquire about a table reservation and your Shahi Mutton Thali.'
  )}`;

  return (
    <section id="contact" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-950 border border-spice-gold/30 text-spice-gold text-xs uppercase tracking-[0.2em] font-semibold">
            <Compass className="w-3.5 h-3.5 text-spice-orange" />
            <span>Visit Us in Kolhapur</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50">
            Location, Hours & <span className="text-spice-gold italic font-normal">Direct Connect</span>
          </h2>
          <p className="text-cream-400 text-sm sm:text-base">
            Conveniently situated near Rankala Lake & Tarabai Park in Kolhapur, Maharashtra. All
            contact details below are sample demo placeholders for portfolio presentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            {/* Address Card */}
            <div className="ornate-card p-6 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-spice-gold">
                <div className="w-10 h-10 rounded-xl bg-spice-orange/15 border border-spice-orange/35 flex items-center justify-center text-spice-orange">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-cream-400 block">
                    Sample Restaurant Address
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream-50">
                    Tarabai Park, Kolhapur
                  </h3>
                </div>
              </div>
              <p className="text-cream-200/85 text-sm leading-relaxed pl-13">
                {restaurantInfo.address}
              </p>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="ornate-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-spice-orange/15 border border-spice-orange/35 flex items-center justify-center text-spice-orange">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-cream-400 block">
                    Demo Concierge Line
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream-50">
                    {restaurantInfo.phoneDisplay}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-cream-400">
                Clearly labeled fictional placeholder phone number for this portfolio demo.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (Demo)</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Rankala+Lake+Kolhapur+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-spice-gold border border-spice-gold/30 text-sm font-semibold transition-colors"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="ornate-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-spice-orange/15 border border-spice-orange/35 flex items-center justify-center text-spice-orange">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-cream-400 block">
                    Royal Pangat Timings
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream-50">
                    Opening Hours (Sample)
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm pt-1">
                <div className="flex justify-between py-1.5 border-b border-spice-gold/15">
                  <span className="text-cream-400">Lunch Service</span>
                  <span className="text-cream-50 font-semibold">{restaurantInfo.hours.lunch}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-spice-gold/15">
                  <span className="text-cream-400">Dinner Service</span>
                  <span className="text-cream-50 font-semibold">{restaurantInfo.hours.dinner}</span>
                </div>
                <p className="text-xs text-spice-gold pt-1 italic">
                  {restaurantInfo.hours.note}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Embed of Kolhapur Landmark Area */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[420px] rounded-3xl overflow-hidden border border-spice-gold/30 shadow-2xl bg-charcoal-950 flex flex-col">
              <iframe
                title="Kolhapur Spice House Sample Location Map - Rankala Lake, Kolhapur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30572.63315871665!2d74.1950236!3d16.6957128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000c541b2577%3A0x8f8772e111608960!2sRankala%20Lake%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full flex-1 border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-4 bg-charcoal-950 border-t border-spice-gold/20 flex flex-wrap items-center justify-between gap-2 text-xs text-cream-400">
                <span>
                  📍 Landmark Preview: Rankala Lake & Tarabai Park Vicinity, Kolhapur, Maharashtra
                </span>
                <span className="text-spice-gold font-medium">
                  Valet Parking Available (Demo)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
