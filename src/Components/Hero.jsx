'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';

/* ─── Slide data ─── */
const SLIDES = [
  {
    id: 's1',
    num: '01',
    tag: 'B2B Manufacturing',
    h1: 'Built for',
    h2: 'Champions.',
    sub: 'Enterprise-grade sportswear at scale. Precision craftsmanship for brands that refuse to compromise.',
    cta: { label: 'Explore Catalog', href: '/products' },
    img: '/slide1.png',
  },
  {
    id: 's2',
    num: '02',
    tag: 'OEM & White Label',
    h1: 'Your Brand,',
    h2: 'Our Craft.',
    sub: 'Full custom manufacturing — your cut, fabric, and identity. Sample to mass production in 2 weeks.',
    cta: { label: 'View Products', href: '/products' },
    img: '/slide2.png',
  },
  {
    id: 's3',
    num: '03',
    tag: 'ISO Certified Quality',
    h1: 'Crafted with',
    h2: 'Precision.',
    sub: 'ISO-certified facility. Five-stage quality control. 99% defect-free rate across every production run.',
    cta: { label: 'Our Standards', href: '/about' },
    img: '/slide3.png',
  },
  {
    id: 's4',
    num: '04',
    tag: 'Global Reach',
    h1: 'Outfitting',
    h2: 'The World.',
    sub: '150+ brand partners. 60+ countries served. Championship-level gear delivered on time, every time.',
    cta: { label: 'About Us', href: '/about' },
    img: '/slide4.png',
  },
];

const DELAY = 6000;

/* ─── Framer Motion Variants for Text Reveal ─── */
const textBlock = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const line = {
  hidden: { y: '105%', opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: '-105%', opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const sw = useRef(null);
  const [active, setActive] = useState(0);
  const [prog, setProg] = useState(0);
  const ticker = useRef(null);

  const startTicker = useCallback(() => {
    setProg(0);
    clearInterval(ticker.current);
    const step = (50 / DELAY) * 100;
    ticker.current = setInterval(() => {
      setProg((p) => {
        if (p + step >= 100) {
          clearInterval(ticker.current);
          return 100;
        }
        return +(p + step).toFixed(2);
      });
    }, 50);
  }, []);

  useEffect(() => {
    startTicker();
  }, [active, startTicker]);

  useEffect(() => () => clearInterval(ticker.current), []);

  const onSlideChange = (s) => setActive(s.realIndex);
  const goTo = (i) => {
    sw.current?.slideToLoop(i);
  };
  const goPrev = () => sw.current?.slidePrev();
  const goNext = () => sw.current?.slideNext();

  const s = SLIDES[active];

  return (
    <>
      <section className="hr">
        {/* Subtle grid lines for high-end technical feel */}
        <div className="hr-grid">
          <div className="hr-grid-line" />
          <div className="hr-grid-line" />
          <div className="hr-grid-line" />
          <div className="hr-grid-line" />
        </div>

        {/* ── Background images via Swiper ── */}
        <Swiper
          onSwiper={(ref) => {
            sw.current = ref;
          }}
          onSlideChange={onSlideChange}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: DELAY, disableOnInteraction: false }}
          loop
          speed={1000}
          className="hr-swiper"
        >
          {SLIDES.map((sl) => (
            <SwiperSlide key={sl.id}>
              <Image
                src={sl.img}
                alt={sl.tag}
                fill
                priority
                sizes="100vw"
                className="hr-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── Overlays: dark horizontal and vertical gradients for contrast ── */}
        <div className="hr-ov" />

        {/* ── Animated text content (Left-Bottom aligned) ── */}
        <div className="hr-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.id}
              variants={textBlock}
              initial="hidden"
              animate="show"
              exit="exit"
              className="hr-block"
            >
              {/* Tag/Index */}
              <div style={{ overflow: 'hidden', paddingBottom: '2px' }}>
                <motion.span className="hr-tag" variants={line}>
                  <span className="hr-tag-num">{s.num}</span> &mdash; {s.tag}
                </motion.span>
              </div>

              {/* Headline */}
              <div style={{ overflow: 'hidden', paddingBottom: '4px' }}>
                <motion.h1 className="hr-h1" variants={line}>
                  <span>{s.h1}</span> <br />
                  <span className="hr-outline">{s.h2}</span>
                </motion.h1>
              </div>

              {/* Subtext */}
              <div style={{ overflow: 'hidden', paddingBottom: '4px' }}>
                <motion.p className="hr-sub" variants={line}>
                  {s.sub}
                </motion.p>
              </div>

              {/* CTA Row */}
              <div style={{ overflow: 'hidden', paddingTop: '8px' }}>
                <motion.div className="hr-ctas" variants={line}>
                  <Link href={s.cta.href} className="hr-btn">
                    <span>{s.cta.label}</span>
                    <svg className="hr-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="hr-ghost">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Right-Side Vertical Control Panel ── */}
        <div className="hr-controls">
          {/* Arrow Up (Prev) */}
          <button onClick={goPrev} aria-label="Previous Slide" className="hr-ctrl-btn">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 15l8-8 8 8" />
            </svg>
          </button>

          {/* Vertical Dash indicators */}
          <div className="hr-ctrl-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`hr-ctrl-dot${i === active ? ' hr-ctrl-dot-on' : ''}`}
              />
            ))}
          </div>

          {/* Arrow Down (Next) */}
          <button onClick={goNext} aria-label="Next Slide" className="hr-ctrl-btn">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 9l-8 8-8-8" />
            </svg>
          </button>
        </div>

        {/* ── Clean Bottom Progress Line ── */}
        <div className="hr-prog">
          <div className="hr-prog-fill" style={{ width: `${prog}%` }} />
        </div>
      </section>

      {/* ─────────── STYLES ─────────── */}
      <style>{`
        /* Base Section */
        .hr {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 680px;
          overflow: hidden;
          background: #000000;
          font-family: 'Inter', -apple-system, sans-serif;
        }

        /* Subtle grid lines for high-end technical feel */
        .hr-grid {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          justify-content: space-between;
          pointer-events: none;
          padding: 0 clamp(2rem, 6vw, 6rem);
        }
        .hr-grid-line {
          width: 1px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.02) 50%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        /* Swiper background */
        .hr-swiper {
          position: absolute !important;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .hr-img {
          object-fit: cover;
          object-position: center;
          filter: grayscale(100%);
          mix-blend-mode: screen;
          opacity: 0.85;
          transform: scale(1.06);
          transition: transform 8s cubic-bezier(0.16, 1, 0.3, 1) !important;
          will-change: transform;
        }
        .swiper-slide-active .hr-img {
          transform: scale(1) !important;
        }

        /* Visual Overlays: dark gradient for text contrast */
        .hr-ov {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.6) 40%,
            rgba(0, 0, 0, 0.25) 75%,
            transparent 100%
          ),
          linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            transparent 100%
          );
        }

        /* Content stage (Bottom-Left aligned) */
        .hr-stage {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: flex-end;
          padding: 80px clamp(2rem, 6vw, 6rem) clamp(6rem, 8vw, 9rem);
        }

        /* Text block wrapper */
        .hr-block {
          max-width: 720px;
          width: 100%;
        }

        /* Modern pill tag */
        .hr-tag {
          display: inline-flex;
          align-items: center;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1.5rem;
        }
        .hr-tag-num {
          color: #FF6B00;
          font-weight: 800;
        }

        /* Bold Minimalist Uppercase Headline */
        .hr-h1 {
          font-size: clamp(3rem, 7.5vw, 6.2rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 0.9;
          color: #fff;
          margin: 0 0 1.8rem;
          text-transform: uppercase;
        }
        .hr-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.85);
          background: transparent;
        }

        /* Subtext */
        .hr-sub {
          font-size: clamp(0.9rem, 1.6vw, 1.05rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          max-width: 500px;
          margin: 0 0 2.4rem;
        }

        /* Action Buttons Row */
        .hr-ctas {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          flex-wrap: wrap;
        }

        /* Modern Solid Primary Button with sharp edges */
        .hr-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: inherit;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fff;
          background: #FF6B00;
          border: 1px solid #FF6B00;
          padding: 1rem 2.4rem;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .hr-btn:hover {
          background: transparent;
          color: #FF6B00;
          border-color: #FF6B00;
        }
        .hr-btn-arrow {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hr-btn:hover .hr-btn-arrow {
          transform: translateX(4px);
        }

        /* Minimal Text Underline Secondary Button */
        .hr-ghost {
          display: inline-flex;
          align-items: center;
          font-family: inherit;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          padding: 1rem 0;
          border-bottom: 2px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .hr-ghost:hover {
          color: #fff;
          border-bottom-color: #FF6B00;
        }

        /* ── Right-Side Vertical Control Panel ── */
        .hr-controls {
          position: absolute;
          top: 50%;
          right: clamp(1.5rem, 4vw, 4rem);
          transform: translateY(-50%);
          z-index: 25;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        /* Navigation Arrows */
        .hr-ctrl-btn {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          transition: color 0.3s, transform 0.3s;
          padding: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hr-ctrl-btn:hover {
          color: #FF6B00;
          transform: scale(1.15);
        }

        /* Vertical dash indicator lines */
        .hr-ctrl-dots {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .hr-ctrl-dot {
          width: 2px;
          height: 16px;
          background: rgba(255, 255, 255, 0.15);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s;
        }
        .hr-ctrl-dot-on {
          height: 48px;
          background: #FF6B00;
        }

        /* Fine progress line at bottom */
        .hr-prog {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(255, 255, 255, 0.03);
          z-index: 25;
        }
        .hr-prog-fill {
          height: 100%;
          background: #FF6B00;
          transition: width 0.05s linear;
        }

        /* Responsive styling */
        @media (max-width: 768px) {
          .hr-stage {
            padding: 96px 1.5rem clamp(5rem, 6vw, 7rem);
          }
          .hr-h1 {
            font-size: clamp(2.4rem, 9vw, 3.8rem);
          }
          .hr-sub {
            max-width: 100%;
          }
          .hr-controls {
            right: 1.25rem;
          }
          .hr-grid {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hr-ctas {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .hr-btn {
            justify-content: center;
          }
          .hr-ghost {
            justify-content: center;
            padding: 0.6rem 0;
          }
          .hr-controls {
            display: none; /* Hide control panel on very small screens to save space */
          }
        }
      `}</style>
    </>
  );
}