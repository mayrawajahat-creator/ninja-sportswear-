'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fade = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CTABanner() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} style={{ background: '#fff', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: '#08080c',
            borderRadius: '8px',
            padding: 'clamp(2.5rem,5vw,4rem) clamp(2rem,5vw,4rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background image of athlete with dark gradient mask */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
            <Image
              src="/cta-athlete.png"
              alt="Athlete in motion"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.28 }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #08080c 45%, rgba(8,8,12,0.85) 60%, rgba(8,8,12,0.3) 100%)',
            }} />
          </div>
          {/* Subtle grid */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
            backgroundImage: 'linear-gradient(rgba(255,107,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          {/* Left content */}
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '520px' }}>
            <motion.div
              custom={1} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}
            >
              <div style={{ height: '1px', width: '24px', background: '#FF6B00', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FF6B00',
              }}>Ready to Scale?</span>
            </motion.div>

            <motion.h2
              custom={2} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
                fontWeight: 800, letterSpacing: '-0.03em',
                color: '#fff', margin: '0 0 0.65rem', lineHeight: 1.2,
              }}
            >
              Start Your Bulk Order{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Today</span>
            </motion.h2>

            <motion.p
              custom={3} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7, margin: 0,
              }}
            >
              Join 150+ brands that trust Ninja Sports Wear for premium B2B manufacturing. Custom quote within 24 hours.
            </motion.p>
          </div>

          {/* Right CTAs */}
          <motion.div
            custom={4} variants={fade} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{
              position: 'relative', zIndex: 1,
              display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center',
            }}
          >
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700, fontSize: '0.85rem', color: '#fff',
              background: '#FF6B00',
              padding: '0.8rem 1.75rem', borderRadius: '4px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(255,107,0,0.38)',
              transition: 'all 0.22s ease', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#FF7B1A';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,107,0,0.52)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#FF6B00';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,107,0,0.38)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Request a Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link href="/products" style={{
              display: 'inline-flex', alignItems: 'center',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600, fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.55)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '0.8rem 1.75rem', borderRadius: '4px',
              textDecoration: 'none', transition: 'all 0.22s ease', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'rgba(255,107,0,0.35)';
                e.currentTarget.style.background = 'rgba(255,107,0,0.07)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              View Catalog
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
