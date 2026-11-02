import React, { useState, useEffect } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/menuData';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const currentImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900 border border-spice-gold/30 text-spice-gold text-xs uppercase tracking-[0.2em] font-semibold">
            <Camera className="w-3.5 h-3.5 text-spice-orange" />
            <span>Visual Feast</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50">
            Glimpses of <span className="text-spice-gold italic font-normal">Royal Craft & Ambiance</span>
          </h2>
          <p className="text-cream-400 text-base">
            Click any photograph to inspect the rich textures of our brass-plated thalis, stone-ground
            spices, and heritage dining room in full detail.
          </p>
        </div>

        {/* Responsive Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryImages.map((img, index) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative h-72 rounded-2xl overflow-hidden ornate-border text-left focus:outline-none focus:ring-2 focus:ring-spice-gold"
              aria-label={`View larger image of ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Zoom Icon Badge */}
              <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-charcoal-950/80 border border-spice-gold/40 flex items-center justify-center text-spice-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-spice-amber font-semibold block mb-1">
                  {img.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-cream-50 group-hover:text-spice-gold transition-colors">
                  {img.title}
                </h3>
                <p className="text-cream-200/80 text-xs mt-1 line-clamp-2">
                  {img.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={currentImage.title}
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-charcoal-900 rounded-3xl overflow-hidden border border-spice-gold/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-charcoal-950/90 text-cream-100 hover:text-spice-gold border border-spice-gold/40 flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous / Next Controls */}
            <button
              type="button"
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + galleryImages.length) % galleryImages.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-charcoal-950/85 text-cream-100 hover:text-spice-gold border border-spice-gold/40 flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % galleryImages.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-charcoal-950/85 text-cream-100 hover:text-spice-gold border border-spice-gold/40 flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-charcoal-950 flex items-center justify-center">
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-6 bg-charcoal-900 border-t border-spice-gold/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-spice-gold font-semibold">
                  {currentImage.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-cream-50">
                  {currentImage.title}
                </h3>
                <p className="text-cream-200/80 text-sm mt-1">{currentImage.caption}</p>
              </div>
              <span className="text-xs text-cream-400 shrink-0">
                {selectedIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
