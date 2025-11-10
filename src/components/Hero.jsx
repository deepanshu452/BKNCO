import React, { useEffect, useRef, useState } from 'react';

const slides = [
  { src: '/assets/hero1.webp', 
    alt: 'Empowering Growth', 
    title: 'Empowering Growth', 
    subtitle: 'Strategies to scale with confidence' },

  { src: '/assets/hero2.webp', 
    alt: 'Ensuring Compliance', 
    title: 'Ensuring Compliance', 
    subtitle: 'Robust structures. Trusted advice.' },

  { src: '/assets/hero3.webp', 
    alt: 'Enabling Confidence', 
    title: 'Enabling Confidence', 
    subtitle: 'Insight-driven financial leadership' },

  { src: '/assets/hero4.webp', 
    alt: 'Partnering for Success', 
    title: 'Partnering for Success', 
    subtitle: 'Long-term value, measurable results' },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const SLIDE_MS = 2000;

// debug for console
  useEffect(() => {
    slides.forEach((s) => console.log('[Hero] image path:', s.src));
  }, []);

  // autoplay
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, SLIDE_MS);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % slides.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + slides.length) % slides.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // helper to log image load errors for quick debugging
  const onImgError = (src) => {
    console.error(`[Hero] failed to load image: ${src} — check public/assets and filename/spelling`);
  };

  return (
    <section id="hero-section"
      className="relative w-full min-h-[38rem] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Hero carousel"
    >
      {/* image stack */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-linear ${i === index ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            onError={() => onImgError(s.src)}
            style={{ left: 0, top: 0 }}
          />
        ))}
        {/* overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* foreground content */}
      <div className="relative z-20 container mx-auto px-5 py-28 md:py-36 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
            {slides[index].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100/90">{slides[index].subtitle}</p>

          <div className="flex items-center gap-4">
            <Link to="/services" className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-4 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition">
              Discover Our Services
            </Link>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all focus:outline-none ${i === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* prev/next */}
      <div className="absolute inset-y-0 right-6 flex items-center gap-3 z-30 hidden md:flex">
        <button onClick={prev} className="bg-black/40 p-2 rounded-full hover:bg-black/50 transition" aria-label="Previous slide">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={next} className="bg-black/40 p-2 rounded-full hover:bg-black/50 transition" aria-label="Next slide">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}
