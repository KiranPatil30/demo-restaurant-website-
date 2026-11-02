import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Users,
  User,
  Phone,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

const timeSlots = [
  '12:30 PM (Lunch)',
  '01:30 PM (Lunch)',
  '02:30 PM (Lunch)',
  '07:30 PM (Dinner)',
  '08:30 PM (Dinner)',
  '09:30 PM (Dinner)',
];

const guestOptions = [
  '2 Guests (Intimate Table)',
  '4 Guests (Family Booth)',
  '6 Guests (Royal Pangat Table)',
  '8+ Guests (Private Wada Dining)',
];

export default function Reservation({ preselectedDish }) {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: todayStr,
    time: timeSlots[3],
    guests: guestOptions[1],
    specialRequest: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedReservation, setSubmittedReservation] = useState(null);

  useEffect(() => {
    if (preselectedDish) {
      setFormData((prev) => ({
        ...prev,
        specialRequest: `Interested in: ${preselectedDish}`,
      }));
    }
  }, [preselectedDish]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    const cleanedPhone = formData.phone.replace(/[\s\-+]/g, '');
    if (!cleanedPhone || !/^\d{10,12}$/.test(cleanedPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.date) {
      newErrors.date = 'Please select a reservation date.';
    }
    if (!formData.time) {
      newErrors.time = 'Please choose a dining time slot.';
    }
    if (!formData.guests) {
      newErrors.guests = 'Please select the number of guests.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const demoCode = `KSH-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedReservation({
      ...formData,
      referenceId: demoCode,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
  };

  const handleReset = () => {
    setSubmittedReservation(null);
    setFormData({
      name: '',
      phone: '',
      date: todayStr,
      time: timeSlots[3],
      guests: guestOptions[1],
      specialRequest: '',
    });
    setErrors({});
  };

  return (
    <section id="reservation" className="py-24 bg-charcoal-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Dining Experience Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900 border border-spice-gold/30 text-spice-gold text-xs uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-spice-orange" />
              <span>Table Reservation</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 leading-tight">
              Reserve Your <span className="text-spice-gold italic font-normal">Royal Pangat Table</span>
            </h2>

            <p className="text-cream-200/80 text-base leading-relaxed">
              Whether you are planning an intimate candlelit dinner, a traditional Sunday Mutton
              Thali feast with family, or hosting out-of-town guests, reserve your table in advance
              for priority brass-thali service.
            </p>

            <div className="rounded-2xl overflow-hidden border border-spice-gold/30 shadow-xl">
              <img
                src="/images/dining-ambiance.png"
                alt="Kolhapur Spice House candlelit dining hall"
                loading="lazy"
                className="w-full h-56 object-cover"
              />
              <div className="p-5 bg-charcoal-900 space-y-2">
                <h3 className="font-serif text-xl font-bold text-spice-gold">
                  Private Wada Dining & Group Feasts
                </h3>
                <p className="text-xs text-cream-400 leading-relaxed">
                  For celebrations of 10+ guests, we offer custom-curated brass thali menus with live
                  bhakri craftsmanship and dedicated servers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Reservation Form / Simulated Confirmation */}
          <div className="lg:col-span-7">
            <div className="ornate-card rounded-3xl p-8 sm:p-10 shadow-2xl border border-spice-gold/30">
              {!submittedReservation ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-spice-gold/15">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                        Book a Table
                      </h3>
                      <p className="text-xs text-cream-400">
                        Interactive Portfolio Demo • Simulated Frontend Confirmation
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-spice-orange/15 text-spice-amber border border-spice-orange/30 self-start sm:self-center">
                      Instant Demo Preview
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Guest Name */}
                    <div>
                      <label
                        htmlFor="res-name"
                        className="block text-xs uppercase tracking-wider text-cream-200 font-semibold mb-2"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-spice-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="res-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g., Siddharth Chavan"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border border-spice-gold/25 text-cream-50 placeholder-cream-400/50 text-sm focus:outline-none focus:border-spice-orange"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="res-phone"
                        className="block text-xs uppercase tracking-wider text-cream-200 font-semibold mb-2"
                      >
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-spice-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="res-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g., 9876543210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border border-spice-gold/25 text-cream-50 placeholder-cream-400/50 text-sm focus:outline-none focus:border-spice-orange"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Date */}
                    <div>
                      <label
                        htmlFor="res-date"
                        className="block text-xs uppercase tracking-wider text-cream-200 font-semibold mb-2"
                      >
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-spice-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="res-date"
                          name="date"
                          type="date"
                          min={todayStr}
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border border-spice-gold/25 text-cream-50 text-sm focus:outline-none focus:border-spice-orange"
                        />
                      </div>
                      {errors.date && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.date}</span>
                        </p>
                      )}
                    </div>

                    {/* Time */}
                    <div>
                      <label
                        htmlFor="res-time"
                        className="block text-xs uppercase tracking-wider text-cream-200 font-semibold mb-2"
                      >
                        Dining Time Slot *
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-spice-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          id="res-time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border border-spice-gold/25 text-cream-50 text-sm focus:outline-none focus:border-spice-orange"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot} className="bg-charcoal-900">
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Number of Guests */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="res-guests"
                        className="block text-xs uppercase tracking-wider text-cream-200 font-semibold mb-2"
                      >
                        Number of Guests *
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-spice-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          id="res-guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border border-spice-gold/25 text-cream-50 text-sm focus:outline-none focus:border-spice-orange"
                        >
                          {guestOptions.map((option) => (
                            <option key={option} value={option} className="bg-charcoal-900">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Special Request / Preselected Dish */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="res-request"
                        className="block text-xs uppercase tracking-wider text-cream-200 font-semibold mb-2"
                      >
                        Dish Preference or Spice Level Note (Optional)
                      </label>
                      <input
                        id="res-request"
                        name="specialRequest"
                        type="text"
                        value={formData.specialRequest}
                        onChange={handleChange}
                        placeholder="e.g., Shahi Mutton Thali, Mild Spice Preference, Birthday Table"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-spice-gold/25 text-cream-50 placeholder-cream-400/50 text-sm focus:outline-none focus:border-spice-orange"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-spice-orange to-spice-crimson text-white font-semibold text-base tracking-wide shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 border border-spice-gold/30"
                  >
                    Simulate Table Reservation (Demo)
                  </button>
                </form>
              ) : (
                /* Simulated Demo Confirmation State */
                <div className="space-y-6 py-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-spice-gold/20 border border-spice-gold/40 text-spice-gold text-xs font-bold uppercase tracking-widest">
                      Demo Booking Preview • Ref #{submittedReservation.referenceId}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-cream-50">
                      Simulated Reservation Preview!
                    </h3>
                    <p className="text-cream-200/85 text-sm max-w-lg mx-auto">
                      Thank you, <strong className="text-spice-gold">{submittedReservation.name}</strong>.
                      This is a <strong className="text-cream-50">frontend portfolio simulation</strong>—no
                      actual restaurant booking or database entry was transmitted.
                    </p>
                  </div>

                  {/* Summary Ticket */}
                  <div className="p-6 rounded-2xl bg-charcoal-950 border border-spice-gold/30 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-xs text-cream-400 block">Guest Name</span>
                      <span className="font-semibold text-cream-50">{submittedReservation.name}</span>
                    </div>
                    <div>
                      <span className="text-xs text-cream-400 block">Phone Contact</span>
                      <span className="font-semibold text-cream-50">{submittedReservation.phone}</span>
                    </div>
                    <div>
                      <span className="text-xs text-cream-400 block">Date & Time</span>
                      <span className="font-semibold text-spice-amber">
                        {submittedReservation.date} • {submittedReservation.time}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-cream-400 block">Table Size</span>
                      <span className="font-semibold text-cream-50">{submittedReservation.guests}</span>
                    </div>
                    {submittedReservation.specialRequest && (
                      <div className="sm:col-span-2 pt-2 border-t border-spice-gold/15">
                        <span className="text-xs text-cream-400 block">Special Note</span>
                        <span className="font-medium text-spice-gold">
                          {submittedReservation.specialRequest}
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-spice-gold border border-spice-gold/35 text-sm font-semibold transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Make Another Demo Booking</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
