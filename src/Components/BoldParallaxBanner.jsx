'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BoldParallaxBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} style={{
      position: 'relative',
      height: '520px',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      background: '#050508',
    }}>
      {/* Dynamic Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/about-cta-bg.png"
          alt="Focused sporty athlete determined close up"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 30%',
            opacity: 0.7,
            filter: 'contrast(1.1) brightness(0.8)',
          }}
        />
        {/* Dark gradient overlay to blend into black and create high contrast readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #050508 0%, rgba(5,5,8,0.7) 40%, rgba(5,5,8,0.7) 60%, #050508 100%)',
        }} />
      </div>

      {/* Content Overlay */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '750px',
        padding: '0 2rem',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Eyebrow */}
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#FF6B00',
            display: 'block',
            marginBottom: '1.25rem',
          }}>
            Engineered for Victory
          </span>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            margin: '0 0 1.25rem',
            lineHeight: 1.1,
            textTransform: 'uppercase',
          }}>
            Unleash the{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Athlete Within</span>
          </h2>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            margin: '0 0 2.25rem',
          }}>
            From elite lacrosse and baseball uniforms to high-compression training gear. We manufacture high-performance athletic wear trusted by global teams and brands.
          </p>

          {/* CTA Button */}
          <Link href="/contact" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 800,
            fontSize: '0.85rem',
            color: '#ffffff',
            background: '#FF6B00',
            padding: '1rem 2.25rem',
            borderRadius: '4px', // standard border-radius token
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            boxShadow: '0 4px 20px rgba(255,107,0,0.3)',
            transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#111111';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,255,255,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#FF6B00';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,107,0,0.3)';
            }}
          >
            <span>Request Custom Samples</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
